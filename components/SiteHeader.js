"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { artist, contactHref } from "@/data/site";

const links = [
  { label: "Info", href: "/info" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: contactHref(), external: true },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass =
    "display block py-2 text-6xl text-white/40 transition-colors hover:text-white sm:text-7xl";

  return (
    <>
      <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 text-[15px] font-semibold tracking-tight text-white mix-blend-difference">
        <Link href="/" className="pointer-events-auto">
          {artist.name}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="site-menu"
          className="pointer-events-auto cursor-pointer"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="site-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex items-center justify-center bg-ink transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="text-center">
          {links.map((l, i) => (
            <li
              key={l.label}
              className={`transition-all duration-700 ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
            >
              {l.external ? (
                <a href={l.href} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className={linkClass}>
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} tabIndex={open ? 0 : -1} className={linkClass} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className="absolute bottom-6 left-5 text-sm font-semibold text-white/40">@{artist.handle}</p>
      </div>
    </>
  );
}
