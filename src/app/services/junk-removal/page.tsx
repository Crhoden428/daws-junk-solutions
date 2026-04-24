import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Full-service junk removal in Pearland, TX. We load, haul, and dispose of everything. Same-day available, upfront pricing from $99. Licensed & insured. Better Call Daw — 281-202-9668.",
  alternates: {
    canonical: "https://dawsjunk.com/services/junk-removal",
  },
  openGraph: {
    title: "Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions",
    description:
      "Full-service junk removal in Pearland, TX. We load, haul, and dispose of everything. Same-day available, upfront pricing from $99. Licensed & insured.",
    url: "https://dawsjunk.com/services/junk-removal",
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Junk Removal", href: "/services/junk-removal" },
]);

const TAKES = [
  "Sofas, sectionals, and recliners",
  "Beds, frames, and mattresses",
  "Appliances — fridges, washers, dryers",
  "Electronics, TVs, and computers",
  "Yard waste, brush, and limbs",
  "Construction debris and demo waste",
  "Garage contents and workshop clutter",
  "Boxes, bags, and general household items",
  "Filing cabinets and office equipment",
  "Hot tubs, swing sets, and outdoor furniture",
];

const CANNOT_TAKE = [
  "Hazardous chemicals or materials",
  "Motor oil or automotive fluids",
  "Asbestos or lead-based materials",
  "Propane tanks (full or empty)",
];

const FAQS = [
  {
    q: "How does junk removal work?",
    a: "Simple. Call or book online, we show up at your scheduled window, walk through the items with you, and give you an upfront price right on the spot. You approve, we load everything onto our RawMaxx dump trailer — you don't lift a finger. We sweep up, haul it off, and you're done.",
  },
  {
    q: "How much does junk removal cost in Pearland?",
    a: "Pricing starts at $99 for small loads (a piece or two) and ranges up to $700+ for a full truckload. The exact cost depends on how much space your junk takes up in the trailer. We quote you upfront before we start — no hidden fees, no surprises when the job is done.",
  },
  {
    q: "Do you offer same-day junk removal service?",
    a: "Yes, we offer same-day and next-day pickup throughout Pearland and the surrounding South Houston area — subject to availability. The sooner you call or book, the better your chances of getting today's slot. Reach us at 281-202-9668.",
  },
  {
    q: "Is your pricing really upfront with no hidden fees?",
    a: "Absolutely. We believe in honest, straightforward pricing. When our crew arrives, we assess the load and give you a firm quote before anything gets moved. That price is what you pay — no add-ons for stairs, tight spaces, or heavy items.",
  },
];

export default function JunkRemovalPage() {
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
                <span className="text-orange-500">Junk Removal</span> in Pearland, TX
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                We load it, haul it, and dispose of it responsibly — you don't move a thing. Family-owned, locally operated, and ready to clear your space today.
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
                We Haul Almost Everything
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Whether you're clearing out a single room or an entire property, Daw's Junk Solutions handles it all. Our RawMaxx dump trailer can fit a full household worth of junk in one efficient trip — saving you time, money, and trips to the dump.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                After we haul it away, we sort everything: usable items go to local donation centers, recyclables go to the right facilities, and only true waste ends up in the landfill. Eco-friendly by default.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Items We Accept</h3>
              <ul className="space-y-3 mb-8">
                {TAKES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <h3 className="font-semibold text-red-800 text-sm mb-3">We Cannot Accept</h3>
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
            Straightforward Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Pricing is based on how much space your load takes up in our trailer. No hidden fees — ever.
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#111111] text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold text-sm">Load Size</th>
                  <th className="px-6 py-4 font-semibold text-sm">What It Fits</th>
                  <th className="px-6 py-4 font-semibold text-sm text-right">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING.map((tier, i) => (
                  <tr key={tier.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{tier.label}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{tier.size}</td>
                    <td className="px-6 py-4 font-bold text-orange-600 text-right">{tier.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            All prices include labor, loading, hauling, and disposal. You get a firm quote before we start.
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
          <p className="text-gray-600 text-lg mb-12">Three simple steps and your junk is gone.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Call or Book Online",
                body: "Reach us by phone, text, or the booking form above. We'll set up a time window that works for you — same-day slots often available.",
              },
              {
                step: "2",
                title: "We Arrive & Quote On-Site",
                body: "Our crew shows up on time, walks through the items with you, and gives you a firm upfront price. No obligation to proceed.",
              },
              {
                step: "3",
                title: "We Load It & Haul It Away",
                body: "You approve the price, we do all the heavy lifting and loading. We sweep up before we leave — your space is clean and clear.",
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
