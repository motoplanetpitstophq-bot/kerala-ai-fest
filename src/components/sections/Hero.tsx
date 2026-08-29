import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-kerala-ai.jpg";
import { EVENT } from "@/data/nalai";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grid-motif opacity-60" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 size-[28rem] rounded-full bg-brand/15 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-kerala/15 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          An AI festival led by {EVENT.lead}
        </motion.p>

        <motion.h1
          className="mt-4 font-display text-6xl font-extrabold leading-[0.9] sm:text-8xl lg:text-[9rem]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient-brand">NALAI</span>
        </motion.h1>

        <motion.p
          className="mt-2 font-display text-2xl font-semibold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {EVENT.tagline}
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {EVENT.shortLine}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.26 }}
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 text-brand" />
            {EVENT.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-brand" />
            {EVENT.venue}
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          <Link
            to="/register"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-8 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            REGISTER NOW
          </Link>
          <a
            href="#experiences"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 text-sm font-bold tracking-wide transition-colors hover:border-brand hover:text-brand"
          >
            EXPLORE THE FESTIVAL
            <ArrowRight className="size-4" />
          </a>
        </motion.div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <img
            src={heroImage}
            width={1920}
            height={1088}
            alt="Kerala backwaters transforming into a futuristic AI network"
            className="h-[240px] w-full object-cover sm:h-[420px]"
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-brand/10 to-transparent"
            animate={{ x: ["-10%", "460%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
