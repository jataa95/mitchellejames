import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import { artist } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: { default: `${artist.name} — ${artist.role}`, template: `%s — ${artist.name}` },
  description: `${artist.name} (@${artist.handle}). ${artist.tagline}. Paintings about African wealth, memory and the talent we grow at home.`,
  openGraph: {
    title: `${artist.name} — ${artist.role}`,
    description: artist.tagline,
    images: ["/artist/mitchelle-studio.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
