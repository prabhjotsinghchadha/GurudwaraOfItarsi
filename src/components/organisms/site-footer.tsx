'use client';

import Image from 'next/image';
import Link from 'next/link';

import { SITE } from '@/lib/site'; // use site config

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t-4 border-amber-600 bg-blue-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white">About</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/about">
                About {SITE.shortName}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/programs">
                Seva & Programs
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/visit">
                Visit / Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <address className="not-italic mt-3 text-sm leading-relaxed">
            {SITE.name}
            <br />
            {SITE.address}
          </address>
          <div className="mt-3 text-sm">
            <div>
              <span className="text-white">Phone:</span>{' '}
              <a className="hover:underline" href={`tel:${SITE.phone.replace(/[^+\d]/g, '')}`}>
                {SITE.phone}
              </a>
            </div>
            <div>
              <span className="text-white">Email:</span>{' '}
              <a className="hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
            <div className="mt-2 text-xs text-amber-200">
              Visiting Hours: {SITE.visitingHours} • Langar: {SITE.langarHours}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-base font-semibold text-white">Photo Gallery</h3>
          <div className="mt-3 grid grid-cols-4 gap-2">
            <Image
              src="/itarsi-gurudwara-exterior.png"
              alt="Itarsi exterior"
              width={600}
              height={400}
              className="h-14 w-20 rounded-sm object-cover"
            />
            <Image
              src="/darbar-sahib-itarsi.png"
              alt="Darbar Sahib Itarsi"
              width={600}
              height={400}
              className="h-14 w-20 rounded-sm object-cover"
            />
            <Image
              src="/langar-seva-itarsi.png"
              alt="Langar Seva Itarsi"
              width={600}
              height={400}
              className="h-14 w-20 rounded-sm object-cover"
            />
            <Image
              src="/nagar-kirtan-itarsi.png"
              alt="Nagar Kirtan Itarsi"
              width={600}
              height={400}
              className="h-14 w-20 rounded-sm object-cover"
            />
          </div>
          <div className="mt-3">
            <Link
              href="/gallery"
              className="inline-flex items-center rounded-full border border-amber-600 px-3 py-1 text-xs font-medium text-amber-300 hover:bg-blue-900"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-900">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} {SITE.shortName}. All rights reserved.
          </p>
          <p>Designed for demo — not an official website.</p>
        </div>
      </div>
    </footer>
  );
}
