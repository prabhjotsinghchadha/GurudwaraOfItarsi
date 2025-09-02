import Image from 'next/image';

export function Gallery({
  images,
  title = 'Gallery'
}: {
  images: { src: string; alt: string }[];
  title?: string;
}) {
  return (
    <section aria-labelledby="gallery-title" className="rounded-lg border bg-card p-4">
      <h3 id="gallery-title" className="text-pretty text-base font-semibold">
        {title}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((img) => (
          <figure key={img.src} className="overflow-hidden rounded-md">
            <Image
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              width={600}
              height={400}
              className="h-28 w-full object-cover md:h-32"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
