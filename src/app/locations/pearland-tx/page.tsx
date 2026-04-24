import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, CheckCircle, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Fast, affordable junk removal in Pearland, TX. Same-day pickups, upfront pricing, licensed & insured. Serving Shadow Creek Ranch, Silverlake, Southgate & all of Pearland. Call 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/locations/pearland-tx` },
  openGraph: {
    title: "Junk Removal Pearland TX | Daw's Junk Solutions",
    description: "Pearland's locally-owned junk removal crew. Same-day service. Upfront pricing. Better Call Daw — 281-202-9668.",
    images: [{ url: "/images/marketing-truck.jpg", width: 1200, height: 630 }],
  },
};

const pearlandNeighborhoods = [
  "Shadow Creek Ranch", "Silverlake", "Southgate", "Country Place",
  "Old Townsite", "Pearland Parkway Corridor", "Clear Creek", "Barry Rose",
  "Spectrum", "Riverstone Ranch", "Brookside Village", "West Pearland",
];

const reviews = [
  {
    name: "Carlos M.",
    location: "Shadow Creek Ranch, Pearland",
    text: "Same-day service, fair price, and the crew was super professional. Cleared out my entire garage in about 90 minutes. Will use again for sure.",
    stars: 5,
  },
  {
    name: "Lisa W.",
    location: "Silverlake, Pearland",
    text: "Had a ton of old furniture after redecorating. Daw's was the only company that gave me a straight price over the phone. No hidden fees — exactly what they quoted.",
    stars: 5,
  },
  {
    name: "Tony B.",
    location: "Pearland, TX",
    text: "I texted them at 8am and they were at my house by 11am. Hauled away two truckloads of construction debris from my renovation. Fast, clean, and well priced.",
    stars: 5,
  },
];

export default function PearlandPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Service Areas", href: "/locations" },
    { name: "Pearland, TX", href: "/locations/pearland-tx" },
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
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-orange-500">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Pearland, TX</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <MapPin size={14} className="text-orange-500" />
                <span className="text-orange-400 text-sm font-semibold">Locally Owned — Based in Pearland</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Junk Removal in{" "}
                <span className="text-orange-500">Pearland, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Daw's Junk Solutions is Pearland's own — family-owned, locally operated, and ready the same day you call. We haul it all, big or small.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1.5"><Clock size={15} /> Same-Day Available</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Licensed & Insured</span>
                <span className="flex items-center gap-1.5"><Star size={15} className="fill-orange-500 text-orange-500" /> 5-Star Rated</span>
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
              <p className="text-gray-500 text-sm mb-6">Serving all of Pearland. Same-day slots open.</p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Pearland */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3 text-center">
            Services in Pearland
          </h2>
          <p className="text-center text-gray-500 mb-10">Every service available. Same-day in most cases.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-gray-200 px-4 py-5 hover:border-orange-500 hover:shadow-sm transition-all"
              >
                <p className="font-bold text-gray-900 group-hover:text-orange-600 text-sm mb-1">{s.name}</p>
                <p className="text-xs text-gray-400">Pearland, TX →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Daw's in Pearland */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
                Why Pearland Chooses Daw's
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We live here. We work here. When you call Daw's, you're not getting a national call center — you're getting Daw himself and his crew, out of Pearland, showing up fast and doing the job right.
              </p>
              <ul className="space-y-3">
                {[
                  "Based in Pearland — faster response than out-of-town competitors",
                  "Transparent pricing: you see the number before we lift anything",
                  "Family-owned means we care about our reputation in this community",
                  "We donate & recycle first — keeping Pearland clean matters to us",
                  "Same-day service, 7 days a week",
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
              <h3 className="font-display text-3xl text-[#111111] mb-4">Pearland Junk Removal Pricing</h3>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {PRICING.map((tier, i) => (
                  <div key={tier.label} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{tier.label}</p>
                      <p className="text-xs text-gray-400">{tier.size}</p>
                    </div>
                    <p className="font-display text-xl text-orange-600">{tier.range}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">Price includes labor, fuel & eco-friendly disposal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-5 text-center">
            Neighborhoods We Serve in Pearland
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {pearlandNeighborhoods.map((n) => (
              <span key={n} className="flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700">
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
            What Pearland Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white border border-gray-200 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} size={15} className="fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">"{r.text}"</p>
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
