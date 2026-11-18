import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Payment received", robots: { index: false } };

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let amount = "";
  let email = "";
  let paid = false;
  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const s = await getStripe().checkout.sessions.retrieve(session_id);
      paid = s.payment_status === "paid";
      amount = `£${((s.amount_total || 0) / 100).toFixed(2)}`;
      email = s.customer_details?.email || "";
    } catch {
      /* show generic message */
    }
  }

  return (
    <section className="section">
      <div className="container center" style={{ maxWidth: 680 }}>
        <div className="card">
          <span className="eyebrow">{paid ? "Payment successful" : "Thank you"}</span>
          <h1 style={{ fontSize: "2.6rem" }}>Thank you!</h1>
          <p className="lead">
            {paid ? `We've received your payment of ${amount}.` : "Your payment is being processed."}{" "}
            {email && `A receipt has been sent to ${email}. `}
            We&apos;ll be in touch within one working day to arrange the next steps.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/" className="btn btn-primary">Back to home</Link>
            <a href={site.phoneHref} className="btn btn-outline">Call {site.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
