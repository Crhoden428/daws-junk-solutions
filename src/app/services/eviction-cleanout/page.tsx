import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star, Key } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Eviction Cleanout Pearland TX | Fast Turnaround for Landlords | Daw's Junk Solutions",
  description:
    "Eviction cleanout services in Pearland, TX. Fast turnaround so you can re-rent fast. Furniture, junk, appliances — everything cleared. Upfront pricing. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/services/eviction-cleanout` },
  openGraph: {
    title: "Eviction Cleanout Pearland TX | Daw's Junk Solutions",
    description:
      "Fast eviction cleanouts for landlords and property managers in Pearland, TX. Every day empty costs you rent — we turn units around fast. 281-202-9668.",
  },
};

const whatWeRemove = [
  "Left-behind furniture — sofas, beds, dressers, chairs",
  "Appliances — fridges, microwaves, washers, dryers",
  "Personal items, clothing & shoes",
  "Trash bags, garbage & food waste coordination",
  "Mattresses & box springs",
  "Electronics & broken equipment",
  "Boxes, bags & random household junk",
  "Debris from damage or neglect",
  "Outdoor items left on patios or yards",
  "Anything else a tenant left behind",
];

const pricingRows = [
  { label: "Studio / Small unit (few items)", price: "$150 – $300" },
  { label: "1-Bedroom unit", price: "$250 – $400" },
  { label: "2-Bedroom unit", price: "$350 – $600" },
  { label: "Large property / multi-unit", price: "On-site quote" },
];

const faqs = [
  {
    q: "How fast can you turn around after an eviction?",
    a: "We offer same-day and next-day cleanouts throughout Pearland and South Houston. In most cases we can have a unit fully cleared within 24–48 hours of your call. The faster you get us in, the sooner you can start re-renting.",
  },
  {
    q: "Do you work with property management companies?",
    a: "Yes — and we love repeat clients. Property managers get consistent pricing, priority scheduling, and a crew they can count on. Call us to set up an account for your portfolio.",
  },
  {
    q: "What if the tenant left a lot of hazardous material?",
    a: "We handle standard cleanout debris but cannot haul regulated hazardous waste such as certain chemicals, biohazard material, or motor oil. If we spot anything questionable we'll let you know upfront and help coordinate the right disposal contacts.",
  },
  {
    q: "Do you document what was removed?",
    a: "Yes. We can provide a summary of items removed on request, which helps when documenting the condition of the unit or pursuing security deposit claims. Let us know before we start and we'll make sure you have what you need.",
  },
];

export default function EvictionCleanoutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Eviction Cleanout", href: "/services/eviction-cleanout" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-orange-500">Services</Link>
            <span>/</span>
            <span className="text-white">Eviction Cleanout</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <Key size={14} className="text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">For Landlords &amp; Property Managers</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Eviction Cleanout in{" "}
                <span className="text-orange-500">Pearland, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-4 leading-relaxed">
                Every day a unit sits empty costs you rent. We clear tenant left-behinds fast — furniture, appliances, trash, all of it — so you can re-rent without delay.
              </p>
              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                We work with independent landlords, property management companies, and real estate investors throughout Pearland and South Houston. One call, one crew, one trip.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1.5"><Clock size={15} /> Same-Day Available</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Upfront Pricing</span>
                <span className="flex items-center gap-1.5"><Phone size={15} /> Call or Text</span>
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
              <p className="text-gray-500 text-sm mb-6">Same-day slots available. We respond in minutes.</p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── Urgency strip ── */}
      <section className="bg-orange-600 py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-bold text-lg sm:text-xl">
            Every empty day = lost rent. We offer next-day cleanouts throughout Pearland —{" "}
            <a href={BUSINESS.phoneHref} className="underline underline-offset-2 hover:text-orange-100 transition-colors">
              call now to lock in your slot.
            </a>
          </p>
        </div>
      </section>

      {/* ── What We Remove ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-4">
                Everything a Tenant Left Behind
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Evicted tenants leave all kinds of junk — old mattresses, full rooms of furniture, bags of garbage. We take all of it in a single visit so you don't have to coordinate multiple vendors.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {whatWeRemove.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-orange-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 border-l-4 border-orange-600 pl-4">
                Cannot haul: regulated hazardous waste, biohazard material, motor oil, or asbestos. We'll flag anything unusual and help you find the right next step.
              </p>
            </div>

            {/* Who we serve */}
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-6">Who We Work With</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Key size={22} className="text-orange-600" />,
                    title: "Independent Landlords",
                    desc: "Single-family rentals, duplexes, and small portfolios. We show up fast and treat your property with respect.",
                  },
                  {
                    icon: <CheckCircle size={22} className="text-orange-600" />,
                    title: "Property Management Companies",
                    desc: "Repeat clients get priority scheduling and consistent pricing. We integrate into your unit-turn process seamlessly.",
                  },
                  {
                    icon: <Star size={22} className="text-orange-600" />,
                    title: "Real Estate Investors",
                    desc: "Fix-and-flip, buy-and-hold, BRRRR — whatever your strategy, we help you move fast between tenants.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-5">
                    <div className="mt-0.5 shrink-0">{icon}</div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-[#111111] mb-3 text-center">
            Eviction Cleanout Pricing
          </h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Pricing is based on volume and labor required. You get your exact price before we touch a single item — no surprises on the invoice.
          </p>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            {pricingRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <span className="text-gray-700 text-sm">{row.label}</span>
                <span className="font-display text-xl text-orange-600">{row.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-400 text-center">
            Price includes labor, fuel &amp; disposal. Always disclosed before work begins.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-10">
            How the Eviction Cleanout Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                n: "01",
                title: "Call or Book Online",
                desc: "Tell us the unit address, number of bedrooms, and how much was left behind. We'll get you scheduled — often same or next day.",
              },
              {
                n: "02",
                title: "We Walk the Unit & Quote",
                desc: "Our crew walks the property, assesses the volume, and gives you a firm upfront price before touching a single item. No obligation.",
              },
              {
                n: "03",
                title: "We Clear It — You Re-Rent",
                desc: "We load everything, sweep up, and leave the unit empty and ready for your cleaners. Most cleanouts are done in a few hours.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="font-display text-5xl text-orange-600/30 mb-2">{n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-[#111111] mb-8 text-center">
            Eviction Cleanout FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-5">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area Strip ── */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-4 text-center">
            Eviction Cleanout Available In
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${area.slug}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-600 transition-colors"
              >
                <MapPin size={13} className="text-orange-600" />
                {area.name}, TX
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
