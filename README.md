# Novaterra | Earth Engineering (Astro)

Sito in Astro + TypeScript + Tailwind, con Lenis (smooth scroll) e GSAP/ScrollTrigger (reveal/parallax). Architettura data-driven e CMS-ready (WordPress headless).

## 🚀 Struttura

```text
src/
  Components/        # Componenti Astro (nota: casing consistente)
  data/              # Contenuti mock + tipi TS (data-driven)
  lib/               # Repository layer (CMS-ready)
  layouts/           # Layout globale
  pages/             # Route Astro (+ dynamic routes [slug])
  scripts/           # JS/TS globale (init Lenis/GSAP/cursor/GPS)
  styles/            # global.css + Tailwind layers
```

## 🧞 Comandi

| Command          | Action |
| :--------------- | :----- |
| `npm install`    | Installa dipendenze |
| `npm run dev`    | Dev server **fisso su `http://localhost:4321/`** |
| `npm run dev:any`| Dev server con porta libera (fallback) |
| `npm run build`  | Build produzione in `./dist/` |
| `npm run preview`| Preview build |

## 🔒 Policy “single-port”

- Usiamo **una sola porta** per evitare confusione cache/DOM: `4321`.
- Se la 4321 è occupata, prima chiudi gli altri `astro dev` oppure usa `npm run dev:any` solo temporaneamente.

## 📊 Google Analytics (GA4) – predisposto

Il sito è già predisposto per GA4 ma **non carica nulla** finché non imposti la variabile d’ambiente.

- **Env var**: `PUBLIC_GA_MEASUREMENT_ID` (esempio: `G-XXXXXXXXXX`)
- **Dove**: crea un file `.env` in root (non committarlo) e inserisci:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Quando sarà presente, `src/Components/Ui/Analytics.astro` inietterà automaticamente lo snippet GA4 nel `<head>` tramite `src/layouts/Layout.astro`.

## 🧠 Nota importante sul casing

Per evitare problemi tra macOS (case-insensitive) e Linux/CI (case-sensitive), manteniamo **import coerenti** con la cartella `src/Components/`.
