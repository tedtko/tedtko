import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { mailConfigured, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

// Stripe calls this when a checkout finishes. Card payments are paid at once.
// Bank payments such as ACH Direct Debit or SEPA are "delayed": the checkout
// completes as pending, then Stripe sends async_payment_succeeded or
// async_payment_failed a few business days later. We email the business at
// each step. Subscribe the webhook endpoint to all three events.
const EVENTS = new Set([
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
  "checkout.session.async_payment_failed",
]);

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) return NextResponse.json({ error: "Not configured" }, { status: 400 });

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    console.error("Webhook signature check failed", err);
    return NextResponse.json({ error: "Bad signature" }, { status: 400 });
  }

  if (!EVENTS.has(event.type)) return NextResponse.json({ received: true });

  const s = event.data.object as Stripe.Checkout.Session;
  const amount = `${((s.amount_total || 0) / 100).toFixed(2)} ${(s.currency || "gbp").toUpperCase()}`;
  const status =
    event.type === "checkout.session.async_payment_failed"
      ? "FAILED"
      : event.type === "checkout.session.async_payment_succeeded" || s.payment_status === "paid"
        ? "PAID"
        : "PENDING";

  const heading = {
    PAID: "Payment received.",
    PENDING: "Order placed with a bank payment (e.g. ACH or SEPA). The payment is PENDING and usually clears in a few business days. Wait for the 'Payment received' email before releasing final files.",
    FAILED: "The bank payment for this order FAILED. Do not release files; contact the customer to arrange payment.",
  }[status];

  const fields = (s.custom_fields || []).map((f) => `${f.label.custom}: ${f.text?.value || "-"}`).join("\n");
  const text = [
    heading,
    status !== "FAILED" && s.metadata?.kind === "package" ? "Ask the customer to upload measurements at /intake if they have not already." : "",
    "",
    `Type: ${s.metadata?.kind || "unknown"}${s.metadata?.package ? ` (${s.metadata.package} package)` : ""}`,
    s.metadata?.reference ? `Reference: ${s.metadata.reference}` : "",
    s.metadata?.requested_immediate_start ? `Requested immediate start: ${s.metadata.requested_immediate_start}` : "",
    `Amount: ${amount}`,
    `Name: ${s.customer_details?.name || s.metadata?.name || "-"}`,
    `Email: ${s.customer_details?.email || "-"}`,
    `Phone: ${s.customer_details?.phone || "-"}`,
    fields,
    "",
    `Stripe session: ${s.id}`,
  ]
    .filter((l, i, a) => l !== "" || (i > 0 && a[i - 1] !== ""))
    .join("\n");

  console.log(text);
  if (mailConfigured()) {
    const subject = { PAID: "Payment received", PENDING: "Bank payment pending", FAILED: "Bank payment FAILED" }[status];
    try {
      await sendMail({ subject: `${subject}: ${amount} (${s.metadata?.kind || "payment"})`, text, replyTo: s.customer_details?.email || undefined });
    } catch (err) {
      console.error("Failed to send payment email", err);
    }
  }

  return NextResponse.json({ received: true });
}
