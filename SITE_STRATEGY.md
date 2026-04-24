# Daw's Junk Solutions — Website Strategy
**Business:** Daw's Junk Solutions | Pearland, TX | Greater Houston South suburbs
**Stack:** Next.js → GitHub (`Crhoden428`) → Cloudflare Pages

---

## 1. Competitive Landscape (Pearland Market)

| Competitor | Strength | Weakness |
|---|---|---|
| Bubba's Junk Removal | Strong Pearland SEO, "Book Online" CTA, 24/7 | No public pricing, generic branding |
| Clear Your Junk | Covers Pearland/Friendswood/Alvin | Dated design, weak mobile UX |
| Clearout Junk | "$99" price anchor, same-day | Thin content, no blog |
| 1-800-GOT-JUNK | National brand recognition | Expensive, impersonal, slow quote |
| Speedy Junk Removal | Family-owned local angle | Minimal web presence |
| Fire Dawgs | Eco-friendly positioning | National franchise, not local |

**Our differentiators to emphasize:**
- Fully transparent pricing with ranges (competitors hide this — huge trust gap)
- Locally owned & operated in Pearland (vs national chains)
- Eco-first: donation diversion + recycling before landfill
- Same-day and next-day availability
- Text-to-book option (frictionless for mobile users)

---

## 2. Site Architecture (URL Silo Structure)

```
/ (Homepage)
├── /services/                          ← Services hub
│   ├── /services/junk-removal/         ← PRIMARY service page
│   ├── /services/furniture-removal/
│   ├── /services/appliance-removal/
│   ├── /services/garage-cleanout/
│   ├── /services/estate-cleanout/
│   ├── /services/yard-waste-removal/
│   ├── /services/construction-debris/
│   ├── /services/hoarding-cleanout/
│   ├── /services/mattress-disposal/
│   ├── /services/eviction-cleanout/
│   ├── /services/storage-unit-cleanout/
│   └── /services/commercial-junk-removal/
├── /locations/                         ← Location hub
│   ├── /locations/pearland-tx/         ← PRIMARY location page
│   ├── /locations/friendswood-tx/
│   ├── /locations/manvel-tx/
│   ├── /locations/league-city-tx/
│   ├── /locations/alvin-tx/
│   ├── /locations/iowa-colony-tx/
│   ├── /locations/shadow-creek-ranch-tx/
│   ├── /locations/brookside-village-tx/
│   └── /locations/south-houston-tx/
├── /pricing/                           ← Transparent pricing guide
├── /about/                             ← Local story + team + credentials
├── /reviews/                           ← Aggregated reviews page
├── /contact/                           ← Contact + service area map
├── /book/                              ← Dedicated booking page
└── /blog/                              ← Content cluster hub
    ├── /blog/junk-removal-cost-pearland-tx/
    ├── /blog/what-items-junk-removal-takes-texas/
    ├── /blog/same-day-junk-removal-pearland/
    ├── /blog/junk-removal-vs-dumpster-rental/
    ├── /blog/garage-cleanout-tips-pearland/
    ├── /blog/how-to-dispose-appliances-pearland-tx/
    ├── /blog/estate-cleanout-guide-pearland/
    └── /blog/eco-friendly-junk-disposal-where-does-junk-go/
```

**Internal linking rules:**
- Every service page → links to all location pages + /pricing + /book
- Every location page → links to all service pages + /book
- Blog posts → link to relevant service page + /pricing + /book
- Homepage → links to all 6 top services + top 3 locations + /pricing

---

## 3. Keyword Targets

### Primary (money keywords)
| Keyword | Intent | Target Page |
|---|---|---|
| junk removal Pearland TX | transactional | /locations/pearland-tx/ |
| junk removal near me | transactional | /locations/pearland-tx/ |
| same day junk removal Pearland | transactional | /locations/pearland-tx/ |
| furniture removal Pearland TX | transactional | /services/furniture-removal/ |
| appliance removal Pearland TX | transactional | /services/appliance-removal/ |
| garage cleanout Pearland TX | transactional | /services/garage-cleanout/ |
| estate cleanout Pearland | transactional | /services/estate-cleanout/ |
| junk hauling Pearland Texas | transactional | / (homepage) |
| junk removal Friendswood TX | transactional | /locations/friendswood-tx/ |
| junk removal Manvel TX | transactional | /locations/manvel-tx/ |
| junk removal League City TX | transactional | /locations/league-city-tx/ |

### Secondary (service + location combos)
- construction debris removal Pearland
- yard waste removal Pearland TX
- hoarding cleanout Pearland
- mattress disposal Pearland TX
- eviction cleanout Pearland
- commercial junk removal Pearland TX
- storage unit cleanout Pearland

### Informational (blog / answer engine)
- how much does junk removal cost in Pearland TX
- what items can junk removal take in Texas
- junk removal vs dumpster rental Pearland
- how to prepare for junk removal pickup
- where does junk go after removal
- eco friendly junk disposal Houston area

---

## 4. Metadata Templates

### Homepage
```
Title:    Junk Removal Pearland TX | Same-Day Service | Daw's Junk Solutions
Desc:     Pearland's trusted junk removal team. Same-day pickups, upfront pricing,
          eco-friendly disposal. Serving Pearland, Friendswood, Manvel & League City.
          Call or book online now.
OG Title: Daw's Junk Solutions — Pearland TX Junk Removal
OG Desc:  Same-day junk removal starting from $99. Locally owned in Pearland, TX.
```

### Service Pages (`[Service]` = e.g. "Furniture Removal")
```
Title:    [Service] Pearland TX | Free Estimate | Daw's Junk Solutions
Desc:     Need [service] in Pearland, TX? Daw's Junk Solutions offers same-day
          pickup, upfront pricing, and eco-friendly disposal. Get a free estimate.
```

### Location Pages (`[City]` = e.g. "Friendswood")
```
Title:    Junk Removal [City] TX | Same-Day Service | Daw's Junk Solutions
Desc:     Fast, affordable junk removal in [City], TX. Locally owned, licensed &
          insured. Same-day available. Serving [City] and all of South Houston.
```

### Blog Posts
```
Title:    [Post Title] | Daw's Junk Solutions — Pearland, TX
Desc:     [1-2 sentence summary with primary keyword + local intent]
```

### Global OG/Twitter defaults
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Daw's Junk Solutions" />
<meta property="og:image" content="/og-default.jpg" /> <!-- 1200x630 branded truck photo -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## 5. Schema Markup (JSON-LD)

### Global (every page — in _document or layout)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dawsjunk.com/#business",
  "name": "Daw's Junk Solutions",
  "description": "Professional junk removal serving Pearland TX and surrounding areas. Licensed, insured, eco-friendly.",
  "url": "https://dawsjunk.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@dawsjunk.com",
  "priceRange": "$$",
  "image": "https://dawsjunk.com/og-default.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pearland",
    "addressRegion": "TX",
    "postalCode": "77584",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.5635,
    "longitude": -95.2860
  },
  "areaServed": [
    {"@type": "City", "name": "Pearland", "addressRegion": "TX"},
    {"@type": "City", "name": "Friendswood", "addressRegion": "TX"},
    {"@type": "City", "name": "Manvel", "addressRegion": "TX"},
    {"@type": "City", "name": "League City", "addressRegion": "TX"},
    {"@type": "City", "name": "Alvin", "addressRegion": "TX"},
    {"@type": "City", "name": "Iowa Colony", "addressRegion": "TX"},
    {"@type": "City", "name": "Shadow Creek Ranch", "addressRegion": "TX"},
    {"@type": "City", "name": "Brookside Village", "addressRegion": "TX"}
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Junk Removal Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Junk Removal"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Furniture Removal"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Appliance Removal"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Garage Cleanout"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Estate Cleanout"}}
    ]
  },
  "sameAs": [
    "https://www.facebook.com/dawsjunksolutions",
    "https://www.google.com/maps?cid=XXXXXXXXX"
  ]
}
```

### FAQ Schema (homepage + service pages)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost in Pearland, TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Junk removal in Pearland typically ranges from $99 for a small load to $600+ for a full truckload. Daw's Junk Solutions provides upfront pricing with no hidden fees — get a free estimate by calling or booking online."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day junk removal in Pearland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Daw's Junk Solutions offers same-day and next-day junk removal throughout Pearland and South Houston. Book online or call us and we'll confirm your window within minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What items do you take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We take furniture, appliances, mattresses, electronics, yard waste, construction debris, and most household junk. We cannot take hazardous materials, paint, or asbestos."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Daw's Junk Solutions is fully licensed and insured in Texas, protecting you and your property on every job."
      }
    }
  ]
}
```

### BreadcrumbList (all inner pages)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://dawsjunk.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://dawsjunk.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Garage Cleanout", "item": "https://dawsjunk.com/services/garage-cleanout"}
  ]
}
```

---

## 6. Homepage Section-by-Section Blueprint

```
┌─────────────────────────────────────────────────────────┐
│ HEADER (sticky)                                         │
│ Logo | Nav: Services / Locations / Pricing / About      │
│ ☎ (XXX) XXX-XXXX  [Book Now →]                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HERO                                                    │
│ H1: Pearland's Junk Removal Crew                        │
│     Same-Day Service. Upfront Pricing. Eco-Friendly.   │
│                                                         │
│ [Quick Quote Form: ZIP / Service type / Date → GET QUOTE]│
│ Or call: (XXX) XXX-XXXX · Text us · Book Online        │
│                                                         │
│ [Background: crew photo or truck with Pearland bg]      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TRUST BAR (4 icons)                                     │
│ ✓ Licensed & Insured  ✓ 5-Star Rated  ✓ Eco-Friendly  │
│ ✓ Locally Owned in Pearland, TX                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ SERVICES GRID (6 cards)                                 │
│ Junk Removal | Furniture | Appliances                   │
│ Garage Cleanout | Estate Cleanout | Yard Waste          │
│ [View All Services →]                                   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HOW IT WORKS (3 steps)                                  │
│ 1. Book Online or Call  →  2. We Show Up  →  3. Done   │
│ (same-day slots available)                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PRICING GUIDE                                           │
│ Small load (¼ truck): $99–$175                         │
│ Medium load (½ truck): $200–$350                       │
│ Large load (¾ truck): $350–$500                        │
│ Full truckload: $500–$700                              │
│ ★ No hidden fees. Price includes labor + disposal.     │
│ [Get Your Exact Price →]                               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ SERVICE AREA MAP                                        │
│ Interactive map showing: Pearland, Friendswood, Manvel, │
│ League City, Alvin, Iowa Colony, Shadow Creek Ranch     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ REVIEWS (Google stars widget or static cards)           │
│ "★★★★★ — [Name], Pearland TX" × 3 rotating quotes     │
│ 4.9/5 · 200+ Google reviews  [Read All Reviews →]      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ BEFORE / AFTER GALLERY                                  │
│ 6-image grid (3 before / 3 after jobs)                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FAQ (schema-marked, accordion)                          │
│ How much does it cost? | Same-day? | What do you take?  │
│ Licensed & insured? | What happens to my junk?          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FINAL CTA BANNER                                        │
│ "Ready to reclaim your space?"                         │
│ [Book Online] [Call Now] [Text Us]                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FOOTER                                                  │
│ NAP: Daw's Junk Solutions | Pearland, TX | (XXX)XXX-XXXX│
│ Services list | Locations list | Quick links            │
│ Hours | License # | © 2026                             │
└─────────────────────────────────────────────────────────┘
```

---

## 7. Service Page Template

Each `/services/[slug]/` page must include:

1. **H1**: `[Service] in Pearland, TX` (keyword in heading)
2. **Intro paragraph**: What it is, who needs it, why call us
3. **What We Take / What's Included** (bullet list)
4. **What We Can't Take** (paint, hazmat, etc.)
5. **Pricing Range** (transparent — e.g. "Starting from $99")
6. **Our Process** (book → show up → load → haul → done)
7. **Service Area** (which cities we cover for this service)
8. **Reviews** (1–2 service-specific quotes if possible)
9. **FAQ** (service-specific questions, FAQ schema)
10. **CTA** (Book now / Call / Text)
11. **Related Services** (internal links)
12. **Location cross-links** (Pearland, Friendswood, Manvel…)

---

## 8. Location Page Template

Each `/locations/[city-tx]/` page must include:

1. **H1**: `Junk Removal in [City], TX`
2. **Intro**: Mention city neighborhoods (e.g. for Pearland: Shadow Creek Ranch, Silverlake, Southgate, Old Townsite)
3. **Services Available** in this city (grid/list linking to service pages)
4. **Why Choose Daw's** in [City] (local angle — mention proximity, knowledge of area)
5. **Pricing** (same ranges, localized language)
6. **Customer Reviews** from that city specifically
7. **Service Area Map** (zoomed to that city)
8. **Local FAQs** (e.g. "Do you serve all of Pearland?" "Can you pick up same-day in Shadow Creek?")
9. **CTA**: Book, Call, Text
10. **Nearby Locations** internal links

---

## 9. Pricing Page

Structure:
- H1: "Junk Removal Pricing in Pearland, TX — Transparent & Upfront"
- Pricing table by truck size (see homepage pricing guide above)
- Add-on pricing (mattress disposal fee, e-waste, etc.)
- "What's included" (labor, fuel, disposal, eco sorting)
- "What affects the price" (volume, weight, accessibility, stairs)
- FAQ (pricing-specific)
- CTA: Get Your Free Estimate

---

## 10. Technical SEO Checklist

### Site-Wide
- [ ] `robots.txt` — allow all, block `/book/confirmation`
- [ ] `sitemap.xml` — auto-generated, submitted to Google Search Console
- [ ] Canonical tags on every page
- [ ] `hreflang` not needed (English only)
- [ ] 301 redirect: `www` → non-www (or vice versa, pick one)
- [ ] HTTPS enforced (Cloudflare handles this)
- [ ] Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Next.js `<Image>` component for all images (auto WebP, lazy load)
- [ ] Font: self-hosted or `font-display: swap`

### Per-Page
- [ ] Unique `<title>` tag (55–60 chars)
- [ ] Unique meta description (150–160 chars)
- [ ] One `<h1>` per page containing primary keyword
- [ ] OG tags: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter card tags
- [ ] Structured data (LocalBusiness, FAQ, BreadcrumbList, Service)

### Performance
- [ ] Images: compress to WebP, max 200kb per hero image
- [ ] No render-blocking third-party scripts above the fold
- [ ] Google Analytics 4 loaded async
- [ ] Cloudflare CDN caching enabled (static assets cached at edge)

---

## 11. Google Business Profile Action Plan

**Step 1 — Setup (Day 1)**
- Category: Junk Removal Service (primary)
- Secondary: Garbage Collection Service, Waste Management Service
- Name: Daw's Junk Solutions
- Service area: Pearland, Friendswood, Manvel, League City, Alvin, Iowa Colony (NO public address needed — hide it)
- Phone, website, hours

**Step 2 — Optimization (Week 1)**
- Upload 10+ photos: truck, team, before/after, local area
- Write a 750-char business description with keywords: "junk removal Pearland TX", "same-day", "licensed insured"
- Add all services with descriptions and prices
- Pre-populate Q&A section with 5 common questions + answers

**Step 3 — Ongoing (Weekly)**
- Post 2x/week: mix of promotions ("$25 off this weekend"), before/after jobs, tips
- Respond to every review within 24 hours (positive AND negative)
- Add new job photos weekly

**Step 4 — Review Velocity**
- Text customers a Google review link after every completed job
- Target: 20 reviews in first 60 days to establish authority
- Template text: "Thanks for trusting Daw's! If we did a great job, a quick Google review helps us out a ton: [link]"

---

## 12. Content Calendar (First 90 Days)

| Week | Content | Type | Target Keyword |
|---|---|---|---|
| 1 | Site launch + homepage | Page | junk removal Pearland TX |
| 1 | All 12 service pages | Pages | [service] Pearland TX |
| 2 | Pearland location page | Page | junk removal Pearland |
| 2 | Friendswood location page | Page | junk removal Friendswood TX |
| 3 | Manvel + League City pages | Pages | junk removal [city] TX |
| 3 | Pricing page | Page | junk removal cost Pearland |
| 4 | Blog: "How much does junk removal cost in Pearland TX?" | Blog | junk removal cost Pearland TX |
| 5 | Blog: "What items can junk removal take in Texas?" | Blog | what items junk removal takes |
| 6 | Blog: "Same-day junk removal Pearland — what to expect" | Blog | same day junk removal Pearland |
| 7 | Alvin + Iowa Colony + Shadow Creek pages | Pages | junk removal [city] TX |
| 8 | Blog: "Junk removal vs dumpster rental Pearland" | Blog | junk removal vs dumpster rental |
| 10 | Blog: "Garage cleanout tips Pearland TX" | Blog | garage cleanout Pearland |
| 12 | Blog: "How to dispose of appliances in Pearland TX" | Blog | appliance disposal Pearland |

---

## 13. Conversion Architecture

**Mobile (70%+ of traffic):**
- Sticky bottom bar: [Call] [Text] [Book]
- Phone number = `<a href="tel:+1XXXXXXXXXX">` — click-to-call always visible
- Booking form = 3 fields max above the fold (name, zip, service type)
- Load time target: < 2 seconds on 4G

**Desktop:**
- Phone number in top-right header (large, bold)
- "Get Free Estimate" button in nav — high contrast color
- Booking form in hero (right column on desktop)
- Live chat widget (optional, Tidio or Crisp — free tier)

**Trust signals stack (above the fold on every page):**
- Licensed & Insured badge
- "Pearland's #1 Rated" (once reviews support it)
- Google star rating
- Number of jobs completed
- "Eco-Friendly Disposal"

**Lead capture fallbacks:**
- Exit-intent: "Before you go — get 10% off your first pickup"
- SMS opt-in: "Text DAW to XXXXX for a free estimate"

---

## 14. Domain & Deployment

**Domain:** `dawsjunk.com` — already registered, DNS in same Cloudflare account as `parsr.io`. No setup needed.

**Deployment:**
1. Create GitHub repo: `github.com/Crhoden428/daws-junk`
2. Connect to Cloudflare Pages (same as atar-landing)
3. Set custom domain in Cloudflare Pages → `dawsjunk.com` (already in same account)
4. Add env vars in Cloudflare Pages dashboard if needed
5. Auto-deploys on every `git push origin main`

**No wrangler.toml needed** — static Next.js export or Pages-compatible build.

---

## 15. Tech Stack Recommendation

```
Framework:    Next.js 15 (App Router, SSG for all static pages)
Styling:      Tailwind CSS v4
Fonts:        Inter (body) + a bold display font for headings
Icons:        Lucide React
Forms:        React Hook Form + server action to Supabase or Resend
Analytics:    Google Analytics 4 + Google Search Console
Maps:         Google Maps Embed API (static embed, no JS overhead)
Reviews:      Elfsight Google Reviews widget OR static JSON
Hosting:      Cloudflare Pages
Repo:         GitHub (Crhoden428)
```

---

*Research sources: SEO for Home Service, Flamingo Agency, Growth Pro Agency, Whitespark, Synup, WebFX, Bubba's Junk Removal (competitor analysis), Thumbtack Pearland market data, Schema.org, Google Business Profile Help*
