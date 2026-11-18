"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { IconWhatsApp } from "./Icons";
import { Wordmark } from "./Header";
import { openCookieSettings } from "./CookieBanner";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ marginBottom: 16 }}><Wordmark light /></div>
              <p>
                Remote architectural CAD drawings, 2D &amp; 3D design packs and planning &amp; building regulations
                drawing files, produced from your measurements and photos and delivered digitally.
              </p>
            </div>
            <div>
              <h2>Studio</h2>
              <ul>
                <li><Link href="/packages">Drawing packages</Link></li>
                <li><Link href="/how-it-works">How it works</Link></li>
                <li><Link href="/sample-deliverables">Sample deliverables</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/intake">Upload measurements</Link></li>
                <li><Link href="/pay">Pay a balance</Link></li>
              </ul>
            </div>
            <div>
              <h2>Legal</h2>
              <ul>
                <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-policy">Refund &amp; Cancellation Policy</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
                <li><button type="button" className="linkbtn" onClick={openCookieSettings}>Cookie Settings</button></li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></li>
                <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
                <li><a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us<span className="sr-only"> (opens in a new tab)</span></a></li>
                <li>We reply within {site.responseTime}</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <p><strong>{site.legalName} trading as {site.tradingName}. Registered in England &amp; Wales.</strong></p>
            <p>Company Registration Number: {site.companyNumber}</p>
            <p>Registered Office: {site.registeredOffice}</p>
            {site.vatNumber && <p>VAT Number: {site.vatNumber}</p>}
            <p>
              Email: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> | Phone:{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p style={{ marginTop: 10 }}>
              © {new Date().getFullYear()} {site.legalName}. An architectural CAD design &amp; drafting studio. Not
              registered with the ARB.
            </p>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={site.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp (opens in a new tab)">
        <IconWhatsApp size={30} />
      </a>
    </>
  );
}
