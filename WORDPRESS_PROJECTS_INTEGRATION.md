# 🏗️ WordPress Projects Integration Guide

## Overview
Questa guida illustra come integrare la sezione Realizzazioni/Progetti di Novaterra con WordPress come CMS, consentendo al cliente di gestire progetti, categorie e video drone dinamicamente.

---

## 🎯 Obiettivi

1. **Gestione Progetti**: Pubblicare/modificare progetti da WordPress Admin
2. **Categorie Filtrabili**: 7 categorie (6 servizi + altro)
3. **Ordinamento Automatico**: Progetti ordinati per anno (più recenti prima)
4. **Hero Image + Thumbnail**: Ogni progetto ha 2 immagini
5. **Galleria Completa**: Gallery con lightbox
6. **Video Drone SEMPRE**: Campo obbligatorio per video cantiere
7. **SEO-Ready**: Meta description, slug, anno

---

## 📦 WordPress Setup

### 1. Custom Post Type "Progetti"

**File:** `functions.php` (o plugin custom)

```php
function novaterra_register_projects_post_type() {
    register_post_type('projects', array(
        'labels' => array(
            'name' => 'Progetti',
            'singular_name' => 'Progetto',
            'add_new_item' => 'Aggiungi Nuovo Progetto',
            'edit_item' => 'Modifica Progetto',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true, // Per REST API
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'taxonomies' => array('project_category'),
        'menu_icon' => 'dashicons-hammer',
    ));
}
add_action('init', 'novaterra_register_projects_post_type');
```

### 2. Custom Taxonomy "Categorie Progetto"

```php
function novaterra_register_project_taxonomy() {
    register_taxonomy('project_category', 'projects', array(
        'labels' => array(
            'name' => 'Categorie Progetto',
            'singular_name' => 'Categoria',
        ),
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'progetto-categoria'),
    ));
    
    // Crea le 7 categorie predefinite (basate sui 6 servizi + altro)
    $categories = array(
        'Movimento Terra e Sbancamenti' => 'movimento-terra',
        'Strade e Piazzali' => 'strade-piazzali',
        'Demolizioni' => 'demolizioni',
        'Sistemazioni Forestali' => 'forestale',
        'Consolidamenti Idrogeologici' => 'idrogeologico',
        'Bacini e Laghi Artificiali' => 'bacini',
        'Altri Progetti' => 'altro',
    );
    
    foreach ($categories as $name => $slug) {
        if (!term_exists($name, 'project_category')) {
            wp_insert_term($name, 'project_category', array('slug' => $slug));
        }
    }
}
add_action('init', 'novaterra_register_project_taxonomy');
```

### 3. ACF Fields (Advanced Custom Fields)

**Field Group:** "Dettagli Progetto"  
**Applicato a:** Post Type = `projects`

```
=== TAB: Hero ===

- hero_image (Image)
  Label: "Immagine Hero (Fullscreen)"
  Type: Image
  Return: URL
  Instructions: "Immagine grande per la pagina singola (min 2700x1800px)"

- hero_title_main (Text)
  Label: "Titolo Hero - Parte Principale"
  Type: Text
  Placeholder: "IL POGGIO"

- hero_title_accent (Text)
  Label: "Titolo Hero - Parte Accent (arancione)"
  Type: Text
  Placeholder: "RESIDENZA"

- hero_subtitle (Text)
  Label: "Sottotitolo Hero"
  Type: Text
  Default: "Case Study"

=== TAB: Specifiche ===

- client (Text)
  Label: "Cliente"
  Type: Text
  Placeholder: "Privato / Azienda Agricola / Comune"
  Required: Yes

- location (Text)
  Label: "Luogo"
  Type: Text
  Placeholder: "Terricciola (PI)"
  Required: Yes

- year (Number)
  Label: "Anno"
  Type: Number
  Default: 2024
  Required: Yes

- service_type (Text)
  Label: "Tipo di Servizio"
  Type: Text
  Placeholder: "Scavi e Sbancamenti"
  Required: Yes

=== TAB: Descrizione Progetto ===

- challenge_title (Text)
  Label: "Titolo Sfida"
  Type: Text
  Default: "La Sfida"

- challenge_description (Textarea)
  Label: "Descrizione Sfida"
  Type: Textarea
  Rows: 4
  Required: Yes
  Instructions: "Descrivi il problema/sfida del progetto"

- solution_description (Textarea)
  Label: "Descrizione Soluzione"
  Type: Textarea
  Rows: 6
  Required: Yes
  Instructions: "Descrivi come avete risolto la sfida"

=== TAB: Rilievo Topografico (Opzionale) ===

- topographic_enable (True/False)
  Label: "Mostra Rilievo Topografico"
  Type: True/False
  Default: No

- topographic_title (Text)
  Label: "Titolo Sezione"
  Type: Text
  Default: "Rilievo Topografico"
  Conditional: topographic_enable == true

- topographic_image (Image)
  Label: "Immagine Rilievo"
  Type: Image
  Return: URL
  Instructions: "Immagine tecnica/mappa (min 2000x1000px)"
  Conditional: topographic_enable == true

- topographic_data (Text)
  Label: "Dati Tecnici (readout)"
  Type: Text
  Placeholder: "ELEV: 145m // SLOPE: 30% // SOIL: CLAY"
  Instructions: "Dati tecnici visualizzati sull'immagine"
  Conditional: topographic_enable == true

=== TAB: Galleria ===

- gallery (Gallery)
  Label: "Galleria Immagini Progetto"
  Type: Gallery
  Return: Array
  Min: 2
  Max: 8
  Instructions: "Carica 2-8 foto del cantiere (min 1200x800px)"

=== TAB: Video Cantiere ===

- video_type (Select)
  Label: "Tipo Video"
  Type: Select
  Choices: 
    - youtube: "YouTube"
    - vimeo: "Vimeo"
    - mp4: "Link Diretto MP4"
  Default: vimeo
  Required: Yes

- video_url (URL)
  Label: "URL Video"
  Type: URL
  Required: Yes
  Instructions: "Link completo al video drone"

- video_thumbnail (Image)
  Label: "Thumbnail Video (opzionale)"
  Type: Image
  Return: URL
  Instructions: "Se vuoto, usa l'immagine hero"

- video_title (Text)
  Label: "Titolo Sezione Video"
  Type: Text
  Default: "Video Cantiere"
```

---

## 🔌 REST API Integration

### Endpoint WordPress

```
GET https://tuosito.com/wp-json/wp/v2/projects?_embed&per_page=100&orderby=date&order=desc
```

**Response:**
```json
[
  {
    "id": 123,
    "slug": "nuova-residenza-il-poggio",
    "title": {
      "rendered": "Nuova Residenza 'Il Poggio'"
    },
    "excerpt": {
      "rendered": "<p>Scavo di fondazione complesso...</p>"
    },
    "project_category": [1],
    "acf": {
      "hero_image": "https://...",
      "hero_title_main": "IL POGGIO",
      "hero_title_accent": "RESIDENZA",
      "hero_subtitle": "Case Study",
      "client": "Privato",
      "location": "Terricciola (PI)",
      "year": 2024,
      "service_type": "Scavi e Sbancamenti",
      "challenge_title": "La Sfida",
      "challenge_description": "Realizzare uno scavo...",
      "solution_description": "Abbiamo operato...",
      "topographic_enable": true,
      "topographic_title": "Rilievo Topografico",
      "topographic_image": "https://...",
      "topographic_data": "ELEV: 145m // SLOPE: 30%",
      "gallery": [
        {"url": "https://...", "alt": "..."},
        {"url": "https://...", "alt": "..."}
      ],
      "video_type": "vimeo",
      "video_url": "https://vimeo.com/...",
      "video_thumbnail": "https://...",
      "video_title": "Video Cantiere"
    },
    "_embedded": {
      "wp:featuredmedia": [{
        "source_url": "https://..." // Thumbnail per lista
      }],
      "wp:term": [[{
        "id": 1,
        "name": "Movimento Terra e Sbancamenti",
        "slug": "movimento-terra"
      }]]
    }
  }
]
```

### Astro Integration (Update `projectsRepository.ts`)

```typescript
// src/lib/projectsRepository.ts

const WP_API_URL = import.meta.env.WP_API_URL || 'https://tuosito.com/wp-json/wp/v2';

export async function getAllProjectsFromWordPress(): Promise<Project[]> {
  try {
    const res = await fetch(`${WP_API_URL}/projects?_embed&per_page=100&orderby=date&order=desc`);
    
    if (!res.ok) throw new Error('Failed to fetch projects');
    
    const wpProjects = await res.json();
    
    return wpProjects.map(proj => ({
      id: proj.id.toString(),
      slug: proj.slug,
      title: proj.title.rendered,
      excerpt: proj.excerpt.rendered.replace(/<[^>]*>/g, ''),
      thumbnail: proj._embedded['wp:featuredmedia']?.[0]?.source_url,
      year: proj.acf?.year?.toString() || new Date().getFullYear().toString(),
      category: proj._embedded['wp:term']?.[0]?.[0]?.slug || 'altro',
      
      hero: {
        title: {
          main: proj.acf?.hero_title_main || '',
          accent: proj.acf?.hero_title_accent || ''
        },
        subtitle: proj.acf?.hero_subtitle || 'Case Study',
        image: proj.acf?.hero_image || proj._embedded['wp:featuredmedia']?.[0]?.source_url
      },
      
      specs: {
        client: proj.acf?.client || '',
        location: proj.acf?.location || '',
        year: proj.acf?.year?.toString() || '',
        service: proj.acf?.service_type || ''
      },
      
      challenge: {
        title: proj.acf?.challenge_title || 'La Sfida',
        description: proj.acf?.challenge_description || ''
      },
      
      solution: {
        description: proj.acf?.solution_description || ''
      },
      
      topographic: proj.acf?.topographic_enable ? {
        title: proj.acf?.topographic_title || 'Rilievo Topografico',
        image: proj.acf?.topographic_image || '',
        dataReadout: proj.acf?.topographic_data
      } : undefined,
      
      gallery: proj.acf?.gallery?.map((img: any) => ({
        src: img.url,
        alt: img.alt || proj.title.rendered
      })) || [],
      
      video: {
        type: proj.acf?.video_type || 'mp4',
        url: proj.acf?.video_url || '',
        thumbnail: proj.acf?.video_thumbnail || proj.acf?.hero_image,
        title: proj.acf?.video_title || 'Video Cantiere'
      }
    }));
  } catch (error) {
    console.error('Error fetching WordPress projects:', error);
    return []; // Fallback ai dati statici
  }
}

// Usa WordPress in produzione, dati statici in dev
export function getAllProjects(): Project[] {
  if (import.meta.env.PROD) {
    return await getAllProjectsFromWordPress();
  }
  return sortProjectsByYear(projects); // Mock data
}
```

### Environment Variables

**`.env`:**
```bash
WP_API_URL=https://novaterra.work/wp-json/wp/v2
```

---

## 🚀 Workflow Utente WordPress

### Pubblicare un Nuovo Progetto

1. **WordPress Admin** → "Progetti" → "Aggiungi Nuovo"

2. **TAB: Generale**
   - **Titolo**: "Nuova Residenza 'Il Poggio'"
   - **Slug**: Auto-generato (`nuova-residenza-il-poggio`)
   - **Excerpt**: Testo anteprima (2-3 righe)
   - **Categoria**: Seleziona "Movimento Terra e Sbancamenti"
   - **Featured Image**: Upload thumbnail per lista (1200x800px)

3. **TAB: Hero**
   - **Immagine Hero**: Upload foto fullscreen (2700x1800px)
   - **Titolo Main**: "IL POGGIO"
   - **Titolo Accent**: "RESIDENZA"
   - **Subtitle**: "Case Study"

4. **TAB: Specifiche**
   - **Cliente**: "Privato"
   - **Luogo**: "Terricciola (PI)"
   - **Anno**: 2024
   - **Tipo Servizio**: "Scavi e Sbancamenti"

5. **TAB: Descrizione Progetto**
   - **Titolo Sfida**: "La Sfida"
   - **Descrizione Sfida**: Scrivi il problema
   - **Descrizione Soluzione**: Scrivi come l'avete risolto

6. **TAB: Rilievo Topografico**
   - **Abilita**: ☑️ Sì (opzionale)
   - **Immagine**: Upload mappa/foto tecnica
   - **Dati**: "ELEV: 145m // SLOPE: 30% // SOIL: CLAY"

7. **TAB: Galleria**
   - Upload 2-8 foto del cantiere

8. **TAB: Video Cantiere**
   - **Tipo**: Seleziona "Vimeo" (o YouTube/MP4)
   - **URL**: Incolla link video drone
   - **Thumbnail**: Upload (opzionale)

9. **Pubblica** o **Salva Bozza**

10. **Deploy Trigger**: Webhook → Rebuild Astro (Vercel/Netlify)

11. **Progetto LIVE** su `https://novaterra.work/realizzazioni/nuova-residenza-il-poggio`

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
3. Post Type: `projects`

**Risultato:** Ogni volta che pubblichi/aggiorni un progetto, il sito Astro si rebuilda automaticamente.

---

## 📊 Mapping Completo

| WordPress Field | Astro Data | Tipo |
|----------------|------------|------|
| `post_title` | `project.title` | String |
| `post_name` | `project.slug` | String |
| `post_excerpt` | `project.excerpt` | String |
| `featured_media` | `project.thumbnail` | Image URL |
| `project_category` | `project.category` | Slug |
| `acf.hero_image` | `project.hero.image` | Image URL |
| `acf.hero_title_main` | `project.hero.title.main` | String |
| `acf.hero_title_accent` | `project.hero.title.accent` | String |
| `acf.client` | `project.specs.client` | String |
| `acf.location` | `project.specs.location` | String |
| `acf.year` | `project.specs.year` | Number |
| `acf.service_type` | `project.specs.service` | String |
| `acf.challenge_description` | `project.challenge.description` | Text |
| `acf.solution_description` | `project.solution.description` | Text |
| `acf.topographic_image` | `project.topographic.image` | Image URL |
| `acf.gallery` | `project.gallery[]` | Array |
| `acf.video_url` | `project.video.url` | String |

---

## ✅ Testing Checklist

- [ ] Pubblica progetto test su WordPress
- [ ] Verifica API REST endpoint (`/wp-json/wp/v2/projects`)
- [ ] Controlla Hero Image + Thumbnail in response
- [ ] Testa filtro categorie su `/realizzazioni`
- [ ] Verifica slug URL (`/realizzazioni/slug-progetto`)
- [ ] Controlla ordinamento per anno (DESC)
- [ ] Testa gallery + lightbox
- [ ] Testa video drone embed
- [ ] Verifica webhook deploy (Vercel/Netlify)
- [ ] Controlla SEO meta tags

---

## 🛠️ Tools & Plugins Consigliati

1. **Advanced Custom Fields (ACF Pro)** - Per gallery field e campi complessi
2. **Yoast SEO** - Per meta description
3. **Deploy Webhook Button** - Per trigger rebuild automatico
4. **Smush** - Per ottimizzare immagini automaticamente
5. **Enable Media Replace** - Per sostituire facilmente immagini

---

## 📞 Support

Per domande tecniche sull'integrazione WordPress:
- **WordPress REST API Docs**: https://developer.wordpress.org/rest-api/
- **Astro SSG Docs**: https://docs.astro.build/en/guides/data-fetching/
- **ACF Gallery Docs**: https://www.advancedcustomfields.com/resources/gallery/

---

**✨ Con questa configurazione, il cliente può gestire TUTTI i progetti da WordPress senza toccare mai il codice Astro, caricando video drone e gallerie facilmente!**



