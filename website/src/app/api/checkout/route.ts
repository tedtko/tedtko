import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { VAT_RATE, consultation, invoiceLimits, packages, site } from "@/lib/site";

const vatLine = (netPounds: number): Stripe.Checkout.SessionCreateParams.LineItem => ({
  quantity: 1,
  price_data: {
    currency: "gbp",
    unit_amount: Math.round(netPounds * 100 * VAT_RATE),
    product_data: { name: `VAT (${Math.round(VAT_RATE * 100)}%)` },
  },
});

export const runtime = "nodejs";

type Body =
  | { type: "package"; id: string }
  | { type: "consultation" }
  | { type: "invoice"; amount: number | string; invoiceNumber: string; name: string; email: string };

const clean = (v: unknown, max = 100) => String(v ?? "").trim().slice(0, max);

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
    params = {
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: pkg.price * 100,
            product_data: {
              name: `${pkg.name} Planning & Drawings Package`,
              description: pkg.summary,
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
          label: { type: "custom", custom: "Project address & postcode" },
          type: "text",
        },
      ],
      metadata: { kind: "package", package: pkg.id },
      success_url,
      cancel_url: `${origin}/planning-drawings?cancelled=1`,
    };
  } else if (body.type === "consultation") {
    params = {
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: consultation.price * 100,
            product_data: {
              name: consultation.name,
              description: consultation.deductedNote,
            },
          },
        },
        vatLine(consultation.price),
      ],
      phone_number_collection: { enabled: true },
      custom_fields: [
        {
          key: "postcode",
          label: { type: "custom", custom: "Property postcode" },
          type: "text",
        },
        {
          key: "preferreddate",
          label: { type: "custom", custom: "Preferred date / time" },
          type: "text",
          optional: true,
        },
      ],
      metadata: { kind: "consultation" },
      success_url,
      cancel_url: `${origin}/consultation?cancelled=1`,
    };
  } else if (body.type === "invoice") {
    const amount = Math.round(Number(body.amount) * 100) / 100;
    const invoiceNumber = clean(body.invoiceNumber, 40);
    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    if (!Number.isFinite(amount) || amount < invoiceLimits.min || amount > invoiceLimits.max) {
      return NextResponse.json(
        { error: `Please enter an amount between £${invoiceLimits.min} and £${invoiceLimits.max.toLocaleString("en-GB")}.` },
        { status: 400 },
      );
    }
    if (!invoiceNumber || !name || !/^\S+@\S+\.\S+$/.test(email)) {
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
            product_data: { name: `Invoice ${invoiceNumber}`, description: `Payment to ${site.name}` },
          },
        },
      ],
      payment_intent_data: { description: `Invoice ${invoiceNumber} - ${name}` },
      metadata: { kind: "invoice", invoiceNumber, name },
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
    console.error("Stripe checkout error", err);
    return NextResponse.json(
      { error: "Online payment is temporarily unavailable. Please call or WhatsApp us." },
      { status: 500 },
    );
  }
}
