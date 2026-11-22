// Base path for GitHub Pages project-site hosting (e.g. /professionalPortfolio).
// Empty for local dev, a user site (viscous106.github.io), or a custom domain.
// The deploy workflow sets PAGES_BASE_PATH; leave unset for `npm run dev`.
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // Next blocks dev-server requests from origins other than localhost; without this, opening the dev site at
  // 127.0.0.1 leaves the page un-hydrated, so no button works.
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
