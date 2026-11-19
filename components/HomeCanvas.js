"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { artist } from "@/data/site";

// Each tile: image, which work it links to, position (% of the screen),
// width (vw, with a minimum for small screens) and parallax depth.
const tiles = [
  { src: "/details/gold-face.jpg", w: 300, h: 300, work: "gold-standard", x: 9, y: 13, size: 10, depth: 18 },
  { src: "/details/talent-seed.jpg", w: 310, h: 290, work: "talent-greenhouse", x: 36, y: -3, size: 13, depth: 10 },
  { src: "/details/gold-bars.jpg", w: 220, h: 220, work: "gold-standard", x: 58, y: 4, size: 7, depth: 28 },
  { src: "/details/gold-sash.jpg", w: 320, h: 360, work: "gold-standard", x: 79, y: 9, size: 9, depth: 14 },
  { src: "/details/gourd-torch.jpg", w: 540, h: 600, work: "gourd-bearers", x: -2, y: 31, size: 8, depth: 22 },
  { src: "/details/talent-painter.jpg", w: 300, h: 300, work: "talent-greenhouse", x: 87, y: 56, size: 8, depth: 26 },
  { src: "/details/gold-hands.jpg", w: 300, h: 300, work: "gold-standard", x: 11, y: 68, size: 13, depth: 12 },
  { src: "/details/talent-elder.jpg", w: 340, h: 310, work: "talent-greenhouse", x: 50, y: 66, size: 14, depth: 16 },
  { src: "/details/gold-feet.jpg", w: 370, h: 340, work: "gold-standard", x: 45, y: 84, size: 15, depth: 8 },
  { src: "/details/gourd-figure.jpg", w: 750, h: 700, work: "gourd-bearers", x: 82, y: 87, size: 8, depth: 20 },
  { src: "/details/talent-heads.jpg", w: 340, h: 300, work: "talent-greenhouse", x: 94, y: 86, size: 7, depth: 30 },
];

export default function HomeCanvas() {
  const ref = useRef(null);

  // Gentle mouse parallax: write pointer position into CSS variables.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        el.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-paper">
      {tiles.map((t, i) => (
        <div
          key={t.src}
          className="absolute"
          style={{
            left: `${t.x}%`,
            top: `${t.y}%`,
            width: `max(${t.size}vw, ${Math.round(t.size * 7)}px)`,
            transform: `translate3d(calc(var(--mx, 0) * ${-t.depth}px), calc(var(--my, 0) * ${-t.depth}px), 0)`,
            transition: "transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1)",
          }}
        >
          <div
            className="tile"
            style={{
              "--dur": `${8 + (i % 4) * 1.7}s`,
              "--delay": `${-i * 1.3}s`,
              "--dx": `${i % 2 ? 8 : -8}px`,
              "--dy": `${i % 3 ? -12 : 10}px`,
            }}
          >
            <Link
              href={`/work/${t.work}`}
              className="tile-in block transition-transform duration-500 hover:scale-[1.04]"
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <Image
                src={t.src}
                alt=""
                width={t.w}
                height={t.h}
                sizes="20vw"
                preload={i < 4}
                className="h-auto w-full"
              />
            </Link>
          </div>
        </div>
      ))}

      <h1 className="display fade-up pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-center text-[17vw] text-white mix-blend-difference md:text-[8vw]">
        Mitchelle
        <br className="md:hidden" /> James
      </h1>

      <p className="caps pointer-events-none absolute inset-x-0 bottom-12 z-10 mx-auto max-w-xs px-5 text-center text-[17px] text-white mix-blend-difference sm:max-w-xl sm:text-xl">
        {artist.role} — {artist.tagline}
      </p>

      <a
        href={artist.instagram}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-5 left-5 z-10 hidden text-[15px] font-semibold tracking-tight text-white mix-blend-difference sm:block"
      >
        @{artist.handle}
      </a>
    </section>
  );
}
