# Chunk 4 Task Report — Tasks 16 & 17

Date: 2026-07-02

## Files Created / Modified

| File | Action |
|------|--------|
| `web/app/page.tsx` | Overwritten — composes Hero, About, Skills, Projects, Timeline, Achievements, Contact in order |
| `web/public/Yash_Virulkar_Resume.pdf` | Created — placeholder PDF (owner must replace with real PDF) |
| `web/__tests__/page.test.tsx` | Created — render smoke test (h1, 8 project headings, 7 section landmarks) |
| `web/vitest.setup.ts` | Modified — added `MockIntersectionObserver` class to prevent Framer Motion `whileInView` crash in jsdom |
| `web/tsconfig.json` | Modified — added `"types": ["vitest/globals"]` so `vi` is recognised during `tsc --noEmit` |
| `web/README.md` | Overwritten — run/build/deploy/content-edit instructions per plan |
| `README.md` (repo root) | Overwritten — short pointer to `web/` per plan |
| `docs/superpowers/task-reports/chunk4-report.md` | Created — this file |

---

## Commands & Full Output

### npm test (final run)

```
> web@0.1.0 test
> vitest run

 RUN  v4.1.9 /home/viscous/Viscous/professionalPortfolio/web

 Test Files  2 passed (2)
      Tests  8 passed (8)
   Start at  11:55:16
   Duration  1.50s (transform 122ms, setup 122ms, import 353ms, tests 384ms, environment 1.22s)
```

Tests: `data.test.ts` (5 tests) + `page.test.tsx` (3 tests) all PASS.

### npx tsc --noEmit

No output — zero errors.

### npm run build

```
▲ Next.js 16.2.10 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 2.9s
  Running TypeScript ...
  Finished TypeScript in 2.3s ...
  Collecting page data using 5 workers ...
✓ Generating static pages using 5 workers (4/4) in 388ms
  Finalizing page optimization ...

Route (app)
┌ ○ /
└ ○ /_not-found

○  (Static)  prerendered as static content
```

### out/index.html grep

```
$ ls web/out/index.html  → exists ✓
$ grep "Yash Virulkar"   → match ✓
$ grep "omniBox"         → match ✓
```

---

## Deviations from Plan

### IntersectionObserver mock in `vitest.setup.ts` (deviation from plan spec)

The plan said "Framer Motion runs in jsdom without issue for these assertions." In practice, Framer Motion's `whileInView` prop triggers `IntersectionObserver` at mount time inside jsdom, which throws:

```
ReferenceError: IntersectionObserver is not defined
TypeError: () => ({...}) is not a constructor
```

**Fix applied:** Added a `MockIntersectionObserver` class (not an arrow function — `new` requires a constructor) to `vitest.setup.ts`. This is the canonical fix for Framer Motion + jsdom. The assertions are unchanged; only the environment setup was extended.

### `tsconfig.json` — added `"types": ["vitest/globals"]`

The `vi` global used in `vitest.setup.ts` is provided at runtime by Vitest's `globals: true` config, but `tsc --noEmit` still needs the type declarations to resolve `vi`. Adding `vitest/globals` to `types` is the standard solution.

---

## Concerns

1. **Framer Motion + jsdom**: The plan's note that "Framer Motion runs in jsdom without issue" was inaccurate for the version of Framer Motion installed. The workaround (IntersectionObserver mock) is standard and robust, but it is an unplanned file modification to `vitest.setup.ts`.

2. **Placeholder résumé**: `public/Yash_Virulkar_Resume.pdf` is a two-line ASCII placeholder. Owner must replace it before shipping.

3. **Preview step skipped**: Task 17 Step 2 calls for manual visual preview via `npx serve web/out`. This was skipped as it requires interactive browser access outside the scope of automated verification. The static export is confirmed structurally correct via HTML grep.
