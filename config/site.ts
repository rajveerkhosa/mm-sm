export const siteConfig = {
  // Brand Information
  name: "Lerdo Travel Plaza",
  alternativeName: "Lerdo Travel Center",
  truckBrand: "Lerdo Truck Center",
  tagline: "Clean fuel stop for professional drivers",

  // Contact Information
  phone: "(661) 594-8090",
  email: "lerdotc@gmail.com",

  // Location
  address: {
    street: "24574 West Lerdo Hwy",
    city: "Buttonwillow",
    state: "CA",
    zip: "93206",
    coordinates: {
      lat: 35.3619,
      lng: -119.1012,
    },
  },

  // Hours
  hours: "24/7", // EDIT: Update if different
  hoursDetailed: [
    { day: "Monday - Sunday", hours: "Open 24 Hours" },
  ],

  // Google Maps
  mapsUrl: "https://share.google/WtBhVihSPRv4BcNU0",

  // Fuel Pricing (update these regularly)
  fuelPrices: {
    car: {
      unleaded: "$5.39", // 87 octane
      premium: "$5.79",  // 91 octane
      e85: "Call",       // E85 — call for current price
    },
    truck: {
      diesel: "$6.37",
      def: "$3.49",      // EDIT: Update regularly
    },
  },

  // Social Media
  social: {
    facebook: "", // EDIT: Add your Facebook URL
    instagram: "", // EDIT: Add your Instagram URL
    twitter: "", // EDIT: Add your Twitter URL
  },

  // Amenities (Important ones only)
  amenities: [
    {
      name: "24/7 Access",
      available: true,
      icon: "clock",
    },
    {
      name: "High-Flow Diesel",
      available: true,
      icon: "fuel",
    },
    {
      name: "Truck Parking",
      available: true,
      icon: "truck",
    },
    {
      name: "Showers Coming Soon",
      available: false,
      icon: "shower",
    },
    {
      name: "Tandoori Nights Indian",
      available: true,
      icon: "utensils",
    },
    {
      name: "Chester's Chicken",
      available: true,
      icon: "utensils",
    },
    {
      name: "Hot Food Daily",
      available: true,
      icon: "utensils",
    },
    {
      name: "DEF at Pump",
      available: true,
      icon: "droplet",
    },
  ],

  // Truck Parking
  parking: {
    capacity: "20+ spaces",
    policy: "First come, first served. No reservation required.",
    features: [
      "Well-lit parking area",
      "24/7 security monitoring",
      "Easy in and out access",
      "Level parking spots",
    ],
  },

  // Food & Store
  store: {
    name: "Tandoori Nights & Chester's Chicken",
    description: "Authentic Indian cuisine from Tandoori Nights plus famous Chester's Chicken — all under one roof.",
    features: [
      "Tandoori Nights — authentic Indian dishes",
      "Chester's Chicken — fresh fried chicken",
      "Hot meals, snacks & cold drinks",
      "Grab-and-go options 24/7",
    ],
  },

  // FAQs
  faqs: [
    {
      question: "What are your hours?",
      answer: "We're open 24 hours a day, 7 days a week, 365 days a year.",
    },
    {
      question: "Do you have truck parking?",
      answer: "Yes! We have 20+ truck parking spaces available on a first-come, first-served basis. No reservation needed.",
    },
    {
      question: "What fuel do you offer?",
      answer: "We offer 87 octane regular unleaded, 91 octane premium, E85, ultra low sulfur diesel, and DEF (Diesel Exhaust Fluid) at the pump.",
    },
    {
      question: "Do you have showers?",
      answer: "Showers are coming soon to Lerdo Travel Plaza. Check back for updates.",
    },
    {
      question: "What food do you have on-site?",
      answer: "We're proud to host Tandoori Nights for authentic Indian cuisine and Chester's Chicken for fresh fried chicken — both serving daily.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
