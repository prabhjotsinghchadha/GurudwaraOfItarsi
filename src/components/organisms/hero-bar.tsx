import { cn } from '@/lib/utils';

export function HeroBar({ title, className }: { title: string; className?: string }) {
  return (
    <section
      className={cn(
        // Solid bar similar to the source header band
        'w-full bg-amber-600 text-white',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h1 className="text-pretty text-xl font-semibold md:text-2xl">{title}</h1>
      </div>
    </section>
  );
}
