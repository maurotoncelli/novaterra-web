# 🔌 WORDPRESS CMS INTEGRATION - Novaterra

## Guida Completa per Gestione Servizi da WordPress

---

## 🎯 OBIETTIVO

**Gestire i servizi dal pannello WordPress** senza toccare codice:
- Click "Aggiungi Servizio"
- Compila campi form
- Salva → Sito aggiornato automaticamente ✨

---

## 📦 PLUGIN WORDPRESS NECESSARI

### 1. Advanced Custom Fields (ACF) PRO
```
Plugin: ACF PRO
Costo: $49 USD (una tantum)
Perché: Gestione campi custom professionale
```

### 2. WP REST API (già incluso in WordPress)
```
Built-in: WordPress 4.7+
Endpoint: /wp-json/wp/v2/
```

---

## 🏗️ STRUTTURA ACF FIELDS

### **Custom Post Type: "Servizi"**

```php
// functions.php - Registra CPT
function novaterra_register_servizi_cpt() {
    register_post_type('servizi', [
        'label' => 'Servizi',
        'public' => true,
        'show_in_rest' => true,  // ← IMPORTANTE per REST API
        'supports' => ['title', 'thumbnail'],
        'menu_icon' => 'dashicons-hammer'
    ]);
}
add_action('init', 'novaterra_register_servizi_cpt');
```

### **ACF Field Groups**

#### **Group 1: Hero Section**
```
Campo: hero_subtitle
Tipo: Text
Label: "Sottotitolo (es: Servizio 01)"

Campo: hero_title_main
Tipo: Text
Label: "Titolo Principale"
Esempio: "MOVIMENTO TERRA"

Campo: hero_title_accent
Tipo: Text
Label: "Titolo Accent (arancione)"
Esempio: "E SBANCAMENTI"

Campo: hero_image
Tipo: Image
Label: "Immagine Hero (2700x1800px)"
```

#### **Group 2: Contenuto Testo**
```
Campo: intro_paragraph
Tipo: Textarea
Label: "Paragrafo Introduttivo (bold)"
Esempio: "La base di ogni costruzione solida..."

Campo: body_paragraph
Tipo: Textarea
Label: "Paragrafo Corpo (descrittivo)"
```

#### **Group 3: Info Card**
```
Campo: infocard_title
Tipo: Text
Label: "Titolo Card"
Esempio: "Interventi Tipici"

Campo: infocard_items
Tipo: Repeater
Label: "Lista Bullet Points"
  Sub-campo: item_text
  Tipo: Text
  Label: "Testo bullet"
```

#### **Group 4: Gallery**
```
Campo: gallery_title
Tipo: Text
Label: "Titolo Gallery"
Default: "Galleria Lavori"

Campo: gallery_images
Tipo: Gallery
Label: "Immagini Gallery (4-6 foto, 1200x800px)"
```

#### **Group 5: Video (Opzionale)**
```
Campo: video_title
Tipo: Text
Label: "Titolo Video"

Campo: video_embed_url
Tipo: URL
Label: "YouTube/Vimeo Embed URL"
Esempio: https://www.youtube.com/embed/VIDEO_ID

Campo: video_mp4_url
Tipo: File
Label: "Video MP4 (alternativo)"
```

#### **Group 6: CTA**
```
Campo: cta_text
Tipo: Text
Label: "Testo Pulsante CTA"
Default: "RICHIEDI UN PREVENTIVO"

Campo: cta_link
Tipo: URL
Label: "Link CTA"
Default: "/contatti"
```

---

## 🔌 INTEGRAZIONE ASTRO ↔ WORDPRESS

### **Opzione A: Build-Time (SSG) - CONSIGLIATA**

```typescript
// src/lib/servicesRepository.ts

import type { ServiceDetailContent } from '../data/servicesDetailData';

export async function getServiceBySlug(slug: string): Promise<ServiceDetailContent | undefined> {
  
  // Fetch da WordPress REST API
  const response = await fetch(
    `https://tuosito.com/wp-json/wp/v2/servizi?slug=${slug}&_embed&acf_format=standard`
  );
  
  const data = await response.json();
  
  if (!data || data.length === 0) return undefined;
  
  const service = data[0];
  const acf = service.acf;
  
  // Mappa campi WordPress → Interface Astro
  return {
    id: service.slug,
    slug: service.slug,
    serviceNumber: acf.hero_subtitle.split(' ')[1], // "Servizio 01" → "01"
    
    hero: {
      title: {
        main: acf.hero_title_main,
        accent: acf.hero_title_accent
      },
      subtitle: acf.hero_subtitle,
      image: acf.hero_image.url,
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: acf.intro_paragraph,
      bodyParagraph: acf.body_paragraph
    },
    
    infoCard: {
      title: acf.infocard_title,
      items: acf.infocard_items.map((item: any) => item.item_text)
    },
    
    gallery: {
      title: acf.gallery_title,
      images: acf.gallery_images.map((img: any) => ({
        src: img.url,
        alt: img.alt || img.title,
        width: img.width,
        height: img.height
      }))
    },
    
    video: acf.video_embed_url ? {
      title: acf.video_title,
      embedUrl: acf.video_embed_url,
      mp4Url: acf.video_mp4_url?.url
    } : undefined,
    
    cta: {
      text: acf.cta_text || "RICHIEDI UN PREVENTIVO",
      link: acf.cta_link || "/contatti"
    }
  };
}
```

### **Build Command**
```bash
# Fetch da WordPress durante build
npm run build

# Genera pagine statiche con contenuti WordPress
```

---

### **Opzione B: Runtime (SSR)**

```astro
---
// src/pages/servizi/[slug].astro

export const prerender = false; // SSR mode

import { getServiceBySlug } from '../../lib/servicesRepository';

const { slug } = Astro.params;
const service = await getServiceBySlug(slug!);
---

<!-- Contenuto aggiornato in tempo reale da WordPress -->
```

---

## 📋 WORKFLOW UTENTE FINALE

### **Scenario: Aggiungere Nuovo Servizio**

**Step 1: WordPress Admin**
```
1. Vai su "Servizi" → "Aggiungi Nuovo"
2. Titolo Servizio: "Movimento Terra"
3. Slug: "movimento-terra" (auto-generato)
4. Compila ACF Fields:
   - Hero Subtitle: "Servizio 01"
   - Hero Title Main: "MOVIMENTO TERRA"
   - Hero Title Accent: "E SBANCAMENTI"
   - Hero Image: Upload foto
   - Intro Paragraph: "La base di ogni costruzione..."
   - Body Paragraph: "Eseguiamo scavi..."
   - Info Card Items: + Aggiungi bullet (4-5 righe)
   - Gallery: Upload 4-6 foto
   - Video URL: (opzionale)
5. Click "Pubblica"
```

**Step 2: Rebuild Sito (automatico)**
```bash
# Webhook Netlify/Vercel trigger build
POST https://api.netlify.com/build_hooks/YOUR_HOOK_ID

# Sito ricostruito con nuovi contenuti
# Tempo: ~2-3 minuti
```

**Step 3: Live!**
```
URL attiva: https://tuosito.com/servizi/movimento-terra
SEO aggiornato automaticamente
Sitemap rigenerata
```

---

### **Scenario: Modificare Servizio Esistente**

```
1. Vai su "Servizi" → Trova servizio
2. Click "Modifica"
3. Cambia testo/immagini
4. Click "Aggiorna"
5. Rebuild automatico → Sito aggiornato
```

---

## 🚀 SETUP DEPLOYMENT AUTOMATICO

### **Netlify/Vercel Webhook**

```bash
# .env
WORDPRESS_API_URL=https://tuosito.com/wp-json/wp/v2
WEBHOOK_SECRET=your_secret_key

# WordPress Plugin: "Deploy Webhook"
# Trigger build automatico su Publish/Update
```

### **GitHub Actions (Alternativo)**

```yaml
# .github/workflows/wordpress-update.yml
name: Rebuild on WordPress Update

on:
  repository_dispatch:
    types: [wordpress-update]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/deploy@v1
```

---

## 📊 VANTAGGI ARCHITETTURA

✅ **Zero Codice per Contenuti**  
→ Utente finale gestisce tutto da WordPress

✅ **Type Safety**  
→ Interface TypeScript garantisce struttura dati

✅ **Performance**  
→ Static build = velocità massima

✅ **SEO Automatico**  
→ Meta tags generati da contenuti WordPress

✅ **Scalabilità**  
→ Aggiungi 50 servizi senza toccare codice

✅ **Backup & Versioning**  
→ WordPress gestisce revisioni contenuti

---

## 🎯 COSTO TOTALE SETUP

```
ACF PRO: $49 (una tantum)
Hosting WordPress: $5-20/mese
Dominio: $12/anno
Netlify/Vercel: Free tier OK

TOTALE INIZIALE: ~$80
RICORRENTE: $5-20/mese
```

---

## 🔍 TESTING

### **Verifica REST API WordPress**
```bash
# Test endpoint
curl https://tuosito.com/wp-json/wp/v2/servizi

# Con ACF
curl https://tuosito.com/wp-json/wp/v2/servizi?acf_format=standard
```

### **Verifica Build Astro**
```bash
npm run build
# Controlla /dist/servizi/[slug]/index.html
```

---

## 📚 RISORSE

- [ACF REST API Docs](https://www.advancedcustomfields.com/resources/rest-api/)
- [WordPress REST API](https://developer.wordpress.org/rest-api/)
- [Astro SSG](https://docs.astro.build/en/guides/content/)

---

**Ultimo aggiornamento:** Dicembre 2024  
**Maintainer:** Novaterra Development Team



