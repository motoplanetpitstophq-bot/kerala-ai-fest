import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
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
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });
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

  const total = WHY_ATTEND.length;

  return (
    <section id="why-attend" className="scroll-mt-24">
      <div ref={trackRef} className="relative" style={{ height: `${(total + 1) * 90}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">Why Attend</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Six reasons to be there
            </h2>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-md flex-1 px-5 sm:px-8">
            {WHY_ATTEND.map((card, i) => (
              <StackedCard
                key={card.title}
                card={card}
                index={i}
                total={total}
                progress={smooth}
              />
            ))}
          </div>

          <div className="mx-auto mb-10 mt-6 h-1 w-full max-w-6xl overflow-hidden rounded-full bg-border">
            <motion.div style={{ width: progress }} className="h-full bg-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StackedCard({
  card,
  index,
  total,
  progress,
}: {
  card: { title: string; copy: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / (total + 1);
  const start = index * step;
  const end = start + step;

  // pops in from below, then settles and sinks slightly behind as the next card arrives
  const y = useTransform(
    progress,
    [start, end, end + step],
    [340, 0, -18 - index * 2],
  );
  const scale = useTransform(progress, [start, end, end + step], [0.86, 1, 0.94]);
  const opacity = useTransform(
    progress,
    [start, start + step * 0.35, end + step, end + step * 1.4],
    [0, 1, 1, 0.35],
  );
  const rotate = useTransform(
    progress,
    [start, end, end + step],
    [index % 2 === 0 ? 5 : -5, 0, index % 2 === 0 ? -1.5 : 1.5],
  );

  return (
    <motion.div
      style={{ y, scale, opacity, rotate, zIndex: index + 1 }}
      className="absolute inset-x-5 top-1/2 -translate-y-1/2 will-change-transform sm:inset-x-8"
    >
      <div className="shadow-2xl shadow-brand/10">
        <Card card={card} index={index} />
      </div>
    </motion.div>
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
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-brand/50 hover:shadow-xl">
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

