import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { portfolio } from '@/data/portfolio';

const inPublic = (src: string) => existsSync(join(process.cwd(), 'public', src));

const all = JSON.stringify(portfolio);

describe('portfolio content', () => {
  it('has core identity fields', () => {
    expect(portfolio.name).toBe('Yash Virulkar');
    expect(portfolio.firstName).toBe('Yash');
    expect(portfolio.location).toBe('Bangalore, India');
    expect(portfolio.email).toBe('yash.virulkar@proton.me');
    expect(portfolio.resumeHref).toBe('/Yash_Virulkar_Resume.pdf');
  });

  it('leads the case-study carousel with Mergit and links out instead of embedding screenshots', () => {
    expect(portfolio.cases[0].name).toBe('Mergit');
    expect(portfolio.cases[0].href).toBe('https://mergit.site');
    expect(portfolio.cases.length).toBeGreaterThanOrEqual(4);
    for (const c of portfolio.cases) {
      expect(c.href).toMatch(/^https:\/\//);
      expect(c.panel.features).toHaveLength(3);
      expect(c.panel.tiles).toHaveLength(2);
    }
    expect(JSON.stringify(portfolio.cases)).not.toMatch(/\.(png|jpe?g|webp|svg)"/);
  });

  it('states stats that match the resume', () => {
    const stats = Object.fromEntries(portfolio.stats.map((s) => [s.label, s.value]));
    expect(stats['Merged open-source PRs']).toBe('6');
    expect(stats['Hackathon wins']).toBe('2×');
    expect(stats['People using Mergit']).toBe('~50');
  });

  it('has three capabilities', () => {
    expect(portfolio.capabilities).toHaveLength(3);
  });

  it('groups open source by organisation, each with a logo that exists and a link', () => {
    expect(portfolio.orgs.map((o) => o.name)).toEqual(['KCL', 'Karmada', 'OpenWISP']);
    for (const o of portfolio.orgs) {
      expect(inPublic(o.logo)).toBe(true);
      expect(o.href).toMatch(/^https:\/\/github\.com\//);
    }
    expect(portfolio.orgs.reduce((n, o) => n + o.merged, 0)).toBe(6);
  });

  it('gives every role a logo that exists', () => {
    for (const e of portfolio.experience) expect(inPublic(e.logo)).toBe(true);
  });

  it('lists the Mergit co-founder and Web3 Lead roles and both degrees', () => {
    const roles = portfolio.experience.map((e) => `${e.title} @ ${e.org}`);
    expect(roles).toContain('Co-founder @ Mergit');
    expect(roles).toContain('Web3 Lead @ Open Source Club, Scaler School of Technology');
    expect(portfolio.education.map((e) => e.dates)).toEqual(['Aug 2025 – May 2029', 'Sep 2024 – Sep 2028']);
  });

  it('shows Crown-OS only as a contribution', () => {
    expect(all).not.toMatch(/(founder|maintainer)[^"]*crown|crown[^"]*(founder|maintainer)/i);
    expect(portfolio.cases.find((c) => c.name === 'CrownOS')?.kicker).toMatch(/contributor/i);
  });

  it('has the five socials, X before LinkedIn', () => {
    expect(portfolio.socials.map((s) => s.label)).toEqual(['GitHub', 'X', 'LinkedIn', 'Email', 'Instagram']);
  });

  it('contains none of the retired or private facts and no invented testimonials', () => {
    for (const banned of ['InterviewBit', 'RuView', 'Monad', 'mainnet', 'gmail', 'USDC', '98347', 'Abhinav', 'track for ~200', 'get paid', 'are paid', 'testimonial']) {
      expect(all.toLowerCase()).not.toContain(banned.toLowerCase());
    }
  });
});
