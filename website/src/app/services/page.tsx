import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { serviceIcons } from "@/components/Icons";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description: "New builds, full refurbishments, extensions, loft conversions, bathrooms, planning drawings and project management across London.",
};

const details: Record<string, string[]> = {
  "new-builds": ["Groundworks & foundations", "Structural frame & brickwork", "Roofing, first & second fix", "Full finishing & handover"],
  renovations: ["Strip-out & structural alterations", "Rewiring & re-plumbing", "Plastering, flooring & joinery", "Decoration & snagging"],
  extensions: ["Single & double-storey", "Side-return & wrap-around", "Bi-fold doors & roof lanterns", "Steel beams & open-plan layouts"],
  "loft-conversions": ["Rear dormer & L-shaped dormer", "Hip-to-gable & mansard", "Velux / roof-light conversions", "Stairs, en-suites & insulation"],
  bathrooms: ["Full bathroom & en-suite refits", "Wet rooms & walk-in showers", "Tiling & underfloor heating", "Plumbing & electrics"],
  "planning-drawings": ["Measured surveys", "Planning & lawful development applications", "Building regulations drawings", "3D visuals & structural calcs"],
  "project-management": ["Single point of contact", "Programme & budget control", "Building control & inspections", "Trades & supplier coordination"],
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our services</span>
          <h1>Construction &amp; refurbishment across London</h1>
          <p className="lead">{site.yearsTrading} years of building, renovating and designing homes, managed by one team from start to finish.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <article key={s.slug} id={s.slug} className="card service-card" style={{ scrollMarginTop: 110 }}>
                <div className="icon">{Icon && <Icon size={26} />}</div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 16 }}>{s.text}</p>
                <ul className="ticks">
                  {details[s.slug]?.map((d) => <li key={d}>{d}</li>)}
                </ul>
                {s.slug === "planning-drawings" ? (
                  <Link href="/planning-drawings" className="btn btn-primary">View packages &amp; prices</Link>
                ) : (
                  <Link href="/quote" className="btn btn-outline">Get a quote</Link>
                )}
              </article>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
