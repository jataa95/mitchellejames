import "./globals.css";
import { artist } from "@/data/site";

export const metadata = {
  title: `${artist.name} — Artist`,
  description: `${artist.name} (@${artist.handle}). ${artist.tagline} Paintings about African wealth, memory and the talent we grow at home.`,
  openGraph: {
    title: `${artist.name} — Artist`,
    description: artist.tagline,
    images: ["/artist/mitchelle-studio.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
