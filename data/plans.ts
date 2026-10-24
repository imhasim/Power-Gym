export interface Plan {
  id: string;
  name: string;
  tagline: string;
  code: string;
  price: {
    monthly: number;
    quarterly: number; // 15% discount
    yearly: number;    // 30% discount
  };
  highlight?: boolean;
  popularBadge?: string;
  features: {
    text: string;
    included: boolean;
  }[];
  perks: string[];
}

export const plansData: Plan[] = [
  {
    id: "starter-power",
    name: "Starter Power",
    tagline: "Essential strength foundation for dedicated fitness seekers",
    code: "[ TIER // 01 ]",
    price: {
      monthly: 999,
      quarterly: 2549, // ~849/mo (15% off)
      yearly: 8399     // ~699/mo (30% off)
    },
    features: [
      { text: "Full Access to Main Gym Floor & Free Weights", included: true },
      { text: "Locker & Rain Shower Facilities", included: true },
      { text: "Power Gym Mobile Tracking App", included: true },
      { text: "1 Comprehensive Biometrics & InBody Scan", included: true },
      { text: "Unlimited Group Classes (HIIT / Mobility)", included: false },
      { text: "Contrast Therapy (Cold Plunge & Finnish Sauna)", included: false },
      { text: "Dedicated 1-on-1 Certified Coach & Diet Blueprint", included: false },
      { text: "VIP Priority Class Reservation", included: false }
    ],
    perks: ["Open gym access (05:00 - 22:00)", "Free filtered hydration", "Standard locker storage"]
  },
  {
    id: "pro-athlete",
    name: "Pro Athlete",
    tagline: "The complete performance ecosystem for rapid results",
    code: "[ TIER // 02 — RECOMMENDED ]",
    price: {
      monthly: 1799,
      quarterly: 4589, // ~1529/mo (15% off)
      yearly: 15119    // ~1259/mo (30% off)
    },
    highlight: true,
    popularBadge: "MOST POPULAR",
    features: [
      { text: "Full Access to Main Gym Floor & Free Weights", included: true },
      { text: "Locker & Rain Shower Facilities", included: true },
      { text: "Power Gym Mobile Tracking App", included: true },
      { text: "Monthly InBody Body Composition & Scan", included: true },
      { text: "Unlimited Group Classes (HIIT, Boxing, Yoga)", included: true },
      { text: "Unlimited Cold Plunge & Finnish Sauna Access", included: true },
      { text: "Customized Macro & Nutrition Blueprint", included: true },
      { text: "2 Monthly 1-on-1 Master Coach Technique Sessions", included: true }
    ],
    perks: ["24/7 Biometric access", "Free guest pass monthly", "Unlimited contrast recovery lounge", "Towel service"]
  },
  {
    id: "elite-vip",
    name: "Elite VIP",
    tagline: "Uncompromised 1-on-1 executive coaching, recovery & concierge",
    code: "[ TIER // 03 ]",
    price: {
      monthly: 2999,
      quarterly: 7649, // ~2549/mo (15% off)
      yearly: 25199    // ~2099/mo (30% off)
    },
    features: [
      { text: "Full Access to Main Gym Floor & Free Weights", included: true },
      { text: "Locker & Rain Shower Facilities", included: true },
      { text: "Power Gym Mobile Tracking App", included: true },
      { text: "Weekly InBody & Muscle Hypertrophy Kinematics", included: true },
      { text: "Unlimited Group Classes with VIP Front-Row Spot", included: true },
      { text: "Private Cold Plunge & Sauna Suite Access", included: true },
      { text: "Weekly 1-on-1 Master Coach Training (4 sessions/mo)", included: true },
      { text: "Dedicated Sports Nutritionist & Supplement Plan", included: true }
    ],
    perks: ["Private executive locker", "Complimentary pre/post workout shakes", "Valet parking", "Unlimited guest passes"]
  }
];

export const comparisonMatrix = [
  { feature: "Access Hours", starter: "05:00 - 22:00", pro: "24/7 Access", elite: "24/7 VIP Access" },
  { feature: "Eleiko Barbell & Olympic Platforms", starter: "✓", pro: "✓", elite: "✓ Reserved Priority" },
  { feature: "Group Fitness & HIIT Classes", starter: "Pay per class", pro: "Unlimited", elite: "Unlimited + Front Spot" },
  { feature: "Contrast Therapy (Cold Plunge & Sauna)", starter: "—", pro: "Unlimited", elite: "Private Suite" },
  { feature: "1-on-1 Coaching Sessions", starter: "—", pro: "2 Sessions / mo", elite: "4 Sessions / mo" },
  { feature: "Custom Macro & Nutrition Guide", starter: "Basic PDF", pro: "Personalized", elite: "Dedicated Nutritionist" },
  { feature: "InBody Scan & Velocity Tracking", starter: "1 scan", pro: "Monthly", elite: "Weekly Analysis" },
  { feature: "Towel Service & Shakes", starter: "—", pro: "Towel Service", elite: "Towel + Daily Protein Shake" }
];
