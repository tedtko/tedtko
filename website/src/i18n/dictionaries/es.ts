import type { Dict } from "../types";
import { currencyFor, money } from "../config";
import { invoiceLimits, packages, setupFee, site as S } from "@/lib/site";

const m = (n: number) => money(n, "es");
const C = currencyFor("es");
const P = Object.fromEntries(packages.map((p) => [p.id, p.price[C]])) as Record<string, number>;
const mail = `[${S.supportEmail}](mailto:${S.supportEmail})`;
const RT = "2 días hábiles";

const es: Dict = {
  meta: {
    siteTitle: "Planos CAD arquitectónicos y paquetes de planificación – 100 % online",
    siteDescription:
      "Paquetes de diseño 2D y 3D a precio fijo: plantas, alzados y planos normativos elaborados a distancia a partir de sus medidas y fotos. Entrega digital en PDF y DWG.",
  },
  nav: {
    packages: "Paquetes", howItWorks: "Cómo funciona", samples: "Ejemplos de entregables", faq: "Preguntas frecuentes",
    payInvoice: "Pagar factura", contact: "Contacto", cta: "Ver paquetes de planos",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú", home: "inicio", skip: "Saltar al contenido", language: "Idioma",
  },
  hero: {
    eyebrow: "Estudio de diseño arquitectónico CAD",
    titleA: "Planos CAD arquitectónicos y paquetes de planificación a distancia.",
    titleB: "100 % online.",
    lead: "Paquetes de diseño 2D y 3D a precio fijo, plantas y planos conforme a la normativa británica de edificación, elaborados a distancia a partir de sus medidas, bocetos y fotos. Entrega digital en formatos PDF y DWG.",
    badgesLabel: "Por qué elegirnos",
    badges: ["Entrega 100 % digital", "Precios fijos y transparentes", "Planos conforme a la normativa británica", "Plazos digitales rápidos"],
    ctaPrimary: "Ver paquetes de planos",
    ctaSecondary: "Cómo funciona",
  },
  home: {
    packagesEyebrow: "Paquetes digitales de alcance fijo", packagesTitle: "Paquetes de planos",
    packagesLead: "Entregables claros, rondas de revisión definidas y un plazo de entrega digital fijo. Sin sorpresas.",
    howEyebrow: "Proceso a distancia", howTitle: "Cómo funciona", howLead: "Cuatro pasos sencillos, totalmente online.",
    samplesEyebrow: "Qué incluye su paquete digital", samplesTitle: "Ejemplos de entregables",
    samplesMore: "Ver todos los ejemplos",
    faqEyebrow: "Preguntas frecuentes", faqTitle: "Preguntas habituales", faqMore: "Ver todas las preguntas",
  },
  packages: {
    metaTitle: "Paquetes y precios",
    metaDescription: `Paquetes de planos CAD a precio fijo: Essential ${m(P.essential)}, Standard ${m(P.standard)} y Premium ${m(P.premium)} (+ 20 % de IVA británico). Entrega digital en PDF y DWG.`,
    pageEyebrow: "Paquetes digitales de alcance fijo",
    pageTitle: "Paquetes de planos",
    pageLead: "Elija su paquete, complete el pedido online y después suba sus medidas y fotos. Dibujamos todo a distancia y le entregamos los archivos digitalmente.",
    popular: "El más elegido",
    plusVat: "+ IVA",
    incVat: "{amount} con 20 % de IVA británico",
    orderLabel: "Pedir paquete {name}: {price} + IVA",
    items: {
      essential: {
        name: "Essential",
        subtitle: "Paquete digital de planos para ampliaciones sencillas, porches y construcciones auxiliares.",
        deliverables: [
          "Plano base CAD, elaborado a distancia a partir de sus medidas, bocetos y fotos",
          "Plantas y alzados 2D existentes y propuestos (PDF y DWG)",
          "Planos de situación y emplazamiento a escala (paquete PDF digital)",
          "Juego de planos listo para presentar, con formato para subir al portal",
        ],
        revisions: "1 ronda de revisión digital (en los 14 días siguientes a la entrega del primer borrador)",
        timeline: "5–7 días hábiles desde la recepción de sus medidas",
      },
      standard: {
        name: "Standard",
        subtitle: "Paquete digital completo de planificación y normativa de edificación para ampliaciones de dos plantas y conversiones de buhardilla.",
        deliverables: [
          "Todo lo incluido en el paquete Essential",
          "Secciones detalladas y fichas técnicas de detalles constructivos (PDF y DWG)",
          "Renders 3D exteriores y de volumetría (imágenes en alta resolución)",
          "Paquete de planos técnicos anotados según la normativa de edificación",
        ],
        revisions: "2 rondas de revisión digitales (en los 14 días siguientes a la entrega del primer borrador)",
        timeline: "7–10 días hábiles desde la recepción de sus medidas",
      },
      premium: {
        name: "Premium",
        subtitle: "Paquete integral de diseño y especificación técnica a distancia para obra nueva, reformas integrales y divisiones en varias viviendas.",
        deliverables: [
          "Todo lo incluido en el paquete Standard",
          "Especificación técnica y programa de trabajos (PDF/DOCX)",
          "Juego de planos de referencia de linderos, iluminación natural y alzados",
          "Paquete completo CAD y PDF listo para licitación",
        ],
        revisions: "Hasta 3 rondas de revisión digitales (en los 21 días siguientes a la entrega del primer borrador)",
        timeline: "Prioritario: 10–14 días hábiles desde la recepción de sus medidas",
      },
    },
    vatNote: "Todos los precios excluyen el 20 % de IVA británico cuando corresponda. Bajo petición, ofrecemos pago fraccionado (50 % de reserva / 50 % antes de entregar los archivos CAD/DWG finales). [Contáctenos](/contact) antes de hacer el pedido.",
    outsideUkNote: "¿Su proyecto está fuera del Reino Unido? [Contáctenos](/contact) antes de hacer el pedido para confirmar el tratamiento de IVA aplicable en su país.",
    excludesNote: "Pago online seguro. No incluye cálculos estructurales, tasas administrativas ni ninguna obra física.",
    cancelled: "Su pago se ha cancelado y no se le ha cobrado nada.",
    paymentTitle: "Formas de pago",
    paymentText: "Pague de forma segura en el checkout o mediante factura. Se aceptan las principales tarjetas de crédito y débito, monederos digitales como Apple Pay y Google Pay, y otros métodos bancarios o regionales cuando nuestro proveedor de pagos los admite para su país y moneda. Las opciones disponibles se muestran en el checkout. ¿Prefiere pagar por transferencia contra factura? [Contáctenos](/contact).",
  },
  order: {
    groupLabel: "Confirme su pedido",
    agree: "Acepto los [Términos y condiciones](/terms) y la [Política de reembolso y cancelación](/refund-policy). Entiendo que todos los planos se elaboran a distancia a partir de las medidas y fotos que aporto y que soy responsable de su exactitud.",
    start: "**Opcional:** solicito expresamente que comiencen el trabajo en cuanto envíe mis medidas, dentro del plazo de desistimiento de 14 días. Entiendo que, si después desisto, deberé pagar el trabajo ya realizado y que pierdo mi derecho de desistimiento una vez que el servicio se haya ejecutado por completo.",
    continue: "Continuar al pago seguro",
    opening: "Abriendo el pago seguro…",
    noStartNote: "Sin la casilla opcional, empezaremos a dibujar cuando termine su plazo de desistimiento de 14 días.",
  },
  steps: [
    { title: "Elija su paquete de alcance fijo", text: "Seleccione Essential, Standard o Premium y complete su pedido online." },
    { title: "Suba sus medidas y fotos", text: "Envíe sus medidas dibujadas a mano, fotos de la vivienda, planos de la inmobiliaria y la descripción del proyecto mediante nuestro formulario seguro." },
    { title: "Dibujo CAD y modelado 3D a distancia", text: "Nuestro equipo de diseño CAD en el Reino Unido elabora a distancia sus planos arquitectónicos a escala y la documentación técnica." },
    { title: "Entrega digital y revisiones", text: "Reciba por correo PDF de revisión con marca de agua, solicite sus rondas de revisión incluidas y descargue después sus archivos finales PDF y DWG sin marca de agua." },
  ],
  howPage: {
    metaTitle: "Cómo funciona",
    metaDescription: "Nuestro proceso a distancia en 4 pasos: elija un paquete, suba sus medidas y fotos, dibujamos a distancia y recibe sus archivos PDF y DWG.",
    eyebrow: "Proceso a distancia", title: "Cómo funciona", lead: "Todo se hace online. Nunca visitamos su vivienda.",
    sendTitle: "Qué debe enviarnos",
    sendList: [
      "Medidas de cada estancia (basta un boceto a mano con cotas)",
      "Medidas exteriores generales y alturas de techo",
      "Fotos de cada fachada y de cada estancia afectada",
      "Planos existentes si los tiene (p. ej. de un anuncio inmobiliario)",
      "Una breve descripción de lo que quiere construir o cambiar",
      "Datos conocidos de linderos o solicitudes anteriores",
    ],
    uploadCta: "Subir medidas",
    goodTitle: "Conviene saber",
    goodList: [
      "El plazo de entrega comienza cuando recibimos las medidas completas.",
      "Los borradores son PDF con marca de agua; los archivos finales son PDF y DWG sin marca de agua.",
      "Las rondas de revisión deben usarse dentro del plazo indicado para su paquete.",
      "Usted es responsable de la exactitud de las medidas que nos facilita.",
      "No se incluyen cálculos estructurales, tasas administrativas ni obras.",
    ],
    goodMore: "Todos los detalles están en nuestros [Términos y condiciones](/terms).",
  },
  samples: {
    metaTitle: "Ejemplos de entregables",
    metaDescription: "Qué incluye su paquete digital de planos: plantas, alzados, planos de situación, secciones normativas y renders 3D.",
    eyebrow: "Qué incluye su paquete digital", title: "Ejemplos de entregables",
    lead: "Cada plano está a escala, rotulado y se entrega en PDF listo para imprimir y en archivo CAD DWG editable.",
    items: [
      { title: "Plantas 2D", text: "Estado actual y propuesta, acotadas (PDF y DWG). Todos los paquetes." },
      { title: "Alzados", text: "Materiales, alturas y huecos de cada fachada. Todos los paquetes." },
      { title: "Planos de situación y emplazamiento", text: "Planos de referencia a escala para su solicitud. Todos los paquetes." },
      { title: "Secciones y detalles constructivos", text: "Secciones técnicas anotadas para la normativa. Standard y Premium." },
      { title: "Renders 3D exteriores y de volumetría", text: "Imágenes en alta resolución del diseño propuesto. Standard y Premium." },
    ],
    note: "Ejemplos ilustrativos de tipos de planos. Sus planos se elaboran para su vivienda.",
  },
  faq: {
    metaTitle: "Preguntas frecuentes",
    metaDescription: "Respuestas sobre nuestros paquetes de planos CAD a distancia: qué enviar, formatos, revisiones, pagos y desistimiento.",
    eyebrow: "Preguntas frecuentes", title: "Preguntas frecuentes",
    items: [
      ["¿Visitan mi vivienda?", "No. Somos un estudio de diseño 100 % a distancia. Cada plano se elabora con las medidas, bocetos y fotos que nos envía, así que nunca visitamos su vivienda."],
      ["¿Qué tengo que enviarles?", "Medidas aproximadas de cada estancia y del exterior (basta un boceto a mano), fotos de cada fachada y de las estancias afectadas, planos existentes (p. ej. de un anuncio inmobiliario) y una breve descripción de lo que quiere construir."],
      ["¿Qué precisión deben tener mis medidas?", "La mayor posible. Dibujamos con las cotas que nos da, por lo que los errores pasan a los planos. Señalaremos lo que parezca incoherente, pero la exactitud de la información es responsabilidad suya (ver nuestros Términos)."],
      ["¿Qué formatos de archivo recibiré?", "Planos en PDF listos para imprimir o presentar, además de archivos CAD DWG editables. Los paquetes Standard y Premium incluyen también renders 3D en alta resolución, y Premium una especificación en PDF/DOCX."],
      ["¿Cómo puedo pagar?", "En el checkout, con las principales tarjetas de crédito o débito, monederos digitales como Apple Pay y Google Pay, y otros métodos bancarios o regionales cuando nuestro proveedor de pagos los admite para su país y moneda. También podemos emitir una factura, que puede pagar online en nuestra página «Pagar factura»."],
      ["¿Presentan ustedes la solicitud de licencia?", "Le entregamos un juego de planos listo para presentar. La presentación y las tasas corren por su cuenta. Con gusto le explicamos qué documento va en cada sitio."],
      ["¿Se incluyen cálculos estructurales o tasas?", "No. No se incluyen cálculos estructurales, tasas de licencia o control ni ninguna obra física."],
      ["¿Puedo pagar a plazos?", "Sí. Bajo petición podemos dividir el importe en un 50 % de reserva y un 50 % antes de entregar los archivos CAD/DWG finales. Contáctenos antes de hacer el pedido."],
      ["Mi vivienda está fuera del Reino Unido. ¿Pueden ayudarme?", "Sí, trabajamos totalmente a distancia. Contáctenos antes de hacer el pedido para confirmar los estándares de dibujo necesarios y el tratamiento de IVA aplicable en su país."],
      ["¿Puedo cancelar?", "Sí. Los consumidores tienen un derecho de desistimiento de 14 días. Si nos pide empezar dentro de ese plazo, podremos cobrar el trabajo ya realizado. Todos los detalles están en nuestra Política de reembolso y cancelación."],
    ],
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: `Contacte con ${S.tradingName}. Respondemos a sus preguntas en ${RT}.`,
    eyebrow: "Contacto", title: "Contáctenos", lead: `¿Preguntas antes de hacer el pedido? Respondemos en ${RT}.`,
    emailNote: "Correo electrónico, la mejor forma de contactarnos", phoneNote: "Atención telefónica",
    whatsapp: "Escríbanos por WhatsApp", whatsappNote: "Preguntas rápidas",
    already: "¿Ya ha hecho el pedido? [Suba aquí sus medidas y fotos](/intake).",
    formTitle: "Envíenos un mensaje",
    waText: "Hola, tengo una pregunta sobre sus paquetes de planos.",
  },
  intake: {
    metaTitle: "Subir medidas y fotos",
    metaDescription: "Recepción segura del proyecto: suba sus medidas, bocetos, fotos y descripción para su paquete de planos.",
    eyebrow: "Recepción del proyecto", title: "Suba sus medidas y fotos",
    lead: "Envíenos todo lo necesario para dibujar sus planos. El plazo de entrega comienza cuando tengamos las medidas completas.",
    trouble: `¿Problemas al subir archivos? Envíelos a ${mail} indicando su referencia de pedido.`,
  },
  pay: {
    metaTitle: "Pagar una factura",
    metaDescription: `Pague su factura de ${S.tradingName} online de forma segura.`,
    eyebrow: "Clientes", title: "Pagar una factura",
    lead: "Introduzca el número de factura y el importe total (IVA incluido) que figuran en su factura y pague de forma segura en la página de nuestro proveedor de pagos.",
    questions: `¿Dudas sobre una factura? Escriba a ${mail}`,
    cancelled: "Pago cancelado. No se le ha cobrado nada.",
  },
  forms: {
    name: "Nombre completo", email: "Correo electrónico", phone: "Teléfono", optional: "(opcional)",
    orderRef: "Referencia del pedido", orderRefHint: "(de su correo de confirmación)",
    interested: "Le interesa", notSure: "Aún no lo sé", packSuffix: "",
    yourPack: "Su paquete", select: "Seleccione…", address: "Dirección de la vivienda y código postal",
    files: "Medidas, bocetos, fotos y planos", filesHint: "(JPG, PNG, HEIC, PDF, DWG, DXF o DOCX, hasta 4 MB en total)",
    link: "Enlace a archivos más grandes", linkHint: "(WeTransfer, Google Drive, Dropbox, opcional)",
    brief: "Descripción del proyecto",
    briefPlaceholder: "¿Qué quiere construir o cambiar? Indique alturas de techo, espesores de muro y linderos conocidos.",
    message: "Su mensaje", sendIntake: "Enviar datos del proyecto", sendContact: "Enviar mensaje", sending: "Enviando…",
    sentIntake: `Gracias. Hemos recibido los datos de su proyecto y le responderemos en ${RT}.`,
    sentContact: `Gracias. Hemos recibido su mensaje y le responderemos en ${RT}.`,
    privacy: "Usamos sus datos solo para entregar sus planos y responderle. Consulte nuestra [Política de privacidad](/privacy-policy).",
    accuracy: "Al enviar, confirma que las medidas e información facilitadas son exactas según su leal saber.",
    invName: "Su nombre", invEmail: "Correo para el recibo", invNumber: "Número de factura", invAmount: "Importe, IVA incluido", invCurrency: "Moneda de la factura",
    invSubmit: "Pagar factura de forma segura", opening: "Abriendo el pago seguro…",
    secure: "Los datos de pago se introducen en la página segura de nuestro proveedor. Nunca vemos ni guardamos los datos de su tarjeta.",
  },
  errors: {
    terms_required: "Confirme que acepta los Términos y la Política de reembolso y cancelación.",
    missing_fields: "Rellene todos los campos obligatorios.",
    invalid_amount: `Introduzca un importe entre ${m(invoiceLimits.min)} y ${m(invoiceLimits.max)}.`,
    unavailable: `El pago online no está disponible temporalmente. Escriba a ${S.supportEmail}`,
    too_large: "Sus archivos superan los 4 MB en total. Compártalos mediante un enlace (p. ej. WeTransfer o Google Drive).",
    bad_type: "Uno de sus archivos tiene un formato no admitido. Use JPG, PNG, HEIC, PDF, DWG, DXF o DOCX.",
    generic: `Lo sentimos, se ha producido un error. Escriba a ${S.supportEmail}`,
  },
  success: {
    metaTitle: "Pedido recibido", eyebrowPaid: "Pago realizado", eyebrowThanks: "Gracias",
    title: "Gracias por su pedido", paid: "Hemos recibido su pago de {amount}.",
    processing: "Su pago se está procesando.", receipt: "Se ha enviado un recibo a {email}.",
    ref: "Su referencia de pedido: {ref}",
    next: "**Siguiente paso:** suba sus medidas, bocetos y fotos para que podamos empezar a dibujar.",
    upload: "Subir medidas y fotos",
    questions: `¿Dudas? Escriba a ${mail}. Respondemos en ${RT}.`,
  },
  cta: { title: "¿Listo para obtener sus planos?", text: "Precios fijos, 100 % online, entregados en PDF y DWG.", primary: "Ver paquetes de planos", secondary: "Hacer una pregunta" },
  footer: {
    about: "Planos CAD arquitectónicos, paquetes de diseño 2D y 3D y planos para licencias y normativa de edificación, elaborados a distancia a partir de sus medidas y fotos y entregados digitalmente.",
    studio: "Estudio", legal: "Legal", contact: "Contacto",
    links: {
      packages: "Paquetes de planos", how: "Cómo funciona", samples: "Ejemplos de entregables", faq: "Preguntas frecuentes",
      intake: "Subir medidas", pay: "Pagar una factura", terms: "Términos y condiciones",
      refund: "Política de reembolso y cancelación", privacy: "Política de privacidad", cookies: "Política de cookies",
      notice: "Aviso legal y condiciones internacionales", cookieSettings: "Configuración de cookies",
    },
    whatsapp: "Escríbanos por WhatsApp", replyWithin: `Respondemos en ${RT}`,
    registered: `${S.legalName}, con nombre comercial ${S.tradingName}. Registrada en Inglaterra y Gales.`,
    companyNo: "Número de registro (Companies House)", office: "Domicilio social", vat: "Número de IVA",
    email: "Correo", phone: "Teléfono", arb: "Estudio de diseño arquitectónico CAD y delineación. No inscrito en el ARB.",
  },
  cookie: {
    title: "Cookies en este sitio web",
    text: "Usamos almacenamiento estrictamente necesario para que el sitio funcione y recordar su elección. Con su permiso, también nos gustaría usar cookies analíticas para entender cómo se usa el sitio. Permanecen desactivadas salvo que las acepte. [Lea nuestra Política de cookies](/cookie-policy).",
    necessary: "Estrictamente necesarias", necessaryDesc: "(siempre activas): seguridad, pago y guardado de su elección.",
    analytics: "Analíticas", analyticsDesc: "(opcionales): estadísticas anónimas de visitas.",
    reject: "Rechazar las no esenciales", accept: "Aceptar todas", manage: "Gestionar configuración", save: "Guardar mi elección",
    open: "Abrir configuración de cookies",
  },
  legal: {
    eyebrow: "Legal",
    updated: "Última actualización: {date}",
    translationNote: "Esta traducción se ofrece para su comodidad. En caso de discrepancia prevalece la versión inglesa, salvo que la ley imperativa de su país de residencia disponga otra cosa.",
    terms: {
      metaTitle: "Términos y condiciones", metaDescription: `Términos y condiciones de los servicios de dibujo CAD a distancia de ${S.tradingName}.`,
      title: "Términos y condiciones",
      sections: [
        { h: "1. Quiénes somos", body: [
          `Estos términos se aplican a todos los pedidos realizados a **${S.legalName}**, con nombre comercial **${S.tradingName}** («nosotros»), sociedad registrada en Inglaterra y Gales con el número ${S.companyNumber}, domicilio social en ${S.registeredOffice}, número de IVA ${S.vatNumber}. Contacto: ${mail}, ${S.phoneDisplay}.`,
        ] },
        { h: "2. Nuestros servicios", body: [
          "Prestamos **servicios a medida de dibujo CAD digital y elaboración de planos arquitectónicos**: planos 2D y 3D, juegos de planos para licencias, paquetes de planos normativos y documentos técnicos relacionados, basados exclusivamente en las medidas, bocetos, fotos e información que usted nos facilita.",
          { ul: [
            "Nuestros servicios se prestan **100 % a distancia**. No visitamos su vivienda ni realizamos levantamientos in situ.",
            "Solo entregamos archivos digitales (PDF, DWG, imágenes y, cuando se indique, DOCX). No suministramos bienes físicos.",
            "No ejecutamos, gestionamos ni supervisamos ninguna obra de construcción o reforma.",
            "Somos un estudio de diseño arquitectónico CAD y delineación. **No estamos inscritos en el ARB** y no utilizamos ningún título profesional protegido por la ley.",
            "Salvo acuerdo por escrito, no actuamos como coordinador de diseño según las CDM Regulations 2015 o las Building Regulations británicas ni prestamos servicios de cálculo estructural.",
          ] },
        ] },
        { h: "3. Pedidos", body: [
          "Usted realiza un pedido eligiendo un paquete, aceptando estos términos y pagando online. El contrato se perfecciona cuando le confirmamos el pedido por correo electrónico. Si no podemos aceptarlo (por ejemplo, porque el proyecto no puede dibujarse a distancia), se lo comunicaremos y le reembolsaremos íntegramente.",
        ] },
        { h: "4. Precios y pago", body: [
          { ul: [
            `Los precios de los paquetes son importes fijos **sin IVA**: Essential ${m(P.essential)}, Standard ${m(P.standard)}, Premium ${m(P.premium)}. El IVA británico del 20 % se añade cuando corresponda y se muestra en el checkout. Para proyectos fuera del Reino Unido, confirmaremos el tratamiento del IVA antes del pedido.`,
            "Puede pagar en el checkout o mediante factura con los métodos que nuestro proveedor de pagos ofrezca para su país y moneda (p. ej. tarjetas, monederos digitales y métodos bancarios o regionales admitidos).",
            "Bajo petición, podemos acordar un pago en dos partes: 50 % de reserva y 50 % antes de entregar los archivos CAD/DWG finales.",
            "Los archivos finales sin marca de agua solo se entregan una vez recibido el pago completo.",
          ] },
        ] },
        { h: "5. Su información y responsabilidad sobre las medidas", body: [
          "Dado que nuestros servicios son totalmente a distancia y no realizamos visitas, **usted es el único responsable de la exactitud e integridad de todas las medidas, linderos, cotas, fotos y demás información que envíe**. Dibujamos con la información que nos da. Señalaremos las incoherencias evidentes, pero no respondemos de errores o consecuencias (incluidas denegaciones, rehacer trabajos o costes de obra) derivados de información inexacta o incompleta. Compruebe todas las cotas in situ antes de usar los planos para obras o pedidos de material.",
          "Usted confirma que tiene derecho a enviarnos los planos, fotos y documentos que sube, incluidos los creados por terceros.",
        ] },
        { h: "6. Alcance, revisiones y exclusiones", body: [
          { ul: [
            "**Essential:** 1 ronda de revisión digital en los 14 días siguientes a la entrega del primer borrador.",
            "**Standard:** 2 rondas de revisión digitales en los 14 días siguientes a la entrega del primer borrador.",
            "**Premium:** hasta 3 rondas de revisión digitales en los 21 días siguientes a la entrega del primer borrador.",
          ] },
          "Una ronda de revisión es un conjunto unificado de cambios sobre los planos ya elaborados, dentro del alcance original. Los diseños nuevos, los cambios del planteamiento general o las revisiones solicitadas fuera de plazo quedan fuera del alcance y los presupuestaremos antes de realizar ningún trabajo.",
          { h3: "No incluido salvo indicación expresa en su paquete" },
          { ul: [
            "Cálculos o diseño estructural",
            "Tasas oficiales, incluidas las de licencia y control de edificación",
            "Presentar solicitudes en su nombre o representarle ante la administración",
            "Levantamientos topográficos, visitas o inspecciones in situ",
            "Servicios relativos a medianeras (Party Wall Surveyor)",
            "Cualquier obra de construcción o reforma",
          ] },
        ] },
        { h: "7. Plazos", body: [
          "Los plazos de entrega se expresan en días hábiles y empiezan cuando recibimos medidas e información completas. Son estimaciones de buena fe. Si necesitamos más información, el plazo se suspende hasta recibirla. Si no pidió un inicio anticipado, el plazo comienza al terminar el periodo de desistimiento de 14 días.",
        ] },
        { h: "8. Autorizaciones", body: [
          "Nuestros planos se elaboran con el objetivo de cumplir los requisitos urbanísticos aplicables y las Building Regulations británicas. Las decisiones sobre licencias corresponden a la autoridad competente y **no podemos garantizar que ninguna solicitud sea aprobada**. Para viviendas fuera del Reino Unido, usted es responsable de confirmar los requisitos locales; dibujaremos según las normas que nos indique. Los cambios solicitados por una autoridad dentro del alcance de su paquete se descuentan de sus rondas de revisión.",
        ] },
        { h: "9. Propiedad intelectual", body: [
          "Los derechos de autor (o, en su defecto, todos los derechos de explotación transmisibles) sobre los planos CAD/PDF finales **se le transmiten al recibir el pago completo**, en la medida permitida por la ley. Hasta entonces, los planos siguen siendo de nuestra propiedad y no deben usarse ni presentarse. Nuestras plantillas, cajetines y detalles genéricos siguen siendo nuestros, pero usted dispone de una licencia permanente para usarlos en sus planos. Solo mostraremos su proyecto en nuestro portfolio con su permiso.",
        ] },
        { h: "10. Cancelación y reembolsos", body: [
          `Sus derechos de cancelación y los importes reembolsables figuran en nuestra [Política de reembolso y cancelación](/refund-policy), que forma parte de estos términos. En resumen: reembolso íntegro antes de empezar a dibujar; reembolso menos una tarifa de puesta en marcha de ${m(setupFee[C])} tras revisar su documentación pero antes del primer borrador; y, por lo general, sin reembolso una vez entregado el primer borrador.`,
        ] },
        { h: "11. Responsabilidad", body: [
          { ul: [
            "Nada de lo aquí previsto limita nuestra responsabilidad por muerte o lesiones causadas por negligencia, por fraude o por cualquier otra cosa que no pueda limitarse legalmente.",
            "Si es usted consumidor, debemos prestar nuestros servicios con la diligencia y competencia debidas, y dispone de los derechos del Consumer Rights Act 2015 (y, si reside en la UE/EEE, de la normativa imperativa de consumo de su país). Estos derechos no se ven afectados.",
            "No respondemos de pérdidas causadas por información inexacta facilitada por usted, por no comprobar las cotas in situ, por decisiones de cualquier autoridad o por obras realizadas por terceros.",
            "Frente a clientes empresariales, nuestra responsabilidad total se limita al importe pagado por el paquete correspondiente, y no respondemos de daños indirectos, consecuenciales ni lucro cesante.",
          ] },
        ] },
        { h: "12. Reclamaciones", body: [
          `Si no está satisfecho con nuestro servicio, escriba a ${mail}. Respondemos en ${RT} y buscaremos una solución con usted. Contáctenos antes de iniciar una reclamación ante su banco. Esto no afecta a sus derechos legales.`,
        ] },
        { h: "13. Protección de datos", body: ["Tratamos sus datos personales según se describe en nuestra [Política de privacidad](/privacy-policy)."] },
        { h: "14. Ley aplicable y clientes internacionales", body: [
          { ul: [
            "Estos términos se rigen por la ley de **Inglaterra y Gales**, y son competentes los tribunales de Inglaterra y Gales.",
            "Si es un consumidor residente en la UE/EEE, esta elección de ley no le priva de la protección de las normas imperativas de consumo de su país de residencia, y podrá, en su caso, acudir a los tribunales de su país. Más información en nuestro [Aviso legal](/legal-notice).",
            "Podemos actualizar estos términos; se aplica a su pedido la versión publicada al realizarlo. Si alguna cláusula fuera inaplicable, el resto seguirá vigente.",
          ] },
        ] },
      ],
    },
    refund: {
      metaTitle: "Política de reembolso y cancelación", metaDescription: "Su derecho de desistimiento de 14 días y nuestros tramos de reembolso para paquetes de planos a medida.",
      title: "Política de reembolso y cancelación",
      sections: [
        { h: "1. Su derecho de desistimiento de 14 días", body: [
          "Si es usted consumidor, puede desistir de su pedido en un plazo de **14 días** desde el día en que se lo confirmamos, sin indicar el motivo. Para los consumidores de la UE/EEE (p. ej. España), este derecho deriva de la normativa de consumo de su país (que transpone la Directiva 2011/83/UE); para los consumidores del Reino Unido, de las **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013**.",
        ] },
        { h: "2. Servicio a medida e inicio dentro del plazo de desistimiento", body: [
          "Cada paquete de planos es un **servicio a medida, dibujado según las medidas específicas de su vivienda**. No empezamos a dibujar dentro del plazo de desistimiento de 14 días salvo que usted lo solicite expresamente.",
          { ul: [
            "**Si no solicita un inicio anticipado,** empezaremos cuando hayan pasado los 14 días, y hasta entonces puede desistir con reembolso íntegro.",
            "**Si solicita un inicio anticipado** (marcando la casilla al hacer el pedido o por escrito) y después desiste dentro de los 14 días, deberá abonar un importe proporcional al trabajo realizado hasta que nos comunique su desistimiento, según los tramos siguientes.",
            "**Perderá su derecho de desistimiento una vez que el servicio se haya ejecutado por completo** (entrega de los archivos finales), si la ejecución comenzó dentro del plazo a petición expresa suya y con su reconocimiento de esta consecuencia.",
          ] },
        ] },
        { h: "3. Tramos de reembolso", body: [
          "Estos tramos muestran cómo valoramos el trabajo realizado. Se aplican a todos los pedidos, tanto si cancela dentro como fuera del plazo de 14 días.",
          { table: { head: ["Cuándo cancela", "Qué se le reembolsa"], rows: [
            ["Antes de enviar sus medidas y antes de comenzar el dibujo CAD", "**Reembolso íntegro (100 %)**"],
            ["Después de que hayamos empezado a revisar su documentación (medidas, fotos y descripción), pero antes de enviar los primeros PDF de borrador", `**Reembolso íntegro menos una tarifa de puesta en marcha de ${m(setupFee[C])}** (+ IVA cuando corresponda), que cubre la revisión, la preparación y el dibujo base`],
            ["Después de la entrega del primer juego de PDF de borrador", "**Por lo general, no reembolsable.** El trabajo de dibujo a medida está sustancialmente terminado. Si una parte sustancial de su paquete aún no se ha realizado, le reembolsaremos un importe justo por esa parte."],
          ] } },
          "Los clientes empresariales no tienen el derecho legal de desistimiento, pero pueden cancelar en cualquier momento con los mismos tramos.",
        ] },
        { h: "4. Cómo desistir", body: [
          `Envíe un correo a ${mail} con su nombre, la referencia del pedido y una declaración clara de que desea desistir. Puede usar el modelo siguiente, aunque no es obligatorio.`,
          { box: [
            "**Modelo de formulario de desistimiento**",
            `A la atención de: ${S.legalName}, con nombre comercial ${S.tradingName}, ${S.registeredOffice}, ${S.supportEmail}`,
            "Por la presente le comunico/comunicamos que desisto/desistimos de mi/nuestro contrato de prestación del siguiente servicio: [nombre del paquete]",
            "Pedido el: [fecha] · Referencia del pedido: [referencia]",
            "Nombre: [su nombre] · Domicilio: [su domicilio] · Fecha: [fecha]",
          ] },
        ] },
        { h: "5. Reembolsos", body: [
          "Le reembolsaremos cualquier importe debido en un plazo de **14 días** desde la recepción de su desistimiento, utilizando el mismo medio de pago que usted empleó. No cobramos ninguna comisión por el reembolso.",
        ] },
        { h: "6. Si cancelamos nosotros", body: [
          "Si no podemos completar sus planos (por ejemplo, porque el proyecto no puede dibujarse con precisión a distancia), le explicaremos el motivo y le reembolsaremos la parte del servicio no prestada.",
        ] },
        { h: "7. Problemas y disputas", body: [
          `Contáctenos primero en ${mail}. Garantizamos una respuesta en **${RT}** y buscaremos una solución con usted. Le rogamos que nos dé la oportunidad de resolverlo antes de iniciar una reclamación o retrocesión ante su banco. Nada de ello afecta a sus derechos legales.`,
        ] },
      ],
    },
    privacy: {
      metaTitle: "Política de privacidad", metaDescription: `Cómo ${S.tradingName} recoge y utiliza sus datos personales.`,
      title: "Política de privacidad",
      sections: [
        { h: "1. Responsable del tratamiento", body: [
          `**${S.legalName}** (con nombre comercial ${S.tradingName}), número de registro ${S.companyNumber}, domicilio social ${S.registeredOffice}, es el **responsable del tratamiento** de los datos descritos en esta política. Consultas de privacidad: ${mail}`,
          "Esta política explica cómo tratamos sus datos conforme al RGPD británico (UK GDPR), la Data Protection Act 2018 y la Data (Use and Access) Act 2025. Si se encuentra en la UE/EEE, respetamos también sus derechos conforme al RGPD de la UE.",
        ] },
        { h: "2. Qué datos recogemos", body: [
          { ul: [
            "**Datos de contacto:** nombre, correo electrónico, teléfono.",
            "**Datos del proyecto:** dirección de la vivienda, su descripción y las medidas, bocetos, planos, fotos y documentos que suba.",
            "**Pedidos y facturación:** lo que ha comprado, importes pagados, dirección de facturación y constancia de su aceptación de los términos y de su elección de inicio. Los datos de pago los trata nuestro proveedor; nunca vemos ni guardamos el número completo de su tarjeta.",
            "**Comunicaciones:** correos, mensajes del formulario y de WhatsApp.",
            "**Datos técnicos:** registros básicos del servidor (como la dirección IP y el navegador) que guarda nuestro proveedor de alojamiento por seguridad, y sus preferencias de cookies.",
          ] },
          "Las fotos de su vivienda pueden mostrar personas, vehículos o propiedades vecinas. Evite incluir personas siempre que sea posible.",
        ] },
        { h: "3. Finalidades y bases jurídicas", body: [
          { table: { head: ["Finalidad", "Base jurídica"], rows: [
            ["Tramitar su pedido, elaborar y entregar sus planos, gestionar revisiones y reembolsos", "Ejecución del contrato (art. 6.1.b RGPD)"],
            ["Llevar la contabilidad y los registros fiscales para la autoridad tributaria británica (HMRC)", "Obligación legal (art. 6.1.c)"],
            ["Responder a consultas antes del pedido", "Medidas precontractuales / interés legítimo"],
            ["Prevenir el fraude, proteger el sitio web y gestionar disputas o reclamaciones", "Interés legítimo (art. 6.1.f)"],
            ["Cookies analíticas opcionales (solo si las acepta)", "Consentimiento (art. 6.1.a), revocable en cualquier momento"],
          ] } },
          "No vendemos sus datos, no los usamos con fines de marketing sin su consentimiento ni tomamos decisiones automatizadas sobre usted.",
        ] },
        { h: "4. Destinatarios", body: [
          "Utilizamos proveedores de confianza (encargados del tratamiento) que tratan los datos solo siguiendo nuestras instrucciones:",
          { ul: [
            "**Proveedores de pago:** Stripe (y Dodo Payments, si se utiliza), para cobrar y prevenir el fraude.",
            "**Alojamiento web:** Vercel.",
            "**Correo electrónico:** para correos y formularios (p. ej. Google).",
            "**Almacenamiento en la nube:** para archivos del proyecto y entrega de planos, y cualquier servicio de transferencia que usted elija.",
            "**WhatsApp (Meta):** solo si decide escribirnos por ahí.",
            "**Nuestros contables** y asesores, y la HMRC u otras autoridades cuando la ley lo exija.",
          ] },
          "Algunos proveedores tratan datos fuera del Reino Unido/EEE (p. ej. en EE. UU.). Las transferencias están protegidas por decisiones de adecuación (UK-US Data Bridge, Marco de Privacidad de Datos UE-EE. UU.) o por cláusulas contractuales tipo / el IDTA británico o su anexo.",
        ] },
        { h: "5. Plazos de conservación", body: [
          { ul: [
            "Pedidos, facturas y pagos: **6 años** desde el final del ejercicio correspondiente (requisito de la HMRC).",
            "Archivos del proyecto y planos: **6 años** desde su finalización, por posibles consultas o reclamaciones.",
            "Consultas que no terminan en pedido: **12 meses**.",
            "Preferencias de cookies: hasta que las cambie o borre el almacenamiento de su navegador.",
          ] },
        ] },
        { h: "6. Sus derechos", body: [
          "Tiene derecho de **acceso**, **rectificación** de datos inexactos, **supresión** cuando no haya motivo para conservarlos, **limitación** del tratamiento, **portabilidad**, **oposición** a los tratamientos basados en el interés legítimo y a **retirar su consentimiento** en cualquier momento (p. ej. desde la configuración de cookies del pie de página).",
          `Para ejercer sus derechos, escriba a ${mail}. Responderemos en el plazo de **un mes**, prorrogable dos meses más en solicitudes complejas, en cuyo caso le explicaremos el motivo.`,
        ] },
        { h: "7. Reclamaciones", body: [
          `Si no está satisfecho con el tratamiento de sus datos, presente primero su reclamación en ${mail}. Acusaremos recibo en un plazo de **30 días** (nuestro objetivo: ${RT}), la estudiaremos con rapidez y le comunicaremos el resultado sin demora indebida.`,
          "También puede reclamar ante la **Information Commissioner's Office (ICO)** del Reino Unido: [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/), +44 303 123 1113. Si reside en la UE/EEE, también puede dirigirse a la autoridad de protección de datos de su país (en España, la AEPD).",
        ] },
        { h: "8. Seguridad", body: ["Utilizamos conexiones cifradas (HTTPS), proveedores de confianza y controles de acceso. Ningún sistema es totalmente seguro, así que no nos envíe información sensible innecesaria."] },
        { h: "9. Cookies y cambios", body: ["Consulte nuestra [Política de cookies](/cookie-policy). Podemos actualizar esta política; la versión vigente estará siempre en esta página."] },
      ],
    },
    cookies: {
      metaTitle: "Política de cookies", metaDescription: `Cómo ${S.tradingName} utiliza cookies y tecnologías similares.`,
      title: "Política de cookies",
      sections: [
        { h: "1. ¿Qué son las cookies?", body: [
          `Esta política explica cómo ${S.legalName} (con nombre comercial ${S.tradingName}) utiliza cookies y tecnologías similares, conforme a las Privacy and Electronic Communications Regulations (PECR) británicas, el UK GDPR y la normativa ePrivacy de la UE. Las cookies son pequeños archivos que los sitios web guardan en su dispositivo. Tecnologías similares, como el almacenamiento local del navegador, funcionan de forma parecida; aquí las llamamos a todas «cookies».`,
        ] },
        { h: "2. Cookies que utilizamos", body: [
          { table: { head: ["Nombre", "Tipo", "Finalidad", "Duración"], rows: [
            ["ftds-cookie-consent (almacenamiento local)", "Estrictamente necesaria", "Recuerda si aceptó o rechazó las cookies no esenciales", "Hasta que la cambie o la borre"],
            ["Cookies del proveedor de pago (p. ej. Stripe)", "Estrictamente necesaria", "Se instalan en la página de pago segura del proveedor para prevenir el fraude y procesar el pago. Se rigen por la política del proveedor.", "La fija el proveedor"],
            ["_ga, _ga_* (Google Analytics)", "Analítica (opcional)", "Estadísticas anónimas de uso. **Solo si las acepta.** Si no usamos analítica, nunca se instalan.", "Hasta 2 años"],
          ] } },
          "No utilizamos cookies publicitarias ni de marketing. Nuestras fuentes tipográficas se alojan en nuestro propio sitio, por lo que al cargar una página no se envían datos a proveedores de fuentes. Su elección de idioma forma parte de la dirección web, no es una cookie.",
        ] },
        { h: "3. Sus opciones", body: [
          "En su primera visita le pedimos su elección mediante un banner con botones igual de visibles **Aceptar todas** y **Rechazar las no esenciales**. No hay ninguna opción opcional marcada de antemano y no se carga ningún script analítico o de marketing sin su consentimiento. Puede cambiar de opinión en cualquier momento desde la **Configuración de cookies** del pie de página. También puede bloquear o borrar cookies en su navegador; bloquear las estrictamente necesarias puede impedir el pago.",
        ] },
        { h: "4. Más información", body: [`Consulte nuestra [Política de privacidad](/privacy-policy) o escriba a ${mail}`] },
      ],
    },
    notice: {
      metaTitle: "Aviso legal y condiciones internacionales",
      metaDescription: `Información legal de ${S.legalName}, con nombre comercial ${S.tradingName}, e información de desistimiento para clientes del Reino Unido y la UE/EEE.`,
      title: "Aviso legal y condiciones internacionales",
      sections: [
        { h: "1. Datos de la empresa", body: [
          { box: [
            `**${S.legalName}**, con nombre comercial **${S.tradingName}**`,
            "Sociedad de responsabilidad limitada (private limited company) registrada en Inglaterra y Gales",
            `Número de registro: ${S.companyNumber} (Companies House)`,
            `Domicilio social: ${S.registeredOffice}`,
            `Número de IVA (Reino Unido): ${S.vatNumber}`,
            ...(S.director ? [`Administrador (Director): ${S.director}`] : []),
            `Correo: ${S.supportEmail} · Teléfono: ${S.phoneDisplay}`,
          ] },
          "Actividad: delineación CAD arquitectónica a distancia y elaboración de planos digitales. No estamos inscritos en el ARB (Reino Unido) ni en ningún organismo profesional equivalente de otro país, y no utilizamos ningún título profesional protegido en ningún país.",
        ] },
        { h: "2. A quién se dirigen nuestros servicios", body: [
          "Vendemos online paquetes de planos digitales a medida a clientes del Reino Unido y de otros países, como Alemania, Francia, España e Italia. Todo el trabajo se realiza a distancia; no hacemos visitas ni obras en ningún país.",
        ] },
        { h: "3. Cancelación: consumidores del Reino Unido", body: [
          "Los consumidores del Reino Unido tienen un derecho de cancelación de 14 días conforme a las Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. Si solicita expresamente que empecemos dentro de ese plazo, deberá pagar el trabajo realizado si cancela, y el derecho se extingue una vez prestado el servicio por completo. Detalles: [Política de reembolso y cancelación](/refund-policy).",
        ] },
        { h: "4. Desistimiento: consumidores de la UE/EEE (Alemania, Francia, España, Italia y otros)", body: [
          "Si es un consumidor residente en la UE/EEE, tiene un **derecho de desistimiento de 14 días** desde la celebración del contrato, sin necesidad de justificación, conforme a la normativa de consumo de su país (que transpone la Directiva 2011/83/UE).",
          { ul: [
            `Para ejercerlo, envíenos una declaración inequívoca (p. ej. por correo a ${S.supportEmail}) antes de que venza el plazo. Puede usar el modelo de formulario de nuestra [Política de reembolso y cancelación](/refund-policy), aunque no es obligatorio.`,
            "Si desiste, le devolveremos todos los pagos recibidos sin demora indebida y, a más tardar, en 14 días desde que recibamos su comunicación, utilizando el mismo medio de pago.",
            "Si solicitó expresamente que el servicio comenzara durante el plazo de desistimiento, deberá abonar un importe proporcional a la parte ya prestada hasta que nos comunique su desistimiento.",
            "El derecho de desistimiento se extingue una vez prestado el servicio por completo, si la ejecución comenzó con su consentimiento expreso previo y su reconocimiento de que perdería este derecho.",
          ] },
        ] },
        { h: "5. Precios, IVA y moneda", body: [
          "En nuestros sitios en alemán, francés, español e italiano los precios se muestran y cobran en euros (EUR); en el sitio en inglés, en libras esterlinas (GBP). Cada moneda tiene su propia tarifa fija (no convertimos al tipo de cambio del día), por lo que el precio que ve es el que paga. Los precios no incluyen el 20 % de IVA británico; también se muestra el total con IVA. Su banco puede aplicar su propio tipo de cambio o comisiones. Para viviendas fuera del Reino Unido pueden aplicarse otras normas de IVA; contáctenos antes del pedido para confirmar el tratamiento correcto.",
        ] },
        { h: "6. Ley aplicable, tribunales y resolución de disputas", body: [
          "Nuestros contratos se rigen por la ley de **Inglaterra y Gales**. Si es consumidor, ello no le priva de la protección de las disposiciones imperativas de la ley de su país de residencia, y podrá, en su caso, acudir a los tribunales de su país.",
          `Si tiene una reclamación, contáctenos primero en ${mail}. Respondemos en ${RT}. En su país pueden existir también servicios de información al consumidor o de resolución alternativa de litigios.`,
        ] },
        { h: "7. Idiomas", body: [
          "Este sitio está disponible en inglés, alemán, francés, español e italiano. Las traducciones se ofrecen para su comodidad. En caso de discrepancia prevalece la versión inglesa, salvo que la ley imperativa de su país disponga otra cosa.",
        ] },
        { h: "8. Responsable del contenido", body: [
          `${S.legalName}, ${S.registeredOffice}. Documentos relacionados: [Términos y condiciones](/terms), [Política de reembolso y cancelación](/refund-policy), [Política de privacidad](/privacy-policy), [Política de cookies](/cookie-policy).`,
        ] },
      ],
    },
  },
  samplesFigures: { fileName: "planta-baja-propuesta.dwg" },
};

export default es;
