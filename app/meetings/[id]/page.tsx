import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import MeetingDetail from '@/components/MeetingDetail';
import PrintButton from '@/components/PrintButton';
import { getBaseUrl } from '@/lib/api';
import type { SacramentMeeting } from '@/lib/types';
import Loading from '../loading';

async function Meeting({ params }: { params: PageProps<'/meetings/[id]'>['params'] }) {
  const { id } = await params;
  const response = await fetch(`${await getBaseUrl()}/api/meetings/${encodeURIComponent(id)}`);

  // 400 (not a number) and 404 (no match) both mean there is no program to show.
  if (response.status === 400 || response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(`Could not load meeting ${id} (status ${response.status})`);
  }

  const meeting: SacramentMeeting = await response.json();
  return <MeetingDetail meeting={meeting} />;
}

export default function MeetingPage({ params }: PageProps<'/meetings/[id]'>) {
  return (
    <>
      <div className="no-print mb-4 flex items-center justify-between gap-4">
        <Link href="/meetings" className="text-primary underline hover:no-underline">
          ← Back to all meetings
        </Link>
        <PrintButton />
      </div>
      <Suspense fallback={<Loading />}>
        <Meeting params={params} />
      </Suspense>
    </>
  );
}
