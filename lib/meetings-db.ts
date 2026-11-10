import type { SacramentMeeting } from './types';

/** In-memory meeting data. It resets every time the server restarts. */
const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'testimony',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Brother Mark Ellis',
    announcements: [
      'Ward temple night is Thursday at 7:00 p.m.',
      'Youth camp registration closes May 15.',
    ],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Ana Torres',
    wardBusiness: [
      { kind: 'release', description: 'Sister Laura Kim as Primary pianist' },
      { kind: 'sustaining', description: 'Sister Grace Park as Primary pianist' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'As Now We Take the Sacrament' },
    speakers: [],
    closingHymn: { number: 85, title: 'How Firm a Foundation' },
    closingPrayer: 'Brother James Wu',
  },
  {
    id: 2,
    date: '2026-10-04',
    meetingType: 'general',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Bishop Daniel Smith',
    announcements: [
      'No ward meetings today. Watch general conference sessions at 10:00 a.m. and 2:00 p.m.',
    ],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Assigned by Church headquarters',
    wardBusiness: [],
    stakeBusiness: false,
    speakers: [],
    closingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    closingPrayer: 'Assigned by Church headquarters',
  },
  {
    id: 3,
    date: '2026-10-11',
    meetingType: 'regular',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Brother Carlos Mendez',
    announcements: ['The ward Halloween party is October 30 at 6:00 p.m.'],
    openingHymn: { number: 136, title: 'I Know That My Redeemer Lives' },
    openingPrayer: 'Sister Emily Brown',
    wardBusiness: [
      { kind: 'ordination', description: 'Ethan Clark to the office of priest' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: 'I Stand All Amazed' },
    speakers: [
      { kind: 'speaker', name: 'Sister Hannah Lee', topic: 'Faith in Jesus Christ' },
      { kind: 'musical', performer: 'Ward Primary children', title: 'I Am a Child of God' },
      { kind: 'speaker', name: 'Brother Robert Young', topic: 'Ministering' },
    ],
    closingHymn: { number: 116, title: 'Come, Follow Me' },
    closingPrayer: 'Brother Samuel Ortiz',
  },
  {
    id: 4,
    date: '2026-10-18',
    meetingType: 'stake',
    presiding: 'President Michael Johnson',
    conducting: 'President Michael Johnson',
    announcements: ['Stake conference is held at the stake center at 10:00 a.m.'],
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Rebecca Hall',
    wardBusiness: [],
    stakeBusiness: true,
    speakers: [
      { kind: 'speaker', name: 'Elder Thomas Rivera, Area Seventy' },
      { kind: 'musical', performer: 'Stake choir', title: 'Come, Thou Fount of Every Blessing' },
      { kind: 'speaker', name: 'President Michael Johnson' },
    ],
    closingHymn: { number: 152, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother Kevin Adams',
  },
  {
    id: 5,
    date: '2026-10-25',
    meetingType: 'regular',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Brother Mark Ellis',
    openingHymn: { number: 98, title: 'I Need Thee Every Hour' },
    openingPrayer: 'Brother David Nguyen',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 181, title: 'Jesus of Nazareth, Savior and King' },
    speakers: [
      { kind: 'speaker', name: 'Sister Olivia Martin', topic: 'The Sabbath day' },
      { kind: 'speaker', name: 'Brother Jacob White', topic: 'Temple worship' },
    ],
    closingHymn: { number: 89, title: 'The Lord Is My Light' },
    closingPrayer: 'Sister Maria Garcia',
  },
  {
    id: 6,
    date: '2026-11-01',
    meetingType: 'testimony',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Brother Carlos Mendez',
    announcements: ['Fast offerings may be given to any member of the bishopric.'],
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Sophie Turner',
    wardBusiness: [
      { kind: 'sustaining', description: 'Brother Noah Bell as elders quorum secretary' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 172, title: 'In Humility, Our Savior' },
    speakers: [],
    closingHymn: { number: 292, title: 'O My Father' },
    closingPrayer: 'Brother Isaac Reed',
  },
  {
    id: 7,
    date: '2026-11-08',
    meetingType: 'regular',
    presiding: 'Bishop Daniel Smith',
    conducting: 'Brother Mark Ellis',
    announcements: [
      'Ward Thanksgiving dinner is November 21 at 5:30 p.m.',
      'Please sign up to help with the stake service project.',
    ],
    openingHymn: { number: 92, title: 'For the Beauty of the Earth' },
    openingPrayer: 'Sister Chloe Evans',
    wardBusiness: [
      { kind: 'release', description: 'Brother Paul Scott as Sunday School teacher' },
      { kind: 'sustaining', description: 'Sister Mia Foster as Sunday School teacher' },
    ],
    stakeBusiness: false,
    sacramentHymn: { number: 194, title: 'There Is a Green Hill Far Away' },
    speakers: [
      { kind: 'speaker', name: 'Brother Lucas Gray', topic: 'Gratitude' },
      { kind: 'musical', performer: 'Sister Ella Price, violin', title: 'Count Your Blessings' },
      { kind: 'speaker', name: 'Sister Ava Collins', topic: 'Service' },
    ],
    closingHymn: { number: 241, title: 'Count Your Blessings' },
    closingPrayer: 'Brother Henry Ward',
  },
];

/** Returns all meetings, newest first. Pass a 'YYYY-MM-DD' date to filter. */
export function getMeetings(date?: string | null): SacramentMeeting[] {
  const sorted = [...meetings].sort((a, b) => b.date.localeCompare(a.date));
  if (date) return sorted.filter((m) => m.date === date);
  return sorted;
}

/** Returns one meeting by id, or null when none matches. */
export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}
