import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import IntakeForm from "@/components/IntakeForm";
import Rich from "@/components/Rich";
import { PageHero } from "@/components/Sections";
import { IconMail, IconPhone, IconWhatsApp } from "@/components/Icons";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/contact", d.contact.metaTitle, d.contact.metaDescription);
}

export default async function ContactPage({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  const c = d.contact;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <section className="section">
        <div className="container split">
          <div>
            <ul className="contact-list">
              <li><div className="ico"><IconMail /></div><div><a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a><small>{c.emailNote}</small></div></li>
              <li><div className="ico"><IconPhone /></div><div><a href={site.phoneHref}>{site.phoneDisplay}</a><small>{c.phoneNote}</small></div></li>
              <li><div className="ico"><IconWhatsApp /></div><div><a href={whatsappHref(c.waText)} target="_blank" rel="noopener noreferrer">{c.whatsapp}</a><small>{c.whatsappNote}</small></div></li>
            </ul>
            <div className="notice" style={{ marginTop: 28 }}><Rich text={c.already} locale={locale} /></div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: "1.4rem" }}>{c.formTitle}</h2>
            <IntakeForm kind="contact" locale={locale} f={d.forms} errors={d.errors} packNames={Object.values(d.packages.items).map((p) => p.name)} />
          </div>
        </div>
      </section>
    </>
  );
}
