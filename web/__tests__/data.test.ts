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
