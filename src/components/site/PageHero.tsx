import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-motif opacity-60" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-6xl">{title}</h1>
        {intro && (
          <div className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {intro}
          </div>
        )}
      </div>
    </section>
  );
}
