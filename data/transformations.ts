export interface Transformation {
  id: string;
  name: string;
  age: number;
  profession: string;
  category: "Fat Loss" | "Hypertrophy" | "Recomp";
  timeframe: string;
  stats: {
    weightChange: string;
    bodyFatChange: string;
    benchOrDeadliftChange: string;
  };
  quote: string;
  program: string;
  coach: string;
  beforeImg: string;
  afterImg: string;
}

export const transformationsData: Transformation[] = [
  {
    id: "alex-recomp",
    name: "Alex Mercer",
    age: 29,
    profession: "Software Architect",
    category: "Recomp",
    timeframe: "16 Weeks",
    stats: {
      weightChange: "-12.5 kg Fat Loss",
      bodyFatChange: "26% → 11.8% Body Fat",
      benchOrDeadliftChange: "+45 kg on Deadlift"
    },
    quote: "Power Gym didn't just change how I look in the mirror—it reprogrammed my cognitive focus, my posture at my desk, and my everyday energy levels. The coaches treat fitness like an exact engineering discipline.",
    program: "Olympic Barbell & Hypertrophy System",
    coach: "Marcus Thorne",
    beforeImg: "/images/trans-before.jpg",
    afterImg: "/images/trans-after.jpg"
  },
  {
    id: "priya-strength",
    name: "Priya Sharma",
    age: 32,
    profession: "Product Executive",
    category: "Fat Loss",
    timeframe: "20 Weeks",
    stats: {
      weightChange: "-16 kg Sustained Weight Loss",
      bodyFatChange: "31% → 16.5% Body Fat",
      benchOrDeadliftChange: "First Unassisted Pull-ups (x8)"
    },
    quote: "I was intimidated by commercial gyms with useless machines. Here, the energy is electric, the coaching is patient and science-first, and the recovery sauna makes you look forward to the hardest sessions.",
    program: "Metabolic HIIT & Kinetic Flow",
    coach: "Elena Rostova",
    beforeImg: "/images/trans-before.jpg",
    afterImg: "/images/trans-after.jpg"
  },
  {
    id: "rohan-hypertrophy",
    name: "Rohan Kapoor",
    age: 26,
    profession: "Venture Associate",
    category: "Hypertrophy",
    timeframe: "24 Weeks",
    stats: {
      weightChange: "+7.8 kg Lean Skeletal Muscle",
      bodyFatChange: "Sub-12% Maintained",
      benchOrDeadliftChange: "+60 kg Squat Max"
    },
    quote: "The contrast therapy recovery lounge alone makes the membership priceless. I recover twice as fast from brutal heavy squat sessions.",
    program: "Aesthetic Hypertrophy Architecture",
    coach: "David Vance",
    beforeImg: "/images/trans-before.jpg",
    afterImg: "/images/trans-after.jpg"
  }
];
