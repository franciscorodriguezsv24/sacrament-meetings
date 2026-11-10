import type { Metadata } from 'next';
import { Suspense } from 'react';
import MeetingCard from '@/components/MeetingCard';
import { getBaseUrl } from '@/lib/api';
import type { SacramentMeeting } from '@/lib/types';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Meetings',
};

async function MeetingList() {
  const response = await fetch(`${await getBaseUrl()}/api/meetings`);
  if (!response.ok) {
    throw new Error(`Could not load meetings (status ${response.status})`);
  }
  const meetings: SacramentMeeting[] = await response.json();

  if (meetings.length === 0) {
    return <p className="text-muted">No meetings have been planned yet.</p>;
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {meetings.map((meeting) => (
        <li key={meeting.id}>
          <MeetingCard meeting={meeting} />
        </li>
      ))}
    </ul>
  );
}

export default function MeetingsPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Sacrament Meetings</h1>
      <Suspense fallback={<Loading />}>
        <MeetingList />
      </Suspense>
    </>
  );
}
