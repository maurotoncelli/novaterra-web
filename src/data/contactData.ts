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
      zoom: 13
    }
  }
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
