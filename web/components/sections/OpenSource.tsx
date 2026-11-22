import { TbArrowUpRight, TbGitPullRequest } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { SectionHead } from '@/components/ui/SectionHead';
import { DiamondSticker, FerrisSticker, StickerLayer } from '@/components/ui/Stickers';

/** The reference's dark "Journal" band, used for the organisations I have contributed to. */
export function OpenSource() {
  const total = portfolio.orgs.reduce((n, o) => n + o.merged, 0);
  return (
    <section id="open-source" className="relative mt-24 overflow-hidden bg-band py-20 text-band-ink md:mt-32 md:py-28">
      <div className="graph pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="wrap relative">
        <SectionHead
          dark
          icon={TbGitPullRequest}
          title="Open source"
          description={`Organisations I have contributed to: ${total} merged pull requests, each through maintainer review.`}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3 lg:px-10">
          {portfolio.orgs.map((o, k) => (
            <li key={o.name}>
              <a href={o.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <div
                  className={`flex h-full flex-col rounded-[18px] border p-6 transition-transform group-hover:-translate-y-1 ${
                    k === 1 ? 'border-transparent bg-accent text-accent-ink' : 'border-band-line bg-[#141a15] text-band-ink'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-[76px] -rotate-[6deg] place-items-center rounded-[18px] bg-white p-3 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.6)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={o.logo} alt={`${o.name} logo`} width={52} height={52} className="size-[52px] object-contain" />
                    </span>
                    <span className="display text-[44px] leading-none opacity-90">
                      {o.merged}
                      <span className="ml-1 align-top text-[13px] tracking-normal opacity-80">{o.merged === 1 ? 'PR' : 'PRs'}</span>
                    </span>
                  </div>
                  <h3 className="display mt-8 text-[38px]">{o.name}</h3>
                  <p className={`mt-1 text-[12.5px] ${k === 1 ? 'text-white/80' : 'text-band-muted'}`}>
                    {o.foundation} · {o.languages}
                  </p>
                  <p className={`mt-4 flex-1 text-[13px] leading-[1.6] ${k === 1 ? 'text-white/90' : 'text-band-ink/85'}`}>{o.summary}</p>
                  <span className={`mt-6 inline-flex items-center gap-1.5 text-[13px] ${k === 1 ? 'text-white' : 'text-lime'}`}>
                    See the merged work <TbArrowUpRight size={15} aria-hidden />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <StickerLayer
        items={[
          { sticker: <DiamondSticker size={78} />, place: { className: 'hidden md:block left-[5%] top-[70px]', rotate: -12 } },
          { sticker: <FerrisSticker width={104} />, place: { className: 'hidden md:block right-[5%] bottom-[34px]', rotate: 8 } },
        ]}
      />
    </section>
  );
}
