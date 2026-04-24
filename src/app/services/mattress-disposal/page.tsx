import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Mattress Disposal Pearland TX | Same-Day Pickup | Daw's Junk Solutions",
  description:
    "Mattress disposal in Pearland, TX. We pick up any size mattress or box spring. Same-day available. From $25 add-on to full pickup service. 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/services/mattress-disposal`,
  },
  openGraph: {
    title: "Mattress Disposal Pearland TX | Daw's Junk Solutions",
    description:
      "Easy mattress pickup and disposal in Pearland, TX. Any size, same-day available. Call 281-202-9668.",
    url: `${BUSINESS.domain}/services/mattress-disposal`,
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Mattress Disposal", href: "/services/mattress-disposal" },
];

const whatWeTake = [
  "Twin, full, queen, and king mattresses",
  "Box springs (any size)",
  "Futon mattresses and fold-out mattresses",
  "Memory foam and pillow-top mattresses",
  "Mattress toppers",
  "Old bed frames (available as an add-on)",
];

const pricingTiers = [
  {
    label: "Add-On (with other service)",
    range: "$25 – $50",
    description:
      "Adding a mattress to an existing junk removal pickup is the most affordable option.",
  },
  {
    label: "Single Mattress Pickup",
    range: "$99",
    description:
      "Standalone pickup for one mattress of any size — twin through king.",
  },
  {
    label: "Two Mattresses",
    range: "$125",
    description:
      "Two mattresses or a mattress and box spring picked up in a single trip.",
  },
  {
    label: "Three or More",
    range: "$150+",
    description:
      "Three or more pieces — ideal for clearing a rental, move-out, or guest room refresh.",
  },
];

const steps = [
  {
    number: "1",
    title: "Call or Book Online",
    body: "Tell us how many mattresses you have and where you're located. We'll confirm a time that works — same-day is available in most cases.",
  },
  {
    number: "2",
    title: "We Pick It Up",
    body: "Our crew comes to your door, carries the mattress out, and loads it into our RawMaxx dump trailer. You don't need to drag it outside or break it down.",
  },
  {
    number: "3",
    title: "We Dispose Responsibly",
    body: "Mattresses in good condition are donated to local shelters before anything goes to a landfill. Others go to certified mattress recyclers when possible.",
  },
];

const faqs = [
  {
    q: "Can I just get one mattress picked up?",
    a: "Absolutely — that's one of our most common calls. A standalone single mattress pickup is $99 anywhere in Pearland. We'll come to your door, haul it out, and it's done. No need to try to fit it in your car or wait for bulk trash day.",
  },
  {
    q: "Do you take box springs too?",
    a: "Yes — box springs are included in our mattress pricing. A mattress and box spring together count as two pieces. If you're getting rid of the whole bed setup, let us know and we'll price it accordingly. We can also take bed frames as an add-on.",
  },
  {
    q: "What do you do with old mattresses?",
    a: "We always try to donate first. If a mattress is in reasonable condition — no major stains, tears, or structural damage — we'll take it to a local shelter or donation partner before anything else. Mattresses that can't be donated are taken to certified mattress recyclers, where steel, foam, and fabric are separated and processed. We avoid the landfill whenever we can.",
  },
  {
    q: "Is there an extra fee for mattress pickup?",
    a: "If you're already booking a junk removal job with us, adding a mattress is just $25–$50 more — very affordable. If it's a standalone mattress-only pickup, the flat rate is $99 for one. We keep our pricing simple and transparent. You'll always know the cost before we show up.",
  },
];

export default function MattressDisposalPage() {
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
              Fast &amp; Affordable Mattress Pickup
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Mattress Disposal in Pearland, TX
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Here's the problem most Pearland residents run into: the city doesn't
              offer easy bulk trash pickup for mattresses, and you can't just toss
              one in the regular bin. Most people end up leaving them on the curb
              hoping for the best — or worse, hauling them to an illegal dump site.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              Daw's Junk Solutions makes it simple. Call us, we come to your door,
              we haul it away — same day in most cases. We try to donate mattresses
              in good condition to local shelters, and the rest go to certified
              recyclers. It's the right way to get rid of a mattress in Pearland.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Pricing starts at just $25 as an add-on to any junk removal job, or
              $99 for a standalone single-mattress pickup. No hidden fees. No
              surprises.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {[
                { icon: CheckCircle, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Available" },
                { icon: MapPin, label: "Pearland-Based Crew" },
                { icon: Star, label: "Eco-Friendly Disposal" },
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
              Schedule a Pickup
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Tell us how many mattresses and where you're located. We'll confirm
              same-day or next-day.
            </p>
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* What we take */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What We Take
            </h2>
            <p className="text-gray-600 text-lg">
              Any size, any brand, any condition. If it's a mattress or sleep
              surface, we'll haul it. You don't have to take it outside — we come
              right to the room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {whatWeTake.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-gray-900">Eco-friendly first:</span>{" "}
              We always try to donate mattresses in good condition to local shelters
              and charity partners before hauling to a recycler. Nothing goes to the
              landfill until we've exhausted better options.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Mattress Disposal Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Simple, flat-rate pricing with no hidden fees. Add a mattress to any
              existing job for as little as $25, or book a dedicated pickup
              starting at $99.
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
            Price confirmed before pickup. Call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="text-orange-500 font-semibold hover:underline"
            >
              {BUSINESS.phone}
            </a>{" "}
            to book or ask any questions.
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
