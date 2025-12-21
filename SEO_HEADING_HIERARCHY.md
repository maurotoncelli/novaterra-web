# 📊 SEO HEADING HIERARCHY - Novaterra

## Struttura Semantica Corretta per Google & Accessibilità

### ✅ REGOLA GENERALE
- **1 solo H1 per pagina** (titolo principale)
- H2 per sezioni principali
- H3 per sotto-sezioni
- H4+ per dettagli minori

---

## 📄 HOMEPAGE (`/`)
```
H1: "INGEGNERIA DEL PAESAGGIO" (hero title)
  H2: "Chi Siamo" (intro section)
  H2: "Cosa Facciamo" (services section)
  H2: "Il Metodo" (method section)
  H2: "Aspettative" (expectations section)
```

---

## 📄 CHI SIAMO (`/chi-siamo`)
```
H1: "RADICI PROFONDE. VISIONE MODERNA." (hero title)
  H2: "Riccardo Toncelli, Direttore Tecnico" (bio section)
  H2: "Il nostro metodo in azione" (video section)
  H2: "EVOLUZIONE TEMPORALE" (timeline section)
```

---

## 📄 SERVIZI LISTA (`/servizi`)
```
H1: "SOLUZIONI COMPLETE." (hero title)
  H2: "Ingegneria del Paesaggio" (intro section)
```

---

## 📄 SERVIZIO SINGOLO (`/servizi/[slug]`)
```
H1: "MOVIMENTO TERRA E SBANCAMENTI" (hero title) ✅ UNICO H1
  H2: "Interventi Tipici" (info card)
  H2: "Galleria Lavori" (gallery section)
  H2: "Video Presentazione" (video section - se presente)
```

---

## 📄 CONTATTI (`/contatti`)
```
H1: "RICHIEDI UN PREVENTIVO." (hero title)
  H2: "Dove Trovarci" (map section)
```

---

## 🎯 PERCHÉ QUESTA STRUTTURA?

### ✅ Vantaggi SEO:
1. **Google capisce la gerarchia** del contenuto
2. **Featured snippets** più probabili
3. **Rich results** migliori (breadcrumbs, FAQ, etc.)
4. **Crawlability** ottimizzata

### ✅ Vantaggi Accessibilità:
1. **Screen readers** navigano meglio
2. **Keyboard navigation** più fluida
3. **WCAG 2.1 compliant** (standard accessibility)

### ✅ Vantaggi Utente:
1. **Scansionabilità** visiva migliorata
2. **Navigazione** più intuitiva
3. **Table of contents** auto-generabile

---

## ⚠️ ERRORI COMUNI DA EVITARE

❌ **Multiple H1 sulla stessa pagina**
```html
<!-- SBAGLIATO -->
<h1>Titolo Hero</h1>
<h1>Altra sezione</h1> ← NO!
```

❌ **Saltare livelli**
```html
<!-- SBAGLIATO -->
<h1>Titolo</h1>
<h3>Sezione</h3> ← Manca H2!
```

❌ **H1 per styling invece che semantica**
```html
<!-- SBAGLIATO -->
<h1 style="font-size:1rem;">Piccolo testo</h1>
<!-- Usa CSS per lo styling, non heading sbagliati -->
```

---

## 🛠️ IMPLEMENTAZIONE NEL NOSTRO SITO

### ServiceInfoCard.astro
```astro
<!-- Prop flessibile per heading level -->
<ServiceInfoCard 
  title="Interventi Tipici"
  headingLevel="h2"  ← Corretto per SEO
/>
```

### ServiceDetailHero.astro
```astro
<!-- H1 semantico nel hero -->
<h1 class="display-text">
  {title.main}<br>
  <span>{title.accent}</span>
</h1>
```

---

## 📱 RESPONSIVE CONSIDERATIONS

### Mobile:
- H1: `font-size: clamp(2rem, 8vw, 6rem)`
- H2: `font-size: clamp(1.5rem, 5vw, 3.5rem)`
- Leggibilità mantenuta su tutti i device

### Desktop:
- Font sizes più grandi
- Line-height ottimizzato per schermi larghi

---

## 🔍 TESTING SEO

### Tools Consigliati:
1. **Google Search Console** - Verifica crawl errors
2. **Lighthouse** (Chrome DevTools) - Accessibility score
3. **WAVE** - Web accessibility evaluation
4. **Screaming Frog** - SEO spider

### Checklist:
- [ ] 1 solo H1 per pagina
- [ ] Heading in ordine gerarchico
- [ ] Nessun salto di livello
- [ ] Testo descrittivo nei heading
- [ ] Keywords nei heading (naturali)

---

**Ultimo aggiornamento:** Dicembre 2024  
**Maintainer:** Novaterra Development Team



