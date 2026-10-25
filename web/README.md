# Portfolio (web)

Next.js + TypeScript + Tailwind, statically exported.

## Develop
    npm install
    npm run dev

## Test
    npm test

## Build (static export → ./out)
    npm run build

## Edit content
All content lives in `data/portfolio.ts`. Edit that file only.

## Deploy

**GitHub Pages (configured).** A workflow at `.github/workflows/deploy.yml` builds this
folder and deploys the static export on every push to `main`. One-time setup: in the repo,
go to **Settings → Pages → Build and deployment → Source: "GitHub Actions"**. The site then
publishes to `https://yash.mergit.site` (custom domain, set in `public/CNAME`).

DNS: point `yash.mergit.site` at GitHub Pages (a `CNAME` record to `viscous106.github.io`),
then set the custom domain under **Settings → Pages** and enable **Enforce HTTPS**.

The site is served from the domain root, so no base path is needed. To host under a subpath
instead (e.g. `viscous106.github.io/professionalPortfolio`), set `PAGES_BASE_PATH` to
`/professionalPortfolio` in the workflow and remove `public/CNAME`; it drives
`basePath`/`assetPrefix` in `next.config.mjs`, and `lib/basePath.ts`'s `withBasePath()`
handles plain links to files in `public/`.

Other hosts (no config change needed — `npm run build` outputs to `out/`):
- **Vercel:** import the repo, set root directory to `web/`. Zero config.
- **Netlify:** base `web/`, build `npm run build`, publish `web/out`.

## Replace the résumé
Drop your real PDF at `public/Yash_Virulkar_Resume.pdf` (same filename).
