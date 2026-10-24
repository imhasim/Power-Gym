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
    title: "Olympic Barbell & Peak Strength",
    tag: "/01 STRENGTH",
    category: "strength",
    description: "Master the big three (Squat, Bench, Deadlift) and Olympic snatches with bio-mechanical tracking and progressive overload protocols.",
    focus: ["Maximal Force Output", "Nervous System Drive", "Tendon Density", "Lifting Technique"],
    duration: "60–75 Min",
    level: "Advanced",
    caloriesBurn: "450–650 kcal",
    coach: "David Vance & Marcus Thorne",
    image: "/images/hero.jpg",
    details: "Built around RPE 7-9 block periodization, Eleiko calibrated steel plates, and specialized velocity-based barbell sensors.",
    scheduleSlots: "Mon, Wed, Fri at 06:30 AM & 06:00 PM"
  },
  {
    id: "metabolic-hiit",
    title: "Battle Rope & Metabolic Conditioning",
    tag: "/02 COND",
    category: "hiit",
    description: "High-density anaerobic intervals utilizing heavy battle ropes, assault bikes, prowler sleds, and plyometric complexes.",
    focus: ["VO2 Max Enhancement", "Lactate Clearance", "Visceral Fat Shredding", "Grit & Stamina"],
    duration: "45 Min",
    level: "All Levels",
    caloriesBurn: "600–850 kcal",
    coach: "Elena Rostova",
    image: "/images/program-hiit.jpg",
    details: "High-octane team intervals synchronizing heart-rate zone tracking with dynamic battle rope whip slams and sled pushes.",
    scheduleSlots: "Tue, Thu, Sat at 07:00 AM & 07:00 PM"
  },
  {
    id: "hypertrophy-system",
    title: "Aesthetic Hypertrophy Architecture",
    tag: "/03 SHRED",
    category: "hypertrophy",
    description: "Scientific muscle hypertrophy engineering utilizing mechanical tension, metabolic stress, and muscle damage optimization.",
    focus: ["Targeted Muscle Volume", "Time Under Tension", "Symmetry & Proportion", "Core Solidification"],
    duration: "60 Min",
    level: "Intermediate",
    caloriesBurn: "400–550 kcal",
    coach: "Marcus Thorne",
    image: "/images/hero.jpg",
    details: "Targeted split routines emphasizing mind-muscle connection, drop sets, and customized cable isolation biomechanics.",
    scheduleSlots: "Mon, Tue, Thu, Fri at 05:30 PM"
  },
  {
    id: "cold-recovery",
    title: "Cellular Recovery & Thermal Therapy",
    tag: "/04 RESTORE",
    category: "mobility",
    description: "Contrast therapy protocol combining 3°C cold plunge ice immersion with 90°C Finnish dry sauna and myofascial mobility.",
    focus: ["Inflammation Flush", "CNS Reset", "Dopamine & Norepinephrine Surge", "Joint Decompression"],
    duration: "45 Min",
    level: "All Levels",
    caloriesBurn: "150–250 kcal",
    coach: "Maya Patel",
    image: "/images/recovery-sauna.jpg",
    details: "Evidence-backed protocol proven to accelerate muscle repair, lower cortisol, and boost deep sleep quality.",
    scheduleSlots: "Daily: 06:00 AM – 09:30 PM (Drop-in)"
  },
  {
    id: "combat-boxing",
    title: "Striking Mechanics & Heavy Bag Conditioning",
    tag: "/05 COMBAT",
    category: "combat",
    description: "Technical boxing fundamentals, kinetic chain rotation, footwork drills, and 12-round heavy bag anaerobic conditioning.",
    focus: ["Rotational Power", "Hand Speed & Reflexes", "Cardiovascular Capacity", "Mental Toughness"],
    duration: "50 Min",
    level: "Intermediate",
    caloriesBurn: "700–900 kcal",
    coach: "Marcus Thorne & Guest Strikers",
    image: "/images/program-hiit.jpg",
    details: "Full wraparound heavy bag rig with real-time punch power velocity and cadence analysis.",
    scheduleSlots: "Mon, Wed, Fri at 07:30 PM"
  },
  {
    id: "functional-mobility",
    title: "Kinetic Flow & Spinal Decompression",
    tag: "/06 FLOW",
    category: "mobility",
    description: "Deep somatic mobility, multi-planar thoracic rotation, hip flexor release, and breath-centered core stabilization.",
    focus: ["Injury Prevention", "Postural Realignment", "Active Flexibility", "Joint Range of Motion"],
    duration: "50 Min",
    level: "All Levels",
    caloriesBurn: "200–350 kcal",
    coach: "Maya Patel",
    image: "/images/trainer-maya.jpg",
    details: "Designed specifically to complement heavy lifting and sedentary office posture, restoring complete athletic mobility.",
    scheduleSlots: "Tue, Thu, Sat at 08:30 AM & Sun at 09:00 AM"
  }
];
