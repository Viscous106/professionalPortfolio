import { Reveal } from './Reveal';

export function Section({
  id,
  title,
  children,
  className = '',
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {title && (
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
