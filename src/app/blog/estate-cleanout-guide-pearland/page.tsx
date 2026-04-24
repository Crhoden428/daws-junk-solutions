import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Estate Cleanout Guide for Pearland Families | Daw's Junk Solutions",
  description:
    "Everything Pearland families need to know about estate cleanouts — what to expect, what to save, donation options, and how to make a hard process easier. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/blog/estate-cleanout-guide-pearland` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Estate Cleanout Guide", href: "/blog/estate-cleanout-guide-pearland" },
];

export default function BlogEstateCleanoutGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-14 sm:py-20">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-orange-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">Estate Cleanout Guide</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          Estate Cleanout Guide for Pearland Families
        </h1>
        <p className="text-sm text-gray-400 mb-10">Updated April 2026 · By Daw&apos;s Junk Solutions</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Losing someone you love is hard enough. Having to clear out their home — often under time pressure from a lease, estate sale, or family schedule — adds a layer of stress that most people aren&apos;t prepared for. This guide is meant to help Pearland families understand what an estate cleanout involves, how to approach it, and how to make the whole process as smooth as possible.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Step 1: Don&apos;t Rush Into It</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unless there&apos;s a hard deadline (lease end, sale closing date), give yourself at least a few days before calling anyone to haul things away. Walk through the home with family members and identify items of sentimental or monetary value. Things that look like junk sometimes aren&apos;t — old documents, jewelry tucked in drawers, collectibles, cash.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A good rule: do one walk-through purely to look, not to decide. Then do a second with the intent to sort.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Step 2: Sort Into Four Piles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Before calling us, it helps to mentally (or physically) divide the home&apos;s contents into:</p>
        <ul className="space-y-3 mb-6">
          {[
            { label: "Keep", desc: "Family heirlooms, important documents, jewelry, photos, items with personal value" },
            { label: "Sell", desc: "Furniture, antiques, collectibles, tools — consider an estate sale company or Facebook Marketplace" },
            { label: "Donate", desc: "Working appliances, clothing, furniture in good shape — we&apos;ll coordinate donations when we haul" },
            { label: "Haul away", desc: "Everything else — this is where Daw&apos;s comes in" },
          ].map(({ label, desc }) => (
            <li key={label} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-orange-600 mt-0.5 shrink-0" />
              <span className="text-gray-700"><strong>{label}:</strong> {desc}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Step 3: Handle Paperwork First</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before anything leaves the home, locate and secure important documents: will, deed, insurance policies, financial account records, birth certificates, Social Security cards, tax returns. These can be in filing cabinets, desk drawers, a safe, or even tucked in books. Have someone methodically check every drawer before it&apos;s emptied.
        </p>

        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="font-bold text-orange-800 mb-1">Note on valuables</p>
          <p className="text-orange-700 text-sm">We do not handle cash, jewelry, or legal documents — those should be removed and secured by family members before we arrive. We&apos;ll always ask if there are items to set aside before we start loading.</p>
        </div>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">What We Handle in an Estate Cleanout</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Once the family has taken what they want, we clear everything else:</p>
        <ul className="space-y-2 mb-6">
          {[
            "All furniture — beds, dressers, sofas, tables, chairs",
            "Appliances — fridge, washer, dryer, stove",
            "Garage contents — tools, equipment, outdoor gear",
            "Clothing, linens, boxes of miscellaneous items",
            "Yard items — patio furniture, garden equipment",
            "Mattresses and box springs",
            "Electronics and small appliances",
            "General household clutter — everything left over",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle size={15} className="text-orange-600 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">How We Handle Donations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We don&apos;t dump usable items. Furniture in good shape, working appliances, and gently used household goods get sorted and taken to local donation centers — Habitat for Humanity ReStore, Salvation Army, or other Pearland-area organizations. If you need a donation receipt for tax purposes, let us know ahead of time and we&apos;ll do our best to coordinate.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">How Long Does an Estate Cleanout Take?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A typical single-family home in Pearland takes one full day with a crew of two. Larger homes or homes with heavy accumulation (decades of belongings) may take two days. We&apos;ll give you an accurate time estimate after a walkthrough.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">What Does an Estate Cleanout Cost?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pricing depends on the volume of items and the size of the home. Rough ranges:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Partial cleanout (a few rooms): $300 – $600",
            "Small home or condo (full): $600 – $1,000",
            "Standard single-family home (full): $800 – $1,500",
            "Large home with garage and outbuildings: $1,500 – $3,000+",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle size={15} className="text-orange-600 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          We always quote before we start. No surprises — especially not during an already difficult time.
        </p>

        {/* Mid-post CTA */}
        <div className="rounded-xl bg-orange-600 text-white p-6 my-8">
          <p className="font-bold text-xl mb-2">We&apos;ll handle the hard part.</p>
          <p className="text-orange-100 mb-4 text-sm">Compassionate estate cleanouts in Pearland, TX. Call or text — we&apos;ll work around your family&apos;s schedule.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-orange-600 px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
            <Phone size={16} /> Call {BUSINESS.phone}
          </a>
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mt-8">
          <h3 className="font-display text-2xl text-[#111111] mb-1">Request a Free Estate Cleanout Estimate</h3>
          <p className="text-gray-500 text-sm mb-5">No pressure. We&apos;ll give you a price after a quick walkthrough — before anything is touched.</p>
          <BookingForm compact />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm font-bold text-gray-500 mb-3">Related reading</p>
          <div className="flex flex-col gap-2">
            <Link href="/services/estate-cleanout" className="text-orange-600 hover:underline text-sm">Estate Cleanout Service — Pearland TX →</Link>
            <Link href="/services/hoarding-cleanout" className="text-orange-600 hover:underline text-sm">Hoarding Cleanout Services →</Link>
            <Link href="/pricing" className="text-orange-600 hover:underline text-sm">Full Pricing Guide →</Link>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
