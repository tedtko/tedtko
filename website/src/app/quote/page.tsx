import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";
import { IconMail, IconPhone, IconWhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free quote for building, refurbishment, extension, loft or planning drawing work anywhere in London.",
};

export default function QuotePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Free, no-obligation</span>
          <h1>Get a quote</h1>
          <p className="lead">Tell us about your project and we&apos;ll get back to you, usually within one working day.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split split-wide" style={{ alignItems: "start" }}>
          <div className="card"><QuoteForm /></div>
          <aside>
            <h3>Prefer to talk?</h3>
            <ul className="contact-list">
              <li><div className="stat-icon"><IconPhone /></div><div><a href={site.phoneHref}>{site.phoneDisplay}</a><small>Call us</small></div></li>
              <li><div className="stat-icon" style={{ background: "#e3f8ea", color: "#128c3e" }}><IconWhatsApp /></div><div><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a><small>Send photos of your project</small></div></li>
              <li><div className="stat-icon"><IconMail /></div><div><a href={`mailto:${site.email}`}>{site.email}</a><small>Email us</small></div></li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
