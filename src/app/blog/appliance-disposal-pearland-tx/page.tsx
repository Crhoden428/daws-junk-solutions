import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How to Dispose of Old Appliances in Pearland, TX | Daw's Junk Solutions",
  description:
    "Your options for appliance disposal in Pearland, TX — from curbside pickup to junk removal. What to do with old fridges, washers, dryers, and more. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/blog/appliance-disposal-pearland-tx` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Appliance Disposal Pearland TX", href: "/blog/appliance-disposal-pearland-tx" },
];

export default function BlogApplianceDisposalPage() {
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
          <span className="text-gray-600">Appliance Disposal</span>
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          How to Dispose of Old Appliances in Pearland, TX
        </h1>
        <p className="text-sm text-gray-400 mb-10">Updated April 2026 · By Daw&apos;s Junk Solutions</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          You&apos;ve got an old fridge sitting in your garage, a washer the repairman said isn&apos;t worth fixing, or a dryer that&apos;s been taking up space since your last move. Now what? Appliance disposal in Pearland is trickier than most people expect — you can&apos;t just drag it to the curb and hope for the best. Here&apos;s every option available to you.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Option 1: Call a Junk Removal Company (Fastest)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the most convenient option by far. A junk removal crew — like Daw&apos;s — will show up same day or next day, load the appliance themselves (you don&apos;t touch it), and haul it away. Pricing starts around $99–$150 for a single appliance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We disconnect standard appliances ourselves. If it&apos;s hardwired (like an electric range) or has a gas line, you&apos;ll need a plumber or electrician to disconnect first — we can haul it once it&apos;s free.
        </p>
        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="font-bold text-orange-800 mb-1">Freon appliances (fridges, AC units, dehumidifiers)</p>
          <p className="text-orange-700 text-sm">These require EPA-compliant Freon recovery before disposal. We handle this — there&apos;s a $25 environmental fee that&apos;s always disclosed upfront.</p>
        </div>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Option 2: City of Pearland Bulk Trash Pickup</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pearland does offer bulk item pickup through its waste services, but it&apos;s scheduled — not on-demand. You&apos;ll need to contact the City of Pearland&apos;s public works department to schedule a pickup and confirm what&apos;s accepted. Wait times can be several days to a few weeks.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Free (covered by your utility bill)",
            "Limited to curbside — you have to move it out yourself",
            "Not always available for all appliance types",
            "Wait time: days to weeks, not same-day",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
              {i < 1 ? <CheckCircle size={15} className="text-orange-600 mt-0.5 shrink-0" /> : <XCircle size={15} className="text-gray-400 mt-0.5 shrink-0" />}
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Option 3: Retailer Haul-Away</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re buying a new appliance, many retailers (Home Depot, Lowe&apos;s, Best Buy) will haul away your old one for free or a small fee when they deliver the new unit. This only works if you&apos;re replacing the appliance, and you have to arrange it at time of purchase.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Option 4: Donate It (If It Still Works)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Working appliances in decent condition can be donated to local organizations in the Houston area. Habitat for Humanity ReStore in Houston accepts working appliances. Salvation Army may also pick up depending on condition.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Daw&apos;s, when we haul appliances, we assess what&apos;s in working shape before dropping anything at the landfill. If it can be donated, we take it there first.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Option 5: Scrap Metal Recyclers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Appliances are mostly metal, which means scrap yards will take them — and sometimes even pay you a small amount per pound. The catch: you have to haul it there yourself, and the payout is usually only a few dollars. Not worth it unless you have a truck and time to spare.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">What You Cannot Do in Pearland</h2>
        <ul className="space-y-2 mb-6">
          {[
            "Leave a refrigerator at the curb with its door on (federal law — suffocation hazard, doors must be removed or secured)",
            "Dump appliances in vacant lots or dumpsters you don&apos;t own — illegal in Brazoria County",
            "Put appliances in your regular recycle bin",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <XCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">The Easiest Option: Let Us Handle It</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For most Pearland homeowners, calling a junk removal company is the fastest and most hassle-free path. You get same-day or next-day pickup, you don&apos;t lift a finger, and the appliance is handled correctly — Freon recovered, metal recycled, usable parts donated.
        </p>

        {/* Mid-post CTA */}
        <div className="rounded-xl bg-orange-600 text-white p-6 my-8">
          <p className="font-bold text-xl mb-2">Need an appliance hauled away today?</p>
          <p className="text-orange-100 mb-4 text-sm">Same-day available in Pearland. Upfront pricing. We disconnect and haul.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-orange-600 px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
            <Phone size={16} /> Call {BUSINESS.phone}
          </a>
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mt-8">
          <h3 className="font-display text-2xl text-[#111111] mb-1">Get a Free Appliance Removal Estimate</h3>
          <p className="text-gray-500 text-sm mb-5">Tell us what you have and where you are — we&apos;ll get you a price in minutes.</p>
          <BookingForm compact />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm font-bold text-gray-500 mb-3">Related reading</p>
          <div className="flex flex-col gap-2">
            <Link href="/services/appliance-removal" className="text-orange-600 hover:underline text-sm">Appliance Removal Service — Pearland TX →</Link>
            <Link href="/blog/junk-removal-cost-pearland-tx" className="text-orange-600 hover:underline text-sm">How Much Does Junk Removal Cost in Pearland? →</Link>
            <Link href="/pricing" className="text-orange-600 hover:underline text-sm">Full Pricing Guide →</Link>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
