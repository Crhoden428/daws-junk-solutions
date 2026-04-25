import Link from "next/link";
import { Camera } from "lucide-react";

const galleryItems = [
  { label: "Tree & Debris Removal", detail: "Full trailer of logs — Pearland TX" },
  { label: "Furniture Removal", detail: "Loaded flatbed — same-day service" },
  { label: "Mattress & Furniture", detail: "RawMaxx trailer — estate cleanout" },
  { label: "Commercial Cleanout", detail: "Parking lot debris — Pearland TX" },
  { label: "Full Truck & Trailer", detail: "Daw's Junk Solutions rig — South Houston" },
  { label: "Yard Waste Removal", detail: "Debris & logs hauled away" },
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
          <div className="rounded-2xl w-full shadow-lg bg-gray-100 flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-300">
            <Camera size={48} className="text-gray-400 mb-4" />
            <p className="text-gray-600 font-semibold text-lg">Before &amp; After — Garage Cleanout</p>
            <p className="text-gray-400 text-sm mt-1">Shadow Creek Ranch, Pearland TX — Same-day service</p>
          </div>
          <p className="mt-3 text-center text-sm text-gray-500 italic">
            Full garage cleanout — Shadow Creek Ranch, Pearland TX. Same-day service.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map(({ label, detail }) => (
            <div key={label} className="aspect-square overflow-hidden rounded-xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-2 p-4">
              <Camera size={28} className="text-gray-400" />
              <p className="text-gray-700 font-semibold text-sm text-center">{label}</p>
              <p className="text-gray-400 text-xs text-center">{detail}</p>
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
