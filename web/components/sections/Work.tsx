'use client';
import { useState } from 'react';
import { TbArrowLeft, TbArrowRight, TbArrowUpRight } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { RoundelSticker, StickerLayer } from '@/components/ui/Stickers';

/**
 * The reference's showcase card: graph-paper card, condensed title, "// 01" pager, and a dark inner panel. The
 * panel is built from real text and numbers; the projects' own sites hold their screenshots, so the card links out.
 */
export function Work() {
  const cases = portfolio.cases;
  const [i, setI] = useState(0);
  const c = cases[i];
  const go = (d: number) => setI((n) => (n + d + cases.length) % cases.length);

  return (
    <section id="work" className="wrap pt-10 md:pt-14">
      <article className="graph relative rounded-[28px] border border-line bg-card p-5 sm:p-8 md:p-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h2 className="sr-only">Work</h2>
            <h3 className="display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              {c.name}
              <span className="text-muted">/ </span>
              <span className="text-[0.62em] text-muted">{c.kicker}</span>
            </h3>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-[15px] text-accent hover:underline"
            >
              {c.linkLabel}
              <TbArrowUpRight size={17} aria-hidden />
              <span className="sr-only">: {c.name}</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-right">
              <p className="text-[15px] text-accent">{`// ${String(i + 1).padStart(2, '0')}`}</p>
              <div className="mt-2 flex gap-1.5" aria-hidden>
                {cases.map((x, k) => (
                  <span key={x.name} className={`h-[2px] w-5 ${k === i ? 'bg-accent' : 'bg-ink/80'}`} />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous case study"
                className="grid size-10 place-items-center rounded-[10px] border border-line bg-panel transition-colors hover:border-ink"
              >
                <TbArrowLeft size={17} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next case study"
                className="grid size-10 place-items-center rounded-[10px] border border-line bg-panel transition-colors hover:border-ink"
              >
                <TbArrowRight size={17} aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div key={c.name} className="settle mt-8 overflow-hidden rounded-[20px] bg-band p-6 text-band-ink sm:p-10 md:mx-6 lg:mx-14">
          <div className="grid gap-6 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-end">
            <p className="font-serif text-[clamp(2.2rem,4.4vw,3.4rem)] leading-[1.02]">
              {c.panel.headline} <em className="text-lime">{c.panel.accent}</em>
            </p>
            <p className="max-w-[44ch] text-[13px] leading-[1.6] text-band-muted">{c.panel.blurb}</p>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-band-line pt-5 text-[12.5px] text-lime sm:grid-cols-3">
            {c.panel.features.map((f, k) => (
              <li key={f.label} className={`flex items-center gap-2 ${k === 1 ? 'sm:justify-center' : ''} ${k === 2 ? 'sm:justify-end' : ''}`}>
                <Icon name={f.icon} size={15} />
                {f.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.panel.tiles.map((t) => (
              <div key={t.label} className="graph rounded-[16px] bg-panel p-5 text-ink">
                <p className="text-[11px] uppercase tracking-[0.08em] text-muted">{t.note}</p>
                <p className="mt-3 flex items-baseline gap-3">
                  <span className="display text-[44px] text-[#1a9b5a] dark:text-live">{t.value}</span>
                  <span className="text-[13px] text-muted">{t.label}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <StickerLayer items={[{ sticker: <RoundelSticker size={120} />, place: { className: 'hidden sm:block -right-6 top-[34%]', rotate: 14 } }]} />
      </article>
    </section>
  );
}
