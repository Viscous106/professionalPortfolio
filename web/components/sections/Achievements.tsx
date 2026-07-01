import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export function Achievements() {
  return (
    <Section id="achievements" title="Highlights">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-2 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.detail}</p>
              {a.href && (
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Learn more <HiArrowTopRightOnSquare aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
