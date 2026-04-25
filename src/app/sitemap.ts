import { MetadataRoute } from "next";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.domain;
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/locations`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/pricing`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${base}/reviews`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const servicePages = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const locationPages = SERVICE_AREAS.map((a) => ({
    url: `${base}/locations/${a.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...servicePages, ...locationPages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
