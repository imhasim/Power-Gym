export interface Trainer {
  id: string;
  name: string;
  role: string;
  code: string;
  experienceYears: number;
  credentials: string[];
  specialties: string[];
  quote: string;
  bio: string;
  image: string;
  stats: {
    clientsTransformed: number;
    personalBest: string;
  };
}

export const trainersData: Trainer[] = [
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Head Fitness Coach",
    code: "[ COACH // 01 ]",
    experienceYears: 12,
    credentials: ["Certified Fitness Director", "Sports Science Degree", "Safe Lifting Specialist"],
    specialties: ["Strength Building", "Muscle Toning", "Safe Form for Beginners"],
    quote: "Small daily habits create big changes over time. You just need to take the first step.",
    bio: "Marcus has been coaching for over 12 years. He is patient, friendly, and focuses on helping you learn safe workout habits that last a lifetime.",
    image: "/images/trainer-marcus.jpg",
    stats: {
      clientsTransformed: 420,
      personalBest: "12 Years Experience"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Cardio & Stamina Coach",
    code: "[ COACH // 02 ]",
    experienceYears: 9,
    credentials: ["Certified Group Trainer", "Nutrition Coach", "Cardio Conditioning Specialist"],
    specialties: ["Fat Burning Workouts", "Battle Ropes", "Daily Energy Boost"],
    quote: "You are stronger than you think. Keep moving forward one day at a time.",
    bio: "Elena brings great energy and encouragement to every class. She helps you burn calories, build endurance, and genuinely enjoy working out.",
    image: "/images/trainer-elena.jpg",
    stats: {
      clientsTransformed: 350,
      personalBest: "9 Years Experience"
    }
  },
  {
    id: "david-vance",
    name: "David Vance",
    role: "Senior Strength Trainer",
    code: "[ COACH // 03 ]",
    experienceYears: 15,
    credentials: ["Senior Strength Coach", "Lifting Posture Expert", "Joint Safety Specialist"],
    specialties: ["Safe Squat & Deadlift", "Back & Shoulder Health", "Building Real Strength"],
    quote: "Focus on good form first. When you move well, lifting heavy feels easy and safe.",
    bio: "David has 15 years of lifting experience. He is dedicated to helping members learn correct weightlifting techniques without neck or back pain.",
    image: "/images/trainer-david.jpg",
    stats: {
      clientsTransformed: 510,
      personalBest: "15 Years Experience"
    }
  },
  {
    id: "maya-patel",
    name: "Maya Patel",
    role: "Yoga & Stretching Coach",
    code: "[ COACH // 04 ]",
    experienceYears: 8,
    credentials: ["Certified Yoga Instructor", "Physical Mobility Coach", "Recovery Specialist"],
    specialties: ["Gentle Stretching", "Back Pain Relief", "Cold Plunge & Sauna Guide"],
    quote: "Resting your body and relaxing tight muscles is just as important as lifting weights.",
    bio: "Maya teaches you how to release tight hips and shoulders, ease daily work stress, and use our cold plunge and sauna to feel refreshed.",
    image: "/images/trainer-maya.jpg",
    stats: {
      clientsTransformed: 290,
      personalBest: "8 Years Experience"
    }
  }
];
