# Professional Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, professional Next.js portfolio for Yash Virulkar that accurately represents multi-disciplinary work (AI/agents, systems, web, Web3, security), replacing the old placeholder-heavy static site.

**Architecture:** Next.js (App Router) + TypeScript, statically exported (`output: 'export'`) so it deploys unchanged to GitHub Pages / Vercel / Netlify. All content lives in one typed `data/portfolio.ts` (single source of truth); each page section is an isolated component consuming that data. Styling via Tailwind CSS; subtle animation via Framer Motion; icons via react-icons.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, react-icons, Vitest + React Testing Library + jsdom (tests).

## Global Constraints

- **NO GIT COMMANDS.** The repository owner performs all git operations. Never run `git`. Where a task ends with **Checkpoint**, stop and let the owner commit; do not stage or commit anything.
- Node.js ≥ 18.18 (Next.js 15 requirement).
- Static export only: `output: 'export'` and `images.unoptimized: true` in `next.config.mjs`. No server-only features (no API routes, no `next/image` optimization, no server actions).
- New project lives in a `web/` subdirectory of the repo root (`/home/viscous/Viscous/professionalPortfolio/web`). The old `Portfolio/` folder is left untouched for reference.
- Content is edited ONLY in `data/portfolio.ts`. Components must not hard-code profile text, links, or project details.
- Accent color: refined indigo-blue. Palette: warm off-white background, deep-slate text.
- Profile photo: `https://github.com/Viscous106.png` via plain `<img>` (remote, unoptimized).
- Contact is links-only. No form, no backend.
- All external links open in a new tab with `rel="noopener noreferrer"`.
- Accessibility: semantic landmarks, alt text, visible focus states, `prefers-reduced-motion` respected.

---

## File Structure

```
web/
  next.config.mjs          # static export config
  package.json             # deps + scripts
  tsconfig.json
  vitest.config.ts         # test runner (jsdom)
  vitest.setup.ts          # RTL matchers
  postcss.config.mjs       # tailwind v4
  app/
    layout.tsx             # root layout, fonts, SEO/OG metadata
    page.tsx               # composes all sections
    globals.css            # tailwind import + CSS vars + base styles
  data/
    portfolio.ts           # SINGLE SOURCE OF TRUTH (typed content)
  lib/
    types.ts               # content type definitions
  components/
    Navbar.tsx
    Footer.tsx
    ui/
      Section.tsx
      Button.tsx
      SkillBadge.tsx
      ProjectCard.tsx
      TimelineItem.tsx
      SocialLinks.tsx
      Reveal.tsx           # framer-motion fade-in-on-scroll wrapper
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Timeline.tsx
      Achievements.tsx
      Contact.tsx
  public/
    Yash_Virulkar_Resume.pdf   # placeholder, owner replaces
  __tests__/
    data.test.ts           # content integrity
    page.test.tsx          # render smoke test
```

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: `web/` (via create-next-app)
- Modify: `web/next.config.mjs`

- [ ] **Step 1: Scaffold**

Run from repo root:
```bash
npx create-next-app@latest web --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*" --no-turbopack
```
Accept defaults for any remaining prompts.

- [ ] **Step 2: Add runtime + dev dependencies**

```bash
cd web
npm install framer-motion react-icons
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```

- [ ] **Step 3: Configure static export**

Overwrite `web/next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

- [ ] **Step 4: Add test scripts**

In `web/package.json`, add to `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Verify dev server boots**

Run: `npm run dev` then open the printed URL; confirm the default Next page renders. Stop the server (Ctrl-C).
Expected: no build errors in terminal.

- [ ] **Step 6: Checkpoint** — tell the owner Task 1 is ready to commit.

---

### Task 2: Test tooling (Vitest + RTL)

**Files:**
- Create: `web/vitest.config.ts`, `web/vitest.setup.ts`

**Interfaces:**
- Produces: a working `npm test` command that runs `.test.ts(x)` files under `web/` with jsdom + jest-dom matchers.

- [ ] **Step 1: Create `web/vitest.config.ts`**

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, '.') },
  },
});
```

- [ ] **Step 2: Create `web/vitest.setup.ts`**

```typescript
import '@testing-library/jest-dom';
```

- [ ] **Step 3: Add a temporary sanity test `web/__tests__/sanity.test.ts`**

```typescript
import { describe, it, expect } from 'vitest';

describe('test harness', () => {
  it('runs', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: PASS (1 test).

- [ ] **Step 5: Delete `web/__tests__/sanity.test.ts`** (harness confirmed).

- [ ] **Step 6: Checkpoint.**

---

### Task 3: Content types

**Files:**
- Create: `web/lib/types.ts`

**Interfaces:**
- Produces: TypeScript types consumed by `data/portfolio.ts` and every component.

```typescript
export type SkillGroup = { category: string; skills: string[] };

export type Project = {
  name: string;
  blurb: string;
  tech: string[];
  repo: string;
  demo?: string;
  tag: 'AI' | 'Web3' | 'Systems' | 'Web' | 'AI + Web3';
};

export type TimelineEntry = {
  title: string;      // e.g. "BSc, Data Science"
  org: string;        // e.g. "IIT Madras"
  period: string;     // e.g. "2024 – 2028"
  detail?: string;
};

export type Achievement = {
  title: string;
  detail: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'email';
};

export type Portfolio = {
  name: string;
  tagline: string;
  intro: string;
  location: string;
  photo: string;
  resumeHref: string;
  about: string[];
  skills: SkillGroup[];
  projects: Project[];
  timeline: TimelineEntry[];
  achievements: Achievement[];
  socials: SocialLink[];
  codingNotesHref: string;
};
```

- [ ] **Step 1: Create the file** with the code above.
- [ ] **Step 2: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 3: Checkpoint.**

---

### Task 4: Content data (single source of truth)

**Files:**
- Create: `web/data/portfolio.ts`
- Test: `web/__tests__/data.test.ts`

**Interfaces:**
- Consumes: types from `web/lib/types.ts`.
- Produces: `export const portfolio: Portfolio` used by all sections.

- [ ] **Step 1: Write the failing test `web/__tests__/data.test.ts`**

```typescript
import { describe, it, expect } from 'vitest';
import { portfolio } from '@/data/portfolio';

describe('portfolio content', () => {
  it('has core identity fields', () => {
    expect(portfolio.name).toBe('Yash Virulkar');
    expect(portfolio.photo).toBe('https://github.com/Viscous106.png');
    expect(portfolio.tagline.length).toBeGreaterThan(0);
  });

  it('features 8 projects including mergit and CrownOS', () => {
    expect(portfolio.projects).toHaveLength(8);
    const names = portfolio.projects.map((p) => p.name);
    expect(names).toContain('mergit');
    expect(names).toContain('CrownOS');
    expect(names).toContain('omniBox');
  });

  it('every project has a repo link and at least one tech tag', () => {
    for (const p of portfolio.projects) {
      expect(p.repo).toMatch(/^https:\/\/github\.com\//);
      expect(p.tech.length).toBeGreaterThan(0);
    }
  });

  it('includes a Web3 skill group with Solidity', () => {
    const web3 = portfolio.skills.find((g) => g.category === 'Web3');
    expect(web3).toBeDefined();
    expect(web3!.skills).toContain('Solidity');
  });

  it('has the five required socials', () => {
    const icons = portfolio.socials.map((s) => s.icon).sort();
    expect(icons).toEqual(['email', 'github', 'instagram', 'linkedin', 'twitter']);
    const email = portfolio.socials.find((s) => s.icon === 'email');
    expect(email!.href).toBe('mailto:virulkaryashed@gmail.com');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `@/data/portfolio`.

- [ ] **Step 3: Create `web/data/portfolio.ts`**

```typescript
import type { Portfolio } from '@/lib/types';

export const portfolio: Portfolio = {
  name: 'Yash Virulkar',
  tagline: 'Building across AI, systems, and the web.',
  intro:
    'I design and ship agentic AI systems, low-level tooling, and full-stack products — and I like understanding every layer, from smart contracts to compositors.',
  location: 'Bangalore, India',
  photo: 'https://github.com/Viscous106.png',
  resumeHref: '/Yash_Virulkar_Resume.pdf',
  about: [
    "I'm a computer-science and data-science student who builds across the stack — from AI agent orchestration and reinforcement-learning environments to a Rust-built operating system and on-chain smart contracts.",
    'I study a BSc in Data Science at IIT Madras and CS at Scaler School of Technology, and I spend most of my time turning ambitious ideas into working systems. I daily-drive Arch and Nix, contribute to open source, and dig into security for fun.',
    "Whatever the domain, I care about understanding the whole system rather than just the surface.",
  ],
  skills: [
    { category: 'Languages', skills: ['Python', 'Go', 'Rust', 'Java', 'JavaScript / TypeScript', 'C++', 'Bash'] },
    { category: 'Web', skills: ['React', 'Next.js', 'Node.js', 'HTML', 'CSS'] },
    { category: 'AI / ML', skills: ['LLMs', 'Agent Orchestration', 'Reinforcement Learning'] },
    { category: 'Web3', skills: ['Solidity', 'Smart Contracts', 'Monad'] },
    { category: 'Systems / Infra', skills: ['Kubernetes', 'Linux (Arch, Nix)', 'Git'] },
    { category: 'Security', skills: ['Offensive Security', 'CTF / Hacking Notes'] },
  ],
  projects: [
    {
      name: 'omniBox',
      blurb:
        'Assign any goal to an AI: it decomposes the task, spins up specialized agents, uses your tools, and delivers results — no workflows to define.',
      tech: ['Python', 'LLMs', 'Multi-agent'],
      repo: 'https://github.com/Viscous106/omniBox',
      tag: 'AI',
    },
    {
      name: 'Orkflow',
      blurb:
        'A YAML-driven orchestration engine for multi-agent AI systems — define your agents, wire their collaboration, and run complex workflows without writing orchestration code.',
      tech: ['Go', 'Multi-agent', 'YAML'],
      repo: 'https://github.com/Viscous106/Orkflow',
      tag: 'AI',
    },
    {
      name: 'nodeLive',
      blurb:
        'An AI meeting dashboard built on the Zoom SDK — live transcription and meeting intelligence.',
      tech: ['Python', 'Zoom SDK', 'LLMs'],
      repo: 'https://github.com/Viscous106/nodeLive',
      demo: 'https://nodelive-twbw.onrender.com/',
      tag: 'AI',
    },
    {
      name: 'rs-shell',
      blurb:
        'A POSIX-style shell implemented from scratch in Rust, built through the CodeCrafters "build your own shell" challenge.',
      tech: ['Rust'],
      repo: 'https://github.com/Viscous106/rs-shell',
      tag: 'Systems',
    },
    {
      name: 'RuView',
      blurb:
        'WiFi DensePose: turns commodity WiFi signals into real-time human pose estimation, vital-sign monitoring, and presence detection — no camera required.',
      tech: ['Python', 'ML', 'Signal Processing'],
      repo: 'https://github.com/Viscous106/RuView',
      tag: 'AI',
    },
    {
      name: 'VISC-ASSistant',
      blurb:
        'An offline, ultra-low-power voice-automation daemon for Arch Linux: a wake-word engine launches a suite of desktop apps hands-free without draining the battery.',
      tech: ['Python', 'Arch Linux', 'Wake-word'],
      repo: 'https://github.com/Viscous106/VISC-ASSistant',
      tag: 'Systems',
    },
    {
      name: 'mergit',
      blurb:
        'An AI-agent workspace where agents complete real dev and GitHub tasks and generate on-chain proof of their work, identity, reputation, and accountability — backed by Solidity contracts (AgentPassport, ProofOfWork, ReputationRegistry, AuditTrail) on Monad.',
      tech: ['AI Agents', 'Solidity', 'Monad'],
      repo: 'https://github.com/mergit-io',
      tag: 'AI + Web3',
    },
    {
      name: 'CrownOS',
      blurb:
        'A Linux desktop environment built from scratch in Rust — its own compositor, bar, launcher, app dock, and notification daemon, plus a bootable ISO and an Android companion app.',
      tech: ['Rust', 'Linux', 'Wayland'],
      repo: 'https://github.com/Crown-OS',
      demo: 'https://github.com/Crown-OS/crownos-website',
      tag: 'Systems',
    },
  ],
  timeline: [
    {
      title: 'BSc, Data Science',
      org: 'IIT Madras',
      period: '2024 – 2028',
    },
    {
      title: 'Computer Science',
      org: 'Scaler School of Technology',
      period: '2024 – 2029',
    },
    {
      title: 'Core Member',
      org: 'Open Source Club — SST',
      period: 'Present',
      detail: 'Driving open-source culture and projects on campus.',
    },
  ],
  achievements: [
    {
      title: 'Open-source contributor',
      detail: 'Contributions to OpenWISP (network/WiFi controllers) and Karmada (multi-cloud Kubernetes orchestration).',
      href: 'https://github.com/Viscous106',
    },
    {
      title: 'Currently building — mergit',
      detail: 'An on-chain AI-agent accountability platform (Solidity contracts on Monad).',
      href: 'https://github.com/mergit-io',
    },
    {
      title: 'Currently building — CrownOS',
      detail: 'A from-scratch, Rust-built Linux desktop environment and OS.',
      href: 'https://github.com/Crown-OS',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Viscous106', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-virulkar-338418329', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:virulkaryashed@gmail.com', icon: 'email' },
    { label: 'X', href: 'https://x.com/yash_virulkar_', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com/ynvirulkar', icon: 'instagram' },
  ],
  codingNotesHref: 'https://github.com/Viscous106/codingNotes',
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS (all data assertions).

- [ ] **Step 5: Checkpoint.**

> **Note to owner:** the About prose above is my draft — review and tell me what to change.

---

### Task 5: Design tokens & global styles

**Files:**
- Modify: `web/app/globals.css`

**Interfaces:**
- Produces: CSS custom properties + Tailwind theme tokens (`--color-accent`, background, surface, text) and base typography used everywhere; a `.reduced-motion` respect via media query.

- [ ] **Step 1: Overwrite `web/app/globals.css`**

```css
@import "tailwindcss";

:root {
  --background: #faf9f7;   /* warm off-white */
  --surface: #ffffff;
  --text: #1e2532;         /* deep slate */
  --muted: #5b6472;
  --accent: #4f46e5;       /* refined indigo */
  --accent-hover: #4338ca;
  --border: #e7e5e1;
}

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --color-border: var(--border);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* offset sticky navbar for anchor links */
}

body {
  background: var(--background);
  color: var(--text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

- [ ] **Step 2: Verify build compiles**

Run: `npm run build`
Expected: build succeeds (existing default page still there).

- [ ] **Step 3: Checkpoint.**

---

### Task 6: Root layout — fonts & SEO metadata

**Files:**
- Modify: `web/app/layout.tsx`

**Interfaces:**
- Consumes: `portfolio` (name, tagline, intro) for metadata.
- Produces: `<html>` shell with Inter font var `--font-inter`, `<Navbar/>` + `<Footer/>` slots (added in Task 8), and full metadata/OG tags.

- [ ] **Step 1: Overwrite `web/app/layout.tsx`**

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { portfolio } from '@/data/portfolio';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: `${portfolio.name} — Software Engineer`,
  description: portfolio.intro,
  openGraph: {
    title: `${portfolio.name} — Software Engineer`,
    description: portfolio.intro,
    type: 'website',
    images: [portfolio.photo],
  },
  twitter: {
    card: 'summary',
    title: `${portfolio.name} — Software Engineer`,
    description: portfolio.intro,
    images: [portfolio.photo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build compiles**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Checkpoint.**

---

### Task 7: UI primitives — Section, Button, Reveal

**Files:**
- Create: `web/components/ui/Section.tsx`, `web/components/ui/Button.tsx`, `web/components/ui/Reveal.tsx`

**Interfaces:**
- Produces:
  - `Section({ id, title, children, className })` — `<section id>` with centered heading + max-width container.
  - `Button({ href, children, variant, download, external })` — anchor styled as button; `variant: 'primary' | 'secondary'`.
  - `Reveal({ children, delay })` — client component; fades/slides children in on scroll via Framer Motion.

- [ ] **Step 1: Create `web/components/ui/Reveal.tsx`**

```tsx
'use client';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Create `web/components/ui/Section.tsx`**

```tsx
import { Reveal } from './Reveal';

export function Section({
  id,
  title,
  children,
  className = '',
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {title && (
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `web/components/ui/Button.tsx`**

```tsx
export function Button({
  href,
  children,
  variant = 'primary',
  download = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  external?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-hover'
      : 'border border-border bg-surface text-text hover:border-accent hover:text-accent';
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download ? { download: true } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
```

- [ ] **Step 4: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 5: Checkpoint.**

---

### Task 8: Navbar & Footer, wired into layout

**Files:**
- Create: `web/components/Navbar.tsx`, `web/components/Footer.tsx`, `web/components/ui/SocialLinks.tsx`
- Modify: `web/app/layout.tsx`

**Interfaces:**
- Consumes: `portfolio.name`, `portfolio.socials`.
- Produces:
  - `SocialLinks({ className })` — row of icon links from `portfolio.socials`.
  - `Navbar()` — sticky top nav, logo = name, anchor links (About/Skills/Projects/Experience/Contact), responsive hamburger menu (client component).
  - `Footer()` — copyright + `SocialLinks`.

- [ ] **Step 1: Create `web/components/ui/SocialLinks.tsx`**

```tsx
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import { portfolio } from '@/data/portfolio';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  email: FaEnvelope,
} as const;

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {portfolio.socials.map((s) => {
        const Icon = ICONS[s.icon];
        const isMail = s.icon === 'email';
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-muted transition-colors hover:text-accent"
            {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Create `web/components/Navbar.tsx`**

```tsx
'use client';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { portfolio } from '@/data/portfolio';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold tracking-tight">
          {portfolio.name}
        </a>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-2 border-t border-border bg-background px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-1 text-sm font-medium text-muted hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Create `web/components/Footer.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <SocialLinks />
        <p className="text-sm text-muted">
          © 2026 {portfolio.name}. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Wire Navbar + Footer into `web/app/layout.tsx`**

Change the `<body>` line to:
```tsx
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
```
And add imports at the top (after the existing imports):
```tsx
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 6: Checkpoint.**

---

### Task 9: Hero section

**Files:**
- Create: `web/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: `portfolio.name`, `tagline`, `intro`, `photo`, `resumeHref`, `SocialLinks`, `Button`.
- Produces: `Hero()` — full-viewport intro with avatar, name, tagline, intro, two CTA buttons, socials.

- [ ] **Step 1: Create `web/components/sections/Hero.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <img
          src={portfolio.photo}
          alt={`${portfolio.name} profile photo`}
          width={144}
          height={144}
          className="h-36 w-36 rounded-full border-4 border-accent object-cover"
        />
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">{portfolio.location}</p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{portfolio.name}</h1>
          <p className="text-xl font-semibold text-accent md:text-2xl">{portfolio.tagline}</p>
          <p className="mx-auto max-w-2xl text-base text-muted md:text-lg">{portfolio.intro}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">View My Work</Button>
          <Button href={portfolio.resumeHref} variant="secondary" download>
            Download Résumé
          </Button>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 3: Checkpoint.**

---

### Task 10: About section

**Files:**
- Create: `web/components/sections/About.tsx`

**Interfaces:**
- Consumes: `portfolio.about` (string[]), `Section`, `Reveal`.
- Produces: `About()` rendered under `#about`.

- [ ] **Step 1: Create `web/components/sections/About.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <Section id="about" title="About Me">
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-5 text-center text-lg leading-relaxed text-muted">
          {portfolio.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 2: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 3: Checkpoint.**

---

### Task 11: Skills section

**Files:**
- Create: `web/components/ui/SkillBadge.tsx`, `web/components/sections/Skills.tsx`

**Interfaces:**
- Consumes: `portfolio.skills` (SkillGroup[]), `portfolio.codingNotesHref`, `Section`, `Reveal`, `Button`.
- Produces: `SkillBadge({ label })`; `Skills()` under `#skills` — one card per category with badges, plus a "View My Coding Notes" button.

- [ ] **Step 1: Create `web/components/ui/SkillBadge.tsx`**

```tsx
export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-text">
      {label}
    </span>
  );
}
```

- [ ] **Step 2: Create `web/components/sections/Skills.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SkillBadge } from '@/components/ui/SkillBadge';

export function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-surface">
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={portfolio.codingNotesHref} variant="secondary" external>
          View My Coding Notes
        </Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 4: Checkpoint.**

---

### Task 12: Projects section

**Files:**
- Create: `web/components/ui/ProjectCard.tsx`, `web/components/sections/Projects.tsx`

**Interfaces:**
- Consumes: `portfolio.projects` (Project[]), `Section`, `Reveal`, `Button`.
- Produces: `ProjectCard({ project })`; `Projects()` under `#projects` — grid of 8 cards + "View all on GitHub" button.

- [ ] **Step 1: Create `web/components/ui/ProjectCard.tsx`**

```tsx
import type { Project } from '@/lib/types';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
          {project.tag}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="rounded bg-background px-2 py-0.5 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-text hover:text-accent"
        >
          <FaGithub /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text hover:text-accent"
          >
            <HiArrowTopRightOnSquare /> Live
          </a>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `web/components/sections/Projects.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="https://github.com/Viscous106" variant="secondary" external>
          View All Projects on GitHub
        </Button>
      </div>
    </Section>
  );
}
```

- [ ] **Step 3: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 4: Checkpoint.**

---

### Task 13: Experience / Education timeline

**Files:**
- Create: `web/components/ui/TimelineItem.tsx`, `web/components/sections/Timeline.tsx`

**Interfaces:**
- Consumes: `portfolio.timeline` (TimelineEntry[]), `Section`, `Reveal`.
- Produces: `TimelineItem({ entry, last })`; `Timeline()` under `#experience`.

- [ ] **Step 1: Create `web/components/ui/TimelineItem.tsx`**

```tsx
import type { TimelineEntry } from '@/lib/types';

export function TimelineItem({ entry, last }: { entry: TimelineEntry; last: boolean }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!last && <span className="absolute left-[5px] top-4 h-full w-px bg-border" />}
      <div className="pb-8">
        <p className="text-sm font-medium text-muted">{entry.period}</p>
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <p className="text-accent">{entry.org}</p>
        {entry.detail && <p className="mt-1 text-sm text-muted">{entry.detail}</p>}
      </div>
    </li>
  );
}
```

- [ ] **Step 2: Create `web/components/sections/Timeline.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

export function Timeline() {
  return (
    <Section id="experience" title="Experience & Education" className="bg-surface">
      <Reveal>
        <ol className="mx-auto max-w-2xl">
          {portfolio.timeline.map((entry, i) => (
            <TimelineItem key={`${entry.org}-${i}`} entry={entry} last={i === portfolio.timeline.length - 1} />
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 3: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 4: Checkpoint.**

---

### Task 14: Achievements section

**Files:**
- Create: `web/components/sections/Achievements.tsx`

**Interfaces:**
- Consumes: `portfolio.achievements` (Achievement[]), `Section`, `Reveal`.
- Produces: `Achievements()` under `#achievements`.

- [ ] **Step 1: Create `web/components/sections/Achievements.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export function Achievements() {
  return (
    <Section id="achievements" title="Highlights">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.detail}</p>
              {a.href && (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Learn more <HiArrowTopRightOnSquare />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 3: Checkpoint.**

---

### Task 15: Contact section

**Files:**
- Create: `web/components/sections/Contact.tsx`

**Interfaces:**
- Consumes: `portfolio.socials` (email), `SocialLinks`, `Section`, `Reveal`, `Button`.
- Produces: `Contact()` under `#contact` — heading, one-liner, email button, socials. No form.

- [ ] **Step 1: Create `web/components/sections/Contact.tsx`**

```tsx
import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Contact() {
  const email = portfolio.socials.find((s) => s.icon === 'email');
  return (
    <Section id="contact" title="Get In Touch" className="bg-surface">
      <Reveal>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <p className="text-lg text-muted">
            I&apos;m open to opportunities, collaborations, and interesting problems. The fastest way to
            reach me is email.
          </p>
          {email && <Button href={email.href}>{email.href.replace('mailto:', '')}</Button>}
          <SocialLinks className="justify-center" />
        </div>
      </Reveal>
    </Section>
  );
}
```

- [ ] **Step 2: Type-check** — Run: `npx tsc --noEmit`. Expected: no errors.
- [ ] **Step 3: Checkpoint.**

---

### Task 16: Compose the page & render smoke test

**Files:**
- Modify: `web/app/page.tsx`
- Create: `web/public/Yash_Virulkar_Resume.pdf` (placeholder), `web/__tests__/page.test.tsx`

**Interfaces:**
- Consumes: all section components.
- Produces: the assembled home page.

- [ ] **Step 1: Overwrite `web/app/page.tsx`**

```tsx
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Timeline } from '@/components/sections/Timeline';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Create a placeholder résumé**

```bash
printf '%%PDF-1.4\n%% Placeholder resume - replace with real PDF\n' > web/public/Yash_Virulkar_Resume.pdf
```

- [ ] **Step 3: Write the render smoke test `web/__tests__/page.test.tsx`**

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('home page', () => {
  it('renders the name as a heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /Yash Virulkar/i })).toBeInTheDocument();
  });

  it('renders all 8 project names', () => {
    render(<Home />);
    for (const name of ['omniBox', 'Orkflow', 'nodeLive', 'rs-shell', 'RuView', 'VISC-ASSistant', 'mergit', 'CrownOS']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
  });

  it('renders section landmarks', () => {
    const { container } = render(<Home />);
    for (const id of ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeTruthy();
    }
  });
});
```

- [ ] **Step 4: Run the smoke test**

Run: `npm test`
Expected: PASS (data test + page test).
Note: Framer Motion runs in jsdom without issue for these assertions. If any section is a server component that imports a `'use client'` child, RTL still renders it in this test setup.

- [ ] **Step 5: Checkpoint.**

---

### Task 17: Build, export & deploy docs; final verification

**Files:**
- Create: `web/README.md`
- Modify: repo root `README.md`

- [ ] **Step 1: Full static build**

Run: `cd web && npm run build`
Expected: success; a `web/out/` directory is produced containing `index.html` and assets.

- [ ] **Step 2: Preview the exported site**

Run: `npx serve web/out` (or `python3 -m http.server -d web/out 8080`) and open the URL.
Manually verify:
- Hero renders with avatar (GitHub photo loads), name, tagline, both CTA buttons.
- Nav anchors scroll to each section; sticky header offset is correct.
- Mobile menu opens/closes at narrow width (resize browser).
- All 8 project cards show; "Live" link appears on nodeLive and CrownOS.
- Skills show all 6 groups incl. Web3.
- Timeline shows IITM, SST, Open Source Club.
- Achievements show OpenWISP/Karmada, mergit, CrownOS.
- Contact shows email button + socials; résumé button downloads the placeholder.
- All social/external links open in a new tab and resolve.

- [ ] **Step 3: Write `web/README.md`** with run/build/deploy instructions:

```markdown
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
`npm run build` outputs static files to `out/`.
- **Vercel:** import the repo, set root directory to `web/`. Zero config.
- **Netlify:** base `web/`, build `npm run build`, publish `web/out`.
- **GitHub Pages:** publish `web/out`. If serving from `https://<user>.github.io/<repo>/`
  (a subpath), set `basePath` and `assetPrefix` to `/<repo>` in `next.config.mjs` before building.

## Replace the résumé
Drop your real PDF at `public/Yash_Virulkar_Resume.pdf` (same filename).
```

- [ ] **Step 4: Update repo root `README.md`**

Replace its contents with a short pointer:
```markdown
# professionalPortfolio

Professional portfolio for Yash Virulkar. The live site is a Next.js app in [`web/`](./web).
See [`web/README.md`](./web/README.md) to run, build, and deploy. The original static
version is preserved in [`Portfolio/`](./Portfolio) for reference.

Design & plan docs: `docs/superpowers/`.
```

- [ ] **Step 5: Final test run**

Run: `cd web && npm test && npm run build`
Expected: tests PASS, build succeeds.

- [ ] **Step 6: Checkpoint** — report completion to owner (tests green, build green, preview verified). Owner commits.

---

## Self-Review

**Spec coverage:**
- Tech stack (Next.js/TS/Tailwind/Framer/react-icons, static export) → Tasks 1, 5, 7. ✅
- Single-source content file → Tasks 3, 4. ✅
- Isolated section components + reusable UI → Tasks 7–16. ✅
- Design direction (off-white/slate/indigo, whitespace, hover lift, fade-in, reduced-motion, focus) → Tasks 5, 7. ✅
- Hero (avatar/tagline/CTAs/socials) → Task 9. ✅
- About (prose) → Task 10. ✅
- Skills incl. Web3 group + coding-notes link → Task 11. ✅
- Projects: 8 featured incl. mergit + CrownOS, demo links, view-all → Tasks 4, 12. ✅
- Timeline: IITM, SST, Open Source Club → Tasks 4, 13. ✅
- Achievements: OpenWISP/Karmada + mergit + CrownOS → Tasks 4, 14. ✅
- Contact links-only, correct email/socials → Tasks 4, 15. ✅
- SEO/OG → Task 6. ✅
- Deploy to GH Pages/Vercel/Netlify → Tasks 1, 17. ✅
- Résumé placeholder → Task 16. ✅
- Accessibility (semantic, alt, focus, reduced-motion) → Tasks 5, 7, 9. ✅
- NO git commands → Global Constraints + checkpoints. ✅

**Placeholder scan:** No "TBD/TODO" in steps; the résumé PDF and About prose are explicitly-flagged owner follow-ups, not plan gaps. Every code step contains complete code.

**Type consistency:** `Portfolio`, `Project`, `TimelineEntry`, `Achievement`, `SocialLink`, `SkillGroup` used identically across Tasks 3, 4, 12, 13, 14. Icon keys (`github/linkedin/twitter/instagram/email`) match between `SocialLink.icon`, `data/portfolio.ts`, and `SocialLinks.tsx` ICONS map. Section ids match Navbar anchors and the page-render test.

## Open follow-ups (owner)
1. Review/adjust the About prose (Task 4 draft).
2. Supply the real résumé PDF (replace placeholder from Task 16).
