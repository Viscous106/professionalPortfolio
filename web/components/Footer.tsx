import { portfolio } from '@/data/portfolio';
import { SocialLinks } from './ui/SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <SocialLinks />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {portfolio.name}. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
