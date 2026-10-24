export interface Plan {
  id: string;
  name: string;
  tagline: string;
  code: string;
  price: {
    monthly: number;
    yearly: number; // 30% discount
  };
  highlight?: boolean;
  popularBadge?: string;
  features: {
    text: string;
    included: boolean;
  }[];
}

export const plansData: Plan[] = [
  {
    id: "starter-power",
    name: "Starter Power",
    tagline: "Basic gym access for anyone who likes to work out on their own",
    code: "[ PLAN // 01 ]",
    price: {
      monthly: 999,
      yearly: 8399 // ~699/mo (30% off)
    },
    features: [
      { text: "Full access to all gym machines and free weights", included: true },
      { text: "Clean lockers and hot water showers", included: true },
      { text: "One free body check and fitness consultation", included: true },
      { text: "Free drinking water station and locker space", included: true },
      { text: "Group fitness classes (HIIT and boxing)", included: false },
      { text: "Ice bath and wooden sauna access", included: false }
    ]
  },
  {
    id: "pro-athlete",
    name: "Pro Athlete",
    tagline: "Our most popular plan with gym floor, classes, and sauna included",
    code: "[ PLAN // 02 — RECOMMENDED ]",
    price: {
      monthly: 1799,
      yearly: 15119 // ~1259/mo (30% off)
    },
    highlight: true,
    popularBadge: "MOST POPULAR",
    features: [
      { text: "Full access to all gym machines and free weights", included: true },
      { text: "Clean lockers, hot showers, and fresh towels", included: true },
      { text: "Unlimited group classes (Cardio, Boxing, Yoga)", included: true },
      { text: "Unlimited ice bath and warm sauna recovery access", included: true },
      { text: "Simple food and diet guide to help you eat healthy", included: true },
      { text: "Monthly progress check to celebrate your results", included: true }
    ]
  },
  {
    id: "elite-vip",
    name: "Elite VIP",
    tagline: "The complete package with your own personal coach by your side",
    code: "[ PLAN // 03 ]",
    price: {
      monthly: 2999,
      yearly: 25199 // ~2099/mo (30% off)
    },
    features: [
      { text: "Full 24/7 access to gym floor, classes, and sauna", included: true },
      { text: "Weekly 1-on-1 personal training with a head coach", included: true },
      { text: "Personalized exercise routine made just for you", included: true },
      { text: "Private locker and reserved shower room", included: true },
      { text: "Free healthy protein drink after your workouts", included: true },
      { text: "Bring a workout friend along for free anytime", included: true }
    ]
  }
];
