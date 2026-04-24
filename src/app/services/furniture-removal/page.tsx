import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Furniture Removal Pearland TX | Same-Day Pickup | Daw's Junk Solutions",
  description:
    "Furniture removal in Pearland, TX. Couches, beds, dressers, tables, recliners — we haul it all. Same-day available from $99. No hidden fees. 281-202-9668.",
  alternates: {
    canonical: "https://dawsjunk.com/services/furniture-removal",
  },
  openGraph: {
    title: "Furniture Removal Pearland TX | Same-Day Pickup | Daw's Junk Solutions",
    description:
      "Furniture removal in Pearland, TX. Couches, beds, dressers, tables, recliners — we haul it all. Same-day available from $99. No hidden fees.",
    url: "https://dawsjunk.com/services/furniture-removal",
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Furniture Removal", href: "/services/furniture-removal" },
]);

const TAKES = [
  "Sofas and sectionals of any size",
  "Recliners and accent chairs",
  "Beds, frames, and headboards",
  "Dressers and chests of drawers",
  "Nightstands and bedside tables",
  "Dining tables and chair sets",
  "Desks and office chairs",
  "Entertainment centers and TV stands",
  "Bookshelves and display cabinets",
  "Armoires and wardrobes",
];

const CANNOT_TAKE = [
  "Furniture with active bed bug infestations",
];

const PRICING_TIERS = [
  { label: "Single Piece", desc: "One sofa, chair, dresser, or similar", range: "$99 – $150" },
  { label: "2–3 Pieces", desc: "Bedroom set, sofa + chair, etc.", range: "$150 – $250" },
  { label: "Half Truckload", desc: "Multiple rooms or large sectional + more", range: "$250 – $375" },
  { label: "Full Truckload", desc: "Full home furnishings or estate furniture", range: "$500+" },
];

const FAQS = [
  {
    q: "Do you disassemble furniture before hauling it?",
    a: "We handle light disassembly as needed — things like removing legs from a sofa or taking a bed frame apart. If a piece needs significant disassembly to get out the door, our crew is happy to do it at no extra charge for most standard furniture.",
  },
  {
    q: "Can you get a couch out of a tight space or apartment?",
    a: "Yes — navigating awkward doorways, narrow hallways, and tight stairwells is part of the job. Our crew is experienced at maneuvering large furniture out of challenging spaces without damaging walls or floors. Just let us know the situation when you book.",
  },
  {
    q: "What if the furniture is too big to fit through the door?",
    a: "It happens more than you'd think. We can disassemble the piece, remove a door from its hinges, or find another access point. In rare cases we may need to take a different approach, but we'll always discuss options with you before doing anything.",
  },
  {
    q: "Do you donate usable furniture instead of landfilling it?",
    a: "Absolutely. Before anything goes to the landfill, we look for donation and recycling opportunities. Furniture in good condition gets routed to local donation centers serving the South Houston community. We believe in keeping reusable items out of the waste stream.",
  },
];

export default function FurnitureRemovalPage() {
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
                <span className="text-orange-500">Furniture Removal</span> in Pearland, TX
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                Couches, sectionals, beds, dressers, dining sets — you point to it, we haul it. No heavy lifting on your end, ever. Same-day pickup available across Pearland and South Houston.
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
                Any Furniture, Any Room
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Replacing your living room furniture? Moving out? Downsizing? Whatever the reason, Daw's Junk Solutions makes furniture removal completely hassle-free. We handle everything from a single recliner to a full house worth of furnishings.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our crew is skilled at navigating tricky doorways, staircases, and tight corners — protecting your walls and floors in the process. We do the heavy lifting so you don't have to throw out your back.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Furniture in good condition gets donated to local organizations serving Pearland and the greater Houston area before anything heads to the landfill. We sort it right.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Furniture We Remove</h3>
              <ul className="space-y-3 mb-8">
                {TAKES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <h3 className="font-semibold text-amber-800 text-sm mb-2">One Exception</h3>
                {CANNOT_TAKE.map((item) => (
                  <p key={item} className="text-sm text-amber-700">{item}. If you're unsure, just call us and we'll help you figure out the best path forward.</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">
            Furniture Removal Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Priced by volume — the more you have, the better the value. Always quoted upfront.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div key={tier.label} className="rounded-2xl border border-gray-200 p-6 text-left bg-gray-50 hover:border-orange-200 hover:bg-orange-50 transition-colors">
                <div className="font-bold text-gray-900 text-lg mb-1">{tier.label}</div>
                <div className="text-gray-500 text-sm mb-3">{tier.desc}</div>
                <div className="text-2xl font-bold text-orange-600">{tier.range}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Labor, loading, hauling, and disposal always included. You get a firm quote on-site before we start.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600 text-lg mb-12">From cluttered to clear in three easy steps.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Schedule a Pickup",
                body: "Call, text, or book online. We'll confirm your appointment and send a reminder — same-day availability in Pearland most days.",
              },
              {
                step: "2",
                title: "We Quote On-Site",
                body: "Our crew arrives within the agreed window, takes a look at the furniture, and gives you a firm upfront price. No pressure, no obligation.",
              },
              {
                step: "3",
                title: "We Remove Everything",
                body: "You approve the quote and step back. We carry it out, load the trailer, and sweep up. Your space is clear — we're gone in no time.",
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
