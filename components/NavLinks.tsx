'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

const links = [
  { href: '/meetings', label: 'All meetings' },
  { href: '/meetings/current', label: 'This Sunday' },
];

function LinkList({ pathname }: { pathname: string | null }) {
  return (
    <ul className="flex gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? 'page' : undefined}
              className={`inline-block rounded-md px-3 py-2 text-sm font-medium ${
                isActive ? 'bg-primary text-white' : 'text-primary hover:bg-primary-light'
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function ActiveLinkList() {
  const pathname = usePathname();
  return <LinkList pathname={pathname} />;
}

/** Section navigation for /meetings. Highlights the link for the current route. */
export default function NavLinks() {
  return (
    <nav aria-label="Meetings" className="no-print">
      {/* The pathname is only known at request time, so show plain links until it arrives. */}
      <Suspense fallback={<LinkList pathname={null} />}>
        <ActiveLinkList />
      </Suspense>
    </nav>
  );
}
