# 📐 GERARCHIA TITOLI - SEO & ACCESSIBILITÀ

## Struttura Semantica Corretta

### **H1 - Main Title (UNO per pagina)**
```astro
<h1 class="display-text">
  INIZIA IL<br>
  <i class="font-extralight text-white italic">PROGETTO</i>.
</h1>
```
- **Font size:** `clamp(3rem, 8vw, 6rem)` → 48px-96px
- **Font weight:** 700 (bold)
- **Line height:** 1
- **Usage:** Solo il titolo principale della pagina
- **SEO:** Deve contenere keyword principale della pagina

---

### **H2 - Section Titles**
```astro
<h2 class="section-title">Dove Trovarci</h2>
```
- **Font size:** `clamp(2rem, 5vw, 3.5rem)` → 32px-56px
- **Font weight:** 600 (semibold)
- **Line height:** 1.2
- **Usage:** Titoli di sezioni principali
- **SEO:** Keyword secondarie, struttura contenuto

---

### **H3 - Subsection Titles**
```astro
<h3 class="text-xl font-semibold text-nova-accent">Sede Operativa</h3>
```
- **Font size:** 1.25rem (20px)
- **Font weight:** 600
- **Usage:** Sottosezioni, card titles
- **SEO:** Dettagli, approfondimenti

---

## Esempi per Pagina

### **Homepage**
```html
<h1>EARTH ENGINEERING</h1>
<h2>Chi Siamo</h2>
<h3>La Nostra Storia</h3>
<h2>Servizi</h2>
<h3>Scavi Edili</h3>
<h3>Movimento Terra</h3>
```

### **Pagina Contatti**
```html
<h1>INIZIA IL PROGETTO</h1>
<h2>Dove Trovarci</h2> (se necessario)
<h2>Invia un Messaggio</h2> (se necessario)
```

### **Pagina Servizio**
```html
<h1>SCAVI EDILI</h1>
<h2>Il Processo</h2>
<h3>Sopralluogo</h3>
<h3>Preventivo</h3>
<h2>Mezzi Utilizzati</h2>
```

---

## CSS Classes Disponibili

| Class | Tag Suggerito | Font Size | Peso | Uso |
|-------|---------------|-----------|------|-----|
| `.display-text` | h1 | 48-96px | 700 | Titolo pagina principale |
| `.section-title` | h2 | 32-56px | 600 | Titoli sezioni |
| `.subtitle` | span | 12px | 700 | Label sopra titoli |

---

## Best Practices SEO

✅ **UNA sola H1 per pagina** (contenente keyword principale)  
✅ **H2-H6 in ordine gerarchico** (no salti: H1 → H3)  
✅ **Descrittivi e keyword-rich** (non generici)  
✅ **Leggibili per screen reader** (no `<div>` per titoli)  
✅ **Coerenti nel sito** (stesso stile = stessa importanza)  

❌ **NON usare** `<div class="display-text">` per titoli  
❌ **NON saltare** livelli (H1 → H3)  
❌ **NON mettere** più H1 nella stessa pagina  

---

## Modifiche Future

Quando crei nuove pagine:
1. **Identifica il titolo principale** → H1 + `.display-text`
2. **Dividi in sezioni logiche** → H2 + `.section-title`
3. **Sottosezioni se necessarie** → H3 + utility classes
4. **Mantieni ordine gerarchico** → No salti di livello



