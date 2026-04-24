"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111111] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Daw's Junk Solutions" width={120} height={48} className="h-10 w-auto invert" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
            <Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link href="/locations" className="hover:text-orange-500 transition-colors">Service Areas</Link>
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2 text-sm font-bold text-white hover:bg-orange-700 transition-colors"
            >
              <Phone size={16} />
              {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              className="rounded-full border border-white px-5 py-2 text-sm font-bold text-white hover:bg-white hover:text-black transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-700 px-4 pb-6 pt-4 space-y-4">
          <nav className="flex flex-col gap-3 text-white font-medium">
            <Link href="/services" onClick={() => setOpen(false)} className="hover:text-orange-500">Services</Link>
            <Link href="/locations" onClick={() => setOpen(false)} className="hover:text-orange-500">Service Areas</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="hover:text-orange-500">Pricing</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-orange-500">About</Link>
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-orange-600 py-3 font-bold text-white"
            >
              <Phone size={18} /> Call {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full border border-white py-3 font-bold text-white hover:bg-white hover:text-black transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
