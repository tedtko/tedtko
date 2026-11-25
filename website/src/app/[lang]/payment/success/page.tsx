import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { lp, money, t } from "@/i18n/config";
import { resolve, type LangParams } from "@/i18n/page";
import Rich from "@/components/Rich";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const { d } = await resolve(params);
  return { title: d.success.metaTitle, robots: { index: false } };
}

export default async function SuccessPage({ params, searchParams }: LangParams & { searchParams: Promise<{ session_id?: string }> }) {
  const { locale, d } = await resolve(params);
  const s0 = d.success;
  const { session_id } = await searchParams;
  let amount = "";
  let email = "";
  let paid = false;
  let isPackage = true;
  let ref = "";
  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const s = await getStripe().checkout.sessions.retrieve(session_id);
      paid = s.payment_status === "paid";
      const cur = (s.currency || "gbp").toUpperCase();
      amount = money((s.amount_total || 0) / 100, locale, cur === "EUR" || cur === "USD" ? cur : "GBP");
      email = s.customer_details?.email || "";
      isPackage = s.metadata?.kind === "package";
      ref = s.id.slice(-10).toUpperCase();
    } catch {
      /* fall back to the generic message */
    }
  }

  return (
    <section className="section">
      <div className="container center" style={{ maxWidth: 700 }}>
        <div className="card">
          <span className="eyebrow">{paid ? s0.eyebrowPaid : s0.eyebrowThanks}</span>
          <h1 style={{ fontSize: "2.2rem" }}>{s0.title}</h1>
          <p className="lead">
            {paid ? t(s0.paid, { amount }) : s0.processing} {email && t(s0.receipt, { email })}
          </p>
          {ref && <p><strong>{t(s0.ref, { ref })}</strong></p>}
          {isPackage && (
            <>
              <p><Rich text={s0.next} locale={locale} /></p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <Link href={`${lp(locale, "/intake")}${ref ? `?ref=${ref}` : ""}`} className="btn btn-primary">{s0.upload}</Link>
              </div>
            </>
          )}
          <p className="fineprint" style={{ marginTop: 18 }}><Rich text={s0.questions} locale={locale} /></p>
        </div>
      </div>
    </section>
  );
}
