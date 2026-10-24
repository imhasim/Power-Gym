export interface FaqItem {
  question: string;
  answer: string;
  category: "membership" | "facility" | "training" | "recovery";
}

export const faqData: FaqItem[] = [
  {
    category: "facility",
    question: "What are the gym operating hours?",
    answer: "Power Gym is open Monday through Saturday from 05:00 AM to 10:00 PM, and Sundays from 06:00 AM to 12:00 PM. Members on the Pro Athlete and Elite VIP plans receive 24/7 biometric keyless access to the iron arena and recovery zones."
  },
  {
    category: "membership",
    question: "How does the 3-Day Free Trial Pass work?",
    answer: "You can claim your 3-Day Pass online using the Join form or WhatsApp link. It grants you unrestricted access to the gym floor, 1 group class of your choice, an InBody body composition scan, and access to the cold plunge recovery suite. No credit card required."
  },
  {
    category: "training",
    question: "I am a complete beginner. Is Power Gym too intense for me?",
    answer: "Not at all. While our facility trains high-level lifters, every new member undergoes a baseline movement and mobility screen. Our coaches scale every exercise load, barbell movement, and conditioning intensity to your exact starting level."
  },
  {
    category: "recovery",
    question: "What temperature are the cold plunge and Finnish sauna kept at?",
    answer: "Our filtered cold plunge tubs are chilled continuously to 3°C – 4°C with dual UV filtration and rapid ozone sanitation. The dry Finnish cedar sauna operates at 88°C – 92°C to maximize heat shock protein production and cardiovascular flush."
  },
  {
    category: "membership",
    question: "Can I freeze or pause my membership if I travel?",
    answer: "Yes! Quarterly memberships can be paused for up to 14 days, and Annual memberships can be paused for up to 45 days per year with zero pause fees. Simply submit a pause notice via WhatsApp or at the concierge desk."
  },
  {
    category: "facility",
    question: "Do you offer parking, showers, and locker rooms?",
    answer: "Yes, we feature secure underground parking with dedicated EV charging stalls. Our locker rooms include private biometric lockers, high-pressure rain showers, luxury Malin+Goetz grooming amenities, and complimentary fresh bath towels."
  },
  {
    category: "training",
    question: "How do I book group classes or 1-on-1 coaching sessions?",
    answer: "You can book classes directly on our website under the Schedule tab. Spots are instantly saved to your browser session and confirmed with the front desk. VIP members have priority reservations up to 7 days in advance."
  },
  {
    category: "membership",
    question: "Are there any hidden joining fees or annual maintenance charges?",
    answer: "Zero hidden charges. What you see on our pricing plans is all-inclusive. You will never be charged unexpected maintenance fees, locker rental fees, or shower usage charges."
  }
];
