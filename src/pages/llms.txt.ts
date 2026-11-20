import type { APIRoute } from "astro";
import { renderLlmsTxt } from "../i18n/publicIndex";

export const GET: APIRoute = async () => {
  return new Response(await renderLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
