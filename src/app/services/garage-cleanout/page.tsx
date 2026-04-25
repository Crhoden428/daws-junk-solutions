import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, FAQS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Garage Cleanout Pearland TX | Same-Day Service | Daw's Junk Solutions",
  description:
    "Professional garage cleanout in Pearland, TX. We clear everything — furniture, tools, junk, appliances. Same-day available. Upfront pricing from $99. Call 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/services/garage-cleanout` },
  openGraph: {
    title: "Garage Cleanout Pearland TX | Daw's Junk Solutions",
    description: "Full garage cleanouts in Pearland, TX. Same-day available. Upfront pricing. Better Call Daw — 281-202-9668.",
    images: [{ url: "/images/before-after-garage.jpg", width: 1200, height: 630 }],
  },
};

const whatWeTake = [
  "Old furniture & shelving units",
  "Power tools & broken equipment",
  "Tires, auto parts & car accessories",
  "Boxes, bags & general clutter",
  "Lawn mowers & yard equipment",
  "Scrap metal & hardware",
  "Old appliances & electronics",
  "Sports gear, bikes & seasonal items",
  "Paint cans (check local hazmat rules)",
  "Holiday decorations & storage bins",
];

const faqsGarage = [
  {
    q: "How long does a garage cleanout take?",
    a: "A typical two-car garage cleanout takes 1–3 hours depending on how full it is. We've done full cleanouts in under 90 minutes. We'll give you a time estimate when we see the space.",
  },
  {
    q: "Do I need to sort or bag anything before you arrive?",
    a: "No. Just tell us what stays and what goes. We handle all the loading — you don't lift a finger.",
  },
  {
    q: "Can you haul a garage worth of stuff in one trip?",
    a: "Our RawMaxx dump trailer handles most full garages in a single haul. If it's a truly massive cleanout, we'll let you know upfront and price accordingly.",
  },
  {
    q: "What if there are items worth donating?",
    a: "We sort and donate usable items to local charities before anything hits the landfill. We'll let you know what we're setting aside.",
  },
];

export default function GarageCleanoutPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Garage Cleanout", href: "/services/garage-cleanout" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-orange-500">Services</Link>
            <span>/</span>
            <span className="text-white">Garage Cleanout</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-orange-500 text-orange-500" />)}
                <span className="text-orange-400 text-sm font-semibold ml-1">Most Popular Service</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Garage Cleanout in{" "}
                <span className="text-orange-500">Pearland, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-6 leading-relaxed">
                We turn your packed, unusable garage into usable space — in one trip, one day. No sorting required.
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

      {/* Before / After */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-8">
            The Daw's Difference
          </h2>
          <Image
            src="/images/ACC29CAC-B783-4D24-BE3B-E1CB0F20F008.png"
            alt="Garage cleanout before and after in Pearland TX — Daw's Junk Solutions"
            width={1200}
            height={700}
            className="rounded-2xl w-full shadow-lg"
          />
          <p className="text-center text-sm text-gray-400 mt-3 italic">
            Real job — Shadow Creek Ranch, Pearland TX. Completed in under 2 hours.
          </p>
        </div>
      </section>

      {/* What we take */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-4">
                What We Take from Your Garage
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If it's cluttering your garage, we'll take it. We handle the loading, sorting, and disposal — you just point and we haul.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {whatWeTake.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-orange-600 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 border-l-4 border-orange-600 pl-4">
                We can't take: hazardous chemicals, motor oil, asbestos, or propane tanks. Not sure? Just ask — we'll tell you what options exist.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-4">Garage Cleanout Pricing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pricing is based on volume (how much space your items take up in the trailer). You'll get your exact price before we start.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                {[
                  { label: "Small garage load (few items)", price: "$99 – $175" },
                  { label: "Half garage (moderate clutter)", price: "$200 – $375" },
                  { label: "Full one-car garage", price: "$375 – $500" },
                  { label: "Full two-car garage", price: "$500 – $700+" },
                ].map((row, i) => (
                  <div key={row.label} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <span className="text-gray-700 text-sm">{row.label}</span>
                    <span className="font-display text-xl text-orange-600">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-400 text-center">Price includes labor, fuel & disposal. Always disclosed before work begins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-10">How Your Garage Cleanout Works</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { n: "01", title: "Book in Minutes", desc: "Call, text, or fill out the form. We confirm your window — often same day." },
              { n: "02", title: "We Show Up & Quote", desc: "Daw's crew arrives, walks the garage, and gives you a final upfront price. No obligation to proceed." },
              { n: "03", title: "We Clear It Out", desc: "We load every item, sweep up, and leave your garage spotless. Usually done in 1–3 hours." },
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

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-[#111111] mb-8 text-center">Garage Cleanout FAQs</h2>
          <div className="space-y-4">
            {faqsGarage.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-white px-6 py-5">
                <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas for this service */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-500 text-sm uppercase tracking-wider mb-4 text-center">
            Garage Cleanout Available In
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
