import {
  BadgeCheck,
  Building2,
  Bug,
  Droplets,
  Home,
  LucideIcon,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Waves
} from "lucide-react";

export const contact = {
  phoneDisplay: "+971 55 556 6257",
  phoneHref: "tel:+971555566257",
  whatsappHref: "https://wa.me/971555566257?text=Hello%20JPC%20Dubai%2C%20I%20would%20like%20to%20book%20a%20service.",
  email: "info@jpcdubai.com",
  address: "Office No. 907, Al Attar Tower, Karama, Dubai, UAE",
  hours: "Monday to Saturday, 8:00 AM - 5:00 PM",
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "https://share.google/PicsCAPkAofNdSOgk",
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4379.234048477566!2d55.3092415!3d25.249070399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43288b2936f5%3A0x83f0bd5c53a6598e!2sJumeira%20Pest%20Control%20Service!5e1!3m2!1sen!2sae!4v1787743416936!5m2!1sen!2sae"
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/jumeirapestcontrol" },
  { label: "Google Business", href: contact.googleBusinessUrl }
];

export const dubaiAreas = [
  "Downtown Dubai",
  "Dubai Marina",
  "JLT",
  "Business Bay",
  "Jumeirah",
  "Karama",
  "Deira",
  "Al Barsha",
  "Arabian Ranches",
  "Palm Jumeirah",
  "Mirdif",
  "Dubai Silicon Oasis"
];

export type ServiceCategory = "Pest Control" | "Cleaning" | "Commercial";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  image: string;
  price: string;
  summary: string;
  benefits: string[];
  issues: string[];
  method: string[];
  packages: { name: string; price: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-pest-control",
    title: "Residential Pest Control",
    category: "Pest Control",
    icon: Home,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 149",
    summary: "Discreet villa and apartment treatments for ants, roaches, flies, spiders, and general pests.",
    benefits: ["Family-aware scheduling", "Targeted gel and spray options", "Follow-up recommendations"],
    issues: ["Kitchen infestations", "Balcony and drain pests", "Recurring seasonal pests"],
    method: ["Inspect entry points and activity zones", "Apply targeted municipality-approved products", "Seal practical access points", "Document prevention guidance"],
    packages: [
      { name: "Apartment", price: "AED 149+", detail: "General pest treatment for studio to 2BR homes" },
      { name: "Villa", price: "AED 299+", detail: "Indoor and perimeter pest management" },
      { name: "Annual Care", price: "Custom", detail: "Scheduled visits and priority callouts" }
    ]
  },
  {
    slug: "commercial-pest-control",
    title: "Commercial Pest Control",
    category: "Commercial",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    price: "Custom contract pricing",
    summary: "Compliance-led pest management for offices, restaurants, warehouses, retail, and facilities.",
    benefits: ["Audit-ready reporting", "After-hours visits", "Integrated pest management"],
    issues: ["Food safety risks", "Storage and loading bay pests", "Tenant complaints"],
    method: ["Survey risk zones", "Build a service calendar", "Install monitoring points", "Report trends and corrective actions"],
    packages: [
      { name: "Office", price: "AED 249+", detail: "Monthly or quarterly service plans" },
      { name: "Food Business", price: "Custom", detail: "HACCP-aware monitoring and records" },
      { name: "Warehouse", price: "Custom", detail: "Rodent, bird, and crawling insect control" }
    ]
  },
  {
    slug: "termite-control",
    title: "Termite Control",
    category: "Pest Control",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    price: "Inspection required",
    summary: "Pre- and post-construction termite protection for homes, fit-outs, and commercial sites.",
    benefits: ["Soil and drill treatments", "Warranty options", "Structural risk assessment"],
    issues: ["Wood damage", "Subterranean termite activity", "False ceiling infestations"],
    method: ["Locate activity and moisture sources", "Select baiting, trenching, or drilling plan", "Treat affected zones", "Schedule warranty inspections"],
    packages: [
      { name: "Inspection", price: "AED 99+", detail: "Site check with recommendation" },
      { name: "Post Construction", price: "Custom", detail: "Drill and inject treatment" },
      { name: "Pre Construction", price: "Custom", detail: "Soil treatment before flooring" }
    ]
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    category: "Pest Control",
    icon: Bug,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 199",
    summary: "Room-by-room inspection and treatment for apartments, hotels, staff housing, and villas.",
    benefits: ["Mattress and frame focus", "Heat-aware preparation guidance", "Return visit options"],
    issues: ["Bites and spotting", "Luggage transfer", "Hotel room complaints"],
    method: ["Inspect seams, headboards, and furniture", "Prepare rooms safely", "Apply residual treatment", "Recheck activity after treatment window"],
    packages: [
      { name: "Single Room", price: "AED 199+", detail: "Focused treatment and checklist" },
      { name: "Apartment", price: "AED 349+", detail: "Multiple-room treatment" },
      { name: "Hospitality", price: "Custom", detail: "Rapid room recovery program" }
    ]
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    category: "Cleaning",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 249",
    summary: "Detailed move-in, move-out, post-renovation, and scheduled deep cleaning services.",
    benefits: ["Kitchen and bathroom detailing", "Trained cleaning crews", "Optional disinfection"],
    issues: ["Move-in residue", "Grease and scale", "Post-maintenance dust"],
    method: ["Confirm checklist and room count", "Protect surfaces and fixtures", "Clean top-to-bottom", "Supervisor walkthrough"],
    packages: [
      { name: "Studio/1BR", price: "AED 249+", detail: "Standard deep clean" },
      { name: "Villa", price: "AED 599+", detail: "Crew-based full property clean" },
      { name: "Post Fit-out", price: "Custom", detail: "Dust and debris detail cleaning" }
    ]
  },
  {
    slug: "sanitization-disinfection",
    title: "Sanitization & Disinfection",
    category: "Cleaning",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 199",
    summary: "Professional surface disinfection for homes, offices, clinics, gyms, and shared spaces.",
    benefits: ["Low-disruption service", "High-touch point focus", "Certificate-ready records"],
    issues: ["Shared workspace hygiene", "Post-illness cleaning", "Tenant handover requirements"],
    method: ["Identify high-touch areas", "Clean visible soil", "Apply approved disinfectant", "Ventilate and hand over safely"],
    packages: [
      { name: "Home", price: "AED 199+", detail: "Apartment or villa disinfection" },
      { name: "Office", price: "AED 349+", detail: "Desk, meeting room, and pantry focus" },
      { name: "Facility", price: "Custom", detail: "Large-area scheduled sanitization" }
    ]
  },
  {
    slug: "water-tank-cleaning",
    title: "Water Tank Cleaning",
    category: "Cleaning",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 299",
    summary: "Hygienic water tank cleaning, sludge removal, and disinfection for villas and buildings.",
    benefits: ["Tank-safe procedures", "Before/after documentation", "Scheduled reminders"],
    issues: ["Odor or discoloration", "Sediment build-up", "Annual hygiene compliance"],
    method: ["Isolate and drain tank", "Remove sediment", "Scrub and disinfect surfaces", "Flush and restore supply"],
    packages: [
      { name: "Villa Tank", price: "AED 299+", detail: "Single domestic tank" },
      { name: "Building", price: "Custom", detail: "Multiple tanks and access planning" },
      { name: "Maintenance Plan", price: "Custom", detail: "Semi-annual scheduled cleaning" }
    ]
  },
  {
    slug: "ac-duct-cleaning",
    title: "AC Duct Cleaning",
    category: "Cleaning",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    price: "Starting from AED 399",
    summary: "Air duct hygiene service for cleaner indoor air and reduced dust circulation.",
    benefits: ["Vent and grille cleaning", "Odor reduction", "Improved indoor comfort"],
    issues: ["Dusty airflow", "Musty odor", "Allergy complaints"],
    method: ["Inspect ducts and vents", "Protect interiors", "Clean ducts with specialist tools", "Sanitize reachable components"],
    packages: [
      { name: "Apartment", price: "AED 399+", detail: "Selected vents and AC points" },
      { name: "Villa", price: "AED 799+", detail: "Multi-zone duct service" },
      { name: "Commercial", price: "Custom", detail: "Survey-led facility quotation" }
    ]
  }
];

export const reviews = [
  { name: "Ahmed K.", rating: 5, date: "2026", text: "Fast response for a villa pest issue. The technician explained the treatment and prevention clearly." },
  { name: "Priya S.", rating: 5, date: "2026", text: "Booked deep cleaning and sanitization before moving in. Professional team and the handover was spotless." },
  { name: "Noura A.", rating: 5, date: "2025", text: "Reliable commercial pest control visits for our office. Reports are clear and scheduling is easy." },
  { name: "Michael R.", rating: 4, date: "2025", text: "Good bed bug treatment and follow-up guidance. Booking by WhatsApp was quick." }
];

export const blogFallbacks = [
  "How to prepare your Dubai apartment for pest control",
  "When should villas schedule water tank cleaning?",
  "Signs your office needs a commercial pest management plan"
];
