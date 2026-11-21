import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('home page', () => {
  it('renders the name as a heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /Yash Virulkar/i })).toBeInTheDocument();
  });

  it('renders featured project names', () => {
    render(<Home />);
    for (const name of ['omniBox', 'Orkflow', 'nodeLive', 'rs-shell', 'VISC-ASSistant', 'mergit', 'CrownOS']) {
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
