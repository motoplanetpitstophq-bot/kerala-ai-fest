import { motion } from "motion/react";
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
            <motion.article
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-brand/10 blur-2xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h3 className="relative text-xl font-semibold">{exp.title}</h3>
              <p className="relative mt-2 text-muted-foreground">{exp.copy}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
