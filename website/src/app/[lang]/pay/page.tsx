import type { Metadata } from "next";
import { pageMeta, resolve, type LangParams } from "@/i18n/page";
import InvoiceForm from "@/components/InvoiceForm";
import Rich from "@/components/Rich";
import { PageHero, PaymentOptions } from "@/components/Sections";
import { usBankTransfer as B } from "@/lib/site";
import type { Dict } from "@/i18n/types";

function AchBox({ p }: { p: Dict["pay"] }) {
  // Hidden until US bank details are filled in (src/lib/site.ts).
  if (!B.accountNumber) return null;
  const L = p.achLabels;
  const rows: [string, string][] = [
    [L.accountName, B.accountName], [L.bankName, B.bankName], [L.routing, B.routingNumber],
    [L.account, B.accountNumber], [L.accountType, B.accountType], [L.bankAddress, B.bankAddress],
    [L.reference, p.achRefValue],
  ];
  return (
    <section className="card" style={{ marginTop: 22 }} aria-labelledby="ach-h">
      <h2 id="ach-h" style={{ fontSize: "1.3rem" }}>{p.achTitle}</h2>
      <p style={{ color: "var(--muted)" }}>{p.achIntro}</p>
      <dl className="bank">
        {rows.filter(([, v]) => v).map(([k, v]) => (
          <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
        ))}
      </dl>
      <p className="fineprint" style={{ margin: "12px 0 0" }}>{p.achNote}</p>
    </section>
  );
}

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
          <AchBox p={d.pay} />
          <PaymentOptions locale={locale} d={d} />
          <p className="fineprint center" style={{ marginTop: 18 }}><Rich text={d.pay.questions} locale={locale} /></p>
        </div>
      </section>
    </>
  );
}
