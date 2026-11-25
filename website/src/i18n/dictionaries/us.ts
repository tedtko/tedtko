import type { Dict } from "../types";
import { buildEnglish } from "./en";

// US English site (/us): same content as the UK English site, but prices in US
// dollars, US spelling and terms, US building-code wording and ACH payments.

const SWAPS: [RegExp, string][] = [
  [/an estate agent listing/g, "a real estate listing"],
  [/estate agent floor plans/g, "real estate listing floor plans"],
  [/postcode/g, "ZIP code"],
  [/modelling/g, "modeling"],
  [/cancelled/g, "canceled"],
  [/[Dd]ouble-storey/g, "two-story"],
  [/[Ss]ingle-storey/g, "one-story"],
  [/loft conversions/g, "attic conversions"],
  [/\bextensions\b/g, "additions"],
  [/full refurbishments/g, "full remodels"],
  [/\blicence\b/g, "license"],
  [/organis/g, "organiz"],
  [/colour/g, "color"],
  [/\bcentre\b/g, "center"],
  [/enquir/g, "inquir"],
];

function americanize<T>(v: T): T {
  if (typeof v === "string") return SWAPS.reduce((s, [a, b]) => s.replace(a, b), v as string) as T;
  if (Array.isArray(v)) return v.map(americanize) as T;
  if (v && typeof v === "object") {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, americanize(x)])) as T;
  }
  return v;
}

const base = americanize(buildEnglish("us"));

const codesNote =
  "Drawings are produced to the building codes adopted by your state and local jurisdiction (typically based on the IRC/IBC), in feet and inches. We don't provide professional stamps or seals: if your building department requires sealed drawings, a locally licensed professional must review and seal them.";

const us: Dict = {
  ...base,
  meta: {
    siteTitle: "Remote Architectural CAD Drawings & Permit Drawing Packs",
    siteDescription:
      "Fixed-fee 2D & 3D architectural design packs, floor plans and permit drawings produced remotely from your measurements and photos, drawn to your local US building codes. Delivered digitally in PDF & DWG.",
  },
  hero: {
    ...base.hero,
    lead: "Fixed-fee 2D & 3D architectural design packs, floor plans, and permit drawings produced remotely from your measurements, sketches, and photos, drawn to your state and local building codes. Delivered digitally in PDF & DWG formats.",
    badges: ["100% Remote Digital Delivery", "Fixed Transparent Pricing", "Drafted to Your Local Building Codes", "Fast Digital Turnaround"],
  },
  packages: {
    ...base.packages,
    items: {
      essential: {
        ...base.packages.items.essential,
        subtitle: "Digital drawing pack for straightforward additions, porches & accessory buildings.",
        deliverables: [
          base.packages.items.essential.deliverables[0],
          base.packages.items.essential.deliverables[1],
          "Scaled site & plot reference plans (digital PDF pack)",
          "Permit-ready drawing set, formatted for your local building department",
        ],
      },
      standard: {
        ...base.packages.items.standard,
        subtitle: "Complete digital permit & building code drawing pack for two-story additions & attic conversions.",
        deliverables: [
          base.packages.items.standard.deliverables[0],
          base.packages.items.standard.deliverables[1],
          base.packages.items.standard.deliverables[2],
          "Building code annotated technical drawing pack",
        ],
      },
      premium: {
        ...base.packages.items.premium,
        subtitle: "Comprehensive remote design & technical specification pack for new homes, full remodels & multi-unit conversions.",
      },
    },
    vatNote: "All prices are shown in US dollars and exclude 20% UK VAT, which is added at checkout. Stage payment options (50% booking deposit / 50% prior to final CAD/DWG release) are available on request. [Contact us](/contact) before ordering.",
    outsideUkNote: `**For US clients:** ${codesNote} Tell us your city or county building department in your brief.`,
    paymentText: "Pay securely at checkout by credit or debit card, Apple Pay, Google Pay, or directly from your US bank account (ACH). ACH payments usually take a few business days to clear, and we start work once your payment has cleared. You can also pay invoices in US dollars on our [Pay Invoice](/pay) page. Prefer a wire transfer? [Contact us](/contact).",
  },
  faq: {
    ...base.faq,
    items: base.faq.items.map(([q, a]): [string, string] => {
      if (q === "How can I pay?")
        return [q, "By credit or debit card, Apple Pay, Google Pay, or directly from your US bank account (ACH) at checkout. All US prices are in US dollars. We can also send you an invoice in US dollars, which you can pay online on our Pay Invoice page, including by ACH."];
      if (q === "Do you submit the planning application for me?")
        return ["Do you submit the permit application for me?", "We supply a permit-ready drawing set formatted for your local building department. You submit it and pay the department's fees. We're happy to explain what goes where. We don't provide professional stamps or seals; if your jurisdiction requires them, a locally licensed professional must review and seal the drawings."];
      if (q === "Are structural calculations or authority fees included?")
        return ["Are structural calculations or permit fees included?", "No. Structural engineering calculations, permit and plan review fees, and any physical building work are not included."];
      return [q, a];
    }),
  },
  footer: {
    ...base.footer,
    about: "Remote architectural CAD drawings, 2D & 3D design packs and permit & building code drawing files, produced from your measurements and photos and delivered digitally.",
  },
  contact: { ...base.contact, waText: "Hi, I'm in the US and have a question about your drawing packs." },
};

export default us;
