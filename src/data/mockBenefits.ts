import { Benefit } from '../types';

export const MOCK_BENEFITS: Benefit[] = [
  {
    id: 'benefit-dental',
    name: 'Comprehensive & Preventative Dental',
    category: 'dental',
    categoryLabel: 'Dental Care',
    iconName: 'Smile',
    allowance: '$1,000 per year',
    allowanceValueAnnual: 1000,
    frequency: 'Annual Calendar Year',
    briefSummary: 'Cleanings, exams, X-rays, fillings, and dentures allowance with network dentists.',
    plainEnglishExplanation:
      'Original Medicare (Part A and B) almost never covers routine dental care. Your Medicare Advantage plan adds an annual dollar allowance you can spend on dental checkups, cavity fillings, crown repairs, and dentures.',
    coverageLimit: '$1,000 maximum plan payment per calendar year (combined preventative & comprehensive).',
    benefitFrequency: 'Resets January 1st every year.',
    eligibilityConditions: 'Enrolled in active Medicare Advantage plan. In good standing.',
    participatingProviderRequirement:
      'Must use an in-network dental provider contracted through the plan dental administrator. Out-of-network services may have higher coinsurance or zero coverage.',
    priorAuthorization: 'Not required for routine exams/cleanings. Required for crowns, bridges, and complex periodontal surgery.',
    expirationRules: 'Use-it-or-lose-it. Unused dollar allowance does NOT roll over into the next calendar year.',
    caregiverTip:
      'Dental appointments book up fast in the fall. Help your loved one schedule their preventive cleaning early in the year so you have time to use the allowance if fillings or crowns are discovered.',
    checklist: [
      {
        id: 'step-dental-1',
        stepNumber: 1,
        title: 'Check your network dentist directory',
        description:
          'Confirm that your current dentist or a convenient local dentist is in the plan’s dental network.',
        actionHint: 'Ask the dental front desk: "Do you accept the Medicare Advantage network administered by this plan?"',
      },
      {
        id: 'step-dental-2',
        stepNumber: 2,
        title: 'Schedule a preventative checkup & cleaning',
        description:
          'Routine exams, bitewing X-rays, and cleanings are typically covered at $0 copay up to your allowance.',
        actionHint: 'Mention your plan ID number when scheduling.',
      },
      {
        id: 'step-dental-3',
        stepNumber: 3,
        title: 'Request a pre-treatment estimate for major work',
        description:
          'If the dentist recommends crowns, extractions, or dentures, ask them to submit a prior authorization request before starting treatment.',
        actionHint: 'This guarantees you know your exact out-of-pocket costs in advance.',
      },
      {
        id: 'step-dental-4',
        stepNumber: 4,
        title: 'Present your Medicare Advantage card at check-in',
        description:
          'Hand your insurance card to the front desk so they can bill the dental allowance directly without you paying upfront.',
        actionHint: 'Keep a copy of the Explanation of Benefits (EOB) sent in the mail.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage (EOC) — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Dental Services (Preventive & Comprehensive)',
      excerpt:
        '“Our plan pays up to $1,000 every year for covered preventive and comprehensive dental services from in-network dental providers. Preauthorization is required for select comprehensive services.”',
      officialUrl: 'https://www.medicare.gov/coverage/dental-services',
      contactNumber: '1-800-MEDICARE or plan member services number on card back',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-hearing',
    name: 'Hearing Exams & Hearing Aids Allowance',
    category: 'hearing',
    categoryLabel: 'Hearing',
    iconName: 'Ear',
    allowance: 'Up to $1,000 per ear every 3 years',
    allowanceValueAnnual: 667,
    frequency: 'Every 3 Calendar Years',
    briefSummary: 'Routine annual hearing exam ($0 copay) plus substantial allowance toward premium digital hearing aids.',
    plainEnglishExplanation:
      'Hearing loss can make conversation and family gatherings difficult and isolating. This benefit provides a free annual hearing evaluation and covers up to $1,000 per ear towards modern, programmable hearing aids through the network partner.',
    coverageLimit: '$1,000 allowance per ear for basic/advanced hearing aids; $0 copay for 1 routine diagnostic exam per year.',
    benefitFrequency: 'Exams annual; hearing aid hardware allowance renews every 36 months.',
    eligibilityConditions: 'Must complete a diagnostic hearing evaluation by a network audiologist or licensed dispenser.',
    participatingProviderRequirement:
      'Must order through the plan’s dedicated hearing vendor (e.g., TruHearing or NationsHearing). Retail purchase receipts from third-party shops are not reimbursable.',
    priorAuthorization: 'Required before ordering hardware. Handled directly by the network provider.',
    expirationRules: 'Hearing aid allowance expires if not utilized within the 3-year plan cycle; no cash surrender value.',
    caregiverTip:
      'Many seniors feel hesitant or embarrassed about hearing aids. Offer to accompany them to the 30-minute hearing test—modern digital aids are virtually invisible and make watching TV together much more enjoyable.',
    checklist: [
      {
        id: 'step-hearing-1',
        stepNumber: 1,
        title: 'Schedule a $0 routine hearing exam',
        description: 'Call the hearing vendor partner or member services to locate an accredited hearing specialist nearby.',
        actionHint: 'Ask for an appointment that includes real-ear measurement testing.',
      },
      {
        id: 'step-hearing-2',
        stepNumber: 2,
        title: 'Test hearing aid models during the appointment',
        description:
          'Try on different styles (receiver-in-canal, in-the-ear, rechargeable batteries vs. disposable).',
        actionHint: 'Confirm the chosen model falls within the plan’s $1,000-per-ear tier.',
      },
      {
        id: 'step-hearing-3',
        stepNumber: 3,
        title: 'Order device and schedule 45-day trial fitting',
        description:
          'Your plan includes a 45-day adjustment trial and 1 year of free follow-up tuning visits and replacement ear domes.',
        actionHint: 'Take advantage of the trial period to ensure complete comfort in loud and quiet rooms.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Hearing Services & Hearing Aids',
      excerpt:
        '“Plan covers 1 routine hearing exam per calendar year at $0 copay. Up to two hearing aids (one per ear) every three years, up to $1,000 allowance per ear through designated hearing network.”',
      officialUrl: 'https://www.medicare.gov/coverage/hearing-aids',
      contactNumber: 'Plan Member Hearing Services (see card back)',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-otc',
    name: 'Over-the-Counter (OTC) Health Items',
    category: 'otc',
    categoryLabel: 'OTC Health Items',
    iconName: 'ShoppingBag',
    allowance: '$75 every 3 months ($300/yr)',
    allowanceValueAnnual: 300,
    frequency: 'Quarterly Allowance',
    briefSummary: 'Quarterly funds for toothpaste, vitamins, pain relief, blood pressure cuffs, bandages, and incontinence supplies.',
    plainEnglishExplanation:
      'Every three months, your plan deposits $75 onto a prepaid card or online account. You can spend it at local pharmacies (CVS, Walgreens, Walmart) or order items by mail with free home delivery. If you don’t spend it, that quarter’s money vanishes.',
    coverageLimit: '$75 credit per quarter ($300 annual maximum).',
    benefitFrequency: 'Loaded on January 1, April 1, July 1, and October 1.',
    eligibilityConditions: 'Active Medicare Advantage member. Only eligible health-related items from the OTC catalog are approved.',
    participatingProviderRequirement:
      'Can be used at approved retail stores using your plan benefit card, or ordered via catalog online or by phone.',
    priorAuthorization: 'None required. Point-of-sale catalog approval.',
    expirationRules: 'Crucial: Unused quarterly allowance expires on the final day of each quarter (March 31, June 30, September 30, December 31). It does NOT roll over.',
    caregiverTip:
      'Set a calendar reminder for the 15th of March, June, September, and December. You can order daily living essentials like pain relief patches, multivitamins, and first-aid kits shipped directly to your parents’ doorstep.',
    checklist: [
      {
        id: 'step-otc-1',
        stepNumber: 1,
        title: 'Activate your plan OTC / UCard / Flex Card',
        description: 'Call the automated activation number on the sticker of your physical benefit card or activate online.',
        actionHint: 'You will need your card number and date of birth.',
      },
      {
        id: 'step-otc-2',
        stepNumber: 2,
        title: 'Review the approved product catalog',
        description: 'Browse eligible items: cold medicine, compression socks, eye drops, heating pads, and vitamins.',
        actionHint: 'Look for blue "OTC Eligible" tags on store shelves at CVS, Walgreens, or Walmart.',
      },
      {
        id: 'step-otc-3',
        stepNumber: 3,
        title: 'Place your order before the quarter ends',
        description:
          'Spend the remaining balance online, through the smartphone app, by phone, or at retail checkout.',
        actionHint: 'Remember: Funds expire at midnight on the last day of each quarter.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Plan Benefit Summary — Over-the-Counter Supplemental Benefit',
      section: 'Section 3.4: Over-the-Counter (OTC) Health Products',
      excerpt:
        '“Members receive a $75 quarterly allowance for approved over-the-counter health items. Unused allowance does not roll over to the next quarter. Home delivery is provided at no extra charge.”',
      officialUrl: 'https://www.medicare.gov/what-medicare-covers/what-part-a-covers',
      contactNumber: 'OTC Fulfillment Customer Line (on card back)',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-vision',
    name: 'Routine Vision & Eyewear Allowance',
    category: 'vision',
    categoryLabel: 'Vision Care',
    iconName: 'Eye',
    allowance: '$150 per year',
    allowanceValueAnnual: 150,
    frequency: 'Annual Calendar Year',
    briefSummary: '$0 annual comprehensive eye exam plus $150 credit for prescription eyeglasses or contact lenses.',
    plainEnglishExplanation:
      'Routine eye exams catch glaucoma, cataracts, and macular degeneration early. Your plan covers a full annual vision exam for free and gives you $150 each year to apply towards designer frames, bifocals, or contact lenses.',
    coverageLimit: '$150 hardware allowance per year; $0 copay for 1 annual routine refractive eye examination.',
    benefitFrequency: 'Resets January 1st every year.',
    eligibilityConditions: 'Active member; services must be performed by a licensed optometrist or ophthalmologist.',
    participatingProviderRequirement:
      'In-network vision network providers (e.g., EyeMed, VSP, or designated network optical retailers).',
    priorAuthorization: 'Not required for routine exams or standard lenses. Upgrades (e.g. progressive tints) subject to network discount.',
    expirationRules: 'Must be used within the calendar year. Unused amounts expire December 31.',
    caregiverTip:
      'Even if your parent claims their prescription hasn’t changed, an annual exam is vital because eye doctors can spot early diabetic retinopathy, blood pressure changes, and macular degeneration before symptoms appear.',
    checklist: [
      {
        id: 'step-vision-1',
        stepNumber: 1,
        title: 'Locate an in-network optical clinic',
        description: 'Find a convenient eye doctor or optical shop that accepts the Medicare Advantage vision network.',
        actionHint: 'Major optical retailers (Target Optical, LensCrafters, independent ODs) frequently participate.',
      },
      {
        id: 'step-vision-2',
        stepNumber: 2,
        title: 'Book your annual $0 wellness eye exam',
        description: 'State that you are scheduling a routine Medicare Advantage vision checkup.',
        actionHint: 'Ask the clinic to verify your hardware allowance before you pick frames.',
      },
      {
        id: 'step-vision-3',
        stepNumber: 3,
        title: 'Apply the $150 toward frames or lenses',
        description:
          'Choose new frames, scratch-resistant lenses, or reading glasses and have the $150 deducted immediately at checkout.',
        actionHint: 'Ask for the member discount on anti-reflective coating or progressive upgrades.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Vision Care Services',
      excerpt:
        '“Plan pays 100% of the cost for one routine eye exam every year ($0 copay). Plan provides an annual allowance of $150 toward the purchase of prescription eyeglasses (frames and lenses) or contact lenses.”',
      officialUrl: 'https://www.medicare.gov/coverage/eye-exams',
      contactNumber: 'Plan Vision Partner Services',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-fitness',
    name: 'Fitness & SilverSneakers Membership',
    category: 'fitness',
    categoryLabel: 'Fitness & Wellness',
    iconName: 'Activity',
    allowance: 'Free gym access + home workout kits',
    allowanceValueAnnual: 400,
    frequency: 'Continuous Active Membership',
    briefSummary: 'Free membership at thousands of fitness centers (YMCA, Planet Fitness, Anytime Fitness) plus online classes.',
    plainEnglishExplanation:
      'Staying active preserves balance, joint mobility, and mental sharpness. This benefit gives you free access to over 15,000 gyms, swimming pools, and community centers nationwide, plus gentle virtual yoga and balance classes at home.',
    coverageLimit: 'Unlimited basic facility visits and participating group exercise classes.',
    benefitFrequency: 'Available all year with active enrollment.',
    eligibilityConditions: 'Active Medicare Advantage member. No minimum attendance requirement.',
    participatingProviderRequirement:
      'Must use participating gyms in the SilverSneakers, Renew Active, or Silver&Fit networks.',
    priorAuthorization: 'No doctor prescription or prior authorization required.',
    expirationRules: 'Active continuously as long as you remain enrolled in the health plan.',
    caregiverTip:
      'Many participating YMCAs and local fitness clubs offer heated indoor pools and chair-aerobics tailored specifically for older adults. You can look up your neighborhood gym online together in 2 minutes.',
    checklist: [
      {
        id: 'step-fitness-1',
        stepNumber: 1,
        title: 'Retrieve your 16-digit fitness member ID',
        description: 'Log in to your health plan member portal or call customer service to get your SilverSneakers or Renew Active code.',
        actionHint: 'Print the member ID card or save it to your smartphone.',
      },
      {
        id: 'step-fitness-2',
        stepNumber: 2,
        title: 'Visit your preferred local gym or community center',
        description: 'Bring your fitness code and photo ID to the front desk to receive your free membership key tag.',
        actionHint: 'You can enroll at multiple participating locations (e.g. gym near home and YMCA with pool).',
      },
      {
        id: 'step-fitness-3',
        stepNumber: 3,
        title: 'Request a home fitness kit if preferred',
        description:
          'If traveling to a gym is inconvenient, order a free home exercise kit (resistance bands, pedometer, or yoga mat) delivered to your home.',
        actionHint: 'Access hundreds of streaming live exercise classes on tablet or smart TV.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Plan Summary of Benefits — Health & Wellness Education Programs',
      section: 'Section 4.2: SilverSneakers & Physical Fitness',
      excerpt:
        '“Members enjoy standard membership at participating fitness facilities at $0 additional cost, including access to cardio equipment, weights, heated swimming pools, and signature group fitness classes.”',
      officialUrl: 'https://www.medicare.gov/coverage/health-wellness-education-programs',
      contactNumber: 'SilverSneakers / Fitness Network Line',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-transportation',
    name: 'Routine Medical Transportation',
    category: 'transportation',
    categoryLabel: 'Transportation',
    iconName: 'Car',
    allowance: '24 one-way rides per year',
    allowanceValueAnnual: 480,
    frequency: 'Annual Calendar Year',
    briefSummary: 'Curbside rides (Lyft/Uber or wheelchair van) to doctors, dialysis, pharmacies, and therapy.',
    plainEnglishExplanation:
      'Never miss a doctor appointment because driving is difficult or family members are working. Your plan provides 24 free one-way rides each year (or 12 round-trips) directly to your clinic, physical therapy, or pharmacy.',
    coverageLimit: '24 one-way trips per calendar year (maximum 50 miles per one-way trip).',
    benefitFrequency: 'Resets January 1st every year.',
    eligibilityConditions: 'Trips must be to plan-approved medical and health-related destinations.',
    participatingProviderRequirement:
      'Must be booked through the plan’s transportation manager (e.g., Modivcare or SafeRide) at least 48 to 72 business hours in advance.',
    priorAuthorization: 'Specialized wheelchair or stretcher vans require medical justification from your doctor.',
    expirationRules: 'Unused trips do not carry forward into the following year.',
    caregiverTip:
      'Caregivers can book rides on behalf of their parents! You can request a text notification when the driver arrives at their doorstep and track the vehicle until they arrive safely at the doctor’s office.',
    checklist: [
      {
        id: 'step-trans-1',
        stepNumber: 1,
        title: 'Confirm appointment date, time, and address',
        description: 'Have your doctor appointment address, doctor name, and building suite ready.',
        actionHint: 'Make sure the destination is a covered medical provider or pharmacy.',
      },
      {
        id: 'step-trans-2',
        stepNumber: 2,
        title: 'Call 48 to 72 hours ahead to schedule pickup',
        description: 'Contact the transportation coordination line listed on your card back.',
        actionHint: 'Specify if you need a standard car, curb-to-curb assistance, or a wheelchair-accessible van.',
      },
      {
        id: 'step-trans-3',
        stepNumber: 3,
        title: 'Arrange the return ride home',
        description:
          'You can set a scheduled return pickup time or use a "will-call" option where you call once the doctor finishes.',
        actionHint: 'An escort or caregiver is permitted to ride along at $0 additional charge.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Non-Emergency Medical Transportation (NEMT)',
      excerpt:
        '“Plan covers up to 24 one-way trips every year to health-related locations at $0 copay. Requests must be scheduled at least 2 business days in advance through the designated transportation vendor.”',
      officialUrl: 'https://www.medicare.gov/coverage/ambulance-services',
      contactNumber: 'Plan Transportation Dispatch (on card back)',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-meals',
    name: 'Post-Discharge Nutritious Meals',
    category: 'meals',
    categoryLabel: 'Post-Discharge Meals',
    iconName: 'Utensils',
    allowance: '28 meals delivered after hospital stay',
    allowanceValueAnnual: 280,
    frequency: 'Per Inpatient Qualifying Event',
    briefSummary: 'Fresh, chef-prepared, condition-specific frozen meals delivered to your door following hospital discharge.',
    plainEnglishExplanation:
      'Coming home from the hospital or rehab can leave you weak and exhausted. To prevent readmissions, your plan delivers 28 fully prepared nutritious meals (14 days of lunch & dinner) directly to your home at zero cost.',
    coverageLimit: '28 meals per qualifying inpatient discharge (up to 2 qualifying stays per calendar year).',
    benefitFrequency: 'Triggered upon discharge from an acute hospital or skilled nursing facility (SNF).',
    eligibilityConditions:
      'Requires a qualifying inpatient stay and authorization by the hospital discharge planner or plan case manager.',
    participatingProviderRequirement:
      'Fulfilled by plan nutrition partner (e.g., Mom’s Meals or GA Foods).',
    priorAuthorization: 'Coordinated and authorized during discharge planning.',
    expirationRules: 'Must be requested within 30 days of returning home from the hospital.',
    caregiverTip:
      'Before your loved one is discharged from the hospital, ask the social worker or nurse case manager: "Can we activate the post-discharge meal benefit under their Medicare Advantage plan?" They submit the order in 5 minutes.',
    checklist: [
      {
        id: 'step-meals-1',
        stepNumber: 1,
        title: 'Inform the hospital case manager before discharge',
        description: 'Let the discharge planner know you have post-discharge meal coverage under your Medicare Advantage plan.',
        actionHint: 'They will submit the electronic order directly to the meal vendor.',
      },
      {
        id: 'step-meals-2',
        stepNumber: 2,
        title: 'Choose special dietary menus',
        description: 'Select menus tailored for diabetes, low sodium, heart health, pureed, or renal conditions.',
        actionHint: 'Meals arrive in climate-controlled coolers with easy microwave instructions.',
      },
      {
        id: 'step-meals-3',
        stepNumber: 3,
        title: 'Receive and refrigerate your meal pack',
        description:
          'A cooler box containing 14 or 28 meals will be delivered by FedEx or UPS within 48 to 72 hours of discharge.',
        actionHint: 'No cooking required; simply heat and enjoy nutritious food during recovery.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Post-Discharge Meal Benefit',
      excerpt:
        '“Provides 28 fresh or flash-frozen meals delivered to member’s residence immediately following an inpatient hospital or skilled nursing discharge to support recovery and nutrition.”',
      officialUrl: 'https://www.medicare.gov/coverage/nutrition-services',
      contactNumber: 'Plan Care Coordination Department',
      isMockSource: true,
    },
  },
  {
    id: 'benefit-podiatry',
    name: 'Routine Foot Care & Podiatry',
    category: 'wellness',
    categoryLabel: 'Podiatry',
    iconName: 'Footprints',
    allowance: '6 routine visits per year ($0 copay)',
    allowanceValueAnnual: 300,
    frequency: 'Annual Calendar Year',
    briefSummary: 'Toenail trimming, callus reduction, and diabetic foot evaluations to preserve balance and prevent falls.',
    plainEnglishExplanation:
      'Bending down to cut toenails safely becomes difficult with arthritis or diabetes. Medicare Advantage plans often include routine podiatry visits to keep feet healthy and prevent infections and painful walking.',
    coverageLimit: 'Up to 6 routine foot care visits per calendar year at $0 or low specialist copay.',
    benefitFrequency: 'Every other month or as medically appropriate.',
    eligibilityConditions: 'Active Medicare Advantage member. Special criteria for diabetic members.',
    participatingProviderRequirement: 'In-network podiatrists (DPM) contracted with the health plan.',
    priorAuthorization: 'Usually not required for in-network routine maintenance.',
    expirationRules: 'Visits do not roll over to the next year.',
    caregiverTip:
      'Foot pain is one of the leading causes of falls in seniors. Having a licensed podiatrist inspect feet every 2 months dramatically reduces fall risk and catches diabetic ulcers before they become emergencies.',
    checklist: [
      {
        id: 'step-pod-1',
        stepNumber: 1,
        title: 'Find a participating podiatrist (foot doctor)',
        description: 'Search the health plan network directory for an in-network DPM in your neighborhood.',
        actionHint: 'Ask the podiatrist’s office if they provide routine diabetic foot evaluations.',
      },
      {
        id: 'step-pod-2',
        stepNumber: 2,
        title: 'Schedule a routine preventive foot exam',
        description: 'Mention that your Medicare Advantage plan covers routine nail maintenance and foot care.',
        actionHint: 'Bring your Medicare Advantage card and a list of current medications.',
      },
      {
        id: 'step-pod-3',
        stepNumber: 3,
        title: 'Set up standing appointments every 60 days',
        description: 'Book your next visit before leaving the clinic so your 6 annual visits stay on track.',
        actionHint: 'Comfortable, pain-free feet improve walking balance immediately.',
      },
    ],
    sourceReference: {
      documentTitle: '2026 Evidence of Coverage — Chapter 4: Medical Benefits Chart',
      section: 'Section 2.1: Podiatry Services (Routine & Medical)',
      excerpt:
        '“Plan covers up to 6 supplemental routine foot care visits per year for hygiene, toenail care, and callus maintenance in addition to Medicare-covered diabetic foot exams.”',
      officialUrl: 'https://www.medicare.gov/coverage/foot-care',
      contactNumber: 'Plan Member Services (see card back)',
      isMockSource: true,
    },
  },
];
