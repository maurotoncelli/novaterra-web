// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Astro 5: 'static' by default; on-demand routes opt in via `export const prerender = false`.
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), react()],
  // Prevent Astro from silently switching to another port (e.g. 4322) when 4321 is busy.
  // This makes "multiple dev servers running" immediately obvious.
  vite: {
    server: {
      strictPort: true
    }
  }
});