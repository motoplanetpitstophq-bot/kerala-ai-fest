import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ParallaxLayer } from "@/components/site/ParallaxLayer";
import { WHY_ATTEND } from "@/data/nalai";

export function WhyAttendSection() {
  return (
    <Section
      id="why-attend"
      eyebrow="Why Attend"
      title="Six reasons to be there"
      className="relative overflow-hidden"
    >
      <ParallaxLayer
        distance={120}
        className="absolute inset-x-0 -top-24 h-[140%] grid-motif opacity-40"
      >
        <span className="sr-only" />
      </ParallaxLayer>
      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_ATTEND.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg">
              <span className="font-display text-sm font-bold text-brand/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-muted-foreground">{card.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
