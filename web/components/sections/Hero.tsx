import { portfolio } from '@/data/portfolio';
import { BurstSticker, FerrisSticker, NixSticker, StickerLayer } from '@/components/ui/Stickers';

export function Hero() {
  return (
    <section id="home" className="wrap relative pb-6 pt-14 md:pt-20">
      <div className="guides settle">
        <div className="grid items-center gap-8 py-8 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:py-6">
          <div className="flex items-center gap-5 sm:gap-8 md:pl-10">
            {/* No photo by choice: the tile carries the monogram instead. */}
            <div
              aria-hidden
              className="graph relative grid size-[104px] shrink-0 -rotate-[9deg] place-items-center rounded-[24px] bg-tile shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] sm:size-[136px]"
            >
              <span className="display text-[44px] text-band-ink sm:text-[56px]">YV</span>
              <span className="absolute bottom-3 right-3 size-2.5 rounded-full bg-accent" />
            </div>
            <h1 className="leading-none">
              <span className="block text-[clamp(1.6rem,3vw,2.25rem)] uppercase text-accent">I&rsquo;m</span>
              <span className="display block text-[clamp(4.5rem,11vw,8.5rem)]">{portfolio.firstName}</span>
            </h1>
          </div>
          <p className="max-w-[26ch] text-[clamp(1.15rem,1.8vw,1.45rem)] leading-[1.5] md:justify-self-end">
            {portfolio.tagline}
          </p>
        </div>
      </div>
      <StickerLayer
        items={[
          { sticker: <BurstSticker size={96} />, place: { className: 'md:hidden right-3 -top-3', rotate: 12 } },
          { sticker: <BurstSticker size={128} />, place: { className: 'hidden md:block right-[36%] top-6', rotate: 12 } },
          { sticker: <NixSticker />, place: { className: 'hidden md:block right-[3%] bottom-[-6px]', rotate: -5 } },
          { sticker: <FerrisSticker width={118} />, place: { className: 'hidden md:block left-[-18px] bottom-[-34px]', rotate: -10 } },
        ]}
      />
    </section>
  );
}
