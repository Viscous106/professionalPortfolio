// GitHub Pages project sites serve from a subpath (e.g. /professionalPortfolio).
// Next.js `basePath` auto-prefixes next/link and framework assets, but NOT plain
// <a href> / <img src> to files in /public. Use withBasePath() for those.
// Evaluated at build time during static export from the same env the config reads.
export const BASE_PATH = process.env.PAGES_BASE_PATH || '';

export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
