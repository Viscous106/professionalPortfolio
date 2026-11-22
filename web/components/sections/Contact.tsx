import { TbDownload, TbMail } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { SectionHead } from '@/components/ui/SectionHead';
import { BurstSticker, StampSticker, StickerLayer } from '@/components/ui/Stickers';

export function Contact() {
  const elsewhere = portfolio.socials.filter((s) => s.icon !== 'email');
  return (
    <section id="contact" className="wrap py-24 md:py-32">
      <SectionHead icon={TbMail} title="Contact" description="Open to engineering roles and founding teams. Email is fastest." />
      <div className="graph relative mt-12 rounded-[28px] border border-line bg-card px-6 py-12 text-center sm:px-10 md:py-16">
        <p className="display text-[clamp(2.6rem,7vw,5.5rem)]">
          Let&rsquo;s build <span className="text-accent">something</span>
        </p>
        <p className="mt-4 text-[15px] text-muted">{portfolio.email}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${portfolio.email}`}
            className="flex h-12 items-center gap-2 rounded-[12px] bg-accent px-6 text-[15px] font-medium text-accent-ink shadow-[0_8px_22px_-10px_var(--accent)] transition-transform hover:-translate-y-px"
          >
            <TbMail size={18} aria-hidden />
            Email me
          </a>
          <a
            href={portfolio.resumeHref}
            download
            className="flex h-12 items-center gap-2 rounded-[12px] border border-line bg-panel px-6 text-[15px] font-medium transition-colors hover:border-ink"
          >
            <TbDownload size={18} aria-hidden />
            Download resume
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px]">
          {elsewhere.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <StickerLayer
          items={[
            { sticker: <StampSticker size={112} />, place: { className: 'right-[3%] -top-10 md:right-[8%]', rotate: 10 } },
            { sticker: <BurstSticker size={96} />, place: { className: 'hidden md:block left-[6%] bottom-[-26px]', rotate: -14 } },
          ]}
        />
      </div>
    </section>
  );
}
