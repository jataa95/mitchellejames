import Image from "next/image";
import Link from "next/link";
import HomeCanvas from "@/components/HomeCanvas";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import Marquee from "@/components/Marquee";
import ContactForm from "@/components/ContactForm";
import { works } from "@/data/works";
import { process } from "@/data/process";
import { artist } from "@/data/site";

function Label({ children, light = false }) {
  return (
    <Reveal variant="fade">
      <p className={`text-sm font-semibold ${light ? "text-white/50" : "text-mute"}`}>({children})</p>
    </Reveal>
  );
}

const imgShadow = "shadow-[0_30px_50px_-25px_rgba(0,0,0,0.5)]";

export default function Home() {
  const [lead, ...rest] = works;

  return (
    <>
      <main>
        <HomeCanvas />

        <Marquee
          items={["Of, for and from Africa", "Portraits", "Commissions", "Murals", "Keep the gold at home"]}
          className="display bg-ink py-5 text-3xl text-white md:text-5xl"
        />

        {/* About */}
        <section id="about" className="px-5 py-24 md:py-36">
          <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
            <Label>About</Label>
            <SplitText
              as="p"
              text="Large, slow, intensely worked paintings about the wealth beneath our feet, the talent we grow at home, and the hands that remember."
              className="caps text-3xl md:text-5xl"
              stagger={8}
            />
          </div>

          <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.5fr_1.5fr] md:items-end">
            <div className="hidden md:block" />
            <Reveal variant="clip">
              <Image
                src="/artist/portrait.jpg"
                alt="Portrait of Mitchelle James in a purple and red striped patchwork suit"
                width={500}
                height={720}
                sizes="(min-width: 768px) 35vw, 100vw"
                className="h-auto w-full"
              />
            </Reveal>
            <Reveal delay={200} className="space-y-5 text-lg leading-relaxed">
              <p>
                {artist.name} is a painter — {artist.tagline.toLowerCase()}. The work moves
                between saturated, larger-than-life portraiture and dreamlike amber fields where
                calabash-bodied painters ride vines towards the faces of their elders.
              </p>
              <p>
                Recurring symbols — the gourd, the palette, the seed, the gold bar — carry ideas
                about inheritance, value and keeping Africa&rsquo;s wealth at home.
              </p>
              <Link href="/info" className="link-slide inline-block pt-4 text-sm font-semibold">
                More about Mitchelle →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Featured works */}
        <section id="works" className="px-5 pb-24 md:pb-36">
          <Reveal className="rule flex items-end justify-between pt-6">
            <p className="text-sm font-semibold text-mute">(Featured works)</p>
            <Link href="/work" className="link-slide text-sm font-semibold">
              All work
            </Link>
          </Reveal>

          <Link href={`/work/${lead.slug}`} data-cursor="View" className="group mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <Reveal variant="clip" className="bg-neutral-100">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden p-8 md:aspect-auto md:h-[80svh]">
                <Image
                  src={lead.image.src}
                  alt={lead.image.alt}
                  width={lead.image.width}
                  height={lead.image.height}
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className={`h-full w-auto object-contain ${imgShadow} transition-transform duration-700 group-hover:scale-[1.03] group-hover:-rotate-1`}
                />
              </div>
            </Reveal>
            <div className="flex flex-col justify-between gap-8 py-2">
              <div>
                <Reveal variant="fade">
                  <p className="text-sm font-semibold text-mute">Index No. {lead.index}</p>
                </Reveal>
                <SplitText as="h3" text={lead.title} className="display mt-4 text-6xl md:text-[6vw]" />
              </div>
              <Reveal delay={200}>
                <p className="caps text-xl">{lead.statement}</p>
                <p className="link-slide mt-6 inline-block text-sm font-semibold">View the painting →</p>
              </Reveal>
            </div>
          </Link>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((w, i) => (
              <Link key={w.slug} href={`/work/${w.slug}`} data-cursor="View" className="group block">
                <Reveal variant="clip" delay={i * 150} className="bg-neutral-100">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden p-8">
                    <Image
                      src={w.image.src}
                      alt={w.image.alt}
                      width={w.image.width}
                      height={w.image.height}
                      sizes="(min-width: 768px) 30vw, 80vw"
                      className={`h-full w-auto object-contain ${imgShadow} transition-transform duration-700 group-hover:scale-[1.05] ${i % 2 ? "group-hover:rotate-1" : "group-hover:-rotate-1"}`}
                    />
                  </div>
                </Reveal>
                <Reveal variant="fade" delay={300 + i * 150} className="mt-3 flex justify-between text-sm font-semibold">
                  <span>{w.title}</span>
                  <span className="text-mute">{w.theme}</span>
                </Reveal>
              </Link>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section id="process" className="bg-ink px-5 py-24 text-white md:py-36">
          <div className="grid gap-10 md:grid-cols-[1fr_3fr]">
            <Label light>How we work</Label>
            <SplitText as="h2" text="From a message to the wall" className="display text-[15vw] md:text-[8vw]" stagger={22} />
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-[1fr_3fr]">
            <Reveal variant="clip" className="hidden self-start md:block">
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
                <Reveal as="li" key={s.title} delay={i * 120} className="rule group pt-6">
                  <p className="text-sm font-semibold text-white/50">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="caps mt-4 text-3xl transition-colors duration-300 group-hover:text-gold">{s.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-white/70">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Marquee
          items={["Commissions open", "Portraits", "Murals", "Original paintings", "Exhibitions"]}
          className="display bg-gold py-5 text-3xl text-ink md:text-5xl"
          reverse
        />

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 bg-ink px-5 py-24 text-white md:py-36">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
            <div>
              <Label light>Contact</Label>
              <SplitText as="h2" text={"Let's make\nsomething\nthat stays"} className="display mt-8 text-[14vw] md:text-[6vw]" stagger={25} />
              <Reveal delay={300} className="mt-10 max-w-sm space-y-6 text-white/70">
                <p>
                  Portrait commissions, original paintings, murals, exhibitions or press — tell
                  Mitchelle what you have in mind.
                </p>
                <p>
                  Prefer to message directly?{" "}
                  <a href={artist.instagram} target="_blank" rel="noreferrer" className="link-slide font-semibold text-white">
                    @{artist.handle}
                  </a>
                </p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
