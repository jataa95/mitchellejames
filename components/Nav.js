import { artist } from "@/data/site";

const links = [
  ["Works", "#works"],
  ["Gold", "#gold"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/80 text-cream backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-lg tracking-wide">
          {artist.name}
        </a>
        <ul className="flex gap-4 text-xs uppercase tracking-[0.2em] sm:gap-7 sm:text-sm">
          {links.map(([label, href]) => (
            <li key={href} className={label === "Gold" ? "hidden sm:block" : ""}>
              <a href={href} className="transition hover:text-gold">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
