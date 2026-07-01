export function Button({
  href,
  children,
  variant = 'primary',
  download = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  download?: boolean;
  external?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-hover'
      : 'border border-border bg-surface text-text hover:border-accent hover:text-accent';
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download ? { download: true } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
