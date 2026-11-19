import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import InvoiceForm from "@/components/InvoiceForm";
import Rich from "@/components/Rich";
import { PageHero, PaymentOptions } from "@/components/Sections";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { locale, d } = await resolve(params);
  return pageMeta(locale, "/pay", d.pay.metaTitle, d.pay.metaDescription);
}

export default async function PayPage({ params, searchParams }: LangParams & { searchParams: Promise<{ cancelled?: string }> }) {
  const { locale, d } = await resolve(params);
  const { cancelled } = await searchParams;
  return (
    <>
      <PageHero eyebrow={d.pay.eyebrow} title={d.pay.title} lead={d.pay.lead} />
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          {cancelled && <p className="alert alert-error" role="alert" style={{ marginBottom: 20 }}>{d.pay.cancelled}</p>}
          <div className="card"><InvoiceForm locale={locale} f={d.forms} errors={d.errors} /></div>
          <PaymentOptions locale={locale} d={d} />
          <p className="fineprint center" style={{ marginTop: 18 }}><Rich text={d.pay.questions} locale={locale} /></p>
        </div>
      </section>
    </>
  );
}
