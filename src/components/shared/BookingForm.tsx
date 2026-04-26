"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { Loader2 } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  zip: string;
  service: string;
  message: string;
};

const inputClass = "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 bg-white placeholder:text-gray-400 focus:border-orange-500 focus:outline-none";
const labelClass = "block text-xs font-semibold text-gray-600 mb-1";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("https://formsubmit.co/ajax/dawsjunksolutions@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `New Lead: ${data.name} — ${data.service || "General Inquiry"}`,
        }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">✓</div>
        <p className="font-bold text-gray-900 text-lg">Got it — we'll be in touch shortly!</p>
        <p className="text-gray-500 text-sm mt-1">
          Or call us now: <a href={BUSINESS.phoneHref} className="text-orange-600 font-semibold">{BUSINESS.phone}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input
            {...register("name", { required: true })}
            placeholder="Jane Smith"
            className={inputClass}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            {...register("phone", { required: true })}
            placeholder="(281) 555-0000"
            type="tel"
            className={inputClass}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>ZIP Code</label>
          <input
            {...register("zip")}
            placeholder="77584"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Service Needed</label>
          <select
            {...register("service")}
            className={inputClass}
          >
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label className={labelClass}>Details (optional)</label>
          <textarea
            {...register("message")}
            placeholder="Describe what you need hauled — size, location, anything helpful"
            rows={3}
            className={inputClass + " resize-none"}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-orange-600 py-4 font-bold text-white text-lg hover:bg-orange-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 size={18} className="animate-spin" />}
        {isSubmitting ? "Sending..." : "Get My Free Estimate"}
      </button>

      {error && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please call <a href={BUSINESS.phoneHref} className="underline">{BUSINESS.phone}</a>.
        </p>
      )}

      <p className="text-center text-xs text-gray-400">
        We respond within minutes during business hours.
      </p>
    </form>
  );
}
