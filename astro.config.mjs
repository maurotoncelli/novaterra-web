// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  // Prevent Astro from silently switching to another port (e.g. 4322) when 4321 is busy.
  // This makes "multiple dev servers running" immediately obvious.
  vite: {
    server: {
      strictPort: true
    }
  }
});