import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Call, Text, or Book Online",
    desc: "Tell us what you need hauled and when. We'll confirm your appointment window — often same day.",
  },
  {
    number: "02",
    title: "We Show Up On Time",
    desc: "Daw's crew arrives with the trailer, reviews the job, and gives you a final upfront price before touching anything.",
  },
  {
    number: "03",
    title: "We Load It & Haul It Away",
    desc: "You don't lift a finger. We load every last piece, sweep up, and leave your space clean.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl mb-3">How It Works</h2>
          <p className="text-gray-400 text-lg">Three steps. Zero hassle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="relative z-10">
                <div className="font-display text-6xl text-orange-500 leading-none mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/book"
            className="rounded-full bg-orange-600 px-8 py-4 font-bold text-white text-center hover:bg-orange-700 transition-colors"
          >
            Book Online Now
          </Link>
          <a
            href="tel:+12812029668"
            className="rounded-full border-2 border-white px-8 py-4 font-bold text-white text-center hover:bg-white hover:text-black transition-colors"
          >
            Call 281-202-9668
          </a>
        </div>
      </div>
    </section>
  );
}
