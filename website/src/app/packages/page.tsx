import type { Metadata } from "next";
import { PackagesGrid, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Drawing Packages & Prices",
  description: "Fixed-fee remote architectural CAD drawing packs: Essential £1,850, Standard £3,250 and Premium £4,950 (+ VAT). Delivered digitally in PDF & DWG.",
};

export default async function PackagesPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Fixed-scope digital packs"
        title="Drawing packages"
        lead="Choose your pack, complete your order online, then upload your measurements and photos. We'll draft everything remotely and deliver your files digitally."
      />
      <section className="section">
        <div className="container">
          {cancelled && (
            <p className="alert alert-error" role="alert" style={{ marginBottom: 32 }}>
              Your payment was cancelled and you have not been charged.
            </p>
          )}
          <PackagesGrid />
        </div>
      </section>
    </>
  );
}
