import type { Metadata } from "next";
import { CtaBand, PageHero, SamplesGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Sample Deliverables",
  description: "What's included in your digital drawing pack: floor plans, elevations, site plans, building regulations sections and 3D renders.",
};

export default function SamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="What's included in your digital pack"
        title="Sample drawing deliverables"
        lead="Every drawing is scaled, titled and supplied as print-ready PDF and editable DWG CAD files."
      />
      <section className="section">
        <div className="container">
          <SamplesGrid />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
