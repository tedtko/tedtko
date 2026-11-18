import type { Metadata } from "next";
import InvoiceForm from "@/components/InvoiceForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pay an Invoice",
  description: `Pay your ${site.name} invoice securely online by card, Apple Pay or Google Pay.`,
};

export default async function PayPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Existing clients</span>
          <h1>Pay an invoice</h1>
          <p className="lead">Pay securely by card, Apple Pay or Google Pay. Enter the invoice number and amount shown on your invoice.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {cancelled && <p className="alert alert-error" style={{ marginBottom: 20 }}>Payment cancelled. You have not been charged.</p>}
          <div className="card"><InvoiceForm /></div>
          <p className="note center" style={{ marginTop: 20 }}>
            Questions about your invoice? Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
