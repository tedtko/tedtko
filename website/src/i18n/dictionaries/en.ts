import type { Dict } from "../types";
import { currencyFor, money } from "../config";
import { invoiceLimits, packages, setupFee, site as S } from "@/lib/site";

const mail = `[${S.supportEmail}](mailto:${S.supportEmail})`;
const RT = "2 business days";

/** English text, used by the UK site ("en", pounds) and the US site ("us", dollars). */
export function buildEnglish(loc: "en" | "us"): Dict {
const m = (n: number) => money(n, loc);
const C = currencyFor(loc);
const P = Object.fromEntries(packages.map((p) => [p.id, p.price[C]])) as Record<string, number>;

return {
  meta: {
    siteTitle: "Remote Architectural CAD Drawings & Planning Packs",
    siteDescription:
      "Fixed-fee 2D & 3D architectural design packs, floor plans and building regulations drawings produced remotely from your measurements and photos. Delivered digitally in PDF & DWG.",
  },
  nav: {
    packages: "Packages", howItWorks: "How It Works", samples: "Sample Deliverables", faq: "FAQ",
    payInvoice: "Pay Invoice", contact: "Contact", cta: "View Drawing Packages",
    menuOpen: "Open menu", menuClose: "Close menu", home: "home", skip: "Skip to content", language: "Language",
  },
  hero: {
    eyebrow: "Architectural CAD Design Studio",
    titleA: "Remote Architectural CAD Drawings & Planning Packs.",
    titleB: "100% Online.",
    lead: "Fixed-fee 2D & 3D architectural design packs, floor plans, and building regulations drawings produced remotely from your measurements, sketches, and photos, drawn to the building standards of your country. Delivered digitally in PDF & DWG formats.",
    badgesLabel: "Why choose us",
    badges: ["100% Remote Digital Delivery", "Fixed Transparent Pricing", "Drafted to Your Country's Building Codes", "Fast Digital Turnaround"],
    ctaPrimary: "View Drawing Packages",
    ctaSecondary: "How It Works",
  },
  home: {
    packagesEyebrow: "Fixed-scope digital packs", packagesTitle: "Drawing packages",
    packagesLead: "Clear deliverables, fixed revision rounds and a set digital delivery timeline. No surprises.",
    howEyebrow: "Remote workflow", howTitle: "How it works", howLead: "Four simple steps, entirely online.",
    samplesEyebrow: "What's included in your digital pack", samplesTitle: "Sample drawing deliverables",
    samplesMore: "See all sample deliverables",
    faqEyebrow: "FAQ", faqTitle: "Common questions", faqMore: "Read all FAQs",
  },
  packages: {
    metaTitle: "Drawing Packages & Prices",
    metaDescription: `Fixed-fee remote CAD drawing packs: Essential ${m(P.essential)}, Standard ${m(P.standard)} and Premium ${m(P.premium)} (+ 20% UK VAT). Delivered digitally in PDF & DWG.`,
    pageEyebrow: "Fixed-scope digital packs",
    pageTitle: "Drawing packages",
    pageLead: "Choose your pack, complete your order online, then upload your measurements and photos. We draft everything remotely and deliver your files digitally.",
    popular: "Most popular",
    plusVat: "+ VAT",
    incVat: "{amount} inc. 20% UK VAT",
    orderLabel: "Order {name} Pack: {price} + VAT",
    items: {
      essential: {
        name: "Essential",
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
      standard: {
        name: "Standard",
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
      premium: {
        name: "Premium",
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
    },
    vatNote: "All prices exclude 20% UK VAT where applicable. Stage payment options (50% booking deposit / 50% prior to final CAD/DWG release) are available on request. [Contact us](/contact) before ordering.",
    outsideUkNote: "Clients worldwide, including the UK, Europe and the USA: your drawings are produced to the building codes and drawing standards of **your** country, not UK standards. Project outside the UK? Please [contact us](/contact) before ordering so we can confirm your local requirements and the correct VAT treatment.",
    excludesNote: "Secure online checkout. Excludes structural engineering calculations, council or authority fees and any physical building work.",
    cancelled: "Your payment was cancelled and you have not been charged.",
    paymentTitle: "Payment options",
    paymentText: "Pay securely at checkout or by invoice. Options include major credit and debit cards, digital wallets such as Apple Pay and Google Pay, and other bank or regional payment methods where our payment provider supports them for your country and currency. Available options are shown at checkout. Prefer to pay by bank transfer against an invoice? [Contact us](/contact). US clients can pay invoices in US dollars (USD) on our [Pay Invoice](/pay) page, including by US bank payment (ACH) where available.",
  },
  order: {
    groupLabel: "Confirm your order",
    agree: "I agree to the [Terms & Conditions](/terms) and [Refund & Cancellation Policy](/refund-policy). I understand all drawings are produced remotely from the measurements and photos I supply, and I am responsible for their accuracy.",
    start: "**Optional:** I ask you to start work as soon as I submit my measurements, within the 14-day cancellation period. I understand that if I then cancel I must pay for work already done, and that I lose my right to cancel once the service has been fully performed.",
    continue: "Continue to secure payment",
    opening: "Opening secure checkout…",
    noStartNote: "Without the optional box, we'll start drafting after your 14-day cancellation period ends.",
  },
  steps: [
    { title: "Select your fixed-scope digital pack", text: "Choose Essential, Standard or Premium and complete your order online." },
    { title: "Upload your measurements & photos", text: "Send your hand-drawn measurements, property photos, estate agent floor plans and project brief through our secure online intake form." },
    { title: "Remote CAD drafting & 3D modelling", text: "Our UK-based CAD design team produces your scaled architectural drawings and technical packs remotely, to the building standards of the country where your property is." },
    { title: "Digital delivery & revisions", text: "Receive watermarked review PDFs by email, request your included revision round(s), then download your final unwatermarked PDF & DWG files." },
  ],
  howPage: {
    metaTitle: "How It Works",
    metaDescription: "Our 4-step remote workflow: choose a pack, upload your measurements and photos, we draft remotely, and you receive your PDF & DWG files digitally.",
    eyebrow: "Remote workflow", title: "How it works", lead: "Everything happens online. We never visit your property.",
    sendTitle: "What to send us",
    sendList: [
      "Room-by-room measurements (a hand sketch with dimensions is fine)",
      "Overall external measurements and ceiling heights",
      "Photos of every elevation and each room affected",
      "Existing floor plans if you have them (e.g. from an estate agent listing)",
      "A short brief: what you want to build or change",
      "Any known boundary details or previous planning references",
    ],
    uploadCta: "Upload measurements",
    goodTitle: "Good to know",
    goodList: [
      "Your delivery timeline starts when we receive complete measurements.",
      "Review drafts are watermarked PDFs. Final files are unwatermarked PDF & DWG.",
      "Revision rounds must be used within the window stated for your pack.",
      "You're responsible for the accuracy of the measurements you supply.",
      "Structural calculations, authority fees and building work are not included.",
    ],
    goodMore: "Full details are in our [Terms & Conditions](/terms).",
  },
  samples: {
    metaTitle: "Sample Deliverables",
    metaDescription: "What's included in your digital drawing pack: floor plans, elevations, site plans, building regulations sections and 3D renders.",
    eyebrow: "What's included in your digital pack", title: "Sample drawing deliverables",
    lead: "Every drawing is scaled, titled and supplied as print-ready PDF and editable DWG CAD files.",
    items: [
      { title: "2D floor plans", text: "Existing & proposed layouts, dimensioned (PDF & DWG). All packs." },
      { title: "Elevations", text: "Materials, heights & openings for every face. All packs." },
      { title: "Site & location plans", text: "Scaled reference plans for your submission. All packs." },
      { title: "Sections & build-up details", text: "Annotated technical sections for building regulations. Standard & Premium." },
      { title: "3D exterior & massing renders", text: "High-res visuals of the proposed design. Standard & Premium." },
    ],
    note: "Illustrative examples of drawing types. Your drawings are drafted to your property.",
  },
  faq: {
    metaTitle: "FAQ",
    metaDescription: "Answers about our remote CAD drawing packs: what to send, file formats, revisions, payments and cancellations.",
    eyebrow: "FAQ", title: "Frequently asked questions",
    items: [
      ["Do you visit my property?", "No. We're a 100% remote design studio. Every drawing is produced from the measurements, sketches and photos you send us, so we never visit your property."],
      ["Which building standards will my drawings follow?", "The standards of the country (and local area) where your property is, not UK standards. UK projects follow the UK Building Regulations and planning rules; projects in Europe follow the national and local rules there; US projects follow the building codes adopted by your state and local jurisdiction (typically based on the IRC/IBC). Drawings use the units and sheet sizes normal in your country, metric or imperial (feet and inches). Tell us your local authority and any specific requirements in your brief."],
      ["Do you work with clients in the USA and other countries?", "Yes. We work fully remotely for clients in the UK, Europe, the USA and worldwide. Please contact us before ordering so we can confirm your local requirements and the correct VAT treatment. We don't provide professional stamps or seals: if your jurisdiction requires sealed drawings for a permit, a locally licensed professional must review and seal them."],
      ["What do I need to send you?", "Rough measurements of each room and the outside of the property (a hand sketch is fine), photos of every elevation and the rooms affected, any existing floor plans (e.g. from an estate agent listing), and a short description of what you want to build."],
      ["How accurate do my measurements need to be?", "As accurate as you can make them. We draft to the dimensions you give us, so errors carry through to the drawings. We'll flag anything that looks inconsistent, but you're responsible for the accuracy of what you submit (see our Terms)."],
      ["What file formats will I receive?", "PDF drawings ready to print or upload to a planning portal, plus editable DWG CAD files. The Standard and Premium packs also include high-res 3D render images, and Premium includes a PDF/DOCX specification."],
      ["How can I pay?", "At checkout you can pay by major credit or debit card, digital wallets such as Apple Pay and Google Pay, and other bank or regional methods where our payment provider supports them for your country and currency. We can also issue an invoice, which you can pay online on our Pay Invoice page."],
      ["Do you submit the planning application for me?", "We supply a submission-ready drawing set formatted for the relevant planning portal. You submit it and pay the authority's fees. We're happy to explain what goes where."],
      ["Are structural calculations or authority fees included?", "No. Structural engineering calculations, planning and building control fees, and any physical building work are not included."],
      ["Can I pay in stages?", "Yes. On request we can split the fee into a 50% booking deposit and 50% before your final CAD/DWG files are released. Get in touch before ordering."],
      ["Can I cancel?", "Yes. Consumers have a 14-day cancellation right. If you ask us to start work within that period, we may charge for work already done. Full details are in our Refund & Cancellation Policy."],
    ],
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: `Contact ${S.tradingName}. Questions about our remote drawing packs answered within ${RT}.`,
    eyebrow: "Get in touch", title: "Contact us", lead: `Questions before you order? We reply within ${RT}.`,
    emailNote: "Email, the best way to reach us", phoneNote: "Phone support",
    whatsapp: "Message us on WhatsApp", whatsappNote: "Quick questions",
    already: "Already ordered? [Upload your measurements and photos here](/intake).",
    formTitle: "Send us a message",
    waText: "Hi, I have a question about your drawing packs.",
  },
  intake: {
    metaTitle: "Upload Measurements & Photos",
    metaDescription: "Secure project intake: upload your measurements, sketches, photos and brief for your drawing pack.",
    eyebrow: "Project intake", title: "Upload your measurements & photos",
    lead: "Send us everything we need to draft your drawings. Your delivery timeline starts once we have complete measurements.",
    trouble: `Trouble uploading? Email your files to ${mail} with your order reference.`,
  },
  pay: {
    metaTitle: "Pay an Invoice",
    metaDescription: `Pay your ${S.tradingName} invoice securely online.`,
    eyebrow: "Existing clients", title: "Pay an invoice",
    lead: "Enter the invoice number and the total due (inc. VAT) shown on your invoice, then pay securely on our payment provider's checkout page. You can pay in pounds (GBP), euros (EUR) or US dollars (USD).",
    questions: `Questions about an invoice? Email ${mail}`,
    cancelled: "Payment cancelled. You have not been charged.",
    achTitle: "Pay by US bank transfer (ACH)",
    achIntro: "US clients can also pay in US dollars by ACH or wire transfer from a US bank account:",
    achNote: "Please use your invoice number as the payment reference. US bank transfers usually arrive within 1–3 business days.",
    achRefValue: "Your invoice number",
    achLabels: { accountName: "Account name", bankName: "Bank", routing: "Routing number (ACH)", account: "Account number", accountType: "Account type", bankAddress: "Bank address", reference: "Payment reference" },
  },
  forms: {
    name: "Full name", email: "Email", phone: "Phone", optional: "(optional)",
    orderRef: "Order reference", orderRefHint: "(from your confirmation email)",
    interested: "Interested in", notSure: "Not sure yet", packSuffix: "pack",
    yourPack: "Your pack", select: "Select…", address: "Property address & postcode",
    files: "Measurements, sketches, photos & floor plans", filesHint: "(JPG, PNG, HEIC, PDF, DWG, DXF or DOCX, up to 4 MB in total)",
    link: "Link to larger files", linkHint: "(WeTransfer, Google Drive, Dropbox, optional)",
    brief: "Project brief",
    briefPlaceholder: "What would you like to build or change? Include ceiling heights, wall thicknesses and any known boundary details.",
    message: "Your message", sendIntake: "Submit my project details", sendContact: "Send message", sending: "Sending…",
    sentIntake: `Thank you. We've received your project details and will reply within ${RT}.`,
    sentContact: `Thank you. We've received your message and will reply within ${RT}.`,
    privacy: "We use your details only to deliver your drawings and reply to you. See our [Privacy Policy](/privacy-policy).",
    accuracy: "By submitting, you confirm the measurements and information supplied are accurate to the best of your knowledge.",
    invName: "Your name", invEmail: "Email for receipt", invNumber: "Invoice number", invAmount: "Amount due, inc. VAT", invCurrency: "Invoice currency",
    invSubmit: "Pay invoice securely", opening: "Opening secure checkout…",
    secure: "Payment details are entered on our payment provider's secure page. We never see or store your card details.",
  },
  errors: {
    terms_required: "Please confirm you agree to the Terms and the Refund & Cancellation Policy.",
    missing_fields: "Please fill in all required fields.",
    invalid_amount: `Please enter an amount between ${m(invoiceLimits.min)} and ${m(invoiceLimits.max)}.`,
    unavailable: `Online payment is temporarily unavailable. Please email ${S.supportEmail}`,
    too_large: "Your files are over 4 MB in total. Please share them with a link (e.g. WeTransfer or Google Drive) instead.",
    bad_type: "One of your files is a type we can't accept. Please use JPG, PNG, HEIC, PDF, DWG, DXF or DOCX.",
    generic: `Sorry, something went wrong. Please email ${S.supportEmail}`,
  },
  success: {
    metaTitle: "Order received", eyebrowPaid: "Payment successful", eyebrowThanks: "Thank you",
    title: "Thank you for your order", paid: "We've received your payment of {amount}.",
    processing: "Your payment is being processed. Bank payments (such as ACH or SEPA) usually take a few business days to clear, and we'll email you once yours has.", receipt: "A receipt has been sent to {email}.",
    ref: "Your order reference: {ref}",
    next: "**Next step:** upload your measurements, sketches and photos so we can begin drafting.",
    upload: "Upload measurements & photos",
    questions: `Questions? Email ${mail}. We reply within ${RT}.`,
  },
  cta: { title: "Ready to get your drawings?", text: "Fixed fees, 100% online, delivered as PDF & DWG.", primary: "View Drawing Packages", secondary: "Ask a question" },
  footer: {
    about: "Remote architectural CAD drawings, 2D & 3D design packs and planning & building regulations drawing files, produced from your measurements and photos and delivered digitally.",
    studio: "Studio", legal: "Legal", contact: "Contact",
    links: {
      packages: "Drawing packages", how: "How it works", samples: "Sample deliverables", faq: "FAQ",
      intake: "Upload measurements", pay: "Pay an invoice", terms: "Terms & Conditions",
      refund: "Refund & Cancellation Policy", privacy: "Privacy Policy", cookies: "Cookie Policy",
      notice: "Legal Notice / Impressum", cookieSettings: "Cookie Settings",
    },
    whatsapp: "WhatsApp us", replyWithin: `We reply within ${RT}`,
    registered: `${S.legalName} trading as ${S.tradingName}. Registered in England & Wales.`,
    companyNo: "Company Registration Number", office: "Registered Office", vat: "VAT Number",
    email: "Email", phone: "Phone", arb: "An architectural CAD design & drafting studio. Not registered with the ARB.",
  },
  cookie: {
    title: "Cookies on this website",
    text: "We use strictly necessary storage to make this site work and remember your choice. With your permission we'd also like to use analytics cookies to understand how the site is used. These stay off unless you accept. [Read our Cookie Policy](/cookie-policy).",
    necessary: "Strictly necessary", necessaryDesc: "(always on): security, checkout and saving your cookie choice.",
    analytics: "Analytics", analyticsDesc: "(optional): anonymous statistics on page visits.",
    reject: "Reject Non-Essential", accept: "Accept All", manage: "Manage settings", save: "Save my choices",
    open: "Open Cookie Settings",
  },
  legal: {
    eyebrow: "Legal",
    updated: "Last updated: {date}",
    translationNote: "",
    terms: {
      metaTitle: "Terms & Conditions", metaDescription: `Terms & Conditions for ${S.tradingName} remote CAD drawing services.`,
      title: "Terms & Conditions",
      sections: [
        { h: "1. About us", body: [
          `These terms apply to all orders placed with **${S.legalName}**, trading as **${S.tradingName}** ("we", "us"), a company registered in England & Wales under company number ${S.companyNumber}, registered office ${S.registeredOffice}, VAT number ${S.vatNumber}. Contact: ${mail}, ${S.phoneDisplay}.`,
        ] },
        { h: "2. Our services", body: [
          "We provide **bespoke digital CAD drafting and architectural drawing production**: 2D and 3D drawings, planning drawing sets, building regulations drawing packs and related technical documents, based entirely on the dimensions, sketches, photos and information you supply.",
          { ul: [
            "Our services are delivered **100% remotely**. We do not visit your property and do not carry out measured site surveys.",
            "We supply digital files only (PDF, DWG, image files and, where stated, DOCX). We do not supply physical goods.",
            "We do not carry out, manage or supervise any physical building, construction or renovation work.",
            "We are an architectural CAD design and drafting studio providing CAD drafting services. We are **not registered with the ARB**, and we do not use any professional title protected by UK law.",
            "Unless agreed in writing, we do not act as Principal Designer under the Construction (Design and Management) Regulations 2015 or the Building Regulations, and we do not provide structural engineering services.",
          ] },
        ] },
        { h: "3. Ordering", body: [
          "You place an order by choosing a package, agreeing to these terms and paying online. Your contract is formed when we email you to confirm your order. If we can't accept your order (for example, because the project can't be drafted remotely), we'll tell you and refund you in full.",
        ] },
        { h: "4. Prices & payment", body: [
          { ul: [
            `Package prices are fixed fees shown **excluding VAT**: Essential ${m(P.essential)}, Standard ${m(P.standard)}, Premium ${m(P.premium)}. UK VAT at 20% is added where applicable and shown at checkout. For projects outside the UK, we'll confirm the VAT treatment before you order.`,
            "You can pay at checkout or by invoice using the payment methods our payment provider offers for your country and currency (for example cards, digital wallets and supported bank or regional methods).",
            "On request, we may agree stage payments of a 50% booking deposit and 50% before release of your final CAD/DWG files.",
            "We release final unwatermarked files only once full payment has cleared.",
          ] },
        ] },
        { h: "5. Your information & measurement responsibility", body: [
          "Because our services are entirely remote and we make no physical site visits, **you are solely responsible for the accuracy and completeness of all measurements, boundary lines, levels, property photos and other information you submit**. We draft to the information you give us. We'll point out obvious inconsistencies we notice, but we are not responsible for errors or consequences (including refusals, rework or building costs) that result from inaccurate or incomplete information supplied by you. You should check all dimensions on site before relying on the drawings for building work or ordering materials.",
          "You confirm you have the right to send us any plans, photos or documents you upload, including any created by third parties.",
        ] },
        { h: "6. Scope, revisions & exclusions", body: [
          { ul: [
            `**Essential:** 1 digital revision round within 14 days of first draft delivery.`,
            `**Standard:** 2 digital revision rounds within 14 days of first draft delivery.`,
            `**Premium:** up to 3 digital revision rounds within 21 days of first draft delivery.`,
          ] },
          "A revision round is one consolidated set of amendments to the drawings already produced, within the original scope. New designs, changes to the overall scheme, or revisions requested after the revision window has closed are outside scope, and we'll quote for them before doing any work.",
          { h3: "Not included unless expressly stated in your package" },
          { ul: [
            "Structural engineering calculations or designs",
            "Statutory fees, including planning application and building control fees",
            "Submitting applications on your behalf, or acting as your agent with any authority",
            "Measured or topographical surveys, site visits or inspections",
            "Party wall surveyor services",
            "Any physical building, construction or renovation work",
          ] },
        ] },
        { h: "7. Timelines", body: [
          "Delivery timelines are stated in business days and start once we have received complete measurements and information from you. They are good-faith estimates. If we need more information, the timeline pauses until we receive it. If you did not ask us to start during the 14-day cancellation period, the timeline starts after that period ends.",
        ] },
        { h: "8. Approvals", body: [
          "We prepare your drawings to the **building codes, planning rules and drawing standards of the country and local area where your property is located**, not to UK standards unless your property is in the UK. For example: UK Building Regulations in the UK; national and local rules in EU countries; and the codes adopted by your state and local jurisdiction in the USA (typically based on the IRC/IBC), in imperial or metric units as appropriate. Please tell us your local authority and any specific local requirements; requirements vary between areas and you remain responsible for confirming them with your authority. Decisions on permits and approvals are made by the relevant authority, and **we cannot guarantee any application will be approved**. We do not provide professional stamps or seals; where local law requires sealed drawings, a locally licensed professional must review and seal them. Amendments requested by an authority within the scope of your package count towards your included revision rounds.",
        ] },
        { h: "9. Intellectual property", body: [
          "Full copyright in the final CAD/PDF drawings we produce for you **transfers to you on receipt of full, cleared payment**. Until then, the drawings remain our property and must not be used or submitted. Our standard templates, title blocks and generic details remain ours, but you have a permanent licence to use them as part of your drawings. We'll only show your project in our portfolio with your permission.",
        ] },
        { h: "10. Cancellation & refunds", body: [
          `Your cancellation rights and the amounts we refund are set out in our [Refund & Cancellation Policy](/refund-policy), which forms part of these terms. In summary: full refund before drafting begins; refund less a ${m(setupFee[C])} set-up charge after your intake has been reviewed but before the first draft; and normally no refund once the first draft set has been delivered.`,
        ] },
        { h: "11. Our liability", body: [
          { ul: [
            "Nothing in these terms limits our liability for death or personal injury caused by our negligence, for fraud, or for anything else that cannot be limited by law.",
            "If you are a consumer, we must provide our services with reasonable care and skill, and you have legal rights under the Consumer Rights Act 2015 (and, if you live in the EU/EEA, under the mandatory consumer law of your country). Nothing in these terms affects those rights.",
            "We are not responsible for losses caused by inaccurate information you supply, by your failure to check dimensions, by decisions of any planning or building control authority, or by building work carried out by others.",
            "If you are a business customer, our total liability to you is limited to the fees you paid for the relevant package, and we are not liable for indirect or consequential loss or loss of profit.",
          ] },
        ] },
        { h: "12. Complaints", body: [
          `If you're unhappy with our service, email ${mail}. We'll reply within ${RT} and work with you to put things right. Please contact us before raising a dispute with your bank or card provider. This does not affect your legal rights.`,
        ] },
        { h: "13. Data protection", body: ["We use your personal data as described in our [Privacy Policy](/privacy-policy)."] },
        { h: "14. Governing law & international customers", body: [
          { ul: [
            "These terms are governed by the law of **England and Wales**, and the courts of England and Wales have jurisdiction.",
            "If you are a consumer living in Scotland or Northern Ireland, you may also bring proceedings in your local courts.",
            "If you are a consumer living in the EU/EEA, this choice of law does not deprive you of the protection of the mandatory consumer laws of your country of residence, and you may also be able to bring proceedings in your local courts. See our [Legal Notice](/legal-notice) for more information.",
            "We may update these terms. The version on the website when you place your order applies to that order. If any part of these terms is unenforceable, the rest remains in effect.",
          ] },
        ] },
      ],
    },
    refund: {
      metaTitle: "Refund & Cancellation Policy", metaDescription: "Your 14-day cancellation rights and our refund tiers for bespoke digital drawing packs.",
      title: "Refund & Cancellation Policy",
      sections: [
        { h: "1. Your 14-day right to cancel", body: [
          "If you are a consumer, you have the right to cancel your order within **14 days** of the day we confirm it, without giving a reason. For UK consumers this right comes from the **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**. Consumers in the EU/EEA have an equivalent right of withdrawal under the consumer law of their country.",
        ] },
        { h: "2. Bespoke drafting & starting during the cancellation period", body: [
          "Each drawing pack is a **bespoke service, custom-drafted to your property's specific measurements**. We won't begin drafting during the 14-day cancellation period unless you expressly ask us to.",
          { ul: [
            "**If you don't ask us to start early,** we begin after the 14 days have passed, and you can cancel for a full refund at any time before then.",
            "**If you ask us to start early** (by ticking the box when you order, or by asking us in writing) and then cancel within the 14 days, you must pay for the work we have already done up to the point you tell us you are cancelling, as set out in the refund tiers below.",
            "**You lose your right to cancel once the service has been fully performed** (your final drawing files have been delivered), if this happens within the 14 days at your express request and with your acknowledgement.",
          ] },
        ] },
        { h: "3. Refund tiers", body: [
          "These tiers show how we work out the value of work done. They apply to all orders, whether you cancel within or after the 14-day period.",
          { table: { head: ["When you cancel", "What you get back"], rows: [
            ["Before you have submitted your measurements, and before CAD drafting has begun", "**100% full refund**"],
            ["After we have started reviewing your intake (measurements, photos and brief), but before your first draft PDFs are issued", `**Full refund less a ${m(setupFee[C])} set-up charge** (+ VAT where applicable), covering intake review, set-up and base drafting work`],
            ["After your first draft PDF set has been delivered to you", "**Normally non-refundable.** The bespoke drafting work is substantially complete. If any substantial part of your package has not yet been carried out, we'll refund a fair amount for that part."],
          ] } },
          "Business customers do not have the statutory 14-day right to cancel, but may cancel at any time on the same refund tiers.",
        ] },
        { h: "4. How to cancel", body: [
          `Email ${mail} with your name, order reference and a clear statement that you wish to cancel. You may use the model form below, but you don't have to.`,
          { box: [
            "**Model cancellation / withdrawal form**",
            `To: ${S.legalName} t/a ${S.tradingName}, ${S.registeredOffice}, ${S.supportEmail}`,
            "I hereby give notice that I cancel my contract for the supply of the following service: [package name]",
            "Ordered on: [date] · Order reference: [reference]",
            "Name: [your name] · Address: [your address] · Date: [date]",
          ] },
        ] },
        { h: "5. Refunds", body: [
          "We'll refund any amount due within **14 days** of receiving your cancellation, using the same payment method you used to pay. We don't charge a fee for making the refund.",
        ] },
        { h: "6. If we cancel", body: [
          "If we can't complete your drawings (for example, because the project can't be drafted accurately from remote information), we'll tell you why and refund you for any part of the service not yet provided.",
        ] },
        { h: "7. Problems & disputes", body: [
          `Please contact us first at ${mail}. We guarantee a response within **${RT}**, and we'll work with you to resolve the problem. Please give us the chance to put things right before raising a payment dispute or chargeback with your bank. None of this affects your statutory rights.`,
        ] },
      ],
    },
    privacy: {
      metaTitle: "Privacy Policy", metaDescription: `How ${S.tradingName} collects and uses your personal data.`,
      title: "Privacy Policy",
      sections: [
        { h: "1. Who we are", body: [
          `**${S.legalName}** (trading as ${S.tradingName}), company number ${S.companyNumber}, registered office ${S.registeredOffice}, is the **data controller** for the personal data described in this policy. Contact us about privacy at ${mail}`,
          "This policy explains how we handle your data under the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018 and the Data (Use and Access) Act 2025. If you are in the EU/EEA, we also respect your rights under the EU GDPR.",
        ] },
        { h: "2. What we collect", body: [
          { ul: [
            "**Contact details:** name, email address, phone number.",
            "**Project details:** property address, your brief, and the measurements, sketches, floor plans, photos and documents you upload.",
            "**Order & billing details:** what you bought, amounts paid, billing address, and a record of the terms and cancellation choices you agreed to. Payment details are handled by our payment processor; we never see or store your full card number.",
            "**Communications:** emails, form messages and WhatsApp messages you send us.",
            "**Technical data:** basic server logs (such as IP address and browser type) kept by our hosting provider for security, and your cookie choices.",
          ] },
          "Photos of your property may show people, vehicles or neighbouring properties. Please avoid including people where possible.",
        ] },
        { h: "3. Why we use it, and our lawful bases", body: [
          { table: { head: ["Purpose", "Lawful basis"], rows: [
            ["Taking your order, producing and delivering your drawings, handling revisions and refunds", "Contractual necessity"],
            ["Keeping accounting and tax records for HMRC", "Legal obligation"],
            ["Answering enquiries before you order", "Steps at your request before a contract / legitimate interests"],
            ["Preventing fraud, keeping our website secure, handling disputes or legal claims", "Legitimate interests"],
            ["Optional analytics cookies (only if you accept them)", "Consent, which you can withdraw at any time"],
          ] } },
          "We don't sell your data, use it for marketing without your consent, or make decisions about you by automated means.",
        ] },
        { h: "4. Who we share it with", body: [
          "We use trusted service providers (processors) who handle data only on our instructions:",
          { ul: [
            "**Payment processors:** Stripe (and Dodo Payments if used), to take payments and prevent fraud.",
            "**Website hosting:** Vercel.",
            "**Email hosting:** for email and form submissions (e.g. Google).",
            "**Cloud file storage:** for storing project files and delivering drawings, and any file-transfer service you choose to use.",
            "**WhatsApp (Meta):** only if you choose to message us there.",
            "**Our accountants** and professional advisers, and HMRC or other authorities where the law requires.",
          ] },
          "Some providers process data outside the UK/EEA (for example in the USA). Where they do, transfers are protected by adequacy regulations (such as the UK–US data bridge or EU–US Data Privacy Framework) or standard contractual clauses / the UK International Data Transfer Agreement or Addendum.",
        ] },
        { h: "5. How long we keep it", body: [
          { ul: [
            "Order, invoice and payment records: **6 years** after the end of the financial year they relate to (HMRC requirement).",
            "Project files and drawings: **6 years** after completion, in case of queries or claims.",
            "Enquiries that don't lead to an order: **12 months**.",
            "Cookie choices: until you change them or clear your browser storage.",
          ] },
        ] },
        { h: "6. Your rights", body: [
          "You have the right to: **access** your data; have inaccurate data **rectified**; have data **erased** where there is no reason for us to keep it; **restrict** how we use it; receive data you gave us in a **portable** format; **object** to processing based on legitimate interests; and **withdraw consent** at any time (for example using Cookie Settings in the footer).",
          `To use any of these rights, email ${mail}. We'll respond within **one month**. This can be extended by up to two further months for complex requests, and if so we'll tell you why.`,
        ] },
        { h: "7. Complaints", body: [
          `If you're unhappy with how we've handled your data, please complain to us first at ${mail}. We'll acknowledge your complaint within **30 days** (we aim for ${RT}), look into it promptly, and tell you the outcome without undue delay.`,
          "You also have the right to complain to the **UK Information Commissioner's Office (ICO)**: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/), 0303 123 1113. If you live in the EU/EEA, you may also complain to the data protection authority in your country.",
        ] },
        { h: "8. Security", body: ["We use encrypted connections (HTTPS), reputable providers and access controls to protect your data. No system is completely secure, so please don't send unnecessary sensitive information."] },
        { h: "9. Cookies & changes", body: ["See our [Cookie Policy](/cookie-policy). We may update this policy; the latest version will always be on this page."] },
      ],
    },
    cookies: {
      metaTitle: "Cookie Policy", metaDescription: `How ${S.tradingName} uses cookies and similar technologies.`,
      title: "Cookie Policy",
      sections: [
        { h: "1. What are cookies?", body: [
          `This policy explains how ${S.legalName} (trading as ${S.tradingName}) uses cookies and similar technologies, in line with the Privacy and Electronic Communications Regulations (PECR), UK GDPR and the EU ePrivacy rules. Cookies are small files stored on your device by websites you visit. Similar technologies, such as your browser's local storage, work in a similar way. We call them all "cookies" here.`,
        ] },
        { h: "2. Cookies we use", body: [
          { table: { head: ["Name", "Type", "Purpose", "Duration"], rows: [
            ["ftds-cookie-consent (local storage)", "Strictly necessary", "Remembers whether you accepted or rejected non-essential cookies", "Until you change it or clear storage"],
            ["Payment provider cookies (e.g. Stripe)", "Strictly necessary", "Set on the payment provider's secure checkout page for fraud prevention and to process your payment. Governed by the provider's own policy.", "Set by the provider"],
            ["_ga, _ga_* (Google Analytics)", "Analytics (optional)", "Anonymous statistics on how visitors use the site. **Only set if you accept analytics.** If we don't use analytics, these are never set.", "Up to 2 years"],
          ] } },
          "We don't use advertising or marketing cookies. Our fonts are hosted on our own website, so loading a page does not send your data to font providers. Your language choice is part of the web address, not a cookie.",
        ] },
        { h: "3. Your choices", body: [
          "When you first visit, we ask for your choice using a banner with equally prominent **Accept All** and **Reject Non-Essential** buttons. Nothing optional is switched on in advance, and no analytics or marketing scripts load until you consent. You can change your mind at any time using **Cookie Settings** in the footer. You can also block or delete cookies in your browser settings; blocking strictly necessary cookies may stop checkout from working.",
        ] },
        { h: "4. More information", body: [`See our [Privacy Policy](/privacy-policy), or contact ${mail}`] },
      ],
    },
    notice: {
      metaTitle: "Legal Notice / Impressum & International Terms",
      metaDescription: `Company disclosures for ${S.legalName} t/a ${S.tradingName}, and cancellation information for UK and EU/EEA customers.`,
      title: "Legal Notice / Impressum & International Terms",
      sections: [
        { h: "1. Company information", body: [
          { box: [
            `**${S.legalName}**, trading as **${S.tradingName}**`,
            "Private limited company registered in England & Wales",
            `Company number: ${S.companyNumber} (Companies House)`,
            `Registered office: ${S.registeredOffice}`,
            `VAT number: ${S.vatNumber}`,
            ...(S.director ? [`Director: ${S.director}`] : []),
            `Email: ${S.supportEmail} · Phone: ${S.phoneDisplay}`,
          ] },
          "Business activity: remote architectural CAD drafting and digital drawing production. We are not registered with the ARB (UK) or any equivalent professional body in another country, and we do not use any protected professional title in any country.",
        ] },
        { h: "2. Who our services are for", body: [
          "We sell bespoke digital drawing packs online to customers in the UK and internationally, including Germany, France, Spain, Italy and the United States. Every customer receives drawings prepared to the building standards of their own country, not UK standards. All work is done remotely; we make no site visits and carry out no building work in any country.",
        ] },
        { h: "3. Cancellation & withdrawal: UK consumers", body: [
          "UK consumers have a 14-day right to cancel under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. If you expressly ask us to begin drafting within that period, you must pay for work done if you cancel, and you lose the right to cancel once the service has been fully performed. Details: [Refund & Cancellation Policy](/refund-policy).",
        ] },
        { h: "4. Withdrawal: EU/EEA consumers (Germany, France, Spain, Italy and others)", body: [
          "If you are a consumer living in the EU/EEA, you have a **right of withdrawal of 14 days** from the conclusion of the contract, without giving reasons, under the consumer law of your country (implementing Directive 2011/83/EU on consumer rights).",
          { ul: [
            `To withdraw, send us a clear statement (for example by email to ${S.supportEmail}) before the 14 days expire. You may use the model withdrawal form in our [Refund & Cancellation Policy](/refund-policy), but you don't have to.`,
            "If you withdraw, we will refund all payments received from you without undue delay and at the latest within 14 days of receiving your notice, using the same payment method.",
            "If you expressly requested that we begin the service during the withdrawal period, you must pay an amount proportionate to the service provided up to the time you notify us of your withdrawal.",
            "Your right of withdrawal expires once the service has been fully performed, if we started performance with your prior express consent and your acknowledgement that you lose the right of withdrawal on full performance.",
          ] },
        ] },
        { h: "5. Prices, VAT & currency", body: [
          "On our UK English site prices are shown and charged in pounds sterling (GBP), and on our US site in US dollars (USD); on our German, French, Spanish and Italian sites they are shown and charged in euros (EUR). Each currency has its own fixed price list (we do not convert at live exchange rates), so the price you see is the price you pay. Prices exclude UK VAT at 20%, with the VAT-inclusive total also shown. Your card issuer may apply its own exchange rate or fees. For properties outside the UK, different VAT rules may apply; please contact us before ordering so we can confirm the correct VAT treatment.",
        ] },
        { h: "6. Governing law, courts & disputes", body: [
          "Our contracts are governed by the law of **England and Wales**. If you are a consumer, this does not deprive you of the protection of the mandatory provisions of the law of your country of residence, and you may be able to bring proceedings in the courts of your country.",
          `If you have a complaint, please contact us first at ${mail}. We respond within ${RT}. You may also have access to alternative dispute resolution or consumer advice services in your country.`,
        ] },
        { h: "7. Languages", body: [
          "This website is available in English, German, French, Spanish and Italian. Translations are provided for your convenience. If there is any inconsistency, the English version applies, unless the mandatory law of your country requires otherwise.",
        ] },
        { h: "8. Responsible for content", body: [
          `${S.legalName}, ${S.registeredOffice}. Related policies: [Terms & Conditions](/terms), [Refund & Cancellation Policy](/refund-policy), [Privacy Policy](/privacy-policy), [Cookie Policy](/cookie-policy).`,
        ] },
      ],
    },
  },
  samplesFigures: { fileName: "proposed-ground-floor.dwg" },
};
}

const en = buildEnglish("en");
export default en;
