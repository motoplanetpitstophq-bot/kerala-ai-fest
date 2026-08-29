import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { ParticleField } from "@/components/site/ParticleField";
import ctaImage from "@/assets/cta-kerala-ai.jpg";
import { EVENT } from "@/data/nalai";

export function FinalCta() {
  return (
    <section id="register" className="relative overflow-hidden scroll-mt-24 py-24">
      <motion.img
        aria-hidden
        src={ctaImage}
        loading="lazy"
        width={1920}
        height={720}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
      <div className="pointer-events-none absolute inset-0 grid-motif opacity-70" />
      <ParticleField />
      <div className="relative mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold sm:text-6xl">
            Be Part of <span className="text-gradient-brand">Tomorrow</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            {EVENT.date} · {EVENT.venue}
          </p>
          <motion.span
            className="mt-8 inline-block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link
              to="/register"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-10 text-sm font-bold tracking-wide text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5"
            >
              REGISTER NOW
            </Link>
          </motion.span>
        </Reveal>
      </div>
    </section>
  );
}
