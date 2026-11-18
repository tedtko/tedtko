import type { Metadata } from "next";
import { consultation, formatGBP, incVat, site } from "@/lib/site";
import CheckoutButton from "@/components/CheckoutButton";
import { IconClock, IconLock, IconPin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a Consultation & Site Survey",
  description: `Book an on-site design consultation anywhere in London for ${formatGBP(consultation.price)} + VAT, deducted from your project if you go ahead.`,
};

export default async function ConsultationPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book online</span>
          <h1>Consultation &amp; site survey</h1>
          <p className="lead">Meet our team at your property to plan your project properly from day one.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <h2>What&apos;s included</h2>
            <ul className="ticks">
              {consultation.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <ul className="contact-list" style={{ marginTop: 28 }}>
              <li><div className="stat-icon"><IconClock /></div><div><strong>{consultation.duration}</strong><small>We&apos;ll call to confirm a time that suits you</small></div></li>
              <li><div className="stat-icon"><IconPin /></div><div><strong>Anywhere in London</strong><small>Based in {site.base}</small></div></li>
            </ul>
          </div>
          <div className="card">
            {cancelled && <p className="alert alert-error">Payment cancelled. You have not been charged.</p>}
            <h3>{consultation.name}</h3>
            <div className="price">{formatGBP(consultation.price)} <small>+ VAT</small></div>
            <p className="note" style={{ margin: 0 }}>{formatGBP(incVat(consultation.price))} inc. VAT</p>
            <p className="alert alert-success" style={{ margin: "16px 0 20px" }}>{consultation.deductedNote}</p>
            <CheckoutButton payload={{ type: "consultation" }}>Book &amp; pay {formatGBP(incVat(consultation.price))} inc. VAT</CheckoutButton>
            <p className="secure"><IconLock size={16} /> Secure payment by Stripe. You&apos;ll add your postcode and preferred date at checkout.</p>
            <p className="note" style={{ marginTop: 16 }}>
              Prefer to talk first? Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
