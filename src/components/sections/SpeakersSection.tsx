import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SPEAKERS, type Speaker } from "@/data/nalai";
import speakerPlaceholder from "@/assets/speaker-placeholder.jpg";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      {...(reduce ? {} : { whileHover: { y: -8 } })}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex h-full w-[280px] shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl sm:w-[320px]"
    >
      {/* Portrait with foreground design elements */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={speaker.photo ?? speakerPlaceholder}
          alt={speaker.name}
          loading="lazy"
          width={800}
          height={1000}
          className="size-full object-cover object-top"
          {...(reduce ? {} : { whileHover: { scale: 1.06 } })}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* warm wash + bottom fade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-brand/10 mix-blend-multiply opacity-60 transition-opacity duration-500 group-hover:opacity-25" />

        {/* AI grid overlay */}
        <svg
          className="pointer-events-none absolute inset-0 size-full opacity-[0.18]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="spk-grid" width="26" height="26" patternUnits="userSpaceOnUse">
              <path d="M26 0H0V26" fill="none" stroke="currentColor" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spk-grid)" className="text-brand" />
        </svg>

        {/* animated corner brackets */}
        <motion.span
          className="pointer-events-none absolute left-4 top-4 size-7 border-l-2 border-t-2 border-brand/70"
          {...(reduce ? {} : { animate: { opacity: [0.4, 1, 0.4] } })}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="pointer-events-none absolute bottom-4 right-4 size-7 border-b-2 border-r-2 border-brand/70"
          {...(reduce ? {} : { animate: { opacity: [1, 0.4, 1] } })}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* drifting data particles */}
        {!reduce &&
          [0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute size-1.5 rounded-full bg-brand/70"
              style={{ left: `${12 + i * 18}%`, bottom: "12%" }}
              animate={{ y: [0, -70 - i * 12, 0], opacity: [0, 0.9, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* sheen sweep on hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* badge */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-foreground">
          <Sparkles className="size-3" /> Speaker
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 pt-4">
        <span className="mb-3 block h-0.5 w-10 rounded-full bg-brand transition-all duration-500 group-hover:w-20" />
        <h3 className="font-display text-lg font-semibold leading-snug">{speaker.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand">{speaker.designation}</p>
        <p className="text-sm text-muted-foreground">{speaker.organisation}</p>
      </div>
    </motion.article>
  );
}


export function SpeakersSection() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <Section id="speakers" tone="surface" eyebrow="Speakers" title="Voices at NALAI">
      <div className="mb-6 flex gap-2">
        <button
          aria-label="Previous speakers"
          onClick={() => scrollBy(-1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          aria-label="Next speakers"
          onClick={() => scrollBy(1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card hover:border-brand hover:text-brand"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
      <Reveal>
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {SPEAKERS.map((s) => (
            <div key={s.name} className="snap-start">
              <SpeakerCard speaker={s} />
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mt-4 text-sm text-muted-foreground">
        Additional speakers will be added as confirmed.
      </p>
    </Section>
  );
}
