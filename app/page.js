import Image from "next/image";
import Nav from "@/components/Nav";
import Gallery from "@/components/Gallery";
import { works } from "@/data/works";
import { artist, press } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="grain relative overflow-hidden bg-ink text-cream">
          <div
            aria-hidden
            className="absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-ochre/25 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-36">
            <div>
              <p className="rise text-xs uppercase tracking-[0.35em] text-gold">Painter · @{artist.handle}</p>
              <h1 className="rise rise-2 mt-6 font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
                Mitchelle
                <br />
                <span className="italic text-ochre">James</span>
              </h1>
              <p className="rise rise-3 mt-8 max-w-md text-lg leading-relaxed text-cream/80">
                {artist.tagline} Paintings about the wealth beneath our feet, the talent we grow at home,
                and the hands that remember.
              </p>
              <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
                <a href="#works" className="bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition hover:bg-ochre">
                  See the work
                </a>
                <a href="#contact" className="border border-cream/40 px-6 py-3 text-sm uppercase tracking-[0.15em] transition hover:border-gold hover:text-gold">
                  Commission / enquire
                </a>
              </div>
            </div>
            <div className="rise rise-2 relative">
              <div className="absolute -inset-3 -rotate-2 bg-gradient-to-br from-ochre via-ember to-rose opacity-70" aria-hidden />
              <Image
                src="/artist/mitchelle-studio.jpg"
                alt="Mitchelle James in the studio beside a large amber painting on an easel"
                width={1440}
                height={1920}
                preload
                sizes="(min-width: 768px) 45vw, 100vw"
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </section>
        <div className="weave" />

        {/* Works */}
        <section id="works" className="scroll-mt-16 mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">Selected works</p>
              <h2 className="mt-4 font-display text-5xl">On the canvas</h2>
            </div>
            <p className="max-w-sm text-ink/70">
              Tap any painting to see it larger and read the story behind it. Some canvases take
              over 250 hours from first mark to signature.
            </p>
          </div>
          <Gallery works={works} />
        </section>

        {/* Gold */}
        <section id="gold" className="scroll-mt-16 bg-rose/30">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <Image
              src="/works/gold-standard-studio.jpg"
              alt="The gold-bar portrait shown on an easel in a bright room beside a palm plant"
              width={1440}
              height={1440}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-ember">The thread through the work</p>
              <h2 className="mt-4 font-display text-5xl leading-tight">
                Keep the gold <span className="italic">at home.</span>
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
                <p>
                  This year the headlines are about Africa&rsquo;s ground: record gold sales,
                  billion-dollar development frameworks, and leaders insisting that the continent
                  will no longer be a passive arena for a new scramble for its resources.
                </p>
                <p>
                  Mitchelle paints the same conversation from the inside. The woman in{" "}
                  <em>Gold Standard</em> doesn&rsquo;t mine the bullion or watch it shipped away —
                  she holds it. Value that stays where it was made: in our minerals, our industries,
                  and in the artists who grow up here.
                </p>
              </div>
              <blockquote className="mt-10 border-l-4 border-gold pl-6 font-display text-2xl italic">
                &ldquo;An artist of, for and from Africa.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>
        <div className="weave" />

        {/* About */}
        <section id="about" className="scroll-mt-16 bg-clay text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
            <Image
              src="/artist/portrait.jpg"
              alt="Portrait of Mitchelle James in a purple and red striped patchwork suit"
              width={500}
              height={720}
              sizes="(min-width: 768px) 35vw, 100vw"
              className="h-auto w-full"
            />
            <div className="self-center">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">About the artist</p>
              <h2 className="mt-4 font-display text-5xl">Mitchelle James</h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-cream/80">
                <p>
                  Mitchelle James makes large, slow, intensely worked paintings rooted in African
                  life — portraits wrapped in kente and bullion, and dreamlike amber fields where
                  calabash-bodied painters ride vines towards the faces of their elders.
                </p>
                <p>
                  The work moves between sharp, saturated portraiture and textured, sculpted surfaces
                  built up by hand. Recurring symbols — the gourd, the palette, the seed, the gold
                  bar — carry ideas about inheritance, value and the talent a community chooses to
                  nurture.
                </p>
                <p>
                  Mitchelle shares the process openly with a growing audience on Instagram, from
                  time-lapses of hundreds of studio hours to murals and gallery shows.
                </p>
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">Press</p>
                <ul className="mt-4 space-y-3">
                  {press.map((p) => (
                    <li key={p.title}>
                      <a href={p.url} target="_blank" rel="noreferrer" className="group flex flex-wrap items-baseline gap-x-3">
                        <span className="font-semibold tracking-wide">{p.outlet}</span>
                        <span className="text-cream/80 group-hover:text-gold">{p.title}</span>
                        <span className="text-sm text-cream/50">{p.date}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-gold text-ink">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
            <p className="text-xs uppercase tracking-[0.35em]">Commissions · Collectors · Exhibitions</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
              Let&rsquo;s make something that stays.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80">
              For original works, portrait commissions, murals or exhibition enquiries, send a
              message — Mitchelle reads every one.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={artist.instagram} target="_blank" rel="noreferrer" className="bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-ember">
                Message on Instagram
              </a>
              {artist.email && (
                <a href={`mailto:${artist.email}`} className="border-2 border-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition hover:bg-ink hover:text-cream">
                  Email
                </a>
              )}
              {artist.facebook && (
                <a href={artist.facebook} target="_blank" rel="noreferrer" className="border-2 border-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition hover:bg-ink hover:text-cream">
                  {artist.facebookName}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-cream/60">
        <div className="weave" />
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-5 py-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} {artist.name}. All artworks © the artist.</p>
          <a href={artist.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
            @{artist.handle}
          </a>
        </div>
      </footer>
    </>
  );
}
