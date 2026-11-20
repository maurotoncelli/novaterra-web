export const contactEn = {
  meta: {
    title: "Contact | Novaterra — Earth Engineering",
    description: "Contact NOVATERRA for quotes and advice. Riccardo Toncelli, earthworks in Tuscany.",
  },
  hero: {
    subtitle: "Let’s talk",
    title: { main: "START THE", accent: "PROJECT" },
    description: "Ask for a site visit or a quote: we reply quickly with a clear, practical proposal.",
  },
  infoKicker: "Information",
  infoTitle: "We talk. Then we start.",
  formKicker: "Enquiry",
  formTitle: "Tell us about the project.",
  formLead: "Fill in the form: we reply quickly with a clear, practical proposal.",
  mapTitle: "Where we are",
  owner: "Riccardo Toncelli",
  fields: [
    { id: "name", label: "Name / Company", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "details", label: "Project details", type: "text", required: true },
  ],
  submit: "SEND ENQUIRY",
};

export const privacyEn = {
  meta: {
    title: "Privacy Policy | Novaterra",
    description:
      "Privacy notice: how data collected through the site, the contact form and analytics tools is handled.",
  },
  hero: {
    subtitle: "Notice",
    title: { main: "PRIVACY", accent: "POLICY" },
    description: "How we handle personal data, enquiries from the site, and measurement tools such as Google Analytics.",
  },
  sections: [
    {
      title: "Data controller",
      paragraphs: [
        "The data controller is Novaterra (Riccardo Toncelli).",
        "For privacy requests you can write to the email address shown on the Contact page.",
      ],
    },
    {
      title: "What we collect",
      paragraphs: [
        "Data you choose to send through the contact form (for example name/company, email, project details).",
        "Technical browsing data (for example an anonymised or aggregated IP address, device and browser information), used to keep the site secure and to improve it.",
      ],
    },
    {
      title: "Why we use it",
      paragraphs: [
        "To handle and answer requests sent through the contact form.",
        "To measure and improve how the site performs (aggregated statistics).",
        "To send informational or marketing messages only if you ask for them or consent (for example updates and news).",
      ],
    },
    {
      title: "Google Analytics",
      paragraphs: [
        "This site may use Google Analytics (GA4) to collect aggregated statistics on how the site is used (pages visited, time on page, source).",
        "When it is active, tracking is set up to minimise personal data and is not used to resell data to third parties.",
      ],
    },
    {
      title: "Retention and sharing",
      paragraphs: [
        "We keep data for as long as needed to handle the request and to meet applicable legal duties.",
        "We do not sell or transfer personal data to third parties. Data may be shared only with technical suppliers strictly needed to run the site and the services (for example hosting and analytics), in line with the law.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You can ask for access, correction, deletion, restriction or objection to the processing of your data, within the limits set by law.",
        "To exercise those rights, contact us using the details on the Contact page.",
      ],
    },
  ],
};
