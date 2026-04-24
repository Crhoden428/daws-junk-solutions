import { BUSINESS, HOURS, SERVICE_AREAS, FAQS } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    description:
      "Professional junk removal serving Pearland, TX and surrounding South Houston communities. Licensed, insured, family-owned, eco-friendly.",
    url: BUSINESS.domain,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    image: `${BUSINESS.domain}/og-default.jpg`,
    logo: `${BUSINESS.domain}/logo.png`,
    slogan: BUSINESS.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.5635,
      longitude: -95.286,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      addressRegion: "TX",
    })),
    openingHoursSpecification: HOURS.schema,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Junk Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Appliance Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Cleanout" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estate Cleanout" } },
      ],
    },
    sameAs: [`https://www.facebook.com/dawsjunksolutions`],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.domain}${item.href}`,
    })),
  };
}
