import { motion } from "motion/react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

function ConnectionGraphic() {
  return (
    <svg viewBox="0 0 480 200" className="h-auto w-full" role="img" aria-label="Animated network connecting Kerala, the Middle East and the wider AI ecosystem">
      <defs>
        <linearGradient id="nalai-link" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--color-kerala)" />
          <stop offset="100%" stopColor="var(--color-brand)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M80 140 C 180 40, 300 40, 400 90"
        fill="none"
        stroke="url(#nalai-link)"
        strokeWidth="2"
        strokeDasharray="6 8"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M80 140 C 200 180, 320 170, 400 90"
        fill="none"
        stroke="var(--color-brand)"
        strokeOpacity="0.35"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.2, ease: "easeInOut" }}
      />
      <circle cx="80" cy="140" r="9" fill="var(--color-kerala)" />
      <circle cx="400" cy="90" r="9" fill="var(--color-brand)" />
      <motion.circle
        r="5"
        fill="var(--color-gold)"
        animate={{ cx: [80, 240, 400], cy: [140, 60, 90] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <text x="80" y="170" textAnchor="middle" fontSize="13" fill="currentColor">
        Keralam
      </text>
      <text x="400" y="70" textAnchor="middle" fontSize="13" fill="currentColor">
        Middle East
      </text>
    </svg>
  );
}

export function GccSection() {
  return (
    <Section
      id="gcc-industry"
      eyebrow="GCC & Industry"
      title="Connecting AI with Global Opportunity"
      intro={
        <p>
          NALAI brings GCC and industry leaders together with the AI ecosystem to explore
          talent, technology, digital capabilities, innovation and future opportunities.
        </p>
      }
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="eyebrow">Featured</p>
            <h3 className="mt-3 text-2xl font-semibold">
              Middle East GCC Leadership Roundtable
            </h3>
            <p className="mt-3 text-muted-foreground">
              Senior leaders discuss AI, talent, capability and future opportunities across
              Keralam and the wider region.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 text-muted-foreground">
            <ConnectionGraphic />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
