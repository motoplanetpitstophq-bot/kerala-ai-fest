import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { WHY_ATTEND } from "@/data/nalai";
import motifImage from "@/assets/why-attend-motif.jpg";

export function WhyAttendSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.4,
  });
  const x = useTransform(smooth, [0, 1], ["2%", "-72%"]);
  const progress = useTransform(smooth, [0, 1], ["0%", "100%"]);

  if (reduce) {
    return (
      <section id="why-attend" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">Why Attend</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
            Six reasons to be there
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ATTEND.map((card, i) => (
              <Card key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="why-attend" className="scroll-mt-24">
      <div ref={trackRef} className="relative h-[420vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">Why Attend</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Six reasons to be there
            </h2>
          </div>

          <motion.div
            style={{ x }}
            className="mt-10 flex w-max gap-5 pl-5 will-change-transform sm:pl-8"
          >
            {WHY_ATTEND.map((card, i) => (
              <div key={card.title} className="w-[78vw] sm:w-[46vw] lg:w-[30vw]">
                <Card card={card} index={i} />
              </div>
            ))}
          </motion.div>

          <div className="mx-auto mt-10 h-1 w-full max-w-6xl overflow-hidden rounded-full bg-border px-0 sm:px-0">
            <motion.div style={{ width: progress }} className="h-full bg-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  card,
  index,
}: {
  card: { title: string; copy: string };
  index: number;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
      <div className="relative h-36 overflow-hidden sm:h-40">
        <img
          src={motifImage}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: `${(index * 18) % 100}% center` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span className="absolute left-5 top-4 font-display text-sm font-bold text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-7 pt-3">
        <h3 className="text-xl font-semibold">{card.title}</h3>
        <p className="mt-2 text-muted-foreground">{card.copy}</p>
      </div>
    </article>
  );
}
