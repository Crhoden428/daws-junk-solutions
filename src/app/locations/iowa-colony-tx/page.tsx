import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Iowa Colony TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Top-rated junk removal in Iowa Colony, TX. Daw's Junk Solutions serves Meridiana, Pomona, Savannah & all Iowa Colony communities. Same-day available. Call 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/locations/iowa-colony-tx`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Iowa Colony, TX", href: "/locations/iowa-colony-tx" },
]);

const neighborhoods = [
  "Iowa Colony Proper",
  "Meridiana",
  "Savannah",
  "Country Lakes",
  "Pomona",
  "Colony Lakes",
  "Southern Trails",
  "Prairie Point",
];

const reviews = [
  {
    name: "Kayla M.",
    location: "Meridiana, Iowa Colony",
    service: "Full Garage Cleanout",
    stars: 5,
    text: "We just moved into our new build in Meridiana and the previous owners left a ton of junk in the garage. Called Daw's and they were out the next morning. Two guys, friendly, fast, and priced way better than I expected. The garage was completely clear in under two hours. Will absolutely use them again.",
  },
  {
    name: "Travis B.",
    location: "Savannah, Iowa Colony",
    service: "Furniture & Appliance Removal",
    stars: 5,
    text: "Had an old couch, a broken treadmill, and a washer that gave up on life all at once. Daw's came out same day and hauled everything without any drama. Price was exactly what they quoted — no surprises. Highly recommend to anyone in Iowa Colony.",
  },
  {
    name: "Sandra & James L.",
    location: "Pomona, Iowa Colony",
    service: "Estate Cleanout",
    stars: 5,
    text: "Daw's helped us clear out my mother-in-law's home in Pomona after she passed. They were respectful, thorough, and surprisingly fast. We were worried about the job being too big but they handled everything in one trip with their big trailer. Couldn't have asked for a better crew during a hard time.",
  },
];

export default function IowaColonyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Brazoria County · Iowa Colony, TX
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Junk Removal in{" "}
              <span className="text-orange-500">Iowa Colony, TX</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Iowa Colony is one of the newest communities in Brazoria County —
              and Daw&apos;s Junk Solutions has been serving it since day one.
              Whether you&apos;re clearing out a new build, tackling a garage,
              or doing a full estate cleanout, our local crew is ready with fast
              response and honest pricing.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-orange-500" />
                Same-Day Available
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-orange-500" />
                Upfront Pricing
              </div>
            </div>
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone} — Call or Text
            </a>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-gray-900 text-2xl font-bold mb-2">
              Get a Free Quote
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Iowa Colony residents — book online or call{" "}
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="text-orange-500 font-semibold"
              >
                {BUSINESS.phone}
              </a>
            </p>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Junk Removal Services in Iowa Colony
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From single-item pickups to full property cleanouts, we handle it
            all with our RawMaxx dump trailer.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group border border-gray-100 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all"
              >
                <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.shortDesc}</p>
                <span className="inline-block mt-4 text-orange-500 text-sm font-semibold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Daw's */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Why Iowa Colony Chooses Daw&apos;s
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;re not a national chain with a call center — we&apos;re a
              local Pearland family business that knows every subdivision in
              Iowa Colony by name. When you call, you talk to someone who
              actually shows up.
            </p>
            <ul className="space-y-4">
              {[
                "Same-day and next-day appointments available",
                "Flat-rate, upfront pricing — no hidden fees",
                "Family-owned, licensed & insured",
                "Eco-friendly: we donate, recycle, and minimize landfill",
                "RawMaxx dump trailer — we haul massive loads in one trip",
                "Serving Iowa Colony since the first neighborhoods opened",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Table */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-[#111111] text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">
                      Load Size
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      Price Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map((tier, i) => (
                    <tr
                      key={tier.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {tier.label}
                      </td>
                      <td className="py-3 px-4 text-orange-500 font-bold">
                        {tier.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-orange-50 border-t border-orange-100">
                <p className="text-xs text-gray-600">
                  Final price based on volume &amp; item type. Call for a free
                  on-site estimate.
                </p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="mt-6 inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phone} for a free quote
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
            Iowa Colony Neighborhoods We Serve
          </h2>
          <p className="text-gray-600 text-center mb-8">
            From established subdivisions to the newest planned communities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {neighborhoods.map((n) => (
              <span
                key={n}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            What Iowa Colony Residents Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Real reviews from your neighbors.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                  <p className="text-orange-500 text-xs font-medium mt-1">
                    {review.service}
                  </p>
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
