import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, PRICING, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Junk Removal Pricing Pearland TX | Upfront Rates | Daw's Junk Solutions",
  description:
    "Transparent junk removal pricing in Pearland, TX. No hidden fees. From $99 for small loads to $700+ for full truckloads. Get your exact price before we start. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/pricing` },
};

const addOns = [
  { item: "Mattress or box spring", price: "$25 each" },
  { item: "TV / monitor disposal", price: "$25–$50" },
  { item: "Extra-heavy items (safes, pianos)", price: "Quote on-site" },
  { item: "Stairs / difficult access", price: "Quote on-site" },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-7xl mb-4">
            Upfront Pricing.<br />
            <span className="text-orange-500">No Surprises.</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            We show you the price before we touch a single item. You approve it, then we haul. That's the Daw's way.
          </p>
        </div>
      </section>

      {/* Main pricing table */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-[#111111] text-center mb-10">
            Junk Removal Rates — Pearland, TX
          </h2>

          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
            <div className="bg-[#111111] text-white px-6 py-4 flex justify-between text-sm font-bold uppercase tracking-wider">
              <span>Load Size</span>
              <span>Price Range</span>
            </div>
            {PRICING.map((tier, i) => (
              <div key={tier.label} className={`grid grid-cols-3 items-center px-6 py-5 gap-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="col-span-2">
                  <p className="font-bold text-gray-900">{tier.label}</p>
                  <p className="text-sm text-gray-500">{tier.size}</p>
                </div>
                <p className="font-display text-2xl text-orange-600 text-right">{tier.range}</p>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Every price includes:</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "All labor — we load everything",
                "Fuel & transportation",
                "Disposal fees",
                "Eco-friendly sorting (donate + recycle)",
                "Sweep-up after we're done",
                "No hidden charges, ever",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-orange-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons */}
          <h3 className="font-display text-3xl text-[#111111] mb-4">Special Item Fees</h3>
          <p className="text-gray-500 mb-6">A small add-on applies for items that require special handling. Always disclosed before we start.</p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-12">
            {addOns.map((row, i) => (
              <div key={row.item} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-gray-700">{row.item}</span>
                <span className="font-bold text-gray-900">{row.price}</span>
              </div>
            ))}
          </div>

          {/* Get a quote */}
          <div className="rounded-2xl bg-[#111111] text-white p-8">
            <h3 className="font-display text-3xl mb-2">Get Your Exact Price</h3>
            <p className="text-gray-400 mb-6">Not sure what size load you have? Send us a quick description and we'll give you a number fast.</p>
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* Service-specific pricing links */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-5 text-center">Pricing by Service</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:border-orange-500 hover:text-orange-600 transition-colors"
              >
                {s.name} Pricing →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
