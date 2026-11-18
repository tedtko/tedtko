import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Order received", robots: { index: false } };

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let amount = "";
  let email = "";
  let paid = false;
  let isPackage = true;
  let ref = "";
  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const s = await getStripe().checkout.sessions.retrieve(session_id);
      paid = s.payment_status === "paid";
      amount = `£${((s.amount_total || 0) / 100).toFixed(2)}`;
      email = s.customer_details?.email || "";
      isPackage = s.metadata?.kind === "package";
      ref = s.id.slice(-10).toUpperCase();
    } catch {
      /* fall back to generic message */
    }
  }

  return (
    <section className="section">
      <div className="container center" style={{ maxWidth: 700 }}>
        <div className="card">
          <span className="eyebrow">{paid ? "Payment successful" : "Thank you"}</span>
          <h1 style={{ fontSize: "2.2rem" }}>Thank you for your order</h1>
          <p className="lead">
            {paid ? `We've received your payment of ${amount}.` : "Your payment is being processed."}{" "}
            {email && `A receipt has been sent to ${email}.`}
          </p>
          {ref && <p><strong>Your order reference: {ref}</strong></p>}
          {isPackage && (
            <>
              <p>
                <strong>Next step:</strong> upload your measurements, sketches and photos so we can begin drafting.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href={`/intake${ref ? `?ref=${ref}` : ""}`} className="btn btn-primary">Upload measurements &amp; photos</Link>
              </div>
            </>
          )}
          <p className="fineprint" style={{ marginTop: 18 }}>
            Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. We reply within {site.responseTime}.
          </p>
        </div>
      </div>
    </section>
  );
}
