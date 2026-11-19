import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { works } from "@/data/works";

export const metadata = { title: "Work" };

export default function WorkIndex() {
  return (
    <>
      <main className="px-5 pb-24 pt-32">
        <SplitText as="h1" text="Work" immediate stagger={60} className="display block text-[18vw] md:text-[12vw]" />
        <p className="caps fade-up mt-6 max-w-xl text-xl" style={{ animationDelay: "0.4s" }}>
          Paintings about the wealth beneath our feet, the talent we grow at home, and the hands
          that remember.
        </p>

        <ul className="mt-20 grid gap-x-5 gap-y-16 md:grid-cols-2">
          {works.map((w, i) => (
            <Reveal as="li" key={w.slug} delay={(i % 2) * 150}>
              <Link href={`/work/${w.slug}`} data-cursor="View" className="group block">
                <div className="flex aspect-[4/5] items-center justify-center overflow-hidden bg-neutral-100 p-8 md:p-14">
                  <Image
                    src={w.image.src}
                    alt={w.image.alt}
                    width={w.image.width}
                    height={w.image.height}
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="h-full w-auto object-contain shadow-[0_30px_50px_-25px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex justify-between text-sm font-semibold">
                  <span>{w.title}</span>
                  <span className="text-mute">Index No. {w.index}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
