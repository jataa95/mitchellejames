import Link from "next/link";
import { artist, contactHref } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="flex min-h-[90svh] flex-col px-5 pb-6 pt-24">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="display text-[15vw] md:text-[11vw]">Mitchelle James</h2>
          <a
            href={contactHref()}
            target="_blank"
            rel="noreferrer"
            className="mt-16 text-sm font-semibold underline underline-offset-4 hover:text-gold"
          >
            Get in touch ↗
          </a>
        </div>
        <p className="caps mx-auto max-w-md text-center text-lg">
          {artist.role} — {artist.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex gap-4">
            <a href={artist.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
              Ig
            </a>
            {artist.facebook && (
              <a href={artist.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Fb
              </a>
            )}
          </div>
          <Link href="/work" className="hover:text-gold">
            All work
          </Link>
          <p className="text-white/50">
            © {new Date().getFullYear()} {artist.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
