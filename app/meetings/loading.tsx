export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="space-y-3">
      <p className="text-muted">Loading meetings…</p>
      {[1, 2, 3].map((n) => (
        <div key={n} className="h-24 animate-pulse rounded-lg bg-primary-light" />
      ))}
    </div>
  );
}
