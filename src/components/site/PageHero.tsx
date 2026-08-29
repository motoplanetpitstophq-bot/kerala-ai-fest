import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ParticleField } from "@/components/site/ParticleField";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grid-motif opacity-60" />
      <ParticleField />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 font-display text-4xl font-extrabold sm:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.div
            className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {intro}
          </motion.div>
        )}
      </div>
    </section>
  );
}
