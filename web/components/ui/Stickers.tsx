'use client';
import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TbGitMerge, TbSnowflake } from 'react-icons/tb';

/*
 * Die-cut stickers: thick white outline, soft drop shadow, slightly rotated. They are decoration only (the facts
 * they repeat are stated in the page text), so every layer is aria-hidden. Each can be dragged around its section.
 */

const DIECUT = 'drop-shadow(0 10px 14px rgba(0,0,0,0.22))';

type Place = { className: string; rotate: number };

export function StickerLayer({ items, className = '' }: { items: { sticker: React.ReactNode; place: Place }[]; className?: string }) {
  const bounds = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  return (
    <div ref={bounds} aria-hidden="true" className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      {items.map(({ sticker, place }, k) => (
        <motion.div
          key={k}
          data-sticker
          drag
          dragConstraints={bounds}
          dragElastic={0.15}
          dragMomentum={false}
          initial={reduce ? false : { scale: 0.6, opacity: 0, rotate: place.rotate - 12 }}
          whileInView={{ scale: 1, opacity: 1, rotate: place.rotate }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 + k * 0.08 }}
          whileHover={reduce ? undefined : { scale: 1.07, rotate: place.rotate + 5 }}
          whileDrag={{ scale: 1.12, rotate: place.rotate - 6, zIndex: 30 }}
          style={{ rotate: place.rotate, filter: DIECUT }}
          className={`pointer-events-auto absolute cursor-grab touch-none select-none active:cursor-grabbing ${place.className}`}
        >
          {sticker}
        </motion.div>
      ))}
    </div>
  );
}

/** Orange starburst: "2× hackathon winner". */
export function BurstSticker({ size = 150 }: { size?: number }) {
  const points = Array.from({ length: 32 }, (_, i) => {
    const r = i % 2 === 0 ? 48 : 40;
    const a = (Math.PI * 2 * i) / 32;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox="-4 -4 108 108">
      <polygon points={points} fill="var(--accent)" stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
      <text x="50" y="52" textAnchor="middle" fill="#fff" style={{ font: '400 34px var(--font-anton)' }}>
        2×
      </text>
      <text x="50" y="66" textAnchor="middle" fill="#fff" style={{ font: '700 7.5px var(--font-jetbrains)', letterSpacing: '0.06em' }}>
        HACKATHON
      </text>
      <text x="50" y="75" textAnchor="middle" fill="#fff" style={{ font: '700 7.5px var(--font-jetbrains)', letterSpacing: '0.06em' }}>
        WINNER
      </text>
    </svg>
  );
}

/** Lime roundel with text on a circle: "ETHGlobal Mumbai · 2nd place". */
export function RoundelSticker({ size = 132 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <path id="roundel-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="var(--lime)" stroke="#fff" strokeWidth="5" />
      <circle cx="50" cy="50" r="27" fill="none" stroke="#0e140f" strokeWidth="0.8" strokeDasharray="2 2" />
      <text fill="#0e140f" style={{ font: '700 8.4px var(--font-jetbrains)' }}>
        <textPath href="#roundel-path" textLength="214" lengthAdjust="spacing">ETHGLOBAL MUMBAI · 2ND PLACE ·</textPath>
      </text>
      <text x="50" y="58" textAnchor="middle" fill="#0e140f" style={{ font: '400 25px var(--font-anton)' }}>
        2ND
      </text>
    </svg>
  );
}

/** Dark pill: "I use Nix btw". */
export function NixSticker() {
  return (
    <span className="flex items-center gap-2 rounded-full border-[4px] border-white bg-[#0e140f] px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] text-[#9ecbff]">
      <TbSnowflake size={18} />I use Nix btw
    </span>
  );
}

/** Ferris the Rustacean (CC0, rustacean.net). */
export function FerrisSticker({ width = 150 }: { width?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/stickers/ferris.svg"
      alt=""
      width={width}
      draggable={false}
      style={{
        filter:
          'drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff)',
      }}
    />
  );
}

/** Ticket stub: "6 PRs merged". */
export function TicketSticker() {
  return (
    <span className="relative flex items-center gap-3 rounded-[10px] border-[4px] border-white bg-panel px-4 py-2.5 text-ink">
      <TbGitMerge size={22} className="text-accent" />
      <span className="leading-none">
        <span className="display block text-[26px]">6 PRs</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted">merged upstream</span>
      </span>
      <span className="absolute -left-[9px] top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-white" />
      <span className="absolute -right-[9px] top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-white" />
    </span>
  );
}

/** A plain two-tone diamond with a "gm". */
export function DiamondSticker({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 80 100">
      <polygon points="40,4 74,52 40,96 6,52" fill="#fff" />
      <polygon points="40,10 68,51 40,67 12,51" fill="#8f87ff" />
      <polygon points="40,10 40,67 12,51" fill="#b7b1ff" />
      <polygon points="40,72 66,56 40,90 14,56" fill="#5f56e0" />
      <polygon points="40,72 40,90 14,56" fill="#7a72f0" />
      <text x="40" y="45" textAnchor="middle" fill="#fff" style={{ font: '700 11px var(--font-jetbrains)' }}>
        gm
      </text>
    </svg>
  );
}

/** Rubber-stamp roundel: where and when. */
export function StampSticker({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <path id="stamp-path" d="M50,50 m-33,0 a33,33 0 1,1 66,0 a33,33 0 1,1 -66,0" />
      </defs>
      <circle cx="50" cy="50" r="47" fill="#fff" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="50" cy="50" r="24" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" />
      <text fill="var(--accent)" style={{ font: '700 8px var(--font-jetbrains)' }}>
        <textPath href="#stamp-path" textLength="203" lengthAdjust="spacing">BANGALORE · INDIA · IST ·</textPath>
      </text>
      <text x="50" y="57" textAnchor="middle" fill="var(--accent)" style={{ font: '400 20px var(--font-anton)' }}>
        BLR
      </text>
    </svg>
  );
}
