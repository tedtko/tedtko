// ---------------------------------------------------------------------------
// Site content, company details and prices.
// Edit this file to change anything shown on the website.
//
// BEFORE GOING LIVE: fill in companyNumber, registeredOffice and vatNumber.
// UK law (Companies Act 2006) requires them on your website.
// ---------------------------------------------------------------------------

export const site = {
  tradingName: "Fair Trade Design Studio",
  legalName: "Fair Trade 23 Limited",
  tagline: "Remote Architectural CAD Drawings",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // Companies Act 2006 disclosures (fill these in).
  companyNumber: "17279876",
  registeredOffice: "Flat 1-4, 67 Wellesley Road, Croydon, England, CR0 2AJ",
  vatNumber: "GB 523 1091 33",

  // Contact
  supportEmail: "trtanev23@gmail.com", // change to support@yourdomain.co.uk when you have it
  phoneDisplay: "+44 7598 610612",
  phoneHref: "tel:+447598610612",
  whatsappHref:
    "https://wa.me/447598610612?text=" +
    encodeURIComponent("Hi, I have a question about your drawing packs."),
  responseTime: "2 business days",
};

export const VAT_RATE = 0.2;
export const incVat = (pounds: number) => Math.round(pounds * (1 + VAT_RATE) * 100) / 100;

export type Package = {
  id: string;
  name: string;
  price: number; // pounds, excluding VAT
  subtitle: string;
  deliverables: string[];
  revisions: string;
  timeline: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential",
    price: 1850,
    subtitle: "Digital planning drawing pack for straightforward extensions, porches & outbuildings.",
    deliverables: [
      "Digital CAD base plan, drafted remotely from your measurements, sketches & photos",
      "Existing & proposed 2D floor plans & elevations (PDF & DWG)",
      "Scaled site & location reference plans (digital PDF pack)",
      "Planning submission-ready drawing set, formatted for portal upload",
    ],
    revisions: "1 digital revision round (within 14 days of first draft delivery)",
    timeline: "5–7 business days from receipt of your measurements",
  },
  {
    id: "standard",
    name: "Standard",
    price: 3250,
    featured: true,
    subtitle: "Complete digital planning & building regulations drawing pack for double-storey extensions & loft conversions.",
    deliverables: [
      "Everything in the Essential pack",
      "Detailed cross-sections & technical construction detail sheets (PDF & DWG)",
      "3D exterior & massing visual renders (high-res images)",
      "Building regulations annotated technical drawing pack",
    ],
    revisions: "2 digital revision rounds (within 14 days of first draft delivery)",
    timeline: "7–10 business days from receipt of your measurements",
  },
  {
    id: "premium",
    name: "Premium",
    price: 4950,
    subtitle: "Comprehensive remote design & technical specification pack for new builds, full refurbishments & multi-unit conversions.",
    deliverables: [
      "Everything in the Standard pack",
      "Technical specification & schedule of works document (PDF/DOCX)",
      "Boundary, daylight & elevation reference drawing set",
      "Full tender-ready digital CAD & PDF drawing bundle",
    ],
    revisions: "Up to 3 digital revision rounds (within 21 days of first draft delivery)",
    timeline: "Priority: 10–14 business days from receipt of your measurements",
  },
];

// Cancellation charge applied once your intake has been reviewed but before
// the first draft is issued (see /refund-policy).
export const setupFee = 500;

// Limits for the "Pay a balance" page (pounds, total due including VAT).
export const invoiceLimits = { min: 1, max: 20000 };

export const steps = [
  {
    title: "Select your fixed-scope digital pack",
    text: "Choose Essential, Standard or Premium and complete your order online.",
  },
  {
    title: "Upload your measurements & photos",
    text: "Send your hand-drawn measurements, property photos, estate agent floor plans and project brief through our secure online intake form.",
  },
  {
    title: "Remote CAD drafting & 3D modelling",
    text: "Our UK CAD design team produces your scaled architectural drawings and technical packs remotely.",
  },
  {
    title: "Digital delivery & revisions",
    text: "Receive watermarked review PDFs by email, request your included revision round(s), then download your final unwatermarked PDF & DWG files.",
  },
];

export const faqs: [string, string][] = [
  [
    "Do you visit my property?",
    "No. We're a 100% remote design studio. Every drawing is produced from the measurements, sketches and photos you send us, so we never visit your property.",
  ],
  [
    "What do I need to send you?",
    "Rough measurements of each room and the outside of the property (a hand sketch is fine), photos of every elevation and the rooms affected, any existing floor plans (e.g. from an estate agent listing), and a short description of what you want to build.",
  ],
  [
    "How accurate do my measurements need to be?",
    "As accurate as you can make them. We draft to the dimensions you give us, so errors carry through to the drawings. We'll flag anything that looks inconsistent, but you're responsible for the accuracy of what you submit (see our Terms).",
  ],
  [
    "What file formats will I receive?",
    "PDF drawings ready to print or upload to a planning portal, plus editable DWG CAD files. The Standard and Premium packs also include high-res 3D render images, and Premium includes a PDF/DOCX specification.",
  ],
  [
    "Do you submit the planning application for me?",
    "We supply a submission-ready drawing set formatted for the Planning Portal. You submit it and pay the council's fees. We're happy to explain what goes where.",
  ],
  [
    "Are structural calculations or council fees included?",
    "No. Structural engineering calculations, council planning and building control fees, and any physical building work are not included.",
  ],
  [
    "Can I pay in stages?",
    "Yes. On request we can split the fee into a 50% booking deposit and 50% before your final CAD/DWG files are released. Get in touch before ordering.",
  ],
  [
    "Can I cancel?",
    "Yes. UK consumers have a 14-day cancellation right. If you ask us to start work within that period, we may charge for work already done. Full details are in our Refund & Cancellation Policy.",
  ],
];

export const formatGBP = (pounds: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: pounds % 1 === 0 ? 0 : 2,
  }).format(pounds);

export const LAST_UPDATED = "18 November 2026"; // date shown on the legal pages
