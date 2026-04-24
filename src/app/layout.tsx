import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { localBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions`,
    template: `%s | Daw's Junk Solutions`,
  },
  description:
    "Pearland's trusted junk removal crew. Same-day pickups, upfront pricing, eco-friendly disposal. Serving Pearland, Friendswood, Manvel & League City. Better Call Daw — 281-202-9668.",
  keywords: [
    "junk removal Pearland TX",
    "junk removal near me",
    "same day junk removal Pearland",
    "furniture removal Pearland",
    "garage cleanout Pearland TX",
    "Better Call Daw",
  ],
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    title: `Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions`,
    description:
      "Same-day junk removal in Pearland, TX. Upfront pricing, licensed & insured, eco-friendly. Better Call Daw — 281-202-9668.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Daw's Junk Solutions — Pearland TX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Junk Removal Pearland TX | Daw's Junk Solutions`,
    description: "Same-day junk removal. Upfront pricing. Better Call Daw — 281-202-9668.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: BUSINESS.domain },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <MobileBar />
        <Footer />
      </body>
    </html>
  );
}
