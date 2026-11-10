import type { MeetingType, WardBusinessItem } from './types';

export const meetingTypeLabels: Record<MeetingType, string> = {
  testimony: 'Fast and Testimony Meeting',
  regular: 'Sacrament Meeting',
  stake: 'Stake Conference',
  general: 'General Conference',
};

export const wardBusinessLabels: Record<WardBusinessItem['kind'], string> = {
  release: 'Release',
  sustaining: 'Sustaining',
  ordination: 'Ordination',
  other: 'Other',
};
