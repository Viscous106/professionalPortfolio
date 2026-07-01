# Chunk 1 Report — Tasks 1–4

**Date:** 2026-07-02  
**Status:** DONE_WITH_CONCERNS (one minor deviation noted below)

---

## Files Created

### Task 1 — Scaffold
- `web/` (entire project scaffolded via `create-next-app@latest`)
- `web/next.config.mjs` (created; see deviation below)
- `web/package.json` (test scripts added: `"test": "vitest run"`, `"test:watch": "vitest"`)

### Task 2 — Vitest
- `web/vitest.config.ts`
- `web/vitest.setup.ts`
- `web/__tests__/sanity.test.ts` (created then deleted after confirming pass)

### Task 3 — Types
- `web/lib/types.ts`

### Task 4 — Data
- `web/data/portfolio.ts`
- `web/__tests__/data.test.ts`

---

## Commands Run and Output

### 1. Scaffold
```
npx create-next-app@latest web --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*" --no-turbopack
```
Output: Success. Created web at /home/viscous/Viscous/professionalPortfolio/web  
Next.js version installed: **16.2.10** (latest at time of run, not 15 as plan assumed)

### 2. Install runtime deps
```
cd web && npm install framer-motion react-icons
```
Output: added 4 packages — framer-motion@12.42.2, react-icons@5.7.0

### 3. Install dev deps
```
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```
Output: added 90 packages — vitest@4.1.9, @testing-library/react@16.3.2, etc.

### 4. Sanity test (Task 2 verification)
```
npm test
```
Output:
```
 Test Files  1 passed (1)
      Tests  1 passed (1)
   Duration  771ms
```
Then `sanity.test.ts` was deleted.

### 5. TypeScript check (after Task 3)
```
npx tsc --noEmit
```
Output: (no output = no errors)

### 6. Data test (Task 4 — verify fails before data file)
```
npm test
```
Output: FAIL — Error: Failed to resolve import "@/data/portfolio" (expected)

### 7. Data test (Task 4 — verify passes after data file)
```
npm test
```
Output:
```
 Test Files  1 passed (1)
      Tests  5 passed (5)
   Duration  783ms
```

### 8. TypeScript check (final, after all 4 tasks)
```
npx tsc --noEmit
```
Output: (no output = no errors)

### 9. Build (static export)
```
npm run build
```
Output:
```
▲ Next.js 16.2.10 (Turbopack)
  Creating an optimized production build ...
✓ Compiled successfully in 2.9s
  Running TypeScript ...
  Finished TypeScript in 1986ms ...
✓ Generating static pages using 5 workers (4/4) in 387ms

Route (app)
┌ ○ /
└ ○ /_not-found
○  (Static)  prerendered as static content
```
`out/` directory produced with `index.html`.

---

## Deviations from Plan

### 1. `next.config.ts` → `next.config.mjs`
**What happened:** `create-next-app@latest` (v16.2.10) scaffolded `next.config.ts` (TypeScript) instead of `next.config.mjs`.  
**Resolution:** Deleted `next.config.ts` and created `next.config.mjs` with the exact contents specified in the plan (`output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`). Build passes.

### 2. Next.js version is 16.2.10, not 15
**What happened:** `create-next-app@latest` installs Next.js 16 (latest stable). The plan specified "Next.js 15" in its tech stack overview.  
**Impact:** None observed — all features used (App Router, static export, `next/font`) work identically. React version is 19.2.4 (also newer than plan's "React 19" spec, but same major).  
**Resolution:** No action taken; newer major versions are backwards-compatible for this use case.

### 3. `--no-turbopack` flag ignored by create-next-app
**What happened:** The `--no-turbopack` flag was passed but Next.js 16's build output says `(Turbopack)` anyway. This appears to affect only the dev server default; the production build uses Webpack/Turbopack as Next.js decides internally.  
**Impact:** None — production static export succeeds.

### 4. Extra scaffolded files (`AGENTS.md`, `CLAUDE.md`)
**What happened:** create-next-app also created `web/AGENTS.md` and `web/CLAUDE.md` (agent-instruction files, not part of the plan's file structure).  
**Resolution:** Left in place — they don't affect build, tests, or the plan's scope. Owner can remove if desired.

---

## Concerns

1. **Next.js 16 vs plan's "Next.js 15":** The installed version is one major version ahead. If any later tasks (Tasks 5–17) reference Next.js 15-specific APIs, they may need review. Tailwind CSS v4 is also confirmed (plan assumed v4).

2. **Turbopack in build output:** The `▲ Next.js 16.2.10 (Turbopack)` label appears even in `npm run build`. This is cosmetic in Next.js 16 and doesn't affect the static export output.

3. **2 moderate npm audit vulnerabilities:** Present from the start of scaffolding; not introduced by this work. The owner should decide whether to address them.

---

## Summary

- `npx tsc --noEmit` → PASS (no errors)
- `npm test` → PASS (5/5 data integrity tests)
- `npm run build` → PASS (static export, `out/` directory produced with `index.html`)
