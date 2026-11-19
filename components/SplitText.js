"use client";

import { Fragment } from "react";
import useInView from "./useInView";

// Splits text into letters that slide up one after another.
// Use for big display headings. Screen readers get the plain text.
export default function SplitText({ text, as: Tag = "span", className = "", immediate = false, delay = 0, stagger = 28 }) {
  const [ref, shown] = useInView({ immediate });
  const lines = text.split("\n");
  let i = 0;

  return (
    <Tag ref={ref} className={`split ${shown ? "is-shown" : ""} ${className}`} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").filter(Boolean).map((word, wi, words) => (
            <Fragment key={wi}>
              <span className="inline-block whitespace-nowrap">
                {[...word].map((ch, ci) => (
                  <span key={ci} className="split-mask">
                    <span className="split-char" style={{ transitionDelay: `${delay + i++ * stagger}ms` }}>
                      {ch}
                    </span>
                  </span>
                ))}
              </span>
              {wi < words.length - 1 && " "}
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
}
