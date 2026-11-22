'use client';
import { Fragment, useEffect, useState } from 'react';
import { TbMail } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MenuOverlay } from '@/components/MenuOverlay';
import { NAV } from '@/lib/nav';


/** Highlights the nav item for the section in view. Skipped where IntersectionObserver is missing (tests). */
function useActiveSection() {
  const [active, setActive] = useState('#home');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const ids = NAV.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // The menu renders beside the header: a backdrop-filtered header would otherwise trap the fixed overlay.
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-panel/95 backdrop-blur">
        <div className="wrap flex h-[76px] items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#home"
              aria-label="Back to top"
              className="display grid size-11 place-items-center rounded-[12px] border border-line bg-panel text-[17px] shadow-[0_2px_0_var(--line)]"
            >
              YV
            </a>
            <p className="hidden items-center gap-2 text-[14px] text-live sm:flex">
              <span className="relative grid size-3.5 place-items-center rounded-full bg-live/20">
                <span className="size-2 rounded-full bg-live" />
              </span>
              {portfolio.status}
            </p>
          </div>

          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center gap-3 text-[14px]">
              {NAV.map((n, i) => (
                <Fragment key={n.href}>
                  {i > 0 && (
                    <li aria-hidden className="text-ink">
                      •
                    </li>
                  )}
                  <li>
                    <a
                      href={n.href}
                      className={`transition-colors hover:text-accent ${active === n.href ? 'text-accent' : ''}`}
                      aria-current={active === n.href ? 'true' : undefined}
                    >
                      {n.label}
                    </a>
                  </li>
                </Fragment>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${portfolio.email}`}
              className="flex h-10 items-center gap-2 rounded-[10px] bg-accent px-4 text-[14px] font-medium text-accent-ink shadow-[0_6px_18px_-8px_var(--accent)] transition-transform hover:-translate-y-px"
            >
              <TbMail size={17} aria-hidden />
              <span>Email me</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-10 place-items-center rounded-[10px] border border-line bg-panel px-3 text-[14px] lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
