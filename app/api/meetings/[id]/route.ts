import { getMeetingById } from '@/lib/meetings-db';

/** GET /api/meetings/:id returns 200, 400 (id is not a number), or 404 (no match). */
export async function GET(_request: Request, ctx: RouteContext<'/api/meetings/[id]'>) {
  const { id } = await ctx.params;

  // Only accept whole positive numbers like "1" or "42".
  if (!/^\d+$/.test(id)) {
    return Response.json({ error: `Invalid meeting id: "${id}"` }, { status: 400 });
  }

  const meeting = getMeetingById(Number(id));
  if (!meeting) {
    return Response.json({ error: `Meeting ${id} not found` }, { status: 404 });
  }

  return Response.json(meeting);
}
