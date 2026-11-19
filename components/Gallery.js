"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({ works }) {
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d) => setOpen((i) => (i === null ? i : (i + d + works.length) % works.length)),
    [works.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : works[open];

  return (
    <>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {works.map((w, i) => (
          <figure key={w.slug} className={i === 1 ? "md:mt-16" : ""}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden bg-clay shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
              aria-label={`View ${w.title} larger`}
            >
              <Image
                src={w.image}
                alt={`${w.title} by Mitchelle James. ${w.summary}`}
                width={w.width}
                height={w.height}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
              />
            </button>
            <figcaption className="mt-4">
              <h3 className="font-display text-2xl">{w.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/60">{w.medium}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{w.summary}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-cream md:flex-row"
          onClick={close}
        >
          <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 md:p-10">
            <Image
              src={current.image}
              alt={`${current.title} by Mitchelle James`}
              width={current.width}
              height={current.height}
              quality={90}
              sizes="70vw"
              className="max-h-full w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <aside
            className="max-h-[40vh] overflow-y-auto border-t border-cream/10 p-6 md:max-h-none md:w-96 md:border-l md:border-t-0 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              {open + 1} / {works.length}
            </p>
            <h3 className="mt-3 font-display text-3xl">{current.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">{current.medium}</p>
            <p className="mt-6 leading-relaxed text-cream/85">{current.story}</p>
            <div className="mt-8 flex gap-3">
              <button type="button" onClick={() => step(-1)} className="border border-cream/30 px-4 py-2 text-sm hover:border-gold hover:text-gold">
                ← Prev
              </button>
              <button type="button" onClick={() => step(1)} className="border border-cream/30 px-4 py-2 text-sm hover:border-gold hover:text-gold">
                Next →
              </button>
              <button type="button" onClick={close} className="ml-auto px-2 py-2 text-sm text-cream/70 hover:text-gold">
                Close ✕
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
