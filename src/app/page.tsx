import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumbs } from '@/components/organisms/breadcrumbs';
import { GalleryStrip } from '@/components/organisms/gallery-strip';
import { HeroBanner } from '@/components/organisms/hero-banner';
import { SideNav } from '@/components/organisms/side-nav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.city}, ${SITE.state}`,
  description: `${SITE.name} in ${SITE.city}, ${SITE.state}. History, seva, visiting information, and contact details.`
};

const sideNavItems = [
  { label: 'About', href: '/about' },
  { label: 'Seva & Programs', href: '/programs' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Visit / Contact', href: '/visit' }
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        src={'/images/itarsi.jpg'}
        title={SITE.name}
        subtitle={`${SITE.city}, ${SITE.state} • Visiting Hours: ${SITE.visitingHours} • Langar: ${SITE.langarHours}`}
        className="mx-auto max-w-6xl px-4 pt-4"
      />

      <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 md:py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Visit', href: '/visit' },
            { label: SITE.shortName }
          ]}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr,300px]">
          {/* Main content */}
          <section className="space-y-5">
            <h2 className="text-pretty text-2xl font-semibold md:text-3xl">{SITE.name}</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <figure className="overflow-hidden rounded-lg border">
                <Image
                  src={
                    '/placeholder.svg?height=380&width=640&query=Itarsi%20Gurudwara%20exterior%20front%20view'
                  }
                  alt={`${SITE.shortName} exterior view`}
                  width={640}
                  height={380}
                  className="h-64 w-full object-cover md:h-80"
                />
              </figure>
              <figure className="overflow-hidden rounded-lg border">
                <Image
                  src={
                    '/placeholder.svg?height=380&width=640&query=map%20Itarsi%20Gurudwara%20location'
                  }
                  alt={`Map showing the location of ${SITE.shortName}`}
                  width={640}
                  height={380}
                  className="h-64 w-full object-cover md:h-80"
                />
              </figure>
            </div>

            <p className="text-pretty text-muted-foreground">
              {SITE.name} serves the Sikh sangat of {SITE.city} and nearby areas of {SITE.district},{' '}
              {SITE.state}. The Gurdwara hosts daily Nitnem and Keertan, and the community kitchen
              (Langar) welcomes everyone. Visitors are encouraged to cover their heads, remove
              shoes, and maintain decorum in the Darbar Sahib.
            </p>

            <Separator />

            <h3 className="text-pretty text-xl font-semibold">About</h3>
            <p className="text-pretty text-muted-foreground">
              Rooted in the spirit of seva and humility, the {SITE.shortName} regularly organizes
              programs for Sikhi education, Gurmat camps, and community outreach. The Gurdwara
              provides a peaceful space for simran and reflection, offering guidance and support to
              the local community.
            </p>
          </section>

          {/* Right sidebar list */}
          <div className="space-y-6">
            <SideNav items={sideNavItems} title="Explore" />

            <Card>
              <CardHeader>
                <CardTitle className="text-pretty text-base">Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <p>{SITE.name}</p>
                <p>{SITE.address}</p>
                <p className="pt-2">Phone: {SITE.phone}</p>
                <p>Email: {SITE.email}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom area updated to local site */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-pretty text-base">About</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <Link className="underline-offset-4 hover:underline" href="/about">
                    About {SITE.shortName}
                  </Link>
                </li>
                <li>
                  <Link className="underline-offset-4 hover:underline" href="/programs">
                    Seva & Programs
                  </Link>
                </li>
                <li>
                  <Link className="underline-offset-4 hover:underline" href="/visit">
                    Visit / Contact
                  </Link>
                </li>
                <li>
                  <Link className="underline-offset-4 hover:underline" href="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-pretty text-base">Visit</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>Visiting Hours: {SITE.visitingHours}</p>
              <p>Langar: {SITE.langarHours}</p>
              <p>
                City: {SITE.city}, {SITE.state}
              </p>
              <p>
                District: {SITE.district}, PIN {SITE.pin}
              </p>
            </CardContent>
          </Card>

          <GalleryStrip
            images={[
              { src: '/itarsi-gurudwara-entrance.png', alt: 'Entrance' },
              { src: '/darbar-sahib-itarsi-interior.png', alt: 'Darbar Sahib interior' },
              { src: '/langar-hall-itarsi.png', alt: 'Langar Hall' },
              { src: '/nagar-kirtan-itarsi-procession.png', alt: 'Nagar Kirtan' },
              { src: '/seva-itarsi-volunteers.png', alt: 'Seva volunteers' },
              { src: '/evening-keertan-itarsi.png', alt: 'Evening Keertan' }
            ]}
          />
        </div>
      </div>
    </main>
  );
}
