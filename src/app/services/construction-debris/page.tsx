import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Construction Debris Removal Pearland TX | Contractor Hauling | Daw's Junk Solutions",
  description:
    "Construction debris removal in Pearland, TX. Demo waste, drywall, lumber, tile, concrete chunks — hauled fast. Contractor-friendly scheduling. 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/services/construction-debris`,
  },
  openGraph: {
    title: "Construction Debris Removal Pearland TX | Daw's Junk Solutions",
    description:
      "Fast construction and renovation debris hauling in Pearland, TX. Contractor-friendly. Call 281-202-9668.",
    url: `${BUSINESS.domain}/services/construction-debris`,
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Construction Debris Removal", href: "/services/construction-debris" },
];

const whatWeHaul = [
  "Drywall and sheetrock scraps",
  "Lumber and wood framing cutoffs",
  "Tile, flooring, and ceramic waste",
  "Roofing shingles and felt paper",
  "Concrete chunks and broken masonry",
  "Insulation (fiberglass and foam board)",
  "Pipe, wire, and metal scraps",
  "Cabinets and countertops being replaced",
  "Old fixtures, doors, and windows",
  "General renovation waste and mixed debris",
];

const cantTake = [
  "Large concrete slabs (cannot be safely loaded)",
  "Asbestos-containing materials",
  "Hazardous or chemical waste of any kind",
];

const pricingTiers = [
  {
    label: "Quarter Load",
    range: "$150 – $250",
    description:
      "Small demo job, single-room renovation, or light material cleanout.",
  },
  {
    label: "Half Load",
    range: "$275 – $400",
    description:
      "Mid-size renovation waste — kitchen, bathroom, or multi-room project.",
  },
  {
    label: "Three-Quarter Load",
    range: "$400 – $550",
    description:
      "Larger remodel or multi-trade job site cleanout between phases.",
  },
  {
    label: "Full Truckload",
    range: "$550 – $750+",
    description:
      "Full RawMaxx dump trailer. Heavy materials (concrete, tile) priced higher.",
  },
];

const steps = [
  {
    number: "1",
    title: "Schedule Around Your Job",
    body: "Call or book online. We work around your project timeline — morning drops, end-of-day pickups, or between phases. Just tell us what you need.",
  },
  {
    number: "2",
    title: "We Load Everything",
    body: "Our crew arrives with our RawMaxx dump trailer and loads all the debris. You don't lift a finger. We leave the site clean and ready for the next trade.",
  },
  {
    number: "3",
    title: "Fast, Responsible Disposal",
    body: "We haul it to the proper facilities — recycling what we can, including metals and wood. No illegal dumping, ever.",
  },
];

const faqs = [
  {
    q: "Do you haul concrete and tile?",
    a: "Yes — we take concrete chunks, broken tile, ceramic, and masonry debris. Keep in mind that heavy materials like concrete take up weight capacity faster than lighter debris, so loads heavy with concrete may be priced at the higher end of our range. Large intact slabs cannot be loaded safely — those need to be broken up first.",
  },
  {
    q: "Can I schedule recurring pickups for my job site?",
    a: "Absolutely. Many of our contractor clients have us come out on a regular cadence — weekly, every two weeks, or at the end of each project phase. We're flexible and reliable, and we'll work around your schedule so debris never piles up and slows your crew down.",
  },
  {
    q: "Do you work with contractors directly?",
    a: "Yes — and we prefer it. We understand job site logistics: tight timelines, other trades on-site, and the need to just get it done without the runaround. Call us directly and we'll set up an account that works for your workflow. We're locally operated, which means you always talk to someone who can actually make a decision.",
  },
  {
    q: "What's the fastest you can turn around?",
    a: "Same-day pickup is available in most cases for clients in Pearland and the immediate surrounding area. Call us by midday and we'll do our best to get out to you that afternoon. For job sites with recurring needs, we can establish a standing schedule so you're never waiting on us.",
  },
];

export default function ConstructionDebrisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Contractor &amp; Renovation Hauling
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Construction Debris Removal in Pearland, TX
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Pearland is booming — new builds, full gut renovations, and
              everything in between. Whether you're a contractor who needs a
              reliable debris hauler or a homeowner finishing a remodel, we show
              up when we say we will and leave your job site clean.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Drywall, lumber scraps, tile, roofing shingles, concrete chunks,
              old cabinets — load it all and we'll haul it. No runaround, no
              surprise fees, no mess left behind.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {[
                { icon: CheckCircle, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Available" },
                { icon: MapPin, label: "Contractor-Friendly" },
                { icon: Star, label: "Upfront Pricing" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <Icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-7 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone} — Call or Text
            </a>
          </div>

          {/* Right column — booking card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <p className="text-gray-900 font-bold text-xl mb-1">
              Get a Free Quote
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Tell us your job size and material types. We'll get back to you
              fast.
            </p>
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* What we haul */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What We Haul
            </h2>
            <p className="text-gray-600 text-lg">
              From a single-room demo to a full home renovation tearout, we handle
              all types of construction and remodeling debris in Pearland and the
              surrounding area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {whatWeHaul.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-2">
              What we can't take:
            </p>
            <ul className="space-y-1">
              {cantTake.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 text-sm flex items-start gap-2"
                >
                  <span className="text-orange-500 font-bold mt-0.5">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Construction Debris Removal Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Pricing is volume-based and confirmed before we start. Heavy
              materials like concrete and tile may be priced at the higher end.
              No hidden fees — ever.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-gray-900 text-base mb-2">
                  {tier.label}
                </p>
                <p className="text-2xl font-extrabold text-orange-500 mb-3">
                  {tier.range}
                </p>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Exact price confirmed on-site before any work begins. Call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="text-orange-500 font-semibold hover:underline"
            >
              {BUSINESS.phone}
            </a>{" "}
            to get a fast estimate.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area strip */}
      <section className="bg-white py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">
            Areas We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="text-orange-500 hover:text-orange-600 text-sm font-medium hover:underline"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
