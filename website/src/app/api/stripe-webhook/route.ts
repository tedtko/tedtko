import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { mailConfigured, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

// Stripe calls this after a successful payment. It emails the business with
// the details (customer, phone, project address, preferred date).
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

  if (event.type === "checkout.session.completed") {
    const s = event.data.object as Stripe.Checkout.Session;
    const fields = (s.custom_fields || [])
      .map((f) => `${f.label.custom}: ${f.text?.value || "-"}`)
      .join("\n");
    const text = [
      `New online order received. Ask the customer to upload measurements at /intake if they have not already.`,
      ``,
      `Type: ${s.metadata?.kind || "unknown"}${s.metadata?.package ? ` (${s.metadata.package} package)` : ""}`,
      s.metadata?.reference ? `Reference: ${s.metadata.reference}` : "",
      s.metadata?.requested_immediate_start ? `Requested immediate start: ${s.metadata.requested_immediate_start}` : "",
      `Amount: ${((s.amount_total || 0) / 100).toFixed(2)} ${(s.currency || "gbp").toUpperCase()}`,
      `Name: ${s.customer_details?.name || s.metadata?.name || "-"}`,
      `Email: ${s.customer_details?.email || "-"}`,
      `Phone: ${s.customer_details?.phone || "-"}`,
      fields,
      ``,
      `Stripe session: ${s.id}`,
    ]
      .filter((l) => l !== "")
      .join("\n");

    console.log(text);
    if (mailConfigured()) {
      try {
        await sendMail({
          subject: `Payment received: ${((s.amount_total || 0) / 100).toFixed(2)} ${(s.currency || "gbp").toUpperCase()} (${s.metadata?.kind})`,
          text,
          replyTo: s.customer_details?.email || undefined,
        });
      } catch (err) {
        console.error("Failed to send payment email", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
