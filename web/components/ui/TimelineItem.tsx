import type { TimelineEntry } from '@/lib/types';

export function TimelineItem({ entry, last }: { entry: TimelineEntry; last: boolean }) {
  return (
    <li className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!last && <span className="absolute left-[5px] top-4 h-full w-px bg-border" />}
      <div className="pb-8">
        <p className="text-sm font-medium text-muted">{entry.period}</p>
        <h3 className="text-lg font-semibold">{entry.title}</h3>
        <p className="text-accent">{entry.org}</p>
        {entry.detail && <p className="mt-1 text-sm text-muted">{entry.detail}</p>}
      </div>
    </li>
  );
}
