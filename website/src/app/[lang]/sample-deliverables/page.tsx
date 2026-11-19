import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import { CtaBand, PageHero, SamplesGrid } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/sample-deliverables", d.samples.metaTitle, d.samples.metaDescription);
}

export default async function SamplesPage({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  return (
    <>
      <PageHero eyebrow={d.samples.eyebrow} title={d.samples.title} lead={d.samples.lead} />
      <section className="section"><div className="container"><SamplesGrid d={d} /></div></section>
      <CtaBand locale={locale} c={d.cta} />
    </>
  );
}
