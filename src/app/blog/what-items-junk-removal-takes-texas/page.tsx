import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, XCircle } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "What Items Will Junk Removal Companies Take in Texas? | Daw's Junk Solutions",
  description:
    "Complete list of what junk removal companies will and won't take in Texas. Furniture, appliances, electronics, yard waste — plus the 10 things they can't haul.",
  alternates: {
    canonical: `${BUSINESS.domain}/blog/what-items-junk-removal-takes-texas`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "What Items Will Junk Removal Companies Take in Texas?", href: "/blog/what-items-junk-removal-takes-texas" },
]);

export default function BlogWhatItemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-14">
        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          What Items Will Junk Removal Companies Take in Texas?
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Published April 23, 2026 &middot; By Daw&apos;s Junk Solutions Team
        </p>

        {/* Intro */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          The Short Answer: Almost Everything
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If it came into your house, garage, or yard, there&apos;s a very good chance a junk
          removal company can take it out. The list of what we haul is long. The list of what we
          can&apos;t is short — and mostly comes down to hazardous materials that require special
          disposal by law.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Texas doesn&apos;t have any statewide rules that make junk removal unusually restrictive
          compared to other states, but every company has its own policies. This page covers what
          Daw&apos;s Junk Solutions takes — and what we can&apos;t load up — so you know exactly
          what to expect before we show up.
        </p>

        {/* Household Items */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Household Items We Take
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The vast majority of calls we get are for everyday household items. If it came from
          inside a home, we can almost certainly haul it.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Sofas, sectionals, loveseats, and recliners",
            "Beds, bed frames, and headboards",
            "Dressers, nightstands, bookshelves, and desks",
            "Mattresses and box springs (fees may apply — see below)",
            "Washing machines, dryers, dishwashers, and stoves",
            "Refrigerators and freezers (fees may apply — see below)",
            "TVs, monitors, and other electronics (fees may apply — see below)",
            "Clothing, textiles, and bagged donations you just never dropped off",
            "Toys, baby gear, and kids&apos; furniture",
            "Moving boxes, packing materials, and general clutter",
            "Holiday decorations, artificial trees, and seasonal gear",
            "Mirrors, artwork, and picture frames",
            "Area rugs and carpet remnants",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Outdoor */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Outdoor &amp; Yard Items
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Backyard and garage cleanouts are some of our most common jobs. Heat, humidity, and years
          of Houston-area weather can leave outdoor items in rough shape — and we&apos;ll take them
          regardless of condition.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Brush, branches, and bagged yard waste",
            "Lawn mowers (gas must be drained first), weed eaters, and blowers",
            "Patio furniture, umbrellas, and outdoor cushions",
            "Trampolines (we disassemble)",
            "Swing sets and play structures",
            "Hot tubs and above-ground pools (call for quote — these are larger jobs)",
            "Grills and smokers",
            "Fencing sections, gates, and posts",
            "Garden hoses, tools, and pots",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Mid-post CTA */}
        <div className="rounded-xl bg-orange-500 text-white p-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-lg">Need junk removed today?</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 bg-white text-orange-600 font-bold px-5 py-2.5 rounded-lg hover:bg-orange-50 transition"
            >
              <Phone size={18} />
              {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              className="bg-orange-700 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-orange-800 transition text-center"
            >
              Book Online
            </Link>
          </div>
        </div>

        {/* Construction */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Construction &amp; Renovation Debris
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Remodeling your kitchen or bathroom? We haul the debris that contractors often leave
          behind — or that they charge extra to dispose of themselves.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Drywall and sheetrock pieces",
            "Lumber, plywood, and trim",
            "Tile, flooring, and carpet remnants",
            "Old countertops and cabinets",
            "Interior and exterior doors",
            "Windows and window frames",
            "Roofing shingles and underlayment",
            "Concrete and brick (call for large quantities — weight affects pricing)",
            "Insulation (non-asbestos)",
            "Fixtures, sinks, and toilets",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Cannot Take */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Items We Cannot Take
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the short list. These items require specialized disposal and cannot legally be
          mixed with regular junk load. If you have any of these, contact your local hazardous
          waste facility — Harris County and Brazoria County both offer periodic collection events
          for residents.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Motor oil and automotive fluids",
            "Propane tanks (even empty ones)",
            "Latex or oil-based paint",
            "Asbestos-containing materials",
            "Pesticides, herbicides, and fertilizers",
            "Pool chemicals",
            "Batteries in bulk (small quantities in devices are fine)",
            "Bio-hazardous materials",
            "Medical waste or sharps",
            "Explosives or ammunition",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Not sure if an item qualifies as hazardous?</strong> Just call or text us at{" "}
            <a href={BUSINESS.phoneHref} className="text-orange-600 font-semibold hover:underline">
              {BUSINESS.phone}
            </a>{" "}
            and describe it. We&apos;d rather answer the question up front than have everyone waste a
            trip.
          </p>
        </div>

        {/* Special Items */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Special Items With Extra Fees
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A few categories we do take — but they carry additional disposal fees that we&apos;re
          upfront about before we start. These fees aren&apos;t junk removal companies padding their
          margins; they reflect actual disposal costs we pay at the facility level.
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Mattresses:</strong> Most landfills in Texas charge a separate mattress
              disposal fee. We pass this through at cost with no markup.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Refrigerators and freezers:</strong> Units with Freon require certified
              refrigerant recovery before disposal under federal EPA regulations. This adds a small
              fee.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>TVs and monitors:</strong> Electronics can&apos;t go to a standard landfill.
              E-waste recycling carries a per-item fee at certified facilities.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Pianos and safes:</strong> These aren&apos;t hazardous — they&apos;re just very
              heavy. Extra crew time and equipment means a higher labor cost. We&apos;ll quote you
              before we start.
            </span>
          </li>
        </ul>

        {/* Final text CTA */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Not Sure? Just Ask.
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re looking at a pile of stuff and genuinely aren&apos;t sure what can go and
          what can&apos;t, snap a photo and text it to us at{" "}
          <a href={BUSINESS.phoneHref} className="text-orange-600 font-semibold hover:underline">
            {BUSINESS.phone}
          </a>
          . We&apos;ll give you a straight answer, and if we can&apos;t take something, we&apos;ll
          point you in the right direction for disposal.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most jobs in the Pearland area are straightforward: you show us what goes, we quote you on
          the spot, and if the price works for you, we load it up and haul it away the same day.
          No guessing, no surprises.
        </p>

        {/* Booking Form */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 mt-10">
          <h3 className="text-xl font-bold text-[#111111] mb-4">
            Ready to get rid of it? Book online.
          </h3>
          <BookingForm compact />
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
