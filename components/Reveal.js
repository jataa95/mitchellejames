"use client";

import useInView from "./useInView";

// Animates children in the first time they scroll on screen.
// variant: "up" (fade + lift, default) | "clip" (wipe up, for images) | "fade"
export default function Reveal({ children, delay = 0, className = "", variant = "up", as: Tag = "div" }) {
  const [ref, shown] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? "is-shown" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
