import Image from "next/image";
import Link from "next/link";

export function BeforeAfter() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3">
            Real Jobs. Real Results.
          </h2>
          <p className="text-gray-500 text-lg">
            This is what we do — and we do it all day, every day across Pearland and South Houston.
          </p>
        </div>

        {/* Featured before/after */}
        <div className="mb-8">
          <Image
            src="/images/before-after-garage.jpg"
            alt="Garage cleanout before and after — Daw's Junk Solutions Pearland TX"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover shadow-lg"
          />
          <p className="mt-3 text-center text-sm text-gray-500 italic">
            Full garage cleanout — Shadow Creek Ranch, Pearland TX. Same-day service.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { src: "/images/job-trailer-logs.jpg", alt: "Tree debris removal — dump trailer loaded with logs" },
            { src: "/images/job-trailer-furniture.jpg", alt: "Furniture removal — loaded flat bed trailer" },
            { src: "/images/job-trailer-mattresses.jpg", alt: "Mattress and furniture removal — RawMaxx trailer" },
            { src: "/images/job-trailer-parking-lot.jpg", alt: "Commercial junk removal in Pearland TX" },
            { src: "/images/marketing-truck.jpg", alt: "Daw's Junk Solutions white truck and RawMaxx trailer" },
            { src: "/images/job-trailer-logs2.jpg", alt: "Yard waste and debris removal — Pearland TX" },
          ].map(({ src, alt }) => (
            <div key={src} className="aspect-square overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-block rounded-full border-2 border-[#111111] px-8 py-3 font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            Read Customer Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
