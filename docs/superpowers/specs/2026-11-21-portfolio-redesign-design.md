# Portfolio redesign — design plan (2026-11-21)

**Brief (from Yash):** the current site "looks like an old guy's portfolio". He wants a professional one in the spirit of the
Bronx template (WPRiver), explored in Chrome: giant tight uppercase type, a black/white canvas, a live clock in a top
bar, a full-screen menu, a left heading that stays put while a list scrolls on the right, and a big closing call to
action. He wants dark and light modes, and content in sync with the new resumes.

**Constraints:**
- Original work: no Bronx code, images or copy.
- Same stack: Next 16 static export → GitHub Pages at yash.mergit.site.
- Content stays data-driven in `web/data/portfolio.ts`.

**Subject and audience:**
- Yash Virulkar: a systems, Web3 and agent engineer, and co-founder of Mergit.
- Readers: recruiters, founders and engineers deciding in about 30 seconds.
- **Primary job:** show what he built and shipped (Mergit with 2nd place at ETHGlobal Mumbai, six merged PRs to CNCF
  and OpenWISP), then get them to the resume or email.

## Tokens

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#000000` | `#F5F5F4` |
| `--surface` | `#0E0E0F` | `#FFFFFF` |
| `--line` | `#262628` | `#DEDEDC` |
| `--text` | `#EDECE8` | `#0A0A0A` |
| `--muted` | `#8C8B86` | `#5C5B57` |
| `--accent` (links, focus, receipt "verified") | `#9DB0FF` | `#2F45D9` |
| `--live` (status dot only) | `#3DD68C` | `#14965A` |

**Type:**
- Display: **Archivo**, variable, width axis at 125 (expanded), weight 800. Uppercase, tracking −0.04em. Used only for
  the name and the section titles.
- Body: **Geist**, 17–18px, line-height 1.55, measure ≤ 68ch.
- Mono: **Geist Mono**, only for real data (the clock, PR ids, dates, receipt fields). Never for labels.

**Theme:**
- Follows the system setting on first visit. A toggle in the top bar saves the choice in `localStorage`.
- An inline script sets `data-theme` before first paint, so the page never flashes the wrong theme.

## Layout

```
[Bangalore 21:04 IST]          [yv]           [☾] [Menu]
                 ● Building Mergit
 YASH
 VIRULKAR                                   (fluid, fills width)
 Bangalore, India                Software engineer, co-founder of Mergit
 2nd place, ETHGlobal Mumbai | 6 merged PRs to CNCF & OpenWISP | Sole author, Mergit paper
───────────────────────────────────────────────────────────────
 SELECTED WORK
 ┌ Mergit ─────────────────────┬──────── receipt ─────────┐
 │ what, my role, stack, links │ agent / task / steps     │
 │                             │ hash chain / ✓ verified  │
 └─────────────────────────────┴──────────────────────────┘
 nodeLive  ......  one line  ......  FastAPI, Zoom SDK   Code  Live
 omniBox   ......
───────────────────────────────────────────────────────────────
 OPEN        │ KCL  #2106  Fixed a runtime deadlock…     Jul 2026
 SOURCE      │ KCL  #2105  …
 (sticky)    │ Karmada #7489 …
───────────────────────────────────────────────────────────────
 EXPERIENCE  │ Mergit · Co-founder · Jun 2026–Present …   (sticky)
───────────────────────────────────────────────────────────────
 STACK       │ Languages / Backend & web / Web3 / Infra / Data
───────────────────────────────────────────────────────────────
           LET'S BUILD
           SOMETHING           [Email me] [Download resume]
 footer: © 2026 Yash Virulkar        GitHub  X  LinkedIn  Instagram
```

- Text is left-aligned; only the closing call to action is centred.
- The full-screen menu lists Work, Open source, Experience, Stack and Contact in display type, with socials at the bottom.

## Principles

1. **One bold move: the type.** The giant expanded name, and the section titles in the same voice. Everything else stays
   quiet: thin lines, no shadows, no gradients.
2. **Proof over adjectives.** Every claim on the page links to something checkable (a PR, a repo, the paper, the live site).
3. **The Mergit receipt is the one illustration.** A rendered execution receipt, made from text, that shows what Mergit
   does. No stock photos, no device mockups.
4. **Motion only when it means something:**
   - once, when the page loads: the name rises in;
   - when you act: the menu opening and the theme switching.
   - No reveal animation on every section. Reduced-motion users get none of it.
5. Projects are rows, not identical cards. Numbering is used nowhere, because nothing on the page is a sequence.

## Review against generic defaults (what I changed)

- **First instinct:** black background, acid-lime accent, monospace small-caps labels, numbered "(01)" cards. That is
  the generic near-black-plus-acid look, plus template chrome. **Changed to:** a cobalt/periwinkle accent used only for
  links and the verified state; mono only for data; no eyebrows, no numbering; projects as rows.
- **Bronx's photo-led sections** (hero photo, round portrait) don't fit someone whose work is code. **Replaced with:**
  a proof line under the name, and the receipt artifact.
- **Middle-dot meta strings and "→" on buttons:** avoided. The stack shows as separate items; buttons say exactly what
  they do ("Email me", "Download resume").

## Revision: live background (2026-11-21)

**What changed:** Yash found the first live background, a canvas dot grid, too generic ("looks vibecoded"). It is
replaced by Paper Shaders' `Dithering` shader (`@paper-design/shaders-react@0.0.82`, Apache-2.0, WebGL2).

**Settings:**
- A `warp` shape with 4×4 Bayer dithering, a 2px dot size, and speed 0.18.
- Low-contrast colors per theme:
  - dark: `#1d2238` on black
  - light: `#dcdde3` on `#f5f5f4`

**Behavior:**
- It drifts up to 14px against the cursor.
- It fades to 45% opacity once you scroll a full screen past the hero.

**Fallbacks:**
- Reduced-motion visitors get a still frame.
- Browsers without WebGL2 keep the plain background.

**Why dithering:** it is 1-bit and monochrome, like the type, and nods to systems work ("from compositors to smart
contracts"). The common default is a coloured mesh gradient, which was rejected.

## Revision 2: "still looks vibecoded" (2026-11-21)

Yash rejected both live backgrounds as generated-looking. I did desk research and audited the site against it.

**Research sources:**
- [no404, 30 reasons a site looks vibe-coded](https://www.no404.tr/en/blog/30-reasons-your-website-looks-vibe-coded)
- [Fountain Institute, 7 signs](https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui)
- [Readymag, award-winning portfolios](https://blog.readymag.com/award-winning-portfolios/)
- [Smashing, Swiss style lessons](https://www.smashingmagazine.com/2009/07/17/lessons-from-swiss-style-graphic-design/)
- engineering-portfolio guides (problem → built → impact)

**Tells found in our build:**
- Geist body text
- a pulsing status dot with no state behind it
- pill chips and a rounded card around everything
- a fake terminal-style receipt
- a background texture standing in for a brand
- em-dash copy and generic headings
- above all, **no real product evidence**

**Decisions (Yash: no personal photo; go ahead with the rest):**

1. **Real evidence.** Screenshots of mergit.site and research.mergit.site, in both themes, swap with the site theme.
   Each has a caption saying what and where it is. research.mergit.site's real execution receipt replaces the invented one.
2. **Type.**
   - Archivo: expanded for display, normal width for UI.
   - Newsreader (serif, optical sizes) for reading text.
   - IBM Plex Mono only for PR ids.
   - Geist is removed.
3. **Swiss grid.** 12 columns, 24px gutters, 8px rhythm, flush-left ragged-right. Sections span the grid differently
   (index tables, a case study with a meta column, a full-bleed figure). Content is grouped by rules and space. No
   cards, no pills, one radius (0) for figures.
4. **Colour.**
   - Black/white, plus one accent taken from Mergit's own mint (dark `#6fddb3`, light `#0a7a55`).
   - The accent marks links on hover and focus only.
5. **Motion.** The hero rises once on load, the menu opens, the theme switches. Nothing ambient: the shader, the dot
   and the ping are removed, and `@paper-design/shaders-react` is uninstalled.
6. **Copy.**
   - First person, specific, no em dashes.
   - Mergit is told as a short case study: problem, what I built, where it is now.
   - Contact is the email address itself, set large.
7. **Colophon** in the footer: the typefaces and how the site is built and deployed.

## Revision 3: back to revision 1, with links instead of proof (2026-11-22)

**What Yash said:**
- The editorial redesign (revision 2) looked worse than the previous version.
- Mergit's screenshots and proofs don't belong on his personal portfolio.

**What changed:**
- The revision 1 design is restored: the dithered background, YV top bar, Bronx-style hero, Selected work card,
  sticky sections and the "Let's build something" close.
- The made-up receipt is removed, and the revision 2 screenshots (`public/work/`) are deleted.
- In their place, the Mergit card has a link panel: mergit.site (large), Read the research, and Mergit on GitHub.
- A test enforces that `#work` contains no images or figures and links to all three.

## Revision 4: rebuilt to a new reference (2026-11-22)

**What Yash said:** the build had drifted too far from Bronx. He gave a new reference instead: WebTem's "Next-Gen
Personal Portfolio Website Design" on Dribbble (shot 27507022). I studied it in Chrome: one static mockup, plus a
studio promo reel.

**Look:**
- Grey page, white panels, vermilion accent #E5482A.
- Anton for display, JetBrains Mono for text, Instrument Serif italic as the accent inside the dark showcase panel.
- Dashed blueprint guides, graph-paper cards, and a tilted icon tile on every section header.

**Sections, mapped from the reference:**

| Reference | This site |
|---|---|
| Header (logo, "Available Now", dotted nav, "Book a Call") | Header (YV tile, "Open to roles", dotted nav with scroll-spy, theme switch, "Email me") |
| "I'M ANTONY" hero with tilted avatar | "I'M YASH" hero, YV monogram tile (no photo, by choice) |
| Case-study card with "// 01" pager and dark showcase | Carousel of Mergit, nodeLive, Orkflow, omniBox, CrownOS. Panels are real text and numbers, each linking out, no screenshots |
| Stats | Stats: 6 PRs, 2× wins, ~50 users, 1 paper |
| Capabilities, three cards | Agent systems, smart contracts, systems and infra |
| Dark Journal band | Open source: six PR cards |
| Testimonials | About: role cards in the same style, no invented quotes, plus education and skills |
| FAQ accordion | FAQ with real answers |
| (not shown in the mockup) | Contact card |

**Not reproduced:** the reference's artwork (avatar image, foliage collage, product mockups, testimonial
illustrations). Supplying real artwork would close most of the remaining gap.

**Later (2026-11-22):** the FAQ section and the footer build credits were removed at Yash's request. A personal portfolio does not need them. The footer is now just the copyright and social icons. The two club roles were merged into one Web3 Lead card.
