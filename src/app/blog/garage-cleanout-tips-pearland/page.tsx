import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, XCircle } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Garage Cleanout Checklist for Pearland Homeowners | Daw's Junk Solutions",
  description:
    "Getting ready for a garage cleanout in Pearland? This 5-minute checklist helps you prepare so the job goes faster and costs less. Better Call Daw.",
  alternates: {
    canonical: `${BUSINESS.domain}/blog/garage-cleanout-tips-pearland`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Garage Cleanout Checklist: How to Prep Before We Arrive", href: "/blog/garage-cleanout-tips-pearland" },
]);

export default function BlogGarageCleanoutTipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-14">
        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          Garage Cleanout Checklist: How to Prep Before We Arrive
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Published April 23, 2026 &middot; By Daw&apos;s Junk Solutions Team
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          The Good News: You Don&apos;t Have to Do Much
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When people book a garage cleanout, one of the first questions we get is: &ldquo;Should I
          start moving stuff before you arrive?&rdquo; The short answer is no. That&apos;s our
          job. The whole point of hiring a junk removal crew is that you don&apos;t have to haul
          anything yourself.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          That said, there are a few minutes of mental prep that will make the job go faster,
          reduce the chance of something valuable accidentally going out the door, and potentially
          lower your bill. This checklist takes about five minutes and covers everything worth doing
          before a Daw&apos;s crew shows up.
        </p>

        {/* Step 1 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Step 1: Decide What Stays and What Goes
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is the only decision-making that&apos;s really on you, and it doesn&apos;t have to
          be complicated. Do a mental (or physical) walkthrough of the garage before we arrive.
          Think in categories: tools you actually use, sports gear that still gets pulled out,
          seasonal items with a real home somewhere. Everything else is fair game.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re dealing with a lot of mixed items — some keep, some go — a quick trick is
          to use painter&apos;s tape or sticky notes to mark things you&apos;re keeping. Slap a
          piece of tape on the lawn mower, the tool chest, the holiday boxes you actually open.
          The crew will work around anything that&apos;s marked or pointed out as a keeper.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          You don&apos;t have to make every decision before we arrive. During the walkthrough at the
          start of the job, you&apos;ll tell us what goes and what stays, and we can pause on
          anything you&apos;re uncertain about. We&apos;re not going to throw something out without
          your say-so.
        </p>

        {/* Step 2 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Step 2: Clear a Path to the Items (If You Can)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You don&apos;t need to reorganize the whole garage. But if items you want hauled are
          buried behind things you&apos;re keeping, it helps to create just enough space for a
          dolly to get through — roughly 3 feet wide.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In a really packed garage, we&apos;ll often work from front to back: load what&apos;s
          accessible first, then go back in as space opens up. This is normal. You don&apos;t
          need to pre-sort the garage into &ldquo;keep&rdquo; and &ldquo;junk&rdquo; piles before
          we get there. We deal with disorganized garages every single day.
        </p>

        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>One thing to avoid:</strong> Don&apos;t move heavy items yourself. You hired us
            so you don&apos;t have to do that. If something heavy is in the way, leave it. The crew
            will handle it. Moving things yourself before we arrive can create more confusion about
            what&apos;s staying vs. going — and it&apos;s not worth the risk of injury.
          </p>
        </div>

        {/* Step 3 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Step 3: Set Aside Anything Valuable or Sentimental
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before we arrive, physically move any items you want to keep into a corner, into the
          house, or into another room — especially if they look like junk to someone who
          doesn&apos;t know your history with them. A beat-up box might have tools worth keeping.
          An old frame might matter to someone.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Things to think through specifically:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Documents, files, or boxes with paperwork — move these to the house before we start",
            "Tools you want to keep — set them on a workbench or in a bin you point out",
            "Items with sentimental value that you haven't gone through yet",
            "Anything you plan to sell or donate — pull it out of the cleanout pile",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          We&apos;re careful and we ask questions when something is ambiguous. But the safest
          approach is to physically separate keepers before the job starts rather than relying on
          verbal instructions in a busy, loud garage environment.
        </p>

        {/* Mid-post CTA */}
        <div className="rounded-xl bg-orange-500 text-white p-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-lg">Ready to schedule your garage cleanout?</p>
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

        {/* Step 4 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Step 4: Know Your &ldquo;Can&apos;t Take&rdquo; Items
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A handful of common garage items require special disposal and can&apos;t go in our truck.
          Knowing these ahead of time prevents surprises during the job. If you have any of the
          following, set them aside before we arrive and plan for separate disposal:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Motor oil and automotive fluids — take to an AutoZone, O'Reilly, or Pearland city collection",
            "Paint cans (latex or oil-based) — Brazoria County offers periodic HazMat collection events",
            "Propane tanks, even empty ones",
            "Pesticides, herbicides, and pool chemicals",
            "Car batteries (single batteries in devices are usually fine)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re not sure whether something qualifies as hazardous, just text us a photo.
          We&apos;ll tell you before the crew arrives so nothing gets left behind unexpectedly.
        </p>

        {/* Step 5 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Step 5: Be Home for the Walkthrough (or Have Someone There)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The first 10 minutes of every garage cleanout job is a walkthrough. You walk the crew
          through the space, tell them what goes and what stays, we give you a price, and you
          approve it. That&apos;s the one moment where you need to be present or have someone who
          can make those decisions.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          After the walkthrough and price approval, you&apos;re free to go. You don&apos;t have to
          stand around and supervise. The crew will do the work, and we&apos;ll text you when
          we&apos;re finished.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you genuinely can&apos;t be there — say, it&apos;s a rental property or an estate
          situation — call us ahead of time and we can work out an alternative. Sometimes a
          family member, property manager, or even a detailed phone walkthrough before the job
          can substitute. We&apos;re flexible.
        </p>

        {/* What We Do */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          What We Do From There
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once you&apos;ve approved the quote, here&apos;s what happens:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "We load everything you've pointed out — furniture, bags, equipment, debris, all of it",
            "Heavy items get dollied out properly so nothing damages your floors or walls",
            "We make multiple passes if needed to get everything cleared",
            "Once the garage is empty (or cleared to your satisfaction), we sweep the floor",
            "We haul everything to the appropriate facility — donation centers for reusable items, recycling for eligible materials, landfill for the rest",
            "Done. Usually in 1–3 hours depending on volume.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Garage Cleanout Pricing in Pearland
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Garage cleanout pricing is based on volume — how much space your items take up in the
          truck. Here are realistic ranges for Pearland jobs:
        </p>
        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Small cleanout</strong> (1/4 truck — a few items, boxes, single appliance):
              $149–$249
            </li>
            <li>
              <strong>Medium cleanout</strong> (1/2 truck — partial garage, several pieces of
              furniture): $250–$375
            </li>
            <li>
              <strong>Full garage cleanout</strong> (full truck — years of accumulation, major
              haul): $450–$700+
            </li>
          </ul>
          <p className="text-sm text-gray-500 mt-3">
            Special items like mattresses, refrigerators, TVs, or pianos may have additional fees.
            We&apos;ll tell you before we start — no surprises.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For full pricing details, see our{" "}
          <Link href="/pricing" className="text-orange-600 font-semibold hover:underline">
            pricing page
          </Link>
          . And for specifics on how our garage cleanout service works, visit our{" "}
          <Link href="/services/garage-cleanout" className="text-orange-600 font-semibold hover:underline">
            garage cleanout service page
          </Link>
          .
        </p>

        {/* Book CTA */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Book Your Garage Cleanout
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;ve been staring at that garage for months and just need to make it happen,
          now&apos;s the time. We do garage cleanouts across Pearland, Friendswood, Manvel,
          Shadow Creek, and the surrounding area — often same-day or next-day.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Call or text us at{" "}
          <a href={BUSINESS.phoneHref} className="text-orange-600 font-semibold hover:underline">
            {BUSINESS.phone}
          </a>{" "}
          or fill out the form below. We&apos;ll confirm your time window and get a crew out.
          Better Call Daw.
        </p>

        {/* Booking Form */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 mt-10">
          <h3 className="text-xl font-bold text-[#111111] mb-4">
            Schedule your garage cleanout
          </h3>
          <BookingForm compact />
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
