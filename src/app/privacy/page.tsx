import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Daw's Junk Solutions",
  description: "Privacy policy for Daw's Junk Solutions. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-20 bg-[#111111] text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-5xl sm:text-6xl mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-xl mb-8">We respect your privacy. This page will detail how Daw's Junk Solutions collects and uses your information. Full policy coming soon.</p>
          <a href={BUSINESS.phoneHref} className="inline-block rounded-full bg-orange-600 px-8 py-4 font-bold text-white hover:bg-orange-700 transition-colors">
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
