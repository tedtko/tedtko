import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import { PackagesGrid, PageHero } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/packages", d.packages.metaTitle, d.packages.metaDescription);
}

export default async function PackagesPage({ params, searchParams }: LangParams & { searchParams: Promise<{ cancelled?: string }> }) {
  const { locale, d } = await resolve(params);
  const { cancelled } = await searchParams;
  const p = d.packages;
  return (
    <>
      <PageHero eyebrow={p.pageEyebrow} title={p.pageTitle} lead={p.pageLead} />
      <section className="section">
        <div className="container">
          {cancelled && <p className="alert alert-error" role="alert" style={{ marginBottom: 32 }}>{p.cancelled}</p>}
          <PackagesGrid locale={locale} d={d} />
        </div>
      </section>
    </>
  );
}
