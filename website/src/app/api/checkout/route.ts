import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { VAT_RATE, invoiceCurrencies, invoiceLimits, packages, site, type Currency, type InvoiceCurrency } from "@/lib/site";
import { currencyFor, defaultLocale, isLocale, lp, type Locale } from "@/i18n/config";

export const runtime = "nodejs";

type Body =
  | { type: "package"; id: string; agreeTerms: boolean; requestStart: boolean; locale?: string }
  | { type: "invoice"; amount: number | string; reference: string; name: string; email: string; currency?: string; locale?: string };

const clean = (v: unknown, max = 100) => String(v ?? "").trim().slice(0, max);
// Errors return a code; the browser shows the message in the visitor's language.
const fail = (code: string, status = 400) => NextResponse.json({ code }, { status });

const vatLine = (net: number, currency: Currency): Stripe.Checkout.SessionCreateParams.LineItem => ({
  quantity: 1,
  price_data: {
    currency: currency.toLowerCase(),
    unit_amount: Math.round(net * 100 * VAT_RATE),
    product_data: { name: `UK VAT (${Math.round(VAT_RATE * 100)}%)` },
  },
});

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return fail("generic");
  }

  const locale: Locale = body.locale && isLocale(body.locale) ? body.locale : defaultLocale;
  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
  const success_url = `${origin}${lp(locale, "/payment/success")}?session_id={CHECKOUT_SESSION_ID}`;
  // Stripe Checkout supports all five site languages.
  const stripeLocale = (locale === "us" ? "en" : locale) as Stripe.Checkout.SessionCreateParams.Locale;
  let params: Stripe.Checkout.SessionCreateParams;

  if (body.type === "package") {
    const pkg = packages.find((p) => p.id === body.id);
    if (!pkg) return fail("generic");
    if (!body.agreeTerms) return fail("terms_required");

    // English site: pounds. German/French/Spanish/Italian sites: euros.
    const currency = currencyFor(locale);
    const net = pkg.price[currency];

    // Optional: send customers to a hosted payment link (e.g. Dodo Payments or a
    // Stripe Payment Link) instead. Set PAYMENT_LINK_ESSENTIAL (pounds) and
    // PAYMENT_LINK_ESSENTIAL_EUR (euros), etc.
    const link = process.env[`PAYMENT_LINK_${pkg.id.toUpperCase()}${currency === "GBP" ? "" : `_${currency}`}`];
    if (link) return NextResponse.json({ url: link });

    const name = pkg.id.charAt(0).toUpperCase() + pkg.id.slice(1);
    params = {
      mode: "payment",
      locale: stripeLocale,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: currency.toLowerCase(),
            unit_amount: Math.round(net * 100),
            product_data: { name: `${name} Digital CAD Drawing Pack`, description: "Remote CAD drafting. Digital delivery (PDF & DWG)." },
          },
        },
        vatLine(net, currency),
      ],
      phone_number_collection: { enabled: true },
      billing_address_collection: "required",
      custom_fields: [
        { key: "projectaddress", label: { type: "custom", custom: "Project property address" }, type: "text" },
      ],
      // Record of the customer's consent, kept with the payment.
      metadata: {
        kind: "package",
        package: pkg.id,
        currency,
        agreed_terms: "yes",
        requested_immediate_start: body.requestStart ? "yes" : "no",
        consent_time: new Date().toISOString(),
        site_language: locale,
      },
      success_url,
      cancel_url: `${origin}${lp(locale, "/packages")}?cancelled=1`,
    };
  } else if (body.type === "invoice") {
    const amount = Math.round(Number(body.amount) * 100) / 100;
    const reference = clean(body.reference, 40);
    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    const requested = String(body.currency || "").toUpperCase() as InvoiceCurrency;
    const currency: InvoiceCurrency = invoiceCurrencies.includes(requested) ? requested : currencyFor(locale);
    if (!Number.isFinite(amount) || amount < invoiceLimits.min || amount > invoiceLimits.max) return fail("invalid_amount");
    if (!reference || !name || !/^\S+@\S+\.\S+$/.test(email)) return fail("missing_fields");
    params = {
      mode: "payment",
      locale: stripeLocale,
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: currency.toLowerCase(),
            unit_amount: Math.round(amount * 100),
            product_data: { name: `Invoice ${reference}`, description: `Payment to ${site.legalName} t/a ${site.tradingName}` },
          },
        },
      ],
      payment_intent_data: { description: `Invoice ${reference} - ${name}` },
      metadata: { kind: "invoice", reference, name, currency, site_language: locale },
      success_url,
      cancel_url: `${origin}${lp(locale, "/pay")}?cancelled=1`,
    };
  } else {
    return fail("generic");
  }

  try {
    const session = await getStripe().checkout.sessions.create(params);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error", err);
    return fail("unavailable", 500);
  }
}
