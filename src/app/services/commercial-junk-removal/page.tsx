import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Building2, Briefcase } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Commercial Junk Removal Pearland TX | Office & Retail Cleanouts | Daw's Junk Solutions",
  description:
    "Commercial junk removal in Pearland, TX. Office furniture, retail fixtures, renovation debris — cleared fast with minimal disruption. Upfront pricing. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/services/commercial-junk-removal` },
  openGraph: {
    title: "Commercial Junk Removal Pearland TX | Daw's Junk Solutions",
    description:
      "Office furniture, retail fixtures, renovation debris — cleared fast with minimal disruption to your business. We work around your schedule. 281-202-9668.",
  },
};

const whatWeHandle = [
  "Office desks, chairs & workstations",
  "Cubicle systems & partitions",
  "Filing cabinets & bookshelves",
  "Conference tables & lobby furniture",
  "Retail shelving & display fixtures",
  "Restaurant equipment & booth seating",
  "Renovation debris — drywall, flooring, fixtures",
  "Electronics & old computers",
  "Signage & promotional materials",
  "Warehouse clutter & pallet racking",
  "Break room appliances & furniture",
  "Miscellaneous commercial junk",
];

const pricingRows = [
  { label: "Small office cleanout (1–3 rooms)", price: "$200 – $400" },
  { label: "Medium office or retail space", price: "$400 – $700" },
  { label: "Large commercial / multi-room", price: "On-site quote" },
];

const faqs = [
  {
    q: "Can you work after hours to avoid disrupting business?",
    a: "Absolutely — we schedule early mornings, evenings, and weekends to minimize impact on your operations. Just tell us when works best and we'll build our schedule around yours.",
  },
  {
    q: "Do you handle IT equipment disposal?",
    a: "We remove computers, monitors, servers, and other electronics from the premises. We are not a certified data destruction company, so if you have data security requirements we recommend wiping or degaussing drives before we haul. We'll take care of the physical disposal.",
  },
  {
    q: "Do you provide itemized removal receipts for accounting?",
    a: "Yes. We can provide a written summary of what was removed at the end of the job. If your accounting team needs specific documentation for fixed-asset write-offs or waste disposal records, let us know in advance and we'll make sure you have what you need.",
  },
  {
    q: "Can you haul a full office build-out in one day?",
    a: "For most standard office cleanouts — even large ones — yes. Our RawMaxx dump trailer holds a significant volume and we work fast. For very large commercial spaces or multi-story buildings, we'll give you an honest timeline and may schedule across two days. We'll tell you upfront.",
  },
];

export default function CommercialJunkRemovalPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Commercial Junk Removal", href: "/services/commercial-junk-removal" },
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
            <span className="text-white">Commercial Junk Removal</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-4">
                <Briefcase size={14} className="text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">For Businesses &amp; Contractors</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none mb-5">
                Commercial Junk Removal in{" "}
                <span className="text-orange-500">Pearland, TX</span>
              </h1>
              <p className="text-gray-300 text-xl mb-4 leading-relaxed">
                Relocating your office? Closing a retail location? Finishing a renovation? We clear office furniture, fixtures, and debris fast — working around your schedule so your business keeps running.
              </p>
              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                Early mornings, evenings, weekends — whatever window works for you. Upfront pricing, no hidden fees, and a crew that respects your space.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1.5"><Clock size={15} /> Flexible Scheduling</span>
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
              <p className="text-gray-500 text-sm mb-6">Early morning &amp; weekend slots available.</p>
              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── Schedule flexibility strip ── */}
      <section className="bg-orange-600 py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-bold text-lg sm:text-xl">
            We work around your business hours — early mornings, evenings &amp; weekends available.{" "}
            <a href={BUSINESS.phoneHref} className="underline underline-offset-2 hover:text-orange-100 transition-colors">
              Call to schedule.
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
                What We Remove from Commercial Spaces
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you're clearing a single office or a 5,000-square-foot retail floor, we handle the loading and hauling from start to finish. No job is too specific or too large.
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
                Cannot haul: regulated hazardous waste, motor oil, asbestos, or chemical drums. We'll let you know if we spot anything that needs a specialist.
              </p>
            </div>

            {/* Who we serve */}
            <div>
              <h2 className="font-display text-4xl text-[#111111] mb-6">Who We Work With</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Building2 size={22} className="text-orange-600" />,
                    title: "Business Owners & Office Managers",
                    desc: "Office relocations, downsizing, or full build-out removals. We clear your space without disrupting your team.",
                  },
                  {
                    icon: <Briefcase size={22} className="text-orange-600" />,
                    title: "Retail Store & Restaurant Owners",
                    desc: "Closing, remodeling, or refreshing your space? We haul out shelving, fixtures, equipment, and booth seating in one go.",
                  },
                  {
                    icon: <CheckCircle size={22} className="text-orange-600" />,
                    title: "Contractors & Project Managers",
                    desc: "Need renovation debris cleared fast between trades? We flex to your project timeline and keep the site moving.",
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
            Commercial Junk Removal Pricing
          </h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Pricing is based on volume and labor. Large commercial jobs are quoted on-site so we can account for access, floor level, and item weight. You always see the price before we start.
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
            Price includes labor, fuel &amp; disposal. Always disclosed before work begins. After-hours scheduling available at standard rates.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl text-center text-[#111111] mb-10">
            How Commercial Cleanouts Work
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                n: "01",
                title: "Schedule Around Your Business",
                desc: "Call or fill out the form. Tell us the space size and preferred window — early morning, after close, or weekend. We build around you.",
              },
              {
                n: "02",
                title: "Walk-Through & Upfront Quote",
                desc: "We assess the volume, access points, and any special handling needs — then give you a firm price before we start. No surprises.",
              },
              {
                n: "03",
                title: "We Clear It, You Move On",
                desc: "Our crew loads and hauls everything out efficiently. Space is clear, debris is gone, and your next phase can start on time.",
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
            Commercial Removal FAQs
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
            Commercial Junk Removal Available In
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
