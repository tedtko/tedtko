// ---------------------------------------------------------------------------
// Fair Trade 23 Limited: site content and prices.
// Edit this file to change phone numbers, prices, package contents, services
// or areas covered. Everything on the website reads from here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Fair Trade 23 Limited",
  shortName: "Fair Trade 23",
  tagline: "Building & Renovation Experts",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phoneDisplay: "+44 7598 610612",
  phoneHref: "tel:+447598610612",
  whatsappHref:
    "https://wa.me/447598610612?text=" +
    encodeURIComponent("Hi Fair Trade 23, I'd like to discuss a project."),
  email: "trtanev23@gmail.com",
  base: "Croydon",
  coverage: "all across London",
  yearsTrading: "10+",
};

export type Package = {
  id: string;
  name: string;
  price: number; // in pounds
  summary: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
};

// Planning & drawing packages, sold in full through Stripe Checkout.
export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential",
    price: 5000,
    summary: "Planning drawings for straightforward projects.",
    bestFor: "Single-storey extensions, porches, outbuildings",
    includes: [
      "Full measured survey of the property",
      "Existing floor plans & elevations",
      "Proposed floor plans & elevations",
      "Site & location plans",
      "Planning application prepared & submitted",
      "Liaison with the council planning officer",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 8000,
    summary: "Planning plus building regulations, ready to build.",
    bestFor: "Double-storey & wrap-around extensions, loft conversions",
    featured: true,
    includes: [
      "Everything in Essential",
      "Sections & detailed proposed drawings",
      "3D visuals of the finished design",
      "Building regulations drawings & notes",
      "Building control application handled",
      "Two rounds of design revisions",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 12000,
    summary: "The complete design package for major projects.",
    bestFor: "New builds, full refurbishments, multi-unit conversions",
    includes: [
      "Everything in Standard",
      "Structural calculations (with our engineer)",
      "Full construction specification & tender pack",
      "Party wall guidance & neighbour liaison",
      "Unlimited revisions within the agreed scope",
      "Priority turnaround & a dedicated project lead",
    ],
  },
];

// Paid design consultation / site survey.
export const consultation = {
  price: 250, // in pounds
  name: "Design consultation & site survey",
  duration: "Around 1 hour on site",
  includes: [
    "Visit to your property anywhere in London",
    "Discuss your ideas, budget and timescales",
    "Advice on planning permission vs permitted development",
    "Recommendation of the right drawing package",
  ],
  deductedNote:
    "The full consultation fee is deducted from your drawing package or build price if you go ahead with us.",
};

// Limits for the "Pay an invoice" page (in pounds).
export const invoiceLimits = { min: 1, max: 100000 };

export const services = [
  {
    slug: "new-builds",
    title: "New Builds",
    text: "From groundworks to handover, we build new homes and developments to a high standard, on time and on budget.",
  },
  {
    slug: "renovations",
    title: "Full Refurbishments",
    text: "Complete house renovations: strip-out, rewiring, replastering, flooring, decoration and everything in between.",
  },
  {
    slug: "extensions",
    title: "Extensions",
    text: "Single-storey, double-storey, side-return and wrap-around extensions that add space and value to your home.",
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    text: "Dormer, hip-to-gable and mansard lofts, turning unused roof space into bedrooms, bathrooms and offices.",
  },
  {
    slug: "bathrooms",
    title: "Bathrooms",
    text: "Bathroom and en-suite refits with quality tiling, plumbing and finishes.",
  },
  {
    slug: "planning-drawings",
    title: "Planning & Drawings",
    text: "Architectural drawings, planning applications and building regulations packages, all handled in-house.",
  },
  {
    slug: "project-management",
    title: "Project Management",
    text: "One point of contact managing trades, suppliers, building control and timelines from start to finish.",
  },
];

export const boroughs = [
  "Croydon", "Sutton", "Bromley", "Merton", "Lambeth", "Southwark",
  "Wandsworth", "Lewisham", "Greenwich", "Kingston", "Richmond",
  "Westminster", "Camden", "Islington", "Hackney", "Tower Hamlets",
  "Barnet", "Ealing", "Hounslow", "Harrow", "Brent", "Enfield",
  "Haringey", "Newham", "Redbridge", "Waltham Forest", "Barking & Dagenham",
  "Havering", "Bexley", "Hillingdon", "Hammersmith & Fulham",
  "Kensington & Chelsea",
];

export const formatGBP = (pounds: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: pounds % 1 === 0 ? 0 : 2,
  }).format(pounds);
