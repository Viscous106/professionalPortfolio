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
publishes to `https://viscous106.github.io/professionalPortfolio`.

The subpath is handled by `PAGES_BASE_PATH` (set to `/professionalPortfolio` in the workflow),
which drives `basePath`/`assetPrefix` in `next.config.mjs`. Plain links to files in `public/`
use `lib/basePath.ts`'s `withBasePath()` so they resolve under the subpath too.

To move to a **user site** (`viscous106.github.io`) or a **custom domain**, remove the
`PAGES_BASE_PATH` env from the workflow (empty base path) and deploy from a repo named
`viscous106.github.io` (or add a `CNAME`).

Other hosts (no config change needed — `npm run build` outputs to `out/`):
- **Vercel:** import the repo, set root directory to `web/`. Zero config.
- **Netlify:** base `web/`, build `npm run build`, publish `web/out`.

## Replace the résumé
Drop your real PDF at `public/Yash_Virulkar_Resume.pdf` (same filename).
