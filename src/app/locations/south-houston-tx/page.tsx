import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal South Houston TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Junk removal across South Houston — South Belt, Ellington, Hobby area, Deer Park, Pasadena, Clear Lake City. If you're south of Loop 610, we serve you. Call 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/locations/south-houston-tx`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "South Houston, TX", href: "/locations/south-houston-tx" },
]);

const neighborhoods = [
  "South Belt",
  "Ellington",
  "Hobby Area",
  "Deer Park",
  "Pasadena",
  "Clear Lake City",
  "El Dorado",
  "Scarsdale",
  "Fuqua Corridor",
  "Beltway 8 South",
];

const reviews = [
  {
    name: "Bobby R.",
    location: "South Belt, South Houston",
    service: "Full Garage & Shed Cleanout",
    stars: 5,
    text: "I'd been putting off cleaning out the garage and the shed behind my house for years. Called Daw's after seeing them mentioned on the neighborhood Facebook group. Two guys showed up the next morning with a massive trailer and had everything cleared in about three hours. They worked hard, didn't complain about anything heavy, and left the place swept clean. Exactly what I needed.",
  },
  {
    name: "Lisa N.",
    location: "Deer Park, South Houston",
    service: "Estate Cleanout",
    stars: 5,
    text: "We used Daw's to clean out my uncle's house in Deer Park after he passed. There was a lot of stuff — decades worth. They were compassionate, professional, and remarkably fast. They separated out things that could be donated and were upfront about what would go to the landfill. The price was fair and worth every penny. Would recommend to anyone in the area dealing with the same kind of situation.",
  },
  {
    name: "Carlos M.",
    location: "Pasadena area, South Houston",
    service: "Construction Debris & Furniture Removal",
    stars: 5,
    text: "I remodeled two bathrooms and had a mountain of tile, drywall, fixtures, and old furniture piling up. Daw's came out same day I called — a Saturday — and had everything loaded and gone in two hours. The price was better than the other two places I called, and the crew was friendly and efficient. Will be calling them again for my next project.",
  },
];

export default function SouthHoustonPage() {
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
              Greater Houston · South of Loop 610
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Junk Removal in{" "}
              <span className="text-orange-500">South Houston, TX</span>
            </h1>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Daw&apos;s Junk Solutions covers all of South Houston — if
              you&apos;re south of Loop 610, chances are we serve you. From
              South Belt and Ellington to Deer Park, Pasadena, and Clear Lake
              City, we&apos;re the local crew that shows up, hauls it all, and
              leaves your property clean.
            </p>
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              No national call center, no surprise fees. Just a local Pearland
              family business with a big trailer and a strong work ethic — ready
              to haul whatever you need gone.
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
              South Houston residents — book online or call{" "}
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
            Junk Removal Services Across South Houston
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Full-service hauling for homes, businesses, and rental properties
            throughout South Houston.
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
              South Houston&apos;s Local Junk Removal Choice
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              South Houston is a big area with a lot of options. But most of
              those options are national franchises that charge premium prices
              and send whoever&apos;s available. Daw&apos;s is different — we
              live down here, we know the area, and we take every job personally.
            </p>
            <ul className="space-y-4">
              {[
                "Serving all of South Houston south of Loop 610",
                "Same-day and next-day service available",
                "Flat-rate upfront pricing — no hourly billing",
                "Family-owned, licensed & insured",
                "Eco-friendly sorting: donate, recycle, then landfill",
                "RawMaxx dump trailer — handle any volume in one trip",
                "Typically 20–40% less than national junk removal chains",
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
            South Houston Areas We Serve
          </h2>
          <p className="text-gray-600 text-center mb-8">
            South Belt, Ellington, Hobby, Deer Park, Pasadena, Clear Lake — if
            it&apos;s south of Loop 610, we&apos;re coming to you.
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
            What South Houston Customers Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Real people, real results.
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
