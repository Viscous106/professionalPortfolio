import type { Project } from '@/lib/types';
import { FaGithub } from 'react-icons/fa6';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
          {project.tag}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="rounded bg-background px-2 py-0.5 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-text hover:text-accent"
        >
          <FaGithub aria-hidden="true" /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text hover:text-accent"
          >
            <HiArrowTopRightOnSquare aria-hidden="true" /> Live
          </a>
        )}
      </div>
    </div>
  );
}
