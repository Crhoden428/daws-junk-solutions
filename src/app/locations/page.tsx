import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Service Areas | South Houston | Daw's Junk Solutions",
  description:
    "Daw's Junk Solutions serves Pearland, Friendswood, Manvel, League City, Alvin, Iowa Colony and all of South Houston. Same-day junk removal. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/locations` },
  openGraph: {
    title: "Junk Removal Service Areas | South Houston | Daw's Junk Solutions",
    description:
      "Same-day junk removal across Pearland, Friendswood, Manvel, League City, Alvin & all of South Houston. Better Call Daw — 281-202-9668.",
    images: [{ url: "/images/marketing-truck.jpg", width: 1200, height: 630 }],
  },
};

export default function LocationsHubPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-6">
            <MapPin size={14} className="text-orange-500" />
            <span className="text-orange-400 text-sm font-semibold">
              Based in Pearland, TX — Serving South Houston
            </span>
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
            We Come{" "}
            <span className="text-orange-500">to You</span>
          </h1>
          <p className="text-gray-300 text-xl sm:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
            Serving Pearland and all of South Houston. If you&apos;re within 30 miles, we&apos;ve
            got you.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
          >
            <Phone size={20} /> Call {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3 text-center">
            Cities We Serve
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Click your city for local pricing, neighborhood coverage, and same-day availability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                {"primary" in area && area.primary && (
                  <span className="absolute top-4 right-4 rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold text-white">
                    Our Home Base
                  </span>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} className="text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-display text-2xl text-[#111111] group-hover:text-orange-600 transition-colors leading-tight">
                      {area.name}
                    </p>
                    <p className="text-sm text-gray-400 font-medium">TX</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Serving {area.name} with same-day junk removal, upfront pricing, and a crew
                  that actually shows up.
                </p>
                <p className="mt-4 text-orange-600 text-sm font-semibold group-hover:underline">
                  See {area.name} details →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-[#111111] text-center mb-2">
            Our Coverage Area
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Centered on Pearland, TX — within 30 miles in any direction.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Daw's Junk Solutions Service Area — Pearland TX"
              src="https://maps.google.com/maps?q=29.5635,-95.286&z=11&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Don't see your city */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-600 text-xl mb-8 leading-relaxed">
            Call us — if we can get there, we will. Daw&apos;s regularly travels beyond the list
            above for the right job. Just pick up the phone.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
          >
            <Phone size={20} /> {BUSINESS.phone}
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Mon – Sat 7am – 7pm &nbsp;|&nbsp; Sun by appointment
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
