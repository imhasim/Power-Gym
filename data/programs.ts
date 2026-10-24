export interface Program {
  id: string;
  title: string;
  tag: string;
  category: "strength" | "hiit" | "hypertrophy" | "mobility" | "combat";
  description: string;
  focus: string[];
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  caloriesBurn: string;
  coach: string;
  image: string;
  details: string;
  scheduleSlots: string;
}

export const programsData: Program[] = [
  {
    id: "barbell-strength",
    title: "Heavy Weight & Strength Training",
    tag: "/01 STRENGTH",
    category: "strength",
    description: "Learn how to lift safely, build strong muscles, and improve your posture with friendly step-by-step guidance.",
    focus: ["Safe Lifting Form", "Build Real Strength", "Better Posture", "Full Body Power"],
    duration: "60 Min",
    level: "All Levels",
    caloriesBurn: "450–600 kcal",
    coach: "David Vance & Marcus Thorne",
    image: "/images/hero.jpg",
    details: "We start with light weights to teach you proper form first, so you can lift heavier with total confidence.",
    scheduleSlots: "Mon, Wed, Fri"
  },
  {
    id: "metabolic-hiit",
    title: "Cardio & Fat Burning Classes",
    tag: "/02 CARDIO",
    category: "hiit",
    description: "Fun, high-energy workouts using ropes, exercise bikes, and bodyweight moves to burn calories and boost your daily energy.",
    focus: ["Burn Extra Calories", "More Daily Energy", "Better Stamina", "Fun Group Setting"],
    duration: "45 Min",
    level: "All Levels",
    caloriesBurn: "500–750 kcal",
    coach: "Elena Rostova",
    image: "/images/program-hiit.jpg",
    details: "Work out at your own speed with cheerful coaches who keep you motivated the entire time.",
    scheduleSlots: "Tue, Thu, Sat"
  },
  {
    id: "hypertrophy-system",
    title: "Muscle Building & Body Toning",
    tag: "/03 TONING",
    category: "hypertrophy",
    description: "Effective workout routines to shape your arms, legs, and abs so you can build lean muscle and feel good in your clothes.",
    focus: ["Tone Your Muscles", "Build Lean Muscle", "Stronger Core", "Steady Results"],
    duration: "50 Min",
    level: "All Levels",
    caloriesBurn: "400–550 kcal",
    coach: "Marcus Thorne",
    image: "/images/hero.jpg",
    details: "Simple exercises using dumbbells, barbells, and cable machines that give you great results week after week.",
    scheduleSlots: "Mon, Tue, Thu, Fri"
  },
  {
    id: "cold-recovery",
    title: "Cold Water Plunge & Warm Sauna",
    tag: "/04 RECOVERY",
    category: "mobility",
    description: "Relax your tired muscles with clean cold water tubs and warm wooden saunas to feel refreshed after your workouts.",
    focus: ["Soothe Sore Muscles", "Reduce Daily Stress", "Deeper Sleep", "Feel Fresh & Ready"],
    duration: "45 Min",
    level: "All Levels",
    caloriesBurn: "150–250 kcal",
    coach: "Maya Patel",
    image: "/images/recovery-sauna.jpg",
    details: "Step into our calm recovery room to unwind, relax your joints, and recharge your body for the next day.",
    scheduleSlots: "Open Daily"
  },
  {
    id: "combat-boxing",
    title: "Boxing & Punch Bag Fitness",
    tag: "/05 BOXING",
    category: "combat",
    description: "Learn basic boxing punches, practice on heavy bags, and get an exciting full-body workout while letting off stress.",
    focus: ["Learn Boxing Basics", "Faster Reflexes", "Full-Body Cardio", "Great Stress Relief"],
    duration: "50 Min",
    level: "All Levels",
    caloriesBurn: "600–800 kcal",
    coach: "Marcus Thorne & Team",
    image: "/images/program-hiit.jpg",
    details: "No fighting or getting hit. Just you, the punch bag, and a fun workout that burns lots of calories.",
    scheduleSlots: "Mon, Wed, Fri"
  },
  {
    id: "functional-mobility",
    title: "Stretching & Gentle Yoga Flow",
    tag: "/06 STRETCH",
    category: "mobility",
    description: "Gentle stretches to ease neck and back stiffness, loosen tight hips, and help you move easily without pain.",
    focus: ["Easy Flexibility", "Less Back Stiffness", "Loosen Tight Hips", "Calm & Relaxed Mind"],
    duration: "45 Min",
    level: "All Levels",
    caloriesBurn: "200–300 kcal",
    coach: "Maya Patel",
    image: "/images/trainer-maya.jpg",
    details: "Perfect for anyone who sits at a desk all day or wants to keep their joints feeling young and loose.",
    scheduleSlots: "Tue, Thu, Sat, Sun"
  }
];
