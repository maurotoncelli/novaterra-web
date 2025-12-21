// src/data/privacyData.ts
// Privacy Policy content (today static, tomorrow from WordPress/ACF).

export const privacyHero = {
  subtitle: "Informativa",
  title: {
    main: "PRIVACY",
    accent: "POLICY"
  },
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2800&auto=format&fit=crop",
  parallaxSpeed: 0.45,
  description:
    "Informazioni su trattamento dei dati, richieste dal sito e strumenti di misurazione come Google Analytics."
};

export type PrivacySection = {
  title: string;
  paragraphs: string[];
};

export const privacyMeta = {
  title: "Privacy Policy | Novaterra",
  description:
    "Informativa privacy: come vengono trattati i dati raccolti tramite il sito, il modulo contatti e gli strumenti di analisi."
};

// Generic, editable copy (keep it CMS-friendly: short sections, plain language)
export const privacySections: PrivacySection[] = [
  {
    title: "Titolare del trattamento",
    paragraphs: [
      "Il Titolare del trattamento è Novaterra (di Riccardo Toncelli).",
      "Per richieste relative alla privacy puoi contattarci via email all’indirizzo indicato nella pagina Contatti."
    ]
  },
  {
    title: "Quali dati raccogliamo",
    paragraphs: [
      "Dati forniti volontariamente dall’utente tramite il modulo contatti (es. nome/azienda, email, dettagli del progetto).",
      "Dati tecnici di navigazione (es. indirizzo IP in forma anonimizzata/aggregata, informazioni sul dispositivo e sul browser), utili a garantire la sicurezza e a migliorare l’esperienza sul sito."
    ]
  },
  {
    title: "Finalità del trattamento",
    paragraphs: [
      "Gestire e rispondere alle richieste inviate tramite il modulo contatti.",
      "Misurare e migliorare le prestazioni del sito (statistiche aggregate).",
      "Eventuale invio di comunicazioni informative/marketing solo se richiesto o consentito dall’utente (es. aggiornamenti e novità)."
    ]
  },
  {
    title: "Google Analytics",
    paragraphs: [
      "Questo sito può utilizzare Google Analytics (GA4) per raccogliere statistiche aggregate sull’utilizzo del sito (pagine visitate, tempo di permanenza, provenienza).",
      "Quando attivo, il tracciamento è configurato per ridurre al minimo i dati personali e non viene utilizzato per rivendere dati a terzi."
    ]
  },
  {
    title: "Conservazione e condivisione",
    paragraphs: [
      "Conserviamo i dati per il tempo necessario a gestire la richiesta e per gli obblighi di legge applicabili.",
      "Non vendiamo né cediamo i dati personali a terzi. I dati possono essere condivisi solo con fornitori tecnici strettamente necessari all’erogazione del sito e dei servizi (es. hosting/analytics), nel rispetto della normativa."
    ]
  },
  {
    title: "Diritti dell’utente",
    paragraphs: [
      "Puoi richiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento dei tuoi dati, nei limiti previsti dalla legge.",
      "Per esercitare i tuoi diritti, contattaci tramite i recapiti presenti nella pagina Contatti."
    ]
  }
];


