import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Shadow Creek Ranch TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Junk removal in Shadow Creek Ranch, Pearland TX. Daw's is your local neighborhood crew — hundreds of cleanouts completed right here. Call 281-202-9668 for same-day service.",
  alternates: {
    canonical: `${BUSINESS.domain}/locations/shadow-creek-ranch-tx`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Shadow Creek Ranch, TX", href: "/locations/shadow-creek-ranch-tx" },
]);

const neighborhoods = [
  "Shadow Creek Ranch Village 1",
  "Shadow Creek Ranch Village 2–5",
  "Shadow Creek Ranch Village 6–10",
  "Shadow Creek Ranch Village 11–19",
  "The Lakes at Shadow Creek",
  "Towne Lake Area",
  "Shadow Creek Pkwy Corridor",
  "Reflection Bay",
  "Sunrise Lakes",
];

const reviews = [
  {
    name: "Michelle R.",
    location: "Shadow Creek Ranch, Pearland",
    service: "Garage & Attic Cleanout",
    stars: 5,
    text: "We've lived in Shadow Creek Ranch for eight years and finally decided to tackle the garage and attic. Daw's was incredible — they know the neighborhood well and showed up exactly on time. Three hours later, everything was gone. They even swept up before leaving. This is exactly the kind of service you want from a local company.",
  },
  {
    name: "Derek & Tamara F.",
    location: "The Lakes at Shadow Creek, Pearland",
    service: "Full House Cleanout",
    stars: 5,
    text: "We hired Daw's to clear out our old house in Shadow Creek before listing it. They did the entire house in one shot — old furniture, broken appliances, years of accumulated stuff. The price was fair, the crew was professional, and the house was market-ready the same day. Already recommended them to two neighbors.",
  },
  {
    name: "Greg A.",
    location: "Shadow Creek Ranch, Pearland",
    service: "Construction Debris Removal",
    stars: 5,
    text: "Had a big home renovation and needed construction debris hauled. Daw's brought their big dump trailer and made quick work of it. These guys are from the area — Daw literally grew up not far from here. It shows in how they operate: professional, on time, and they take pride in the work. Won't call anyone else.",
  },
];

export default function ShadowCreekRanchPage() {
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
              Pearland, TX · Master-Planned Community
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Junk Removal in{" "}
              <span className="text-orange-500">Shadow Creek Ranch, TX</span>
            </h1>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Shadow Creek Ranch is Daw&apos;s home turf — we&apos;ve done
              hundreds of cleanouts right here in the neighborhood. As a
              master-planned community within Pearland, Shadow Creek Ranch is
              where we work every week. Nobody knows this community better.
            </p>
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              From Village 1 to Village 19, The Lakes, and every street in
              between — when you call Daw&apos;s, you get a crew that knows
              your neighborhood, respects your property, and gets the job done
              right.
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
              Shadow Creek Ranch residents — book online or call{" "}
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
            Services We Offer in Shadow Creek Ranch
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Full-service junk removal for Shadow Creek Ranch homeowners — no job
            too big, no item too heavy.
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
              Shadow Creek Ranch&apos;s Trusted Junk Hauler
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don&apos;t sub out, we don&apos;t send strangers to your door,
              and we don&apos;t quote one price and charge another. Daw&apos;s
              Junk Solutions is a family business, and Shadow Creek Ranch
              homeowners have been our most loyal customers for a reason.
            </p>
            <ul className="space-y-4">
              {[
                "Hundreds of completed jobs in Shadow Creek Ranch",
                "Same-day and next-day appointments available",
                "Flat-rate pricing — know your cost before we start",
                "Family-owned, licensed & insured",
                "Eco-friendly sorting: donate, recycle, then landfill",
                "RawMaxx dump trailer handles full house cleanouts in one trip",
                "HOA-friendly — we work clean and leave no mess",
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
            Shadow Creek Ranch Villages &amp; Areas We Serve
          </h2>
          <p className="text-gray-600 text-center mb-8">
            All villages, sections, and adjacent communities within Shadow Creek
            Ranch.
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
            What Shadow Creek Ranch Residents Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Neighbors recommending neighbors.
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
