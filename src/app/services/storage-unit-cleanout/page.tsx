import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Box } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Storage Unit Cleanout Pearland TX | Stop Paying Rent on Junk | Daw's Junk Solutions",
  description:
    "Storage unit cleanout in Pearland, TX. We empty your unit so you stop paying monthly rent on stuff you don't want. Same-day available. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/services/storage-unit-cleanout` },
  openGraph: {
    title: "Storage Unit Cleanout Pearland TX | Daw's Junk Solutions",
    description:
      "Stop paying $150/month to store junk you haven't touched in years. We empty your storage unit fast. Same-day available. 281-202-9668.",
  },
};

const whatWeHandle = [
  "Furniture — sofas, beds, dressers, tables",
  "Boxes and bins of household items",
  "Appliances — fridges, washers, dryers",
  "Clothing, bags & textiles",
  "Sports equipment, bikes & outdoor gear",
  "Electronics & old computers",
  "Tools & workshop equipment",
  "Holiday decorations & seasonal items",
  "Filing cabinets & office furniture",
  "Anything else crammed in there",
];

const pricingRows = [
  { label: "Small unit — 5×5 or 5×10", price: "$99 – $200" },
  { label: "Medium unit — 10×10", price: "$200 – $375" },
  { label: "Large unit — 10×20 or 10×30", price: "$375 – $600+" },
];

const faqs = [
  {
    q: "Do I need to be at the storage facility when you come?",
    a: "It's helpful but not always required. You'll need to provide gate access and either be present to unlock the unit or arrange for the facility to grant access. Once we're in, many customers let us handle the rest while they go about their day.",
  },
  {
    q: "Can you haul an entire 10×20 unit in one trip?",
    a: "Our RawMaxx dump trailer handles most 10×20 units in a single haul. If the unit is packed floor-to-ceiling with heavy items it may require a second trip — we'll let you know upfront and price accordingly so there are no surprises.",
  },
  {
    q: "What if some items can be donated?",
    a: "Great news — we sort before we dispose. Usable furniture, clothing, and household items get routed to local donation centers first. We'll set those aside and let you know what we're keeping out of the landfill.",
  },
  {
    q: "How long does a storage unit cleanout take?",
    a: "A small unit (5×5 or 5×10) usually takes under an hour. A medium 10×10 runs 1–2 hours. A large 10×20 or 10×30 unit typically takes 2–4 hours depending on how packed it is and how heavy the items are.",
  },
];

export default function StorageUnitCleanoutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Storage Unit Cleanout", href: "/services/storage-unit-cleanout" },
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
            <span className="text-white">Storage Unit Cleanout</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <Box size={14} className="text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">Stop Paying Rent on Junk</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Storage Unit Cleanout in{" "}
                <span className="text-orange-500">Pearland, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-4 leading-relaxed">
                Stop paying $150 a month to store junk you haven't touched in three years. We meet you at the facility, empty the unit in one trip, and haul everything away.
              </p>
              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                One phone call ends the monthly bill. We handle everything — loading, sorting, donation drop-off, and disposal.
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

      {/* ── Math callout ── */}
      <section className="bg-orange-600 py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-bold text-lg sm:text-xl">
            $150/month × 12 months = $1,800 spent on stuff you don&apos;t want.{" "}
            <a href={BUSINESS.phoneHref} className="underline underline-offset-2 hover:text-orange-100 transition-colors">
              One cleanout ends it.
            </a>
          </p>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-4">
                We Take Everything in the Unit
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                No sorting required on your end. We walk the unit with you, confirm what's going, load every last item onto the trailer, and haul it away. Most units are done in a single trip.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {whatWeHandle.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-orange-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 border-l-4 border-orange-600 pl-4">
                Cannot haul: hazardous chemicals, motor oil, propane tanks, or regulated waste. Not sure? Ask us — we'll help figure out the right options.
              </p>
            </div>

            {/* Our process */}
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-6">Our Process at the Facility</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Meet at the storage facility",
                    desc: "Give us the address and unit number. We show up on time — you let us in or arrange access with the facility.",
                  },
                  {
                    step: "2",
                    title: "Walk the unit, get your price",
                    desc: "We take a quick look at the volume and give you a firm upfront price. No obligation to proceed. If it looks good, we start immediately.",
                  },
                  {
                    step: "3",
                    title: "We load and haul — you're done",
                    desc: "We carry everything out, load the trailer, and haul it all away. Unit is empty, door is open, and you can cancel that monthly payment today.",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-5">
                    <div className="shrink-0 w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center font-bold text-white text-sm">
                      {step}
                    </div>
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
            Storage Unit Cleanout Pricing
          </h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Pricing is based on unit size and how full it is. Your final price is given on-site before we start — no hidden fees added at the end.
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
            Price includes labor, fuel &amp; disposal. Always quoted before work begins.
          </p>
          <div className="mt-8 rounded-xl bg-orange-50 border border-orange-200 px-6 py-5 text-center">
            <p className="text-orange-800 text-sm font-semibold">
              Compare our one-time cleanout fee to 6–12 more months of storage rent. The math almost always wins.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-10">
            From Packed to Empty in One Visit
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                n: "01",
                title: "Book Your Slot",
                desc: "Call, text, or fill out the form. Tell us the storage facility location and unit size. Same-day and next-day slots are available.",
              },
              {
                n: "02",
                title: "We Meet You There",
                desc: "We arrive on time, walk the unit with you, and give you a firm upfront price before we start loading a single item.",
              },
              {
                n: "03",
                title: "Empty Unit, Done Bill",
                desc: "We haul everything away. You close out your storage account and stop paying rent — permanently.",
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
            Storage Unit Cleanout FAQs
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
            Storage Unit Cleanout Available In
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
