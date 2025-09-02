import type { Metadata } from 'next';
import Image from 'next/image';

import ContactCard from '@/components/about/contact-card';
import GalleryGrid from '@/components/about/gallery-grid';
import VisitInfo from '@/components/about/visit-info';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroBanner } from '@/components/hero-banner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About – Gurudwara Shree Guru Singh Sabha, Itarsi',
  description:
    'Learn about Gurudwara Shree Guru Singh Sabha, Itarsi (Madhya Pradesh) – history, seva, facilities, visiting information, and contact details.'
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <HeroBanner
        src="/about-itarsi-hero.png"
        title="Gurudwara Shree Guru Singh Sabha, Itarsi"
        subtitle="A house of worship and seva in Itarsi (Madhya Pradesh) where daily Nitnem, Kirtan, and Langar Seva are observed with devotion by the Sangat."
        className="rounded-none border-0"
      />

      {/* Breadcrumbs */}
      <div className="border-b">
        <div className="mx-auto w-full max-w-6xl px-4 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gurudwara Shree Guru Singh Sabha, Itarsi (Hoshangabad district, Madhya Pradesh) is a
                vibrant center of Sikh faith and community service. The Sangat gathers daily for
                Nitnem and Kirtan, partakes in Langar, and contributes Seva to support the
                Gurudwara’s operations and community outreach.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border">
                <Image
                  src="/itarsi-gurudwara-exterior.png"
                  alt="Exterior view of Gurudwara Shree Guru Singh Sabha, Itarsi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Seva & Activities */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Seva & Activities</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Daily Nitnem, Asa-di-Var, and evening Kirtan Diwans</li>
                <li>Akhand Path and Sehaj Path as per Sangat’s Ardas</li>
                <li>Langar Seva – prepared and served by the Sangat</li>
                <li>Gurmat classes and Punjabi Pathshala (as scheduled)</li>
                <li>Community outreach: health camps, blood donation drives</li>
                <li>Gurpurab and special Samagams with Kirtani Jathas</li>
              </ul>
            </div>

            {/* Facilities */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Darbar Sahib & Kirtan Hall</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Spacious hall for daily prayers and Kirtan Diwans.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Langar Hall</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Clean, hygienic kitchen and dining area; volunteers welcome.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Shoe & Cloak Facility</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Jora Ghar for footwear and simple cloak arrangements.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Accessibility</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Ground-level access and assistance for elderly and differently-abled.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Location / Map */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Location</h2>
              <p className="text-muted-foreground">
                Itarsi, Hoshangabad District, Madhya Pradesh. The Gurudwara is centrally located and
                accessible from the railway junction and main market areas.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md border">
                <iframe
                  title="Map – Gurudwara Shree Guru Singh Sabha, Itarsi"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    'Gurudwara Shree Guru Singh Sabha Itarsi Madhya Pradesh'
                  )}&output=embed`}
                />
              </div>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">Photo Gallery</h2>
              <GalleryGrid
                images={[
                  {
                    src: '/darbar-sahib-interior-itarsi.png',
                    alt: 'Darbar Sahib interior at Itarsi Gurudwara'
                  },
                  { src: '/langar-seva-itarsi.png', alt: 'Langar Seva at Itarsi Gurudwara' },
                  { src: '/nagar-kirtan-itarsi.png', alt: 'Nagar Kirtan with Itarsi Sangat' },
                  {
                    src: '/gurpurab-celebrations-itarsi.png',
                    alt: 'Gurpurab celebrations at the Gurudwara'
                  }
                ]}
              />
              <p className="text-xs text-muted-foreground">
                Replace placeholders with your photos anytime.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <VisitInfo />
            <ContactCard />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Management (Itarsi)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  President: <span className="text-foreground font-medium">—</span>
                </p>
                <p>
                  General Secretary: <span className="text-foreground font-medium">—</span>
                </p>
                <p>
                  Committee Members: <span className="text-foreground font-medium">—</span>
                </p>
                <p className="text-xs">Share official names and we’ll update these immediately.</p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Callout / Support */}
      <section className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
          <div className="rounded-md bg-amber-50 border border-amber-200 p-4 sm:p-6">
            <h3 className="text-lg font-semibold text-amber-900">
              Support Seva at Gurudwara Shree Guru Singh Sabha, Itarsi
            </h3>
            <p className="mt-1 text-sm text-amber-900/80">
              Sangat can contribute Seva in various forms—Langar, Kirtan, cleanliness, or community
              initiatives. Reach out to the management for details.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
