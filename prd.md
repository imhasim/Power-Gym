# PRD — Power Gym Website

**Version:** 1.0
**Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion
**Scope:** Frontend only. No backend, no database, no API. All data is static (JSON files) or saved in the browser (`localStorage`).

---

## 1. Project Overview

Power Gym ek premium gym ki website hai. Look and feel reference image jaisa hoga: **dark, cinematic, glowing yellow accent, tech-style mono labels, big bold typography, soft glow effects**. Website visitors ko gym ke programs, trainers, plans aur transformations dikhayegi, aur unhe join/trial ke liye convince karegi.

### Goals
1. Premium, memorable first impression (reference image jaisa dark + yellow glow).
2. Visitor easily plans dekhe, BMI/calorie calculate kare, class schedule dekhe, aur "Join" form bhare.
3. Fast, smooth, mobile-first site.
4. Poora kaam frontend ke andar — koi server nahi.

### Non-Goals
- Real payments, login backend, real database, admin panel.
- Real email sending (form sirf demo/localStorage ya `mailto:`/WhatsApp link).

---

## 2. Design System (Reference Image se)

### 2.1 Colors
| Token | Value | Use |
|---|---|---|
| `--bg` | `#050505` | Main background |
| `--bg-soft` | `#0D0D0B` | Sections / cards |
| `--surface` | `#141410` | Card surface |
| `--border` | `rgba(255,255,255,0.08)` | Thin borders |
| `--accent` | `#FFE600` (yellow) | Buttons, highlights, icons |
| `--accent-glow` | `rgba(255,230,0,0.25)` | Glow behind hero/cards |
| `--olive-glow` | `#3A3A0A` | Background radial gradients |
| `--text` | `#FFFFFF` | Headings |
| `--text-muted` | `rgba(255,255,255,0.6)` | Body text |

### 2.2 Typography
- **Headings:** `Inter` / `Space Grotesk` — bold, tight letter-spacing, very large (clamp 40px–120px).
- **Labels/tags:** `JetBrains Mono` / `Space Mono` — uppercase, small, wide letter-spacing (jaisa `/STUDY`, `[ ABOUT ]` reference me hai).
- **Body:** `Inter`, 16–18px.

### 2.3 Signature UI Elements
- **Mono labels** corners me: `/POWER GYM`, `[ ABOUT ]`, `[ PROGRAMS ]`.
- **Pill chips** with check-icon: `✓ STRENGTH`, `✓ CARDIO`, `✓ NUTRITION` (reference ke "PRODUCTION AGENTS" chips jaisa), thin border + dark glass background.
- **Radial yellow glow** hero ke peeche, section ke beech.
- **Subtle pixel/grid pattern** background (dark blocks, low opacity).
- **Floating chips** hero image ke around (slow float animation).
- **Glass cards:** `backdrop-blur`, 1px border, rounded-2xl, hover par yellow glow.
- **Primary button:** yellow bg, black text, rounded-full, hover par glow + slight scale.
- **Secondary button:** transparent, white border, hover par yellow border.
- **Logo:** "POWER GYM" blocky/pixel-style wordmark, yellow + white (reference ke "402" jaisa feel).

### 2.4 Motion
- Page load: fade + slide up (stagger).
- Scroll reveal: har section `whileInView`.
- Hero: floating chips, glowing pulse.
- Number counters (members, trainers, years) scroll par animate.
- Respect `prefers-reduced-motion`.

---

## 3. Sitemap & Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, about, programs, trainers, plans, testimonials, CTA |
| `/programs` | Programs | Sab programs detail ke saath, filter |
| `/trainers` | Trainers | Trainer cards + modal profile |
| `/membership` | Membership | Plans, monthly/yearly toggle, comparison |
| `/schedule` | Class Schedule | Weekly timetable with day filter |
| `/tools` | Fitness Tools | BMI, calorie, workout planner |
| `/transformations` | Transformations | Before/after gallery |
| `/contact` | Contact / Join | Join form, map, timings, WhatsApp |

(Chhota rakhna ho to sirf Home me sections bana sakte ho aur baaki pages Phase 2 me.)

---

## 4. Home Page Sections (Top to Bottom)

1. **Navbar** — logo, links, "Join Now" button. Sticky, blur on scroll, mobile hamburger drawer.
2. **Hero** — Big headline: *"Build Power. Break Limits."* Sub text, 2 CTAs (`Join Now`, `View Programs`). Beech me 3D-style/dark gym visual (barbell/athlete image) with yellow glow + floating chips (`✓ EXPERT TRAINERS`, `✓ MODERN EQUIPMENT`, `✓ DIET PLANS`, `✓ 24/7 ACCESS`).
3. **Stats strip** — `1200+ Members`, `25+ Trainers`, `10+ Years`, `40+ Weekly Classes` (animated counters).
4. **About** — Large statement paragraph + 2 small text columns (reference me jaisa layout).
5. **Programs** — Grid cards: Strength, Cardio, CrossFit, Yoga, Zumba, Weight Loss, Bodybuilding, Personal Training.
6. **"Training in Systems" style feature section** — Reference image ke tree wale section jaisa: beech me bada visual, uske around 4 chips (`Strength`, `Nutrition`, `Recovery`, `Community`) lines ke saath connected.
7. **Trainers** — 4 featured trainer cards (photo, name, speciality).
8. **Membership Plans** — 3 cards (Basic / Pro / Elite), middle highlighted.
9. **Transformations** — Before/after slider.
10. **Testimonials** — Carousel.
11. **Free Trial CTA** — Big banner + short form (name, phone).
12. **FAQ** — Accordion.
13. **Footer** — Logo, links, timings, social icons, copyright.

---

## 5. Functional Requirements (All Frontend)

### FR-1: Navigation
- Sticky navbar, active link highlight, mobile drawer.
- Smooth scroll for in-page anchors.

### FR-2: BMI Calculator (`/tools`)
- Inputs: height (cm), weight (kg).
- Output: BMI value + category (Underweight / Normal / Overweight / Obese) with colored indicator bar.
- Suggestion text + CTA to relevant program.

### FR-3: Calorie Calculator
- Inputs: age, gender, height, weight, activity level, goal (lose / maintain / gain).
- Formula: Mifflin-St Jeor → daily calories + protein/carbs/fat split.

### FR-4: Membership Plans
- Monthly / Quarterly / Yearly toggle (price updates instantly).
- "Choose Plan" opens Join modal with plan pre-selected.
- Comparison table (features ✓ / ✗).

### FR-5: Join / Free Trial Form
- Fields: Name, Phone, Email, Plan, Goal, Preferred time.
- Validation: React Hook Form + Zod (phone 10 digits, email format).
- On submit: success animation + data `localStorage` me save + optional WhatsApp redirect link (`https://wa.me/<number>?text=...`).

### FR-6: Class Schedule
- Weekly timetable (Mon–Sun), day tabs.
- Filter by class type.
- "Book Class" button → saved in `localStorage` ("My Bookings" mini panel).

### FR-7: Trainer Profiles
- Card click → modal with bio, certifications, specialities, timings.

### FR-8: Transformations Gallery
- Before/after drag slider component.
- Filter: Weight Loss / Muscle Gain.

### FR-9: Workout Planner (simple)
- User goal + days/week choose kare → preset workout plan dikhe (static data).
- "Download / Print" via `window.print()`.

### FR-10: Testimonials Carousel & FAQ Accordion
- Auto-play carousel, pause on hover.
- Accordion with smooth open/close.

### FR-11: Extras (Nice to Have)
- WhatsApp floating button.
- Scroll-to-top button.
- Dark theme only (light mode needed nahi).
- Loading intro animation (logo reveal).

---

## 6. Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| Animation | Framer Motion |
| Icons | lucide-react |
| Forms | React Hook Form + Zod |
| Fonts | `next/font` (Inter, JetBrains Mono) |
| Images | `next/image` (optimized, WebP) |
| Data | Static JSON / TS files in `/data` |
| Storage | `localStorage` (bookings, join form) |
| Deployment | Vercel (free) |

Optional: `shadcn/ui` for modal, accordion, tabs.

---

## 7. Folder Structure

```
power-gym/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── programs/page.tsx
│   ├── trainers/page.tsx
│   ├── membership/page.tsx
│   ├── schedule/page.tsx
│   ├── tools/page.tsx
│   ├── transformations/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/        (Navbar, Footer, MobileMenu)
│   ├── sections/      (Hero, Stats, About, Programs, Systems, Trainers, Plans, Testimonials, CTA, FAQ)
│   ├── ui/            (Button, Chip, GlassCard, Modal, Accordion, Tabs)
│   ├── tools/         (BmiCalculator, CalorieCalculator, WorkoutPlanner)
│   └── shared/        (SectionLabel, Counter, BeforeAfterSlider, WhatsAppButton)
├── data/
│   ├── programs.ts
│   ├── trainers.ts
│   ├── plans.ts
│   ├── schedule.ts
│   ├── testimonials.ts
│   ├── faq.ts
│   └── workouts.ts
├── hooks/             (useLocalStorage, useCounter, useMediaQuery)
├── lib/               (utils.ts, calculators.ts, validations.ts)
├── public/
│   ├── images/
│   └── logo/
├── tailwind.config.ts
└── package.json
```

---

## 8. Data Models (Static, TypeScript)

```ts
type Program = { id: string; title: string; desc: string; level: string; duration: string; image: string };
type Trainer = { id: string; name: string; role: string; exp: number; speciality: string[]; image: string; bio: string };
type Plan = { id: string; name: string; price: { monthly: number; quarterly: number; yearly: number }; features: string[]; popular?: boolean };
type ClassSlot = { id: string; day: string; time: string; title: string; trainerId: string; type: string; seats: number };
type Booking = { slotId: string; bookedAt: string };
type JoinLead = { name: string; phone: string; email: string; plan: string; goal: string; time: string; createdAt: string };
```

---

## 9. Responsiveness

| Breakpoint | Layout |
|---|---|
| Mobile (<640px) | 1 column, hamburger menu, stacked chips |
| Tablet (640–1024px) | 2 columns |
| Desktop (>1024px) | 3–4 columns, full hero composition |

Mobile-first. Touch targets min 44px.

---

## 10. Performance, SEO & Accessibility

- Lighthouse target: **90+** (Performance, SEO, Accessibility).
- `next/image` with lazy loading + proper sizes; hero image `priority`.
- Metadata API: title, description, Open Graph image.
- Semantic HTML, alt text, keyboard navigation, focus rings (yellow).
- Contrast: white/yellow on dark is ≥ AA.
- `sitemap.xml` and `robots.txt`.

---

## 11. Development Phases (Plan)

### Phase 1 — Setup (Day 1)
- Next.js + TS + Tailwind + Framer Motion setup.
- Design tokens, fonts, global styles, background grid/glow.
- Base UI components (Button, Chip, GlassCard, SectionLabel).

### Phase 2 — Layout + Home Core (Day 2–3)
- Navbar, Footer.
- Hero, Stats, About, Programs sections.

### Phase 3 — Home Remaining (Day 4)
- Systems feature section, Trainers, Plans, Testimonials, CTA, FAQ.

### Phase 4 — Inner Pages (Day 5–6)
- Programs, Trainers, Membership, Schedule, Contact.

### Phase 5 — Functionality (Day 7–8)
- BMI, Calorie, Workout Planner.
- Join form + validation + localStorage.
- Class booking, plan toggle, before/after slider.

### Phase 6 — Polish & Launch (Day 9–10)
- Animations fine-tune, responsive fixes.
- SEO, performance, accessibility pass.
- Deploy on Vercel.

---

## 12. Acceptance Criteria

- [ ] Look reference image ke dark + yellow glow style se match karta hai.
- [ ] Sab pages mobile, tablet, desktop pe sahi dikhte hain.
- [ ] BMI & Calorie calculators sahi results dete hain.
- [ ] Join form validate hota hai aur success state dikhata hai.
- [ ] Plan toggle price instantly update karta hai.
- [ ] Class booking page refresh ke baad bhi saved rehti hai.
- [ ] Koi backend/API call nahi.
- [ ] Lighthouse 90+.
- [ ] Deployed live link kaam karta hai.

---

## 13. Content Placeholder (Aap Badal Sakte Ho)

- **Gym name:** Power Gym
- **Tagline:** *Build Power. Break Limits.*
- **Timings:** Mon–Sat 5:00 AM – 10:00 PM, Sun 6:00 AM – 12:00 PM
- **Plans (example):** Basic ₹999/mo, Pro ₹1,799/mo, Elite ₹2,999/mo
- **Location:** (apna address + Google Map embed)
- **Phone/WhatsApp:** (apna number)

---

## 14. Assets Needed

- Logo (ya main pixel-style wordmark bana dunga).
- Hero image (dark gym / athlete / barbell, ya 3D render).
- 4–6 trainer photos, 6–8 program images, 4–6 transformation photos.
- Free options: Unsplash / Pexels (dark gym photos), ya AI-generated renders.

---

## 15. Future Scope (Phase 2, Backend Ke Baad)

- Real login & member dashboard.
- Online payment (Razorpay).
- Admin panel for plans/schedule.
- Real email/SMS notifications.
- Attendance tracking.