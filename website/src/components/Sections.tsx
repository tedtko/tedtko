import Link from "next/link";
import { incVat, packages } from "@/lib/site";
import { currencyFor, lp, money, t, type Locale } from "@/i18n/config";
import type { Block, Dict, LegalDoc } from "@/i18n/types";
import OrderButton from "./OrderButton";
import Rich from "./Rich";
import { IconCard, IconClock, IconLock, IconRevise } from "./Icons";
import { CrossSection, Elevation, FloorPlan, Section3D, SitePlan } from "./Illustrations";

export function PackagesGrid({ locale, d }: { locale: Locale; d: Dict }) {
  const p = d.packages;
  return (
    <>
      <div className="grid grid-3 pricing">
        {packages.map((pk) => {
          const tx = p.items[pk.id];
          const net = pk.price[currencyFor(locale)];
          const price = money(net, locale);
          return (
            <article key={pk.id} className={`card price-card${pk.featured ? " featured" : ""}`} aria-labelledby={`pkg-${pk.id}`}>
              {pk.featured && <span className="badge">{p.popular}</span>}
              <h3 id={`pkg-${pk.id}`}>{tx.name}</h3>
              <p className="sub">{tx.subtitle}</p>
              <div className="price">{price} <small>{p.plusVat}</small></div>
              <p className="inc">{t(p.incVat, { amount: money(incVat(net), locale) })}</p>
              <ul className="ticks">
                {tx.deliverables.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <div className="meta">
                <div><IconRevise size={18} /><span>{tx.revisions}</span></div>
                <div><IconClock size={18} /><span>{tx.timeline}</span></div>
              </div>
              <OrderButton
                id={pk.id} featured={pk.featured} locale={locale} o={d.order} errors={d.errors}
                label={t(p.orderLabel, { name: tx.name, price })}
              />
            </article>
          );
        })}
      </div>
      <div className="notice" style={{ marginTop: 28 }}>
        <p style={{ margin: 0 }}><Rich text={p.vatNote} locale={locale} /></p>
        <p style={{ margin: "8px 0 0" }}><Rich text={p.outsideUkNote} locale={locale} /></p>
      </div>
      <PaymentOptions locale={locale} d={d} />
      <p className="secure" style={{ marginTop: 14 }}><IconLock size={16} /> {p.excludesNote}</p>
    </>
  );
}

export function PaymentOptions({ locale, d }: { locale: Locale; d: Dict }) {
  return (
    <div className="payopts" aria-labelledby="payopts-h">
      <div className="ico"><IconCard /></div>
      <div>
        <h3 id="payopts-h">{d.packages.paymentTitle}</h3>
        <p style={{ margin: 0 }}><Rich text={d.packages.paymentText} locale={locale} /></p>
      </div>
    </div>
  );
}

export function StepsGrid({ steps }: { steps: Dict["steps"] }) {
  return (
    <ol className="grid grid-4 steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li key={s.title} className="card step">
          <div className="num" aria-hidden>{i + 1}</div>
          <h3>{s.title}</h3>
          <p style={{ margin: 0 }}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

const figures = [<FloorPlan key="a" />, <Elevation key="b" />, <SitePlan key="c" />, <CrossSection key="d" />, <Section3D key="e" />];

export function SamplesGrid({ d, limit }: { d: Dict; limit?: number }) {
  const items = d.samples.items.slice(0, limit ?? d.samples.items.length);
  return (
    <>
      <div className="grid grid-3">
        {items.map((s, i) => (
          <figure key={s.title} className="figure">
            <div className="drawing">{figures[i]}</div>
            <figcaption><strong>{s.title}</strong><span>{s.text}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="center fineprint" style={{ marginTop: 18 }}>{d.samples.note}</p>
    </>
  );
}

export function FaqList({ items, limit }: { items: [string, string][]; limit?: number }) {
  return (
    <div className="faq">
      {items.slice(0, limit ?? items.length).map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ locale, c }: { locale: Locale; c: Dict["cta"] }) {
  return (
    <section className="cta-band" aria-label={c.title}>
      <div className="container">
        <div>
          <h2>{c.title}</h2>
          <p>{c.text}</p>
        </div>
        <div className="btn-row">
          <Link href={lp(locale, "/packages")} className="btn btn-light">{c.primary}</Link>
          <Link href={lp(locale, "/contact")} className="btn btn-ghost-light">{c.secondary}</Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}

function BlockView({ b, locale }: { b: Block; locale: Locale }) {
  if (typeof b === "string") return <p><Rich text={b} locale={locale} /></p>;
  if ("ul" in b) return <ul>{b.ul.map((x) => <li key={x}><Rich text={x} locale={locale} /></li>)}</ul>;
  if ("h3" in b) return <h3>{b.h3}</h3>;
  if ("box" in b)
    return (
      <div className="card" style={{ boxShadow: "none", marginBottom: "1em" }}>
        {b.box.map((x) => <p key={x} style={{ margin: "0 0 4px" }}><Rich text={x} locale={locale} /></p>)}
      </div>
    );
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead><tr>{b.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
        <tbody>
          {b.table.rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j}><Rich text={c} locale={locale} /></td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalView({ doc, d, locale, date, extra }: { doc: LegalDoc; d: Dict; locale: Locale; date: string; extra?: React.ReactNode }) {
  return (
    <>
      <PageHero eyebrow={d.legal.eyebrow} title={doc.title} />
      <section className="section">
        <div className="container prose">
          <p className="updated">{t(d.legal.updated, { date })}</p>
          {d.legal.translationNote && <p className="notice">{d.legal.translationNote}</p>}
          {doc.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.body.map((b, i) => <BlockView key={i} b={b} locale={locale} />)}
            </div>
          ))}
          {extra}
        </div>
      </section>
    </>
  );
}
