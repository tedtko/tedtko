import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import { CtaBand, FaqList, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about our remote architectural CAD drawing packs: what to send, file formats, revisions, payments and cancellations.",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
