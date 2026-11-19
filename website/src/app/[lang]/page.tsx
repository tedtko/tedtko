import type { Metadata } from "next";
import Link from "next/link";
import { lp } from "@/i18n/config";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import { IconBolt, IconCloud, IconRuler, IconTag } from "@/components/Icons";
import { FloorPlan } from "@/components/Illustrations";
import { CtaBand, FaqList, PackagesGrid, SamplesGrid, StepsGrid } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return { ...pageMeta(locale, "/", d.meta.siteTitle, d.meta.siteDescription), title: { absolute: `Fair Trade Design Studio | ${d.meta.siteTitle}` } };
}

const badgeIcons = [IconCloud, IconTag, IconRuler, IconBolt];

export default async function Home({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  const h = d.home;
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">{d.hero.eyebrow}</span>
            <h1>{d.hero.titleA} <em>{d.hero.titleB}</em></h1>
            <p className="lead">{d.hero.lead}</p>
            <ul className="badges" aria-label={d.hero.badgesLabel}>
              {d.hero.badges.map((b, i) => {
                const I = badgeIcons[i];
                return <li key={b}><I size={22} /> {b}</li>;
              })}
            </ul>
            <div className="btn-row">
              <Link href={lp(locale, "/packages")} className="btn btn-primary">{d.hero.ctaPrimary}</Link>
              <Link href={lp(locale, "/how-it-works")} className="btn btn-outline">{d.hero.ctaSecondary}</Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden>
            <div className="bar"><i /><i /><i /><span>{d.samplesFigures.fileName}</span></div>
            <div className="drawing"><FloorPlan /></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="packages-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">{h.packagesEyebrow}</span>
            <h2 id="packages-h">{h.packagesTitle}</h2>
            <p className="lead">{h.packagesLead}</p>
          </div>
          <PackagesGrid locale={locale} d={d} />
        </div>
      </section>

      <section className="section section-slate" aria-labelledby="how-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">{h.howEyebrow}</span>
            <h2 id="how-h">{h.howTitle}</h2>
            <p className="lead">{h.howLead}</p>
          </div>
          <StepsGrid steps={d.steps} />
        </div>
      </section>

      <section className="section" aria-labelledby="samples-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">{h.samplesEyebrow}</span>
            <h2 id="samples-h">{h.samplesTitle}</h2>
          </div>
          <SamplesGrid d={d} limit={3} />
          <div className="center" style={{ marginTop: 24 }}>
            <Link href={lp(locale, "/sample-deliverables")} className="btn btn-outline">{h.samplesMore}</Link>
          </div>
        </div>
      </section>

      <section className="section section-slate" aria-labelledby="faq-h">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="center head">
            <span className="eyebrow">{h.faqEyebrow}</span>
            <h2 id="faq-h">{h.faqTitle}</h2>
          </div>
          <FaqList items={d.faq.items} limit={5} />
          <p className="center" style={{ marginTop: 20 }}><Link href={lp(locale, "/faq")}>{h.faqMore}</Link></p>
        </div>
      </section>

      <CtaBand locale={locale} c={d.cta} />
    </>
  );
}
