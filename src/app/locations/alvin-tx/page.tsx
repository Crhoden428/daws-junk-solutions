import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Alvin TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Fast junk removal in Alvin, TX. Same-day pickups available, upfront pricing, licensed & insured. Serving Alvin, South Alvin, Mustang Bayou & all of Brazoria County. Call 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/locations/alvin-tx` },
  openGraph: {
    title: "Junk Removal Alvin TX | Daw's Junk Solutions",
    description:
      "Locally-owned junk removal serving Alvin and Brazoria County. Same-day service. Upfront pricing. Better Call Daw — 281-202-9668.",
    images: [{ url: "/images/marketing-truck.jpg", width: 1200, height: 630 }],
  },
};

const alvinNeighborhoods = [
  "Alvin proper",
  "Mustang Bayou area",
  "South Alvin",
  "Liverpool area",
  "Chocolate Bayou area",
];

const reviews = [
  {
    name: "Patricia N.",
    location: "Alvin, TX",
    text: "Had a garage full of old appliances and junk that had been sitting for years. Daw's came out and cleaned the whole thing in one visit. Honest price, great crew.",
    stars: 5,
  },
  {
    name: "Jake T.",
    location: "South Alvin, TX",
    text: "Needed yard debris and old fence material hauled off after a big storm. These guys were out here fast and didn't leave a single piece behind. Exactly what I needed.",
    stars: 5,
  },
  {
    name: "Rachel B.",
    location: "Alvin, TX",
    text: "Daw's helped us clear out my grandmother's home. It was a big job with a lot of memories involved. They were kind, professional, and got it done in one day. Couldn't have asked for more.",
    stars: 5,
  },
];

export default function AlvinPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
    { name: "Alvin, TX", href: "/locations/alvin-tx" },
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
            <span className="text-white">Alvin, TX</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-orange-400 text-sm font-semibold">
                  Serving Alvin &amp; All of Brazoria County
                </span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Junk Removal in{" "}
                <span className="text-orange-500">Alvin, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Alvin is Nolan Ryan country — and it&apos;s Daw&apos;s country too. We serve Alvin
                and all of Brazoria County with the same fast, fair service we bring to every job.
                Call us and we&apos;ll be there.
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
                Serving all of Alvin. Same-day slots open.
              </p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Alvin */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3 text-center">
            Services in Alvin
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
                <p className="text-xs text-gray-400">Alvin, TX →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Daw's in Alvin */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
                Why Alvin Chooses Daw&apos;s
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Alvin has a small-town feel and big-time work ethic — and so do we. Daw&apos;s
                brings Brazoria County the kind of dependable, straightforward service that big
                national chains simply can&apos;t deliver.
              </p>
              <ul className="space-y-3">
                {[
                  "Based in nearby Pearland — no long wait times for your crew to arrive",
                  "You see the price upfront — no surprises once the job is done",
                  "Family-owned and committed to every community we serve",
                  "Eco-friendly disposal: we donate, recycle, and minimize landfill waste",
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
                Alvin Junk Removal Pricing
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
            Areas We Serve in &amp; Around Alvin
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {alvinNeighborhoods.map((n) => (
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
            What Alvin Customers Say
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
