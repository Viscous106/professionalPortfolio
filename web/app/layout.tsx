import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { portfolio } from '@/data/portfolio';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: `${portfolio.name} — Software Engineer`,
  description: portfolio.intro,
  openGraph: {
    title: `${portfolio.name} — Software Engineer`,
    description: portfolio.intro,
    type: 'website',
    images: [portfolio.photo],
  },
  twitter: {
    card: 'summary',
    title: `${portfolio.name} — Software Engineer`,
    description: portfolio.intro,
    images: [portfolio.photo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
