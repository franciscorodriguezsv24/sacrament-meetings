import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import { Suspense } from 'react';
import { getMeetings } from '@/lib/meetings-db';
import { mostRecentSunday, toIsoDate } from '@/lib/dates';

/** Finds the most recent Sunday's meeting and redirects to it. */
async function RedirectToCurrent(): Promise<never> {
  await connection(); // read the clock at request time, not at build time
  const sundayDate = toIsoDate(mostRecentSunday(new Date()));
  const [meeting] = getMeetings(sundayDate);

  // Fallback: no meeting planned for this Sunday, so show the full list.
  redirect(meeting ? `/meetings/${meeting.id}` : '/meetings');
}

export default function CurrentMeetingPage() {
  return (
    <Suspense fallback={<p className="text-muted">Finding this Sunday&apos;s program…</p>}>
      <RedirectToCurrent />
    </Suspense>
  );
}
