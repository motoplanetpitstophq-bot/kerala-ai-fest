import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SOLUTIONS } from "@/data/nalai";

export function SolutionsSection() {
  return (
    <Section
      id="ai-solutions"
      eyebrow="AI Solutions"
      title="AI in Action"
      intro={<p>See how AI moves from an idea to a solution.</p>}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <article className="h-full rounded-2xl border border-border bg-card p-7">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="eyebrow">Problem</dt>
                  <dd className="mt-1 text-muted-foreground">{s.problem}</dd>
                </div>
                <div>
                  <dt className="eyebrow">AI Solution</dt>
                  <dd className="mt-1 text-muted-foreground">{s.solution}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Impact</dt>
                  <dd className="mt-1 font-medium">{s.impact}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Only approved solution names, descriptions and claims are published. More showcases
        will be added as they are confirmed.
      </p>
    </Section>
  );
}
