import Image from "next/image";
import Link from "next/link";
import HomeCanvas from "@/components/HomeCanvas";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { works } from "@/data/works";
import { process } from "@/data/process";
import { artist, contactHref } from "@/data/site";

function Label({ children, light = false }) {
  return (
    <p className={`text-sm font-semibold ${light ? "text-white/50" : "text-mute"}`}>({children})</p>
  );
}

export default function Home() {
  const [lead, ...rest] = works;

  return (
    <>
      <main>
        <HomeCanvas />

        {/* About */}
        <section id="about" className="px-5 py-24 md:py-36">
          <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
            <Label>About</Label>
            <Reveal>
              <p className="caps text-3xl md:text-5xl">
                Large, slow, intensely worked paintings about the wealth beneath our feet, the
                talent we grow at home, and the hands that remember.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.5fr_1.5fr] md:items-end">
            <div className="hidden md:block" />
            <Reveal>
              <Image
                src="/artist/portrait.jpg"
                alt="Portrait of Mitchelle James in a purple and red striped patchwork suit"
                width={500}
                height={720}
                sizes="(min-width: 768px) 35vw, 100vw"
                className="h-auto w-full"
              />
            </Reveal>
            <Reveal delay={150} className="space-y-5 text-lg leading-relaxed">
              <p>
                {artist.name} is a painter — {artist.tagline.toLowerCase()}. The work moves
                between saturated, larger-than-life portraiture and dreamlike amber fields where
                calabash-bodied painters ride vines towards the faces of their elders.
              </p>
              <p>
                Recurring symbols — the gourd, the palette, the seed, the gold bar — carry ideas
                about inheritance, value and keeping Africa&rsquo;s wealth at home.
              </p>
              <Link href="/info" className="inline-block pt-4 text-sm font-semibold underline underline-offset-4">
                More about Mitchelle →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Featured works */}
        <section id="works" className="px-5 pb-24 md:pb-36">
          <div className="flex items-end justify-between border-t border-ink/15 pt-6">
            <Label>Featured works</Label>
            <Link href="/work" className="text-sm font-semibold underline underline-offset-4">
              All work
            </Link>
          </div>

          <Reveal className="mt-10">
            <Link href={`/work/${lead.slug}`} className="group grid gap-5 md:grid-cols-[1.4fr_1fr]">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-100 p-8 md:aspect-auto md:h-[80svh]">
                <Image
                  src={lead.image.src}
                  alt={lead.image.alt}
                  width={lead.image.width}
                  height={lead.image.height}
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="h-full w-auto object-contain shadow-[0_30px_50px_-25px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 py-2">
                <div>
                  <p className="text-sm font-semibold text-mute">Index No. {lead.index}</p>
                  <h3 className="display mt-4 text-6xl md:text-[6vw]">{lead.title}</h3>
                </div>
                <div>
                  <p className="caps text-xl">{lead.statement}</p>
                  <p className="mt-6 text-sm font-semibold underline underline-offset-4">View the painting →</p>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((w, i) => (
              <Reveal key={w.slug} delay={i * 120}>
                <Link href={`/work/${w.slug}`} className="group block">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-100 p-8">
                    <Image
                      src={w.image.src}
                      alt={w.image.alt}
                      width={w.image.width}
                      height={w.image.height}
                      sizes="(min-width: 768px) 30vw, 80vw"
                      className="h-full w-auto object-contain shadow-[0_30px_50px_-25px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-sm font-semibold">
                    <span>{w.title}</span>
                    <span className="text-mute">{w.theme}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section id="process" className="bg-ink px-5 py-24 text-white md:py-36">
          <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
            <Label light>How we work</Label>
            <Reveal>
              <h2 className="display text-[15vw] md:text-[8vw]">From a message to the wall</h2>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-[1fr_3fr]">
            <Reveal className="hidden md:block">
              <Image
                src="/details/talent-painter.jpg"
                alt="Detail of a small gourd painter in a red beret"
                width={300}
                height={300}
                sizes="20vw"
                className="h-auto w-full max-w-[260px]"
              />
            </Reveal>
            <ol className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
              {process.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 100} className="border-t border-white/20 pt-6">
                  <p className="text-sm font-semibold text-white/50">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="caps mt-4 text-3xl">{s.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-white/70">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center">
            <p className="caps text-2xl md:text-3xl">Have a portrait, a wall or a story in mind?</p>
            <a
              href={contactHref()}
              target="_blank"
              rel="noreferrer"
              className="bg-white px-7 py-4 text-sm font-semibold uppercase tracking-tight text-ink transition hover:bg-gold"
            >
              Start a commission ↗
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
