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
      onRender: (state) => {
        if (pointerInteracting.current === null && !reduce) {
          phiRef.current += 0.0032;
        }
        state.phi = phiRef.current + pointerMovement.current / 200;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
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

      <svg
        viewBox="0 0 400 400"
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="nalai-globe-arc" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--color-kerala)" />
            <stop offset="100%" stopColor="var(--color-brand)" />
          </linearGradient>
        </defs>
        <motion.path
          id="nalai-globe-path"
          d="M232 258 C 220 150, 190 110, 150 128"
          fill="none"
          stroke="url(#nalai-globe-arc)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {!reduce && (
          <circle r="4" fill="var(--color-gold)">
            <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#nalai-globe-path" />
            </animateMotion>
          </circle>
        )}
        <text x="240" y="278" fontSize="12" fill="currentColor">
          Keralam
        </text>
        <text x="86" y="120" fontSize="12" fill="currentColor">
          Middle East
        </text>
      </svg>
    </div>
  );
}
