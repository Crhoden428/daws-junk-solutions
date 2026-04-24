import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Services Pearland TX | Daw's Junk Solutions",
  description:
    "Full-service junk removal in Pearland, TX. Residential, commercial, estate cleanouts, furniture, appliances, yard waste, construction debris and more. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/services` },
  openGraph: {
    title: "Junk Removal Services Pearland TX | Daw's Junk Solutions",
    description:
      "Every kind of junk. One call. Residential, commercial, estate cleanouts, furniture, appliances, yard waste and more in Pearland, TX.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
];

const trustBadges = [
  "Licensed & Insured",
  "Same-Day Available",
  "Upfront Pricing",
  "Eco-Friendly",
  "Family-Owned",
];

export default function ServicesHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* ── Hero ── */}
      <section className="bg-[#111111] text-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-8 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
            Every Kind of Junk.{" "}
            <span className="text-orange-500">One Call.</span>
          </h1>
          <p className="text-gray-300 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed">
            Residential or commercial, big or small — Daw&apos;s handles it.
            Serving Pearland, TX and all of South Houston.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
            >
              <Phone size={20} /> Call {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white text-lg hover:bg-white hover:text-[#111111] transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3">
              All Services
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Click any service for full details, pricing, and FAQs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 hover:border-orange-400 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-display text-2xl text-[#111111] mb-2 group-hover:text-orange-600 transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.shortDesc}</p>
                </div>
                <div className="mt-5 flex items-center gap-1.5 text-orange-600 text-sm font-semibold">
                  Get a free estimate
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-10 bg-[#111111]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white">
                <CheckCircle size={17} className="text-orange-500 shrink-0" />
                <span className="font-semibold text-sm sm:text-base">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not Sure What You Need? ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
                Not Sure What Service You Need?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                No problem. Just tell us what you&apos;ve got and where it is — we&apos;ll figure out the rest. Daw&apos;s handles it all under one roof so you don&apos;t have to shop around.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Mixed loads are our specialty. Full garage with some yard waste and an old appliance? One trip. Estate cleanout with furniture, boxes, and debris? One call.
              </p>

              {/* Phone CTA */}
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 rounded-2xl bg-[#111111] px-7 py-4 hover:bg-gray-800 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 leading-none mb-0.5">Call or text anytime</p>
                  <p className="text-white font-bold text-lg leading-none">{BUSINESS.phone}</p>
                </div>
              </a>

              {/* Area chips */}
              <div className="mt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Service Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/locations/${area.slug}`}
                      className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-xs text-gray-600 hover:border-orange-400 hover:text-orange-600 transition-colors"
                    >
                      <MapPin size={11} className="text-orange-600" />
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-3xl text-[#111111] mb-1">Get a Free Estimate</h3>
              <p className="text-gray-500 text-sm mb-6">
                Describe what you have and we&apos;ll get back to you fast — usually within minutes during business hours.
              </p>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
