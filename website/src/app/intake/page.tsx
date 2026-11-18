import type { Metadata } from "next";
import IntakeForm from "@/components/IntakeForm";
import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Upload Measurements & Photos",
  description: "Secure project intake: upload your measurements, sketches, photos and brief for your drawing pack.",
  robots: { index: false },
};

export default async function IntakePage({ searchParams }: { searchParams: Promise<{ ref?: string }> }) {
  const { ref } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Project intake"
        title="Upload your measurements & photos"
        lead="Send us everything we need to draft your drawings. Your delivery timeline starts once we have complete measurements."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card"><IntakeForm kind="intake" defaultRef={ref || ""} /></div>
          <p className="fineprint center" style={{ marginTop: 18 }}>
            Trouble uploading? Email your files to <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> with your order reference.
          </p>
        </div>
      </section>
    </>
  );
}
