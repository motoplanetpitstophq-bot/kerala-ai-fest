import { motion } from "motion/react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ROADMAP } from "@/data/nalai";

export function RoadmapSection() {
  return (
    <Section
      id="roadmap"
      eyebrow="Six-Month Roadmap"
      title="The journey after the festival"
      intro={<p>A high-level view of how the momentum continues.</p>}
    >
      <div className="relative">
        <motion.div
          aria-hidden
          className="absolute left-[7px] top-2 w-0.5 origin-top bg-brand/40 md:left-0 md:top-[7px] md:h-0.5 md:w-full md:origin-left"
          style={{ bottom: 0 }}
          initial={{ scaleY: 0, scaleX: 0 }}
          whileInView={{ scaleY: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <ol className="grid gap-8 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {ROADMAP.map((step, i) => (
            <li key={step.month} className="relative pl-8 md:pl-0 md:pt-8">
              <Reveal delay={i * 0.08}>
                <span className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-brand bg-background md:top-0" />
                <p className="eyebrow">{step.month}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.copy}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
