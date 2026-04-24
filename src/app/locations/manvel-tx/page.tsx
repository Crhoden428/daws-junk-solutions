import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Manvel TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Fast junk removal in Manvel, TX. Same-day pickups available, upfront pricing, licensed & insured. Serving Rodeo Palms, Meridiana, Kendall Lakes & all of Manvel. Call 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/locations/manvel-tx` },
  openGraph: {
    title: "Junk Removal Manvel TX | Daw's Junk Solutions",
    description:
      "Locally-owned junk removal serving Manvel's booming growth. Same-day service. Upfront pricing. Better Call Daw — 281-202-9668.",
    images: [{ url: "/images/marketing-truck.jpg", width: 1200, height: 630 }],
  },
};

const manvelNeighborhoods = [
  "Rodeo Palms",
  "Iowa Colony border area",
  "Meridiana",
  "Kendall Lakes",
  "Manvel Town Center area",
  "South Belt area",
];

const reviews = [
  {
    name: "Tom H.",
    location: "Rodeo Palms, Manvel",
    text: "We just finished a big renovation and had demo debris everywhere. Daw's cleared the entire site in one trip. Way faster than renting a dumpster, and probably cheaper too.",
    stars: 5,
  },
  {
    name: "Jennifer A.",
    location: "Meridiana, Manvel",
    text: "Moving into our new build and needed the old furniture from storage gone. Called Daw's in the morning, they were there by early afternoon. Smooth and professional from start to finish.",
    stars: 5,
  },
  {
    name: "Mike S.",
    location: "Manvel, TX",
    text: "Cleaned out my parents' place after they downsized. A lot of heavy furniture and years of accumulated stuff. The crew was respectful of the situation and handled everything efficiently.",
    stars: 5,
  },
];

export default function ManvelPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
    { name: "Manvel, TX", href: "/locations/manvel-tx" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-orange-500">
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-white">Manvel, TX</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-orange-400 text-sm font-semibold">
                  Serving Manvel &amp; Brazoria County
                </span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Junk Removal in{" "}
                <span className="text-orange-500">Manvel, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Manvel is growing fast — new builds everywhere, and that means renovation debris,
                old furniture from downsizing, and garage cleanouts. Daw&apos;s is ready. We serve
                your neighborhood the same day you call.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1.5">
                  <Clock size={15} /> Same-Day Available
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={15} /> Licensed &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={15} className="fill-orange-500 text-orange-500" /> 5-Star Rated
                </span>
              </div>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} /> Call {BUSINESS.phone}
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
              <h2 className="font-display text-3xl text-[#111111] mb-1">Get a Free Estimate</h2>
              <p className="text-gray-500 text-sm mb-6">
                Serving all of Manvel. Same-day slots open.
              </p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Manvel */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3 text-center">
            Services in Manvel
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Every service available. Same-day in most cases.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-gray-200 px-4 py-5 hover:border-orange-500 hover:shadow-sm transition-all"
              >
                <p className="font-bold text-gray-900 group-hover:text-orange-600 text-sm mb-1">
                  {s.name}
                </p>
                <p className="text-xs text-gray-400">Manvel, TX →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Daw's in Manvel */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
                Why Manvel Chooses Daw&apos;s
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Manvel&apos;s rapid growth means more construction, more moving, and more junk to
                deal with. Daw&apos;s is built for exactly that — quick, reliable service without
                the national-chain runaround.
              </p>
              <ul className="space-y-3">
                {[
                  "Based in Pearland — right next door to Manvel, not hours away",
                  "Upfront pricing before we start — no surprise charges after the job",
                  "Family-owned and invested in keeping Brazoria County communities clean",
                  "Construction debris, renovation waste, old furniture — we handle it all",
                  "Same-day service available 7 days a week",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle size={18} className="text-orange-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-display text-3xl text-[#111111] mb-4">
                Manvel Junk Removal Pricing
              </h3>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {PRICING.map((tier, i) => (
                  <div
                    key={tier.label}
                    className={`flex justify-between items-center px-5 py-4 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-sm text-gray-900">{tier.label}</p>
                      <p className="text-xs text-gray-400">{tier.size}</p>
                    </div>
                    <p className="font-display text-xl text-orange-600">{tier.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                Price includes labor, fuel &amp; eco-friendly disposal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-5 text-center">
            Neighborhoods We Serve in Manvel
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {manvelNeighborhoods.map((n) => (
              <span
                key={n}
                className="flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700"
              >
                <MapPin size={12} className="text-orange-600" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-10">
            What Manvel Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white border border-gray-200 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
