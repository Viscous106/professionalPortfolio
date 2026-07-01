import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa6';
import { portfolio } from '@/data/portfolio';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  email: FaEnvelope,
} as const;

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {portfolio.socials.map((s) => {
        const Icon = ICONS[s.icon];
        const isMail = s.icon === 'email';
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-muted transition-colors hover:text-accent"
            {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}
