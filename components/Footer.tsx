import { WARD_NAME } from './Header';

export default function Footer() {
  return (
    <footer className="no-print mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-4xl px-page py-4 text-sm text-muted">
        <p>{WARD_NAME} Sacrament Meeting Planner · WDD 430</p>
      </div>
    </footer>
  );
}
