import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Much Does Junk Removal Cost in Pearland, TX? [2026 Pricing Guide]",
  description:
    "Transparent junk removal pricing for Pearland, TX. Small loads from $99, full truckloads $700+. No hidden fees. See exact price ranges by load size.",
  alternates: {
    canonical: `${BUSINESS.domain}/blog/junk-removal-cost-pearland-tx`,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "How Much Does Junk Removal Cost in Pearland, TX?",
    href: "/blog/junk-removal-cost-pearland-tx",
  },
]);

export default function BlogJunkRemovalCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Breadcrumb nav */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/blog"
            className="hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">
            Junk Removal Cost in Pearland
          </span>
        </div>
      </nav>

      {/* Article */}
      <div className="bg-white py-16 px-4">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
              Pricing Guide · Updated April 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              How Much Does Junk Removal Cost in Pearland, TX?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you&apos;ve ever tried to price out junk removal, you&apos;ve
              probably run into vague answers like &ldquo;it depends&rdquo; or
              quotes that only appear after a sales call. This guide gives you
              real numbers for Pearland and South Houston — what things actually
              cost, what affects the price, and how to get the best deal for
              your situation.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <span>By the Daw&apos;s Junk Solutions team</span>
              <span>·</span>
              <time dateTime="2026-04-23">April 23, 2026</time>
            </div>
          </header>

          {/* Section 1: Pricing by load size */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Junk Removal Pricing in Pearland — By Load Size
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Most junk removal companies — including Daw&apos;s — price by
              volume, not by the hour. The size of your load relative to the
              truck or trailer is the primary cost driver. Here&apos;s a
              straightforward breakdown:
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#111111] text-white">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">
                      Load Size
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      What It Typically Covers
                    </th>
                    <th className="text-left py-3 px-4 font-semibold">
                      Price Range
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map((tier, i) => (
                    <tr
                      key={tier.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-3 px-4 font-semibold text-gray-900">
                        {tier.label}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {tier.size}
                      </td>
                      <td className="py-3 px-4 text-orange-500 font-bold">
                        {tier.range}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm">
              These are Daw&apos;s actual price ranges for Pearland and
              surrounding areas. Prices at national chains are typically
              20–40% higher for the same load.
            </p>
          </section>

          {/* Section 2: What's included */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              What&apos;s Included in the Price?
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              When you hire Daw&apos;s, the price you&apos;re quoted covers
              everything. There are no hourly labor add-ons or disposal surcharges
              after the fact.
            </p>
            <ul className="space-y-3">
              {[
                "Labor — we do all the lifting and loading, no extra charge",
                "Fuel and transportation to disposal facility",
                "Disposal and dump fees",
                "Eco-friendly sorting — we separate items for donation and recycling before the landfill",
                "Clean-up of the pickup area after loading",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: What affects price */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              What Affects the Price?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Volume is the biggest factor, but several other things can affect
              your final quote. Being upfront about these when you call will
              help you get a more accurate estimate:
            </p>
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Volume and weight
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The more space your junk takes up in the trailer, the higher
                  the cost. Dense, heavy items like concrete, tile, or dirt can
                  also add to the price due to increased dump fees at the
                  facility.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Stairs and access
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Items on upper floors or in tight spaces take more time and
                  labor. If you have heavy furniture upstairs or in a basement
                  without good access, mention it when booking.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Special items
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mattresses, televisions, tires, and refrigerators with freon
                  all have special disposal requirements that can add a small
                  surcharge — typically $15–$30 per item. We&apos;ll always
                  tell you about these before we start.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Item type</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  General household junk is straightforward. Construction debris
                  (concrete, brick, drywall) or hazardous materials may be
                  priced differently due to heavier weight and disposal costs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Price comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Price Comparison: Daw&apos;s vs. 1-800-GOT-JUNK in Pearland
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              National junk removal chains like 1-800-GOT-JUNK operate on a
              franchise model with significant overhead — advertising,
              franchising fees, and corporate margin all get baked into your
              quote. In our experience and based on customer feedback, national
              chains typically run{" "}
              <strong className="text-gray-900">20–40% higher</strong> than
              Daw&apos;s for the same load in the Pearland area.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700 border-b border-gray-200 pb-3 mb-3">
                <span>Load Size</span>
                <span className="text-center">National Chain (est.)</span>
                <span className="text-center text-orange-500">
                  Daw&apos;s (est.)
                </span>
              </div>
              {[
                { size: "1/4 Load", national: "$175–$250", daws: "$99–$175" },
                { size: "1/2 Load", national: "$300–$425", daws: "$200–$325" },
                { size: "3/4 Load", national: "$425–$575", daws: "$325–$499" },
                { size: "Full Load", national: "$600–$900+", daws: "$499–$700+" },
              ].map((row) => (
                <div
                  key={row.size}
                  className="grid grid-cols-3 gap-4 text-sm py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700 font-medium">{row.size}</span>
                  <span className="text-center text-gray-500">
                    {row.national}
                  </span>
                  <span className="text-center text-orange-500 font-bold">
                    {row.daws}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-3">
              Estimates only. Actual prices vary by load composition, location,
              and current market rates. Call for an exact quote.
            </p>
          </section>

          {/* Section 5: Tips for best price */}
          <section className="mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              How to Get the Best Price on Junk Removal in Pearland
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              A few simple things can make your junk removal job faster, cheaper,
              or both:
            </p>
            <ul className="space-y-4">
              {[
                {
                  tip: "Know your volume before you call",
                  detail:
                    "Take a rough count of what you're getting rid of and measure large items. The better your description, the more accurate the quote.",
                },
                {
                  tip: "Combine everything into one trip",
                  detail:
                    "If you have junk in multiple areas — garage, attic, living room — doing it all at once is almost always cheaper per item than separate trips.",
                },
                {
                  tip: "Move small items to one spot if you can",
                  detail:
                    "We do all the heavy lifting, but if you can consolidate boxes and small items, it speeds up the job. Faster jobs can mean lower costs.",
                },
                {
                  tip: "Ask about same-day pricing",
                  detail:
                    "If we have open capacity on a given day, we may be able to offer a slightly better rate for same-day bookings. It's always worth asking.",
                },
                {
                  tip: "Separate out donations beforehand",
                  detail:
                    "If you pull out items that can be donated before we arrive, it reduces your load volume, which can lower your price tier.",
                },
              ].map((item) => (
                <li key={item.tip} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.tip}
                    </span>
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6: Get a free estimate */}
          <section className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Get Your Free Estimate from Daw&apos;s
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The fastest way to get an accurate price is to give us a call or
              text. Describe what you have — or send a photo — and we&apos;ll
              give you a ballpark on the spot. No pressure, no commitment, no
              sales pitch.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                <div>
                  <p className="text-gray-900 font-bold text-lg">
                    Call or Text Daw&apos;s
                  </p>
                  <p className="text-gray-600 text-sm">
                    Fast response · No obligation · Same-day available
                  </p>
                </div>
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-700 font-semibold mb-4">
                  Or book online — we&apos;ll confirm within the hour:
                </p>
                <BookingForm />
              </div>
            </div>
          </section>

          {/* Related posts */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/what-items-junk-removal-takes-texas",
                  title: "What Items Will Junk Removal Companies Take in Texas?",
                },
                {
                  href: "/blog/junk-removal-vs-dumpster-rental",
                  title: "Junk Removal vs. Dumpster Rental: Which Is Right for You?",
                },
                {
                  href: "/blog/same-day-junk-removal-pearland",
                  title: "Same-Day Junk Removal in Pearland — What to Expect",
                },
                {
                  href: "/blog/garage-cleanout-tips-pearland",
                  title: "Garage Cleanout Checklist: How to Prep Before We Arrive",
                },
              ].map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex items-start gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span className="text-orange-500 mt-0.5">→</span>
                  <span className="group-hover:underline">{post.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>

      <FinalCTA />
    </>
  );
}
