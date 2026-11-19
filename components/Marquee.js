// An endlessly scrolling band of text.
export default function Marquee({ items, className = "", reverse = false }) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          <span>{t}</span>
          <span className="inline-block h-3 w-3 rotate-45 bg-gold" />
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden ${className}`}>
      <span className="sr-only">{items.join(", ")}</span>
      <div className={`marquee flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        {row}
        {row}
      </div>
    </div>
  );
}
