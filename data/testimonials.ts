export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  tier: string;
  rating: number;
  text: string;
  highlight: string;
  date: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-01",
    name: "Vikram Malhotra",
    handle: "@vmalhotra_tech",
    tier: "Pro Athlete Member",
    rating: 5,
    text: "The reference standard for what a real high-performance gym should be. No broken machines, no waiting around. Calibrated Eleiko plates, cold plunge chilled to exactly 3°C, and coaches who correct your scapular retraction on set one.",
    highlight: "Calibrated Eleiko plates and 3°C cold plunge",
    date: "Member for 14 Months"
  },
  {
    id: "test-02",
    name: "Dr. Ananya Sen",
    handle: "@dr.ananya.ortho",
    tier: "Elite VIP Member",
    rating: 5,
    text: "As an orthopedic surgeon, I am extraordinarily critical of personal trainers. Marcus and Maya understand joint angles and fascial tension better than most clinical physiotherapists. Truly exceptional biomechanics.",
    highlight: "Understands joint angles and fascial tension",
    date: "Member for 2 Years"
  },
  {
    id: "test-03",
    name: "Karan Singhal",
    handle: "@karansingh_fit",
    tier: "Pro Athlete Member",
    rating: 5,
    text: "The energy in this place at 6:30 AM is unmatched. The dark aesthetic, pulsing yellow neon, and focused athletes lifting heavy weights without egos creates an atmosphere where you smash personal records every single week.",
    highlight: "Unmatched atmosphere where you smash PRs every week",
    date: "Member for 9 Months"
  },
  {
    id: "test-04",
    name: "Sneha Reddy",
    handle: "@sneha_founder",
    tier: "Starter Power Member",
    rating: 5,
    text: "I was hesitant to join a serious gym, but Power Gym welcomes every dedicated person. The trial pass and initial InBody scan gave me clarity on my metabolic baseline, and I’ve never felt stronger or more energetic.",
    highlight: "Never felt stronger or more energetic",
    date: "Member for 6 Months"
  }
];
