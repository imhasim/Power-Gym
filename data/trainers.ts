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
    role: "Head Performance Director & Hypertrophy Specialist",
    code: "[ COACH // 01 ]",
    experienceYears: 12,
    credentials: ["CSCS (NSCA)", "B.Sc. Exercise Science", "Ex-Military Physical Training Instructor"],
    specialties: ["Maximal Hypertrophy", "Powerlifting Biomechanics", "Contest Prep Conditioning"],
    quote: "Discipline is the bridge between goals and raw physical dominance. There are no shortcuts.",
    bio: "Marcus has conditioned over 400 national competitors and high-profile executives. With 12 years at the cutting edge of muscle architecture, his coaching focuses on meticulous rep mechanics and progressive volume load.",
    image: "/images/trainer-marcus.jpg",
    stats: {
      clientsTransformed: 420,
      personalBest: "310 kg Deadlift"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Lead Conditioning & Athletic Endurance Coach",
    code: "[ COACH // 02 ]",
    experienceYears: 9,
    credentials: ["CrossFit Level 3 Trainer", "Precision Nutrition Level 2", "USA Weightlifting L2"],
    specialties: ["Lactate Threshold Training", "Battle Ropes Dynamics", "Kettlebell Ballistics"],
    quote: "Your body can handle almost anything; it’s your mind that you have to convince.",
    bio: "Former national track sprinter turned functional conditioning coach. Elena designs relentless conditioning protocols that sculpt lean muscle while exponentially increasing VO2 max and mental toughness.",
    image: "/images/trainer-elena.jpg",
    stats: {
      clientsTransformed: 350,
      personalBest: "18.5 min 5K & 120kg Clean"
    }
  },
  {
    id: "david-vance",
    name: "David 'Iron' Vance",
    role: "Senior Strength Coach & Olympic Barbell Specialist",
    code: "[ COACH // 03 ]",
    experienceYears: 15,
    credentials: ["USAW Senior Coach", "Master of Biomechanics", "IPF Certified Referee"],
    specialties: ["Olympic Snatch & Clean", "Barbell Velocity Profiling", "Spinal Stabilization"],
    quote: "Technique is king. When your form is flawless, heavy iron moves effortlessly.",
    bio: "David has dedicated 15 years to barbell science. He specializes in breaking plateaus for powerlifters and athletes through slow-motion kinematics and neuro-muscular firing drills.",
    image: "/images/trainer-david.jpg",
    stats: {
      clientsTransformed: 510,
      personalBest: "260 kg Squat"
    }
  },
  {
    id: "maya-patel",
    name: "Maya Patel",
    role: "Director of Functional Movement & Recovery",
    code: "[ COACH // 04 ]",
    experienceYears: 8,
    credentials: ["FRC Mobility Specialist", "E-RYT 500 Yoga Alliance", "Sports Physio Fellow"],
    specialties: ["Spinal Decompression", "Contrast Cold/Heat Protocol", "Fascial Release"],
    quote: "True power is nothing without the joint integrity and longevity to sustain it.",
    bio: "Maya merges traditional yogic somatic awareness with modern sports physiotherapy. She guides athletes through cold plunge recovery protocols, fascia unwinding, and corrective posture realignment.",
    image: "/images/trainer-maya.jpg",
    stats: {
      clientsTransformed: 290,
      personalBest: "100% Injury-Free Retention"
    }
  }
];
