import { defineMiddleware } from "astro:middleware";

// Astro asks for this file when i18n routing is manual.
// Locale and translated URLs are resolved from the pathname in src/i18n/config.ts,
// because English slugs are not the Italian ones with an /en prefix.
export const onRequest = defineMiddleware((_context, next) => next());
