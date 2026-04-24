import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Same-Day Junk Removal in Pearland, TX — How It Works | Daw's Junk Solutions",
  description:
    "Need junk removed today in Pearland? Here's exactly how same-day service works, how to book it, and what to expect when Daw's crew shows up.",
  alternates: {
    canonical: `${BUSINESS.domain}/blog/same-day-junk-removal-pearland`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Same-Day Junk Removal in Pearland, TX — What to Expect", href: "/blog/same-day-junk-removal-pearland" },
]);

export default function BlogSameDayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-14">
        <h1 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
          Same-Day Junk Removal in Pearland, TX — What to Expect
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Published April 23, 2026 &middot; By Daw&apos;s Junk Solutions Team
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Yes, We Really Do Same-Day Service in Pearland
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When people see &ldquo;same-day junk removal&rdquo; on a website, their first instinct is
          skepticism — and fair enough. A lot of companies advertise it and then tell you the
          earliest opening is Thursday. That&apos;s not how we operate.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Daw&apos;s Junk Solutions runs daily routes through Pearland and the surrounding area.
          When you call before noon on most days, we can have a crew out the same day. Not as a
          special favor — just as how we run our schedule. Situations come up: a closing got moved
          up, a tenant finally cleared out, a relative is coming to visit and you need the garage
          cleared <em>now</em>. We built our scheduling around that reality.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          How to Book Same-Day Junk Removal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You have three options, and all of them are fast:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Call us directly:</strong> Calling{" "}
              <a
                href={BUSINESS.phoneHref}
                className="text-orange-600 font-semibold hover:underline"
              >
                {BUSINESS.phone}
              </a>{" "}
              is the fastest route to same-day service. Calling before noon gives you the best shot
              at a same-day slot. If you call by 10 a.m., we can almost always work you in.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Text us:</strong> If you&apos;re at work or can&apos;t talk, text the same
              number with your address and a quick description of what you need hauled. We&apos;ll
              respond with availability and a rough quote.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Book online:</strong> The form on our site goes straight to our dispatch.
              Select &ldquo;As soon as possible&rdquo; for date preference and we&apos;ll call to
              confirm availability and fit you into the same-day schedule when we can.
            </span>
          </li>
        </ul>

        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Pro tip:</strong> When you contact us, give us a rough sense of the volume
            — one couch, a full garage, half a truck — so we can assign the right crew size and
            get you an accurate estimate before anyone drives out.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          What Happens After You Book
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Here&apos;s the exact sequence once you&apos;ve booked a same-day slot:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Confirmation call:</strong> We call you back (or confirm by text if you
              prefer) to verify the address, confirm what&apos;s being hauled, and give you a
              time window for arrival.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>Crew assigned:</strong> Dispatch assigns the closest available crew. In
              Pearland, that usually means response times in the 1–3 hour range depending on the
              day.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>On-the-way text:</strong> The crew texts you when they&apos;re heading your
              direction. No more waiting around wondering if someone is coming.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
            <span className="text-gray-700">
              <strong>On-site quote:</strong> The crew walks the job, gives you a firm price, and
              — once you approve — gets to work immediately.
            </span>
          </li>
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

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          What Same-Day Service Costs
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Same-day service costs exactly the same as any other job. We don&apos;t charge a rush
          fee or a premium for short-notice bookings. Pricing is based on volume — how much space
          your junk takes up in the truck — not on when you called.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A typical single-item pickup (one sofa, one appliance) starts around $99–$149. A
          half-truck load runs $200–$350. A full truck is typically $450–$700+, depending on
          weight and any special items. You&apos;ll get an exact number before we start loading.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are no fuel surcharges, no trip fees, and no hidden charges added after the job.
          What we quote on-site is what you pay.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          What to Do Before the Crew Arrives
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost nothing. Seriously. Here&apos;s the full prep checklist for a same-day pickup:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Point out what goes and what stays — that's the most important thing you can do.",
            "If items are in a tight space, clear just enough of a path for a dolly to get through.",
            "Move anything sentimental or valuable to a corner or inside before we start.",
            "If you have any hazardous materials (paint, motor oil, propane), set those aside — we can't take those.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          That&apos;s it. You don&apos;t need to move anything, bag anything, or be embarrassed
          about how much there is. We&apos;ve seen it all. Our job is to make this easy — and
          &ldquo;easy&rdquo; means you do as little as possible.
        </p>

        <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 my-6">
          <p className="text-gray-700 leading-relaxed">
            <strong>Can you leave during the job?</strong> Yes, once you&apos;ve done the
            walkthrough and approved the price, you&apos;re free to go. We&apos;ll text you when
            we&apos;re done and the crew will lock up behind themselves if you need to be
            somewhere.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          What If Same-Day Isn&apos;t Available?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          It does happen — occasionally our schedule fills up early or a job runs long and we
          can&apos;t make it work. Here&apos;s what that looks like in practice:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Next-day service is almost always available. In most cases, we can get to you the following morning.",
            "We'll offer you a specific time window — not just 'sometime tomorrow' — so you can plan around it.",
            "If you need a specific time slot (e.g., before noon), we can usually accommodate that next day.",
            "For urgent situations, let us know and we'll do our best to shuffle the schedule.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-0.5 shrink-0" size={18} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The rare times we can&apos;t do same-day, we&apos;re honest about it upfront. We
          won&apos;t book you in and then cancel the day of. If it&apos;s not happening today,
          we&apos;ll tell you immediately so you can make other plans or confirm next-day.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-3">
          Book Your Same-Day Pickup Now
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you&apos;re reading this and you need junk out today, stop reading and call us at{" "}
          <a href={BUSINESS.phoneHref} className="text-orange-600 font-semibold hover:underline">
            {BUSINESS.phone}
          </a>
          . The sooner you call, the better your chances of a same-day slot. Or fill out the form
          below and we&apos;ll reach out within the hour to confirm availability.
        </p>

        {/* Booking Form */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 mt-10">
          <h3 className="text-xl font-bold text-[#111111] mb-4">
            Request a same-day pickup
          </h3>
          <BookingForm compact />
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
