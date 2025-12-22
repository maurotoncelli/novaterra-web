// src/data/homeContent.ts

// 0. HERO
export const heroData = {
    subtitle: "Est. 2023 - Terricciola, Toscana",
    titleMain: "PLASMARE",
    titleAccent: "LA TERRA",
    description: "Dalla Valdera a tutta la provincia di Pisa, uniamo ingegneria operativa e rispetto del paesaggio.",
    primaryCTA: { text: "Richiedi Sopralluogo", link: "/contatti" },
    secondaryCTA: { text: "Esplora Progetti", link: "/realizzazioni" },
    bgImage: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=2800&auto=format&fit=crop"
};

// 0.5. INTRO
export const introData = {
    shortIntro: {
        subtitle: "Novaterra in Breve",
        title: "L'EVOLUZIONE DEL<br>MOVIMENTO TERRA.",
        desc: "Siamo un'azienda giovane ma con radici profonde. Operiamo a Terricciola, Peccioli, Ponsacco e in tutta la Valdera. Portiamo nel settore privato la stessa precisione e sicurezza che abbiamo imparato nei grandi cantieri industriali."
    },
    founder: {
        subtitle: "Il Volto",
        title: "RICCARDO<br>TONCELLI.",
        quote: "\"Il movimento terra non è solo scavare. È capire cosa c'è sotto e cosa ci sarà sopra.\"",
        desc: "Fondatore e Direttore Tecnico. Cresciuto sui mezzi fin da bambino, formato in cantieri industriali complessi. Oggi guida Novaterra con una visione chiara: unire la potenza dei mezzi moderni alla precisione dell'ingegneria.",
        cta: { text: "Continua a leggere", link: "/chi-siamo" },
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
    }
};

// 1. TARGET (Testi completi dalle card originali)
export const targets = [
    {
        icon: "◩",
        title: "Tecnici: ingegneri,<br>architetti, geometri.",
        desc: "Lavoriamo fianco a fianco con studi tecnici e professionisti che hanno bisogno di un’impresa di movimento terra precisa, puntuale e autonoma.<br><br>Ci occupiamo di sopralluoghi congiunti, verifica delle quote, lettura e ottimizzazione dei computi, gestione terre e rocce da scavo, fino alla consegna di un cantiere ordinato e documentabile."
    },
    {
        icon: "⌂",
        title: "Privati e<br>aziende agricole.",
        desc: "Aiutiamo chi vuole costruire, ampliare o sistemare: case, vialetti, piazzali, accessi, piccoli laghi, vigneti, terreni agricoli.<br><br>Spieghiamo il lavoro in modo semplice, ci occupiamo di scavi, sbancamenti, sistemazione del terreno e cura del verde, lasciando il cantiere pulito e pronto per le fasi successive."
    },
    {
        icon: "◫",
        title: "Enti pubblici,<br>consorzi, amministrazioni.",
        desc: "Siamo organizzati per lavorare con comuni, province, consorzi di bonifica e altre realtà pubbliche.<br><br>Gestiamo manutenzione di strade bianche, fossi e argini, piccoli interventi idrogeologici, sistemazioni di versanti e aree verdi, con attenzione a sicurezza, procedure e rispetto dei tempi."
    }
];

// 2. METODO (Testi completi con i dettagli mancanti)
export const methodSteps = [
    {
        step: "STEP 1",
        icon: "⌖",
        title: "Analisi & Sopralluogo Tecnico",
        desc: "Dal primo contatto all'analisi sul campo. Valutiamo terreno, pendenze e accessi per definire subito priorità e fattibilità."
    },
    {
        step: "STEP 2",
        icon: "∑",
        title: "Computo e Ottimizzazione",
        desc: "Verifichiamo il metrico e identifichiamo varianti che riducono costi superflui. Abbiamo ottenuto <span style='color:var(--nova-accent)'>risparmi fino a 100.000 €</span> in un singolo progetto."
    },
    {
        step: "STEP 3",
        icon: "⚙",
        title: "Esecuzione Controllata",
        desc: "Macchinari di proprietà, sicurezza rigorosa e procedure chiare. Riccardo dirige personalmente le operazioni in cantiere."
    },
    {
        step: "STEP 4",
        icon: "✓",
        title: "Verifica e Consegna",
        desc: "Controllo quote con laser, ripristino finale e pulizia. Consegniamo il lavoro solo quando è perfetto, senza sorprese."
    }
];

// 3. CERTIFICAZIONI
export const certifications = [
    { code: "ISO 45001", name: "Sicurezza sul Lavoro" },
    { code: "ISO 9001", name: "Gestione Qualità" },
    { code: "ISO 14001", name: "Gestione Ambientale" },
    { code: "SOA", name: "OS1 / OS21 / OS23" },
    { code: "ALBO GESTORI", name: "Cat. 2-BIS / 4 (Terre e Rocce)" },
    { code: "FORESTALE", name: "Patentino Operatore Macchine" }
];

// 4. ASPETTATIVE
export const expectations = [
    "Risposte Rapide", "Precisione Assoluta", "Organizzazione", "Sicurezza Totale",
    "Metodo Tecnico", "Affidabilità Documentale", "Dialogo con i Tecnici", "Gestione Complessa"
];

// 5. ASSET (I 3 Pilastri)
export const assets = [
    { num: "01", title: "Esperienza Vera", desc: "Cresciuti sui mezzi fin da bambini, formati in aziende leader come Deferco. Conosciamo il terreno toscano metro per metro." },
    { num: "02", title: "Metodo & Pulizia", desc: "Il cantiere non deve essere caos. Ordine, sicurezza e pulizia finale sono parte integrante del nostro servizio." },
    { num: "03", title: "Tecnologia", desc: "Parco mezzi di proprietà costantemente rinnovato: escavatori precisi, camion 4 assi moderni e livelli laser." }
];

// 6. SERVIZI HOME
export const homeServices = [
    { id: "movimento", num: "01", title: "Movimento Terra" },
    { id: "strade", num: "02", title: "Strade & Piazzali" },
    { id: "demolizioni", num: "03", title: "Demolizioni" },
    { id: "forestale", num: "04", title: "Forestale & Verde" },
    { id: "idrogeologico", num: "05", title: "Idrogeologico" },
    { id: "bacini", num: "06", title: "Bacini & Laghi" }
];

// 7. TESTIMONIAL
export const testimonials = [
    { text: "Mai visto un cantiere così pulito. Hanno risolto un problema di drenaggio che avevamo da anni.", author: "Marco R. - Architetto" },
    { text: "Riccardo e il suo team hanno trasformato il nostro terreno in pendenza in un giardino vivibile. Consigliatissimi.", author: "Elena B. - Privato" },
    { text: "Professionalità industriale applicata al residenziale. Scavi precisi al millimetro.", author: "Studio Tecnico V." }
];

// 8. CLIENTI
export const clients = [
    "STUDIO TECNICO ROSSI", "CONSORZIO BONIFICA", "TENUTA SAN GUIDO", "EDILIZIA MODERNA SRL",
    "AGRARIA VALDERA", "COMUNE DI TERRICCIOLA", "STUDIO ARCH. BIANCHI"
];

// 9. MENU LINKS
export const menuLinks = [
    { label: 'Home', link: '/' },
    { label: 'Chi Siamo', link: '/chi-siamo' },
    { label: 'Servizi', link: '/servizi' },
    { label: 'Parco Mezzi', link: '/parco-mezzi' },
    { label: 'Realizzazioni', link: '/realizzazioni' },
    { label: 'Notizie & Blog', link: '/blog' },
    { label: 'Contatti', link: '/contatti' }
];
