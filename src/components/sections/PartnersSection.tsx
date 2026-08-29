import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EVENT, PARTNERS } from "@/data/nalai";

export function PartnersSection() {
  return (
    <Section id="partners" tone="surface" eyebrow="Partners" title="Built with the ecosystem">
      <Reveal>
        <div className="rounded-2xl border border-brand/30 bg-card p-7">
          <p className="eyebrow">Lead / Event platform</p>
          <p className="mt-2 font-display text-2xl font-bold">{EVENT.lead}</p>
        </div>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {PARTNERS.map((p, i) => (
          <Reveal key={p} delay={i * 0.05}>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card px-4 text-center text-sm font-semibold text-foreground/80">
              {p}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
