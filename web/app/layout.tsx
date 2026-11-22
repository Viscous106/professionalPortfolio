import type { Metadata } from 'next';
import { Anton, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { portfolio } from '@/data/portfolio';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' });

const title = `${portfolio.name}: ${portfolio.tagline}`;

export const metadata: Metadata = {
  title: `${portfolio.name}, software engineer`,
  description: portfolio.intro,
  openGraph: { title, description: portfolio.intro, type: 'website' },
  twitter: { card: 'summary', title, description: portfolio.intro },
};

// Runs before first paint so the page never flashes the wrong theme. The reference look is light.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${jetbrains.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
