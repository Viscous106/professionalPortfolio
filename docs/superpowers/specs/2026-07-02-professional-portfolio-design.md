# Professional Portfolio — Design Spec

**Date:** 2026-07-02
**Owner:** Yash Virulkar
**Status:** Approved (design direction locked)

## Goal

Replace the old single-file static portfolio (`Portfolio/`) with a modern, professional
portfolio that accurately represents Yash as a **multi-disciplinary engineer** — AI/agentic
systems, systems programming, web, and security — rather than the old "passionate web
developer" framing. Positioning is deliberately broad: not boxed into one field.

Audience: general all-rounder — recruiters, collaborators, and networking.

## Non-goals (YAGNI)

- No working contact form / backend (links only).
- No CMS, blog, or database.
- No hackathon achievement cards (explicitly deselected by owner).
- No unrelated refactor of the old `Portfolio/` folder — it stays as-is for reference until
  the new site is ready to replace it.

## Tech stack

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for subtle scroll/hover animation
- **react-icons** for social + skill icons
- **Static export** via `output: 'export'` in `next.config` — emits plain static assets so the
  site can deploy unchanged to **GitHub Pages, Vercel, or Netlify** (hosting decided later).
  - Note: with static export, `next/image` needs `images.unoptimized = true`; the profile
    photo is a remote GitHub avatar, so a plain `<img>` (or unoptimized Image) is used.

## Architecture

Content is fully separated from presentation.

```
app/
  layout.tsx          # root layout, fonts, metadata (SEO + Open Graph)
  page.tsx            # composes all sections in order
  globals.css         # Tailwind + base styles / CSS vars
components/
  Navbar.tsx          # sticky, responsive with mobile hamburger menu
  Footer.tsx          # copyright + social links
  ui/
    Section.tsx       # consistent section wrapper (id, heading, spacing)
    Button.tsx        # primary/secondary button/link
    ProjectCard.tsx   # one featured project
    SkillBadge.tsx    # one skill chip, grouped by category
    TimelineItem.tsx  # one education/role entry
    SocialLinks.tsx   # reusable row of social icons
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Timeline.tsx      # Experience / Education
    Achievements.tsx
    Contact.tsx
data/
  portfolio.ts        # SINGLE SOURCE OF TRUTH: profile, skills, projects, timeline,
                      # achievements, social links. Typed. Editing this file updates the site.
public/
  # (resume PDF placeholder + any local assets)
```

**Why this shape:** each section is an isolated, independently understandable component that
consumes typed data. Updating content later means editing `data/portfolio.ts` only — no markup
spelunking. Components can be changed internally without breaking consumers.

## Design direction — clean, light, professional

- **Palette:** warm off-white background, deep-slate text, single **refined indigo-blue accent**.
- **Typography:** clean sans (Inter or similar) with strong hierarchy; generous whitespace.
- **Interaction:** soft-shadow cards with gentle hover lift; smooth scrolling; tasteful
  fade-in-on-scroll (Framer Motion), kept subtle.
- **Quality bar:** fully responsive, accessible (semantic HTML, alt text, focus states,
  reduced-motion respected), fast (strong Lighthouse). SEO + Open Graph meta.

## Sections & content

All content sourced from Yash's real GitHub/profile and confirmed choices.

### Hero
- Name: **Yash Virulkar**
- Multi-disciplinary tagline (AI + systems + web).
- Photo: `https://github.com/Viscous106.png` — persistent, auto-updates with GitHub avatar.
- CTAs: **View My Work** (→ projects), **Download Resume** (placeholder path
  `/Yash_Virulkar_Resume.pdf`, to be supplied later).
- Social links row.

### About
- Bangalore, India. IITM '28 (BSc Data Science) + SST '29 (CS).
- Builds across AI agents, systems programming, open source, and security; Linux power user
  (Arch, Nix).
- Prose to be drafted for owner review.

### Skills (grouped) — confirmed
- **Languages:** Python, Go, Rust, Java, JavaScript/TypeScript, C++, Bash
- **Web:** HTML, CSS, React, Node.js
- **AI/ML:** LLMs, agent orchestration, reinforcement learning
- **Web3:** Solidity, Smart Contracts (Monad)
- **Systems/Infra:** Kubernetes, Linux (Arch, Nix), Git
- **Security:** security/hacking notes
- Links preserved: Arch repo, Hacking-Notes, codingNotes ("View My Coding Notes").

### Projects — featured cards
1. **omniBox** — Delegate any goal to an AI; it decomposes the task, spins up specialized
   agents, uses your tools, and delivers results. (Python) — repo link.
2. **Orkflow** — YAML-driven orchestration engine for multi-agent AI systems. (Go) — repo link.
3. **nodeLive** — Zoom SDK-based AI meeting dashboard. (Python) —
   **live demo:** https://nodelive-twbw.onrender.com/ + repo.
4. **rs-shell** — A shell built in Rust (CodeCrafters). (Rust) — repo link.
5. **RuView** — WiFi DensePose: real-time human pose estimation, vital-sign monitoring &
   presence detection from commodity WiFi signals (no camera). — repo/link.
6. **VISC-ASSistant** — Offline, ultra-low-power voice-automation daemon for Arch Linux
   (wake-word triggered app launcher). (Python) — repo link.
7. **mergit** — AI-agent workspace where agents complete real dev/GitHub tasks and generate
   on-chain proof of work, identity, reputation, and accountability (Solidity contracts on
   Monad). (AI + Web3) — `github.com/mergit-io`.
8. **CrownOS** — A Rust-built Linux desktop environment / OS from scratch: custom compositor,
   bar, launcher, dock, notification daemon, bootable ISO + Android companion. (Systems) —
   `github.com/Crown-OS`, landing: crownos-website.
- "View all projects on GitHub" → https://github.com/Viscous106
- mergit and CrownOS are featured as project cards AND highlighted in Achievements as
  currently-in-progress flagship work.

### Experience / Education timeline
- **IIT Madras** — BSc, Data Science (2024–2028)
- **Scaler School of Technology** — Computer Science (2024–2029)
- **Core Member, Open Source Club — SST**

### Achievements
- **Open-source contributor:** OpenWISP, Karmada.
- **Currently building:**
  - **mergit** (`github.com/mergit-io`) — An AI-agent workspace where agents complete real
    dev & GitHub tasks and generate on-chain proof of their work, identity, reputation, and
    accountability. Solidity smart contracts (AgentPassport, ProofOfWork, ReputationRegistry,
    AuditTrail) deployed on Monad. (AI + Web3)
  - **CrownOS** (`github.com/Crown-OS`) — A Rust-built Linux desktop environment / OS created
    from scratch: custom compositor, bar, launcher, app dock, and notification daemon, plus a
    bootable ISO, website, and Android companion. (Systems)

### Contact — links only (no form)
- Email: **virulkaryashed@gmail.com**
- GitHub: https://github.com/Viscous106
- LinkedIn: https://www.linkedin.com/in/yash-virulkar-338418329
- X/Twitter: https://x.com/yash_virulkar_ (@yash_virulkar_)
- Instagram: https://instagram.com/ynvirulkar (@ynvirulkar)

## Deployment

Static export committed with clear instructions for the three targets (GitHub Pages / Vercel /
Netlify). For GitHub Pages, configure `basePath`/`assetPrefix` if served from a project subpath.

## Open items to resolve during/after implementation

1. About prose drafted → owner review.
2. Resume PDF supplied → replace placeholder.
3. Final accent shade chosen during implementation (refined indigo-blue).

_Resolved: mergit/CrownOS descriptions sourced from their GitHub orgs; skills confirmed
(Web3 group added); mergit + CrownOS promoted to featured projects._

## Testing / verification

- `next build` (static export) succeeds with no errors.
- Local run: all sections render, nav anchors scroll correctly, mobile menu works.
- Responsive check at mobile/tablet/desktop widths.
- All external links valid; profile avatar loads.
- Accessibility: keyboard nav, focus visible, alt text, reduced-motion.
