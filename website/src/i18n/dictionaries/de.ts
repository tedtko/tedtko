import type { Dict } from "../types";
import { currencyFor, money } from "../config";
import { invoiceLimits, packages, setupFee, site as S } from "@/lib/site";

const m = (n: number) => money(n, "de");
const C = currencyFor("de");
const P = Object.fromEntries(packages.map((p) => [p.id, p.price[C]])) as Record<string, number>;
const mail = `[${S.supportEmail}](mailto:${S.supportEmail})`;
const RT = "2 Werktagen";

const de: Dict = {
  meta: {
    siteTitle: "Architektonische CAD-Zeichnungen & Planungspakete – 100 % online",
    siteDescription:
      "2D- & 3D-Planungspakete zum Festpreis: Grundrisse, Ansichten und Bauantragszeichnungen, remote erstellt nach Ihren Maßen und Fotos. Digitale Lieferung als PDF & DWG.",
  },
  nav: {
    packages: "Pakete", howItWorks: "Ablauf", samples: "Beispielleistungen", faq: "FAQ",
    payInvoice: "Rechnung bezahlen", contact: "Kontakt", cta: "Zeichnungspakete ansehen",
    menuOpen: "Menü öffnen", menuClose: "Menü schließen", home: "Startseite", skip: "Zum Inhalt springen", language: "Sprache",
  },
  hero: {
    eyebrow: "Architektonisches CAD-Designstudio",
    titleA: "Architektonische CAD-Zeichnungen & Planungspakete aus der Ferne.",
    titleB: "100 % online.",
    lead: "2D- & 3D-Planungspakete zum Festpreis, Grundrisse und Zeichnungen nach den Bauvorschriften Ihres Landes – remote erstellt nach Ihren Maßen, Skizzen und Fotos. Digitale Lieferung als PDF & DWG.",
    badgesLabel: "Ihre Vorteile",
    badges: ["100 % digitale Lieferung", "Transparente Festpreise", "Nach den Bauvorschriften Ihres Landes", "Schnelle digitale Bearbeitung"],
    ctaPrimary: "Zeichnungspakete ansehen",
    ctaSecondary: "So funktioniert's",
  },
  home: {
    packagesEyebrow: "Digitale Pakete mit festem Umfang", packagesTitle: "Zeichnungspakete",
    packagesLead: "Klare Leistungen, feste Korrekturrunden und ein verbindlicher digitaler Lieferzeitraum. Keine Überraschungen.",
    howEyebrow: "Remote-Ablauf", howTitle: "So funktioniert's", howLead: "Vier einfache Schritte, komplett online.",
    samplesEyebrow: "Was Ihr digitales Paket enthält", samplesTitle: "Beispielhafte Zeichnungsleistungen",
    samplesMore: "Alle Beispielleistungen ansehen",
    faqEyebrow: "FAQ", faqTitle: "Häufige Fragen", faqMore: "Alle FAQ lesen",
  },
  packages: {
    metaTitle: "Zeichnungspakete & Preise",
    metaDescription: `CAD-Zeichnungspakete zum Festpreis: Essential ${m(P.essential)}, Standard ${m(P.standard)} und Premium ${m(P.premium)} (zzgl. 20 % britischer MwSt.). Digitale Lieferung als PDF & DWG.`,
    pageEyebrow: "Digitale Pakete mit festem Umfang",
    pageTitle: "Zeichnungspakete",
    pageLead: "Wählen Sie Ihr Paket, bestellen Sie online und laden Sie anschließend Ihre Maße und Fotos hoch. Wir zeichnen alles remote und liefern Ihre Dateien digital.",
    popular: "Am beliebtesten",
    plusVat: "zzgl. MwSt.",
    incVat: "{amount} inkl. 20 % britischer MwSt.",
    orderLabel: "{name}-Paket bestellen: {price} zzgl. MwSt.",
    items: {
      essential: {
        name: "Essential",
        subtitle: "Digitales Planungspaket für einfache Anbauten, Vorbauten und Nebengebäude.",
        deliverables: [
          "Digitaler CAD-Grundplan, remote erstellt nach Ihren Maßen, Skizzen & Fotos",
          "Bestands- & Entwurfsgrundrisse sowie Ansichten in 2D (PDF & DWG)",
          "Maßstäbliche Lage- und Übersichtspläne (digitales PDF-Paket)",
          "Einreichfertiger Zeichnungssatz, formatiert für den Portal-Upload",
        ],
        revisions: "1 digitale Korrekturrunde (innerhalb von 14 Tagen nach Lieferung des ersten Entwurfs)",
        timeline: "5–7 Werktage ab Eingang Ihrer Maße",
      },
      standard: {
        name: "Standard",
        subtitle: "Vollständiges digitales Paket für Genehmigungs- und Bauvorschrift-Zeichnungen, z. B. für zweigeschossige Anbauten & Dachausbauten.",
        deliverables: [
          "Alles aus dem Essential-Paket",
          "Detaillierte Schnitte & technische Konstruktionsdetails (PDF & DWG)",
          "3D-Außen- und Volumenvisualisierungen (hochauflösende Bilder)",
          "Technischer Zeichnungssatz mit Anmerkungen zu den Bauvorschriften",
        ],
        revisions: "2 digitale Korrekturrunden (innerhalb von 14 Tagen nach Lieferung des ersten Entwurfs)",
        timeline: "7–10 Werktage ab Eingang Ihrer Maße",
      },
      premium: {
        name: "Premium",
        subtitle: "Umfassendes Remote-Design- und Spezifikationspaket für Neubauten, Komplettsanierungen & Mehrparteien-Umbauten.",
        deliverables: [
          "Alles aus dem Standard-Paket",
          "Technische Spezifikation & Leistungsverzeichnis (PDF/DOCX)",
          "Referenzzeichnungen zu Grenzen, Belichtung & Ansichten",
          "Vollständiges ausschreibungsreifes CAD- & PDF-Zeichnungspaket",
        ],
        revisions: "Bis zu 3 digitale Korrekturrunden (innerhalb von 21 Tagen nach Lieferung des ersten Entwurfs)",
        timeline: "Priorität: 10–14 Werktage ab Eingang Ihrer Maße",
      },
    },
    vatNote: "Alle Preise verstehen sich zzgl. 20 % britischer Mehrwertsteuer, sofern anwendbar. Auf Anfrage ist eine Zahlung in Raten möglich (50 % Anzahlung bei Buchung / 50 % vor Freigabe der finalen CAD/DWG-Dateien). [Kontaktieren Sie uns](/contact) vor der Bestellung.",
    outsideUkNote: "Kunden weltweit, u. a. im Vereinigten Königreich, in Europa und den USA: Ihre Zeichnungen werden nach den Bauvorschriften und Zeichnungsstandards **Ihres** Landes erstellt, nicht nach britischen Standards. Projekt außerhalb des Vereinigten Königreichs? Bitte [kontaktieren Sie uns](/contact) vor der Bestellung, damit wir Ihre örtlichen Anforderungen und die korrekte umsatzsteuerliche Behandlung klären können.",
    excludesNote: "Sicherer Online-Checkout. Nicht enthalten: Statikberechnungen, Gebühren von Behörden sowie jegliche Bauleistungen vor Ort.",
    cancelled: "Ihre Zahlung wurde abgebrochen. Es wurde nichts abgebucht.",
    paymentTitle: "Zahlungsmöglichkeiten",
    paymentText: "Sie zahlen sicher im Checkout oder per Rechnung. Möglich sind gängige Kredit- und Debitkarten, digitale Wallets wie Apple Pay und Google Pay sowie weitere Bank- oder regionale Zahlungsarten, sofern unser Zahlungsanbieter sie für Ihr Land und Ihre Währung unterstützt. Die verfügbaren Optionen werden im Checkout angezeigt. Sie möchten lieber per Überweisung auf Rechnung zahlen? [Kontaktieren Sie uns](/contact). Kunden in den USA können Rechnungen auf unserer Seite [Rechnung bezahlen](/pay) in US-Dollar (USD) begleichen, wo verfügbar auch per US-Banküberweisung (ACH).",
  },
  order: {
    groupLabel: "Bestellung bestätigen",
    agree: "Ich akzeptiere die [AGB](/terms) und die [Widerrufs- & Erstattungsrichtlinie](/refund-policy). Mir ist bewusst, dass alle Zeichnungen remote anhand der von mir gelieferten Maße und Fotos erstellt werden und ich für deren Richtigkeit verantwortlich bin.",
    start: "**Optional:** Ich verlange ausdrücklich, dass Sie mit der Arbeit beginnen, sobald ich meine Maße übermittelt habe – noch vor Ablauf der 14-tägigen Widerrufsfrist. Mir ist bekannt, dass ich bei einem Widerruf die bis dahin erbrachten Leistungen bezahlen muss und mein Widerrufsrecht bei vollständiger Vertragserfüllung erlischt.",
    continue: "Weiter zur sicheren Zahlung",
    opening: "Sicherer Checkout wird geöffnet…",
    noStartNote: "Ohne das optionale Kästchen beginnen wir erst nach Ablauf Ihrer 14-tägigen Widerrufsfrist mit dem Zeichnen.",
  },
  steps: [
    { title: "Paket mit festem Umfang wählen", text: "Wählen Sie Essential, Standard oder Premium und schließen Sie Ihre Bestellung online ab." },
    { title: "Maße & Fotos hochladen", text: "Senden Sie uns Ihre handskizzierten Maße, Fotos der Immobilie, vorhandene Grundrisse und Ihre Projektbeschreibung über unser sicheres Online-Formular." },
    { title: "Remote-CAD-Zeichnung & 3D-Modellierung", text: "Unser CAD-Designteam mit Sitz im Vereinigten Königreich erstellt Ihre maßstäblichen Architekturzeichnungen und technischen Unterlagen remote – nach den Bauvorschriften des Landes, in dem Ihre Immobilie liegt." },
    { title: "Digitale Lieferung & Korrekturen", text: "Sie erhalten Entwurfs-PDFs mit Wasserzeichen per E-Mail, nutzen Ihre enthaltene(n) Korrekturrunde(n) und laden anschließend Ihre finalen PDF- & DWG-Dateien ohne Wasserzeichen herunter." },
  ],
  howPage: {
    metaTitle: "So funktioniert's",
    metaDescription: "Unser Remote-Ablauf in 4 Schritten: Paket wählen, Maße und Fotos hochladen, wir zeichnen remote, Sie erhalten Ihre PDF- & DWG-Dateien digital.",
    eyebrow: "Remote-Ablauf", title: "So funktioniert's", lead: "Alles läuft online. Wir besuchen Ihre Immobilie nie.",
    sendTitle: "Was Sie uns senden",
    sendList: [
      "Maße jedes Raums (eine Handskizze mit Abmessungen genügt)",
      "Außenmaße des Gebäudes und Raumhöhen",
      "Fotos aller Fassaden und jedes betroffenen Raums",
      "Vorhandene Grundrisse, falls verfügbar (z. B. aus einem Exposé)",
      "Eine kurze Beschreibung: was gebaut oder geändert werden soll",
      "Bekannte Grenzverläufe oder frühere Genehmigungsunterlagen",
    ],
    uploadCta: "Maße hochladen",
    goodTitle: "Gut zu wissen",
    goodList: [
      "Der Lieferzeitraum beginnt, sobald uns vollständige Maße vorliegen.",
      "Entwürfe erhalten Sie als PDFs mit Wasserzeichen, finale Dateien als PDF & DWG ohne Wasserzeichen.",
      "Korrekturrunden müssen innerhalb des für Ihr Paket genannten Zeitraums genutzt werden.",
      "Sie sind für die Richtigkeit der übermittelten Maße verantwortlich.",
      "Statik, Behördengebühren und Bauleistungen sind nicht enthalten.",
    ],
    goodMore: "Alle Einzelheiten finden Sie in unseren [AGB](/terms).",
  },
  samples: {
    metaTitle: "Beispielleistungen",
    metaDescription: "Was Ihr digitales Zeichnungspaket enthält: Grundrisse, Ansichten, Lagepläne, Schnitte für Bauvorschriften und 3D-Visualisierungen.",
    eyebrow: "Was Ihr digitales Paket enthält", title: "Beispielhafte Zeichnungsleistungen",
    lead: "Jede Zeichnung ist maßstäblich, beschriftet und wird als druckfertiges PDF und bearbeitbare DWG-CAD-Datei geliefert.",
    items: [
      { title: "2D-Grundrisse", text: "Bestand & Entwurf, bemaßt (PDF & DWG). Alle Pakete." },
      { title: "Ansichten", text: "Materialien, Höhen & Öffnungen jeder Fassade. Alle Pakete." },
      { title: "Lage- & Übersichtspläne", text: "Maßstäbliche Referenzpläne für Ihre Einreichung. Alle Pakete." },
      { title: "Schnitte & Aufbaudetails", text: "Beschriftete technische Schnitte für die Bauvorschriften. Standard & Premium." },
      { title: "3D-Außen- & Volumenvisualisierungen", text: "Hochauflösende Visualisierungen des Entwurfs. Standard & Premium." },
    ],
    note: "Beispielhafte Darstellungen der Zeichnungsarten. Ihre Zeichnungen werden für Ihre Immobilie erstellt.",
  },
  faq: {
    metaTitle: "FAQ",
    metaDescription: "Antworten zu unseren Remote-CAD-Zeichnungspaketen: Unterlagen, Dateiformate, Korrekturen, Zahlung und Widerruf.",
    eyebrow: "FAQ", title: "Häufig gestellte Fragen",
    items: [
      ["Kommen Sie zu meiner Immobilie?", "Nein. Wir sind ein 100 % remote arbeitendes Designstudio. Jede Zeichnung entsteht anhand der Maße, Skizzen und Fotos, die Sie uns senden – wir besuchen Ihre Immobilie nie."],
      ["Nach welchen Bauvorschriften werden meine Zeichnungen erstellt?", "Nach den Vorschriften des Landes (und der Region), in dem Ihre Immobilie liegt – nicht nach britischen Standards. Projekte im Vereinigten Königreich folgen den UK Building Regulations, Projekte in Europa den dortigen nationalen und örtlichen Vorschriften, Projekte in den USA den von Ihrem Bundesstaat und Ihrer Gemeinde übernommenen Bauordnungen (meist auf Basis von IRC/IBC). Maßeinheiten und Blattformate richten sich nach Ihrem Land (metrisch oder imperial). Nennen Sie uns bitte Ihre zuständige Behörde und besondere Anforderungen in Ihrer Beschreibung."],
      ["Arbeiten Sie auch für Kunden in den USA und anderen Ländern?", "Ja. Wir arbeiten vollständig remote für Kunden im Vereinigten Königreich, in Europa, den USA und weltweit. Bitte kontaktieren Sie uns vor der Bestellung, damit wir Ihre örtlichen Anforderungen und die korrekte umsatzsteuerliche Behandlung klären können. Wir stellen keine Prüfstempel oder Siegel aus: Wenn Ihre Behörde gesiegelte Zeichnungen verlangt, muss eine dort zugelassene Fachperson sie prüfen und siegeln."],
      ["Was muss ich Ihnen senden?", "Ungefähre Maße jedes Raums und der Außenseite des Gebäudes (eine Handskizze genügt), Fotos aller Fassaden und der betroffenen Räume, vorhandene Grundrisse (z. B. aus einem Exposé) und eine kurze Beschreibung Ihres Vorhabens."],
      ["Wie genau müssen meine Maße sein?", "So genau wie möglich. Wir zeichnen nach Ihren Angaben, daher übertragen sich Fehler in die Zeichnungen. Unstimmigkeiten weisen wir Ihnen hin, verantwortlich für die Richtigkeit sind jedoch Sie (siehe AGB)."],
      ["Welche Dateiformate erhalte ich?", "Druckfertige PDF-Zeichnungen für die Einreichung sowie bearbeitbare DWG-CAD-Dateien. Standard und Premium enthalten zusätzlich hochauflösende 3D-Bilder, Premium außerdem eine Spezifikation als PDF/DOCX."],
      ["Wie kann ich bezahlen?", "Im Checkout mit gängigen Kredit- oder Debitkarten, digitalen Wallets wie Apple Pay und Google Pay sowie weiteren Bank- oder regionalen Zahlungsarten, sofern unser Zahlungsanbieter sie für Ihr Land und Ihre Währung anbietet. Wir können Ihnen auch eine Rechnung stellen, die Sie online auf unserer Seite „Rechnung bezahlen“ begleichen."],
      ["Reichen Sie den Bauantrag für mich ein?", "Wir liefern einen einreichfertigen Zeichnungssatz. Die Einreichung und die Behördengebühren übernehmen Sie. Gern erklären wir, welche Unterlage wohin gehört."],
      ["Sind Statik oder Behördengebühren enthalten?", "Nein. Statikberechnungen, Genehmigungs- und Prüfgebühren sowie jegliche Bauleistungen sind nicht enthalten."],
      ["Kann ich in Raten zahlen?", "Ja. Auf Anfrage teilen wir das Honorar in 50 % Anzahlung und 50 % vor Freigabe der finalen CAD/DWG-Dateien. Bitte sprechen Sie uns vor der Bestellung an."],
      ["Kann ich widerrufen?", "Ja. Verbraucher haben ein 14-tägiges Widerrufsrecht. Wenn Sie verlangen, dass wir innerhalb dieser Frist beginnen, berechnen wir bei Widerruf die bis dahin erbrachten Leistungen. Einzelheiten finden Sie in unserer Widerrufs- & Erstattungsrichtlinie."],
    ],
  },
  contact: {
    metaTitle: "Kontakt",
    metaDescription: `Kontakt zu ${S.tradingName}. Wir beantworten Fragen zu unseren Zeichnungspaketen innerhalb von ${RT}.`,
    eyebrow: "Kontakt", title: "Kontaktieren Sie uns", lead: `Fragen vor der Bestellung? Wir antworten innerhalb von ${RT}.`,
    emailNote: "E-Mail – so erreichen Sie uns am besten", phoneNote: "Telefonischer Support",
    whatsapp: "Nachricht per WhatsApp", whatsappNote: "Für kurze Fragen",
    already: "Bereits bestellt? [Laden Sie hier Ihre Maße und Fotos hoch](/intake).",
    formTitle: "Nachricht senden",
    waText: "Hallo, ich habe eine Frage zu Ihren Zeichnungspaketen.",
  },
  intake: {
    metaTitle: "Maße & Fotos hochladen",
    metaDescription: "Sichere Projektaufnahme: Laden Sie Maße, Skizzen, Fotos und Beschreibung für Ihr Zeichnungspaket hoch.",
    eyebrow: "Projektaufnahme", title: "Maße & Fotos hochladen",
    lead: "Senden Sie uns alles, was wir für Ihre Zeichnungen benötigen. Der Lieferzeitraum beginnt, sobald vollständige Maße vorliegen.",
    trouble: `Probleme beim Hochladen? Senden Sie Ihre Dateien mit Ihrer Bestellnummer an ${mail}.`,
  },
  pay: {
    metaTitle: "Rechnung bezahlen",
    metaDescription: `Bezahlen Sie Ihre Rechnung von ${S.tradingName} sicher online.`,
    eyebrow: "Für Bestandskunden", title: "Rechnung bezahlen",
    lead: "Geben Sie die Rechnungsnummer und den Gesamtbetrag (inkl. MwSt.) laut Rechnung ein und zahlen Sie sicher auf der Checkout-Seite unseres Zahlungsanbieters. Sie können in Pfund (GBP), Euro (EUR) oder US-Dollar (USD) zahlen.",
    questions: `Fragen zu einer Rechnung? E-Mail an ${mail}`,
    cancelled: "Zahlung abgebrochen. Es wurde nichts abgebucht.",
    achTitle: "Zahlung per US-Banküberweisung (ACH)",
    achIntro: "Kunden in den USA können auch in US-Dollar per ACH- oder Wire-Überweisung von einem US-Bankkonto zahlen:",
    achNote: "Bitte geben Sie Ihre Rechnungsnummer als Verwendungszweck an. US-Überweisungen gehen in der Regel innerhalb von 1–3 Werktagen ein.",
    achRefValue: "Ihre Rechnungsnummer",
    achLabels: { accountName: "Kontoinhaber", bankName: "Bank", routing: "Routing-Nummer (ACH)", account: "Kontonummer", accountType: "Kontoart", bankAddress: "Anschrift der Bank", reference: "Verwendungszweck" },
  },
  forms: {
    name: "Vollständiger Name", email: "E-Mail", phone: "Telefon", optional: "(optional)",
    orderRef: "Bestellnummer", orderRefHint: "(aus Ihrer Bestätigungs-E-Mail)",
    interested: "Interesse an", notSure: "Noch unsicher", packSuffix: "-Paket",
    yourPack: "Ihr Paket", select: "Bitte wählen…", address: "Adresse der Immobilie & Postleitzahl",
    files: "Maße, Skizzen, Fotos & Grundrisse", filesHint: "(JPG, PNG, HEIC, PDF, DWG, DXF oder DOCX, insgesamt bis 4 MB)",
    link: "Link zu größeren Dateien", linkHint: "(WeTransfer, Google Drive, Dropbox, optional)",
    brief: "Projektbeschreibung",
    briefPlaceholder: "Was möchten Sie bauen oder ändern? Bitte Raumhöhen, Wandstärken und bekannte Grenzverläufe angeben.",
    message: "Ihre Nachricht", sendIntake: "Projektdaten senden", sendContact: "Nachricht senden", sending: "Wird gesendet…",
    sentIntake: `Vielen Dank. Wir haben Ihre Projektdaten erhalten und melden uns innerhalb von ${RT}.`,
    sentContact: `Vielen Dank. Wir haben Ihre Nachricht erhalten und melden uns innerhalb von ${RT}.`,
    privacy: "Wir verwenden Ihre Angaben nur, um Ihre Zeichnungen zu liefern und Ihnen zu antworten. Siehe [Datenschutzerklärung](/privacy-policy).",
    accuracy: "Mit dem Absenden bestätigen Sie, dass die übermittelten Maße und Angaben nach bestem Wissen korrekt sind.",
    invName: "Ihr Name", invEmail: "E-Mail für die Quittung", invNumber: "Rechnungsnummer", invAmount: "Fälliger Betrag inkl. MwSt.", invCurrency: "Rechnungswährung",
    invSubmit: "Rechnung sicher bezahlen", opening: "Sicherer Checkout wird geöffnet…",
    secure: "Zahlungsdaten geben Sie auf der sicheren Seite unseres Zahlungsanbieters ein. Ihre Kartendaten sehen oder speichern wir nie.",
  },
  errors: {
    terms_required: "Bitte bestätigen Sie, dass Sie die AGB und die Widerrufs- & Erstattungsrichtlinie akzeptieren.",
    missing_fields: "Bitte füllen Sie alle Pflichtfelder aus.",
    invalid_amount: `Bitte geben Sie einen Betrag zwischen ${m(invoiceLimits.min)} und ${m(invoiceLimits.max)} ein.`,
    unavailable: `Die Online-Zahlung ist vorübergehend nicht verfügbar. Bitte schreiben Sie an ${S.supportEmail}`,
    too_large: "Ihre Dateien sind insgesamt größer als 4 MB. Bitte teilen Sie sie stattdessen per Link (z. B. WeTransfer oder Google Drive).",
    bad_type: "Eine Ihrer Dateien hat ein nicht unterstütztes Format. Bitte verwenden Sie JPG, PNG, HEIC, PDF, DWG, DXF oder DOCX.",
    generic: `Leider ist ein Fehler aufgetreten. Bitte schreiben Sie an ${S.supportEmail}`,
  },
  success: {
    metaTitle: "Bestellung eingegangen", eyebrowPaid: "Zahlung erfolgreich", eyebrowThanks: "Vielen Dank",
    title: "Vielen Dank für Ihre Bestellung", paid: "Wir haben Ihre Zahlung über {amount} erhalten.",
    processing: "Ihre Zahlung wird bearbeitet. Bankzahlungen (z. B. SEPA oder ACH) werden in der Regel innerhalb einiger Werktage gutgeschrieben; wir benachrichtigen Sie per E-Mail, sobald Ihre Zahlung eingegangen ist.", receipt: "Eine Quittung wurde an {email} gesendet.",
    ref: "Ihre Bestellnummer: {ref}",
    next: "**Nächster Schritt:** Laden Sie Ihre Maße, Skizzen und Fotos hoch, damit wir mit dem Zeichnen beginnen können.",
    upload: "Maße & Fotos hochladen",
    questions: `Fragen? E-Mail an ${mail}. Wir antworten innerhalb von ${RT}.`,
  },
  cta: { title: "Bereit für Ihre Zeichnungen?", text: "Festpreise, 100 % online, geliefert als PDF & DWG.", primary: "Zeichnungspakete ansehen", secondary: "Frage stellen" },
  footer: {
    about: "Architektonische CAD-Zeichnungen, 2D- & 3D-Planungspakete sowie Genehmigungs- und Bauvorschrift-Zeichnungen – remote erstellt nach Ihren Maßen und Fotos und digital geliefert.",
    studio: "Studio", legal: "Rechtliches", contact: "Kontakt",
    links: {
      packages: "Zeichnungspakete", how: "Ablauf", samples: "Beispielleistungen", faq: "FAQ",
      intake: "Maße hochladen", pay: "Rechnung bezahlen", terms: "AGB",
      refund: "Widerrufs- & Erstattungsrichtlinie", privacy: "Datenschutzerklärung", cookies: "Cookie-Richtlinie",
      notice: "Impressum & internationale Bedingungen", cookieSettings: "Cookie-Einstellungen",
    },
    whatsapp: "WhatsApp-Nachricht", replyWithin: `Antwort innerhalb von ${RT}`,
    registered: `${S.legalName}, handelnd als ${S.tradingName}. Eingetragen in England & Wales.`,
    companyNo: "Handelsregisternummer (Companies House)", office: "Eingetragener Sitz", vat: "USt-IdNr.",
    email: "E-Mail", phone: "Telefon", arb: "Ein Studio für architektonisches CAD-Design und technisches Zeichnen. Nicht beim ARB registriert.",
  },
  cookie: {
    title: "Cookies auf dieser Website",
    text: "Wir verwenden technisch notwendigen Speicher, damit die Website funktioniert und Ihre Auswahl gespeichert wird. Mit Ihrer Einwilligung möchten wir außerdem Analyse-Cookies nutzen, um die Nutzung der Website zu verstehen. Diese bleiben ausgeschaltet, solange Sie nicht zustimmen. [Cookie-Richtlinie lesen](/cookie-policy).",
    necessary: "Technisch notwendig", necessaryDesc: "(immer aktiv): Sicherheit, Checkout und Speicherung Ihrer Cookie-Auswahl.",
    analytics: "Analyse", analyticsDesc: "(optional): anonyme Statistiken über Seitenaufrufe.",
    reject: "Nicht notwendige ablehnen", accept: "Alle akzeptieren", manage: "Einstellungen verwalten", save: "Auswahl speichern",
    open: "Cookie-Einstellungen öffnen",
  },
  legal: {
    eyebrow: "Rechtliches",
    updated: "Stand: {date}",
    translationNote: "Diese Übersetzung dient Ihrer Information. Bei Abweichungen gilt die englische Fassung, soweit zwingendes Recht Ihres Wohnsitzlandes nichts anderes vorschreibt.",
    terms: {
      metaTitle: "Allgemeine Geschäftsbedingungen", metaDescription: `AGB für die Remote-CAD-Zeichenleistungen von ${S.tradingName}.`,
      title: "Allgemeine Geschäftsbedingungen (AGB)",
      sections: [
        { h: "1. Über uns", body: [
          `Diese Bedingungen gelten für alle Bestellungen bei **${S.legalName}**, handelnd als **${S.tradingName}** („wir“, „uns“), einer in England & Wales eingetragenen Gesellschaft (Handelsregisternummer ${S.companyNumber}, eingetragener Sitz: ${S.registeredOffice}, USt-IdNr. ${S.vatNumber}). Kontakt: ${mail}, ${S.phoneDisplay}.`,
        ] },
        { h: "2. Unsere Leistungen", body: [
          "Wir erbringen **individuelle digitale CAD-Zeichenleistungen und die Erstellung von Architekturzeichnungen**: 2D- und 3D-Zeichnungen, Genehmigungszeichnungen, Zeichnungssätze nach Bauvorschriften und zugehörige technische Unterlagen – ausschließlich auf Grundlage der von Ihnen gelieferten Maße, Skizzen, Fotos und Informationen.",
          { ul: [
            "Unsere Leistungen werden **zu 100 % remote** erbracht. Wir besuchen Ihre Immobilie nicht und führen kein Aufmaß vor Ort durch.",
            "Wir liefern ausschließlich digitale Dateien (PDF, DWG, Bilddateien und, soweit angegeben, DOCX). Wir liefern keine physischen Waren.",
            "Wir führen keinerlei Bau-, Konstruktions- oder Sanierungsarbeiten aus, leiten oder überwachen diese nicht.",
            "Wir sind ein Studio für architektonisches CAD-Design und technisches Zeichnen. Wir sind **nicht beim ARB registriert** und führen keine gesetzlich geschützte Berufsbezeichnung.",
            "Sofern nicht schriftlich vereinbart, übernehmen wir keine Planungskoordination im Sinne der britischen CDM Regulations 2015 oder der Building Regulations und erbringen keine Tragwerksplanung.",
          ] },
        ] },
        { h: "3. Bestellung", body: [
          "Sie bestellen, indem Sie ein Paket wählen, diesen Bedingungen zustimmen und online bezahlen. Der Vertrag kommt zustande, wenn wir Ihre Bestellung per E-Mail bestätigen. Können wir eine Bestellung nicht annehmen (z. B. weil das Projekt nicht remote gezeichnet werden kann), informieren wir Sie und erstatten den vollen Betrag.",
        ] },
        { h: "4. Preise & Zahlung", body: [
          { ul: [
            `Paketpreise sind Festpreise **zzgl. MwSt.**: Essential ${m(P.essential)}, Standard ${m(P.standard)}, Premium ${m(P.premium)}. Britische Mehrwertsteuer von 20 % wird, sofern anwendbar, hinzugerechnet und im Checkout ausgewiesen. Für Projekte außerhalb des Vereinigten Königreichs bestätigen wir die umsatzsteuerliche Behandlung vor der Bestellung.`,
            "Sie können im Checkout oder per Rechnung mit den Zahlungsarten bezahlen, die unser Zahlungsanbieter für Ihr Land und Ihre Währung anbietet (z. B. Karten, digitale Wallets und unterstützte Bank- oder regionale Zahlungsarten).",
            "Auf Anfrage können wir eine Zahlung in zwei Raten vereinbaren: 50 % Anzahlung und 50 % vor Freigabe der finalen CAD/DWG-Dateien.",
            "Finale Dateien ohne Wasserzeichen geben wir erst nach vollständigem Zahlungseingang frei.",
          ] },
        ] },
        { h: "5. Ihre Angaben & Verantwortung für Maße", body: [
          "Da unsere Leistungen vollständig remote und ohne Ortstermin erbracht werden, **sind allein Sie für die Richtigkeit und Vollständigkeit aller übermittelten Maße, Grenzverläufe, Höhen, Fotos und sonstigen Angaben verantwortlich**. Wir zeichnen nach Ihren Angaben. Auf offensichtliche Unstimmigkeiten weisen wir hin, haften jedoch nicht für Fehler oder Folgen (einschließlich Ablehnungen, Nacharbeiten oder Baukosten), die auf unrichtigen oder unvollständigen Angaben beruhen. Prüfen Sie alle Maße vor Ort, bevor Sie die Zeichnungen für Bauarbeiten oder Materialbestellungen verwenden.",
          "Sie bestätigen, dass Sie berechtigt sind, uns die hochgeladenen Pläne, Fotos und Dokumente zu übermitteln, auch wenn diese von Dritten stammen.",
        ] },
        { h: "6. Leistungsumfang, Korrekturen & Ausschlüsse", body: [
          { ul: [
            "**Essential:** 1 digitale Korrekturrunde innerhalb von 14 Tagen nach Lieferung des ersten Entwurfs.",
            "**Standard:** 2 digitale Korrekturrunden innerhalb von 14 Tagen nach Lieferung des ersten Entwurfs.",
            "**Premium:** bis zu 3 digitale Korrekturrunden innerhalb von 21 Tagen nach Lieferung des ersten Entwurfs.",
          ] },
          "Eine Korrekturrunde ist eine gesammelte Änderungsliste zu den bereits erstellten Zeichnungen im ursprünglichen Leistungsumfang. Neue Entwürfe, Änderungen des Gesamtkonzepts oder Korrekturen nach Ablauf des Korrekturzeitraums sind nicht enthalten; dafür erstellen wir vorab ein Angebot.",
          { h3: "Nicht enthalten, sofern nicht ausdrücklich im Paket angegeben" },
          { ul: [
            "Statische Berechnungen oder Tragwerksplanung",
            "Behördliche Gebühren, einschließlich Genehmigungs- und Prüfgebühren",
            "Einreichung von Anträgen in Ihrem Namen oder Vertretung gegenüber Behörden",
            "Aufmaß, Vermessung, Ortstermine oder Begehungen",
            "Leistungen im Zusammenhang mit Nachbarrechten (z. B. Party Wall Surveyor)",
            "Jegliche Bau-, Konstruktions- oder Sanierungsarbeiten",
          ] },
        ] },
        { h: "7. Fristen", body: [
          "Lieferzeiträume werden in Werktagen angegeben und beginnen mit Eingang vollständiger Maße und Informationen. Es handelt sich um Schätzungen nach bestem Wissen. Benötigen wir weitere Informationen, ruht die Frist bis zu deren Eingang. Haben Sie keinen vorzeitigen Beginn verlangt, beginnt der Zeitraum nach Ablauf der 14-tägigen Widerrufsfrist.",
        ] },
        { h: "8. Genehmigungen", body: [
          "Wir erstellen Ihre Zeichnungen nach den **Bauvorschriften, Planungsregeln und Zeichnungsstandards des Landes und der Region, in der Ihre Immobilie liegt** – nach britischen Standards nur, wenn sich die Immobilie im Vereinigten Königreich befindet. Zum Beispiel: UK Building Regulations im Vereinigten Königreich, nationale und örtliche Vorschriften in EU-Ländern und die von Bundesstaat und Gemeinde übernommenen Bauordnungen in den USA (meist auf Basis von IRC/IBC), in metrischen oder imperialen Einheiten. Bitte nennen Sie uns Ihre zuständige Behörde und besondere örtliche Anforderungen; diese unterscheiden sich regional, und Sie bleiben dafür verantwortlich, sie mit Ihrer Behörde abzuklären. Über Genehmigungen entscheidet die zuständige Behörde; **wir können keine Genehmigung garantieren**. Wir stellen keine Prüfstempel oder Siegel aus; wenn örtliches Recht gesiegelte Zeichnungen verlangt, muss eine dort zugelassene Fachperson sie prüfen und siegeln. Von einer Behörde verlangte Änderungen im Leistungsumfang werden auf Ihre Korrekturrunden angerechnet.",
        ] },
        { h: "9. Urheberrecht", body: [
          "Das vollständige Urheberrecht (bzw. die umfassenden Nutzungsrechte) an den finalen CAD/PDF-Zeichnungen **geht mit vollständigem Zahlungseingang auf Sie über**, soweit gesetzlich zulässig. Bis dahin bleiben die Zeichnungen unser Eigentum und dürfen nicht verwendet oder eingereicht werden. Unsere Standardvorlagen, Schriftfelder und allgemeinen Details bleiben unser Eigentum; Sie erhalten ein dauerhaftes Nutzungsrecht im Rahmen Ihrer Zeichnungen. Ihr Projekt zeigen wir nur mit Ihrer Zustimmung im Portfolio.",
        ] },
        { h: "10. Widerruf & Erstattung", body: [
          `Ihre Widerrufsrechte und die Erstattungsbeträge sind in unserer [Widerrufs- & Erstattungsrichtlinie](/refund-policy) geregelt, die Bestandteil dieser Bedingungen ist. Kurz gefasst: volle Erstattung vor Beginn der Zeichenarbeit; Erstattung abzüglich einer Einrichtungsgebühr von ${m(setupFee[C])} nach Prüfung Ihrer Unterlagen, aber vor dem ersten Entwurf; nach Lieferung des ersten Entwurfs in der Regel keine Erstattung.`,
        ] },
        { h: "11. Haftung", body: [
          { ul: [
            "Unsere Haftung für Tod oder Körperverletzung infolge von Fahrlässigkeit, für Betrug sowie für alles, was gesetzlich nicht beschränkt werden kann, bleibt unberührt.",
            "Als Verbraucher haben Sie Anspruch auf Leistungen mit angemessener Sorgfalt und Sachkunde sowie auf die Rechte nach dem Consumer Rights Act 2015 (und, wenn Sie in der EU/im EWR leben, nach dem zwingenden Verbraucherrecht Ihres Landes). Diese Rechte bleiben unberührt.",
            "Wir haften nicht für Schäden durch unrichtige Angaben Ihrerseits, unterlassene Prüfung der Maße vor Ort, Entscheidungen von Genehmigungsbehörden oder Bauarbeiten Dritter.",
            "Gegenüber Unternehmern ist unsere Gesamthaftung auf das für das jeweilige Paket gezahlte Honorar begrenzt; für mittelbare Schäden, Folgeschäden und entgangenen Gewinn haften wir nicht.",
          ] },
        ] },
        { h: "12. Beschwerden", body: [
          `Wenn Sie mit unserer Leistung unzufrieden sind, schreiben Sie an ${mail}. Wir antworten innerhalb von ${RT} und bemühen uns um eine Lösung. Bitte kontaktieren Sie uns, bevor Sie eine Rückbuchung bei Ihrer Bank veranlassen. Ihre gesetzlichen Rechte bleiben unberührt.`,
        ] },
        { h: "13. Datenschutz", body: ["Wir verarbeiten Ihre personenbezogenen Daten wie in unserer [Datenschutzerklärung](/privacy-policy) beschrieben."] },
        { h: "14. Anwendbares Recht & internationale Kunden", body: [
          { ul: [
            "Es gilt das Recht von **England und Wales**; zuständig sind die Gerichte von England und Wales.",
            "Wenn Sie als Verbraucher in der EU/im EWR leben, entzieht Ihnen diese Rechtswahl nicht den Schutz der zwingenden Verbraucherschutzvorschriften Ihres Wohnsitzlandes, und Sie können gegebenenfalls auch vor den Gerichten Ihres Landes klagen. Weitere Informationen im [Impressum](/legal-notice).",
            "Wir können diese Bedingungen ändern. Für Ihre Bestellung gilt die bei Bestellung veröffentlichte Fassung. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen wirksam.",
          ] },
        ] },
      ],
    },
    refund: {
      metaTitle: "Widerrufs- & Erstattungsrichtlinie", metaDescription: "Ihr 14-tägiges Widerrufsrecht und unsere Erstattungsstufen für individuelle digitale Zeichnungspakete.",
      title: "Widerrufs- & Erstattungsrichtlinie",
      sections: [
        { h: "1. Ihr 14-tägiges Widerrufsrecht", body: [
          "Als Verbraucher können Sie Ihre Bestellung innerhalb von **14 Tagen** ab dem Tag unserer Bestellbestätigung ohne Angabe von Gründen widerrufen. Für Verbraucher in der EU/im EWR (z. B. Deutschland) ergibt sich dieses Recht aus dem Verbraucherrecht Ihres Landes (Umsetzung der Richtlinie 2011/83/EU); für Verbraucher im Vereinigten Königreich aus den **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**.",
        ] },
        { h: "2. Individuelle Zeichenleistung & Beginn innerhalb der Widerrufsfrist", body: [
          "Jedes Zeichnungspaket ist eine **individuelle Dienstleistung, die nach den spezifischen Maßen Ihrer Immobilie erstellt wird**. Innerhalb der 14-tägigen Widerrufsfrist beginnen wir nur, wenn Sie dies ausdrücklich verlangen.",
          { ul: [
            "**Wenn Sie keinen vorzeitigen Beginn verlangen,** beginnen wir nach Ablauf der 14 Tage; bis dahin können Sie mit voller Erstattung widerrufen.",
            "**Wenn Sie einen vorzeitigen Beginn verlangen** (über das Kästchen bei der Bestellung oder schriftlich) und innerhalb der 14 Tage widerrufen, zahlen Sie einen angemessenen Betrag für die bis zum Widerruf erbrachten Leistungen, wie in den Erstattungsstufen unten beschrieben.",
            "**Ihr Widerrufsrecht erlischt, sobald die Dienstleistung vollständig erbracht ist** (Lieferung der finalen Dateien), wenn wir auf Ihr ausdrückliches Verlangen und nach Ihrer Bestätigung dieser Folge vor Fristablauf begonnen haben.",
          ] },
        ] },
        { h: "3. Erstattungsstufen", body: [
          "Diese Stufen zeigen, wie wir den Wert der erbrachten Leistungen berechnen. Sie gelten für alle Bestellungen, unabhängig davon, ob Sie innerhalb oder nach Ablauf der 14 Tage stornieren.",
          { table: { head: ["Zeitpunkt der Stornierung", "Erstattung"], rows: [
            ["Bevor Sie Ihre Maße übermittelt haben und bevor die CAD-Zeichenarbeit begonnen hat", "**100 % volle Erstattung**"],
            ["Nachdem wir mit der Prüfung Ihrer Unterlagen (Maße, Fotos, Beschreibung) begonnen haben, aber vor Lieferung der ersten Entwurfs-PDFs", `**Volle Erstattung abzüglich einer Einrichtungsgebühr von ${m(setupFee[C])}** (zzgl. MwSt., sofern anwendbar) für Prüfung, Einrichtung und Grundzeichnung`],
            ["Nach Lieferung des ersten Entwurfs-PDF-Satzes", "**In der Regel keine Erstattung.** Die individuelle Zeichenarbeit ist im Wesentlichen abgeschlossen. Ist ein wesentlicher Teil Ihres Pakets noch nicht erbracht, erstatten wir dafür einen angemessenen Betrag."],
          ] } },
          "Unternehmer haben kein gesetzliches Widerrufsrecht, können aber jederzeit zu denselben Erstattungsstufen stornieren.",
        ] },
        { h: "4. So widerrufen Sie", body: [
          `Senden Sie eine E-Mail an ${mail} mit Ihrem Namen, Ihrer Bestellnummer und einer eindeutigen Erklärung, dass Sie widerrufen. Sie können das folgende Muster-Widerrufsformular verwenden, müssen es aber nicht.`,
          { box: [
            "**Muster-Widerrufsformular**",
            `An: ${S.legalName}, handelnd als ${S.tradingName}, ${S.registeredOffice}, ${S.supportEmail}`,
            "Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: [Paketname]",
            "Bestellt am: [Datum] · Bestellnummer: [Nummer]",
            "Name: [Ihr Name] · Anschrift: [Ihre Anschrift] · Datum: [Datum]",
          ] },
        ] },
        { h: "5. Erstattung", body: [
          "Wir erstatten fällige Beträge innerhalb von **14 Tagen** nach Eingang Ihres Widerrufs über dasselbe Zahlungsmittel, das Sie verwendet haben. Für die Erstattung berechnen wir keine Gebühren.",
        ] },
        { h: "6. Wenn wir stornieren", body: [
          "Können wir Ihre Zeichnungen nicht fertigstellen (z. B. weil das Projekt mit Remote-Informationen nicht genau gezeichnet werden kann), teilen wir Ihnen den Grund mit und erstatten den Betrag für nicht erbrachte Leistungen.",
        ] },
        { h: "7. Probleme & Streitigkeiten", body: [
          `Bitte wenden Sie sich zuerst an ${mail}. Wir garantieren eine Antwort innerhalb von **${RT}** und suchen gemeinsam mit Ihnen eine Lösung. Bitte geben Sie uns die Gelegenheit dazu, bevor Sie eine Rückbuchung veranlassen. Ihre gesetzlichen Rechte bleiben unberührt.`,
        ] },
      ],
    },
    privacy: {
      metaTitle: "Datenschutzerklärung", metaDescription: `Wie ${S.tradingName} Ihre personenbezogenen Daten erhebt und verwendet.`,
      title: "Datenschutzerklärung",
      sections: [
        { h: "1. Verantwortlicher", body: [
          `**${S.legalName}** (handelnd als ${S.tradingName}), Handelsregisternummer ${S.companyNumber}, eingetragener Sitz ${S.registeredOffice}, ist **Verantwortlicher** für die in dieser Erklärung beschriebenen personenbezogenen Daten. Datenschutzanfragen an ${mail}`,
          "Diese Erklärung beschreibt, wie wir Ihre Daten gemäß der britischen Datenschutz-Grundverordnung (UK GDPR), dem Data Protection Act 2018 und dem Data (Use and Access) Act 2025 verarbeiten. Wenn Sie sich in der EU/im EWR befinden, beachten wir auch Ihre Rechte nach der EU-DSGVO.",
        ] },
        { h: "2. Welche Daten wir erheben", body: [
          { ul: [
            "**Kontaktdaten:** Name, E-Mail-Adresse, Telefonnummer.",
            "**Projektdaten:** Adresse der Immobilie, Ihre Beschreibung sowie hochgeladene Maße, Skizzen, Grundrisse, Fotos und Dokumente.",
            "**Bestell- & Rechnungsdaten:** gekaufte Leistungen, gezahlte Beträge, Rechnungsadresse sowie ein Nachweis über Ihre Zustimmung zu den Bedingungen und Ihre Wahl zum Leistungsbeginn. Zahlungsdaten verarbeitet unser Zahlungsdienstleister; Ihre vollständige Kartennummer sehen oder speichern wir nie.",
            "**Kommunikation:** E-Mails, Formularnachrichten und WhatsApp-Nachrichten.",
            "**Technische Daten:** einfache Server-Logs (z. B. IP-Adresse und Browsertyp) unseres Hosters zu Sicherheitszwecken sowie Ihre Cookie-Auswahl.",
          ] },
          "Fotos Ihrer Immobilie können Personen, Fahrzeuge oder Nachbargebäude zeigen. Bitte vermeiden Sie nach Möglichkeit Personen auf den Fotos.",
        ] },
        { h: "3. Zwecke und Rechtsgrundlagen", body: [
          { table: { head: ["Zweck", "Rechtsgrundlage"], rows: [
            ["Annahme Ihrer Bestellung, Erstellung und Lieferung Ihrer Zeichnungen, Korrekturen und Erstattungen", "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)"],
            ["Aufbewahrung von Buchhaltungs- und Steuerunterlagen für die britische Steuerbehörde (HMRC)", "Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)"],
            ["Beantwortung von Anfragen vor der Bestellung", "Vorvertragliche Maßnahmen / berechtigte Interessen"],
            ["Betrugsprävention, Website-Sicherheit, Bearbeitung von Streitigkeiten oder Ansprüchen", "Berechtigte Interessen (Art. 6 Abs. 1 lit. f)"],
            ["Optionale Analyse-Cookies (nur mit Ihrer Zustimmung)", "Einwilligung (Art. 6 Abs. 1 lit. a), jederzeit widerruflich"],
          ] } },
          "Wir verkaufen Ihre Daten nicht, nutzen sie ohne Einwilligung nicht für Werbung und treffen keine automatisierten Entscheidungen über Sie.",
        ] },
        { h: "4. Empfänger", body: [
          "Wir setzen vertrauenswürdige Dienstleister (Auftragsverarbeiter) ein, die Daten nur nach unseren Weisungen verarbeiten:",
          { ul: [
            "**Zahlungsdienstleister:** Stripe (und ggf. Dodo Payments) zur Zahlungsabwicklung und Betrugsprävention.",
            "**Website-Hosting:** Vercel.",
            "**E-Mail-Hosting:** für E-Mails und Formulareingänge (z. B. Google).",
            "**Cloud-Speicher:** für Projektdateien und die Lieferung der Zeichnungen sowie von Ihnen gewählte Dateiübertragungsdienste.",
            "**WhatsApp (Meta):** nur, wenn Sie uns dort schreiben.",
            "**Unsere Steuerberater** und Berater sowie HMRC oder andere Behörden, soweit gesetzlich vorgeschrieben.",
          ] },
          "Einige Dienstleister verarbeiten Daten außerhalb des Vereinigten Königreichs/EWR (z. B. in den USA). Die Übermittlung ist durch Angemessenheitsbeschlüsse (z. B. UK-US Data Bridge bzw. EU-US Data Privacy Framework) oder Standardvertragsklauseln bzw. das britische IDTA/Addendum abgesichert.",
        ] },
        { h: "5. Speicherdauer", body: [
          { ul: [
            "Bestell-, Rechnungs- und Zahlungsunterlagen: **6 Jahre** nach Ende des jeweiligen Geschäftsjahres (Vorgabe der HMRC).",
            "Projektdateien und Zeichnungen: **6 Jahre** nach Abschluss, für Rückfragen oder Ansprüche.",
            "Anfragen ohne Bestellung: **12 Monate**.",
            "Cookie-Auswahl: bis Sie sie ändern oder Ihren Browserspeicher löschen.",
          ] },
        ] },
        { h: "6. Ihre Rechte", body: [
          "Sie haben das Recht auf **Auskunft**, **Berichtigung** unrichtiger Daten, **Löschung**, wenn kein Grund zur Speicherung mehr besteht, **Einschränkung** der Verarbeitung, **Datenübertragbarkeit**, **Widerspruch** gegen Verarbeitungen auf Grundlage berechtigter Interessen sowie auf **Widerruf Ihrer Einwilligung** jederzeit (z. B. über die Cookie-Einstellungen im Footer).",
          `Zur Ausübung Ihrer Rechte schreiben Sie an ${mail}. Wir antworten innerhalb **eines Monats**; bei komplexen Anfragen kann sich die Frist um bis zu zwei Monate verlängern – darüber informieren wir Sie.`,
        ] },
        { h: "7. Beschwerden", body: [
          `Wenn Sie mit unserem Umgang mit Ihren Daten unzufrieden sind, wenden Sie sich bitte zuerst an ${mail}. Wir bestätigen den Eingang Ihrer Beschwerde innerhalb von **30 Tagen** (angestrebt: ${RT}), prüfen sie zügig und teilen Ihnen das Ergebnis ohne unangemessene Verzögerung mit.`,
          "Sie können sich außerdem beim **britischen Information Commissioner's Office (ICO)** beschweren: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/), +44 303 123 1113. Wenn Sie in der EU/im EWR leben, können Sie sich auch an die Datenschutzaufsichtsbehörde Ihres Landes wenden.",
        ] },
        { h: "8. Sicherheit", body: ["Wir nutzen verschlüsselte Verbindungen (HTTPS), seriöse Dienstleister und Zugriffskontrollen. Kein System ist vollkommen sicher – bitte senden Sie uns keine unnötigen sensiblen Informationen."] },
        { h: "9. Cookies & Änderungen", body: ["Siehe unsere [Cookie-Richtlinie](/cookie-policy). Wir können diese Erklärung aktualisieren; die aktuelle Fassung finden Sie stets auf dieser Seite."] },
      ],
    },
    cookies: {
      metaTitle: "Cookie-Richtlinie", metaDescription: `Wie ${S.tradingName} Cookies und ähnliche Technologien einsetzt.`,
      title: "Cookie-Richtlinie",
      sections: [
        { h: "1. Was sind Cookies?", body: [
          `Diese Richtlinie erläutert, wie ${S.legalName} (handelnd als ${S.tradingName}) Cookies und ähnliche Technologien gemäß den britischen Privacy and Electronic Communications Regulations (PECR), der UK GDPR und den EU-ePrivacy-Vorschriften einsetzt. Cookies sind kleine Dateien, die beim Besuch von Websites auf Ihrem Gerät gespeichert werden. Ähnliche Technologien wie der lokale Speicher Ihres Browsers funktionieren vergleichbar; wir bezeichnen hier alles als „Cookies“.`,
        ] },
        { h: "2. Welche Cookies wir verwenden", body: [
          { table: { head: ["Name", "Art", "Zweck", "Dauer"], rows: [
            ["ftds-cookie-consent (lokaler Speicher)", "Technisch notwendig", "Speichert, ob Sie nicht notwendige Cookies akzeptiert oder abgelehnt haben", "Bis Sie ihn ändern oder löschen"],
            ["Cookies des Zahlungsanbieters (z. B. Stripe)", "Technisch notwendig", "Werden auf der sicheren Checkout-Seite des Zahlungsanbieters zur Betrugsprävention und Zahlungsabwicklung gesetzt; es gilt dessen Richtlinie.", "Vom Anbieter festgelegt"],
            ["_ga, _ga_* (Google Analytics)", "Analyse (optional)", "Anonyme Nutzungsstatistiken. **Nur mit Ihrer Zustimmung.** Nutzen wir keine Analyse, werden sie nie gesetzt.", "Bis zu 2 Jahre"],
          ] } },
          "Wir verwenden keine Werbe- oder Marketing-Cookies. Unsere Schriftarten werden von unserer eigenen Website geladen, daher werden beim Seitenaufruf keine Daten an Schriftanbieter übertragen. Ihre Sprachwahl ist Teil der Webadresse und kein Cookie.",
        ] },
        { h: "3. Ihre Wahl", body: [
          "Beim ersten Besuch fragen wir Sie über ein Banner mit gleichwertigen Schaltflächen **Alle akzeptieren** und **Nicht notwendige ablehnen**. Nichts Optionales ist vorausgewählt, und Analyse- oder Marketing-Skripte werden erst nach Ihrer Einwilligung geladen. Sie können Ihre Wahl jederzeit über die **Cookie-Einstellungen** im Footer ändern. Außerdem können Sie Cookies in Ihren Browsereinstellungen blockieren oder löschen; das Blockieren technisch notwendiger Cookies kann den Checkout beeinträchtigen.",
        ] },
        { h: "4. Weitere Informationen", body: [`Siehe unsere [Datenschutzerklärung](/privacy-policy) oder kontaktieren Sie ${mail}`] },
      ],
    },
    notice: {
      metaTitle: "Impressum & internationale Bedingungen",
      metaDescription: `Anbieterkennzeichnung von ${S.legalName}, handelnd als ${S.tradingName}, sowie Widerrufsinformationen für Kunden im Vereinigten Königreich und in der EU/im EWR.`,
      title: "Impressum & internationale Bedingungen",
      sections: [
        { h: "1. Angaben zum Unternehmen", body: [
          { box: [
            `**${S.legalName}**, handelnd als **${S.tradingName}**`,
            "Private Limited Company, eingetragen in England & Wales",
            `Handelsregisternummer: ${S.companyNumber} (Companies House)`,
            `Eingetragener Sitz: ${S.registeredOffice}`,
            `USt-IdNr. (UK): ${S.vatNumber}`,
            ...(S.director ? [`Geschäftsführer (Director): ${S.director}`] : []),
            `E-Mail: ${S.supportEmail} · Telefon: ${S.phoneDisplay}`,
          ] },
          "Tätigkeit: architektonisches CAD-Zeichnen aus der Ferne und Erstellung digitaler Zeichnungen. Wir sind nicht beim ARB (Vereinigtes Königreich) oder einer vergleichbaren Berufskammer in einem anderen Land registriert und führen in keinem Land eine geschützte Berufsbezeichnung.",
        ] },
        { h: "2. Für wen unsere Leistungen bestimmt sind", body: [
          "Wir verkaufen individuelle digitale Zeichnungspakete online an Kunden im Vereinigten Königreich und international, u. a. in Deutschland, Frankreich, Spanien, Italien und den USA. Jeder Kunde erhält Zeichnungen nach den Bauvorschriften seines eigenen Landes, nicht nach britischen Standards. Alle Arbeiten erfolgen remote; wir führen in keinem Land Ortstermine oder Bauarbeiten durch.",
        ] },
        { h: "3. Widerruf: Verbraucher im Vereinigten Königreich", body: [
          "Verbraucher im Vereinigten Königreich haben nach den Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 ein 14-tägiges Widerrufsrecht. Verlangen Sie ausdrücklich einen Beginn innerhalb dieser Frist, zahlen Sie bei Widerruf die erbrachten Leistungen; das Widerrufsrecht erlischt bei vollständiger Erbringung. Einzelheiten: [Widerrufs- & Erstattungsrichtlinie](/refund-policy).",
        ] },
        { h: "4. Widerrufsbelehrung: Verbraucher in der EU/im EWR (Deutschland, Frankreich, Spanien, Italien u. a.)", body: [
          "**Widerrufsrecht:** Sie haben das Recht, binnen **vierzehn Tagen** ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
          { ul: [
            `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${S.legalName}, ${S.registeredOffice}, ${S.supportEmail}, ${S.phoneDisplay}) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Ihren Entschluss informieren. Sie können dafür das Muster-Widerrufsformular in unserer [Widerrufs- & Erstattungsrichtlinie](/refund-policy) verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Frist reicht es aus, dass Sie die Mitteilung vor Ablauf der Frist absenden.`,
            "**Folgen des Widerrufs:** Wenn Sie den Vertrag widerrufen, zahlen wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurück, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben; Ihnen werden keine Entgelte berechnet.",
            "Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zur Mitteilung Ihres Widerrufs bereits erbrachten Leistungen im Vergleich zum Gesamtumfang entspricht.",
            "**Vorzeitiges Erlöschen:** Das Widerrufsrecht erlischt, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung verlieren.",
          ] },
        ] },
        { h: "5. Preise, Umsatzsteuer & Währung", body: [
          "Auf unserer deutschen, französischen, spanischen und italienischen Website werden Preise in Euro (EUR) angezeigt und berechnet, auf der englischen Website in britischen Pfund (GBP). Jede Währung hat eine eigene feste Preisliste (keine Umrechnung zu Tageskursen) – der angezeigte Preis ist der Preis, den Sie zahlen. Preise verstehen sich zzgl. 20 % britischer Mehrwertsteuer; der Bruttobetrag wird ebenfalls angezeigt. Ihr Kartenanbieter kann eigene Wechselkurse oder Gebühren berechnen. Für Immobilien außerhalb des Vereinigten Königreichs können andere Umsatzsteuerregeln gelten; bitte kontaktieren Sie uns vor der Bestellung, damit wir die korrekte Behandlung bestätigen.",
        ] },
        { h: "6. Anwendbares Recht, Gerichtsstand & Streitbeilegung", body: [
          "Für unsere Verträge gilt das Recht von **England und Wales**. Als Verbraucher wird Ihnen dadurch nicht der Schutz der zwingenden Vorschriften des Rechts Ihres Wohnsitzlandes entzogen, und Sie können gegebenenfalls vor den Gerichten Ihres Landes klagen.",
          `Bei Beschwerden wenden Sie sich bitte zuerst an ${mail}. Wir antworten innerhalb von ${RT}. In Ihrem Land stehen Ihnen möglicherweise außerdem Verbraucherberatungs- oder Streitschlichtungsstellen zur Verfügung.`,
        ] },
        { h: "7. Sprachen", body: [
          "Diese Website ist auf Englisch, Deutsch, Französisch, Spanisch und Italienisch verfügbar. Übersetzungen dienen Ihrer Information. Bei Abweichungen gilt die englische Fassung, soweit zwingendes Recht Ihres Landes nichts anderes vorschreibt.",
        ] },
        { h: "8. Verantwortlich für den Inhalt", body: [
          `${S.legalName}, ${S.registeredOffice}. Weitere Informationen: [AGB](/terms), [Widerrufs- & Erstattungsrichtlinie](/refund-policy), [Datenschutzerklärung](/privacy-policy), [Cookie-Richtlinie](/cookie-policy).`,
        ] },
      ],
    },
  },
  samplesFigures: { fileName: "entwurf-erdgeschoss.dwg" },
};

export default de;
