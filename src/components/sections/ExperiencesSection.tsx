import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EXPERIENCES } from "@/data/nalai";

export function ExperiencesSection() {
  return (
    <Section
      id="experiences"
      tone="surface"
      eyebrow="Experiences"
      title="What happens at the festival"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={exp.title} delay={i * 0.05}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="mt-2 text-muted-foreground">{exp.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
