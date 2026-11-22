import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

describe('home page', () => {
  it('introduces Yash in one h1', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /I’m\s*Yash/i })).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('renders every section the navigation points to', () => {
    const { container } = render(<Home />);
    for (const id of ['home', 'work', 'stats', 'capabilities', 'open-source', 'about', 'contact']) {
      expect(container.querySelector(`#${id}`)).toBeTruthy();
    }
  });

  it('pages through the case studies with next and previous', () => {
    render(<Home />);
    const work = document.getElementById('work')!;
    expect(within(work).getByRole('heading', { name: /Mergit/ })).toBeInTheDocument();
    expect(within(work).getByText('// 01')).toBeInTheDocument();
    fireEvent.click(within(work).getByRole('button', { name: 'Next case study' }));
    expect(within(work).getByText('// 02')).toBeInTheDocument();
    fireEvent.click(within(work).getByRole('button', { name: 'Previous case study' }));
    expect(within(work).getByText('// 01')).toBeInTheDocument();
    expect(within(work).getByRole('link', { name: /Explore the work/ })).toHaveAttribute('href', 'https://mergit.site');
    expect(work.querySelector('img')).toBeNull();
  });

  it('shows the open-source organisations with logos instead of individual PRs', () => {
    render(<Home />);
    const oss = document.getElementById('open-source')!;
    for (const org of ['KCL', 'Karmada', 'OpenWISP']) {
      expect(within(oss).getByRole('heading', { name: org })).toBeInTheDocument();
      expect(within(oss).getByRole('img', { name: new RegExp(`${org} logo`) })).toBeInTheDocument();
    }
    expect(oss.textContent).not.toMatch(/#2106|#7489|#1190/);
  });

  it('shows logos on the role cards', () => {
    render(<Home />);
    const about = document.getElementById('about')!;
    expect(within(about).getByRole('img', { name: /Mergit logo/ })).toBeInTheDocument();
    // One merged club card: Web3 Lead within the Open Source Club, not a separate Core Member card.
    expect(within(about).getAllByRole('img', { name: /Scaler School of Technology logo/ })).toHaveLength(1);
    expect(within(about).queryByText('Core Member')).toBeNull();
  });

  it('decorates the page with draggable stickers that screen readers skip', () => {
    const { container } = render(<Home />);
    const stickers = container.querySelectorAll('[data-sticker]');
    expect(stickers.length).toBeGreaterThanOrEqual(6);
    for (const st of stickers) expect(st.closest('[aria-hidden="true"]')).not.toBeNull();
  });

  it('has no FAQ section', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('#faq')).toBeNull();
    expect(screen.queryByRole('heading', { name: 'FAQ' })).toBeNull();
  });

  it('ends with email and resume', () => {
    render(<Home />);
    const contact = document.getElementById('contact')!;
    expect(within(contact).getByRole('link', { name: /Email me/ })).toHaveAttribute('href', 'mailto:yash.virulkar@proton.me');
    expect(within(contact).getByRole('link', { name: /resume/i })).toHaveAttribute('href', '/Yash_Virulkar_Resume.pdf');
  });
});

describe('header', () => {
  it('has dotted section navigation and an email call to action', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Sections' });
    for (const [label, href] of [['Home', '#home'], ['Work', '#work'], ['Open source', '#open-source'], ['About', '#about'], ['Contact', '#contact']]) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', href);
    }
    expect(screen.getByRole('link', { name: /Email me/ })).toHaveAttribute('href', 'mailto:yash.virulkar@proton.me');
    expect(screen.getByText(/Open to roles/)).toBeInTheDocument();
  });

  it('opens a mobile menu and closes it', async () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    const menu = screen.getByRole('dialog', { name: 'Site menu' });
    expect(within(menu).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    fireEvent.click(within(menu).getByRole('button', { name: 'Close menu' }));
    await waitFor(() => expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull());
  });

  it('toggles the theme on <html> and remembers it', () => {
    document.documentElement.dataset.theme = 'light';
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});

describe('footer', () => {
  it('is just the name, year and socials, with no build credits', () => {
    const { container } = render(<Footer />);
    expect(container.textContent).toMatch(/© \d{4} Yash Virulkar/);
    expect(container.textContent).not.toMatch(/Next\.js|deployed|Built with/i);
  });
});
