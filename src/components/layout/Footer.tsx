import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, SERVICES, SERVICE_AREAS, HOURS } from "@/lib/constants";

export function Footer() {
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="bg-[#111111] text-gray-300 pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.png" alt="Daw's Junk Solutions" width={140} height={56} className="h-12 w-auto invert mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Family-owned junk removal serving Pearland, TX and all of South Houston. Licensed, insured, and always upfront on price.
            </p>
            <p className="mt-4 text-orange-500 font-display text-xl tracking-wider">"Better Call Daw"</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-orange-500 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-orange-500 hover:text-orange-400 font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link href={`/locations/${area.slug}`} className="hover:text-orange-500 transition-colors">
                    {area.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Phone size={15} />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Mail size={15} />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0" />
                <span>
                  Mon–Sat: {HOURS.weekdays}<br />
                  Sun: {HOURS.sunday}
                </span>
              </li>
            </ul>

            <Link
              href="/book"
              className="mt-6 inline-block rounded-full bg-orange-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-700 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Daw's Junk Solutions. Pearland, TX. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
