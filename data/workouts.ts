export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  tempo: string;
  notes: string;
}

export interface DayWorkout {
  dayName: string;
  focus: string;
  exercises: Exercise[];
}

export interface PresetRoutine {
  id: string;
  name: string;
  daysPerWeek: number;
  goal: "Strength & Power" | "Hypertrophy & Mass" | "Fat Shred & Athleticism";
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  schedule: DayWorkout[];
}

export const presetRoutines: PresetRoutine[] = [
  {
    id: "strength-3day",
    name: "Barbell Foundation 3-Day Full Body",
    daysPerWeek: 3,
    goal: "Strength & Power",
    level: "Beginner",
    description: "Maximum neuromuscular efficiency and fundamental barbell motor patterns distributed across non-consecutive days.",
    schedule: [
      {
        dayName: "Day 1 (Monday)",
        focus: "Squat Priority & Horizontal Press",
        exercises: [
          { name: "Barbell Back Squat", sets: "4", reps: "5", rest: "3 min", tempo: "3-0-1-0", notes: "Break parallel, drive through mid-foot" },
          { name: "Barbell Flat Bench Press", sets: "4", reps: "6", rest: "2.5 min", tempo: "2-1-1-0", notes: "Retract scapula, touch sternum softly" },
          { name: "Bent-Over Barbell Row", sets: "3", reps: "8", rest: "2 min", tempo: "2-0-1-1", notes: "Hinge at hips, pull elbows to pockets" },
          { name: "Standing Overhead Press", sets: "3", reps: "8", rest: "2 min", tempo: "2-0-1-0", notes: "Tight glutes and brace core" },
          { name: "Hanging Knee/Leg Raises", sets: "3", reps: "12-15", rest: "90 sec", tempo: "controlled", notes: "Avoid swinging momentum" }
        ]
      },
      {
        dayName: "Day 2 (Wednesday)",
        focus: "Deadlift & Vertical Pull Mechanics",
        exercises: [
          { name: "Conventional Deadlift", sets: "3", reps: "5", rest: "3.5 min", tempo: "1-0-1-0", notes: "Pack lats, drag bar against shins" },
          { name: "Overhead Barbell Military Press", sets: "4", reps: "6", rest: "2.5 min", tempo: "2-0-1-0", notes: "Clear chin, push head forward at lockout" },
          { name: "Weighted Pull-Ups or Lat Pulldowns", sets: "4", reps: "6-8", rest: "2 min", tempo: "2-0-1-1", notes: "Full dead hang to chin over bar" },
          { name: "Bulgarian Split Squats", sets: "3", reps: "8/leg", rest: "90 sec", tempo: "3-0-1-0", notes: "Deep stretch on rear hip flexor" },
          { name: "Ab Wheel Rollouts", sets: "3", reps: "10-12", rest: "90 sec", tempo: "slow", notes: "Neutral spine throughout" }
        ]
      },
      {
        dayName: "Day 3 (Friday)",
        focus: "Front Squat & Incline Press Density",
        exercises: [
          { name: "Front Squats or Leg Press", sets: "4", reps: "6", rest: "2.5 min", tempo: "3-0-1-0", notes: "High elbows, upright torso" },
          { name: "Incline Dumbbell Bench Press", sets: "4", reps: "8-10", rest: "2 min", tempo: "2-1-1-0", notes: "30-degree bench angle" },
          { name: "Chest-Supported T-Bar Row", sets: "3", reps: "10", rest: "90 sec", tempo: "2-0-1-1", notes: "Squeeze rhomboids at peak" },
          { name: "Romanian Deadlift (RDL)", sets: "3", reps: "8-10", rest: "2 min", tempo: "3-1-1-0", notes: "Feel deep hamstring stretch" },
          { name: "Dips (Bodyweight or Weighted)", sets: "3", reps: "10-12", rest: "90 sec", tempo: "2-0-1-0", notes: "Slight forward torso lean" }
        ]
      }
    ]
  },
  {
    id: "hypertrophy-4day",
    name: "Upper / Lower Aesthetic Hypertrophy 4-Day",
    daysPerWeek: 4,
    goal: "Hypertrophy & Mass",
    level: "Intermediate",
    description: "The gold-standard frequency protocol for maximizing muscle protein synthesis, balanced shoulder-to-waist ratio, and dense leg development.",
    schedule: [
      {
        dayName: "Day 1 (Monday)",
        focus: "Upper Body — Heavy Push / Pull",
        exercises: [
          { name: "Incline Barbell Bench Press", sets: "4", reps: "6-8", rest: "2.5 min", tempo: "3-1-1-0", notes: "Upper chest focus" },
          { name: "Weighted Neutral-Grip Pull-Ups", sets: "4", reps: "6-8", rest: "2 min", tempo: "2-0-1-1", notes: "Drive elbows into sides" },
          { name: "Flat Dumbbell Press", sets: "3", reps: "10-12", rest: "90 sec", tempo: "2-1-1-0", notes: "Deep pectoral stretch" },
          { name: "Cable Seated Row", sets: "3", reps: "10-12", rest: "90 sec", tempo: "2-0-1-1", notes: "Full scapular excursion" },
          { name: "Cable Lateral Raises", sets: "4", reps: "12-15", rest: "60 sec", tempo: "2-0-1-0", notes: "Constant side delt tension" }
        ]
      },
      {
        dayName: "Day 2 (Tuesday)",
        focus: "Lower Body — Quad Dominant & Calves",
        exercises: [
          { name: "Barbell High-Bar Back Squat", sets: "4", reps: "6-8", rest: "3 min", tempo: "3-0-1-0", notes: "Controlled eccentric" },
          { name: "Leg Press (Narrow & Low Stance)", sets: "3", reps: "12", rest: "2 min", tempo: "3-1-1-0", notes: "Quad tear-drop isolation" },
          { name: "Lying Hamstring Leg Curls", sets: "4", reps: "10-12", rest: "90 sec", tempo: "3-0-1-1", notes: "Do not let hips lift off bench" },
          { name: "Walking Dumbbell Lunges", sets: "3", reps: "12 steps/leg", rest: "90 sec", tempo: "controlled", notes: "Solid balance and knee tracking" },
          { name: "Standing Calf Machine Raises", sets: "4", reps: "12-15", rest: "60 sec", tempo: "2-2-1-0", notes: "2-sec pause at deep bottom stretch" }
        ]
      },
      {
        dayName: "Day 3 (Thursday)",
        focus: "Upper Body — Density & Delts",
        exercises: [
          { name: "Seated Dumbbell Shoulder Press", sets: "4", reps: "8-10", rest: "2 min", tempo: "2-0-1-0", notes: "Stop at ear level before pushing" },
          { name: "Chest-Supported Row", sets: "4", reps: "10-12", rest: "90 sec", tempo: "2-0-1-1", notes: "Mid-back thickness" },
          { name: "Incline Cable Flyes", sets: "3", reps: "12-15", rest: "75 sec", tempo: "3-1-1-0", notes: "Peak squeeze on sternum" },
          { name: "Overhead Triceps Rope Extension", sets: "3", reps: "12-15", rest: "60 sec", tempo: "2-0-1-1", notes: "Long head tricep stretch" },
          { name: "Incline Dumbbell Bicep Curls", sets: "3", reps: "10-12", rest: "60 sec", tempo: "2-1-1-0", notes: "Supinate wrists hard" }
        ]
      },
      {
        dayName: "Day 4 (Friday)",
        focus: "Lower Body — Posterior Chain & Glutes",
        exercises: [
          { name: "Romanian Deadlift (Dumbbell or Bar)", sets: "4", reps: "8-10", rest: "2.5 min", tempo: "3-1-1-0", notes: "Keep lats locked tight" },
          { name: "Barbell Hip Thrusts", sets: "4", reps: "10-12", rest: "2 min", tempo: "2-0-1-2", notes: "2-sec glute contraction at top" },
          { name: "Leg Extension (Quad Finisher)", sets: "3", reps: "15 + drop set", rest: "75 sec", tempo: "2-0-1-1", notes: "Hold contraction at lockout" },
          { name: "Seated Hamstring Curl", sets: "3", reps: "12-15", rest: "75 sec", tempo: "2-1-1-0", notes: "Torso angled forward" },
          { name: "Hanging Leg Raises", sets: "4", reps: "12", rest: "60 sec", tempo: "controlled", notes: "Posterior pelvic tilt" }
        ]
      }
    ]
  },
  {
    id: "athletic-5day",
    name: "Athlete Tactical Shred 5-Day",
    daysPerWeek: 5,
    goal: "Fat Shred & Athleticism",
    level: "Advanced",
    description: "High-metabolic output combining progressive power lifts with lactate clearance intervals, sprint sleds, and battle ropes.",
    schedule: [
      {
        dayName: "Day 1 (Monday)",
        focus: "Heavy Compound Strength & Core",
        exercises: [
          { name: "Trap Bar Deadlift", sets: "5", reps: "5", rest: "2.5 min", tempo: "explosive", notes: "Push floor away" },
          { name: "Barbell Overhead Push Press", sets: "4", reps: "6", rest: "2 min", tempo: "explosive", notes: "Dip 3 inches and drive" },
          { name: "Weighted Dips", sets: "4", reps: "8-10", rest: "90 sec", tempo: "2-0-1-0", notes: "Full range of motion" },
          { name: "Farmer's Walks (Heavy Kettlebells)", sets: "4", reps: "40 meters", rest: "90 sec", tempo: "braced walk", notes: "Lock ribcage down" }
        ]
      },
      {
        dayName: "Day 2 (Tuesday)",
        focus: "Metabolic HIIT & Battle Ropes Circuit",
        exercises: [
          { name: "Battle Rope Slams & Waves", sets: "5", reps: "30 sec on / 30 sec off", rest: "1 min", tempo: "max effort", notes: "High amplitude waves" },
          { name: "Prowler Sled Push (Heavy)", sets: "5", reps: "25 meters", rest: "90 sec", tempo: "sprint drive", notes: "Low hip drive angle" },
          { name: "Assault Bike Sprint Interval", sets: "6", reps: "15 sec all-out / 45 sec cruise", rest: "none", tempo: "max RPM", notes: "Heart rate 85%+" },
          { name: "Kettlebell Swing & Goblet Squat Complex", sets: "4", reps: "15 reps each", rest: "75 sec", tempo: "snappy", notes: "Violent hip extension" }
        ]
      },
      {
        dayName: "Day 3 (Wednesday)",
        focus: "Active Thermal Recovery & Fascial Mobility",
        exercises: [
          { name: "Contrast Cold Plunge (3°C)", sets: "3 rounds", reps: "3 min immersion", rest: "sauna transition", tempo: "slow nasal breaths", notes: "Submerge to clavicle" },
          { name: "Finnish Dry Sauna (90°C)", sets: "3 rounds", reps: "15 min exposure", rest: "cold transition", tempo: "relaxed", notes: "Hydrate with electrolytes" },
          { name: "Thoracic Foam Rolling & 90/90 Hip Flow", sets: "2 sets", reps: "10 min total", rest: "none", tempo: "dynamic", notes: "Restore rotational mobility" }
        ]
      },
      {
        dayName: "Day 4 (Thursday)",
        focus: "Rotational Power & Boxing Conditioning",
        exercises: [
          { name: "Medicine Ball Rotational Wall Slams", sets: "4", reps: "10/side", rest: "60 sec", tempo: "violent whip", notes: "Pivot back foot" },
          { name: "Heavy Bag 3-Minute Combat Rounds", sets: "5", reps: "3 min round / 1 min rest", rest: "1 min", tempo: "combo striking", notes: "Snap punches back to chin" },
          { name: "Barbell Landmine Thrusters", sets: "3", reps: "10/side", rest: "90 sec", tempo: "explosive", notes: "Seamless transfer from squat to press" },
          { name: "Plank Kettlebell Pull-Throughs", sets: "3", reps: "12 total", rest: "60 sec", tempo: "static brace", notes: "Zero hip sway" }
        ]
      },
      {
        dayName: "Day 5 (Friday)",
        focus: "Full-Body Hypertrophy Density & Pumps",
        exercises: [
          { name: "Dumbbell Incline Bench Press", sets: "4", reps: "10-12", rest: "90 sec", tempo: "2-1-1-0", notes: "Deep stretch" },
          { name: "Chest-Supported Row", sets: "4", reps: "10-12", rest: "90 sec", tempo: "2-0-1-1", notes: "Full squeeze" },
          { name: "Goblet Squat to Box Jump Combo", sets: "3", reps: "8 + 5 jumps", rest: "90 sec", tempo: "contrast", notes: "Max height on jumps" },
          { name: "Cable Bicep/Tricep Superset", sets: "3", reps: "15 each", rest: "60 sec", tempo: "pumping", notes: "Continuous tension" }
        ]
      }
    ]
  }
];
