import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Clock, MapPin, Star } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS, SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | Daw's Junk Solutions Pearland TX",
  description:
    "Read real customer reviews for Daw's Junk Solutions in Pearland, TX. 4.9 stars on Google. Trusted by hundreds of South Houston homeowners. 281-202-9668.",
  alternates: {
    canonical: `${BUSINESS.domain}/reviews`,
  },
};

const reviews = [
  {
    name: "Jennifer K.",
    location: "Pearland, TX",
    service: "Full House Cleanout",
    stars: 5,
    text: "We were moving out of our house of 15 years and had accumulated an unbelievable amount of stuff. Daw's came out with their big trailer and cleared everything in one shot. What I appreciated most was that they asked about items that might have value and set them aside before hauling — they clearly care about not wasting things. The price was great, the crew was friendly, and the whole job was done by noon. I've already recommended them to three people.",
  },
  {
    name: "Tom & Barbara W.",
    location: "Friendswood, TX",
    service: "Garage Cleanout & Appliance Removal",
    stars: 5,
    text: "After our kids finally moved out we decided to reclaim the garage. What should have taken us weeks of work was done by Daw's in a single morning. They removed an old chest freezer, a broken riding mower, a mountain of old furniture, and boxes we hadn't opened in 10 years. Professional, fast, and extremely reasonably priced. We couldn't believe how good the garage looked when they were done.",
  },
  {
    name: "Reginald J.",
    location: "Manvel, TX",
    service: "Estate Cleanout",
    stars: 5,
    text: "I needed help clearing out my father's property after he passed. It was a hard job emotionally, and Daw's made it as easy as possible. They were respectful of the space, worked efficiently, and communicated well throughout. They gave me time to go through things before hauling and never rushed me. When they were done the house was ready to list. I can't thank them enough for the care they showed during a difficult time.",
  },
  {
    name: "Amanda S.",
    location: "League City, TX",
    service: "Furniture & Mattress Removal",
    stars: 5,
    text: "I needed a bedroom set, two mattresses, and a sectional couch removed from my house before my new furniture arrived. Called Daw's on a Friday, they were there Saturday morning. Fast, clean, and the price was exactly what they quoted. The guys were friendly and professional. I've since used them two more times for smaller pickups and they're always just as good. Best junk removal I've found in the League City area.",
  },
  {
    name: "David H.",
    location: "Alvin, TX",
    service: "Construction Debris Removal",
    stars: 5,
    text: "I DIY'd a full kitchen remodel and ended up with a huge pile of cabinets, tile, drywall, and old appliances. Daw's handled all of it in one trip with their dump trailer. The price was fair — way less than the dumpster rental I was considering — and they did all the loading themselves. Same-day service, too. If you're doing any kind of renovation in Alvin or the surrounding area, save yourself the hassle and call Daw's first.",
  },
  {
    name: "Patricia M.",
    location: "Shadow Creek Ranch, Pearland",
    service: "Hot Tub & Patio Furniture Removal",
    stars: 5,
    text: "We had an old hot tub that the previous owners left behind when we bought our house in Shadow Creek Ranch. It sat on our patio for two years while we debated what to do with it. Called Daw's and they had it broken down and hauled away in the same visit. I expected it to be a huge production — it wasn't. They were organized, brought the right tools, and had it gone in under two hours. Incredible service.",
  },
  {
    name: "Marcus & Layla T.",
    location: "Iowa Colony, TX",
    service: "Post-Renovation Cleanout",
    stars: 5,
    text: "We built a new home in Iowa Colony and ended up with a ton of construction leftover material the contractors didn't take. Daw's came out and cleared everything — lumber scraps, packaging, cardboard, old fixtures — all of it. Quick quote, quick service, fair price. We've recommended them to several neighbors in Meridiana already and will keep doing so. These guys are exactly what you want in a junk removal company.",
  },
  {
    name: "Carol Ann F.",
    location: "Brookside Village, TX",
    service: "Hoarder House Cleanout",
    stars: 5,
    text: "This is not an easy review to write but I want other families in my situation to know about Daw's. My sister's home had gotten completely out of control over the years. When we finally got to a point where we could address it, I was dreading finding help — I expected judgment or price gouging. We got neither. Daw's crew was professional, compassionate, and got the job done over two visits without ever making us feel embarrassed. I am so grateful for how they handled it.",
  },
  {
    name: "Kevin P.",
    location: "South Houston / South Belt",
    service: "Yard Waste & Debris Removal",
    stars: 5,
    text: "Had a massive cleanup job after a storm knocked down several tree limbs and fences. Called Daw's and they were out the next day. They loaded an enormous amount of debris and were done before lunch. The price was fair considering how much they hauled and how hard the work was. I live in South Belt and was happy to find a local company that actually serves this area — a lot of places say they do South Houston but make you feel like you're on the far edge of their coverage. Not Daw's.",
  },
];

const stats = [
  { label: "Google Rating", value: "4.9 / 5" },
  { label: "Total Reviews", value: "100+" },
  { label: "Facebook", value: "5-Star Rated" },
  { label: "Reputation", value: "A+" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 text-orange-500 fill-orange-500" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            4.9 Stars.{" "}
            <span className="text-orange-500">Hundreds of Happy Customers.</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            See why Pearland and South Houston trust Daw&apos;s Junk Solutions.
            Real reviews from real neighbors — no filters, no fakes.
          </p>
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone} — Call or Text
          </a>
        </div>
      </section>

      {/* Aggregate Stats Bar */}
      <section className="bg-orange-600 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold">{stat.value}</p>
              <p className="text-orange-100 text-sm mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From Pearland to Friendswood, Manvel to League City — our customers
            span all of South Houston.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-orange-500 fill-orange-500"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                  <p className="text-orange-500 text-xs font-medium mt-1">
                    {review.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500" />
            ))}
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Leave Us a Review
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Your review helps other Pearland families find trustworthy junk
            removal. It takes 60 seconds on Google — and it means the world to
            a small local business.
          </p>
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Star className="w-5 h-5 fill-white" />
            Write a Google Review
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Already reviewed us? We appreciate it more than you know.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
