import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria T.",
    location: "Pearland, TX",
    text: "Daw's crew showed up same day, gave me a fair price right on the spot, and cleared my entire garage in under two hours. Couldn't believe how fast and professional they were. Highly recommend!",
    stars: 5,
  },
  {
    name: "James R.",
    location: "Shadow Creek Ranch, TX",
    text: "I've used 1-800-GOT-JUNK before and it cost twice as much for the same work. Daw's Junk Solutions is the real deal — local, honest, and they actually show up when they say they will.",
    stars: 5,
  },
  {
    name: "Sandra K.",
    location: "Friendswood, TX",
    text: "Had a full estate to clear after my mom passed. Daw's team was respectful, quick, and priced fairly. They even took items to donate rather than just dumping everything. Really appreciated that.",
    stars: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Aggregate rating header */}
        <div className="text-center mb-10">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="fill-orange-500 text-orange-500" />
            ))}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-2">
            4.9 Stars on Google
          </h2>
          <p className="text-gray-500 text-lg">Trusted by hundreds of Pearland-area homeowners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex gap-1 mb-3">
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">"{r.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{r.name}</p>
                <p className="text-sm text-gray-400">{r.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#111111] px-8 py-3.5 font-bold text-white hover:bg-gray-800 transition-colors mr-4"
          >
            Read All Reviews
          </a>
          <a
            href="https://g.page/r/PLACEHOLDER/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-[#111111] px-8 py-3.5 font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            Leave Us a Review ★
          </a>
        </div>
      </div>
    </section>
  );
}
