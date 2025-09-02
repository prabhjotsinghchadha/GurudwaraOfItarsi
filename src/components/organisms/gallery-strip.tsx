import Image from 'next/image';

import { Button } from '@/components/ui/button';

export function GalleryStrip({
  images,
  title = 'Photo Gallery'
}: {
  images: { src: string; alt: string }[];
  title?: string;
}) {
  return (
    <section aria-labelledby="photo-gallery-title" className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h3 id="photo-gallery-title" className="text-pretty text-base font-semibold">
          {title}
        </h3>
        <Button size="sm" variant="secondary">
          View Our Gallery
        </Button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
        {images.map((img) => (
          <figure key={img.src} className="overflow-hidden rounded-md">
            <Image
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              width={240}
              height={180}
              className="h-20 w-full object-cover md:h-24"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
