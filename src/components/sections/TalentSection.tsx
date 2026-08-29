import { Section } from "@/components/site/Section";
import { Marquee } from "@/components/site/Marquee";
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
      <Marquee
        items={TALENT_LABELS.map((label) => (
          <span
            key={label}
            className="inline-flex rounded-full border border-brand/30 bg-card px-6 py-3 text-sm font-semibold text-foreground/85"
          >
            {label}
          </span>
        ))}
      />
      <Marquee
        className="mt-3"
        speed={34}
        items={[...TALENT_LABELS].reverse().map((label) => (
          <span
            key={label}
            className="inline-flex rounded-full border border-kerala/30 bg-card px-6 py-3 text-sm font-semibold text-foreground/70"
          >
            {label}
          </span>
        ))}
      />
    </Section>
  );
}
