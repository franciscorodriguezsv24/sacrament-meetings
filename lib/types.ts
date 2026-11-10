/** The kind of meeting held on a given Sunday. */
export type MeetingType =
  | 'testimony' // fast and testimony meeting
  | 'regular' // regular sacrament meeting with assigned speakers
  | 'stake' // stake conference (not a sacrament meeting)
  | 'general'; // general conference (not a sacrament meeting)

/** A hymn from the hymnbook. */
export interface Hymn {
  number: number;
  title: string;
}

/** One item in the speaking portion of the program. */
export type ProgramItem =
  | { kind: 'speaker'; name: string; topic?: string }
  | { kind: 'musical'; performer: string; title: string };

/** A ward business item such as a release, sustaining, or ordination. */
export interface WardBusinessItem {
  kind: 'release' | 'sustaining' | 'ordination' | 'other';
  description: string;
}

/** A full sacrament meeting record. */
export interface SacramentMeeting {
  id: number;
  /** ISO date string in the form 'YYYY-MM-DD'. */
  date: string;
  meetingType: MeetingType;
  presiding: string;
  conducting: string;
  announcements?: string[];
  openingHymn: Hymn;
  openingPrayer: string;
  wardBusiness: WardBusinessItem[];
  stakeBusiness: boolean;
  /** Left out for stake and general conference, which have no sacrament service. */
  sacramentHymn?: Hymn;
  speakers: ProgramItem[];
  closingHymn: Hymn;
  closingPrayer: string;
}
