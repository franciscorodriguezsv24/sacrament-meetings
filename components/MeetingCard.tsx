import Link from 'next/link';
import { formatMeetingDate } from '@/lib/dates';
import { meetingTypeLabels } from '@/lib/labels';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const speakerCount = meeting.speakers.filter((item) => item.kind === 'speaker').length;

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-lg border border-border bg-surface p-4 shadow-sm transition hover:border-primary hover:shadow-md"
    >
      <h2 className="text-lg font-semibold">
        <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
      </h2>
      <p className="mt-1 text-sm font-medium text-accent">
        {meetingTypeLabels[meeting.meetingType]}
      </p>
      <p className="mt-2 text-sm text-muted">
        Conducting: {meeting.conducting}
        {speakerCount > 0 && ` · ${speakerCount} speaker${speakerCount === 1 ? '' : 's'}`}
      </p>
    </Link>
  );
}
