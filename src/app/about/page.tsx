import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Daw's Junk Solutions | Family-Owned Pearland TX",
  description:
    "Daw's Junk Solutions is a family-owned junk removal company based in Pearland, TX. Meet Daw — locally rooted, licensed & insured, and committed to doing the job right.",
  alternates: { canonical: `${BUSINESS.domain}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-7xl mb-4">
            Family-Owned.<br />
            <span className="text-orange-500">Pearland-Proud.</span>
          </h1>
          <p className="text-gray-300 text-xl">
            We're not a national chain. We're your neighbors — and we haul junk like it's our reputation on the line. Because it is.
          </p>
        </div>
      </section>

      {/* Daw's story */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Animated Daw placeholder — replace with illustrated/animated version */}
              <div className="rounded-2xl bg-gray-100 aspect-square flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-300">
                <div className="text-6xl mb-4">🚛</div>
                <p className="font-display text-2xl text-gray-400 mb-2">"Better Call Daw"</p>
                <p className="text-sm text-gray-400">
                  [Illustrated Daw character — coming soon]
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-5">Meet Daw</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Daw started hauling junk out of the back of a truck because he saw a gap in the market: too many companies that were expensive, slow, and vague on pricing. He knew he could do it better.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today, Daw's Junk Solutions serves Pearland and all of South Houston with the same simple promise: show up on time, give you a straight price, haul it away clean, and leave you better than we found you.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're family-owned, locally rooted, and we treat your property like our own. That's not marketing copy — that's just how we were raised.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Licensed & fully insured in Texas",
                  "RawMaxx dump trailer — built for any load",
                  "Eco-friendly: we donate and recycle before we landfill",
                  "Available 7 days a week, same-day in most cases",
                  "Family-owned — Pearland based",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-orange-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} /> Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline section */}
      <section className="py-14 bg-orange-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-5xl sm:text-7xl text-white">
            "Better Call Daw"
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
