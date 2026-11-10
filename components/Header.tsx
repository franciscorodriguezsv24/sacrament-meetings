import Link from 'next/link';
import { Suspense } from 'react';
import { connection } from 'next/server';
import { formatMeetingDate, toIsoDate } from '@/lib/dates';

export const WARD_NAME = 'Riverside Ward';

/** Today's date. It reads the clock at request time, so it renders inside Suspense. */
async function CurrentDate() {
  await connection();
  const today = toIsoDate(new Date());
  return <time dateTime={today}>{formatMeetingDate(today)}</time>;
}

export default function Header() {
  return (
    <header className="no-print bg-primary text-white">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-page py-4">
        <Link href="/" className="font-serif text-2xl font-bold text-white hover:underline">
          {WARD_NAME}
        </Link>
        <p className="text-sm text-primary-light">
          <Suspense fallback={<span>Loading date…</span>}>
            <CurrentDate />
          </Suspense>
        </p>
      </div>
    </header>
  );
}
