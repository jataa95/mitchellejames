import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { works, getWork } from "@/data/works";
import { artist, contactHref } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return {};
  return { title: w.title, description: w.statement, openGraph: { images: [w.image.src] } };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();
  const more = works.filter((o) => o.slug !== w.slug);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative h-[100svh] overflow-hidden bg-ink">
          <Image src={w.hero.src} alt={w.hero.alt} fill preload sizes="100vw" className="hero-zoom object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
            <SplitText as="h1" text={w.title} immediate delay={150} stagger={35} className="display text-[13vw] md:text-[7vw]" />
            <p className="caps fade-up mt-4 text-lg" style={{ animationDelay: "0.7s" }}>Index No. {w.index}</p>
          </div>
        </section>

        {/* Statement + meta */}
        <section className="px-5 py-16 md:py-24">
          <SplitText as="p" text={w.statement} stagger={6} className="caps block max-w-5xl text-2xl md:text-4xl" />
          <Reveal as="dl" delay={200} className="rule mt-14 grid grid-cols-2 gap-6 pt-6 text-sm md:grid-cols-4">
            <div>
              <dt className="text-mute">Medium</dt>
              <dd className="mt-1 font-semibold">{w.medium}</dd>
            </div>
            <div>
              <dt className="text-mute">Theme</dt>
              <dd className="mt-1 font-semibold">{w.theme}</dd>
            </div>
            <div>
              <dt className="text-mute">Year</dt>
              <dd className="mt-1 font-semibold">{w.year}</dd>
            </div>
            <div>
              <dt className="text-mute">Enquire</dt>
              <dd className="mt-1 font-semibold">
                <a href={contactHref()} target="_blank" rel="noreferrer" className="hover:underline">
                  Ask about this work ↗
                </a>
              </dd>
            </div>
          </Reveal>
        </section>

        {/* The painting, full */}
        <section className="px-5">
          <Reveal variant="clip" className="flex items-center justify-center bg-neutral-100 px-5 py-12 md:py-20">
            <Image
              src={w.image.src}
              alt={w.image.alt}
              width={w.image.width}
              height={w.image.height}
              quality={90}
              sizes="(min-width: 768px) 50vw, 90vw"
              className="h-auto max-h-[85svh] w-auto shadow-[0_40px_60px_-30px_rgba(0,0,0,0.55)]"
            />
          </Reveal>
        </section>

        {/* Details grid */}
        <section className="mx-auto grid max-w-5xl gap-5 px-5 pt-5 md:grid-cols-2">
          {w.details.map((d, i) => (
            <Reveal variant="clip" delay={(i % 2) * 150} key={d.src} className={`overflow-hidden ${i % 2 ? "md:mt-24" : ""}`}>
              <Image src={d.src} alt={d.alt} width={d.width} height={d.height} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
            </Reveal>
          ))}
        </section>

        {/* Story */}
        <section className="grid gap-8 px-5 py-20 md:grid-cols-2 md:py-28">
          <h2 className="caps text-sm text-mute">About the painting</h2>
          <Reveal className="space-y-5 text-lg leading-relaxed">
            {w.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </section>

        {/* More works */}
        <section className="px-5 pb-24">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="caps text-sm">More works</h2>
            <Link href="/work" className="text-sm font-semibold underline underline-offset-4">
              All work
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {more.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}`} data-cursor="View" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={o.details[0].src}
                    alt={o.details[0].alt}
                    width={o.details[0].width}
                    height={o.details[0].height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm font-semibold">
                  <span>{o.title}</span>
                  <span className="text-mute">{o.theme}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
