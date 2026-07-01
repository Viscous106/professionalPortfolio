import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SkillBadge } from '@/components/ui/SkillBadge';

export function Skills() {
  return (
    <Section id="skills" title="Skills" className="bg-surface">
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-background p-6">
              <h3 className="mb-4 text-lg font-semibold text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={portfolio.codingNotesHref} variant="secondary" external>
          View My Coding Notes
        </Button>
      </div>
    </Section>
  );
}
