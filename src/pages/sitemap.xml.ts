import type { APIRoute } from "astro";
import { renderSitemap } from "../i18n/publicIndex";

export const GET: APIRoute = async () => {
  return new Response(await renderSitemap(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
