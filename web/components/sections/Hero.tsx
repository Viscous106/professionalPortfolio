import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { withBasePath } from '@/lib/basePath';

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <img
          src={portfolio.photo}
          alt={`${portfolio.name} profile photo`}
          width={144}
          height={144}
          className="h-36 w-36 rounded-full border-4 border-accent object-cover"
        />
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">{portfolio.location}</p>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{portfolio.name}</h1>
          <p className="text-xl font-semibold text-accent md:text-2xl">{portfolio.tagline}</p>
          <p className="mx-auto max-w-2xl text-base text-muted md:text-lg">{portfolio.intro}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">View My Work</Button>
          <Button href={withBasePath(portfolio.resumeHref)} variant="secondary" download>
            Download Résumé
          </Button>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
