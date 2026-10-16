# Project portfolio

A fully static Astro site, deployed as Cloudflare Workers static assets. No backend or browser JavaScript is required.

## Local development

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
npx wrangler login
npm run deploy
```

Set your desired Worker name in `wrangler.jsonc` before deployment. For Cloudflare Workers Builds, use `npm run build` as the build command and `npx wrangler deploy` as the deploy command. The assets directory is `dist`.

## Content

Edit `src/data/projects.ts` to update card content and external links. The forecasting project is hidden until it has content. Replace `forecasting: Project | null = null` with a project object to populate it.

Edit the color variables and layout in `src/styles/global.css`.
