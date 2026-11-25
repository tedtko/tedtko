import type { Dict } from "../types";
import { currencyFor, money } from "../config";
import { invoiceLimits, packages, setupFee, site as S } from "@/lib/site";

const m = (n: number) => money(n, "it");
const C = currencyFor("it");
const P = Object.fromEntries(packages.map((p) => [p.id, p.price[C]])) as Record<string, number>;
const mail = `[${S.supportEmail}](mailto:${S.supportEmail})`;
const RT = "2 giorni lavorativi";

const it: Dict = {
  meta: {
    siteTitle: "Disegni CAD architettonici e pacchetti progettuali – 100% online",
    siteDescription:
      "Pacchetti di progettazione 2D e 3D a prezzo fisso: piante, prospetti ed elaborati normativi realizzati a distanza dalle sue misure e foto. Consegna digitale in PDF e DWG.",
  },
  nav: {
    packages: "Pacchetti", howItWorks: "Come funziona", samples: "Esempi di elaborati", faq: "FAQ",
    payInvoice: "Paga fattura", contact: "Contatti", cta: "Vedi i pacchetti",
    menuOpen: "Apri menu", menuClose: "Chiudi menu", home: "home", skip: "Vai al contenuto", language: "Lingua",
  },
  hero: {
    eyebrow: "Studio di progettazione architettonica CAD",
    titleA: "Disegni CAD architettonici e pacchetti progettuali a distanza.",
    titleB: "100% online.",
    lead: "Pacchetti di progettazione 2D e 3D a prezzo fisso, piante ed elaborati conformi alle norme edilizie del suo Paese, realizzati a distanza dalle sue misure, schizzi e foto. Consegna digitale nei formati PDF e DWG.",
    badgesLabel: "Perché sceglierci",
    badges: ["Consegna 100% digitale", "Prezzi fissi e trasparenti", "Conformi alle norme del suo Paese", "Tempi digitali rapidi"],
    ctaPrimary: "Vedi i pacchetti",
    ctaSecondary: "Come funziona",
  },
  home: {
    packagesEyebrow: "Pacchetti digitali a perimetro fisso", packagesTitle: "Pacchetti di disegni",
    packagesLead: "Elaborati chiari, giri di revisione definiti e tempi di consegna digitale prestabiliti. Nessuna sorpresa.",
    howEyebrow: "Processo a distanza", howTitle: "Come funziona", howLead: "Quattro semplici passaggi, interamente online.",
    samplesEyebrow: "Cosa include il pacchetto digitale", samplesTitle: "Esempi di elaborati",
    samplesMore: "Vedi tutti gli esempi",
    faqEyebrow: "FAQ", faqTitle: "Domande frequenti", faqMore: "Leggi tutte le FAQ",
  },
  packages: {
    metaTitle: "Pacchetti e prezzi",
    metaDescription: `Pacchetti di disegni CAD a prezzo fisso: Essential ${m(P.essential)}, Standard ${m(P.standard)} e Premium ${m(P.premium)} (+ IVA britannica 20%). Consegna digitale in PDF e DWG.`,
    pageEyebrow: "Pacchetti digitali a perimetro fisso",
    pageTitle: "Pacchetti di disegni",
    pageLead: "Scelga il pacchetto, completi l'ordine online e poi carichi le sue misure e foto. Disegniamo tutto a distanza e le consegniamo i file in digitale.",
    popular: "Il più scelto",
    plusVat: "+ IVA",
    incVat: "{amount} IVA britannica 20% inclusa",
    orderLabel: "Ordina pacchetto {name}: {price} + IVA",
    items: {
      essential: {
        name: "Essential",
        subtitle: "Pacchetto digitale di disegni per ampliamenti semplici, verande e pertinenze.",
        deliverables: [
          "Pianta base CAD, disegnata a distanza dalle sue misure, schizzi e foto",
          "Piante e prospetti 2D dello stato di fatto e di progetto (PDF e DWG)",
          "Planimetrie di inquadramento e di situazione in scala (pacchetto PDF digitale)",
          "Set di disegni pronto per la presentazione, formattato per il caricamento sul portale",
        ],
        revisions: "1 giro di revisione digitale (entro 14 giorni dalla consegna della prima bozza)",
        timeline: "5–7 giorni lavorativi dal ricevimento delle sue misure",
      },
      standard: {
        name: "Standard",
        subtitle: "Pacchetto digitale completo per titoli edilizi e regolamenti edilizi, per ampliamenti su due piani e recupero di sottotetti.",
        deliverables: [
          "Tutto quanto incluso nel pacchetto Essential",
          "Sezioni dettagliate e schede tecniche dei dettagli costruttivi (PDF e DWG)",
          "Render 3D esterni e volumetrici (immagini ad alta risoluzione)",
          "Set di disegni tecnici annotati secondo i regolamenti edilizi",
        ],
        revisions: "2 giri di revisione digitali (entro 14 giorni dalla consegna della prima bozza)",
        timeline: "7–10 giorni lavorativi dal ricevimento delle sue misure",
      },
      premium: {
        name: "Premium",
        subtitle: "Pacchetto completo di progettazione e specifiche tecniche a distanza per nuove costruzioni, ristrutturazioni integrali e frazionamenti in più unità.",
        deliverables: [
          "Tutto quanto incluso nel pacchetto Standard",
          "Specifica tecnica e computo delle lavorazioni (PDF/DOCX)",
          "Set di disegni di riferimento su confini, illuminazione naturale e prospetti",
          "Pacchetto completo CAD e PDF pronto per gara d'appalto",
        ],
        revisions: "Fino a 3 giri di revisione digitali (entro 21 giorni dalla consegna della prima bozza)",
        timeline: "Prioritario: 10–14 giorni lavorativi dal ricevimento delle sue misure",
      },
    },
    vatNote: "Tutti i prezzi si intendono IVA britannica del 20% esclusa, ove applicabile. Su richiesta è disponibile il pagamento a rate (50% di acconto alla prenotazione / 50% prima del rilascio dei file CAD/DWG finali). [Ci contatti](/contact) prima di ordinare.",
    outsideUkNote: "Clienti in tutto il mondo, tra cui Regno Unito, Europa e USA: i suoi disegni vengono realizzati secondo le norme edilizie e gli standard di disegno del **suo** Paese, non secondo gli standard britannici. Progetto fuori dal Regno Unito? [Ci contatti](/contact) prima di ordinare, così confermiamo i requisiti locali e il trattamento IVA corretto.",
    excludesNote: "Pagamento online sicuro. Non inclusi: calcoli strutturali, diritti e oneri amministrativi e qualsiasi lavoro edile in loco.",
    cancelled: "Il pagamento è stato annullato e non le è stato addebitato nulla.",
    paymentTitle: "Metodi di pagamento",
    paymentText: "Paghi in sicurezza al checkout o tramite fattura. Sono accettate le principali carte di credito e di debito, i portafogli digitali come Apple Pay e Google Pay e altri metodi bancari o regionali, ove il nostro fornitore di pagamenti li supporti per il suo Paese e la sua valuta. Le opzioni disponibili sono indicate al checkout. Preferisce pagare con bonifico su fattura? [Ci contatti](/contact).",
  },
  order: {
    groupLabel: "Confermi l'ordine",
    agree: "Accetto i [Termini e condizioni](/terms) e la [Politica di rimborso e recesso](/refund-policy). Comprendo che tutti i disegni sono realizzati a distanza sulla base delle misure e delle foto che fornisco e che sono responsabile della loro esattezza.",
    start: "**Facoltativo:** chiedo espressamente che iniziate il lavoro non appena invio le mie misure, durante il periodo di recesso di 14 giorni. Comprendo che, se poi recedo, dovrò pagare il lavoro già svolto e che perdo il diritto di recesso una volta che il servizio è stato interamente eseguito.",
    continue: "Procedi al pagamento sicuro",
    opening: "Apertura del pagamento sicuro…",
    noStartNote: "Senza la casella facoltativa, inizieremo a disegnare al termine del periodo di recesso di 14 giorni.",
  },
  steps: [
    { title: "Scelga il pacchetto a perimetro fisso", text: "Selezioni Essential, Standard o Premium e completi l'ordine online." },
    { title: "Carichi misure e foto", text: "Invii le misure disegnate a mano, le foto dell'immobile, le planimetrie dell'agenzia e la descrizione del progetto tramite il nostro modulo sicuro." },
    { title: "Disegno CAD e modellazione 3D a distanza", text: "Il nostro team di progettazione CAD nel Regno Unito realizza a distanza i suoi disegni architettonici in scala e la documentazione tecnica, secondo le norme edilizie del Paese in cui si trova l'immobile." },
    { title: "Consegna digitale e revisioni", text: "Riceva via e-mail i PDF di revisione con filigrana, richieda i giri di revisione inclusi e scarichi poi i file finali PDF e DWG senza filigrana." },
  ],
  howPage: {
    metaTitle: "Come funziona",
    metaDescription: "Il nostro processo a distanza in 4 passaggi: scelga un pacchetto, carichi misure e foto, disegniamo a distanza e riceve i file PDF e DWG.",
    eyebrow: "Processo a distanza", title: "Come funziona", lead: "Tutto avviene online. Non visitiamo mai il suo immobile.",
    sendTitle: "Cosa inviarci",
    sendList: [
      "Le misure di ogni stanza (basta uno schizzo a mano quotato)",
      "Le dimensioni esterne complessive e le altezze dei soffitti",
      "Foto di ogni facciata e di ogni stanza interessata",
      "Planimetrie esistenti, se disponibili (ad es. da un annuncio immobiliare)",
      "Una breve descrizione di cosa vuole costruire o modificare",
      "Eventuali informazioni note su confini o pratiche precedenti",
    ],
    uploadCta: "Carica le misure",
    goodTitle: "Buono a sapersi",
    goodList: [
      "I tempi di consegna decorrono dal ricevimento di misure complete.",
      "Le bozze sono PDF con filigrana; i file finali sono PDF e DWG senza filigrana.",
      "I giri di revisione vanno utilizzati entro il periodo indicato per il pacchetto.",
      "È responsabile dell'esattezza delle misure fornite.",
      "Calcoli strutturali, oneri amministrativi e lavori edili non sono inclusi.",
    ],
    goodMore: "Tutti i dettagli sono nei nostri [Termini e condizioni](/terms).",
  },
  samples: {
    metaTitle: "Esempi di elaborati",
    metaDescription: "Cosa include il pacchetto digitale: piante, prospetti, planimetrie, sezioni normative e render 3D.",
    eyebrow: "Cosa include il pacchetto digitale", title: "Esempi di elaborati",
    lead: "Ogni disegno è in scala, titolato e fornito in PDF pronto per la stampa e in file CAD DWG modificabile.",
    items: [
      { title: "Piante 2D", text: "Stato di fatto e progetto, quotate (PDF e DWG). Tutti i pacchetti." },
      { title: "Prospetti", text: "Materiali, altezze e aperture di ogni facciata. Tutti i pacchetti." },
      { title: "Planimetrie di inquadramento", text: "Planimetrie di riferimento in scala per la pratica. Tutti i pacchetti." },
      { title: "Sezioni e stratigrafie", text: "Sezioni tecniche annotate per i regolamenti edilizi. Standard e Premium." },
      { title: "Render 3D esterni e volumetrici", text: "Visualizzazioni ad alta risoluzione del progetto. Standard e Premium." },
    ],
    note: "Esempi illustrativi delle tipologie di disegno. I suoi disegni vengono realizzati per il suo immobile.",
  },
  faq: {
    metaTitle: "FAQ",
    metaDescription: "Risposte sui nostri pacchetti di disegni CAD a distanza: cosa inviare, formati, revisioni, pagamenti e recesso.",
    eyebrow: "FAQ", title: "Domande frequenti",
    items: [
      ["Venite a visitare il mio immobile?", "No. Siamo uno studio di progettazione 100% a distanza. Ogni disegno nasce dalle misure, dagli schizzi e dalle foto che ci invia: non visitiamo mai il suo immobile."],
      ["Quali norme seguiranno i miei disegni?", "Quelle del Paese (e del Comune) in cui si trova l'immobile, non quelle britanniche. I progetti nel Regno Unito seguono le UK Building Regulations; quelli in Europa le norme nazionali e locali applicabili; quelli negli USA i codici adottati dal suo Stato e dalla giurisdizione locale (di norma basati su IRC/IBC). Unità di misura e formati sono quelli in uso nel suo Paese (metrici o imperiali). Indichi nella descrizione l'ente competente ed eventuali requisiti specifici."],
      ["Lavorate con clienti negli USA e in altri Paesi?", "Sì. Lavoriamo interamente a distanza per clienti nel Regno Unito, in Europa, negli USA e in tutto il mondo. Ci contatti prima di ordinare per confermare i requisiti locali e il trattamento IVA corretto. Non forniamo timbri o firme professionali: se il suo ente richiede elaborati timbrati, un professionista abilitato localmente deve verificarli e timbrarli."],
      ["Cosa devo inviarvi?", "Le misure indicative di ogni stanza e dell'esterno (basta uno schizzo a mano), foto di ogni facciata e delle stanze interessate, eventuali planimetrie esistenti (ad es. da un annuncio immobiliare) e una breve descrizione di cosa vuole realizzare."],
      ["Quanto devono essere precise le misure?", "Il più possibile. Disegniamo sulle quote che ci fornisce, quindi gli errori si riflettono nei disegni. Segnaleremo ciò che appare incoerente, ma l'esattezza delle informazioni è sotto la sua responsabilità (vedi i Termini)."],
      ["In quali formati riceverò i file?", "Disegni PDF pronti per la stampa o la presentazione, più file CAD DWG modificabili. I pacchetti Standard e Premium includono anche render 3D ad alta risoluzione, e il Premium una specifica in PDF/DOCX."],
      ["Come posso pagare?", "Al checkout, con le principali carte di credito o di debito, portafogli digitali come Apple Pay e Google Pay e altri metodi bancari o regionali, ove il nostro fornitore di pagamenti li supporti per il suo Paese e la sua valuta. Possiamo anche emettere una fattura, pagabile online dalla pagina «Paga fattura»."],
      ["Presentate voi la pratica edilizia?", "Forniamo un set di disegni pronto per la presentazione. La presentazione e gli oneri restano a suo carico. Le spieghiamo volentieri quale documento va dove."],
      ["Calcoli strutturali o oneri sono inclusi?", "No. Calcoli strutturali, diritti di istruttoria e controllo e qualsiasi lavoro edile non sono inclusi."],
      ["Posso pagare a rate?", "Sì. Su richiesta possiamo dividere l'importo in un acconto del 50% e un 50% prima del rilascio dei file CAD/DWG finali. Ci contatti prima di ordinare."],
      ["Posso recedere?", "Sì. I consumatori hanno un diritto di recesso di 14 giorni. Se ci chiede di iniziare entro tale periodo, potremo addebitare il lavoro già svolto. Tutti i dettagli sono nella nostra Politica di rimborso e recesso."],
    ],
  },
  contact: {
    metaTitle: "Contatti",
    metaDescription: `Contatti ${S.tradingName}. Rispondiamo alle sue domande entro ${RT}.`,
    eyebrow: "Contatti", title: "Ci contatti", lead: `Domande prima di ordinare? Rispondiamo entro ${RT}.`,
    emailNote: "E-mail, il modo migliore per contattarci", phoneNote: "Assistenza telefonica",
    whatsapp: "Ci scriva su WhatsApp", whatsappNote: "Domande rapide",
    already: "Ha già ordinato? [Carichi qui le sue misure e foto](/intake).",
    formTitle: "Ci invii un messaggio",
    waText: "Salve, ho una domanda sui vostri pacchetti di disegni.",
  },
  intake: {
    metaTitle: "Carica misure e foto",
    metaDescription: "Raccolta sicura del progetto: carichi misure, schizzi, foto e descrizione per il suo pacchetto di disegni.",
    eyebrow: "Raccolta del progetto", title: "Carichi misure e foto",
    lead: "Ci invii tutto il necessario per realizzare i disegni. I tempi di consegna decorrono dal ricevimento di misure complete.",
    trouble: `Problemi di caricamento? Invii i file a ${mail} indicando il riferimento dell'ordine.`,
  },
  pay: {
    metaTitle: "Paga una fattura",
    metaDescription: `Paghi online in sicurezza la sua fattura ${S.tradingName}.`,
    eyebrow: "Clienti", title: "Paga una fattura",
    lead: "Inserisca il numero di fattura e l'importo totale dovuto (IVA inclusa) riportati in fattura, poi paghi in sicurezza sulla pagina del nostro fornitore di pagamenti.",
    questions: `Domande su una fattura? Scriva a ${mail}`,
    cancelled: "Pagamento annullato. Non le è stato addebitato nulla.",
  },
  forms: {
    name: "Nome e cognome", email: "E-mail", phone: "Telefono", optional: "(facoltativo)",
    orderRef: "Riferimento ordine", orderRefHint: "(dalla e-mail di conferma)",
    interested: "Interessato a", notSure: "Non ancora deciso", packSuffix: "",
    yourPack: "Il suo pacchetto", select: "Seleziona…", address: "Indirizzo dell'immobile e CAP",
    files: "Misure, schizzi, foto e planimetrie", filesHint: "(JPG, PNG, HEIC, PDF, DWG, DXF o DOCX, fino a 4 MB in totale)",
    link: "Link a file più grandi", linkHint: "(WeTransfer, Google Drive, Dropbox, facoltativo)",
    brief: "Descrizione del progetto",
    briefPlaceholder: "Cosa vuole costruire o modificare? Indichi altezze dei soffitti, spessori dei muri ed eventuali confini noti.",
    message: "Il suo messaggio", sendIntake: "Invia i dati del progetto", sendContact: "Invia messaggio", sending: "Invio…",
    sentIntake: `Grazie. Abbiamo ricevuto i dati del progetto e le risponderemo entro ${RT}.`,
    sentContact: `Grazie. Abbiamo ricevuto il suo messaggio e le risponderemo entro ${RT}.`,
    privacy: "Usiamo i suoi dati solo per consegnare i disegni e risponderle. Veda la nostra [Informativa sulla privacy](/privacy-policy).",
    accuracy: "Inviando, conferma che le misure e le informazioni fornite sono esatte per quanto a sua conoscenza.",
    invName: "Il suo nome", invEmail: "E-mail per la ricevuta", invNumber: "Numero fattura", invAmount: "Importo dovuto, IVA inclusa", invCurrency: "Valuta della fattura",
    invSubmit: "Paga la fattura in sicurezza", opening: "Apertura del pagamento sicuro…",
    secure: "I dati di pagamento si inseriscono sulla pagina sicura del nostro fornitore. Non vediamo né conserviamo mai i dati della sua carta.",
  },
  errors: {
    terms_required: "Confermi di accettare i Termini e la Politica di rimborso e recesso.",
    missing_fields: "Compili tutti i campi obbligatori.",
    invalid_amount: `Inserisca un importo compreso tra ${m(invoiceLimits.min)} e ${m(invoiceLimits.max)}.`,
    unavailable: `Il pagamento online non è momentaneamente disponibile. Scriva a ${S.supportEmail}`,
    too_large: "I file superano i 4 MB in totale. Li condivida tramite un link (ad es. WeTransfer o Google Drive).",
    bad_type: "Uno dei file ha un formato non supportato. Usi JPG, PNG, HEIC, PDF, DWG, DXF o DOCX.",
    generic: `Siamo spiacenti, si è verificato un errore. Scriva a ${S.supportEmail}`,
  },
  success: {
    metaTitle: "Ordine ricevuto", eyebrowPaid: "Pagamento riuscito", eyebrowThanks: "Grazie",
    title: "Grazie per l'ordine", paid: "Abbiamo ricevuto il suo pagamento di {amount}.",
    processing: "Il pagamento è in elaborazione.", receipt: "Una ricevuta è stata inviata a {email}.",
    ref: "Il suo riferimento ordine: {ref}",
    next: "**Passo successivo:** carichi misure, schizzi e foto così possiamo iniziare a disegnare.",
    upload: "Carica misure e foto",
    questions: `Domande? Scriva a ${mail}. Rispondiamo entro ${RT}.`,
  },
  cta: { title: "Pronto a ricevere i suoi disegni?", text: "Prezzi fissi, 100% online, consegnati in PDF e DWG.", primary: "Vedi i pacchetti", secondary: "Fai una domanda" },
  footer: {
    about: "Disegni CAD architettonici, pacchetti di progettazione 2D e 3D ed elaborati per titoli edilizi e regolamenti edilizi, realizzati a distanza dalle sue misure e foto e consegnati in digitale.",
    studio: "Studio", legal: "Note legali", contact: "Contatti",
    links: {
      packages: "Pacchetti di disegni", how: "Come funziona", samples: "Esempi di elaborati", faq: "FAQ",
      intake: "Carica le misure", pay: "Paga una fattura", terms: "Termini e condizioni",
      refund: "Politica di rimborso e recesso", privacy: "Informativa sulla privacy", cookies: "Cookie policy",
      notice: "Note legali e condizioni internazionali", cookieSettings: "Impostazioni cookie",
    },
    whatsapp: "Ci scriva su WhatsApp", replyWithin: `Rispondiamo entro ${RT}`,
    registered: `${S.legalName}, con denominazione commerciale ${S.tradingName}. Registrata in Inghilterra e Galles.`,
    companyNo: "Numero di registrazione (Companies House)", office: "Sede legale", vat: "Partita IVA",
    email: "E-mail", phone: "Telefono", arb: "Studio di progettazione architettonica CAD e disegno tecnico. Non iscritto all'ARB.",
  },
  cookie: {
    title: "Cookie su questo sito",
    text: "Utilizziamo memorizzazione strettamente necessaria per far funzionare il sito e ricordare la sua scelta. Con il suo consenso vorremmo usare anche cookie analitici per capire come viene usato il sito. Restano disattivati se non li accetta. [Leggi la Cookie policy](/cookie-policy).",
    necessary: "Strettamente necessari", necessaryDesc: "(sempre attivi): sicurezza, pagamento e salvataggio della scelta sui cookie.",
    analytics: "Analitici", analyticsDesc: "(facoltativi): statistiche anonime sulle visite.",
    reject: "Rifiuta i non essenziali", accept: "Accetta tutti", manage: "Gestisci impostazioni", save: "Salva le mie scelte",
    open: "Apri impostazioni cookie",
  },
  legal: {
    eyebrow: "Note legali",
    updated: "Ultimo aggiornamento: {date}",
    translationNote: "Questa traduzione è fornita per comodità. In caso di discrepanze prevale la versione inglese, salvo diversa disposizione inderogabile della legge del suo Paese di residenza.",
    terms: {
      metaTitle: "Termini e condizioni", metaDescription: `Termini e condizioni dei servizi di disegno CAD a distanza di ${S.tradingName}.`,
      title: "Termini e condizioni",
      sections: [
        { h: "1. Chi siamo", body: [
          `I presenti termini si applicano a tutti gli ordini effettuati presso **${S.legalName}**, con denominazione commerciale **${S.tradingName}** («noi»), società registrata in Inghilterra e Galles con il numero ${S.companyNumber}, sede legale ${S.registeredOffice}, partita IVA ${S.vatNumber}. Contatti: ${mail}, ${S.phoneDisplay}.`,
        ] },
        { h: "2. I nostri servizi", body: [
          "Forniamo **servizi su misura di disegno CAD digitale e produzione di disegni architettonici**: disegni 2D e 3D, set per titoli edilizi, pacchetti di elaborati secondo i regolamenti edilizi e relativi documenti tecnici, basati esclusivamente su misure, schizzi, foto e informazioni da lei forniti.",
          { ul: [
            "I nostri servizi sono erogati **al 100% a distanza**. Non visitiamo il suo immobile e non eseguiamo rilievi in loco.",
            "Forniamo esclusivamente file digitali (PDF, DWG, immagini e, ove indicato, DOCX). Non forniamo beni fisici.",
            "Non eseguiamo, gestiamo né dirigiamo alcun lavoro edile, di costruzione o di ristrutturazione.",
            "Siamo uno studio di progettazione architettonica CAD e disegno tecnico. **Non siamo iscritti all'ARB** e non utilizziamo alcun titolo professionale protetto dalla legge.",
            "Salvo accordo scritto, non assumiamo il ruolo di coordinatore della progettazione ai sensi delle CDM Regulations 2015 o delle Building Regulations britanniche e non forniamo progettazione strutturale.",
          ] },
        ] },
        { h: "3. Ordini", body: [
          "Lei effettua un ordine scegliendo un pacchetto, accettando i presenti termini e pagando online. Il contratto si conclude quando le confermiamo l'ordine via e-mail. Se non possiamo accettare l'ordine (ad esempio perché il progetto non può essere disegnato a distanza), la informeremo e la rimborseremo integralmente.",
        ] },
        { h: "4. Prezzi e pagamento", body: [
          { ul: [
            `I prezzi dei pacchetti sono importi fissi **IVA esclusa**: Essential ${m(P.essential)}, Standard ${m(P.standard)}, Premium ${m(P.premium)}. L'IVA britannica del 20% viene aggiunta ove applicabile e indicata al checkout. Per i progetti fuori dal Regno Unito confermiamo il trattamento IVA prima dell'ordine.`,
            "Può pagare al checkout o tramite fattura con i metodi che il nostro fornitore di pagamenti offre per il suo Paese e la sua valuta (ad es. carte, portafogli digitali e metodi bancari o regionali supportati).",
            "Su richiesta possiamo concordare un pagamento in due rate: 50% di acconto e 50% prima del rilascio dei file CAD/DWG finali.",
            "I file finali senza filigrana vengono rilasciati solo dopo l'incasso del pagamento completo.",
          ] },
        ] },
        { h: "5. Le sue informazioni e responsabilità sulle misure", body: [
          "Poiché i nostri servizi sono interamente a distanza e senza sopralluoghi, **lei è l'unico responsabile dell'esattezza e completezza di tutte le misure, dei confini, delle quote, delle foto e delle altre informazioni inviate**. Disegniamo sulla base delle sue informazioni. Segnaleremo le incoerenze evidenti, ma non rispondiamo di errori o conseguenze (inclusi dinieghi, rifacimenti o costi di costruzione) derivanti da informazioni inesatte o incomplete. Verifichi tutte le quote in loco prima di usare i disegni per lavori o ordini di materiali.",
          "Lei conferma di avere il diritto di inviarci planimetrie, foto e documenti caricati, compresi quelli realizzati da terzi.",
        ] },
        { h: "6. Perimetro, revisioni ed esclusioni", body: [
          { ul: [
            "**Essential:** 1 giro di revisione digitale entro 14 giorni dalla consegna della prima bozza.",
            "**Standard:** 2 giri di revisione digitali entro 14 giorni dalla consegna della prima bozza.",
            "**Premium:** fino a 3 giri di revisione digitali entro 21 giorni dalla consegna della prima bozza.",
          ] },
          "Un giro di revisione è un elenco unico di modifiche ai disegni già prodotti, entro il perimetro originale. Nuovi progetti, cambiamenti dell'impostazione generale o revisioni richieste dopo la scadenza sono fuori perimetro e verranno preventivati prima di qualsiasi lavoro.",
          { h3: "Non incluso, salvo indicazione espressa nel pacchetto" },
          { ul: [
            "Calcoli o progettazione strutturale",
            "Diritti e oneri amministrativi, inclusi quelli per titoli edilizi e controlli",
            "Presentazione di pratiche a suo nome o rappresentanza presso enti",
            "Rilievi topografici, sopralluoghi o ispezioni in loco",
            "Servizi relativi a muri di confine (Party Wall Surveyor)",
            "Qualsiasi lavoro edile, di costruzione o ristrutturazione",
          ] },
        ] },
        { h: "7. Tempi", body: [
          "I tempi di consegna sono espressi in giorni lavorativi e decorrono dal ricevimento di misure e informazioni complete. Si tratta di stime in buona fede. Se servono ulteriori informazioni, i tempi restano sospesi fino al loro ricevimento. Se non ha chiesto un avvio anticipato, i tempi decorrono dalla fine del periodo di recesso di 14 giorni.",
        ] },
        { h: "8. Autorizzazioni", body: [
          "Redigiamo i suoi disegni secondo le **norme edilizie, urbanistiche e gli standard di disegno del Paese e del Comune in cui si trova l'immobile**; secondo gli standard britannici solo se l'immobile è nel Regno Unito. Ad esempio: UK Building Regulations nel Regno Unito; norme nazionali e locali nei Paesi dell'UE; codici adottati dallo Stato e dalla giurisdizione locale negli USA (di norma basati su IRC/IBC), in unità metriche o imperiali a seconda dei casi. Ci indichi l'ente competente ed eventuali requisiti locali specifici; variano da zona a zona e resta sua responsabilità verificarli con l'ente. Le decisioni spettano all'autorità competente e **non possiamo garantire l'approvazione di alcuna pratica**. Non forniamo timbri o firme professionali; ove la legge locale richieda elaborati timbrati, un professionista abilitato localmente deve verificarli e timbrarli. Le modifiche richieste da un ente entro il perimetro del pacchetto rientrano nei giri di revisione inclusi.",
        ] },
        { h: "9. Proprietà intellettuale", body: [
          "Il diritto d'autore (o, ove non trasferibile, tutti i diritti di utilizzazione economica cedibili) sui disegni CAD/PDF finali **le viene trasferito al ricevimento del pagamento completo**, nei limiti di legge. Fino ad allora i disegni restano di nostra proprietà e non devono essere usati né presentati. Modelli, cartigli e dettagli generici restano nostri, ma lei ha una licenza permanente per utilizzarli nei suoi disegni. Mostreremo il suo progetto nel nostro portfolio solo con il suo consenso.",
        ] },
        { h: "10. Recesso e rimborsi", body: [
          `I suoi diritti di recesso e gli importi rimborsabili sono indicati nella nostra [Politica di rimborso e recesso](/refund-policy), parte integrante dei presenti termini. In sintesi: rimborso integrale prima dell'inizio del disegno; rimborso meno una quota di avvio di ${m(setupFee[C])} dopo l'esame della documentazione ma prima della prima bozza; di norma nessun rimborso dopo la consegna della prima bozza.`,
        ] },
        { h: "11. Responsabilità", body: [
          { ul: [
            "Nulla nei presenti termini limita la nostra responsabilità per morte o lesioni personali causate da negligenza, per frode o per qualsiasi altra ipotesi non limitabile per legge.",
            "Se è un consumatore, dobbiamo prestare i servizi con la dovuta cura e competenza, e lei gode dei diritti previsti dal Consumer Rights Act 2015 (e, se risiede nell'UE/SEE, delle norme inderogabili a tutela dei consumatori del suo Paese). Tali diritti non sono pregiudicati.",
            "Non rispondiamo di perdite dovute a informazioni inesatte da lei fornite, alla mancata verifica delle quote in loco, a decisioni di qualsiasi ente o a lavori eseguiti da terzi.",
            "Nei confronti dei clienti professionali, la nostra responsabilità complessiva è limitata al corrispettivo pagato per il relativo pacchetto e non rispondiamo di danni indiretti, consequenziali o mancato guadagno.",
          ] },
        ] },
        { h: "12. Reclami", body: [
          `Se non è soddisfatto del nostro servizio, scriva a ${mail}. Rispondiamo entro ${RT} e cercheremo una soluzione con lei. La preghiamo di contattarci prima di avviare una contestazione presso la sua banca. Ciò non pregiudica i suoi diritti di legge.`,
        ] },
        { h: "13. Protezione dei dati", body: ["Trattiamo i suoi dati personali come descritto nella nostra [Informativa sulla privacy](/privacy-policy)."] },
        { h: "14. Legge applicabile e clienti internazionali", body: [
          { ul: [
            "I presenti termini sono regolati dalla legge di **Inghilterra e Galles** e sono competenti i tribunali di Inghilterra e Galles.",
            "Se è un consumatore residente nell'UE/SEE, questa scelta di legge non la priva della tutela delle norme inderogabili del suo Paese di residenza e potrà, se del caso, rivolgersi ai tribunali del suo Paese. Maggiori informazioni nelle [Note legali](/legal-notice).",
            "Possiamo aggiornare questi termini; al suo ordine si applica la versione pubblicata al momento dell'ordine. Se una clausola risultasse inefficace, le altre restano valide.",
          ] },
        ] },
      ],
    },
    refund: {
      metaTitle: "Politica di rimborso e recesso", metaDescription: "Il suo diritto di recesso di 14 giorni e le nostre fasce di rimborso per pacchetti di disegni su misura.",
      title: "Politica di rimborso e recesso",
      sections: [
        { h: "1. Il suo diritto di recesso di 14 giorni", body: [
          "Se è un consumatore, può recedere dall'ordine entro **14 giorni** dal giorno in cui lo confermiamo, senza indicarne il motivo. Per i consumatori dell'UE/SEE (ad es. in Italia, Codice del Consumo) questo diritto deriva dalla normativa del suo Paese che recepisce la direttiva 2011/83/UE; per i consumatori del Regno Unito, dalle **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**.",
        ] },
        { h: "2. Servizio su misura e avvio durante il periodo di recesso", body: [
          "Ogni pacchetto di disegni è un **servizio su misura, realizzato sulle misure specifiche del suo immobile**. Non iniziamo a disegnare durante il periodo di recesso di 14 giorni salvo sua richiesta espressa.",
          { ul: [
            "**Se non chiede un avvio anticipato,** iniziamo allo scadere dei 14 giorni e fino ad allora può recedere con rimborso integrale.",
            "**Se chiede un avvio anticipato** (spuntando la casella all'ordine o per iscritto) e poi recede entro i 14 giorni, dovrà pagare un importo proporzionato al lavoro svolto fino alla comunicazione del recesso, secondo le fasce indicate sotto.",
            "**Perde il diritto di recesso una volta che il servizio è stato interamente eseguito** (consegna dei file finali), se l'esecuzione è iniziata entro il periodo su sua richiesta espressa e con il suo riconoscimento di tale conseguenza.",
          ] },
        ] },
        { h: "3. Fasce di rimborso", body: [
          "Queste fasce indicano come valutiamo il lavoro svolto. Si applicano a tutti gli ordini, sia che lei receda entro sia dopo i 14 giorni.",
          { table: { head: ["Quando annulla", "Cosa le viene rimborsato"], rows: [
            ["Prima di aver inviato le misure e prima dell'inizio del disegno CAD", "**Rimborso integrale (100%)**"],
            ["Dopo l'avvio dell'esame della documentazione (misure, foto e descrizione), ma prima dell'invio dei primi PDF di bozza", `**Rimborso integrale meno una quota di avvio di ${m(setupFee[C])}** (+ IVA ove applicabile), a copertura di esame, impostazione e disegno di base`],
            ["Dopo la consegna del primo set di PDF di bozza", "**Di norma non rimborsabile.** Il lavoro di disegno su misura è sostanzialmente completato. Se una parte sostanziale del pacchetto non è ancora stata eseguita, rimborseremo un importo equo per tale parte."],
          ] } },
          "I clienti professionali non hanno il diritto di recesso previsto dalla legge, ma possono annullare in qualsiasi momento secondo le stesse fasce.",
        ] },
        { h: "4. Come recedere", body: [
          `Invii una e-mail a ${mail} con il suo nome, il riferimento dell'ordine e una dichiarazione esplicita di recesso. Può usare il modulo tipo qui sotto, ma non è obbligatorio.`,
          { box: [
            "**Modulo tipo di recesso**",
            `Destinatario: ${S.legalName}, con denominazione commerciale ${S.tradingName}, ${S.registeredOffice}, ${S.supportEmail}`,
            "Con la presente io/noi notifichiamo il recesso dal mio/nostro contratto per la prestazione del seguente servizio: [nome del pacchetto]",
            "Ordinato il: [data] · Riferimento ordine: [riferimento]",
            "Nome: [suo nome] · Indirizzo: [suo indirizzo] · Data: [data]",
          ] },
        ] },
        { h: "5. Rimborsi", body: [
          "Rimborsiamo ogni importo dovuto entro **14 giorni** dal ricevimento del recesso, con lo stesso mezzo di pagamento da lei utilizzato. Non addebitiamo costi per il rimborso.",
        ] },
        { h: "6. Se annulliamo noi", body: [
          "Se non possiamo completare i disegni (ad esempio perché il progetto non può essere disegnato con precisione a distanza), le spiegheremo il motivo e rimborseremo la parte del servizio non ancora prestata.",
        ] },
        { h: "7. Problemi e controversie", body: [
          `La preghiamo di contattarci prima a ${mail}. Garantiamo una risposta entro **${RT}** e cercheremo una soluzione con lei. Ci dia la possibilità di rimediare prima di avviare una contestazione o un chargeback presso la sua banca. Restano salvi i suoi diritti di legge.`,
        ] },
      ],
    },
    privacy: {
      metaTitle: "Informativa sulla privacy", metaDescription: `Come ${S.tradingName} raccoglie e utilizza i suoi dati personali.`,
      title: "Informativa sulla privacy",
      sections: [
        { h: "1. Titolare del trattamento", body: [
          `**${S.legalName}** (con denominazione commerciale ${S.tradingName}), numero di registrazione ${S.companyNumber}, sede legale ${S.registeredOffice}, è il **titolare del trattamento** dei dati descritti in questa informativa. Richieste sulla privacy: ${mail}`,
          "Questa informativa spiega come trattiamo i suoi dati ai sensi del GDPR britannico (UK GDPR), del Data Protection Act 2018 e del Data (Use and Access) Act 2025. Se si trova nell'UE/SEE, rispettiamo anche i suoi diritti ai sensi del GDPR dell'UE.",
        ] },
        { h: "2. Dati raccolti", body: [
          { ul: [
            "**Dati di contatto:** nome, indirizzo e-mail, numero di telefono.",
            "**Dati del progetto:** indirizzo dell'immobile, la sua descrizione e le misure, gli schizzi, le planimetrie, le foto e i documenti caricati.",
            "**Ordini e fatturazione:** servizi acquistati, importi pagati, indirizzo di fatturazione e traccia della sua accettazione dei termini e della scelta di avvio. I dati di pagamento sono trattati dal nostro fornitore; non vediamo né conserviamo mai il numero completo della sua carta.",
            "**Comunicazioni:** e-mail, messaggi del modulo e di WhatsApp.",
            "**Dati tecnici:** log di base del server (ad es. indirizzo IP e tipo di browser) conservati dal nostro hosting per sicurezza, e le sue scelte sui cookie.",
          ] },
          "Le foto dell'immobile possono ritrarre persone, veicoli o proprietà vicine. Eviti, se possibile, di includere persone.",
        ] },
        { h: "3. Finalità e basi giuridiche", body: [
          { table: { head: ["Finalità", "Base giuridica"], rows: [
            ["Gestire l'ordine, realizzare e consegnare i disegni, gestire revisioni e rimborsi", "Esecuzione del contratto (art. 6.1.b GDPR)"],
            ["Tenere la contabilità e i registri fiscali per l'autorità fiscale britannica (HMRC)", "Obbligo di legge (art. 6.1.c)"],
            ["Rispondere alle richieste prima dell'ordine", "Misure precontrattuali / legittimo interesse"],
            ["Prevenire frodi, proteggere il sito e gestire controversie o reclami", "Legittimo interesse (art. 6.1.f)"],
            ["Cookie analitici facoltativi (solo se li accetta)", "Consenso (art. 6.1.a), revocabile in qualsiasi momento"],
          ] } },
          "Non vendiamo i suoi dati, non li usiamo per marketing senza consenso e non prendiamo decisioni automatizzate che la riguardano.",
        ] },
        { h: "4. Destinatari", body: [
          "Ci avvaliamo di fornitori affidabili (responsabili del trattamento) che trattano i dati solo su nostra istruzione:",
          { ul: [
            "**Fornitori di pagamento:** Stripe (e Dodo Payments, se utilizzato), per i pagamenti e la prevenzione delle frodi.",
            "**Hosting del sito:** Vercel.",
            "**Posta elettronica:** per e-mail e moduli (ad es. Google).",
            "**Archiviazione cloud:** per i file di progetto e la consegna dei disegni, e qualsiasi servizio di trasferimento da lei scelto.",
            "**WhatsApp (Meta):** solo se sceglie di scriverci lì.",
            "**I nostri commercialisti** e consulenti, e l'HMRC o altre autorità ove richiesto dalla legge.",
          ] },
          "Alcuni fornitori trattano dati fuori dal Regno Unito/SEE (ad es. negli USA). I trasferimenti sono tutelati da decisioni di adeguatezza (UK-US Data Bridge, EU-US Data Privacy Framework) o da clausole contrattuali standard / l'IDTA britannico o il relativo addendum.",
        ] },
        { h: "5. Periodi di conservazione", body: [
          { ul: [
            "Ordini, fatture e pagamenti: **6 anni** dalla fine dell'esercizio di riferimento (requisito HMRC).",
            "File di progetto e disegni: **6 anni** dal completamento, per eventuali domande o reclami.",
            "Richieste non seguite da ordine: **12 mesi**.",
            "Scelte sui cookie: finché non le modifica o cancella la memoria del browser.",
          ] },
        ] },
        { h: "6. I suoi diritti", body: [
          "Ha diritto di **accesso**, **rettifica** dei dati inesatti, **cancellazione** quando non vi sia motivo di conservarli, **limitazione** del trattamento, **portabilità**, **opposizione** ai trattamenti basati sul legittimo interesse e di **revocare il consenso** in qualsiasi momento (ad es. dalle impostazioni cookie nel piè di pagina).",
          `Per esercitare i suoi diritti, scriva a ${mail}. Risponderemo entro **un mese**, prorogabile di altri due mesi per richieste complesse, nel qual caso le spiegheremo il motivo.`,
        ] },
        { h: "7. Reclami", body: [
          `Se non è soddisfatto di come trattiamo i suoi dati, presenti prima un reclamo a ${mail}. Ne confermeremo la ricezione entro **30 giorni** (obiettivo: ${RT}), lo esamineremo rapidamente e le comunicheremo l'esito senza ingiustificato ritardo.`,
          "Può inoltre presentare reclamo all'**Information Commissioner's Office (ICO)** del Regno Unito: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/), +44 303 123 1113. Se risiede nell'UE/SEE, può rivolgersi anche all'autorità di protezione dei dati del suo Paese (in Italia, il Garante per la protezione dei dati personali).",
        ] },
        { h: "8. Sicurezza", body: ["Utilizziamo connessioni cifrate (HTTPS), fornitori affidabili e controlli di accesso. Nessun sistema è completamente sicuro: non ci invii informazioni sensibili non necessarie."] },
        { h: "9. Cookie e modifiche", body: ["Veda la nostra [Cookie policy](/cookie-policy). Possiamo aggiornare questa informativa; la versione più recente è sempre su questa pagina."] },
      ],
    },
    cookies: {
      metaTitle: "Cookie policy", metaDescription: `Come ${S.tradingName} utilizza cookie e tecnologie simili.`,
      title: "Cookie policy",
      sections: [
        { h: "1. Cosa sono i cookie?", body: [
          `Questa policy spiega come ${S.legalName} (con denominazione commerciale ${S.tradingName}) utilizza cookie e tecnologie simili, in conformità alle Privacy and Electronic Communications Regulations (PECR) britanniche, al UK GDPR e alle norme ePrivacy dell'UE. I cookie sono piccoli file salvati sul suo dispositivo dai siti visitati. Tecnologie simili, come la memoria locale del browser, funzionano in modo analogo; qui le chiamiamo tutte «cookie».`,
        ] },
        { h: "2. Cookie utilizzati", body: [
          { table: { head: ["Nome", "Tipo", "Finalità", "Durata"], rows: [
            ["ftds-cookie-consent (memoria locale)", "Strettamente necessario", "Ricorda se ha accettato o rifiutato i cookie non essenziali", "Finché non lo modifica o cancella"],
            ["Cookie del fornitore di pagamento (ad es. Stripe)", "Strettamente necessario", "Impostati sulla pagina di pagamento sicura del fornitore per prevenire frodi ed elaborare il pagamento. Regolati dalla policy del fornitore.", "Stabilita dal fornitore"],
            ["_ga, _ga_* (Google Analytics)", "Analitico (facoltativo)", "Statistiche anonime d'uso. **Solo se li accetta.** Se non usiamo strumenti analitici, non vengono mai impostati.", "Fino a 2 anni"],
          ] } },
          "Non utilizziamo cookie pubblicitari o di marketing. I nostri caratteri tipografici sono ospitati sul nostro sito, quindi caricando una pagina non vengono inviati dati a fornitori di font. La scelta della lingua fa parte dell'indirizzo web, non è un cookie.",
        ] },
        { h: "3. Le sue scelte", body: [
          "Alla prima visita le chiediamo la sua scelta tramite un banner con pulsanti di pari evidenza **Accetta tutti** e **Rifiuta i non essenziali**. Nessuna opzione facoltativa è preselezionata e nessuno script analitico o di marketing viene caricato senza il suo consenso. Può cambiare idea in qualsiasi momento dalle **Impostazioni cookie** nel piè di pagina. Può anche bloccare o cancellare i cookie dalle impostazioni del browser; bloccare quelli strettamente necessari può impedire il pagamento.",
        ] },
        { h: "4. Ulteriori informazioni", body: [`Veda la nostra [Informativa sulla privacy](/privacy-policy) o scriva a ${mail}`] },
      ],
    },
    notice: {
      metaTitle: "Note legali e condizioni internazionali",
      metaDescription: `Informazioni legali su ${S.legalName}, con denominazione commerciale ${S.tradingName}, e informazioni sul recesso per clienti del Regno Unito e dell'UE/SEE.`,
      title: "Note legali e condizioni internazionali",
      sections: [
        { h: "1. Dati della società", body: [
          { box: [
            `**${S.legalName}**, con denominazione commerciale **${S.tradingName}**`,
            "Società a responsabilità limitata (private limited company) registrata in Inghilterra e Galles",
            `Numero di registrazione: ${S.companyNumber} (Companies House)`,
            `Sede legale: ${S.registeredOffice}`,
            `Partita IVA (Regno Unito): ${S.vatNumber}`,
            ...(S.director ? [`Amministratore (Director): ${S.director}`] : []),
            `E-mail: ${S.supportEmail} · Telefono: ${S.phoneDisplay}`,
          ] },
          "Attività: disegno CAD architettonico a distanza e produzione di disegni digitali. Non siamo iscritti all'ARB (Regno Unito) né ad alcun organismo professionale equivalente in altri Paesi e non utilizziamo alcun titolo professionale protetto in nessun Paese.",
        ] },
        { h: "2. A chi sono rivolti i nostri servizi", body: [
          "Vendiamo online pacchetti di disegni digitali su misura a clienti nel Regno Unito e all'estero, tra cui Germania, Francia, Spagna, Italia e Stati Uniti. Ogni cliente riceve disegni conformi alle norme edilizie del proprio Paese, non agli standard britannici. Tutto il lavoro è svolto a distanza; non effettuiamo sopralluoghi né lavori edili in alcun Paese.",
        ] },
        { h: "3. Recesso: consumatori del Regno Unito", body: [
          "I consumatori del Regno Unito hanno un diritto di recesso di 14 giorni ai sensi delle Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. Se chiede espressamente l'avvio entro tale periodo, in caso di recesso dovrà pagare il lavoro svolto, e il diritto si estingue una volta eseguito interamente il servizio. Dettagli: [Politica di rimborso e recesso](/refund-policy).",
        ] },
        { h: "4. Recesso: consumatori dell'UE/SEE (Germania, Francia, Spagna, Italia e altri)", body: [
          "Se è un consumatore residente nell'UE/SEE, ha un **diritto di recesso di 14 giorni** dalla conclusione del contratto, senza dover fornire motivazioni, ai sensi della normativa del suo Paese che recepisce la direttiva 2011/83/UE (in Italia, il Codice del Consumo).",
          { ul: [
            `Per esercitarlo, ci invii una dichiarazione esplicita (ad es. via e-mail a ${S.supportEmail}) prima della scadenza. Può usare il modulo tipo presente nella nostra [Politica di rimborso e recesso](/refund-policy), ma non è obbligatorio.`,
            "In caso di recesso, le rimborseremo tutti i pagamenti ricevuti senza indebito ritardo e comunque entro 14 giorni dal ricevimento della sua comunicazione, con lo stesso mezzo di pagamento.",
            "Se ha chiesto espressamente che il servizio iniziasse durante il periodo di recesso, dovrà pagare un importo proporzionale a quanto fornito fino alla comunicazione del recesso.",
            "Il diritto di recesso si estingue una volta eseguito interamente il servizio, se l'esecuzione è iniziata con il suo previo consenso espresso e con il suo riconoscimento della perdita di tale diritto.",
          ] },
        ] },
        { h: "5. Prezzi, IVA e valuta", body: [
          "Sui nostri siti in tedesco, francese, spagnolo e italiano i prezzi sono indicati e addebitati in euro (EUR); sul sito in inglese in sterline britanniche (GBP). Ogni valuta ha un proprio listino a prezzi fissi (nessuna conversione al cambio del giorno): il prezzo indicato è quello che paga. I prezzi si intendono IVA britannica del 20% esclusa, con il totale IVA inclusa anch'esso indicato. La sua banca può applicare un proprio tasso di cambio o commissioni. Per immobili fuori dal Regno Unito possono applicarsi regole IVA diverse; ci contatti prima di ordinare per confermare il trattamento corretto.",
        ] },
        { h: "6. Legge applicabile, foro e controversie", body: [
          "I nostri contratti sono regolati dalla legge di **Inghilterra e Galles**. Se è un consumatore, ciò non la priva della tutela delle norme inderogabili della legge del suo Paese di residenza e potrà, se del caso, rivolgersi ai tribunali del suo Paese.",
          `In caso di reclamo, ci contatti prima a ${mail}. Rispondiamo entro ${RT}. Nel suo Paese possono essere disponibili anche servizi di assistenza ai consumatori o di risoluzione alternativa delle controversie.`,
        ] },
        { h: "7. Lingue", body: [
          "Questo sito è disponibile in inglese, tedesco, francese, spagnolo e italiano. Le traduzioni sono fornite per comodità. In caso di discrepanze prevale la versione inglese, salvo diversa disposizione inderogabile della legge del suo Paese.",
        ] },
        { h: "8. Responsabile dei contenuti", body: [
          `${S.legalName}, ${S.registeredOffice}. Documenti correlati: [Termini e condizioni](/terms), [Politica di rimborso e recesso](/refund-policy), [Informativa sulla privacy](/privacy-policy), [Cookie policy](/cookie-policy).`,
        ] },
      ],
    },
  },
  samplesFigures: { fileName: "progetto-piano-terra.dwg" },
};

export default it;
