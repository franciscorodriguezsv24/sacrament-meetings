import { getMeetings } from '@/lib/meetings-db';
import type { SacramentMeeting } from '@/lib/types';

/** GET /api/meetings and GET /api/meetings?date=YYYY-MM-DD */
export async function GET(request: Request) {
  // searchParams.get returns null when the parameter is missing.
  const date = new URL(request.url).searchParams.get('date');
  const meetings: SacramentMeeting[] = getMeetings(date);
  return Response.json(meetings);
}
