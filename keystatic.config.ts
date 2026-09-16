import { config, collection, singleton, fields } from "@keystatic/core";

/**
 * Pannello contenuti Novaterra — stesso modello del sito Mauro Toncelli.
 * - In locale (KEYSTATIC_STORAGE=local o senza credenziali GitHub): scrive su content/
 * - In produzione (env KEYSTATIC_GITHUB_*): login GitHub, ogni salvataggio è un commit
 *   e Vercel ricostruisce il sito.
 */
const storage = import.meta.env.DEV
  ? ({ kind: "local" } as const)
  : ({
      kind: "github",
      repo: { owner: "maurotoncelli", name: "novaterra-web" },
    } as const);

const categoryOptions = [
  { label: "Movimento terra e sbancamenti", value: "movimento-terra" },
  { label: "Strade e piazzali", value: "strade-piazzali" },
  { label: "Demolizioni", value: "demolizioni" },
  { label: "Sistemazioni forestali", value: "forestale" },
  { label: "Consolidamenti idrogeologici", value: "idrogeologico" },
  { label: "Bacini e laghi artificiali", value: "bacini" },
  { label: "Altro", value: "altro" },
] as const;

const serviceOptions = categoryOptions.filter((item) => item.value !== "altro");

const blogCategoryOptions = [
  { label: "Incentivi", value: "incentivi" },
  { label: "Case study", value: "case-study" },
  { label: "Eventi", value: "eventi" },
  { label: "Curiosità", value: "curiosita" },
] as const;

export default config({
  storage,
  ui: {
    brand: { name: "Novaterra" },
  },
  collections: {
    realizzazioni: collection({
      label: "Realizzazioni",
      slugField: "title",
      path: "content/realizzazioni/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({
          name: {
            label: "Titolo",
            description: "Compare sulle card e in pagina. Lo slug dell’URL si cambia dal nome file.",
          },
        }),
        id: fields.text({
          label: "ID (opzionale)",
          description: "Usato solo per l’ordine di fallback. Se vuoto si usa lo slug.",
        }),
        excerpt: fields.text({
          label: "Estratto (card e SEO)",
          multiline: true,
          validation: { isRequired: true },
        }),
        year: fields.text({
          label: "Anno di realizzazione",
          validation: { isRequired: true },
        }),
        publishedAt: fields.date({
          label: "Data di pubblicazione sul sito",
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Categoria principale",
          options: categoryOptions,
          defaultValue: "movimento-terra",
        }),
        services: fields.multiselect({
          label: "Servizi collegati",
          options: serviceOptions,
          defaultValue: ["movimento-terra"],
        }),
        heroMain: fields.text({
          label: "Hero — prima riga",
          description: "Es. BACINO",
          validation: { isRequired: true },
        }),
        heroAccent: fields.text({
          label: "Hero — seconda riga (accento)",
          description: "Es. GHIZZANO",
          validation: { isRequired: true },
        }),
        heroSubtitle: fields.text({
          label: "Hero — soprattitolo",
          defaultValue: "Case Study",
        }),
        cover: fields.text({
          label: "Foto copertina (percorso già nel sito)",
          description:
            "Usata sulla card e sull’hero. Es. /images/realizzazioni/ghizzano-bacino/copertina.jpg",
          validation: { isRequired: true },
        }),
        coverUpload: fields.image({
          label: "Oppure carica una nuova copertina",
          description: "Se carichi un file, sostituisce il percorso sopra.",
          directory: "public/images/realizzazioni/uploads",
          publicPath: "/images/realizzazioni/uploads/",
        }),
        client: fields.text({ label: "Cliente", validation: { isRequired: true } }),
        location: fields.text({ label: "Luogo", validation: { isRequired: true } }),
        serviceLabel: fields.text({
          label: "Servizio (etichetta in scheda)",
          validation: { isRequired: true },
        }),
        challengeTitle: fields.text({
          label: "Titolo blocco sfida",
          defaultValue: "La Sfida",
        }),
        challenge: fields.text({
          label: "La sfida",
          multiline: true,
          validation: { isRequired: true },
        }),
        solution: fields.text({
          label: "La soluzione",
          multiline: true,
          validation: { isRequired: true },
        }),
        topoTitle: fields.text({
          label: "Rilievo — titolo",
          defaultValue: "Rilievo Topografico",
        }),
        topoImage: fields.text({
          label: "Rilievo — foto (percorso)",
        }),
        topoImageUpload: fields.image({
          label: "Rilievo — carica nuova foto",
          directory: "public/images/realizzazioni/uploads",
          publicPath: "/images/realizzazioni/uploads/",
        }),
        topoReadout: fields.text({
          label: "Rilievo — riga dati",
          description: "Es. LOC: GHIZZANO (PI) // YEAR: 2024 // TYPE: BACINO IDRICO",
        }),
        videoType: fields.select({
          label: "Tipo video",
          options: [
            { label: "File MP4 sul sito", value: "mp4" },
            { label: "YouTube", value: "youtube" },
            { label: "Vimeo", value: "vimeo" },
          ],
          defaultValue: "mp4",
        }),
        videoUrl: fields.text({
          label: "Video (URL o percorso)",
          description: "Es. /videos/realizzazioni/ghizzano-bacino/cantiere.mp4 oppure un link YouTube",
          validation: { isRequired: true },
        }),
        videoPoster: fields.text({
          label: "Poster video (percorso)",
        }),
        videoTitle: fields.text({
          label: "Titolo video",
        }),
        gallery: fields.array(
          fields.object({
            src: fields.text({
              label: "Percorso foto esistente",
              description: "Es. /images/realizzazioni/ghizzano-bacino/paesaggio.jpg",
            }),
            upload: fields.image({
              label: "Oppure carica una nuova foto",
              directory: "public/images/realizzazioni/uploads",
              publicPath: "/images/realizzazioni/uploads/",
            }),
            alt: fields.text({
              label: "Testo alternativo / didascalia",
              validation: { isRequired: true },
            }),
            aspect: fields.select({
              label: "Formato",
              options: [
                { label: "Orizzontale", value: "landscape" },
                { label: "Verticale", value: "portrait" },
              ],
              defaultValue: "landscape",
            }),
          }),
          {
            label: "Galleria (la prima è anche anteprima; trascina per riordinare)",
            itemLabel: (props) => props.fields.alt.value || props.fields.src.value || "foto",
          }
        ),
      },
    }),
    articoli: collection({
      label: "Blog / Insight",
      slugField: "title",
      path: "content/articoli/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({
          name: { label: "Titolo articolo" },
        }),
        excerpt: fields.text({
          label: "Estratto (card e SEO)",
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Data",
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Categoria",
          options: blogCategoryOptions,
          defaultValue: "curiosita",
        }),
        readTime: fields.integer({
          label: "Tempo di lettura (minuti)",
          defaultValue: 5,
        }),
        heroMain: fields.text({
          label: "Hero — prima riga",
          validation: { isRequired: true },
        }),
        heroAccent: fields.text({
          label: "Hero — seconda riga",
          validation: { isRequired: true },
        }),
        heroSubtitle: fields.text({
          label: "Hero — soprattitolo",
          defaultValue: "Insight",
        }),
        cover: fields.text({
          label: "Foto copertina (percorso o URL)",
          validation: { isRequired: true },
        }),
        coverUpload: fields.image({
          label: "Oppure carica una nuova copertina",
          directory: "public/images/blog/uploads",
          publicPath: "/images/blog/uploads/",
        }),
        intro: fields.array(fields.text({ label: "Paragrafo", multiline: true }), {
          label: "Paragrafi iniziali",
          itemLabel: (props) => props.value.slice(0, 48) || "paragrafo",
        }),
        sections: fields.array(
          fields.object({
            title: fields.text({ label: "Titolo sezione", validation: { isRequired: true } }),
            body: fields.array(fields.text({ label: "Paragrafo", multiline: true }), {
              label: "Testo",
              itemLabel: (props) => props.value.slice(0, 48) || "paragrafo",
            }),
            imageSrc: fields.text({
              label: "Foto sezione (percorso o URL, opzionale)",
            }),
            imageAlt: fields.text({ label: "Alt foto sezione" }),
          }),
          {
            label: "Sezioni",
            itemLabel: (props) => props.fields.title.value || "sezione",
          }
        ),
      },
    }),
  },
  singletons: {
    realizzazioniHero: singleton({
      label: "Hero pagina Realizzazioni",
      path: "content/realizzazioni-hero",
      format: { data: "yaml" },
      schema: {
        subtitle: fields.text({ label: "Soprattitolo", defaultValue: "Case Studies" }),
        titleMain: fields.text({ label: "Titolo — prima riga", defaultValue: "REALIZZAZIONI" }),
        titleAccent: fields.text({ label: "Titolo — seconda riga", defaultValue: "PROGETTI" }),
        image: fields.text({
          label: "Immagine (percorso)",
          validation: { isRequired: true },
        }),
        imageUpload: fields.image({
          label: "Oppure carica una nuova immagine",
          directory: "public/images/realizzazioni/uploads",
          publicPath: "/images/realizzazioni/uploads/",
        }),
      },
    }),
    blogHero: singleton({
      label: "Hero pagina Blog",
      path: "content/blog-hero",
      format: { data: "yaml" },
      schema: {
        subtitle: fields.text({ label: "Soprattitolo", defaultValue: "Aggiornamenti" }),
        titleMain: fields.text({ label: "Titolo — prima riga", defaultValue: "NOTIZIE &" }),
        titleAccent: fields.text({ label: "Titolo — seconda riga", defaultValue: "INSIGHT" }),
        image: fields.text({
          label: "Immagine (percorso o URL)",
          validation: { isRequired: true },
        }),
        imageUpload: fields.image({
          label: "Oppure carica una nuova immagine",
          directory: "public/images/blog/uploads",
          publicPath: "/images/blog/uploads/",
        }),
      },
    }),
  },
});
