import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, CalendarCheck, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { BookingForm } from "@/components/shared/BookingForm";

export function Hero() {
  return (
    <section className="relative bg-[#111111] text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck.jpg"
          alt="Daw's Junk Solutions truck and trailer in Pearland TX"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            {/* Star rating badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-600/20 border border-orange-500/40 px-4 py-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
              ))}
              <span className="text-orange-400 text-sm font-semibold ml-1">5-Star Rated in Pearland</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-none text-balance mb-6">
              Pearland's{" "}
              <span className="text-orange-500">Junk Removal</span>{" "}
              Crew
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed">
              Same-day pickups. Upfront pricing. We load, we haul, you relax.
            </p>
            <p className="text-orange-400 font-display text-2xl tracking-wider mb-8">
              "Better Call Daw"
            </p>

            {/* Trust icons */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">✓ Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5">✓ Family-Owned</span>
              <span className="flex items-center gap-1.5">✓ Eco-Friendly</span>
              <span className="flex items-center gap-1.5">✓ Upfront Pricing</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors"
              >
                <Phone size={20} />
                Call {BUSINESS.phone}
              </a>
              <a
                href={`sms:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-4 font-bold text-white text-lg hover:bg-white hover:text-black transition-colors"
              >
                <MessageSquare size={20} />
                Text Us
              </a>
            </div>
          </div>

          {/* Right: booking form */}
          <div className="lg:justify-self-end w-full lg:max-w-md">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
              <h2 className="font-display text-3xl text-[#111111] mb-1">Get a Free Estimate</h2>
              <p className="text-gray-500 text-sm mb-6">We respond in minutes — same day slots available.</p>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
