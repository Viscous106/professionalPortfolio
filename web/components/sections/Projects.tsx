import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Projects() {
  const github = portfolio.socials.find((s) => s.icon === 'github');
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      {github && (
        <div className="mt-10 text-center">
          <Button href={github.href} variant="secondary" external>
            View All Projects on GitHub
          </Button>
        </div>
      )}
    </Section>
  );
}
