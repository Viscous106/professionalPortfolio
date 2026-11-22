import type { IconType } from 'react-icons';

/**
 * The reference's section header: a tilted accent tile, a condensed title and a short mono description, set
 * between dashed blueprint guides.
 */
export function SectionHead({
  icon: IconC,
  title,
  description,
  dark = false,
}: {
  icon: IconType;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className={`guides ${dark ? '[--guide:var(--band-line)]' : ''}`}>
      <div className="flex flex-col items-start gap-5 py-7 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <div className="flex items-center gap-4">
          <span className="grid size-11 shrink-0 -rotate-[8deg] place-items-center rounded-[12px] bg-accent text-accent-ink shadow-[0_6px_16px_-6px_var(--accent)]">
            <IconC size={22} aria-hidden />
          </span>
          <h2 className={`display text-[clamp(2.1rem,4.2vw,3.1rem)] ${dark ? 'text-band-ink' : ''}`}>{title}</h2>
        </div>
        <p className={`max-w-[30ch] text-[15px] leading-[1.55] ${dark ? 'text-band-muted' : 'text-muted'}`}>{description}</p>
      </div>
    </div>
  );
}
