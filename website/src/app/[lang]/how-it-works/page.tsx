import type { Metadata } from "next";
import Link from "next/link";
import { lp } from "@/i18n/config";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import Rich from "@/components/Rich";
import { CtaBand, PageHero, StepsGrid } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/how-it-works", d.howPage.metaTitle, d.howPage.metaDescription);
}

export default async function HowItWorksPage({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  const h = d.howPage;
  return (
    <>
      <PageHero eyebrow={h.eyebrow} title={h.title} lead={h.lead} />
      <section className="section">
        <div className="container"><StepsGrid steps={d.steps} /></div>
      </section>
      <section className="section section-slate">
        <div className="container split">
          <div>
            <h2>{h.sendTitle}</h2>
            <ul className="ticks">{h.sendList.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link href={lp(locale, "/intake")} className="btn btn-primary">{h.uploadCta}</Link>
          </div>
          <div className="card">
            <h3>{h.goodTitle}</h3>
            <ul className="ticks">{h.goodList.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="fineprint"><Rich text={h.goodMore} locale={locale} /></p>
          </div>
        </div>
      </section>
      <CtaBand locale={locale} c={d.cta} />
    </>
  );
}
