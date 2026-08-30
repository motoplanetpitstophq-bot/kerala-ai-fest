import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { motion, useReducedMotion } from "motion/react";

const KERALA: [number, number] = [8.52, 76.94];
const MIDDLE_EAST: [number, number] = [25.2, 55.27];

/**
 * Draggable WebGL globe (cobe) with an animated Keralam -> Middle East arc
 * drawn as an SVG overlay. Client-only: must be rendered lazily.
 */
export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const phiRef = useRef(4.4);
  const reduce = useReducedMotion();
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: phiRef.current,
      theta: 0.25,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.96, 0.95, 0.93],
      markerColor: [0.85, 0.16, 0.18],
      glowColor: [0.98, 0.86, 0.84],
      markers: [
        { location: KERALA, size: 0.09 },
        { location: MIDDLE_EAST, size: 0.07 },
      ],
      arcs: [{ from: KERALA, to: MIDDLE_EAST }],
      arcColor: [0.85, 0.16, 0.18],
      arcWidth: 0.4,
      arcHeight: 0.35,
    });

    let frame = 0;
    const tick = () => {
      if (pointerInteracting.current === null && !reduce) {
        phiRef.current += 0.0032;
      }
      globe.update({
        phi: phiRef.current + pointerMovement.current / 200,
        width: width * 2,
        height: width * 2,
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <canvas
        ref={canvasRef}
        aria-label="Interactive globe highlighting Keralam and the Middle East"
        role="img"
        className="size-full"
        style={{ cursor: dragging ? "grabbing" : "grab", contain: "layout paint size" }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerMovement.current;
          setDragging(true);
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          setDragging(false);
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          setDragging(false);
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            pointerMovement.current = e.clientX - pointerInteracting.current;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            pointerMovement.current = e.touches[0].clientX - pointerInteracting.current;
          }
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-4 text-xs"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
          <span className="size-2 rounded-full bg-brand" /> Keralam
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
          <span className="size-2 rounded-full bg-kerala" /> Middle East
        </span>
      </motion.div>
    </div>
  );
}
