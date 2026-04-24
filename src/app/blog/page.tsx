import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Junk Removal Tips & Local Resources | Daw's Junk Solutions Blog",
  description:
    "Junk removal tips, pricing guides, and local resources for Pearland, TX homeowners. Expert advice from Daw's Junk Solutions.",
  alternates: {
    canonical: `${BUSINESS.domain}/blog`,
  },
};

const posts = [
  {
    slug: "junk-removal-cost-pearland-tx",
    title: "How Much Does Junk Removal Cost in Pearland, TX? [2026 Guide]",
    excerpt:
      "Transparent pricing breakdown for every load size — so you know exactly what to expect before you call.",
  },
  {
    slug: "what-items-junk-removal-takes-texas",
    title: "What Items Will Junk Removal Companies Take in Texas?",
    excerpt:
      "A complete list of what we haul — and the few things we can't.",
  },
  {
    slug: "same-day-junk-removal-pearland",
    title: "Same-Day Junk Removal in Pearland — What to Expect",
    excerpt:
      "How to book, what happens next, and how fast we can be at your door.",
  },
  {
    slug: "junk-removal-vs-dumpster-rental",
    title: "Junk Removal vs. Dumpster Rental: Which Is Right for You?",
    excerpt:
      "Breaking down when each makes sense for your project.",
  },
  {
    slug: "garage-cleanout-tips-pearland",
    title: "Garage Cleanout Checklist: How to Prep Before We Arrive",
    excerpt:
      "5 minutes of prep makes your cleanout go faster and cheaper.",
  },
  {
    slug: "appliance-disposal-pearland-tx",
    title: "How to Dispose of Old Appliances in Pearland, TX",
    excerpt:
      "What happens to your old fridge, washer, or dryer after we haul it away.",
  },
  {
    slug: "estate-cleanout-guide-pearland",
    title: "Estate Cleanout Guide for Pearland Families",
    excerpt:
      "What to expect, what to save, and how to make a hard process easier.",
  },
  {
    slug: "eco-friendly-junk-disposal",
    title: "Eco-Friendly Junk Disposal: Where Does Your Junk Actually Go?",
    excerpt:
      "How we sort, donate, recycle, and minimize what hits the landfill.",
  },
];

export default function BlogHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Daw&apos;s Junk Solutions Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Junk Removal Tips for Pearland Homeowners
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, honest pricing info, and local resources from the
            team that hauls junk across South Houston every day.
          </p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-gray-100 rounded-xl overflow-hidden hover:border-orange-400 hover:shadow-md transition-all"
              >
                {/* Color bar accent */}
                <div className="h-1.5 bg-orange-500 w-full" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-5 text-orange-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call CTA Strip */}
      <section className="bg-[#111111] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-3">
            Skip the reading
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Have a question? Just call.
          </h2>
          <p className="text-gray-300 mb-8">
            Our team knows junk removal inside and out. Call or text anytime and
            we&apos;ll give you a straight answer — no sales pitch.
          </p>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
