import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <Section id="about" title="About Me">
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-5 text-center text-lg leading-relaxed text-muted">
          {portfolio.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
