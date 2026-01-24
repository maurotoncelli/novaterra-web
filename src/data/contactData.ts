// src/data/contactData.ts
// Configurazione centralizzata per la pagina Contatti (stile demo)

export const contactInfo = {
  subtitle: "Parliamone",
  title: {
    main: "INIZIA IL",
    accent: "PROGETTO", // In corsivo/peso leggero
  },
  company: {
    name: "Novaterra",
    owner: "di Riccardo Toncelli"
  },
  address: {
    street: "Via G. Galilei 61",
    city: "Terricciola (PI)"
  },
  contactPerson: "Riccardo Toncelli",
  phone: {
    display: "+39 351 308 19 20",
    href: "tel:+393513081920"
  },
  email: {
    display: "info@novaterra.work",
    href: "mailto:info@novaterra.work"
  },
  map: {
    title: "Dove Siamo",
    coordinates: {
      lat: 43.5267,
      lng: 10.6813,
      zoom: 10
    }
  }
};

// Hero cover per la pagina Contatti (PageTemplate/PageHero)
// Nota: usiamo un'immagine wide e ad alto contrasto per rendere bene soprattutto su mobile.
export const contactHero = {
  subtitle: contactInfo.subtitle,
  title: contactInfo.title,
  image:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2800&auto=format&fit=crop",
  parallaxSpeed: 0.5,
  description:
    "Richiedi un sopralluogo o un preventivo: rispondiamo rapidamente con una proposta chiara e operativa."
};

export const formConfig = {
  fields: [
    {
      id: "name",
      label: "Nome / Azienda",
      type: "text",
      required: true
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true
    },
    {
      id: "details",
      label: "Dettagli Progetto",
      type: "text",
      required: true
    }
  ],
  submitButton: {
    text: "INVIA RICHIESTA"
  }
};
