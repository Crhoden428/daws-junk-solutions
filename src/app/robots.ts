import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/book/confirmation", "/api/"],
    },
    sitemap: `${BUSINESS.domain}/sitemap.xml`,
  };
}
