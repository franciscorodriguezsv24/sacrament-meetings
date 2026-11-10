import { headers } from 'next/headers';

/**
 * Builds the absolute origin of the current request, such as http://localhost:3000.
 * Server Components need an absolute URL to fetch this app's own API routes.
 */
export async function getBaseUrl(): Promise<string> {
  const headerList = await headers();
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host') ?? 'localhost:3000';
  const protocol = headerList.get('x-forwarded-proto') ?? 'http';
  return `${protocol}://${host}`;
}
