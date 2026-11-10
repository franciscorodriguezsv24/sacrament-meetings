'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
    >
      Print program
    </button>
  );
}
