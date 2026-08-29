import { useRef } from "react";
import { motion } from "motion/react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CoconutPalm } from "@/components/site/CoconutPalm";
import { ParallaxLayer } from "@/components/site/ParallaxLayer";
import { EXPERIENCES } from "@/data/nalai";

export function ExperiencesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      id="experiences"
      tone="surface"
      eyebrow="Experiences"
      title="What happens at the festival"
      className="relative overflow-hidden"
    >
      <div ref={sectionRef} className="pointer-events-none absolute inset-0" />
      <ParallaxLayer
        targetRef={sectionRef}
        distance={70}
        scaleRange={[1.06, 0.96]}
        className="absolute -left-10 bottom-0"
      >
        <CoconutPalm
          delay={0.4}
          className="h-64 w-auto text-kerala/15 md:h-80 lg:h-[26rem]"
        />
      </ParallaxLayer>
      <ParallaxLayer
        targetRef={sectionRef}
        distance={110}
        scaleRange={[1.1, 0.94]}
        className="absolute -right-8 bottom-0 hidden md:block"
      >
        <CoconutPalm
          flip
          delay={1.6}
          className="h-56 w-auto text-brand/10 lg:h-72"
        />
      </ParallaxLayer>
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">

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
