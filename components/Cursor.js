"use client";

import { useEffect, useRef, useState } from "react";

// A soft dot that follows the mouse and grows into a "View" label over
// anything marked with data-cursor="…". Only on devices with a real mouse.
export default function Cursor() {
  const dot = useRef(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    setEnabled(true);

    let x = -100, y = -100, cx = x, cy = y, raf = 0;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target.closest?.("[data-cursor]");
      setLabel(target ? target.getAttribute("data-cursor") : "");
    };
    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[60]" aria-hidden>
      <div
        className={`flex items-center justify-center rounded-full bg-gold text-xs font-semibold uppercase text-ink transition-all duration-300 ease-out ${
          label ? "h-20 w-20 opacity-100" : "h-3 w-3 opacity-80"
        }`}
      >
        <span className={`transition-opacity duration-200 ${label ? "opacity-100" : "opacity-0"}`}>{label}</span>
      </div>
    </div>
  );
}
