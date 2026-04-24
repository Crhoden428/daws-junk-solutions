import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Estate Cleanout Pearland TX | Compassionate & Fast | Daw's Junk Solutions",
  description:
    "Estate cleanout services in Pearland, TX. Compassionate, efficient, and respectful. We handle estates of any size — same-day available. Upfront pricing. 281-202-9668.",
  alternates: {
    canonical: "https://dawsjunk.com/services/estate-cleanout",
  },
  openGraph: {
    title: "Estate Cleanout Pearland TX | Compassionate & Fast | Daw's Junk Solutions",
    description:
      "Estate cleanout services in Pearland, TX. Compassionate, efficient, and respectful. We handle estates of any size — same-day available. Upfront pricing.",
    url: "https://dawsjunk.com/services/estate-cleanout",
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Estate Cleanout", href: "/services/estate-cleanout" },
]);

const HANDLES = [
  "Full home cleanouts — every room, top to bottom",
  "Furniture, beds, sofas, and dressers",
  "Appliances — refrigerators, washers, dryers",
  "Personal belongings, clothing, and linens",
  "Garage and shed contents",
  "Yard items, tools, and outdoor furniture",
  "Boxes, files, books, and miscellaneous items",
  "Cabinets, shelving, and storage contents",
];

const HOW_WE_SORT = [
  {
    label: "Donation First",
    body: "Usable furniture, clothing, housewares, and more go to local donation centers. We can provide a donation receipt for your tax records.",
  },
  {
    label: "Recycle What We Can",
    body: "Metals, electronics, and recyclable materials are taken to proper facilities — keeping them out of the landfill.",
  },
  {
    label: "Landfill as a Last Resort",
    body: "Only items that truly cannot be donated or recycled go to the landfill. We take our responsibility to the community seriously.",
  },
];

const PRICING_TIERS = [
  { label: "Partial Cleanout", desc: "One or two rooms, garage, or specific areas", range: "From $300" },
  { label: "Small Estate", desc: "1–2 bedroom home, mostly cleared", range: "$500 – $900" },
  { label: "Mid-Size Estate", desc: "3-bedroom home, full contents", range: "$900 – $1,500" },
  { label: "Large Estate", desc: "Large home, multiple outbuildings, heavy load", range: "$1,500 – $2,000+" },
];

const FAQS = [
  {
    q: "How long does an estate cleanout take?",
    a: "It depends on the size of the home and how much needs to be removed. A partial cleanout or single room can often be done in a few hours. A full estate cleanout typically takes one full day or may require two trips depending on the volume. We'll give you a realistic timeline estimate when we do your on-site walkthrough.",
  },
  {
    q: "Do you coordinate donations and provide receipts for tax purposes?",
    a: "Yes. We sort usable items for donation and can coordinate drop-offs to local charitable organizations. If you need documentation for tax deductions, let us know ahead of time and we will do our best to help you obtain a donation receipt from the receiving organization.",
  },
  {
    q: "Do I need to be present during the cleanout?",
    a: "Not necessarily. Many families handle estate cleanouts from a distance or while managing other responsibilities. As long as we can access the property and you've approved the quote, our team can complete the job professionally and keep you updated throughout. We treat every home with respect, whether you're there or not.",
  },
  {
    q: "What if there are valuables or sentimental items mixed in?",
    a: "We take great care with every estate. Before we begin, walk us through anything you want set aside — jewelry, documents, photographs, heirlooms. We'll separate those items and make sure they're handled according to your instructions. If something comes up during the cleanout, we'll contact you before making any decisions.",
  },
];

export default function EstateCleanoutPage() {
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
                <span className="text-orange-500">Estate Cleanout</span> in Pearland, TX
              </h1>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                Losing a loved one is hard enough. We make the cleanout part the easy part — compassionate, respectful, and efficient. You focus on what matters. We handle the rest.
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

      {/* What We Handle */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-4">
                We Handle It All, With Care
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Estate cleanouts are more than a hauling job — they involve a lifetime of belongings, memories, and decisions. Our team approaches every estate with patience and respect. We work at your pace, follow your instructions, and treat your family's home the way we'd want our own treated.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From a single room to a complete multi-bedroom home — including the garage, outbuildings, and yard — we handle estates of every size across Pearland and the greater South Houston area.
              </p>

              <h3 className="font-bold text-gray-900 text-lg mb-4">How We Sort & Dispose</h3>
              <div className="space-y-4">
                {HOW_WE_SORT.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-orange-500 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">What We Remove</h3>
              <ul className="space-y-3">
                {HANDLES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
                <p className="text-sm text-blue-800 font-semibold mb-1">Not Sure Where to Start?</p>
                <p className="text-sm text-blue-700">
                  That's okay — many families don't know where to begin. Give us a call and we'll talk through the situation together. There's no pressure and no obligation. We're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">
            Estate Cleanout Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Every estate is different. Pricing is based on volume, access, and time required. We always quote upfront after a walkthrough — no surprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
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
            All quotes include labor, loading, hauling, and responsible disposal. We walk through the property with you first and give you a firm price before starting.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600 text-lg mb-12">A simple, respectful process from first call to final sweep.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Call & Talk It Through",
                body: "Reach us by phone or book online. We'll listen to your situation, answer your questions, and schedule an on-site walkthrough at a time that works for you.",
              },
              {
                step: "2",
                title: "On-Site Walkthrough & Quote",
                body: "We tour the property, understand what stays and what goes, and give you a firm upfront quote. No pressure — take the time you need to decide.",
              },
              {
                step: "3",
                title: "We Handle Everything",
                body: "Our crew arrives on your scheduled day, sorts and removes all items responsibly, and leaves the property clean. We'll keep you informed throughout.",
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
