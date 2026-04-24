import { ShieldCheck, Leaf, Users, Clock, Star, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully covered in Texas" },
  { icon: Star, label: "5-Star Rated", sub: "Google & Facebook reviews" },
  { icon: Leaf, label: "Eco-Friendly", sub: "Donate before landfill" },
  { icon: Users, label: "Family-Owned", sub: "Locally rooted in Pearland" },
  { icon: Clock, label: "Same-Day Available", sub: "Call before noon" },
  { icon: MapPin, label: "9 Cities Served", sub: "All of South Houston" },
];

export function TrustBar() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center gap-1.5 py-2">
              <Icon size={24} className="text-orange-600" />
              <p className="font-bold text-sm text-gray-900">{label}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
