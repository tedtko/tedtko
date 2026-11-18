import type { Metadata } from "next";
import InvoiceForm from "@/components/InvoiceForm";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pay an Invoice",
  description: `Pay your ${site.tradingName} invoice securely online by card, Apple Pay or Google Pay.`,
};

export default async function PayPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Existing clients"
        title="Pay an invoice"
        lead="Pay your invoice securely by card, Apple Pay or Google Pay. Enter the invoice number and the total due (inc. VAT) shown on your invoice."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {cancelled && <p className="alert alert-error" role="alert" style={{ marginBottom: 20 }}>Payment cancelled. You have not been charged.</p>}
          <div className="card"><InvoiceForm /></div>
          <p className="fineprint center" style={{ marginTop: 18 }}>
            Questions about an invoice? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
