export interface ScheduleClass {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  time: string;
  duration: string;
  title: string;
  category: "strength" | "hiit" | "mobility" | "combat" | "conditioning";
  trainer: string;
  room: string;
  intensity: "High" | "Extreme" | "Moderate" | "Regenerative";
  totalSpots: number;
  remainingSpots: number;
}

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
] as const;

export const scheduleData: ScheduleClass[] = [
  // Monday
  {
    id: "mon-01",
    day: "Monday",
    time: "06:30 AM",
    duration: "60 Min",
    title: "Heavy Barbell Strength & Deadlifts",
    category: "strength",
    trainer: "Marcus Thorne",
    room: "Iron Arena (Platform A)",
    intensity: "Extreme",
    totalSpots: 16,
    remainingSpots: 4
  },
  {
    id: "mon-02",
    day: "Monday",
    time: "08:00 AM",
    duration: "45 Min",
    title: "Battle Ropes & Metabolic Shred",
    category: "hiit",
    trainer: "Elena Rostova",
    room: "Turf Zone",
    intensity: "High",
    totalSpots: 20,
    remainingSpots: 7
  },
  {
    id: "mon-03",
    day: "Monday",
    time: "05:30 PM",
    duration: "60 Min",
    title: "Upper Body Hypertrophy Architecture",
    category: "strength",
    trainer: "Marcus Thorne",
    room: "Iron Arena",
    intensity: "High",
    totalSpots: 18,
    remainingSpots: 2
  },
  {
    id: "mon-04",
    day: "Monday",
    time: "07:30 PM",
    duration: "50 Min",
    title: "Heavy Bag Boxing & Power Strikes",
    category: "combat",
    trainer: "David Vance",
    room: "Combat Cage",
    intensity: "High",
    totalSpots: 15,
    remainingSpots: 5
  },

  // Tuesday
  {
    id: "tue-01",
    day: "Tuesday",
    time: "07:00 AM",
    duration: "45 Min",
    title: "Assault Sprint & Prowler Intervals",
    category: "hiit",
    trainer: "Elena Rostova",
    room: "Sprint Track",
    intensity: "Extreme",
    totalSpots: 18,
    remainingSpots: 3
  },
  {
    id: "tue-02",
    day: "Tuesday",
    time: "08:30 AM",
    duration: "50 Min",
    title: "Kinetic Yoga & Spine Decompression",
    category: "mobility",
    trainer: "Maya Patel",
    room: "Zen Studio",
    intensity: "Regenerative",
    totalSpots: 22,
    remainingSpots: 9
  },
  {
    id: "tue-03",
    day: "Tuesday",
    time: "06:00 PM",
    duration: "60 Min",
    title: "Squat Mechanics & Posterior Chain",
    category: "strength",
    trainer: "David Vance",
    room: "Iron Arena",
    intensity: "Extreme",
    totalSpots: 16,
    remainingSpots: 1
  },

  // Wednesday
  {
    id: "wed-01",
    day: "Wednesday",
    time: "06:30 AM",
    duration: "60 Min",
    title: "Olympic Clean & Jerk Workshop",
    category: "strength",
    trainer: "David Vance",
    room: "Olympic Pods",
    intensity: "Extreme",
    totalSpots: 14,
    remainingSpots: 3
  },
  {
    id: "wed-02",
    day: "Wednesday",
    time: "05:30 PM",
    duration: "50 Min",
    title: "Anaerobic Kettlebell Complex",
    category: "hiit",
    trainer: "Elena Rostova",
    room: "Turf Zone",
    intensity: "High",
    totalSpots: 20,
    remainingSpots: 6
  },
  {
    id: "wed-03",
    day: "Wednesday",
    time: "07:30 PM",
    duration: "45 Min",
    title: "Contrast Cold Plunge Guided Protocol",
    category: "mobility",
    trainer: "Maya Patel",
    room: "Thermal Recovery Suite",
    intensity: "Regenerative",
    totalSpots: 12,
    remainingSpots: 4
  },

  // Thursday
  {
    id: "thu-01",
    day: "Thursday",
    time: "07:00 AM",
    duration: "50 Min",
    title: "Core Velocity & Anti-Rotation",
    category: "conditioning",
    trainer: "Elena Rostova",
    room: "Turf Zone",
    intensity: "Moderate",
    totalSpots: 20,
    remainingSpots: 8
  },
  {
    id: "thu-02",
    day: "Thursday",
    time: "06:00 PM",
    duration: "60 Min",
    title: "Torso & Arm Sculpt Density",
    category: "strength",
    trainer: "Marcus Thorne",
    room: "Iron Arena",
    intensity: "High",
    totalSpots: 18,
    remainingSpots: 3
  },

  // Friday
  {
    id: "fri-01",
    day: "Friday",
    time: "06:30 AM",
    duration: "60 Min",
    title: "Max Effort Bench & Pull Protocol",
    category: "strength",
    trainer: "David Vance",
    room: "Iron Arena",
    intensity: "Extreme",
    totalSpots: 16,
    remainingSpots: 2
  },
  {
    id: "fri-02",
    day: "Friday",
    time: "06:00 PM",
    duration: "60 Min",
    title: "Friday Night Lights: Team Gauntlet",
    category: "hiit",
    trainer: "Elena & Marcus",
    room: "Full Floor",
    intensity: "Extreme",
    totalSpots: 30,
    remainingSpots: 6
  },

  // Saturday
  {
    id: "sat-01",
    day: "Saturday",
    time: "08:00 AM",
    duration: "60 Min",
    title: "CrossFit Team WOD & Sled Wars",
    category: "hiit",
    trainer: "Elena Rostova",
    room: "Turf Zone",
    intensity: "Extreme",
    totalSpots: 25,
    remainingSpots: 5
  },
  {
    id: "sat-02",
    day: "Saturday",
    time: "10:00 AM",
    duration: "60 Min",
    title: "Powerlifting Max Calibration",
    category: "strength",
    trainer: "David Vance",
    room: "Olympic Pods",
    intensity: "High",
    totalSpots: 15,
    remainingSpots: 3
  },
  {
    id: "sat-03",
    day: "Saturday",
    time: "05:00 PM",
    duration: "60 Min",
    title: "Breathwork, Cold Bath & Sound Bath",
    category: "mobility",
    trainer: "Maya Patel",
    room: "Zen & Thermal Suite",
    intensity: "Regenerative",
    totalSpots: 16,
    remainingSpots: 2
  },

  // Sunday
  {
    id: "sun-01",
    day: "Sunday",
    time: "08:00 AM",
    duration: "60 Min",
    title: "Full Body Fascial Mobility & Flow",
    category: "mobility",
    trainer: "Maya Patel",
    room: "Zen Studio",
    intensity: "Regenerative",
    totalSpots: 24,
    remainingSpots: 11
  },
  {
    id: "sun-02",
    day: "Sunday",
    time: "10:00 AM",
    duration: "45 Min",
    title: "Open Platform Technical Clinic",
    category: "strength",
    trainer: "Marcus Thorne",
    room: "Iron Arena",
    intensity: "Moderate",
    totalSpots: 16,
    remainingSpots: 7
  }
];
