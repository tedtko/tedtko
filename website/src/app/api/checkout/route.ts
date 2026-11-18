import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { VAT_RATE, invoiceLimits, packages, site } from "@/lib/site";

export const runtime = "nodejs";

type Body =
  | { type: "package"; id: string; agreeTerms: boolean; requestStart: boolean }
  | { type: "invoice"; amount: number | string; reference: string; name: string; email: string };

const clean = (v: unknown, max = 100) => String(v ?? "").trim().slice(0, max);

const vatLine = (netPounds: number): Stripe.Checkout.SessionCreateParams.LineItem => ({
  quantity: 1,
  price_data: {
    currency: "gbp",
    unit_amount: Math.round(netPounds * 100 * VAT_RATE),
    product_data: { name: `VAT (${Math.round(VAT_RATE * 100)}%)` },
  },
});

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
  const success_url = `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`;
  let params: Stripe.Checkout.SessionCreateParams;

  if (body.type === "package") {
    const pkg = packages.find((p) => p.id === body.id);
    if (!pkg) return NextResponse.json({ error: "Unknown package" }, { status: 400 });
    if (!body.agreeTerms) {
      return NextResponse.json({ error: "Please confirm you agree to the Terms and the Refund & Cancellation Policy." }, { status: 400 });
    }

    // Optional: use a hosted payment link (e.g. Dodo Payments or a Stripe
    // Payment Link) instead of Stripe Checkout. Set PAYMENT_LINK_ESSENTIAL etc.
    const link = process.env[`PAYMENT_LINK_${pkg.id.toUpperCase()}`];
    if (link) return NextResponse.json({ url: link });

    params = {
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: pkg.price * 100,
            product_data: {
              name: `${pkg.name} Digital Drawing Pack`,
              description: pkg.subtitle,
            },
          },
        },
        vatLine(pkg.price),
      ],
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      custom_fields: [
        {
          key: "projectaddress",
          label: { type: "custom", custom: "Project property address & postcode" },
          type: "text",
        },
      ],
      // Record of the customer's consent, kept with the payment.
      metadata: {
        kind: "package",
        package: pkg.id,
        agreed_terms: "yes",
        requested_immediate_start: body.requestStart ? "yes" : "no",
        consent_time: new Date().toISOString(),
      },
      success_url,
      cancel_url: `${origin}/packages?cancelled=1`,
    };
  } else if (body.type === "invoice") {
    const amount = Math.round(Number(body.amount) * 100) / 100;
    const reference = clean(body.reference, 40);
    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    if (!Number.isFinite(amount) || amount < invoiceLimits.min || amount > invoiceLimits.max) {
      return NextResponse.json(
        { error: `Please enter an amount between £${invoiceLimits.min} and £${invoiceLimits.max.toLocaleString("en-GB")}.` },
        { status: 400 },
      );
    }
    if (!reference || !name || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please fill in your name, email and invoice number." }, { status: 400 });
    }
    params = {
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: Math.round(amount * 100),
            product_data: {
              name: `Invoice ${reference}`,
              description: `Payment to ${site.legalName} t/a ${site.tradingName}`,
            },
          },
        },
      ],
      payment_intent_data: { description: `Invoice ${reference} - ${name}` },
      metadata: { kind: "invoice", reference, name },
      success_url,
      cancel_url: `${origin}/pay?cancelled=1`,
    };
  } else {
    return NextResponse.json({ error: "Unknown payment type" }, { status: 400 });
  }

  try {
    const session = await getStripe().checkout.sessions.create(params);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error", err);
    return NextResponse.json(
      { error: `Online ordering is temporarily unavailable. Please email ${site.supportEmail}.` },
      { status: 500 },
    );
  }
}
