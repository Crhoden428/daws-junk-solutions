import type { Metadata } from "next";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";
import { BookingForm } from "@/components/shared/BookingForm";
import { BUSINESS, HOURS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Daw's Junk Solutions | Pearland TX | 281-202-9668",
  description:
    "Contact Daw's Junk Solutions for fast junk removal in Pearland, TX. Call, text, or book online. Same-day available. 281-202-9668.",
  alternates: { canonical: `${BUSINESS.domain}/contact` },
};

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-[#111111] mb-3">Get In Touch</h1>
          <p className="text-gray-500 text-xl">Call, text, or fill out the form — we respond fast.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <div className="space-y-6 mb-10">
              <a href={BUSINESS.phoneHref} className="flex items-start gap-4 group">
                <div className="rounded-xl bg-orange-100 p-3"><Phone size={22} className="text-orange-600" /></div>
                <div>
                  <p className="font-bold text-gray-900">Call or Text</p>
                  <p className="text-xl font-display text-orange-600">{BUSINESS.phone}</p>
                  <p className="text-sm text-gray-400">Fastest way to reach us. Same-day slots booked over the phone.</p>
                </div>
              </a>

              <a href={`sms:${BUSINESS.phone}`} className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-3"><MessageSquare size={22} className="text-orange-600" /></div>
                <div>
                  <p className="font-bold text-gray-900">Text Us</p>
                  <p className="text-gray-600 text-sm">Send a text with what you need hauled and we'll get back to you with a price.</p>
                </div>
              </a>

              <a href={BUSINESS.emailHref} className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-3"><Mail size={22} className="text-orange-600" /></div>
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-orange-600">{BUSINESS.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-3"><Clock size={22} className="text-orange-600" /></div>
                <div>
                  <p className="font-bold text-gray-900">Hours</p>
                  <p className="text-gray-600 text-sm">Mon–Sat: {HOURS.weekdays}</p>
                  <p className="text-gray-600 text-sm">Sun: {HOURS.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-orange-100 p-3"><MapPin size={22} className="text-orange-600" /></div>
                <div>
                  <p className="font-bold text-gray-900">Service Area</p>
                  <p className="text-gray-500 text-sm">
                    {SERVICE_AREAS.map((a) => `${a.name}, TX`).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
            <h2 className="font-display text-3xl text-[#111111] mb-1">Request a Free Estimate</h2>
            <p className="text-gray-500 text-sm mb-6">We'll reply within minutes during business hours.</p>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
