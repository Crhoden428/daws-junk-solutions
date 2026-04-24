import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Leaf } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Eco-Friendly Junk Disposal: Where Does Your Junk Actually Go? | Daw's Junk Solutions",
  description:
    "Wondering what happens to your junk after Daw's hauls it away? Here's exactly how we sort, donate, recycle, and minimize what hits the landfill in Pearland, TX.",
  alternates: { canonical: `${BUSINESS.domain}/blog/eco-friendly-junk-disposal` },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Eco-Friendly Junk Disposal", href: "/blog/eco-friendly-junk-disposal" },
];

export default function BlogEcoFriendlyPage() {
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
          <span className="text-gray-600">Eco-Friendly Disposal</span>
        </nav>

        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 mb-6">
          <Leaf size={14} className="text-green-600" />
          <span className="text-green-700 text-sm font-semibold">Eco-Friendly Practices</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          Eco-Friendly Junk Disposal: Where Does Your Junk Actually Go?
        </h1>
        <p className="text-sm text-gray-400 mb-10">Updated April 2026 · By Daw&apos;s Junk Solutions</p>

        <p className="text-gray-700 leading-relaxed mb-6">
          When a junk removal crew hauls away your stuff, it&apos;s easy to assume it all ends up in a landfill. At Daw&apos;s, that&apos;s not how we operate. Here&apos;s a transparent look at what actually happens to your junk after we load it onto our trailer — and how we work to keep as much as possible out of Brazoria County landfills.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Stop 1: The Sort</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before anything goes to a landfill, we sort what we&apos;ve hauled into categories. Some of this happens on the job site as we load — we can tell on sight whether a piece of furniture is donation-worthy or truly trashed. The rest gets sorted at our facility before final disposal.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our goal on every job: landfill last. We&apos;re not perfect — some loads are genuinely just garbage — but we work the chain before we write anything off.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Stop 2: Donation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Furniture in good shape, working appliances, usable household goods, and clothing go to donation centers in the Houston area. We work with:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Habitat for Humanity ReStore (Houston locations)",
            "The Salvation Army",
            "Local community organizations and churches in Pearland and Brazoria County",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle size={15} className="text-green-600 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you need a donation receipt for tax purposes, let us know when you book — we&apos;ll do what we can to coordinate and document.
        </p>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Stop 3: Recycling</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Metal is the biggest category here. Old appliances, scrap metal, bed frames, exercise equipment — all of that goes to metal recyclers, not a landfill. Steel and aluminum are infinitely recyclable and always have a market.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Appliances → scrap metal recyclers (Freon recovered first per EPA rules)",
            "Electronics → certified e-waste recyclers (TVs, computers, monitors)",
            "Cardboard and paper → local recycling facilities",
            "Mattresses → mattress recycling facilities when available (steel springs, foam, and fabric are all recyclable)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle size={15} className="text-green-600 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Stop 4: Landfill (Last Resort)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          What can&apos;t be donated, sold, or recycled goes to a licensed landfill in Brazoria County. We use permitted disposal facilities — no illegal dumping, no cutting corners. The landfill fee is built into your quoted price; there are no surprise charges after the job.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Realistically, on a typical residential haul — furniture, appliances, garage clutter — we estimate 40–60% of the load is diverted from the landfill through donation and recycling. Mixed garbage loads (bags of trash, food waste, truly broken items) have a lower diversion rate.
        </p>

        <div className="rounded-xl bg-green-50 border border-green-200 p-5 my-6">
          <p className="font-bold text-green-800 mb-2 flex items-center gap-2"><Leaf size={16} />Our commitment</p>
          <p className="text-green-700 text-sm leading-relaxed">
            We&apos;re not going to greenwash this. We&apos;re a junk removal company — we haul a lot of stuff, and not all of it can be saved. But we genuinely try to do right by Pearland and South Texas. We live here too. We&apos;d rather donate your old couch to a family that needs it than dump it in a landfill.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">Hazardous Material — What We Can&apos;t Take</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Some materials require specialized hazmat disposal that goes beyond what we can handle. We can&apos;t take:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Motor oil, gasoline, or other flammable liquids",
            "Paint (latex or oil-based)",
            "Pesticides and chemicals",
            "Asbestos-containing materials",
            "Propane tanks",
            "Biological or medical waste",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          For hazardous waste disposal in Pearland, contact Brazoria County or the City of Pearland&apos;s household hazardous waste program — they run periodic free drop-off events.
        </p>

        {/* Mid-post CTA */}
        <div className="rounded-xl bg-orange-600 text-white p-6 my-8">
          <p className="font-bold text-xl mb-2">Ready to clear out responsibly?</p>
          <p className="text-orange-100 mb-4 text-sm">Same-day junk removal in Pearland. We sort, donate, and recycle before the landfill.</p>
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white text-orange-600 px-6 py-3 font-bold hover:bg-orange-50 transition-colors">
            <Phone size={16} /> Call {BUSINESS.phone}
          </a>
        </div>

        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 mt-8">
          <h3 className="font-display text-2xl text-[#111111] mb-1">Book an Eco-Friendly Pickup</h3>
          <p className="text-gray-500 text-sm mb-5">Same-day available in Pearland, Friendswood, Manvel, League City, and South Houston.</p>
          <BookingForm compact />
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm font-bold text-gray-500 mb-3">Related reading</p>
          <div className="flex flex-col gap-2">
            <Link href="/services/junk-removal" className="text-orange-600 hover:underline text-sm">Full-Service Junk Removal — Pearland TX →</Link>
            <Link href="/blog/what-items-junk-removal-takes-texas" className="text-orange-600 hover:underline text-sm">What Items Will Junk Removal Take in Texas? →</Link>
            <Link href="/about" className="text-orange-600 hover:underline text-sm">About Daw&apos;s Junk Solutions →</Link>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
