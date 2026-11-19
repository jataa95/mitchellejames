import Image from "next/image";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SplitText from "@/components/SplitText";
import { artist, press } from "@/data/site";

export const metadata = { title: "Info" };

export default function Info() {
  return (
    <>
      <main className="px-5 pb-24 pt-32">
        <SplitText as="h1" text="Info" immediate stagger={60} className="display block text-[18vw] md:text-[12vw]" />

        <section className="mt-16 grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16">
          <Image
            src="/artist/portrait.jpg"
            alt="Portrait of Mitchelle James in a purple and red striped patchwork suit"
            width={500}
            height={720}
            preload
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-auto w-full"
          />
          <div>
            <p className="caps text-2xl md:text-4xl">
              {artist.name} is a painter — an artist of, for and from Africa.
            </p>
            <div className="mt-10 space-y-5 text-lg leading-relaxed">
              <p>
                Mitchelle makes large, slow, intensely worked paintings rooted in African life:
                portraits wrapped in kente and bullion, and dreamlike amber fields where
                calabash-bodied painters ride vines towards the faces of their elders. A single
                canvas can take more than 250 hours.
              </p>
              <p>
                Recurring symbols — the gourd, the palette, the seed, the gold bar — carry ideas
                about inheritance, value and the talent a community chooses to nurture.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-mute">Practice</dt>
                <dd className="mt-1 font-semibold">Painting, murals, portraits</dd>
              </div>
              <div>
                <dt className="text-mute">Available for</dt>
                <dd className="mt-1 font-semibold">Commissions, exhibitions</dd>
              </div>
              <div>
                <dt className="text-mute">Instagram</dt>
                <dd className="mt-1 font-semibold">
                  <a href={artist.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                    @{artist.handle} ↗
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mute">Press</dt>
                {press.map((p) => (
                  <dd key={p.title} className="mt-1 font-semibold">
                    <a href={p.url} target="_blank" rel="noreferrer" className="hover:underline">
                      {p.outlet} — {p.title}, {p.date} ↗
                    </a>
                  </dd>
                ))}
              </div>
            </dl>
          </div>
        </section>

        {/* The thread through the work */}
        <section className="mt-28 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="caps text-sm text-mute">The thread through the work</h2>
            <SplitText as="p" text="Keep the gold at home" stagger={25} className="display mt-6 block text-[12vw] md:text-[6vw]" />
            <div className="mt-10 space-y-5 text-lg leading-relaxed">
              <p>
                This year&rsquo;s headlines are about Africa&rsquo;s ground: record gold sales,
                billion-dollar development frameworks, and leaders insisting the continent will no
                longer be a passive arena for a new scramble for its resources.
              </p>
              <p>
                Mitchelle paints the same conversation from the inside. The woman in{" "}
                <em>Gold Standard</em> doesn&rsquo;t mine the bullion or watch it shipped away — she
                holds it. Value that stays where it was made: in our minerals, our industries, and
                in the artists who grow up here.
              </p>
            </div>
          </div>
          <Image
            src="/works/gold-standard-studio.jpg"
            alt="Gold Standard on an easel in a bright room"
            width={1440}
            height={1440}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="order-1 h-auto w-full md:order-2"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
