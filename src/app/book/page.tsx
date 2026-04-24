import type { Metadata } from "next";
import { Phone, MessageSquare } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Junk Removal Pearland TX | Daw's Junk Solutions",
  description:
    "Book junk removal in Pearland, TX online. Same-day slots available. Get an upfront price in minutes. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/book` },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-5xl sm:text-6xl text-[#111111] mb-3">
            Book Your Pickup
          </h1>
          <p className="text-gray-500 text-lg">Fill out the form — we'll confirm your slot and price fast.</p>
          <p className="text-gray-400 text-sm mt-2">
            Rather call? <a href={BUSINESS.phoneHref} className="text-orange-600 font-bold">{BUSINESS.phone}</a>
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
          <BookingForm />
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-[#111111] py-3.5 font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            <Phone size={18} /> Call Us
          </a>
          <a
            href={`sms:${BUSINESS.phone}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3.5 font-bold text-white hover:bg-orange-700 transition-colors"
          >
            <MessageSquare size={18} /> Text Instead
          </a>
        </div>
      </div>
    </div>
  );
}
