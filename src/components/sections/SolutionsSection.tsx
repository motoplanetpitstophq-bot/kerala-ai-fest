import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AlertTriangle, ArrowRight, Cpu, FileSearch, Gauge, MessagesSquare, Sparkles, TrendingUp } from "lucide-react";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ParallaxLayer } from "@/components/site/ParallaxLayer";
import { SOLUTIONS } from "@/data/nalai";

const ICONS = [MessagesSquare, FileSearch, Gauge, Cpu];

const STEPS = [
  { key: "problem", label: "Problem", icon: AlertTriangle },
  { key: "solution", label: "AI Solution", icon: Sparkles },
  { key: "impact", label: "Impact", icon: TrendingUp },
] as const;

export function SolutionsSection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const solution = SOLUTIONS[active]!;

  return (
    <Section
      id="ai-solutions"
      eyebrow="AI Solutions"
      title="AI in Action"
      intro={<p>See how AI moves from an idea to a solution.</p>}
      className="relative overflow-hidden"
    >
      {/* ambient background */}
      <ParallaxLayer
        speed={-40}
        className="pointer-events-none absolute -right-24 top-10 -z-10 size-80 rounded-full bg-brand/10 blur-3xl"
      >
        <span />
      </ParallaxLayer>
      <ParallaxLayer
        speed={30}
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 size-72 rounded-full bg-gold/15 blur-3xl"
      >
        <span />
      </ParallaxLayer>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Solution selector rail */}
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {SOLUTIONS.map((s, i) => {
              const Icon = ICONS[i % ICONS.length]!;
              const isActive = i === active;
              return (
                <li key={s.name} className="shrink-0 lg:shrink">
                  <button
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative flex w-[240px] items-center gap-3 rounded-2xl border p-4 text-left transition-colors lg:w-full ${
                      isActive
                        ? "border-brand bg-card"
                        : "border-border bg-card/60 hover:border-brand/50"
                    }`}
                  >
                    {isActive && !reduce && (
                      <motion.span
                        layoutId="solution-active"
                        className="absolute inset-0 -z-10 rounded-2xl bg-brand/5"
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      />
                    )}
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-brand text-brand-foreground"
                          : "bg-accent text-brand group-hover:bg-brand/10"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-snug">
                        {s.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        0{i + 1} · Showcase
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Flow panel */}
        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-9">
            <div className="pointer-events-none absolute inset-0 bg-grid-motif opacity-40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={solution.name}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative"
              >
                <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                  {solution.name}
                </h3>

                <ol className="mt-8 space-y-0">
                  {STEPS.map((step, si) => {
                    const Icon = step.icon;
                    const value = solution[step.key];
                    const last = si === STEPS.length - 1;
                    return (
                      <motion.li
                        key={step.key}
                        initial={reduce ? false : { opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + si * 0.12, duration: 0.4 }}
                        className="relative flex gap-4 pb-8 last:pb-0"
                      >
                        {/* rail */}
                        {!last && (
                          <span className="absolute left-[19px] top-11 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-brand/60 to-brand/10">
                            {!reduce && (
                              <motion.span
                                className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-brand"
                                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                                transition={{
                                  duration: 2.4,
                                  repeat: Infinity,
                                  delay: si * 0.5,
                                  ease: "easeInOut",
                                }}
                              />
                            )}
                          </span>
                        )}
                        <span
                          className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border ${
                            last
                              ? "border-brand bg-brand text-brand-foreground"
                              : "border-brand/30 bg-accent text-brand"
                          }`}
                        >
                          <Icon className="size-4" />
                        </span>
                        <div className="min-w-0 pt-1">
                          <p className="eyebrow">{step.label}</p>
                          <p
                            className={`mt-1.5 ${
                              last
                                ? "text-lg font-medium sm:text-xl"
                                : "text-muted-foreground"
                            }`}
                          >
                            {value}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </ol>
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-8 flex items-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
              <ArrowRight className="size-4 text-brand" />
              Explore this showcase live at the festival.
            </div>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Only approved solution names, descriptions and claims are published. More showcases
        will be added as they are confirmed.
      </p>
    </Section>
  );
}
