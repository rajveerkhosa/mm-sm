export const siteConfig = {
  // Brand Information
  name: "Lerdo Travel Plaza",
  alternativeName: "Lerdo Travel Center",
  truckBrand: "Lerdo Truck Center",
  tagline: "Clean fuel stop for professional drivers",

  // Contact Information
  phone: "(555) 123-4567", // EDIT: Add your phone number
  email: "info@lerdotravelplaza.com", // EDIT: Add your email

  // Location
  address: {
    street: "1234 Highway 99", // EDIT: Add your street address
    city: "Lerdo",
    state: "CA",
    zip: "93352",
    coordinates: {
      lat: 35.3619, // Lerdo, CA coordinates
      lng: -119.1012,
    },
  },

  // Hours
  hours: "24/7", // EDIT: Update if different
  hoursDetailed: [
    { day: "Monday - Sunday", hours: "Open 24 Hours" },
  ],

  // Google Maps
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=35.3619,-119.1012", // EDIT: Update with exact location

  // Fuel Pricing (update these regularly)
  fuelPrices: {
    car: {
      unleaded: "$3.89", // EDIT: Update regularly
      premium: "$4.19", // EDIT: Update regularly
    },
    truck: {
      diesel: "$4.29", // EDIT: Update regularly
      def: "$3.49", // EDIT: Update regularly
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
      name: "Clean Showers",
      available: true,
      icon: "shower",
    },
    {
      name: "Free Wi-Fi",
      available: true,
      icon: "wifi",
    },
    {
      name: "Hot Food",
      available: true,
      icon: "utensils",
    },
    {
      name: "CAT Scales",
      available: true,
      icon: "scale",
    },
    {
      name: "DEF at Pump",
      available: true,
      icon: "droplet",
    },
  ],

  // Truck Parking
  parking: {
    capacity: "50+ spaces", // EDIT: Update with actual capacity
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
    name: "Trucker Deli & Grill", // EDIT: Update with actual name
    description: "Hot meals, cold drinks, and everything you need on the road.",
    features: [
      "Fresh hot food daily",
      "Coffee bar",
      "Grab-and-go options",
      "Snacks and beverages",
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
      answer: "Yes! We have 50+ truck parking spaces available on a first-come, first-served basis. No reservation needed.",
    },
    {
      question: "What fuel do you offer?",
      answer: "We offer high-flow diesel, unleaded gasoline, and DEF (Diesel Exhaust Fluid) at the pump.",
    },
    {
      question: "Do you have showers?",
      answer: "Yes, we have clean shower facilities available 24/7 for professional drivers.",
    },
    {
      question: "Is there Wi-Fi available?",
      answer: "Yes, we offer free Wi-Fi throughout the facility for all customers.",
    },
    {
      question: "Do you have a scale?",
      answer: "Yes, we have a CAT Scale on-site for weighing your vehicle.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
