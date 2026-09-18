# Vaah Docs

[![Made with Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)
[![Nuxt](https://img.shields.io/badge/Nuxt-3.17-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Content](https://img.shields.io/badge/@nuxt/content-2.x-00DC82)](https://content.nuxt.com)

Documentation site for the Vaah product family — [VaahCMS](https://vaah.dev), VaahCLI, VaahFlutter, VaahStore, VaahNuxt and VaahShare — maintained by [WebReinvent](https://github.com/webreinvent).

Live site: [https://vaah.dev](https://vaah.dev)

## Stack

- [Nuxt 3](https://nuxt.com) (SSR + hybrid rendering via `routeRules`)
- [Nuxt UI Pro](https://ui.nuxt.com/pro) — extended in `nuxt.config.ts`
- [@nuxt/content](https://content.nuxt.com) — Markdown/YAML docs in `content/`
- [@scalar/api-reference](https://github.com/scalar/scalar) — API reference renderer for VaahStore OpenAPI
- [Pinia](https://pinia.vuejs.org) — client state
- `nuxt-og-image` — social cards
- `apexcharts` / `flowbite` — charts and UI helpers

## Project Structure

```
.
├── content/              Markdown/YAML sources rendered by @nuxt/content
│   ├── 1.getting-started
│   ├── 2.vaahcms-2x
│   ├── 3.vaahcms-1x
│   ├── 4.guide
│   ├── 5.vaahcli
│   ├── 6.laravel
│   ├── 7.vaahflutter
│   ├── 8.vaahstore
│   ├── 9.testing
│   ├── 10.vaahshare
│   └── 11.vaahnuxt
├── pages/                File-based routes (e.g. pages/vaahstore/api.vue)
├── public/               Static assets, including the OpenAPI sources/specs
│   ├── vaahstore-api/    VaahStore OpenAPI fragments (one folder per module)
│   └── vaahstore-apis.yaml   Bundled single-file output (generated)
├── json/
│   └── routeRules.json   Per-route rendering rules consumed by nuxt.config.ts
├── nuxt.config.ts
└── package.json
```

## Setup

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
npm run dev
```

Other useful scripts:

```bash
npm run lint          # ESLint
npm run typecheck     # vue-tsc
npm run build         # Production build
npm run preview       # Preview the production build
npm run generate      # Static site generation
```

## VaahStore API Bundling

The VaahStore docs page at [`/vaahstore/api`](pages/vaahstore/api.vue) renders the OpenAPI spec via `@scalar/api-reference`. The spec is bundled from the multi-file source in `public/vaahstore-api/` into a single file at `public/vaahstore-apis.yaml`.

Install the bundler (already declared in `devDependencies` of a typical setup, or install directly):

```bash
npm install --save-dev @redocly/cli
```

Bundle the spec:

```bash
npm run vaahstore:api
```

This runs:

```bash
npx @redocly/cli bundle public/vaahstore-api/vaahstore.yaml --output public/vaahstore-apis.yaml
```

The Scalar component on `pages/vaahstore/api.vue` loads the bundled file at runtime. The route is rendered client-only via a `routeRules` entry in `json/routeRules.json` (`{ "ssr": false }`).

## Routing rules

Per-route behavior (prerender, SSR, redirects) lives in [json/routeRules.json](json/routeRules.json) and is loaded into `nuxt.config.ts`:

```ts
const routeRules = require('./json/routeRules.json')

export default defineNuxtConfig({
  // ...
  routeRules,
})
```

To add a new redirect or change SSR/prerender behavior for a path, append an entry to that JSON file — do not hard-code route rules in individual pages.

## Nuxt Studio

Content can be edited from the browser via [Nuxt Studio](https://nuxt.studio). The `@nuxthq/studio` module is already in `devDependencies`; add it to `modules` in `nuxt.config.ts` if you want to enable it:

```ts
export default defineNuxtConfig({
  modules: [
    // ...
    '@nuxthq/studio',
  ],
})
```

## Deployment

Build the application for production:

```bash
npm run build
```

Locally preview the production build:

```bash
npm run preview
```

See the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for guidance on hosting providers.

## Contributing

Open issues and pull requests on GitHub: [webreinvent/vaah-docs](https://github.com/webreinvent/vaah-docs).