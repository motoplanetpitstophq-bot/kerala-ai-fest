import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SPEAKERS, type Speaker } from "@/data/nalai";

function initials(name: string) {
  return name
    .replace(/^Shri\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className="flex h-full w-[280px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[320px]">
      <div className="flex size-20 items-center justify-center overflow-hidden rounded-2xl bg-accent">
        {speaker.photo ? (
          <img
            src={speaker.photo}
            alt={speaker.name}
            loading="lazy"
            className="size-full object-cover"
          />
        ) : (
          <span className="font-display text-2xl font-bold text-accent-foreground">
            {initials(speaker.name)}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{speaker.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand">{speaker.designation}</p>
      <p className="text-sm text-muted-foreground">{speaker.organisation}</p>
    </article>
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
