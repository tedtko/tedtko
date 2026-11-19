import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import IntakeForm from "@/components/IntakeForm";
import Rich from "@/components/Rich";
import { PageHero } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/intake", d.intake.metaTitle, d.intake.metaDescription, true);
}

export default async function IntakePage({ params, searchParams }: LangParams & { searchParams: Promise<{ ref?: string }> }) {
  const { locale, d } = await resolve(params);
  const { ref } = await searchParams;
  return (
    <>
      <PageHero eyebrow={d.intake.eyebrow} title={d.intake.title} lead={d.intake.lead} />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card">
            <IntakeForm kind="intake" defaultRef={ref || ""} locale={locale} f={d.forms} errors={d.errors} packNames={Object.values(d.packages.items).map((p) => p.name)} />
          </div>
          <p className="fineprint center" style={{ marginTop: 18 }}><Rich text={d.intake.trouble} locale={locale} /></p>
        </div>
      </section>
    </>
  );
}
