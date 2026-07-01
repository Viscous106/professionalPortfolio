export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-text">
      {label}
    </span>
  );
}
