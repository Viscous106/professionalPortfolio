import { describe, it, expect } from 'vitest';
import { portfolio } from '@/data/portfolio';

describe('portfolio content', () => {
  it('has core identity fields', () => {
    expect(portfolio.name).toBe('Yash Virulkar');
    expect(portfolio.photo).toBe('https://github.com/Viscous106.png');
    expect(portfolio.tagline.length).toBeGreaterThan(0);
  });

  it('features 11 projects, led by mergit, without RuView', () => {
    expect(portfolio.projects).toHaveLength(11);
    const names = portfolio.projects.map((p) => p.name);
    expect(names[0]).toBe('mergit');
    expect(names).toContain('CrownOS');
    expect(names).toContain('omniBox');
    expect(names).not.toContain('RuView');
  });

  it('shows Yash as a Crown-OS contributor, never its founder or maintainer', () => {
    const crown = portfolio.projects.find((p) => p.name === 'CrownOS')!;
    expect(crown.blurb).toMatch(/contributor/i);
    expect(JSON.stringify(portfolio)).not.toMatch(/(founder|maintainer)[^"]*crown|crown[^"]*(founder|maintainer)/i);
  });

  it('lists the Mergit co-founder role, the ETHGlobal result and the Web3 Lead role', () => {
    const roles = portfolio.timeline.map((t) => `${t.title} @ ${t.org}`);
    expect(roles).toContain('Co-founder @ Mergit');
    expect(roles).toContain('Web3 Lead @ Open Source Club — SST');
    expect(portfolio.achievements.map((a) => a.title)).toContain('2nd place, ETHGlobal Mumbai');
  });

  it('links achievements to pages a logged-out visitor can open', () => {
    for (const a of portfolio.achievements) {
      expect(a.href ?? '').not.toMatch(/^https:\/\/github\.com\/pulls/);
    }
  });

  it('attributes ~200 to the club, not the Web3 track', () => {
    expect(JSON.stringify(portfolio)).not.toMatch(/track for ~200/);
  });

  it('matches the profile README: 2x hackathon winner, no mentoring line, X before LinkedIn', () => {
    expect(portfolio.intro).toMatch(/2× hackathon winner/i);
    expect(JSON.stringify(portfolio)).not.toMatch(/Mentoring students/);
    const labels = portfolio.socials.map((s) => s.label);
    expect(labels.indexOf('X')).toBe(labels.indexOf('LinkedIn') - 1);
    const eth = portfolio.achievements.find((a) => a.title === '2nd place, ETHGlobal Mumbai')!;
    expect(eth.href).toBe('https://github.com/mergit-io');
  });

  it('contains none of the retired or private facts', () => {
    const all = JSON.stringify(portfolio);
    for (const banned of ['InterviewBit', 'RuView', 'Monad', 'mainnet', 'gmail', 'USDC', '98347', 'Abhinav']) {
      expect(all).not.toContain(banned);
    }
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
    expect(email!.href).toBe('mailto:yash.virulkar@proton.me');
  });
});
