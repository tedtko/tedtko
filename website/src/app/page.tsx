import Link from "next/link";
import { IconBolt, IconCloud, IconRuler, IconTag } from "@/components/Icons";
import { FloorPlan } from "@/components/Illustrations";
import { CtaBand, FaqList, PackagesGrid, SamplesGrid, StepsGrid } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">Architectural CAD Design Studio</span>
            <h1>Remote Architectural CAD Drawings &amp; Planning Packs. <em>100% Online.</em></h1>
            <p className="lead">
              Fixed-fee 2D &amp; 3D architectural design packs, floor plans, and building regulations drawings produced
              remotely from your measurements, sketches, and photos. Delivered digitally in PDF &amp; DWG formats.
            </p>
            <ul className="badges" aria-label="Why choose us">
              <li><IconCloud size={22} /> 100% Remote Digital Delivery</li>
              <li><IconTag size={22} /> Fixed Transparent Pricing</li>
              <li><IconRuler size={22} /> UK Building Regs Compliant Drafting</li>
              <li><IconBolt size={22} /> Fast Digital Turnaround</li>
            </ul>
            <div className="btn-row">
              <Link href="/packages" className="btn btn-primary">View Drawing Packages</Link>
              <Link href="/how-it-works" className="btn btn-outline">How It Works</Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden>
            <div className="bar"><i /><i /><i /><span>proposed-ground-floor.dwg</span></div>
            <div className="drawing"><FloorPlan /></div>
          </div>
        </div>
      </section>

      <section className="section" id="packages" aria-labelledby="packages-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">Fixed-scope digital packs</span>
            <h2 id="packages-h">Drawing packages</h2>
            <p className="lead">Clear deliverables, fixed revision rounds and a set digital delivery timeline. No surprises.</p>
          </div>
          <PackagesGrid />
        </div>
      </section>

      <section className="section section-slate" aria-labelledby="how-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">Remote workflow</span>
            <h2 id="how-h">How it works</h2>
            <p className="lead">Four simple steps, entirely online.</p>
          </div>
          <StepsGrid />
        </div>
      </section>

      <section className="section" aria-labelledby="samples-h">
        <div className="container">
          <div className="center head">
            <span className="eyebrow">What&apos;s included in your digital pack</span>
            <h2 id="samples-h">Sample drawing deliverables</h2>
          </div>
          <SamplesGrid limit={3} />
          <div className="center" style={{ marginTop: 24 }}>
            <Link href="/sample-deliverables" className="btn btn-outline">See all sample deliverables</Link>
          </div>
        </div>
      </section>

      <section className="section section-slate" aria-labelledby="faq-h">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="center head">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Common questions</h2>
          </div>
          <FaqList limit={5} />
          <p className="center" style={{ marginTop: 20 }}><Link href="/faq">Read all FAQs</Link></p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
