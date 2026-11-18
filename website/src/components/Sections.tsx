import Link from "next/link";
import { faqs, formatGBP, incVat, packages, steps } from "@/lib/site";
import OrderButton from "./OrderButton";
import { IconClock, IconLock, IconRevise } from "./Icons";
import { CrossSection, Elevation, FloorPlan, Section3D, SitePlan } from "./Illustrations";

export function PackagesGrid() {
  return (
    <>
      <div className="grid grid-3 pricing">
        {packages.map((p) => (
          <article key={p.id} className={`card price-card${p.featured ? " featured" : ""}`} aria-labelledby={`pkg-${p.id}`}>
            {p.featured && <span className="badge">Most popular</span>}
            <h3 id={`pkg-${p.id}`}>{p.name}</h3>
            <p className="sub">{p.subtitle}</p>
            <div className="price">{formatGBP(p.price)} <small>+ VAT</small></div>
            <p className="inc">{formatGBP(incVat(p.price))} inc. VAT</p>
            <ul className="ticks">
              {p.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <div className="meta">
              <div><IconRevise size={18} /><span>{p.revisions}</span></div>
              <div><IconClock size={18} /><span>{p.timeline}</span></div>
            </div>
            <OrderButton id={p.id} featured={p.featured} label={`Order ${p.name} Pack: ${formatGBP(p.price)} + VAT`} />
          </article>
        ))}
      </div>
      <div className="notice" style={{ marginTop: 28 }}>
        All prices exclude 20% UK VAT where applicable. Stage payment options (50% booking deposit / 50% prior to final
        CAD/DWG release) are available on request. <Link href="/contact">Contact us</Link> before ordering.
      </div>
      <p className="secure" style={{ marginTop: 14 }}>
        <IconLock size={16} /> Secure online checkout. Excludes structural engineering calculations, council application
        fees and any physical building work.
      </p>
    </>
  );
}

export function StepsGrid() {
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

const samples = [
  { el: <FloorPlan />, title: "2D floor plans", text: "Existing & proposed layouts, dimensioned (PDF & DWG). All packs." },
  { el: <Elevation />, title: "Elevations", text: "Materials, heights & openings for every face. All packs." },
  { el: <SitePlan />, title: "Site & location plans", text: "Scaled reference plans for your submission. All packs." },
  { el: <CrossSection />, title: "Sections & build-up details", text: "Annotated technical sections for building regulations. Standard & Premium." },
  { el: <Section3D />, title: "3D exterior & massing renders", text: "High-res visuals of the proposed design. Standard & Premium." },
];

export function SamplesGrid({ limit }: { limit?: number }) {
  const list = limit ? samples.slice(0, limit) : samples;
  return (
    <>
      <div className="grid grid-3">
        {list.map((s) => (
          <figure key={s.title} className="figure">
            <div className="drawing">{s.el}</div>
            <figcaption><strong>{s.title}</strong><span>{s.text}</span></figcaption>
          </figure>
        ))}
      </div>
      <p className="center fineprint" style={{ marginTop: 18 }}>Illustrative examples of drawing types. Your drawings are drafted to your property.</p>
    </>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <div className="faq">
      {list.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band" aria-label="Order">
      <div className="container">
        <div>
          <h2>Ready to get your drawings?</h2>
          <p>Fixed fees, 100% online, delivered as PDF &amp; DWG.</p>
        </div>
        <div className="btn-row">
          <Link href="/packages" className="btn btn-light">View Drawing Packages</Link>
          <Link href="/contact" className="btn btn-ghost-light">Ask a question</Link>
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
