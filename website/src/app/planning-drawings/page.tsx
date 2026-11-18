import type { Metadata } from "next";
import Link from "next/link";
import { consultation, formatGBP, packages } from "@/lib/site";
import CheckoutButton from "@/components/CheckoutButton";
import { Elevation, FloorPlan, Section3D } from "@/components/Illustrations";
import { IconLock } from "@/components/Icons";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Planning & Drawing Packages",
  description: "Fixed-price planning and architectural drawing packages from £5,000 to £12,000. Planning applications, building regulations and 3D visuals across London.",
};

export default async function DrawingsPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams;
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Planning &amp; drawings</span>
          <h1>Fixed-price drawing packages</h1>
          <p className="lead">
            Architectural drawings, planning applications and building regulations packages, produced in-house and
            paid securely online. Packages from {formatGBP(packages[0].price)}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {cancelled && (
            <p className="alert alert-error" style={{ marginBottom: 32 }}>
              Your payment was cancelled and you have not been charged. Choose a package below whenever you&apos;re ready.
            </p>
          )}
          <div className="grid grid-3 pricing">
            {packages.map((p) => (
              <div key={p.id} className={`card price-card${p.featured ? " featured" : ""}`}>
                {p.featured && <span className="badge">Most popular</span>}
                <h3>{p.name}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>{p.summary}</p>
                <div className="price">{formatGBP(p.price)} <small>fixed fee</small></div>
                <div className="best-for"><strong>Best for:</strong> {p.bestFor}</div>
                <ul className="ticks">
                  {p.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <CheckoutButton payload={{ type: "package", id: p.id }} className={`btn ${p.featured ? "btn-primary" : "btn-outline"} btn-block`}>
                  Buy {p.name}: {formatGBP(p.price)}
                </CheckoutButton>
              </div>
            ))}
          </div>
          <p className="secure" style={{ justifyContent: "center", marginTop: 24 }}>
            <IconLock size={16} /> Secure checkout by Stripe. Council planning and building control fees are paid separately.
          </p>
          <p className="center note">
            Not sure which package you need? <Link href="/consultation">Book a {formatGBP(consultation.price)} consultation</Link>; the fee is
            deducted if you go ahead. Or <Link href="/quote">ask us for advice</Link>.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">What you receive</span>
            <h2>Clear, detailed drawings</h2>
            <p className="lead">Every package is drawn to scale and ready to submit to your council and building control.</p>
          </div>
          <div className="grid grid-3">
            <figure className="figure"><div className="drawing"><FloorPlan /></div><figcaption><strong>Floor plans</strong><span>Existing &amp; proposed layouts</span></figcaption></figure>
            <figure className="figure"><div className="drawing"><Elevation /></div><figcaption><strong>Elevations</strong><span>Materials, heights &amp; openings</span></figcaption></figure>
            <figure className="figure"><div className="drawing"><Section3D /></div><figcaption><strong>3D visuals</strong><span>Standard &amp; Premium packages</span></figcaption></figure>
          </div>
          <p className="center note" style={{ marginTop: 20 }}>Example drawings shown for illustration.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <span className="eyebrow">FAQs</span>
          <h2>Common questions</h2>
          {[
            ["What happens after I pay?", "We'll call you within one working day to arrange your measured survey and get the design started."],
            ["How long do drawings take?", "Typically 2–4 weeks from survey to planning-ready drawings, depending on the package and project size. Council decisions usually take around 8 weeks after validation."],
            ["Are council fees included?", "No. Planning application and building control fees are set by your council and paid separately. We'll tell you the exact amount before submitting."],
            ["Can you build it as well?", "Yes. That's what makes us different. We can take your project from drawings right through to construction and handover."],
          ].map(([q, a]) => (
            <details key={q} className="card" style={{ marginBottom: 12, padding: "18px 22px" }}>
              <summary style={{ fontWeight: 700, cursor: "pointer" }}>{q}</summary>
              <p style={{ margin: "12px 0 0", color: "var(--muted)" }}>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand title="Need a build price too?" text="We'll quote for the construction alongside your drawings." />
    </>
  );
}
