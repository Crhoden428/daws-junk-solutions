import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Yard Waste Removal Pearland TX | Brush, Limbs & Debris Hauling | Daw's Junk Solutions",
  description:
    "Yard waste removal in Pearland, TX. We haul brush, tree limbs, stumps, leaves, and all outdoor debris. Same-day available. Upfront pricing. 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/services/yard-waste-removal`,
  },
  openGraph: {
    title: "Yard Waste Removal Pearland TX | Daw's Junk Solutions",
    description:
      "Fast yard waste and storm debris hauling in Pearland, TX. Same-day available. Call 281-202-9668.",
    url: `${BUSINESS.domain}/services/yard-waste-removal`,
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Yard Waste Removal", href: "/services/yard-waste-removal" },
];

const whatWeHaul = [
  "Tree limbs and branches (any size pile)",
  "Brush piles and overgrown hedges",
  "Stumps cut into sections",
  "Leaves, yard bags, and grass clippings",
  "Old mulch and uprooted plants",
  "Storm debris and fallen trees",
  "Old sod and ground cover",
  "Hurricane and tropical storm cleanup",
];

const cantTake = [
  "Treated or painted lumber (construction waste)",
  "Soil or dirt loads",
];

const pricingTiers = [
  {
    label: "Small Yard Cleanup",
    range: "$99 – $175",
    description:
      "Light debris, small brush pile, or post-mow bagged waste. Quick in and out.",
  },
  {
    label: "Medium Brush Pile",
    range: "$200 – $350",
    description:
      "Half-trailer load of branches, shrub trimmings, or yard bags.",
  },
  {
    label: "Large Storm Debris",
    range: "$400 – $700+",
    description:
      "Full trailer load — major storm cleanup, downed trees, or full-property clearing.",
  },
];

const steps = [
  {
    number: "1",
    title: "Call or Book Online",
    body: "Tell us what you've got and where you're located. We'll give you a straight price range over the phone — no surprises.",
  },
  {
    number: "2",
    title: "We Show Up & Load",
    body: "Our crew arrives on time, loads every last branch and bag into our RawMaxx dump trailer, and leaves your yard spotless.",
  },
  {
    number: "3",
    title: "Eco-Friendly Disposal",
    body: "We recycle or donate what we can. Green waste goes to proper composting and disposal facilities — not just dumped.",
  },
];

const faqs = [
  {
    q: "Do you haul after storm damage?",
    a: "Absolutely — storm debris cleanup is one of our most common calls. After hurricanes or tropical storms roll through Pearland, trees come down and debris piles up fast. We offer same-day and next-day response for storm cleanup. The sooner you call, the sooner we can get to you.",
  },
  {
    q: "Do stumps need to be cut up?",
    a: "Yes — stumps need to be sectioned into manageable pieces before we can haul them. We don't grind stumps, but if yours is already cut by an arborist or chainsaw, we'll take it. Let us know the size when you call and we'll advise accordingly.",
  },
  {
    q: "Can you do same-day yard debris pickup?",
    a: "In most cases, yes. We serve Pearland and the surrounding areas and keep flexible scheduling for urgent requests. Call us at 281-202-9668 and we'll let you know our earliest slot — same-day is often possible.",
  },
  {
    q: "Do you chip or shred the branches?",
    a: "We don't offer on-site chipping or shredding — we haul and dispose. All branches and brush are loaded into our dump trailer and taken to an appropriate facility. If you're looking for mulch, ask us and we'll try to point you in the right direction.",
  },
];

export default function YardWasteRemovalPage() {
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
              Yard Waste &amp; Storm Debris
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Yard Waste Removal in Pearland, TX
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              South Texas storms don't wait — and neither do we. When a hurricane
              or tropical storm tears through Pearland and drops half your trees on
              your lawn, Daw's Junk Solutions is ready to haul it all away fast. We
              load everything into our RawMaxx dump trailer and leave your yard
              looking clean again.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Whether it's a routine weekend cleanup or an emergency debris haul,
              you get upfront pricing, a reliable local crew, and same-day
              availability when you need it most.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {[
                { icon: CheckCircle, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Available" },
                { icon: MapPin, label: "Local Pearland Crew" },
                { icon: Star, label: "Upfront Pricing" },
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
              Get a Free Quote
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Tell us what you need hauled. We respond fast.
            </p>
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* What we haul */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What We Haul
            </h2>
            <p className="text-gray-600 text-lg">
              From a bag of leaves to a full yard of post-hurricane wreckage, we
              handle all residential and light-commercial yard waste in Pearland
              and the surrounding area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {whatWeHaul.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="font-semibold text-gray-900 mb-2">
              What we can't take:
            </p>
            <ul className="space-y-1">
              {cantTake.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 text-sm flex items-start gap-2"
                >
                  <span className="text-orange-500 font-bold mt-0.5">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Yard Waste Removal Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Pricing is based on volume and load size. You'll always know the cost
              before we lift a finger — no hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.label}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-gray-900 text-lg mb-2">
                  {tier.label}
                </p>
                <p className="text-3xl font-extrabold text-orange-500 mb-3">
                  {tier.range}
                </p>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Exact price confirmed before we start. Call{" "}
            <a
              href={BUSINESS.phoneHref}
              className="text-orange-500 font-semibold hover:underline"
            >
              {BUSINESS.phone}
            </a>{" "}
            for a fast estimate.
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
