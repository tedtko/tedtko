import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import { CtaBand, FaqList, PageHero } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/faq", d.faq.metaTitle, d.faq.metaDescription);
}

export default async function FaqPage({ params }: LangParams) {
  const { locale, d } = await resolve(params);
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: d.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHero eyebrow={d.faq.eyebrow} title={d.faq.title} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}><FaqList items={d.faq.items} /></div>
      </section>
      <CtaBand locale={locale} c={d.cta} />
    </>
  );
}
