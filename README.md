# astro-create-jul-5

Astro 7 on Cloudflare Workers with a custom Hono worker entrypoint.

- **Stack:** Astro 7, `@astrojs/cloudflare`, Hono, Tailwind CSS 4, Wrangler, TypeScript
- **Worker:** `src/worker.ts` — Hono routes custom endpoints; everything else delegates to `@astrojs/cloudflare/handler`
- **`GET /time`:** returns ISO timestamp plus `request.cf` colo, city, state, country (plain text)
- **Home page:** prerendered static `/` with a **time** button that fetches `/time` and shows RTT
- **Deploy:** `pnpm ship` (build + `wrangler deploy`)

## Scripts

```json
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro build && astro preview",
    "astro": "astro",
    "check": "astro check && prettier --check .",
    "format": "prettier -w .",
    "ship": "astro build && wrangler deploy",
    "types": "wrangler types --include-runtime false --strict-vars false"
  }
```