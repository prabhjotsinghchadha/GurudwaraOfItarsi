'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavItem = { label: string; href: string };

export function SideNav({ items, title = 'Gurdwaras' }: { items: NavItem[]; title?: string }) {
  const pathname = usePathname();

  return (
    <aside className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h2 className="text-pretty text-base font-semibold">{title}</h2>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm',
                    active ? 'bg-amber-100 text-amber-900' : 'hover:bg-muted'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
