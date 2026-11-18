import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, StepsGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Our 4-step remote workflow: choose a pack, upload your measurements and photos, we draft remotely, and you receive your PDF & DWG files digitally.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="Remote workflow" title="How it works" lead="Everything happens online. We never visit your property." />
      <section className="section">
        <div className="container">
          <StepsGrid />
        </div>
      </section>
      <section className="section section-slate">
        <div className="container split">
          <div>
            <h2>What to send us</h2>
            <ul className="ticks">
              <li>Room-by-room measurements (a hand sketch with dimensions is fine)</li>
              <li>Overall external measurements and ceiling heights</li>
              <li>Photos of every elevation and each room affected</li>
              <li>Existing floor plans if you have them (e.g. from an estate agent listing)</li>
              <li>A short brief: what you want to build or change</li>
              <li>Any known boundary details or previous planning references</li>
            </ul>
            <Link href="/intake" className="btn btn-primary">Upload measurements</Link>
          </div>
          <div className="card">
            <h3>Good to know</h3>
            <ul className="ticks">
              <li>Your delivery timeline starts when we receive complete measurements.</li>
              <li>Review drafts are watermarked PDFs. Final files are unwatermarked PDF &amp; DWG.</li>
              <li>Revision rounds must be used within the window stated for your pack.</li>
              <li>You&apos;re responsible for the accuracy of the measurements you supply.</li>
              <li>Structural calculations, council fees and building work are not included.</li>
            </ul>
            <p className="fineprint">Full details are in our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
