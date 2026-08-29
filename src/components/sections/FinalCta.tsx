import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { EVENT } from "@/data/nalai";

export function FinalCta() {
  return (
    <section id="register" className="relative overflow-hidden scroll-mt-24 py-24">
      <div className="pointer-events-none absolute inset-0 grid-motif opacity-70" />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
            Be Part of <span className="text-gradient-brand">Tomorrow</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            {EVENT.date} · {EVENT.venue}
          </p>
          <Link
            to="/register"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-10 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            REGISTER NOW
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
