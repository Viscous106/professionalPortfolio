'use client';
import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';
const EVENT = 'themechange';

// The theme lives on <html data-theme>, set before first paint by the inline script in layout.tsx.
function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
const getServerTheme = (): Theme => 'dark';

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getTheme, getServerTheme);
}

export function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Private mode or blocked storage: the switch still works for this visit.
  }
  window.dispatchEvent(new Event(EVENT));
}
