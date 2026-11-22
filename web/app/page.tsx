import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { Stats } from '@/components/sections/Stats';
import { Capabilities } from '@/components/sections/Capabilities';
import { OpenSource } from '@/components/sections/OpenSource';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Stats />
      <Capabilities />
      <OpenSource />
      <About />
      <Contact />
    </>
  );
}
