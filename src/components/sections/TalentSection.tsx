import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TALENT_LABELS } from "@/data/nalai";

export function TalentSection() {
  return (
    <Section
      id="talent"
      tone="surface"
      eyebrow="AI Talent"
      title="The People Behind Tomorrow"
      intro={
        <p>
          NALAI brings students, professionals, academia, mentors, startups, GCCs and
          industry together to create new pathways for learning, building and working with
          AI.
        </p>
      }
    >
      <div className="flex flex-wrap gap-3">
        {TALENT_LABELS.map((label, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <span className="inline-flex rounded-full border border-brand/30 bg-card px-6 py-3 text-sm font-semibold text-foreground/85">
              {label}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
