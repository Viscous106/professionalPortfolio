import { portfolio } from '@/data/portfolio';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Contact() {
  const email = portfolio.socials.find((s) => s.icon === 'email');
  return (
    <Section id="contact" title="Get In Touch" className="bg-surface">
      <Reveal>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <p className="text-lg text-muted">
            I&apos;m open to opportunities, collaborations, and interesting problems. The fastest way to
            reach me is email.
          </p>
          {email && <Button href={email.href}>{email.href.replace('mailto:', '')}</Button>}
          <SocialLinks className="justify-center" />
        </div>
      </Reveal>
    </Section>
  );
}
