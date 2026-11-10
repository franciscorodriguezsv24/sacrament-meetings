/** Formats a Date as 'YYYY-MM-DD' using local time (toISOString would shift to UTC). */
export function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Returns the most recent Sunday on or before the given day. */
export function mostRecentSunday(today: Date): Date {
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay()); // getDay(): 0 (Sun) through 6 (Sat)
  return sunday;
}

/** Turns 'YYYY-MM-DD' into a readable date such as 'Sunday, November 8, 2026'. */
export function formatMeetingDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  // Build the date from its parts so it stays on the same calendar day in every time zone.
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
