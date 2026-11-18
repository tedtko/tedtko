import Link from "next/link";
import { services, site } from "@/lib/site";
import { IconWhatsApp } from "./Icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img className="footer-logo" src="/logo.png" alt={site.name} width={200} height={132} />
              <p>
                {site.tagline}. Construction, refurbishment, planning and architectural drawings. Based in {site.base},
                working {site.coverage}.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}><Link href={`/services#${s.slug}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Online</h4>
              <ul>
                <li><Link href="/quote">Get a free quote</Link></li>
                <li><Link href="/planning-drawings">Drawing packages</Link></li>
                <li><Link href="/consultation">Book a survey</Link></li>
                <li><Link href="/pay">Pay an invoice</Link></li>
                <li><Link href="/projects">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
                <li><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{site.base}, London</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span>Secure online payments powered by Stripe</span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <IconWhatsApp size={32} />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
}
