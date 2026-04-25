import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { src: "/images/IMG_2133.jpeg", alt: "Yard waste and tree debris removal — Daw's RawMaxx trailer loaded with logs", label: "Yard & Tree Debris Removal", rotate: false },
  { src: "/images/IMG_2105.jpeg", alt: "Furniture and junk removal — loaded trailer", label: "Furniture & Junk Removal", rotate: true },
  { src: "/images/IMG_2891.jpeg", alt: "Home cleanout — RawMaxx trailer loaded with mattresses and appliances", label: "Full Home Cleanout", rotate: false },
  { src: "/images/IMG_2659.jpeg", alt: "Commercial junk removal Pearland TX — Daw's trailer on job site", label: "Commercial Junk Removal", rotate: true },
  { src: "/images/IMG_2660.jpeg", alt: "Daw's Junk Solutions truck and trailer — Pearland TX service area", label: "Same-Day Service", rotate: true },
  { src: "/images/IMG_2890.jpeg", alt: "Daw's Junk Solutions — white RAM truck and RawMaxx dump trailer", label: "Daw's Full Rig", rotate: false },
];

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
            src="/images/ACC29CAC-B783-4D24-BE3B-E1CB0F20F008.png"
            alt="Garage cleanout before and after — Daw's Junk Solutions Pearland TX"
            width={1200}
            height={700}
            className="rounded-2xl w-full object-cover shadow-lg"
          />
          <p className="mt-3 text-center text-sm text-gray-500 italic">
            Full garage cleanout — Pearland TX. Same-day service.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map(({ src, alt, label, rotate }) => (
            <div key={src} className="aspect-square overflow-hidden rounded-xl relative bg-gray-100">
              <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover hover:scale-105 transition-transform duration-300${rotate ? " scale-[1.4]" : ""}`}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-semibold">{label}</p>
              </div>
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
