export const BUSINESS = {
  name: "Daw's Junk Solutions",
  tagline: "Better Call Daw",
  phone: "281-202-9668",
  phoneHref: "tel:+12812029668",
  email: "dawsjunksolutions@gmail.com",
  emailHref: "mailto:dawsjunksolutions@gmail.com",
  city: "Pearland",
  state: "TX",
  zip: "77584",
  domain: "https://dawsjunk.com",
  googleMapsUrl: "https://maps.google.com/?q=Pearland,TX",
} as const;

export const HOURS = {
  weekdays: "7am – 7pm",
  saturday: "7am – 7pm",
  sunday: "By appointment",
  schema: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
} as const;

export const SERVICE_AREAS = [
  { name: "Pearland", slug: "pearland-tx", primary: true },
  { name: "Friendswood", slug: "friendswood-tx" },
  { name: "Manvel", slug: "manvel-tx" },
  { name: "League City", slug: "league-city-tx" },
  { name: "Alvin", slug: "alvin-tx" },
  { name: "Iowa Colony", slug: "iowa-colony-tx" },
  { name: "Shadow Creek Ranch", slug: "shadow-creek-ranch-tx" },
  { name: "Brookside Village", slug: "brookside-village-tx" },
  { name: "South Houston", slug: "south-houston-tx" },
] as const;

export const SERVICES = [
  {
    name: "Junk Removal",
    slug: "junk-removal",
    icon: "Trash2",
    shortDesc: "Full-service junk hauling — we load, we haul, you relax.",
    primary: true,
  },
  {
    name: "Furniture Removal",
    slug: "furniture-removal",
    icon: "Sofa",
    shortDesc: "Couches, beds, dressers, tables — gone same day.",
  },
  {
    name: "Appliance Removal",
    slug: "appliance-removal",
    icon: "Refrigerator",
    shortDesc: "Fridges, washers, dryers, dishwashers hauled away safely.",
  },
  {
    name: "Garage Cleanout",
    slug: "garage-cleanout",
    icon: "Home",
    shortDesc: "From packed to spotless. We clear it all in one trip.",
  },
  {
    name: "Estate Cleanout",
    slug: "estate-cleanout",
    icon: "Building",
    shortDesc: "Compassionate, efficient cleanouts for estates of any size.",
  },
  {
    name: "Yard Waste Removal",
    slug: "yard-waste-removal",
    icon: "Leaf",
    shortDesc: "Brush, limbs, stumps, and debris hauled off your property.",
  },
  {
    name: "Construction Debris",
    slug: "construction-debris",
    icon: "HardHat",
    shortDesc: "Demo waste, drywall, lumber — cleared fast for contractors.",
  },
  {
    name: "Hoarding Cleanout",
    slug: "hoarding-cleanout",
    icon: "Package",
    shortDesc: "Discreet, judgment-free cleanouts handled with care.",
  },
  {
    name: "Mattress Disposal",
    slug: "mattress-disposal",
    icon: "BedDouble",
    shortDesc: "Any size mattress removed and properly disposed.",
  },
  {
    name: "Eviction Cleanout",
    slug: "eviction-cleanout",
    icon: "Key",
    shortDesc: "Fast property cleanouts for landlords and property managers.",
  },
  {
    name: "Storage Unit Cleanout",
    slug: "storage-unit-cleanout",
    icon: "Box",
    shortDesc: "We empty it so you stop paying rent on stuff you don't want.",
  },
  {
    name: "Commercial Junk Removal",
    slug: "commercial-junk-removal",
    icon: "Briefcase",
    shortDesc: "Office furniture, retail fixtures, renovation debris — handled.",
  },
] as const;

export const PRICING = [
  { label: "Minimum Load", size: "Small items / 1–2 pieces", range: "$99 – $150" },
  { label: "Quarter Truck", size: "A few bags + small items", range: "$150 – $225" },
  { label: "Half Truck", size: "Room cleanout or medium load", range: "$250 – $375" },
  { label: "Three-Quarter Truck", size: "Large room or garage partial", range: "$375 – $500" },
  { label: "Full Truckload", size: "Full garage, estate, or heavy haul", range: "$500 – $700+" },
] as const;

export const FAQS = [
  {
    q: "How much does junk removal cost in Pearland, TX?",
    a: "Pricing starts at $99 for small loads and goes up to $700+ for a full truckload. We give you an upfront price before we start — no hidden fees, no surprises.",
  },
  {
    q: "Do you offer same-day junk removal in Pearland?",
    a: "Yes. Same-day and next-day pickups are available throughout Pearland and South Houston. Call or text 281-202-9668 and we'll get you scheduled fast.",
  },
  {
    q: "What items do you take?",
    a: "We take furniture, appliances, mattresses, electronics, yard waste, construction debris, and most household junk. We cannot take hazardous materials, paint, motor oil, or asbestos.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Daw's Junk Solutions is fully licensed and insured in Texas. Your property and our crew are protected on every job.",
  },
  {
    q: "What happens to my junk after you haul it?",
    a: "We sort everything. Usable items go to local donation centers, recyclables go to the proper facilities, and only what can't be repurposed heads to the landfill. We keep South Texas clean.",
  },
  {
    q: "Do I have to be home during the pickup?",
    a: "Not necessarily. As long as we can access the items and you've approved the quote, many customers let us handle it while they're at work.",
  },
] as const;
