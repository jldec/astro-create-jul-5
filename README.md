# astro-create-jul-5

Astro 7 on Cloudflare Workers with a custom Hono worker entrypoint.

- astro 7, `@astrojs/cloudflare`, hono, tailwind css 4, wrangler, typescript
- `@cloudflare/workers-types` v5 in `tsconfig.json`; `pnpm types` generates `worker-configuration.d.ts` — see [Workers Types v5 changelog](https://developers.cloudflare.com/changelog/post/2026-07-03-workers-types-v5/)
- `packageManager` pinned in `package.json`; `pnpm-workspace.yaml` disables lifecycle builds for `esbuild`, `sharp`, and `workerd`
- `src/worker.ts` — hono routes custom endpoints; everything else delegates to `@astrojs/cloudflare/handler`
- `GET /time` returns ISO timestamp plus `request.cf` colo, city, state, country (plain text)
- prerendered static `/` with a **time** button that fetches `/time` and shows RTT
- `pnpm ship` deploys (build + `wrangler deploy`)

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