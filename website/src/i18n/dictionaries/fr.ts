import type { Dict } from "../types";
import { currencyFor, money } from "../config";
import { invoiceLimits, packages, setupFee, site as S } from "@/lib/site";

const m = (n: number) => money(n, "fr");
const C = currencyFor("fr");
const P = Object.fromEntries(packages.map((p) => [p.id, p.price[C]])) as Record<string, number>;
const mail = `[${S.supportEmail}](mailto:${S.supportEmail})`;
const RT = "2 jours ouvrés";

const fr: Dict = {
  meta: {
    siteTitle: "Plans CAO architecturaux & dossiers de permis – 100 % en ligne",
    siteDescription:
      "Dossiers de conception 2D & 3D à prix fixe : plans, façades et dessins réglementaires réalisés à distance à partir de vos mesures et photos. Livraison numérique en PDF & DWG.",
  },
  nav: {
    packages: "Formules", howItWorks: "Fonctionnement", samples: "Exemples de livrables", faq: "FAQ",
    payInvoice: "Payer une facture", contact: "Contact", cta: "Voir les formules",
    menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu", home: "accueil", skip: "Aller au contenu", language: "Langue",
  },
  hero: {
    eyebrow: "Studio de conception architecturale CAO",
    titleA: "Plans CAO architecturaux & dossiers de permis à distance.",
    titleB: "100 % en ligne.",
    lead: "Dossiers de conception 2D & 3D à prix fixe, plans d'étage et dessins conformes à la réglementation de votre pays, réalisés à distance à partir de vos mesures, croquis et photos. Livrés en formats PDF & DWG.",
    badgesLabel: "Pourquoi nous choisir",
    badges: ["Livraison 100 % numérique", "Tarifs fixes et transparents", "Conformes aux normes de votre pays", "Délais numériques rapides"],
    ctaPrimary: "Voir les formules",
    ctaSecondary: "Comment ça marche",
  },
  home: {
    packagesEyebrow: "Formules numériques à périmètre fixe", packagesTitle: "Formules de plans",
    packagesLead: "Des livrables clairs, des tours de révision définis et un délai de livraison numérique fixé. Aucune surprise.",
    howEyebrow: "Processus à distance", howTitle: "Comment ça marche", howLead: "Quatre étapes simples, entièrement en ligne.",
    samplesEyebrow: "Ce que contient votre dossier numérique", samplesTitle: "Exemples de livrables",
    samplesMore: "Voir tous les exemples",
    faqEyebrow: "FAQ", faqTitle: "Questions fréquentes", faqMore: "Lire toute la FAQ",
  },
  packages: {
    metaTitle: "Formules & tarifs",
    metaDescription: `Formules de plans CAO à prix fixe : Essential ${m(P.essential)}, Standard ${m(P.standard)} et Premium ${m(P.premium)} (HT, TVA britannique de 20 % en sus). Livraison numérique en PDF & DWG.`,
    pageEyebrow: "Formules numériques à périmètre fixe",
    pageTitle: "Formules de plans",
    pageLead: "Choisissez votre formule, commandez en ligne, puis envoyez vos mesures et photos. Nous dessinons tout à distance et vous livrons vos fichiers numériquement.",
    popular: "La plus choisie",
    plusVat: "HT",
    incVat: "{amount} TTC (TVA britannique 20 %)",
    orderLabel: "Commander la formule {name} : {price} HT",
    items: {
      essential: {
        name: "Essential",
        subtitle: "Dossier de plans numérique pour extensions simples, porches et annexes.",
        deliverables: [
          "Plan de base CAO, dessiné à distance à partir de vos mesures, croquis & photos",
          "Plans d'étage et façades 2D existants & projetés (PDF & DWG)",
          "Plans de situation et de masse à l'échelle (dossier PDF numérique)",
          "Jeu de plans prêt à déposer, formaté pour un envoi en ligne",
        ],
        revisions: "1 tour de révision numérique (dans les 14 jours suivant la livraison du premier projet)",
        timeline: "5 à 7 jours ouvrés après réception de vos mesures",
      },
      standard: {
        name: "Standard",
        subtitle: "Dossier numérique complet (urbanisme & réglementation de construction) pour extensions sur deux niveaux et aménagements de combles.",
        deliverables: [
          "Tout le contenu de la formule Essential",
          "Coupes détaillées & fiches de détails constructifs (PDF & DWG)",
          "Rendus 3D extérieurs et de volumétrie (images haute résolution)",
          "Dossier de dessins techniques annotés selon la réglementation de construction",
        ],
        revisions: "2 tours de révision numériques (dans les 14 jours suivant la livraison du premier projet)",
        timeline: "7 à 10 jours ouvrés après réception de vos mesures",
      },
      premium: {
        name: "Premium",
        subtitle: "Dossier complet de conception et de spécifications techniques pour constructions neuves, rénovations complètes et divisions en plusieurs logements.",
        deliverables: [
          "Tout le contenu de la formule Standard",
          "Spécification technique & descriptif des travaux (PDF/DOCX)",
          "Jeu de plans de référence : limites, ensoleillement & façades",
          "Dossier complet CAO & PDF prêt pour appel d'offres",
        ],
        revisions: "Jusqu'à 3 tours de révision numériques (dans les 21 jours suivant la livraison du premier projet)",
        timeline: "Prioritaire : 10 à 14 jours ouvrés après réception de vos mesures",
      },
    },
    vatNote: "Tous les prix s'entendent hors TVA britannique de 20 %, le cas échéant. Un paiement échelonné (acompte de 50 % à la réservation / 50 % avant la remise des fichiers CAO/DWG finaux) est possible sur demande. [Contactez-nous](/contact) avant de commander.",
    outsideUkNote: "Clients du monde entier, notamment au Royaume-Uni, en Europe et aux États-Unis : vos plans sont réalisés selon les règles de construction et les normes de dessin de **votre** pays, et non selon les normes britanniques. Projet hors du Royaume-Uni ? [Contactez-nous](/contact) avant de commander afin de confirmer vos exigences locales et le traitement de TVA applicable.",
    excludesNote: "Paiement en ligne sécurisé. Non inclus : calculs de structure, taxes ou frais administratifs et tout travail de construction sur place.",
    cancelled: "Votre paiement a été annulé et vous n'avez pas été débité.",
    paymentTitle: "Moyens de paiement",
    paymentText: "Payez en toute sécurité lors du paiement en ligne ou sur facture. Sont acceptés les principales cartes de crédit et de débit, les portefeuilles numériques comme Apple Pay et Google Pay, ainsi que d'autres moyens bancaires ou régionaux lorsque notre prestataire de paiement les prend en charge pour votre pays et votre devise. Les options disponibles s'affichent lors du paiement. Vous préférez un virement sur facture ? [Contactez-nous](/contact). Les clients aux États-Unis peuvent régler leurs factures en dollars américains (USD) sur notre page [Payer une facture](/pay), y compris par paiement bancaire américain (ACH) lorsqu'il est disponible.",
  },
  order: {
    groupLabel: "Confirmer votre commande",
    agree: "J'accepte les [Conditions générales](/terms) et la [Politique de remboursement et d'annulation](/refund-policy). Je comprends que tous les plans sont réalisés à distance à partir des mesures et photos que je fournis et que je suis responsable de leur exactitude.",
    start: "**Facultatif :** je demande expressément que vous commenciez le travail dès l'envoi de mes mesures, pendant le délai de rétractation de 14 jours. Je comprends que si je me rétracte ensuite, je devrai payer le travail déjà effectué et que je perds mon droit de rétractation une fois la prestation pleinement exécutée.",
    continue: "Continuer vers le paiement sécurisé",
    opening: "Ouverture du paiement sécurisé…",
    noStartNote: "Sans la case facultative, nous commencerons à dessiner à l'expiration de votre délai de rétractation de 14 jours.",
  },
  steps: [
    { title: "Choisissez votre formule à périmètre fixe", text: "Sélectionnez Essential, Standard ou Premium et finalisez votre commande en ligne." },
    { title: "Envoyez vos mesures & photos", text: "Transmettez vos mesures dessinées à la main, photos du bien, plans d'agence immobilière et descriptif du projet via notre formulaire sécurisé." },
    { title: "Dessin CAO & modélisation 3D à distance", text: "Notre équipe de conception CAO basée au Royaume-Uni réalise à distance vos plans architecturaux à l'échelle et vos dossiers techniques, selon les normes de construction du pays où se trouve votre bien." },
    { title: "Livraison numérique & révisions", text: "Recevez des PDF de relecture filigranés par e-mail, demandez vos tours de révision inclus, puis téléchargez vos fichiers finaux PDF & DWG sans filigrane." },
  ],
  howPage: {
    metaTitle: "Comment ça marche",
    metaDescription: "Notre processus à distance en 4 étapes : choisissez une formule, envoyez vos mesures et photos, nous dessinons à distance, vous recevez vos fichiers PDF & DWG.",
    eyebrow: "Processus à distance", title: "Comment ça marche", lead: "Tout se passe en ligne. Nous ne nous déplaçons jamais sur votre bien.",
    sendTitle: "Ce qu'il faut nous envoyer",
    sendList: [
      "Les mesures pièce par pièce (un croquis coté à la main suffit)",
      "Les dimensions extérieures et les hauteurs sous plafond",
      "Des photos de chaque façade et de chaque pièce concernée",
      "Les plans existants si vous en avez (par ex. d'une annonce immobilière)",
      "Un court descriptif de ce que vous souhaitez construire ou modifier",
      "Toute information connue sur les limites de propriété ou demandes antérieures",
    ],
    uploadCta: "Envoyer mes mesures",
    goodTitle: "Bon à savoir",
    goodList: [
      "Le délai de livraison commence à la réception de mesures complètes.",
      "Les projets de relecture sont des PDF filigranés ; les fichiers finaux sont livrés en PDF & DWG sans filigrane.",
      "Les tours de révision doivent être utilisés dans le délai indiqué pour votre formule.",
      "Vous êtes responsable de l'exactitude des mesures fournies.",
      "Les calculs de structure, frais administratifs et travaux ne sont pas inclus.",
    ],
    goodMore: "Tous les détails figurent dans nos [Conditions générales](/terms).",
  },
  samples: {
    metaTitle: "Exemples de livrables",
    metaDescription: "Contenu de votre dossier numérique : plans d'étage, façades, plans de situation, coupes réglementaires et rendus 3D.",
    eyebrow: "Ce que contient votre dossier numérique", title: "Exemples de livrables",
    lead: "Chaque plan est à l'échelle, titré et fourni en PDF prêt à imprimer et en fichier CAO DWG modifiable.",
    items: [
      { title: "Plans d'étage 2D", text: "Existant & projet, cotés (PDF & DWG). Toutes les formules." },
      { title: "Façades", text: "Matériaux, hauteurs & ouvertures de chaque façade. Toutes les formules." },
      { title: "Plans de situation & de masse", text: "Plans de référence à l'échelle pour votre dossier. Toutes les formules." },
      { title: "Coupes & détails de composition", text: "Coupes techniques annotées pour la réglementation. Standard & Premium." },
      { title: "Rendus 3D extérieurs & volumétrie", text: "Visuels haute résolution du projet. Standard & Premium." },
    ],
    note: "Exemples illustratifs des types de plans. Vos plans sont dessinés pour votre bien.",
  },
  faq: {
    metaTitle: "FAQ",
    metaDescription: "Réponses sur nos dossiers de plans CAO à distance : documents à fournir, formats, révisions, paiement et rétractation.",
    eyebrow: "FAQ", title: "Questions fréquentes",
    items: [
      ["Vous déplacez-vous sur mon bien ?", "Non. Nous sommes un studio de conception 100 % à distance. Chaque plan est réalisé à partir des mesures, croquis et photos que vous nous envoyez : nous ne visitons jamais votre bien."],
      ["Quelles normes mes plans respecteront-ils ?", "Celles du pays (et de la commune) où se trouve votre bien, et non les normes britanniques. Les projets au Royaume-Uni suivent les UK Building Regulations ; les projets en Europe, les règles nationales et locales applicables ; les projets aux États-Unis, les codes adoptés par votre État et votre collectivité (généralement fondés sur l'IRC/IBC). Les unités et formats de plans sont ceux d'usage dans votre pays (métriques ou impériaux). Indiquez-nous votre administration compétente et vos exigences particulières dans votre descriptif."],
      ["Travaillez-vous avec des clients aux États-Unis et dans d'autres pays ?", "Oui. Nous travaillons entièrement à distance pour des clients au Royaume-Uni, en Europe, aux États-Unis et dans le monde entier. Contactez-nous avant de commander afin de confirmer vos exigences locales et le traitement de TVA applicable. Nous ne fournissons ni tampon ni sceau professionnel : si votre administration exige des plans visés, un professionnel habilité localement doit les vérifier et les viser."],
      ["Que dois-je vous envoyer ?", "Les mesures approximatives de chaque pièce et de l'extérieur (un croquis à la main suffit), des photos de chaque façade et des pièces concernées, les plans existants (par ex. d'une annonce immobilière) et un court descriptif de votre projet."],
      ["Quelle précision pour mes mesures ?", "La meilleure possible. Nous dessinons selon vos cotes : les erreurs se retrouvent donc dans les plans. Nous signalons les incohérences, mais l'exactitude des informations reste sous votre responsabilité (voir nos Conditions)."],
      ["Quels formats de fichiers vais-je recevoir ?", "Des plans PDF prêts à imprimer ou à déposer, ainsi que des fichiers CAO DWG modifiables. Les formules Standard et Premium incluent aussi des rendus 3D haute résolution, et Premium une spécification en PDF/DOCX."],
      ["Comment puis-je payer ?", "Lors du paiement en ligne, par les principales cartes de crédit ou de débit, des portefeuilles numériques comme Apple Pay et Google Pay, et d'autres moyens bancaires ou régionaux lorsque notre prestataire les prend en charge pour votre pays et votre devise. Nous pouvons aussi émettre une facture, payable en ligne sur notre page « Payer une facture »."],
      ["Déposez-vous la demande d'autorisation pour moi ?", "Nous fournissons un jeu de plans prêt à déposer. Le dépôt et les frais administratifs restent à votre charge. Nous vous expliquons volontiers quel document va où."],
      ["Les calculs de structure ou les frais administratifs sont-ils inclus ?", "Non. Les calculs de structure, les frais d'autorisation et de contrôle, ainsi que tout travail de construction ne sont pas inclus."],
      ["Puis-je payer en plusieurs fois ?", "Oui. Sur demande, nous pouvons scinder le prix en un acompte de 50 % et 50 % avant la remise des fichiers CAO/DWG finaux. Contactez-nous avant de commander."],
      ["Puis-je annuler ?", "Oui. Les consommateurs disposent d'un droit de rétractation de 14 jours. Si vous nous demandez de commencer pendant ce délai, le travail déjà réalisé pourra vous être facturé. Tous les détails figurent dans notre Politique de remboursement et d'annulation."],
    ],
  },
  contact: {
    metaTitle: "Contact",
    metaDescription: `Contactez ${S.tradingName}. Réponse à vos questions sous ${RT}.`,
    eyebrow: "Nous contacter", title: "Contactez-nous", lead: `Des questions avant de commander ? Nous répondons sous ${RT}.`,
    emailNote: "E-mail, le meilleur moyen de nous joindre", phoneNote: "Assistance téléphonique",
    whatsapp: "Nous écrire sur WhatsApp", whatsappNote: "Questions rapides",
    already: "Déjà commandé ? [Envoyez vos mesures et photos ici](/intake).",
    formTitle: "Envoyez-nous un message",
    waText: "Bonjour, j'ai une question sur vos formules de plans.",
  },
  intake: {
    metaTitle: "Envoyer mesures & photos",
    metaDescription: "Dépôt sécurisé : envoyez vos mesures, croquis, photos et descriptif pour votre dossier de plans.",
    eyebrow: "Dépôt du projet", title: "Envoyez vos mesures & photos",
    lead: "Transmettez-nous tout ce dont nous avons besoin pour dessiner vos plans. Le délai de livraison commence dès réception de mesures complètes.",
    trouble: `Un problème d'envoi ? Envoyez vos fichiers à ${mail} avec votre référence de commande.`,
  },
  pay: {
    metaTitle: "Payer une facture",
    metaDescription: `Réglez votre facture ${S.tradingName} en ligne en toute sécurité.`,
    eyebrow: "Clients existants", title: "Payer une facture",
    lead: "Saisissez le numéro de facture et le montant total dû (TTC) indiqués sur votre facture, puis payez en toute sécurité sur la page de notre prestataire de paiement. Vous pouvez payer en livres (GBP), en euros (EUR) ou en dollars américains (USD).",
    questions: `Une question sur une facture ? Écrivez à ${mail}`,
    cancelled: "Paiement annulé. Vous n'avez pas été débité.",
    achTitle: "Payer par virement bancaire américain (ACH)",
    achIntro: "Les clients aux États-Unis peuvent également payer en dollars par virement ACH ou wire depuis un compte bancaire américain :",
    achNote: "Indiquez votre numéro de facture comme référence de paiement. Les virements américains arrivent généralement sous 1 à 3 jours ouvrés.",
    achRefValue: "Votre numéro de facture",
    achLabels: { accountName: "Titulaire du compte", bankName: "Banque", routing: "Numéro de routage (ACH)", account: "Numéro de compte", accountType: "Type de compte", bankAddress: "Adresse de la banque", reference: "Référence du paiement" },
  },
  forms: {
    name: "Nom complet", email: "E-mail", phone: "Téléphone", optional: "(facultatif)",
    orderRef: "Référence de commande", orderRefHint: "(dans votre e-mail de confirmation)",
    interested: "Formule envisagée", notSure: "Je ne sais pas encore", packSuffix: "",
    yourPack: "Votre formule", select: "Choisir…", address: "Adresse du bien & code postal",
    files: "Mesures, croquis, photos & plans", filesHint: "(JPG, PNG, HEIC, PDF, DWG, DXF ou DOCX, 4 Mo au total maximum)",
    link: "Lien vers des fichiers plus lourds", linkHint: "(WeTransfer, Google Drive, Dropbox, facultatif)",
    brief: "Descriptif du projet",
    briefPlaceholder: "Que souhaitez-vous construire ou modifier ? Indiquez les hauteurs sous plafond, épaisseurs de murs et limites de propriété connues.",
    message: "Votre message", sendIntake: "Envoyer les informations du projet", sendContact: "Envoyer le message", sending: "Envoi…",
    sentIntake: `Merci. Nous avons bien reçu les informations de votre projet et vous répondrons sous ${RT}.`,
    sentContact: `Merci. Nous avons bien reçu votre message et vous répondrons sous ${RT}.`,
    privacy: "Vos données servent uniquement à livrer vos plans et à vous répondre. Voir notre [Politique de confidentialité](/privacy-policy).",
    accuracy: "En envoyant ce formulaire, vous confirmez que les mesures et informations fournies sont exactes à votre connaissance.",
    invName: "Votre nom", invEmail: "E-mail pour le reçu", invNumber: "Numéro de facture", invAmount: "Montant dû TTC", invCurrency: "Devise de la facture",
    invSubmit: "Payer la facture en toute sécurité", opening: "Ouverture du paiement sécurisé…",
    secure: "Vos données de paiement sont saisies sur la page sécurisée de notre prestataire. Nous ne voyons ni ne conservons jamais vos données de carte.",
  },
  errors: {
    terms_required: "Veuillez confirmer que vous acceptez les Conditions générales et la Politique de remboursement et d'annulation.",
    missing_fields: "Veuillez remplir tous les champs obligatoires.",
    invalid_amount: `Veuillez saisir un montant compris entre ${m(invoiceLimits.min)} et ${m(invoiceLimits.max)}.`,
    unavailable: `Le paiement en ligne est momentanément indisponible. Veuillez écrire à ${S.supportEmail}`,
    too_large: "Vos fichiers dépassent 4 Mo au total. Partagez-les plutôt via un lien (par ex. WeTransfer ou Google Drive).",
    bad_type: "Un de vos fichiers n'est pas dans un format accepté. Utilisez JPG, PNG, HEIC, PDF, DWG, DXF ou DOCX.",
    generic: `Désolé, une erreur s'est produite. Veuillez écrire à ${S.supportEmail}`,
  },
  success: {
    metaTitle: "Commande reçue", eyebrowPaid: "Paiement réussi", eyebrowThanks: "Merci",
    title: "Merci pour votre commande", paid: "Nous avons bien reçu votre paiement de {amount}.",
    processing: "Votre paiement est en cours de traitement. Les paiements bancaires (comme SEPA ou ACH) sont généralement crédités en quelques jours ouvrés ; nous vous enverrons un e-mail dès réception du vôtre.", receipt: "Un reçu a été envoyé à {email}.",
    ref: "Votre référence de commande : {ref}",
    next: "**Étape suivante :** envoyez vos mesures, croquis et photos pour que nous puissions commencer à dessiner.",
    upload: "Envoyer mes mesures & photos",
    questions: `Des questions ? Écrivez à ${mail}. Nous répondons sous ${RT}.`,
  },
  cta: { title: "Prêt à obtenir vos plans ?", text: "Prix fixes, 100 % en ligne, livrés en PDF & DWG.", primary: "Voir les formules", secondary: "Poser une question" },
  footer: {
    about: "Plans architecturaux CAO, dossiers de conception 2D & 3D et dessins pour autorisations et réglementation de construction, réalisés à distance à partir de vos mesures et photos et livrés numériquement.",
    studio: "Studio", legal: "Informations légales", contact: "Contact",
    links: {
      packages: "Formules de plans", how: "Fonctionnement", samples: "Exemples de livrables", faq: "FAQ",
      intake: "Envoyer mes mesures", pay: "Payer une facture", terms: "Conditions générales",
      refund: "Politique de remboursement et d'annulation", privacy: "Politique de confidentialité", cookies: "Politique cookies",
      notice: "Mentions légales & conditions internationales", cookieSettings: "Paramètres des cookies",
    },
    whatsapp: "Nous écrire sur WhatsApp", replyWithin: `Réponse sous ${RT}`,
    registered: `${S.legalName}, sous le nom commercial ${S.tradingName}. Immatriculée en Angleterre et au pays de Galles.`,
    companyNo: "Numéro d'immatriculation (Companies House)", office: "Siège social", vat: "Numéro de TVA",
    email: "E-mail", phone: "Téléphone", arb: "Studio de conception architecturale CAO et de dessin technique. Non inscrit auprès de l'ARB.",
  },
  cookie: {
    title: "Cookies sur ce site",
    text: "Nous utilisons un stockage strictement nécessaire au fonctionnement du site et à la mémorisation de votre choix. Avec votre accord, nous aimerions aussi utiliser des cookies de mesure d'audience pour comprendre l'utilisation du site. Ils restent désactivés tant que vous ne les acceptez pas. [Lire notre politique cookies](/cookie-policy).",
    necessary: "Strictement nécessaires", necessaryDesc: "(toujours actifs) : sécurité, paiement et enregistrement de votre choix.",
    analytics: "Mesure d'audience", analyticsDesc: "(facultatif) : statistiques anonymes de visites.",
    reject: "Refuser les cookies non essentiels", accept: "Tout accepter", manage: "Gérer les paramètres", save: "Enregistrer mes choix",
    open: "Ouvrir les paramètres des cookies",
  },
  legal: {
    eyebrow: "Informations légales",
    updated: "Dernière mise à jour : {date}",
    translationNote: "Cette traduction est fournie pour votre commodité. En cas de divergence, la version anglaise prévaut, sauf disposition impérative contraire de la loi de votre pays de résidence.",
    terms: {
      metaTitle: "Conditions générales", metaDescription: `Conditions générales des prestations de dessin CAO à distance de ${S.tradingName}.`,
      title: "Conditions générales",
      sections: [
        { h: "1. Qui sommes-nous", body: [
          `Les présentes conditions s'appliquent à toute commande passée auprès de **${S.legalName}**, sous le nom commercial **${S.tradingName}** (« nous »), société immatriculée en Angleterre et au pays de Galles sous le numéro ${S.companyNumber}, siège social : ${S.registeredOffice}, numéro de TVA ${S.vatNumber}. Contact : ${mail}, ${S.phoneDisplay}.`,
        ] },
        { h: "2. Nos prestations", body: [
          "Nous fournissons des **prestations sur mesure de dessin CAO numérique et de production de plans architecturaux** : plans 2D et 3D, dossiers d'autorisation d'urbanisme, dossiers de plans réglementaires et documents techniques associés, établis uniquement à partir des cotes, croquis, photos et informations que vous fournissez.",
          { ul: [
            "Nos prestations sont réalisées **100 % à distance**. Nous ne visitons pas votre bien et n'effectuons aucun relevé sur place.",
            "Nous fournissons uniquement des fichiers numériques (PDF, DWG, images et, le cas échéant, DOCX). Aucun bien physique n'est livré.",
            "Nous ne réalisons, ne gérons ni ne supervisons aucun travail de construction ou de rénovation.",
            "Nous sommes un studio de conception architecturale CAO et de dessin technique. Nous **ne sommes pas inscrits auprès de l'ARB** et n'utilisons aucun titre professionnel protégé par la loi.",
            "Sauf accord écrit, nous n'assumons pas le rôle de coordinateur de conception au sens des CDM Regulations 2015 ou des Building Regulations britanniques et ne fournissons pas d'études de structure.",
          ] },
        ] },
        { h: "3. Commande", body: [
          "Vous passez commande en choisissant une formule, en acceptant les présentes conditions et en payant en ligne. Le contrat est conclu lorsque nous confirmons votre commande par e-mail. Si nous ne pouvons pas accepter une commande (par exemple si le projet ne peut être dessiné à distance), nous vous en informons et vous remboursons intégralement.",
        ] },
        { h: "4. Prix & paiement", body: [
          { ul: [
            `Les prix des formules sont des forfaits **hors TVA** : Essential ${m(P.essential)}, Standard ${m(P.standard)}, Premium ${m(P.premium)}. La TVA britannique de 20 % est ajoutée le cas échéant et indiquée lors du paiement. Pour les projets hors du Royaume-Uni, nous confirmons le traitement de TVA avant la commande.`,
            "Vous pouvez payer en ligne ou sur facture avec les moyens proposés par notre prestataire de paiement pour votre pays et votre devise (par ex. cartes, portefeuilles numériques et moyens bancaires ou régionaux pris en charge).",
            "Sur demande, un paiement en deux fois peut être convenu : acompte de 50 % et 50 % avant la remise des fichiers CAO/DWG finaux.",
            "Les fichiers finaux sans filigrane ne sont remis qu'après encaissement complet du paiement.",
          ] },
        ] },
        { h: "5. Vos informations & responsabilité des mesures", body: [
          "Nos prestations étant entièrement à distance, sans aucune visite sur place, **vous êtes seul responsable de l'exactitude et de l'exhaustivité de toutes les mesures, limites, niveaux, photos et autres informations transmises**. Nous dessinons selon vos informations. Nous signalons les incohérences évidentes, mais nous ne sommes pas responsables des erreurs ou conséquences (refus, reprises ou coûts de construction) résultant d'informations inexactes ou incomplètes. Vérifiez toutes les cotes sur place avant d'utiliser les plans pour des travaux ou des commandes de matériaux.",
          "Vous confirmez avoir le droit de nous transmettre les plans, photos et documents envoyés, y compris ceux créés par des tiers.",
        ] },
        { h: "6. Périmètre, révisions & exclusions", body: [
          { ul: [
            "**Essential :** 1 tour de révision numérique dans les 14 jours suivant la livraison du premier projet.",
            "**Standard :** 2 tours de révision numériques dans les 14 jours suivant la livraison du premier projet.",
            "**Premium :** jusqu'à 3 tours de révision numériques dans les 21 jours suivant la livraison du premier projet.",
          ] },
          "Un tour de révision correspond à une liste groupée de modifications des plans déjà réalisés, dans le périmètre initial. Les nouvelles conceptions, les changements de parti général ou les révisions demandées après l'expiration du délai sont hors périmètre et feront l'objet d'un devis préalable.",
          { h3: "Non inclus, sauf mention expresse dans votre formule" },
          { ul: [
            "Calculs ou études de structure",
            "Taxes et frais administratifs, y compris ceux liés aux autorisations et au contrôle",
            "Dépôt des demandes en votre nom ou représentation auprès d'une administration",
            "Relevés, géomètre, visites ou inspections sur place",
            "Prestations liées aux murs mitoyens (Party Wall Surveyor)",
            "Tout travail de construction ou de rénovation",
          ] },
        ] },
        { h: "7. Délais", body: [
          "Les délais sont exprimés en jours ouvrés et courent à compter de la réception de mesures et informations complètes. Ce sont des estimations de bonne foi. Si des informations complémentaires sont nécessaires, le délai est suspendu jusqu'à leur réception. Si vous n'avez pas demandé un démarrage anticipé, le délai commence à l'expiration du délai de rétractation de 14 jours.",
        ] },
        { h: "8. Autorisations", body: [
          "Nous réalisons vos plans selon les **règles de construction, d'urbanisme et les normes de dessin du pays et de la collectivité où se trouve votre bien** – selon les normes britanniques uniquement si votre bien est au Royaume-Uni. Par exemple : UK Building Regulations au Royaume-Uni ; règles nationales et locales dans les pays de l'UE ; codes adoptés par l'État et la collectivité aux États-Unis (généralement fondés sur l'IRC/IBC), en unités métriques ou impériales selon le cas. Indiquez-nous votre administration compétente et vos exigences locales particulières ; elles varient d'une zone à l'autre et il vous appartient de les confirmer auprès de votre administration. Les décisions d'autorisation relèvent de l'administration compétente : **nous ne pouvons garantir l'obtention d'aucune autorisation**. Nous ne fournissons ni tampon ni sceau professionnel ; lorsque la loi locale exige des plans visés, un professionnel habilité localement doit les vérifier et les viser. Les modifications demandées par une administration dans le périmètre de votre formule sont imputées sur vos tours de révision.",
        ] },
        { h: "9. Propriété intellectuelle", body: [
          "Les droits d'auteur (ou, à défaut, l'ensemble des droits d'exploitation cessibles) sur les plans CAO/PDF finaux **vous sont transférés dès réception du paiement intégral**, dans la mesure permise par la loi. Jusque-là, les plans restent notre propriété et ne doivent pas être utilisés ni déposés. Nos modèles, cartouches et détails génériques restent notre propriété ; vous bénéficiez d'une licence permanente pour les utiliser dans vos plans. Nous ne présentons votre projet dans notre portfolio qu'avec votre accord.",
        ] },
        { h: "10. Annulation & remboursement", body: [
          `Vos droits d'annulation et les montants remboursés figurent dans notre [Politique de remboursement et d'annulation](/refund-policy), qui fait partie des présentes conditions. En résumé : remboursement intégral avant le début du dessin ; remboursement moins des frais de mise en place de ${m(setupFee[C])} après examen de votre dossier mais avant le premier projet ; en principe aucun remboursement après livraison du premier projet.`,
        ] },
        { h: "11. Responsabilité", body: [
          { ul: [
            "Rien dans les présentes ne limite notre responsabilité en cas de décès ou de dommage corporel dû à notre négligence, de fraude ou pour tout ce qui ne peut être limité par la loi.",
            "Si vous êtes consommateur, nous devons exécuter nos prestations avec soin et compétence, et vous bénéficiez des droits prévus par le Consumer Rights Act 2015 (et, si vous résidez dans l'UE/EEE, des dispositions impératives du droit de la consommation de votre pays). Ces droits ne sont pas affectés.",
            "Nous ne sommes pas responsables des pertes dues à des informations inexactes de votre part, à l'absence de vérification des cotes sur place, aux décisions d'une administration ou à des travaux réalisés par des tiers.",
            "Pour les clients professionnels, notre responsabilité totale est limitée au prix payé pour la formule concernée, et nous ne répondons pas des pertes indirectes, consécutives ou de manque à gagner.",
          ] },
        ] },
        { h: "12. Réclamations", body: [
          `En cas d'insatisfaction, écrivez à ${mail}. Nous répondons sous ${RT} et cherchons une solution avec vous. Merci de nous contacter avant d'engager une contestation auprès de votre banque. Vos droits légaux ne sont pas affectés.`,
        ] },
        { h: "13. Protection des données", body: ["Nous traitons vos données personnelles conformément à notre [Politique de confidentialité](/privacy-policy)."] },
        { h: "14. Droit applicable & clients internationaux", body: [
          { ul: [
            "Les présentes conditions sont régies par le droit de **l'Angleterre et du pays de Galles**, et les tribunaux d'Angleterre et du pays de Galles sont compétents.",
            "Si vous êtes un consommateur résidant dans l'UE/EEE, ce choix de loi ne vous prive pas de la protection des dispositions impératives du droit de votre pays de résidence, et vous pouvez, le cas échéant, saisir les tribunaux de votre pays. Voir nos [Mentions légales](/legal-notice).",
            "Nous pouvons modifier ces conditions ; la version en ligne au moment de votre commande s'applique. Si une clause est inapplicable, les autres restent en vigueur.",
          ] },
        ] },
      ],
    },
    refund: {
      metaTitle: "Politique de remboursement et d'annulation", metaDescription: "Votre droit de rétractation de 14 jours et nos paliers de remboursement pour les dossiers de plans sur mesure.",
      title: "Politique de remboursement et d'annulation",
      sections: [
        { h: "1. Votre droit de rétractation de 14 jours", body: [
          "Si vous êtes consommateur, vous pouvez vous rétracter de votre commande dans un délai de **14 jours** à compter du jour où nous la confirmons, sans motif. Pour les consommateurs de l'UE/EEE (par ex. en France), ce droit découle du droit de la consommation de votre pays (transposition de la directive 2011/83/UE) ; pour les consommateurs britanniques, des **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**.",
        ] },
        { h: "2. Prestation sur mesure & démarrage pendant le délai de rétractation", body: [
          "Chaque dossier de plans est une **prestation sur mesure, dessinée selon les mesures spécifiques de votre bien**. Nous ne commençons pas à dessiner pendant le délai de rétractation de 14 jours sauf demande expresse de votre part.",
          { ul: [
            "**Si vous ne demandez pas de démarrage anticipé,** nous commençons à l'expiration des 14 jours, et vous pouvez vous rétracter avec remboursement intégral d'ici là.",
            "**Si vous demandez un démarrage anticipé** (case cochée lors de la commande ou demande écrite) puis vous rétractez dans les 14 jours, vous devez payer un montant proportionné au travail déjà effectué jusqu'à la communication de votre rétractation, selon les paliers ci-dessous.",
            "**Vous perdez votre droit de rétractation une fois la prestation pleinement exécutée** (livraison des fichiers finaux), si l'exécution a commencé avant la fin du délai à votre demande expresse et après reconnaissance de cette perte.",
          ] },
        ] },
        { h: "3. Paliers de remboursement", body: [
          "Ces paliers indiquent comment nous évaluons le travail effectué. Ils s'appliquent à toutes les commandes, que vous annuliez pendant ou après le délai de 14 jours.",
          { table: { head: ["Moment de l'annulation", "Montant remboursé"], rows: [
            ["Avant l'envoi de vos mesures et avant le début du dessin CAO", "**Remboursement intégral (100 %)**"],
            ["Après le début de l'examen de votre dossier (mesures, photos, descriptif), mais avant l'envoi des premiers PDF de projet", `**Remboursement intégral moins des frais de mise en place de ${m(setupFee[C])}** (HT, TVA en sus le cas échéant), couvrant l'examen, la mise en place et le dessin de base`],
            ["Après la livraison du premier jeu de PDF de projet", "**En principe non remboursable.** Le travail de dessin sur mesure est pour l'essentiel réalisé. Si une partie substantielle de votre formule n'a pas encore été exécutée, nous remboursons un montant équitable pour cette partie."],
          ] } },
          "Les clients professionnels ne bénéficient pas du droit légal de rétractation mais peuvent annuler à tout moment selon les mêmes paliers.",
        ] },
        { h: "4. Comment vous rétracter", body: [
          `Envoyez un e-mail à ${mail} indiquant votre nom, votre référence de commande et une déclaration claire de rétractation. Vous pouvez utiliser le modèle ci-dessous, sans obligation.`,
          { box: [
            "**Modèle de formulaire de rétractation**",
            `À l'attention de : ${S.legalName}, sous le nom commercial ${S.tradingName}, ${S.registeredOffice}, ${S.supportEmail}`,
            "Je/nous vous notifie/notifions par la présente ma/notre rétractation du contrat portant sur la prestation de services ci-dessous : [nom de la formule]",
            "Commandé le : [date] · Référence de commande : [référence]",
            "Nom : [votre nom] · Adresse : [votre adresse] · Date : [date]",
          ] },
        ] },
        { h: "5. Remboursements", body: [
          "Nous remboursons toute somme due dans un délai de **14 jours** à compter de la réception de votre rétractation, par le même moyen de paiement que celui utilisé. Aucun frais n'est facturé pour ce remboursement.",
        ] },
        { h: "6. Si nous annulons", body: [
          "Si nous ne pouvons pas achever vos plans (par exemple parce que le projet ne peut être dessiné avec précision à distance), nous vous en indiquons la raison et vous remboursons la partie de la prestation non fournie.",
        ] },
        { h: "7. Problèmes & litiges", body: [
          `Contactez-nous d'abord à ${mail}. Nous garantissons une réponse sous **${RT}** et cherchons une solution avec vous. Merci de nous laisser l'occasion de régler le problème avant toute contestation de paiement auprès de votre banque. Vos droits légaux ne sont pas affectés.`,
        ] },
      ],
    },
    privacy: {
      metaTitle: "Politique de confidentialité", metaDescription: `Comment ${S.tradingName} collecte et utilise vos données personnelles.`,
      title: "Politique de confidentialité",
      sections: [
        { h: "1. Responsable du traitement", body: [
          `**${S.legalName}** (sous le nom commercial ${S.tradingName}), numéro d'immatriculation ${S.companyNumber}, siège social ${S.registeredOffice}, est **responsable du traitement** des données décrites dans la présente politique. Questions relatives à la vie privée : ${mail}`,
          "Cette politique explique comment nous traitons vos données conformément au RGPD britannique (UK GDPR), au Data Protection Act 2018 et au Data (Use and Access) Act 2025. Si vous vous trouvez dans l'UE/EEE, nous respectons également vos droits au titre du RGPD de l'UE.",
        ] },
        { h: "2. Données collectées", body: [
          { ul: [
            "**Coordonnées :** nom, adresse e-mail, numéro de téléphone.",
            "**Données du projet :** adresse du bien, votre descriptif, ainsi que les mesures, croquis, plans, photos et documents envoyés.",
            "**Commande & facturation :** prestations achetées, montants payés, adresse de facturation et trace de votre acceptation des conditions et de votre choix de démarrage. Les données de paiement sont traitées par notre prestataire ; nous ne voyons ni ne conservons jamais votre numéro de carte complet.",
            "**Échanges :** e-mails, messages via formulaire et WhatsApp.",
            "**Données techniques :** journaux serveur de base (adresse IP, type de navigateur) conservés par notre hébergeur pour la sécurité, et vos choix en matière de cookies.",
          ] },
          "Les photos de votre bien peuvent montrer des personnes, véhicules ou propriétés voisines. Évitez si possible d'y faire figurer des personnes.",
        ] },
        { h: "3. Finalités et bases légales", body: [
          { table: { head: ["Finalité", "Base légale"], rows: [
            ["Traiter votre commande, réaliser et livrer vos plans, gérer révisions et remboursements", "Exécution du contrat (art. 6.1.b RGPD)"],
            ["Tenir la comptabilité et les registres fiscaux pour l'administration fiscale britannique (HMRC)", "Obligation légale (art. 6.1.c)"],
            ["Répondre aux demandes avant commande", "Mesures précontractuelles / intérêt légitime"],
            ["Prévenir la fraude, sécuriser le site, gérer les litiges ou réclamations", "Intérêt légitime (art. 6.1.f)"],
            ["Cookies de mesure d'audience facultatifs (uniquement si vous les acceptez)", "Consentement (art. 6.1.a), retirable à tout moment"],
          ] } },
          "Nous ne vendons pas vos données, ne les utilisons pas à des fins marketing sans votre consentement et ne prenons aucune décision automatisée vous concernant.",
        ] },
        { h: "4. Destinataires", body: [
          "Nous faisons appel à des prestataires de confiance (sous-traitants) qui traitent les données uniquement sur nos instructions :",
          { ul: [
            "**Prestataires de paiement :** Stripe (et Dodo Payments le cas échéant), pour les paiements et la prévention de la fraude.",
            "**Hébergement du site :** Vercel.",
            "**Messagerie :** pour les e-mails et formulaires (par ex. Google).",
            "**Stockage en ligne :** pour les fichiers de projet et la livraison des plans, ainsi que tout service de transfert que vous choisissez.",
            "**WhatsApp (Meta) :** uniquement si vous nous écrivez par ce biais.",
            "**Nos comptables** et conseillers, ainsi que le HMRC ou d'autres autorités lorsque la loi l'exige.",
          ] },
          "Certains prestataires traitent des données hors du Royaume-Uni/EEE (par ex. aux États-Unis). Ces transferts sont encadrés par des décisions d'adéquation (UK-US Data Bridge, EU-US Data Privacy Framework) ou des clauses contractuelles types / l'IDTA britannique ou son addendum.",
        ] },
        { h: "5. Durée de conservation", body: [
          { ul: [
            "Commandes, factures et paiements : **6 ans** après la fin de l'exercice concerné (exigence du HMRC).",
            "Fichiers de projet et plans : **6 ans** après l'achèvement, en cas de questions ou de réclamations.",
            "Demandes sans commande : **12 mois**.",
            "Choix relatifs aux cookies : jusqu'à ce que vous les modifiiez ou effaciez le stockage de votre navigateur.",
          ] },
        ] },
        { h: "6. Vos droits", body: [
          "Vous disposez des droits d'**accès**, de **rectification**, d'**effacement** lorsque nous n'avons plus de raison de conserver vos données, de **limitation**, de **portabilité**, d'**opposition** aux traitements fondés sur l'intérêt légitime, et de **retrait de votre consentement** à tout moment (par ex. via les paramètres des cookies en bas de page).",
          `Pour exercer vos droits, écrivez à ${mail}. Nous répondons dans un délai d'**un mois**, pouvant être prolongé de deux mois pour les demandes complexes, auquel cas nous vous en expliquerons la raison.`,
        ] },
        { h: "7. Réclamations", body: [
          `Si vous n'êtes pas satisfait de la manière dont nous traitons vos données, adressez-nous d'abord une réclamation à ${mail}. Nous en accusons réception sous **30 jours** (objectif : ${RT}), l'examinons rapidement et vous communiquons le résultat sans retard injustifié.`,
          "Vous pouvez également saisir l'**Information Commissioner's Office (ICO)** britannique : [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/), +44 303 123 1113. Si vous résidez dans l'UE/EEE, vous pouvez aussi saisir l'autorité de protection des données de votre pays (en France, la CNIL).",
        ] },
        { h: "8. Sécurité", body: ["Nous utilisons des connexions chiffrées (HTTPS), des prestataires reconnus et des contrôles d'accès. Aucun système n'étant totalement sûr, n'envoyez pas d'informations sensibles inutiles."] },
        { h: "9. Cookies & modifications", body: ["Voir notre [Politique cookies](/cookie-policy). Nous pouvons mettre à jour cette politique ; la dernière version figure toujours sur cette page."] },
      ],
    },
    cookies: {
      metaTitle: "Politique cookies", metaDescription: `Comment ${S.tradingName} utilise les cookies et technologies similaires.`,
      title: "Politique cookies",
      sections: [
        { h: "1. Qu'est-ce qu'un cookie ?", body: [
          `Cette politique explique comment ${S.legalName} (sous le nom commercial ${S.tradingName}) utilise les cookies et technologies similaires, conformément aux Privacy and Electronic Communications Regulations (PECR) britanniques, au UK GDPR et aux règles européennes ePrivacy. Les cookies sont de petits fichiers enregistrés sur votre appareil par les sites que vous visitez. Les technologies similaires, comme le stockage local du navigateur, fonctionnent de façon comparable ; nous les appelons tous « cookies » ici.`,
        ] },
        { h: "2. Cookies utilisés", body: [
          { table: { head: ["Nom", "Type", "Finalité", "Durée"], rows: [
            ["ftds-cookie-consent (stockage local)", "Strictement nécessaire", "Mémorise si vous avez accepté ou refusé les cookies non essentiels", "Jusqu'à modification ou effacement"],
            ["Cookies du prestataire de paiement (par ex. Stripe)", "Strictement nécessaire", "Déposés sur la page de paiement sécurisée du prestataire pour la prévention de la fraude et le traitement du paiement. Régis par la politique du prestataire.", "Fixée par le prestataire"],
            ["_ga, _ga_* (Google Analytics)", "Mesure d'audience (facultatif)", "Statistiques anonymes d'utilisation. **Uniquement si vous acceptez.** Si nous n'utilisons pas d'outil d'audience, ils ne sont jamais déposés.", "Jusqu'à 2 ans"],
          ] } },
          "Nous n'utilisons aucun cookie publicitaire ou marketing. Nos polices sont hébergées sur notre propre site : l'affichage d'une page ne transmet aucune donnée à des fournisseurs de polices. Votre choix de langue figure dans l'adresse web, ce n'est pas un cookie.",
        ] },
        { h: "3. Vos choix", body: [
          "Lors de votre première visite, nous recueillons votre choix via un bandeau comportant des boutons de même importance **Tout accepter** et **Refuser les cookies non essentiels**. Aucune option facultative n'est précochée et aucun script d'audience ou marketing n'est chargé avant votre consentement. Vous pouvez changer d'avis à tout moment via les **Paramètres des cookies** en bas de page. Vous pouvez aussi bloquer ou supprimer les cookies dans votre navigateur ; bloquer les cookies strictement nécessaires peut empêcher le paiement.",
        ] },
        { h: "4. En savoir plus", body: [`Voir notre [Politique de confidentialité](/privacy-policy) ou écrivez à ${mail}`] },
      ],
    },
    notice: {
      metaTitle: "Mentions légales & conditions internationales",
      metaDescription: `Informations légales sur ${S.legalName}, sous le nom commercial ${S.tradingName}, et informations de rétractation pour les clients du Royaume-Uni et de l'UE/EEE.`,
      title: "Mentions légales & conditions internationales",
      sections: [
        { h: "1. Informations sur la société", body: [
          { box: [
            `**${S.legalName}**, sous le nom commercial **${S.tradingName}**`,
            "Société à responsabilité limitée (private limited company) immatriculée en Angleterre et au pays de Galles",
            `Numéro d'immatriculation : ${S.companyNumber} (Companies House)`,
            `Siège social : ${S.registeredOffice}`,
            `Numéro de TVA (Royaume-Uni) : ${S.vatNumber}`,
            ...(S.director ? [`Dirigeant (Director) : ${S.director}`] : []),
            `E-mail : ${S.supportEmail} · Téléphone : ${S.phoneDisplay}`,
          ] },
          "Activité : dessin CAO architectural à distance et production de plans numériques. Nous ne sommes inscrits ni auprès de l'ARB (Royaume-Uni) ni auprès d'un organisme professionnel équivalent dans un autre pays, et nous n'utilisons aucun titre professionnel protégé, dans aucun pays.",
        ] },
        { h: "2. À qui s'adressent nos prestations", body: [
          "Nous vendons en ligne des dossiers de plans numériques sur mesure à des clients au Royaume-Uni et à l'international, notamment en Allemagne, en France, en Espagne, en Italie et aux États-Unis. Chaque client reçoit des plans conformes aux normes de construction de son propre pays, et non aux normes britanniques. Tout le travail est effectué à distance ; nous n'effectuons ni visite ni travaux, dans aucun pays.",
        ] },
        { h: "3. Annulation : consommateurs britanniques", body: [
          "Les consommateurs britanniques disposent d'un droit d'annulation de 14 jours en vertu des Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. Si vous demandez expressément un démarrage pendant ce délai, le travail effectué reste dû en cas d'annulation, et le droit s'éteint une fois la prestation pleinement exécutée. Détails : [Politique de remboursement et d'annulation](/refund-policy).",
        ] },
        { h: "4. Droit de rétractation : consommateurs de l'UE/EEE (Allemagne, France, Espagne, Italie, etc.)", body: [
          "Si vous êtes un consommateur résidant dans l'UE/EEE, vous disposez d'un **droit de rétractation de 14 jours** à compter de la conclusion du contrat, sans avoir à motiver votre décision, en vertu du droit de la consommation de votre pays (transposant la directive 2011/83/UE).",
          { ul: [
            `Pour exercer ce droit, adressez-nous une déclaration claire (par ex. par e-mail à ${S.supportEmail}) avant l'expiration du délai. Vous pouvez utiliser le modèle de formulaire figurant dans notre [Politique de remboursement et d'annulation](/refund-policy), sans obligation.`,
            "En cas de rétractation, nous vous remboursons tous les paiements reçus sans retard excessif et au plus tard 14 jours après réception de votre notification, par le même moyen de paiement.",
            "Si vous avez expressément demandé que la prestation commence pendant le délai de rétractation, vous devez payer un montant proportionnel à ce qui a été fourni jusqu'à la communication de votre rétractation.",
            "Le droit de rétractation ne peut plus être exercé une fois la prestation pleinement exécutée, si l'exécution a commencé avec votre accord préalable exprès et votre reconnaissance de la perte de ce droit.",
          ] },
        ] },
        { h: "5. Prix, TVA & devise", body: [
          "Sur nos sites allemand, français, espagnol et italien, les prix sont affichés et facturés en euros (EUR) ; sur notre site anglais, en livres sterling (GBP). Chaque devise dispose de sa propre grille de prix fixes (aucune conversion au cours du jour) : le prix affiché est le prix payé. Les prix s'entendent hors TVA britannique de 20 %, le total TTC étant également affiché. Votre banque peut appliquer son propre taux de change ou des frais. Pour les biens situés hors du Royaume-Uni, d'autres règles de TVA peuvent s'appliquer ; contactez-nous avant de commander afin que nous confirmions le traitement correct.",
        ] },
        { h: "6. Droit applicable, juridiction & litiges", body: [
          "Nos contrats sont régis par le droit de **l'Angleterre et du pays de Galles**. Si vous êtes consommateur, cela ne vous prive pas de la protection des dispositions impératives du droit de votre pays de résidence, et vous pouvez le cas échéant saisir les tribunaux de votre pays.",
          `En cas de réclamation, contactez-nous d'abord à ${mail}. Nous répondons sous ${RT}. Des services de médiation ou d'information des consommateurs peuvent également être disponibles dans votre pays.`,
        ] },
        { h: "7. Langues", body: [
          "Ce site est disponible en anglais, allemand, français, espagnol et italien. Les traductions sont fournies pour votre commodité. En cas de divergence, la version anglaise prévaut, sauf disposition impérative contraire du droit de votre pays.",
        ] },
        { h: "8. Responsable du contenu", body: [
          `${S.legalName}, ${S.registeredOffice}. Documents associés : [Conditions générales](/terms), [Politique de remboursement et d'annulation](/refund-policy), [Politique de confidentialité](/privacy-policy), [Politique cookies](/cookie-policy).`,
        ] },
      ],
    },
  },
  samplesFigures: { fileName: "projet-rez-de-chaussee.dwg" },
};

export default fr;
