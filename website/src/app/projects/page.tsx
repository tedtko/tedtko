import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import { Elevation, FloorPlan, HouseFront, LoftConversion, RearExtension, Section3D } from "@/components/Illustrations";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projects",
  description: "Before and after refurbishments, extensions, loft conversions and planning drawings by Fair Trade 23 across London.",
};

// To add your own photos: put them in /public/projects and replace an
// illustration with <img src="/projects/your-photo.jpg" alt="..." />.
const transformations = [
  { title: "Full house refurbishment", text: "New roof, render, windows, front door and landscaping.", before: <HouseFront />, after: <HouseFront after /> },
  { title: "Single-storey rear extension", text: "Old lean-to replaced with an open-plan extension, bi-folds and roof lantern.", before: <RearExtension />, after: <RearExtension after /> },
  { title: "Rear dormer loft conversion", text: "Unused loft turned into a bedroom with en-suite.", before: <LoftConversion />, after: <LoftConversion after /> },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our work</span>
          <h1>Before &amp; after</h1>
          <p className="lead">Drag the slider on each project to see the transformation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {transformations.map((t) => (
              <figure key={t.title} className="figure">
                <BeforeAfter label={t.title} before={t.before} after={t.after} />
                <figcaption><strong>{t.title}</strong><span>{t.text}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="center" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Design work</span>
            <h2>Plans &amp; drawings</h2>
          </div>
          <div className="grid grid-3">
            <figure className="figure"><div className="drawing"><FloorPlan /></div><figcaption><strong>Proposed ground floor</strong><span>Rear extension, open-plan kitchen</span></figcaption></figure>
            <figure className="figure"><div className="drawing"><Elevation /></div><figcaption><strong>Proposed rear elevation</strong><span>Flat roof extension with lantern</span></figcaption></figure>
            <figure className="figure"><div className="drawing"><Section3D /></div><figcaption><strong>3D visual</strong><span>Client presentation model</span></figcaption></figure>
          </div>
          <p className="center note" style={{ marginTop: 24 }}>Illustrations shown. Project photos coming soon.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
