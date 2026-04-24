import Link from "next/link";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-orange-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-6xl text-white mb-4">
          Ready to Reclaim Your Space?
        </h2>
        <p className="text-orange-100 text-xl mb-10 max-w-xl mx-auto">
          Same-day slots available. We'll give you an upfront price — no obligation, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-orange-600 text-lg hover:bg-orange-50 transition-colors"
          >
            <Phone size={20} />
            Call {BUSINESS.phone}
          </a>
          <a
            href={`sms:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white text-lg hover:bg-white hover:text-orange-600 transition-colors"
          >
            <MessageSquare size={20} />
            Text Us
          </a>
          <Link
            href="/book"
            className="flex items-center justify-center gap-2 rounded-full bg-[#111111] px-8 py-4 font-bold text-white text-lg hover:bg-gray-800 transition-colors"
          >
            <CalendarCheck size={20} />
            Book Online
          </Link>
        </div>

        <p className="mt-8 text-orange-200 text-sm">
          Serving Pearland, Friendswood, Manvel, League City, Alvin & all of South Houston
        </p>
      </div>
    </section>
  );
}
