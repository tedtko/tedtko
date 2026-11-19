"use client";

import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { lp, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/types";
import { IconWhatsApp } from "./Icons";
import { Wordmark } from "./Header";
import { openCookieSettings } from "./CookieBanner";

export default function Footer({ locale, f, waText }: { locale: Locale; f: Dict["footer"]; waText: string }) {
  const L = (p: string) => lp(locale, p);
  const wa = whatsappHref(waText);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ marginBottom: 16 }}><Wordmark light /></div>
              <p>{f.about}</p>
            </div>
            <div>
              <h2>{f.studio}</h2>
              <ul>
                <li><Link href={L("/packages")}>{f.links.packages}</Link></li>
                <li><Link href={L("/how-it-works")}>{f.links.how}</Link></li>
                <li><Link href={L("/sample-deliverables")}>{f.links.samples}</Link></li>
                <li><Link href={L("/faq")}>{f.links.faq}</Link></li>
                <li><Link href={L("/intake")}>{f.links.intake}</Link></li>
                <li><Link href={L("/pay")}>{f.links.pay}</Link></li>
              </ul>
            </div>
            <div>
              <h2>{f.legal}</h2>
              <ul>
                <li><Link href={L("/terms")}>{f.links.terms}</Link></li>
                <li><Link href={L("/refund-policy")}>{f.links.refund}</Link></li>
                <li><Link href={L("/privacy-policy")}>{f.links.privacy}</Link></li>
                <li><Link href={L("/cookie-policy")}>{f.links.cookies}</Link></li>
                <li><Link href={L("/legal-notice")}>{f.links.notice}</Link></li>
                <li><button type="button" className="linkbtn" onClick={openCookieSettings}>{f.links.cookieSettings}</button></li>
              </ul>
            </div>
            <div>
              <h2>{f.contact}</h2>
              <ul>
                <li><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a></li>
                <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
                <li><a href={wa} target="_blank" rel="noopener noreferrer">{f.whatsapp}</a></li>
                <li>{f.replyWithin}</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <p><strong>{f.registered}</strong></p>
            <p>{f.companyNo}: {site.companyNumber}</p>
            <p>{f.office}: {site.registeredOffice}</p>
            {site.vatNumber && <p>{f.vat}: {site.vatNumber}</p>}
            <p>
              {f.email}: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> | {f.phone}:{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p style={{ marginTop: 10 }}>© {new Date().getFullYear()} {site.legalName}. {f.arb}</p>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={wa} target="_blank" rel="noopener noreferrer" aria-label={f.whatsapp}>
        <IconWhatsApp size={30} />
      </a>
    </>
  );
}
