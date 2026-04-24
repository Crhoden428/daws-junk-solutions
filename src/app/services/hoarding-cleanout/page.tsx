import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Hoarding Cleanout Pearland TX | Discreet & Judgment-Free | Daw's Junk Solutions",
  description:
    "Hoarding cleanout services in Pearland, TX. Discreet, respectful, and judgment-free. We handle homes of any condition. Upfront pricing, licensed & insured. 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/services/hoarding-cleanout`,
  },
  openGraph: {
    title: "Hoarding Cleanout Pearland TX | Daw's Junk Solutions",
    description:
      "Compassionate, judgment-free hoarding cleanout in Pearland, TX. Discreet, licensed & insured. Call 281-202-9668.",
    url: `${BUSINESS.domain}/services/hoarding-cleanout`,
    siteName: "Daw's Junk Solutions",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Hoarding Cleanout", href: "/services/hoarding-cleanout" },
];

const whatWeHandle = [
  "Accumulated household items of any kind",
  "Newspapers, magazines, and paper piles",
  "Clothing and linens — bagged or loose",
  "Furniture, sofas, and mattresses",
  "Stacked boxes and storage containers",
  "Small appliances and electronics",
  "General clutter from floor to ceiling",
  "Room-by-room cleanout at your pace",
];

const ourApproach = [
  {
    title: "We Work at Your Pace",
    body: "There is no rushing. We take direction from you or your family member on what stays and what goes. Every decision is yours to make.",
  },
  {
    title: "Complete Discretion",
    body: "Our crew arrives in unmarked vehicles when requested. We don't discuss your job with neighbors or outsiders. Your privacy matters.",
  },
  {
    title: "Zero Judgment",
    body: "We've seen it all, and we're not here to judge — we're here to help. Every member of our crew treats every home and every client with dignity and respect.",
  },
];

const pricingTiers = [
  {
    label: "Half-Home Cleanout",
    range: "$500 – $1,000+",
    description:
      "Partial home — a few heavily affected rooms or half the living space.",
  },
  {
    label: "Full-Home Cleanout",
    range: "$1,000 – $3,000+",
    description:
      "Whole-home cleanout including multiple rooms, hallways, and high-volume areas.",
  },
];

const steps = [
  {
    number: "1",
    title: "Private Walkthrough First",
    body: "We start with a respectful, no-obligation walkthrough to understand the scope. We listen more than we talk. Pricing is always discussed and agreed upon before any work starts.",
  },
  {
    number: "2",
    title: "Room by Room, Your Way",
    body: "We work at your pace, room by room. You decide what goes. We don't make assumptions about any item — if you're unsure, we'll set it aside until you're ready.",
  },
  {
    number: "3",
    title: "Responsible Removal",
    body: "Items in good condition are donated before anything goes to the landfill. We recycle what we can. The goal is always to give things a second life when possible.",
  },
];

const faqs = [
  {
    q: "How do you approach a hoarding cleanout sensitively?",
    a: "We begin every hoarding cleanout with a private walkthrough — no pressure, no judgment. Our crew is trained to work calmly and respectfully. We take direction from the occupant or family on what gets removed, we don't rush, and we never make anyone feel ashamed. The process moves at whatever pace is comfortable. We've helped families through this before, and we understand how emotional it can be.",
  },
  {
    q: "Will you work with family members or social workers?",
    a: "Yes — we frequently coordinate with adult children, case managers, social workers, and estate attorneys. If a family member is managing the cleanout on behalf of a loved one, we'll communicate directly with them and follow their lead. We're happy to work alongside mental health professionals or social services when they're involved.",
  },
  {
    q: "How long does a hoarding cleanout take?",
    a: "It depends on the size of the home and the volume of accumulated items. A partial cleanout of two or three heavily affected rooms might take a single day. A full-home cleanout in a severe situation can span two to three days or more. We'll give you a realistic time estimate during the walkthrough and keep you informed throughout the process.",
  },
  {
    q: "Do you help identify items to keep vs. remove?",
    a: "We can, if that's helpful — but we follow your lead completely. Some clients want us to take everything. Others want to sort through items themselves and have us load as they go. We can also set items aside in a staging area for review before they leave the home. Whatever approach feels right for you or your loved one, we'll make it work.",
  },
];

export default function HoardingCleanoutPage() {
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
              Compassionate &amp; Confidential
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Hoarding Cleanout in Pearland, TX
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Taking this step — whether for yourself or a loved one — takes
              courage. We want you to know that when you call Daw's Junk
              Solutions, you'll be treated with complete respect, privacy, and
              zero judgment. Not before, not during, not after.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-5">
              We're a family-owned, locally operated business in Pearland. We
              understand that every situation is different, and that behind every
              cleanout is a person who deserves to be treated with dignity. Our
              crew works quietly, carefully, and at whatever pace is right for
              you.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              If you're not sure where to start, call us. We'll answer your
              questions, talk through the process, and let you decide if we're
              the right fit — no pressure, ever.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {[
                { icon: CheckCircle, label: "Licensed & Insured" },
                { icon: Clock, label: "Discreet Scheduling" },
                { icon: MapPin, label: "Local Family Business" },
                { icon: Star, label: "Zero Judgment" },
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
              {BUSINESS.phone} — Confidential Call
            </a>
          </div>

          {/* Right column — booking card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <p className="text-gray-900 font-bold text-xl mb-1">
              Request a Private Consultation
            </p>
            <p className="text-gray-500 text-sm mb-5">
              All inquiries are completely confidential. We'll reach out gently
              and only when you're ready.
            </p>
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              What We Handle
            </h2>
            <p className="text-gray-600 text-lg">
              We work with homes in any condition — from moderate accumulation to
              severe, long-term hoarding situations. There is no job we won't take
              on with care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
            {whatWeHandle.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Our approach cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ourApproach.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 mb-3" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Hoarding Cleanout Pricing
            </h2>
            <p className="text-gray-600 text-lg">
              Because every situation is different, pricing is always determined
              after an in-person or photo walkthrough — never a blind estimate.
              You'll know the full cost before we begin, and there will be no
              surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
          <div className="max-w-2xl mx-auto mt-8 bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              These ranges reflect typical scenarios. Final pricing is always
              confirmed in person — never over the phone based on a guess. Call{" "}
              <a
                href={BUSINESS.phoneHref}
                className="text-orange-500 font-semibold hover:underline"
              >
                {BUSINESS.phone}
              </a>{" "}
              and we'll schedule a private walkthrough at your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#111111] text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 text-center text-base max-w-2xl mx-auto mb-12">
            We never rush a hoarding cleanout. Here's how we approach it — with
            patience, respect, and care at every step.
          </p>
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
