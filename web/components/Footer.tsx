import { portfolio } from '@/data/portfolio';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="wrap flex flex-col-reverse items-start justify-between gap-5 py-7 text-[13px] text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {portfolio.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
