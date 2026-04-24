import Link from "next/link";
import { PRICING } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export function PricingGuide() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Copy */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#111111] mb-4">
              Upfront Pricing.<br />No Surprises.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Every competitor makes you call to get a price. We don't. Here's exactly what junk removal costs in Pearland — and we stand behind these numbers on every job.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Price includes labor, fuel & disposal",
                "No hidden fees — ever",
                "You approve the price before we start",
                "Volume-based pricing = you only pay for what we take",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="mt-8 inline-block rounded-full bg-orange-600 px-7 py-3.5 font-bold text-white hover:bg-orange-700 transition-colors"
            >
              Full Pricing Guide →
            </Link>
          </div>

          {/* Pricing table */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            {PRICING.map((tier, i) => (
              <div
                key={tier.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div>
                  <p className="font-bold text-gray-900">{tier.label}</p>
                  <p className="text-sm text-gray-500">{tier.size}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl text-orange-600">{tier.range}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#111111] text-white px-6 py-4 text-sm text-center">
              Special items (mattresses, TVs) may have a small add-on fee. Always disclosed upfront.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
