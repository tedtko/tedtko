import type { Metadata } from "next";
import { site } from "@/lib/site";
import IntakeForm from "@/components/IntakeForm";
import { PageHero } from "@/components/Sections";
import { IconMail, IconPhone, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.tradingName}. Questions about our remote drawing packs answered within ${site.responseTime}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact us" lead={`Questions before you order? We reply within ${site.responseTime}.`} />
      <section className="section">
        <div className="container split">
          <div>
            <ul className="contact-list">
              <li><div className="ico"><IconMail /></div><div><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><small>Email, the best way to reach us</small></div></li>
              <li><div className="ico"><IconPhone /></div><div><a href={site.phoneHref}>{site.phoneDisplay}</a><small>Phone</small></div></li>
              <li><div className="ico"><IconWhatsApp /></div><div><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">Message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span></a><small>Quick questions</small></div></li>
            </ul>
            <div className="notice" style={{ marginTop: 28 }}>
              Already ordered? <a href="/intake">Upload your measurements and photos here</a>.
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: "1.4rem" }}>Send us a message</h2>
            <IntakeForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
