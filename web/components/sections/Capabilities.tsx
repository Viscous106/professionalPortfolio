import { TbBolt } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { SectionHead } from '@/components/ui/SectionHead';
import { Icon } from '@/components/ui/Icon';

export function Capabilities() {
  return (
    <section id="capabilities" className="wrap pt-24 md:pt-32">
      <SectionHead icon={TbBolt} title="Capabilities" description="Here’s what I build, and what I build it with." />
      <ul className="mt-12 grid gap-5 md:grid-cols-3 lg:px-10">
        {portfolio.capabilities.map((c) => (
          <li key={c.title} className="graph rounded-[18px] border border-line bg-panel p-4">
            <div className="flex aspect-[4/3] flex-col justify-between rounded-[12px] bg-band p-5 text-band-ink">
              <Icon name={c.icon} size={34} className="text-lime" />
              <ul className="flex flex-wrap gap-1.5">
                {c.items.map((it) => (
                  <li key={it} className="rounded-[6px] border border-band-line px-2 py-0.5 text-[12px] text-band-muted">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="mt-5 text-center text-[15px] font-semibold">{c.title}</h3>
            <p className="mx-auto mt-1 max-w-[32ch] pb-2 text-center text-[13px] leading-[1.55] text-muted">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
