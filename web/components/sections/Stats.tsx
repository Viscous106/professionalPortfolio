import { TbChartBar } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { SectionHead } from '@/components/ui/SectionHead';
import { StickerLayer, TicketSticker } from '@/components/ui/Stickers';

export function Stats() {
  return (
    <section id="stats" className="wrap relative pt-24 md:pt-32">
      <SectionHead icon={TbChartBar} title="Stats" description="A quick look at the measurable side of the work so far." />
      <dl className="mt-10 grid grid-cols-2 border-y border-dashed border-line md:grid-cols-4">
        {portfolio.stats.map((s, k) => (
          <div
            key={s.label}
            className={`px-4 py-8 sm:px-8 ${k % 2 === 1 ? 'border-l' : ''} ${k > 1 ? 'border-t md:border-t-0' : ''} ${k > 0 ? 'md:border-l' : ''} border-dashed border-line`}
          >
            <dt className="text-[13px] text-muted">{s.label}</dt>
            <dd>
              <span className="display mt-2 block text-[clamp(3rem,6vw,4.5rem)]">{s.value}</span>
              <span className="mt-1 block text-[13px] text-accent">{s.note}</span>
            </dd>
          </div>
        ))}
      </dl>
      <StickerLayer items={[{ sticker: <TicketSticker />, place: { className: 'hidden md:block left-[4%] top-[118px]', rotate: -8 } }]} />
    </section>
  );
}
