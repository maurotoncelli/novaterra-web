# 🎯 SISTEMA DINAMICO NAVBAR HEIGHT

## Architettura

### **CSS Variables (global.css)**
```css
:root {
  --navbar-height: 80px;      /* Desktop default */
  --navbar-padding-y: 2rem;   /* Padding verticale */
}
```

### **Navbar Component**
```css
.navbar-main {
  height: var(--navbar-height);
  padding-top: var(--navbar-padding-y);
  padding-bottom: var(--navbar-padding-y);
}

@media (max-width: 768px) {
  .navbar-main {
    --navbar-height: 70px;     /* Mobile: più compatta */
    --navbar-padding-y: 1.5rem;
  }
}
```

### **Pages (utilizzo)**
```css
.page-section {
  /* Si adatta automaticamente all'altezza navbar */
  padding-top: calc(var(--navbar-height) + 4rem);
}

@media (max-width: 768px) {
  .page-section {
    padding-top: calc(var(--navbar-height) + 2rem);
  }
}
```

---

## Vantaggi

✅ **Dinamico** - Cambia automaticamente su tutti i device  
✅ **Centralizzato** - Un solo punto di configurazione  
✅ **Manutenibile** - Modifichi una volta, funziona ovunque  
✅ **Responsive** - Si adatta a mobile/tablet/desktop  
✅ **Scalabile** - Facile aggiungere nuovi breakpoints  

---

## Come modificare l'altezza navbar

1. **Desktop:** Modifica `--navbar-height: 80px;` in `global.css`
2. **Mobile:** Modifica `--navbar-height: 70px;` nel media query di `Navbar.astro`
3. Le pagine si adatteranno automaticamente con `calc()`

---

## Future pages

Tutte le pagine future dovranno usare:
```css
padding-top: calc(var(--navbar-height) + 4rem); /* Desktop */
padding-top: calc(var(--navbar-height) + 2rem); /* Mobile */
```



