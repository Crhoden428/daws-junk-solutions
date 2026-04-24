import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Appliance Removal Pearland TX | Fridge, Washer, Dryer Pickup | Daw's Junk Solutions",
  description:
    "Appliance removal in Pearland, TX. We haul away fridges, washers, dryers, dishwashers, ovens, and more. Same-day available. Upfront pricing. 281-202-9668.",
  alternates: {
    canonical: "https://dawsjunk.com/services/appliance-removal",
  },
  openGraph: {
    title: "Appliance Removal Pearland TX | Fridge, Washer, Dryer Pickup | Daw's Junk Solutions",
    description:
      "Appliance removal in Pearland, TX. We haul away fridges, washers, dryers, dishwashers, ovens, and more. Same-day available. Upfront pricing.",
    url: "https://dawsjunk.com/services/appliance-removal",
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Appliance Removal", href: "/services/appliance-removal" },
]);

const TAKES = [
  "Refrigerators and chest freezers",
  "Washing machines and dryers",
  "Dishwashers",
  "Ovens, ranges, and cooktops",
  "Microwaves (countertop and over-range)",
  "Window and portable AC units",
  "Water heaters (tank and tankless)",
  "Trash compactors",
  "Dehumidifiers and air purifiers",
  "Small kitchen appliances in bulk",
];

const CANNOT_TAKE = [
  "Appliances still hardwired — please have a licensed electrician disconnect first",
  "Appliances connected to gas lines — please have the gas shut off before we arrive",
];

const PRICING_TIERS = [
  { label: "Single Appliance", desc: "One fridge, washer, dryer, or similar", range: "$99 – $150" },
  { label: "2–3 Appliances", desc: "Washer + dryer, fridge + freezer, etc.", range: "$150 – $250" },
  { label: "Full Appliance Set", desc: "Full kitchen suite or multiple large units", range: "$250 – $400" },
];

const FAQS = [
  {
    q: "Is there an extra fee for refrigerators with Freon?",
    a: "Refrigerators and other appliances containing Freon (R-22 or R-410A) may require a $25 environmental handling fee to cover proper refrigerant recovery. This is always disclosed upfront before we start — no surprises. Many older fridges and window AC units fall into this category.",
  },
  {
    q: "Do you disconnect appliances before hauling them?",
    a: "We handle standard disconnections — unhooking washer hoses, unplugging a dryer, pulling the fridge away from the wall. We do not disconnect gas lines or hardwired electrical connections. Please have those shut off or disconnected before we arrive. If you're unsure what's needed, call us and we'll walk you through it.",
  },
  {
    q: "Can you haul appliances from upstairs or a tight laundry room?",
    a: "Yes. Navigating stairs, closet laundry nooks, and tight spaces is part of what we do. Let us know the layout when you schedule so we can plan accordingly. There is no extra charge for stairs in most cases.",
  },
  {
    q: "What happens to old appliances after you haul them away?",
    a: "We prioritize responsible disposal. Appliances in working condition may be donated or sold to extend their useful life. Non-working appliances go to certified recycling and scrap facilities — recovering valuable metals and keeping hazardous materials out of landfills. Refrigerant is captured and handled per EPA guidelines.",
  },
];

export default function ApplianceRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star size={16} className="fill-orange-500 text-orange-500" />
                <Star size={16} className="fill-orange-500 text-orange-500" />
                <Star size={16} className="fill-orange-500 text-orange-500" />
                <Star size={16} className="fill-orange-500 text-orange-500" />
                <Star size={16} className="fill-orange-500 text-orange-500" />
                <span className="text-gray-400 text-sm ml-1">5-star rated in Pearland</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                <span className="text-orange-500">Appliance Removal</span> in Pearland, TX
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                Got a dead fridge, old washer, or broken dryer taking up space? We haul it away — same day, upfront price, no hassle. Serving Pearland and all of South Houston.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
                  <Clock size={15} className="text-orange-400" />
                  Same-Day Available
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
                  <CheckCircle size={15} className="text-orange-400" />
                  Upfront Pricing
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-medium">
                  <CheckCircle size={15} className="text-orange-400" />
                  Licensed &amp; Insured
                </div>
              </div>

              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} />
                Call {BUSINESS.phone}
              </a>
              <p className="text-gray-500 text-sm mt-3">Mon – Sat 7am–7pm · Sun by appointment</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h2 className="text-gray-900 font-bold text-xl mb-1">Get a Free Estimate</h2>
              <p className="text-gray-500 text-sm mb-5">We respond within minutes during business hours.</p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* What We Take */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-4">
                We Haul All Major Appliances
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Old appliances are heavy, awkward, and often require special handling. Don't risk injuring yourself or damaging your home trying to drag one out. Our crew has the equipment and experience to remove appliances of any size, from any room in the house.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Getting a new appliance delivered? We can coordinate timing so your old one is gone before the new one arrives — just let us know when you book.
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                <p className="text-sm text-orange-800 font-semibold mb-1">Freon Appliance Notice</p>
                <p className="text-sm text-orange-700">
                  Refrigerators, freezers, and AC units containing Freon may require a $25 environmental handling fee for proper refrigerant recovery. This is always disclosed upfront — we never add fees without your knowledge.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Appliances We Remove</h3>
              <ul className="space-y-3 mb-8">
                {TAKES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-semibold text-red-800 text-sm mb-3">What to Handle Before We Arrive</h3>
                <ul className="space-y-2">
                  {CANNOT_TAKE.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-700">
                      <span className="mt-0.5 shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">
            Appliance Removal Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Transparent, upfront pricing — always quoted before we touch anything.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.label}
                className="rounded-2xl border border-gray-200 p-6 text-left bg-gray-50 hover:border-orange-200 hover:bg-orange-50 transition-colors"
              >
                <div className="font-bold text-gray-900 text-lg mb-1">{tier.label}</div>
                <div className="text-gray-500 text-sm mb-3">{tier.desc}</div>
                <div className="text-2xl font-bold text-orange-600">{tier.range}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Labor, loading, hauling, and disposal always included. Freon fee ($25) disclosed upfront if applicable.
          </p>
          <Link
            href="/pricing"
            className="inline-block mt-6 text-orange-600 font-semibold hover:underline"
          >
            See full pricing details →
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600 text-lg mb-12">Appliance removal made simple, start to finish.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Book Your Pickup",
                body: "Call, text, or book online. Tell us what appliances you need removed and where they're located. We'll get you on the schedule — same-day often available in Pearland.",
              },
              {
                step: "2",
                title: "We Arrive & Quote",
                body: "Our crew shows up on time, assesses the appliances, and gives you a firm upfront price. Any applicable fees are disclosed before we start — no surprises.",
              },
              {
                step: "3",
                title: "Hauled Away Clean",
                body: "You approve, we do all the heavy work. We disconnect standard connections, load the appliance onto our trailer, and leave your space tidy. Responsible disposal guaranteed.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm text-left">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white font-bold text-xl flex items-center justify-center mb-5">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <section className="bg-gray-50 py-10 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <div className="flex items-center gap-2 text-gray-700 font-semibold mr-3">
              <MapPin size={16} className="text-orange-500" />
              We Serve:
            </div>
            {SERVICE_AREAS.map((area, i) => (
              <span key={area.slug} className="flex items-center gap-2">
                <Link
                  href={`/locations/${area.slug}`}
                  className="text-orange-600 hover:underline text-sm font-medium"
                >
                  {area.name}
                </Link>
                {i < SERVICE_AREAS.length - 1 && (
                  <span className="text-gray-300">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
