import Link from "next/link";
import { Phone, CalendarCheck, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#111111] border-t border-gray-700 grid grid-cols-3">
      <a
        href={BUSINESS.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-orange-600 transition-colors"
      >
        <Phone size={20} />
        <span className="text-xs font-semibold">Call</span>
      </a>
      <a
        href={`sms:${BUSINESS.phone}`}
        className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-orange-600 transition-colors border-x border-gray-700"
      >
        <MessageSquare size={20} />
        <span className="text-xs font-semibold">Text</span>
      </a>
      <Link
        href="/book"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-orange-600 text-white"
      >
        <CalendarCheck size={20} />
        <span className="text-xs font-semibold">Book</span>
      </Link>
    </div>
  );
}
