# Already Yours — Medicare Advantage Benefits Discovery

> **Tagline:** Don't let what's already yours expire.

Already Yours is an accessible, human-centered healthcare benefits discovery web application built for Americans aged 65+ enrolled in Medicare Advantage plans and the family caregivers who help them understand and utilize their supplemental health allowances.

---

## 🌟 Key Features

1. **Snap & Select Card Onboarding**:
   - **Option A (Sample Card Gallery)**: 15 preloaded Medicare Advantage insurance card specimens covering Select Health, UnitedHealthcare, Humana, Cigna Healthcare, SCAN Health Plan, Healthfirst, and Blue Cross Blue Shield.
   - **Option B (Upload My Card)**: Browser File API drag-and-drop, file browsing, and mobile camera capture (`JPG`, `PNG`, `WEBP` up to 10MB) with client-side image preview and remove/replace controls.
2. **Simulated Card Review**:
   - Inspects card specimen and surfaces carrier, plan name, plan type (HMO, PPO, D-SNP), and CMS contract ID.
   - Transparent disclaimer that demonstration is simulated and no personal health data is sent to external servers.
3. **Plan Confirmation & Validation**:
   - Explicit confirmation step with full manual editing form and instant field validation.
   - Quick-switch selector among typical Medicare Advantage demonstration plans.
4. **Benefits Exploration Dashboard**:
   - Discover high-impact extra allowances:
     - **Comprehensive & Preventive Dental**: $1,000 / year
     - **Hearing Exams & Hearing Aids**: Up to $1,000 per ear every 3 years
     - **Over-the-Counter (OTC) Health Products**: $75 quarterly ($300 / year)
     - **Routine Vision & Eyewear Allowance**: $150 / year
     - **Fitness & SilverSneakers Membership**: Free gym access & home kits
     - **Routine Medical Transportation**: 24 one-way rides / year
     - **Post-Discharge Nutritious Meals**: 28 meals delivered after hospital stay
     - **Routine Podiatry & Foot Care**: 6 routine visits / year
   - Search by keyword, filter by benefit category, and sort by highest allowance, title, or saved status.
5. **Detailed Benefit Guidance & Interactive Checklists**:
   - **What this means**: Empathetic, jargon-free plain English explanations.
   - **What you need to know**: Specific rules on coverage limits, frequencies, eligibility, network requirements, prior authorization, and use-it-or-lose-it expiration.
   - **How to use this benefit**: Interactive numbered action checklist with persistent progress tracking.
   - **Official source**: Evidence of Coverage chapter citations and official Medicare references.
6. **Caregiver Mode & Accessibility**:
   - **Caregiver Mode**: Highlights practical caregiver advice for ordering OTC items, booking transportation, and coordinating hospital discharge meals.
   - **Large Text Mode**: One-click font enlargement for senior legibility.
   - **Printable Checklists**: Built-in print stylesheets for bringing action steps to doctor appointments.
   - **LocalStorage Persistence**: Demo preferences, saved benefits, and checklist completions persist across page reloads.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Persistence:** Browser `localStorage` & File API

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Sample Card Assets Note

The 15 sample Medicare Advantage cards correspond to filenames `01_select-health.png` through `15_humana-usaa_variation-2.png` located under `public/assets/medicare-cards/`.

If image files are placed in that folder, Already Yours displays the authentic physical scans. If a file is not yet present locally, Already Yours gracefully renders a high-fidelity SVG/CSS card specimen with the carrier credentials, ensuring an unbroken, resilient user experience at all times.

---

## ⚖️ Legal & Medical Disclaimer

Benefits, eligibility, restrictions, and availability vary by plan and service area. Always verify coverage with your health plan. Already Yours is an educational demonstration prototype and is not affiliated with, sponsored by, or endorsed by CMS, Medicare, or any healthcare insurer.
