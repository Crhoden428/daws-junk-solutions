import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";
import { MapPin } from "lucide-react";

export function ServiceAreaMap() {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">
              We Come to You
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Based in Pearland and serving all of South Houston — if you're within 30 miles, we've got you covered. Same-day service is available in most areas.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-8">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/locations/${area.slug}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm py-1"
                >
                  <MapPin size={14} className="text-orange-600 shrink-0" />
                  {area.name}, TX
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-full bg-orange-600 px-7 py-3.5 font-bold text-white hover:bg-orange-700 transition-colors"
            >
              Check If We Serve Your Area →
            </Link>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden h-80 lg:h-96 border border-gray-700">
            <iframe
              title="Daw's Junk Solutions service area — Pearland TX"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110886.56!2d-95.3860!3d29.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864161d97e43bdc5%3A0x5b5c3f5e2e2e2e2e!2sPearland%2C%20TX!5e0!3m2!1sen!2sus!4v1000000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
