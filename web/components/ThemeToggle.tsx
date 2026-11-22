'use client';
import { TbMoon, TbSun } from 'react-icons/tb';
import { setTheme, useTheme, type Theme } from '@/lib/theme';

export function ThemeToggle() {
  const theme = useTheme();
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      className="grid size-10 place-items-center rounded-[12px] border border-line bg-panel transition-colors hover:border-ink"
    >
      {theme === 'dark' ? <TbSun size={18} aria-hidden /> : <TbMoon size={18} aria-hidden />}
    </button>
  );
}
