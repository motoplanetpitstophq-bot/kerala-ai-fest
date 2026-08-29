import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ParallaxLayer } from "@/components/site/ParallaxLayer";
import { GLANCE } from "@/data/nalai";

export function GlanceSection() {
  return (
    <Section
      id="glance"
      tone="surface"
      eyebrow="Festival at a Glance"
      title="One day, one ecosystem"
      className="relative overflow-hidden"
    >
      <ParallaxLayer
        distance={90}
        scaleRange={[0.9, 1.15]}
        className="absolute -right-24 top-0 size-80 rounded-full bg-brand/10 blur-3xl"
      >
        <span className="sr-only" />
      </ParallaxLayer>
      <ParallaxLayer
        distance={-70}
        className="absolute -left-20 bottom-0 size-72 rounded-full bg-kerala/10 blur-3xl"
      >
        <span className="sr-only" />
      </ParallaxLayer>
      <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {GLANCE.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <p className="font-display text-4xl font-extrabold text-brand">
                <Counter value={item.value} suffix={item.suffix} prefix={item.prefix ?? ""} />
              </p>
              <p className="mt-3 text-sm font-semibold">{item.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
