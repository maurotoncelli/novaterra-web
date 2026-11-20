// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://novaterra.work',
  // Manual routing: Italian URLs stay unprefixed, English slugs differ
  // (/chi-siamo → /en/about). Path table lives in src/i18n/config.ts.
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: 'manual',
  },
  // Astro 5: 'static' by default; on-demand routes opt in via `export const prerender = false`.
  // Keystatic (/keystatic) e le API CMS restano on-demand via adapter Vercel.
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), react(), markdoc(), keystatic()],
  // Prevent Astro from silently switching to another port (e.g. 4322) when 4321 is busy.
  // This makes "multiple dev servers running" immediately obvious.
  vite: {
    server: {
      strictPort: true
    }
  }
});