# WordPress Integration - Servizi (Services List)

## 📋 Overview

La lista servizi è completamente **WordPress-ready** e supporta l'aggiunta, rimozione e personalizzazione dinamica dei servizi tramite Custom Post Type e ACF (Advanced Custom Fields).

---

## 🎯 Caratteristiche WordPress-Ready

### ✅ Numerazione Automatica
- **NON hardcoded** nel database
- Generata dinamicamente: `index + 1`
- Formato: `01`, `02`, `03`, ..., `10`, `11`
- **Aggiungere/rimuovere servizi:** la numerazione si adatta automaticamente

### ✅ Campi Personalizzabili
Ogni servizio ha i seguenti campi editabili da WordPress:
- **Titolo** (text)
- **Icona/Simbolo** (text) - es. "▧", "☰", "✕"
- **Immagine** (image URL)
- **Slug** (text) - generato automaticamente da WordPress

---

## 🔧 Setup WordPress

### 1. Custom Post Type: "Servizi"

```php
// functions.php

function register_servizi_post_type() {
  register_post_type('servizi', [
    'labels' => [
      'name' => 'Servizi',
      'singular_name' => 'Servizio'
    ],
    'public' => true,
    'has_archive' => true,
    'show_in_rest' => true,
    'menu_icon' => 'dashicons-hammer',
    'supports' => ['title', 'thumbnail'],
    'rewrite' => ['slug' => 'servizi']
  ]);
}
add_action('init', 'register_servizi_post_type');
```

---

### 2. ACF Fields (Advanced Custom Fields)

**Field Group:** `Servizio Details`  
**Location:** Post Type = `servizi`

| Field Label | Field Name | Field Type | Instructions |
|------------|------------|------------|--------------|
| Simbolo/Icona | `symbol` | Text | Es. ▧, ☰, ✕, ↟, ≈, ◉ |
| Immagine Servizio | `service_image` | Image | Dimensioni consigliate: 1200x800px |

---

### 3. REST API Endpoint

WordPress esporrà automaticamente i servizi via REST API:

```
GET /wp-json/wp/v2/servizi
```

**Risposta esempio:**
```json
[
  {
    "id": 123,
    "title": { "rendered": "Movimento terra / Sbancamenti" },
    "slug": "movimento-terra",
    "acf": {
      "symbol": "▧",
      "service_image": "https://example.com/wp-content/uploads/2025/servizio-1.jpg"
    }
  },
  {
    "id": 124,
    "title": { "rendered": "Realizzazione strade e piazzali" },
    "slug": "strade-piazzali",
    "acf": {
      "symbol": "☰",
      "service_image": "https://example.com/wp-content/uploads/2025/servizio-2.jpg"
    }
  }
]
```

---

## 🔄 Integrazione Astro → WordPress

### Opzione 1: Build-time (SSG)

Modifica `src/data/servicesData.ts` per fetchare da WordPress durante il build:

```typescript
// src/data/servicesData.ts

export async function fetchServicesFromWordPress() {
  const response = await fetch('https://your-wp-site.com/wp-json/wp/v2/servizi?_embed');
  const data = await response.json();
  
  return data.map((service: any) => ({
    id: service.slug,
    symbol: service.acf.symbol,
    title: service.title.rendered,
    slug: `/servizi/${service.slug}`,
    image: service.acf.service_image
  }));
}

// Usa in getStaticPaths() o direttamente nel componente
export const servicesList = await fetchServicesFromWordPress();
```

### Opzione 2: Client-side (Hybrid)

Carica i servizi dinamicamente lato client per aggiornamenti in tempo reale.

---

## ✏️ Come Aggiungere/Rimuovere Servizi

### Da WordPress (Futuro):
1. **Aggiungere:** WordPress → Servizi → Aggiungi Nuovo
   - Inserisci titolo, simbolo, immagine
   - Pubblica
   - **Numerazione:** si adatta automaticamente!

2. **Rimuovere:** WordPress → Servizi → Sposta nel cestino
   - **Numerazione:** si adatta automaticamente!

3. **Riordinare:** Usa plugin come "Simple Custom Post Order"
   - Trascina e rilascia per cambiare ordine
   - **Numerazione:** si adatta automaticamente!

### Attualmente (Manuale):
Modifica `src/data/servicesData.ts`:

```typescript
export const servicesList: Service[] = [
  {
    id: "nuovo-servizio",
    symbol: "★",
    title: "Nuovo Servizio",
    slug: "/servizi/nuovo-servizio",
    image: "https://..."
  },
  // ... altri servizi
];
```

La numerazione (`01`, `02`, `03`...) viene generata automaticamente in `ServicesList.astro`:
```astro
{String(index + 1).padStart(2, '0')}
```

---

## 🎨 Personalizzazioni da WordPress

### Campi Editabili:
| Campo | Dove si modifica | Note |
|-------|------------------|------|
| **Titolo** | Campo titolo WordPress | Es. "Movimento terra / Sbancamenti" |
| **Simbolo** | ACF field `symbol` | Simbolo Unicode, es. ▧, ☰, ✕ |
| **Immagine** | ACF field `service_image` | 1200x800px, formato JPG/PNG |
| **Slug** | Permalink WordPress | Auto-generato dal titolo |

### Campi NON Editabili (Auto-generati):
| Campo | Come viene generato |
|-------|---------------------|
| **Numero** (01, 02...) | Automatico da ordine lista |

---

## 📌 Note per il Cliente

1. **Ordine servizi:** Determina la numerazione (01, 02, 03...)
2. **Simboli consigliati:** ▧ ☰ ✕ ↟ ≈ ◉ ⬢ ▣ ⬡ ⟁
3. **Immagini:** Usa foto luminose e colorate (no filtri, si vedono brillanti)
4. **SEO:** Il titolo diventa l'H3 nella card

---

## ✅ Vantaggi

- ✅ **Zero hardcoding:** nessun numero fisso nel codice
- ✅ **Scalabile:** aggiungi 10, 20, 100 servizi
- ✅ **Automatico:** numerazione sempre corretta
- ✅ **WordPress-friendly:** interfaccia familiare per il cliente
- ✅ **Performance:** lazy loading immagini

---

## 🚀 Deploy Workflow

1. Cliente aggiunge/modifica servizio su WordPress
2. Webhook/Cron triggera rebuild Astro
3. Astro fetcha nuovi dati da WP REST API
4. Build statico aggiornato
5. Deploy su hosting (Vercel/Netlify/ecc.)

---

**📝 Documento creato:** 21/12/2025  
**🔄 Ultimo aggiornamento:** 21/12/2025



