import Image from 'next/image';

import { cn } from '@/lib/utils';

export function HeroBanner({
  src = '/images/itarsi.jpg',
  title,
  subtitle,
  className
}: {
  src?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={cn('relative w-full overflow-hidden rounded-lg border', className)}>
      <div className="relative h-[220px] w-full md:h-[320px]">
        <Image
          src={src || '/placeholder.svg'}
          alt="Gurdwara Shree Singh Sabha Itarsi image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <h1 className="text-pretty text-xl font-semibold text-white md:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-1 max-w-3xl text-pretty text-white/90">{subtitle}</p> : null}
      </div>
    </section>
  );
}
