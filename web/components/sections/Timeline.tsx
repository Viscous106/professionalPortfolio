import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TimelineItem } from '@/components/ui/TimelineItem';

export function Timeline() {
  return (
    <Section id="experience" title="Experience & Education" className="bg-surface">
      <Reveal>
        <ol className="mx-auto max-w-2xl">
          {portfolio.timeline.map((entry, i) => (
            <TimelineItem key={`${entry.org}-${i}`} entry={entry} last={i === portfolio.timeline.length - 1} />
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
