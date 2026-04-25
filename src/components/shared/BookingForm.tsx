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

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("https://formsubmit.co/ajax/crhoden428@gmail.com", {
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
          <input
            {...register("name", { required: true })}
            placeholder="Your name *"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone number *"
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <input
          {...register("zip")}
          placeholder="ZIP code"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none"
        />
        <select
          {...register("service")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:border-orange-500 focus:outline-none"
        >
          <option value="">Service type...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>

      {!compact && (
        <textarea
          {...register("message")}
          placeholder="Describe what you need hauled (optional)"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none resize-none"
        />
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
