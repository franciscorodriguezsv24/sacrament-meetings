import type { ReactNode } from 'react';
import { formatMeetingDate } from '@/lib/dates';
import { meetingTypeLabels, wardBusinessLabels } from '@/lib/labels';
import type { Hymn, SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

function HymnText({ hymn }: { hymn: Hymn }) {
  return (
    <>
      Hymn {hymn.number}, <cite className="not-italic">“{hymn.title}”</cite>
    </>
  );
}

/** One labeled line of the program, such as "Opening Prayer ..... Sister Ana Torres". */
function ProgramRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-dashed border-border py-2 sm:flex-row sm:justify-between">
      <dt className="font-medium">{label}</dt>
      <dd className="text-muted sm:text-right">{children}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

/** A printable program that shows every field of a meeting. */
export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const announcements = meeting.announcements ?? [];

  return (
    <article className="print-program rounded-lg border border-border bg-surface p-6 shadow-sm">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          {meetingTypeLabels[meeting.meetingType]}
        </p>
        <h1 className="mt-1 text-2xl font-bold">
          <time dateTime={meeting.date}>{formatMeetingDate(meeting.date)}</time>
        </h1>
      </header>

      <Section title="Leadership">
        <dl>
          <ProgramRow label="Presiding">{meeting.presiding}</ProgramRow>
          <ProgramRow label="Conducting">{meeting.conducting}</ProgramRow>
        </dl>
      </Section>

      <Section title="Announcements">
        {announcements.length > 0 ? (
          <ul className="list-disc space-y-1 pl-5 text-muted">
            {announcements.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No announcements.</p>
        )}
      </Section>

      <Section title="Opening">
        <dl>
          <ProgramRow label="Opening Hymn">
            <HymnText hymn={meeting.openingHymn} />
          </ProgramRow>
          <ProgramRow label="Opening Prayer">{meeting.openingPrayer}</ProgramRow>
        </dl>
      </Section>

      <Section title="Business">
        {meeting.wardBusiness.length > 0 ? (
          <ul className="space-y-1 text-muted">
            {meeting.wardBusiness.map((item) => (
              <li key={`${item.kind}-${item.description}`}>
                <span className="font-medium text-foreground">
                  {wardBusinessLabels[item.kind]}:
                </span>{' '}
                {item.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No ward business.</p>
        )}
        <p className="mt-2 text-muted">
          Stake business: {meeting.stakeBusiness ? 'Yes' : 'No'}
        </p>
      </Section>

      <Section title="Sacrament">
        {meeting.sacramentHymn ? (
          <dl>
            <ProgramRow label="Sacrament Hymn">
              <HymnText hymn={meeting.sacramentHymn} />
            </ProgramRow>
          </dl>
        ) : (
          <p className="text-muted">No sacrament service at this meeting.</p>
        )}
      </Section>

      <Section title={meeting.meetingType === 'testimony' ? 'Testimonies' : 'Speakers and Music'}>
        {meeting.speakers.length > 0 ? (
          <ol className="space-y-2">
            {meeting.speakers.map((item, index) =>
              item.kind === 'speaker' ? (
                <li key={index}>
                  <span className="font-medium">Speaker:</span> {item.name}
                  {item.topic && <span className="text-muted"> — {item.topic}</span>}
                </li>
              ) : (
                <li key={index}>
                  <span className="font-medium">Musical number:</span>{' '}
                  <cite className="not-italic">“{item.title}”</cite>
                  <span className="text-muted"> — {item.performer}</span>
                </li>
              ),
            )}
          </ol>
        ) : (
          <p className="text-muted">
            {meeting.meetingType === 'testimony'
              ? 'Members of the congregation are invited to share their testimonies.'
              : 'No speakers assigned.'}
          </p>
        )}
      </Section>

      <Section title="Closing">
        <dl>
          <ProgramRow label="Closing Hymn">
            <HymnText hymn={meeting.closingHymn} />
          </ProgramRow>
          <ProgramRow label="Closing Prayer">{meeting.closingPrayer}</ProgramRow>
        </dl>
      </Section>
    </article>
  );
}
