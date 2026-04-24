import Link from "next/link";
import { Trash2, Sofa, Refrigerator, Home, Building2, Leaf, HardHat, Package } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Trash2, Sofa, Refrigerator, Home, Building: Building2, Leaf, HardHat, Package,
};

const featured = [
  { name: "Junk Removal", slug: "junk-removal", icon: "Trash2", desc: "Full-service hauling — we load, we haul, you're done." },
  { name: "Furniture Removal", slug: "furniture-removal", icon: "Sofa", desc: "Couches, beds, tables — gone same day." },
  { name: "Appliance Removal", slug: "appliance-removal", icon: "Refrigerator", desc: "Fridges, washers, dryers hauled safely." },
  { name: "Garage Cleanout", slug: "garage-cleanout", icon: "Home", desc: "From packed to spotless in one trip." },
  { name: "Estate Cleanout", slug: "estate-cleanout", icon: "Building", desc: "Compassionate cleanouts, any size." },
  { name: "Yard Waste Removal", slug: "yard-waste-removal", icon: "Leaf", desc: "Brush, limbs, debris — off your property." },
  { name: "Construction Debris", slug: "construction-debris", icon: "HardHat", desc: "Demo waste cleared fast for contractors." },
  { name: "Hoarding Cleanout", slug: "hoarding-cleanout", icon: "Package", desc: "Discreet, judgment-free cleanouts." },
];

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-3">What We Haul</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Big or small, residential or commercial — if you want it gone, we'll take it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map(({ name, slug, icon, desc }) => {
            const Icon = iconMap[icon] ?? Trash2;
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group rounded-xl border border-gray-200 p-6 hover:border-orange-500 hover:shadow-md transition-all"
              >
                <div className="mb-4 inline-flex rounded-lg bg-orange-50 p-3 group-hover:bg-orange-100 transition-colors">
                  <Icon size={24} className="text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-orange-600 group-hover:underline">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full border-2 border-[#111111] px-8 py-3 font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            View All 12 Services
          </Link>
        </div>
      </div>
    </section>
  );
}
