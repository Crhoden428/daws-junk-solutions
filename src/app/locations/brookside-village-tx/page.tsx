import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Brookside Village TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Junk removal in Brookside Village, TX. Local, family-owned crew that treats every job like we're working for a neighbor — because we probably are. Call 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/locations/brookside-village-tx`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Brookside Village, TX", href: "/locations/brookside-village-tx" },
]);

const neighborhoods = [
  "Brookside Village Proper",
  "South Pearland",
  "Fite Road Corridor",
  "Broadway Street Area",
  "County Road 58 Area",
  "Manvel Road Area",
  "Almeda Road Corridor",
];

const reviews = [
  {
    name: "Roy & Cindy H.",
    location: "Brookside Village, TX",
    service: "Yard Debris & Furniture Removal",
    stars: 5,
    text: "We've lived in Brookside Village for over 20 years. When we needed junk cleared after a big landscaping job, our neighbor recommended Daw's. The crew showed up on time, worked fast, and left our property spotless. The price was fair and they were genuinely pleasant to deal with. This is the kind of service Brookside Village deserves.",
  },
  {
    name: "Angela P.",
    location: "South Pearland near Brookside Village",
    service: "Appliance & Old Furniture Pickup",
    stars: 5,
    text: "I had an old washer, dryer, refrigerator, and a pile of furniture to get rid of. Called Daw's on a Tuesday and they were there Wednesday morning. Super professional, quick, and they even disconnected the appliances themselves. Price was exactly what they told me on the phone. Nothing else to say — these guys are great.",
  },
  {
    name: "Marcus T.",
    location: "Brookside Village, TX",
    service: "Rental Property Cleanout",
    stars: 5,
    text: "I own a few rental properties near Brookside Village and Daw's is my go-to when tenants leave things behind. They handle it fast, they're reliable, and they communicate well. As a landlord I need people I can trust to show up and get it done. Daw's does that every single time. These guys are part of the community and it shows.",
  },
];

export default function BrooksideVillagePage() {
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
              Harris &amp; Brazoria County · Brookside Village, TX
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Junk Removal in{" "}
              <span className="text-orange-500">Brookside Village, TX</span>
            </h1>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Brookside Village is a small, tight-knit city — and we treat every
              job here like we&apos;re working for a neighbor, because we
              probably are. Daw&apos;s Junk Solutions brings the same honest,
              dependable service that South Houston families have trusted for
              years.
            </p>
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              Need a full cleanout before a move? Old appliances hauled? Yard
              debris cleared? We&apos;ve got the RawMaxx dump trailer loaded and
              ready to go — often the same day you call.
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
              Brookside Village residents — book online or call{" "}
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
            Junk Removal Services in Brookside Village
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We haul anything — furniture, appliances, construction debris,
            yard waste, and full-property cleanouts.
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
              Why Brookside Village Calls Daw&apos;s
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In a small city like Brookside Village, reputation matters. We
              don&apos;t hide behind a 1-800 number — we&apos;re local people
              who live and work in this community. We show up, do the work, and
              leave your property looking better than we found it.
            </p>
            <ul className="space-y-4">
              {[
                "Local, family-owned — not a franchise or call center",
                "Same-day and next-day appointments available",
                "Flat-rate upfront pricing — no hourly surprises",
                "Licensed & insured for your peace of mind",
                "Eco-friendly: we sort for donation and recycling first",
                "RawMaxx dump trailer — big loads, one trip",
                "Respectful of your home and your neighbors",
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
            Areas We Serve Near Brookside Village
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Brookside Village and the surrounding South Pearland corridor.
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
            What Brookside Village Residents Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Hear from your neighbors.
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
