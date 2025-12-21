# 📰 WordPress Blog Integration Guide

## Overview
Questa guida illustra come integrare il Blog di Novaterra con WordPress come CMS, consentendo al cliente di gestire articoli, categorie e contenuti dinamicamente.

---

## 🎯 Obiettivi

1. **Gestione Articoli**: Pubblicare/modificare articoli da WordPress Admin
2. **Categorie Filtrabili**: 4 categorie (Incentivi, Case Study, Eventi, Curiosità)
3. **Ordinamento Automatico**: Articoli ordinati per data (più recenti prima)
4. **Featured Image**: Ogni articolo ha un'immagine di copertina
5. **Contenuto Ricco**: Paragrafi, sottotitoli (H2), liste, immagini inline
6. **SEO-Ready**: Meta description, slug, data pubblicazione

---

## 📦 WordPress Setup

### 1. Custom Post Type "Articoli Blog"

**File:** `functions.php` (o plugin custom)

```php
function novaterra_register_blog_post_type() {
    register_post_type('blog_articles', array(
        'labels' => array(
            'name' => 'Articoli Blog',
            'singular_name' => 'Articolo',
            'add_new_item' => 'Aggiungi Nuovo Articolo',
            'edit_item' => 'Modifica Articolo',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // Per REST API
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'taxonomies' => array('blog_category'),
        'menu_icon' => 'dashicons-media-document',
    ));
}
add_action('init', 'novaterra_register_blog_post_type');
```

### 2. Custom Taxonomy "Categorie Blog"

```php
function novaterra_register_blog_taxonomy() {
    register_taxonomy('blog_category', 'blog_articles', array(
        'labels' => array(
            'name' => 'Categorie Blog',
            'singular_name' => 'Categoria',
        ),
        'hierarchical' => true, // Come le categorie standard
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'blog-categoria'),
    ));
    
    // Crea le 4 categorie predefinite se non esistono
    if (!term_exists('Incentivi', 'blog_category')) {
        wp_insert_term('Incentivi', 'blog_category', array('slug' => 'incentivi'));
    }
    if (!term_exists('Case Study', 'blog_category')) {
        wp_insert_term('Case Study', 'blog_category', array('slug' => 'case-study'));
    }
    if (!term_exists('Eventi', 'blog_category')) {
        wp_insert_term('Eventi', 'blog_category', array('slug' => 'eventi'));
    }
    if (!term_exists('Curiosità', 'blog_category')) {
        wp_insert_term('Curiosità', 'blog_category', array('slug' => 'curiosita'));
    }
}
add_action('init', 'novaterra_register_blog_taxonomy');
```

### 3. ACF Fields (Advanced Custom Fields)

**Field Group:** "Dettagli Articolo Blog"  
**Applicato a:** Post Type = `blog_articles`

```
- read_time (Number)
  Label: "Tempo di Lettura (minuti)"
  Type: Number
  Default: 5
  
- hero_subtitle (Text)
  Label: "Sottotitolo Hero"
  Type: Text
  Placeholder: "Normative"
  
- hero_title_accent (Text)
  Label: "Parola Accent nel Titolo"
  Type: Text
  Placeholder: "2025"
  Instructions: "Questa parte sarà colorata in arancione"
```

**Nota:** Il contenuto dell'articolo (paragrafi, H2, liste, immagini) viene gestito tramite l'editor nativo di WordPress (Gutenberg o Classic Editor).

---

## 🔌 REST API Integration

### Endpoint WordPress

```
GET https://tuosito.com/wp-json/wp/v2/blog_articles?_embed&per_page=100&orderby=date&order=desc
```

**Response:**
```json
[
  {
    "id": 123,
    "slug": "ristrutturazioni-2025-detrazioni-movimento-terra",
    "title": {
      "rendered": "Ristrutturazioni 2025: le detrazioni per il movimento terra."
    },
    "excerpt": {
      "rendered": "<p>Con le novità fiscali...</p>"
    },
    "date": "2025-01-15T10:00:00",
    "blog_category": [1], // ID categoria
    "acf": {
      "read_time": 5,
      "hero_subtitle": "Normative",
      "hero_title_accent": "2025"
    },
    "_embedded": {
      "wp:featuredmedia": [{
        "source_url": "https://..."
      }],
      "wp:term": [[{
        "id": 1,
        "name": "Incentivi",
        "slug": "incentivi"
      }]]
    }
  }
]
```

### Astro Integration (Update `blogRepository.ts`)

```typescript
// src/lib/blogRepository.ts

const WP_API_URL = import.meta.env.WP_API_URL || 'https://tuosito.com/wp-json/wp/v2';

export async function getAllPostsFromWordPress(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/blog_articles?_embed&per_page=100&orderby=date&order=desc`);
    
    if (!res.ok) throw new Error('Failed to fetch posts');
    
    const wpPosts = await res.json();
    
    return wpPosts.map(post => ({
      id: post.id.toString(),
      slug: post.slug,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML
      date: post.date.split('T')[0], // ISO date
      category: post._embedded['wp:term']?.[0]?.[0]?.slug || 'tutti',
      thumbnail: post._embedded['wp:featuredmedia']?.[0]?.source_url,
      author: post._embedded.author?.[0]?.name,
      readTime: post.acf?.read_time || 5,
    }));
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return []; // Fallback ai dati statici
  }
}

// Usa WordPress in produzione, dati statici in dev
export function getAllPosts(): BlogPost[] {
  if (import.meta.env.PROD) {
    return await getAllPostsFromWordPress();
  }
  return sortPostsByDate(blogPosts); // Mock data
}
```

### Environment Variables

**`.env`:**
```bash
WP_API_URL=https://novaterra.work/wp-json/wp/v2
```

---

## 🎨 Contenuto Articolo (WordPress Editor)

### Struttura Consigliata

```
[Paragrafo introduttivo]

## Sottotitolo 1 (H2)
[Testo paragrafo]

[Immagine inline]

## Sottotitolo 2 (H2)
[Testo con lista bullet]
- Punto 1
- Punto 2
- Punto 3

[Immagine inline]

[Paragrafo conclusivo]
```

**Nota:** L'editor Gutenberg permette di inserire blocchi "Immagine", "Paragrafo", "Titolo", "Lista" facilmente.

---

## 🚀 Workflow Utente WordPress

### Pubblicare un Nuovo Articolo

1. **WordPress Admin** → "Articoli Blog" → "Aggiungi Nuovo"
2. **Compila Campi:**
   - **Titolo**: "Ristrutturazioni 2025: le detrazioni per il movimento terra"
   - **Slug**: Auto-generato o manuale (`ristrutturazioni-2025-detrazioni-movimento-terra`)
   - **Excerpt**: Testo anteprima (max 2-3 righe)
   - **Categoria**: Seleziona "Incentivi" (o altra)
   - **Featured Image**: Upload immagine hero (16:9, min 1920x1080px)
   - **Contenuto**: Scrivi articolo con editor Gutenberg
     - Paragrafo intro
     - H2 per sottotitoli
     - Liste bullet
     - Immagini inline
   - **ACF Fields:**
     - Tempo di Lettura: `5` (minuti)
     - Sottotitolo Hero: `Normative`
     - Parola Accent: `2025`
3. **Pubblica** o **Salva Bozza**
4. **Deploy Trigger**: Webhook → Rebuild Astro (Netlify/Vercel)
5. **Articolo Live** su `https://novaterra.work/blog/ristrutturazioni-2025-detrazioni-movimento-terra`

---

## 🔄 Deploy Automation

### Vercel (Consigliato)

**Deploy Hook:**
```bash
https://api.vercel.com/v1/integrations/deploy/XXXXX
```

**WordPress Plugin:**  
Installa **"Deploy Webhook Button"** o **"WP Webhooks"**.

**Configurazione:**
1. Aggiungi deploy hook URL
2. Trigger: "On Post Publish" + "On Post Update"
3. Post Type: `blog_articles`

**Risultato:** Ogni volta che pubblichi/aggiorni un articolo, il sito Astro si rebuilda automaticamente e mostra il nuovo contenuto.

---

## 📊 Mapping Completo

| WordPress Field | Astro Data | Tipo |
|----------------|------------|------|
| `post_title` | `post.title` | String |
| `post_name` | `post.slug` | String |
| `post_excerpt` | `post.excerpt` | String |
| `post_date` | `post.date` | ISO Date |
| `post_content` | `article.content` | HTML |
| `featured_media` | `article.hero.image` | Image URL |
| `blog_category` | `post.category` | Slug |
| `acf.read_time` | `post.readTime` | Number |
| `acf.hero_subtitle` | `article.hero.subtitle` | String |
| `acf.hero_title_accent` | `article.hero.title.accent` | String |

---

## ✅ Testing Checklist

- [ ] Pubblica articolo test su WordPress
- [ ] Verifica API REST endpoint (`/wp-json/wp/v2/blog_articles`)
- [ ] Controlla Featured Image in response (`_embedded`)
- [ ] Testa filtro categorie su `/blog`
- [ ] Verifica slug URL (`/blog/slug-articolo`)
- [ ] Controlla ordinamento per data (DESC)
- [ ] Testa webhook deploy (Vercel/Netlify)
- [ ] Verifica SEO meta tags (title, description)

---

## 🛠️ Tools & Plugins Consigliati

1. **Advanced Custom Fields (ACF)** - Per campi personalizzati
2. **Yoast SEO** - Per meta description, focus keyword
3. **Deploy Webhook Button** - Per trigger rebuild automatico
4. **Classic Editor** (opzionale) - Se preferisci editor classico a Gutenberg
5. **Smush** - Per ottimizzare immagini automaticamente

---

## 📞 Support

Per domande tecniche sull'integrazione WordPress:
- **WordPress REST API Docs**: https://developer.wordpress.org/rest-api/
- **Astro SSG Docs**: https://docs.astro.build/en/guides/data-fetching/
- **ACF Docs**: https://www.advancedcustomfields.com/resources/

---

**✨ Con questa configurazione, il cliente può gestire TUTTO il blog da WordPress senza toccare mai il codice Astro!**



