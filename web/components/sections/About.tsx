import { TbUser } from 'react-icons/tb';
import { portfolio } from '@/data/portfolio';
import { SectionHead } from '@/components/ui/SectionHead';

/** Where the reference has testimonials, this shows roles in the same card style. No invented quotes. */
export function About() {
  return (
    <section id="about" className="wrap pt-24 md:pt-32">
      <SectionHead icon={TbUser} title="About" description="Roles, study and the tools I reach for most." />

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:px-10">
        <ul className="grid items-start gap-4 sm:grid-cols-2">
          {portfolio.experience.map((e, k) => (
            <li
              key={`${e.title}-${e.org}`}
              className={`overflow-hidden rounded-[16px] border border-line bg-panel shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)] ${k === 1 ? 'sm:mt-6' : ''}`}
            >
              <div className="graph relative grid aspect-[4/3] place-items-center border-b border-line">
                <span className="grid size-[86px] -rotate-[5deg] place-items-center rounded-[20px] border-[4px] border-white bg-white p-3 shadow-[0_12px_26px_-14px_rgba(0,0,0,0.45)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.logo} alt={e.logoAlt} width={56} height={56} className="size-[56px] object-contain" />
                </span>
                {e.badge && (
                  <span className="absolute right-3 top-3 rotate-[8deg] rounded-full border-[3px] border-white bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-ink shadow-[0_6px_14px_-8px_rgba(0,0,0,0.5)]">
                    {e.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-[14px] font-semibold">{e.title}</p>
                <p className="text-[12.5px] leading-[1.45] text-accent">{e.org}</p>
                <p className="mt-2 text-[12px] text-muted">{e.dates}</p>
                <p className="mt-2 text-[12.5px] leading-[1.5] text-muted">{e.summary}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-8">
          <p className="text-[15px] leading-[1.65]">
            <span className="display mr-2 text-[28px] leading-none text-accent">66</span>
            {portfolio.intro}
          </p>
          <dl className="divide-y divide-dashed divide-line border-y border-dashed border-line text-[13px]">
            {portfolio.education.map((e) => (
              <div key={e.school} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3">
                <dt>
                  <span className="font-semibold">{e.school}</span>
                  <span className="block text-muted">{e.degree}</span>
                </dt>
                <dd className="text-muted">{e.dates}</dd>
              </div>
            ))}
            {portfolio.skills.map((g) => (
              <div key={g.category} className="grid grid-cols-[8rem_minmax(0,1fr)] gap-4 py-3">
                <dt className="text-muted">{g.category}</dt>
                <dd>{g.skills.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
