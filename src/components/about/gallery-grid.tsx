'use client';

import Image from 'next/image';

type GalleryGridProps = {
  images: { src: string; alt: string }[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map((img, idx) => (
        <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
          <Image
            src={
              img.src || '/placeholder.svg?height=240&width=320&query=itarsi%20gurudwara%20gallery'
            }
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
