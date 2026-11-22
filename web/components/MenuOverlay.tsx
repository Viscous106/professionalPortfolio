'use client';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import { NAV } from '@/lib/nav';

/** The small-screen menu: the same sections as the dotted nav, set large. */
export function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="graph fixed inset-0 z-50 flex flex-col bg-page"
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="wrap flex h-[76px] w-full items-center justify-end border-b border-line">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-10 place-items-center rounded-[10px] border border-line bg-panel px-3 text-[14px]"
            >
              Close
            </button>
          </div>
          <nav className="wrap flex w-full flex-1 flex-col justify-center">
            <ul className="divide-y divide-dashed divide-line border-y border-dashed border-line">
              {NAV.map((n, i) => (
                <li key={n.href}>
                  <a href={n.href} onClick={onClose} className="flex items-baseline justify-between py-4 transition-colors hover:text-accent">
                    <span className="display text-[clamp(2.5rem,11vw,4.5rem)]">{n.label}</span>
                    <span aria-hidden className="text-[14px] text-accent">{`// ${String(i + 1).padStart(2, '0')}`}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="wrap flex w-full flex-wrap items-center justify-between gap-4 py-6 text-[14px]">
            <a href={`mailto:${portfolio.email}`} className="link">
              {portfolio.email}
            </a>
            <a href={portfolio.resumeHref} download className="link">
              Resume, PDF
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
