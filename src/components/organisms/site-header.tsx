'use client';

import { MenuIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu';

import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';

const navItems = SITE.nav; // drive nav from SITE

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      {/* Top info strip */}
      <div className="bg-blue-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <Link href="/visit" className="underline-offset-2 hover:underline">
              Visit / Contact
            </Link>
            <span className="hidden md:inline">•</span>
            <a href={`mailto:${SITE.email}`} className="underline-offset-2 hover:underline">
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="size-3.5" aria-hidden="true" />
              <span className="sr-only">Location:</span>
              <span>
                {SITE.city}, {SITE.state}
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <PhoneIcon className="size-3.5" aria-hidden="true" />
              <a
                className="underline-offset-2 hover:underline"
                href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}
                aria-label={`Call ${SITE.shortName}`}
              >
                {SITE.phone}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main bar: logo + site title + primary nav */}
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.shortName} Home`}>
            <Image
              src="/khanda-emblem-saffron-logo.png"
              alt="Khanda emblem"
              className="h-10 w-10 rounded-sm"
              height={40}
              width={40}
            />
            <div className="leading-tight">
              <div className="text-balance text-base font-semibold tracking-tight">{SITE.name}</div>
              <div className="text-xs text-muted-foreground">
                {SITE.city}, {SITE.state}
              </div>
            </div>
          </Link>

          {/* Desktop CTAs simplified to local site */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            <Link
              href="/donate"
              className="rounded-full bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
            >
              Donate
            </Link>
            <Link
              href="/programs"
              className="rounded-full border border-amber-600 px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-50"
            >
              Seva & Programs
            </Link>
            <Link
              href="/visit"
              className="rounded-full bg-blue-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-950"
            >
              Visit / Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md border px-2.5 py-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Primary nav bar styled dark */}
      <nav className="bg-blue-900 text-white">
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        'px-4 py-3 text-sm transition-colors',
                        active ? 'border-b-2 border-amber-500' : 'hover:text-amber-300'
                      )}
                      data-active={active || undefined}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile collapsible list mirrors desktop nav + CTAs */}
        {open && (
          <div className="md:hidden">
            <ul className="flex flex-col border-t border-blue-800 bg-blue-900">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-sm text-white',
                        active ? 'bg-blue-950' : 'hover:bg-blue-950'
                      )}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="px-4 py-3 flex gap-2">
                <Link
                  href="/donate"
                  className="rounded-full bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700"
                >
                  Donate
                </Link>
                <Link
                  href="/visit"
                  className="rounded-full border border-amber-600 px-3 py-1.5 text-xs font-medium text-amber-300 hover:bg-blue-950"
                >
                  Visit
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
