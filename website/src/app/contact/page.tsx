import type { Metadata } from "next";
import { boroughs, site } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}: Croydon-based builders working across London. Call, WhatsApp or email us.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Contact us</h1>
          <p className="lead">Call, WhatsApp or send us a message. We&apos;re happy to talk through any project.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div>
            <ul className="contact-list">
              <li><div className="stat-icon"><IconPhone /></div><div><a href={site.phoneHref}>{site.phoneDisplay}</a><small>Phone</small></div></li>
              <li><div className="stat-icon" style={{ background: "#e3f8ea", color: "#128c3e" }}><IconWhatsApp /></div><div><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a><small>Quickest way to send photos</small></div></li>
              <li><div className="stat-icon"><IconMail /></div><div><a href={`mailto:${site.email}`}>{site.email}</a><small>Email</small></div></li>
              <li><div className="stat-icon"><IconPin /></div><div><strong>{site.base}, London</strong><small>Covering all {boroughs.length} London boroughs</small></div></li>
            </ul>
          </div>
          <div className="card">
            <h3>Send us a message</h3>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
