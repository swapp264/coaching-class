/**
 * Centralized data architecture for Prabodha Academy.
 * Keeps content and contact info separated from presentation for easy customization.
 */

export interface ContactConfig {
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  admissionsDeskTitle: string;
  campuses: {
    name: string;
    city: string;
    address: string;
    phone: string;
  }[];
}

export const CONTACT_INFO: ContactConfig = {
  phone: "+918041228900",
  phoneDisplay: "+91 (080) 4122 8900",
  whatsappNumber: "+91 98450 11200",
  whatsappUrl: "https://wa.me/919845011200",
  email: "admissions@prabodha-academy.edu.in",
  admissionsDeskTitle: "Admissions Desk",
  campuses: [
    {
      name: "Bengaluru Central Campus",
      city: "Bengaluru, KA 560025",
      address: "Richmond Road, Academic Quadrangle",
      phone: "+91 (080) 4122 8900",
    },
    {
      name: "Delhi NCR Campus",
      city: "New Delhi 110016",
      address: "Institutional Area, Hauz Khas",
      phone: "+91 (011) 4899 3200",
    },
  ],
};

export interface ProgramItem {
  id: string;
  tag: string;
  tagColor: string;
  audience: string;
  title: string;
  description: string;
  metaLeft: { label: string; value: string };
  metaRight: { label: string; value: string };
  targetHighlight: string;
  curriculumSummary: string[];
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "jee-advanced",
    tag: "ENGINEERING WING",
    tagColor: "bg-[#dde1ff] text-[#001453]",
    audience: "Classes XI, XII & Droppers",
    title: "JEE (Main & Advanced)",
    description: "Cultivate exceptional conceptual depth and multi-concept problem decomposition engineered for the topmost percentiles at premier IITs.",
    metaLeft: { label: "WEEKLY SCHEDULE", value: "18 Lecture Hrs + 6 Lab Hours" },
    metaRight: { label: "FACULTY RATIO", value: "Dedicated IIT Alumni Pod" },
    targetHighlight: "TARGET: IIT BOMBAY, DELHI, MADRAS",
    curriculumSummary: [
      "Rigid Body Dynamics & Fluid Mechanics via Calculus",
      "Coordination Chemistry & Electrochemistry Systems",
      "Complex Analysis, Integral Calculus & Vector Geometry",
      "Bi-weekly Computer-Based Simulated All-India Mocks"
    ]
  },
  {
    id: "neet-ug",
    tag: "MEDICAL SCIENCES",
    tagColor: "bg-[#e0e2ec] text-[#191b23]",
    audience: "Classes XI & XII",
    title: "NEET-UG Medical Faculty",
    description: "Diagnostic NCERT line-by-line deconstruction, high-velocity simulation drills, and clinical conceptual precision for premier government medical colleges.",
    metaLeft: { label: "WEEKLY SCHEDULE", value: "16 Lecture Hrs + NCERT Drills" },
    metaRight: { label: "RETENTION SYSTEM", value: "3-Tier Spaced Repetition" },
    targetHighlight: "TARGET: AIIMS NEW DELHI, JIPMER",
    curriculumSummary: [
      "Comparative Human Physiology & Cytogenetics",
      "Physical Chemistry Numerical Velocity Drills",
      "High-Yield NCERT Diagrammatic Mastery Audits",
      "Negative-Marking Mitigation Diagnostic Simulations"
    ]
  },
  {
    id: "foundation",
    tag: "JUNIOR RIGOR",
    tagColor: "bg-[#dce2f4] text-[#151c28]",
    audience: "Classes VIII, IX & X",
    title: "Foundation & Olympiads",
    description: "Early mathematical intuition, IOQM, NSEJS preparation, and scientific inquiry designed to build fearless thinkers long before board stress.",
    metaLeft: { label: "CORE SYLLABUS", value: "IOQM • NSEJS • RMO" },
    metaRight: { label: "PEDAGOGY FOCUS", value: "Mathematical Intuition" },
    targetHighlight: "OLYMPIAD ACCELERATION",
    curriculumSummary: [
      "Number Theory, Euclidean Geometry & Combinatorics",
      "Conceptual Physics Foundations (Kinematics & Optics)",
      "Stoichiometric Reasoning & Fundamental Chemistry",
      "National & International Olympiad Problem Sets"
    ]
  },
  {
    id: "board-distinction",
    tag: "ACADEMIC PARITY",
    tagColor: "bg-[#dedfe9] text-[#60626b]",
    audience: "CBSE & ISC Stream",
    title: "Board Distinction & Theory",
    description: "Flawless subjective answering frameworks, step-marking compliance, and conceptual derivation synchronised seamlessly with national competition.",
    metaLeft: { label: "WRITING AUDITS", value: "Weekly Examiner Grading" },
    metaRight: { label: "SYNC BENEFIT", value: "Dual-Track Syllabus Map" },
    targetHighlight: "95%+ HISTORIC COHORT MEDIAN",
    curriculumSummary: [
      "Rigorous Subjective Derivations & Proof Verification",
      "Board Examiner Step-Marking Benchmark Reviews",
      "CBSE Sample Question Papers & Timed 3-Hour Rehearsals",
      "Laboratory Practical Record Audit & Viva Coaching"
    ]
  },
];

export interface FacultyMember {
  id: string;
  name: string;
  roleTag: string;
  credentials: string;
  bio: string;
  image: string;
  imageAlt: string;
  podBadge: string;
  achievementBadge: string;
  specialties: string[];
}

export const FACULTY_DATA: FacultyMember[] = [
  {
    id: "amit-sharma",
    name: "Dr. Amit Sharma",
    roleTag: "HEAD OF PHYSICS",
    credentials: "B.Tech, M.Tech IIT Bombay • 14 Yrs Pedagogy",
    bio: "Specialist in Rotational Dynamics, Electrodynamics & Calculus in Physics. Has personally mentored over 40 Top-100 All-India IIT qualifiers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUjctrEfGAXLS29bWJvpeSEu-rTGtvujYuGSRj2TZxAnd6CL4Arp_Wlewai7A1ioC2oyVB38z3ozNG2gQy2P7Kt_vfQxh-7Mnp9jEVXr1NC4onG4X14uthD-a7SVxOINEs8sUPgLkU_z5P1vqLK06lEQt3SU1JUpvu_U9AhUR0a30IpdUNtZ_fo5C5h-gmL-BKo9ua4h6UZtCMYHZcfAU6zvf1hi2ekPsE1I8WgR-IJ7EvfvyjLQnk",
    imageAlt: "Dr. Amit Sharma, Head of Physics Faculty",
    podBadge: "IIT ADVANCED POD",
    achievementBadge: "12 PAPERS PUBLISHED",
    specialties: ["Classical Mechanics", "Electromagnetism", "Quantum Physics"],
  },
  {
    id: "sunita-raman",
    name: "Dr. Sunita Raman",
    roleTag: "CHAIR OF INORGANIC",
    credentials: "Ph.D. IISc Bangalore • Post-Doc CNRS France",
    bio: "Transforms inorganic chemistry from mindless memorization into systematic coordination geometry, crystal field theory, and molecular orbitals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEukNL2qgPIF3vMsbK4-_DjF5M5y1FyW4TGbmyc7qlkO9OOTxA03M5-C4duINZymMDrqzvhTwqnxr7J5flZEc4n_VwQXNSDsR9GlyN5WeRKGfwm6aY4Ual4nYBItMInEybj13uITQFwgR_u-mLAlKH7lrjMXC46FxtNlzln1A_N8eh3N0o5suVRR1Cp7keMoedNf6kqa6nJEwuUZhn4Gkip3qpjFaRBdayg86lov3u5YZnw8GZd-N2",
    imageAlt: "Dr. Sunita Raman, Chair of Inorganic Chemistry",
    podBadge: "NEET & JEE APEX",
    achievementBadge: "18 YRS DISCIPLINE",
    specialties: ["Coordination Chemistry", "Molecular Orbital Theory", "Bioinorganic"],
  },
  {
    id: "k-raghavan",
    name: "Prof. K. Raghavan",
    roleTag: "PURE MATHEMATICS",
    credentials: "ISI Kolkata • National Olympiad Trainer",
    bio: "Celebrated for building geometric elegance and algebraic intuition. Author of three benchmark compendiums for Indian Olympiad aspirants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi1Ur7foDp1sWIFLoaIzFbSqyH2-r28lcGqnByzX0oiOA-3l9AxD5pmYuPoGFXIOU0drkR1K4_9QtmcCPoLFFXyap9OiXirzMQT9YCQi0S_CfCyvUWI2IQp7wTUYbrpSRaTG7TAcDi3bamrFfWoz3HoWOMD-8zokzpPJeO-vL149Ep2lCfGb6IITRgnLABbl76ivCbaRL_bPdo7bpNWw457ihrbGYBvWV9p3zlTqec6Zs0Dt31hREz",
    imageAlt: "Prof. K. Raghavan, Chair of Pure Mathematics",
    podBadge: "OLYMPIAD & JEE",
    achievementBadge: "RMO/INMO COACH",
    specialties: ["Combinatorics", "Differential Calculus", "Number Theory"],
  },
];

export interface BatchItem {
  id: string;
  badge: string;
  badgeColor: string;
  targetYear: string;
  title: string;
  locationDetails: string;
  startDate: string;
  capacity: string;
  programValue: string;
}

export const BATCHES_DATA: BatchItem[] = [
  {
    id: "batch-jee-2028",
    badge: "LIMITED SEATS",
    badgeColor: "bg-[#dde1ff] text-[#0030a5]",
    targetYear: "Target: 2028",
    title: "JEE Two-Year Integrated (Class XI)",
    locationDetails: "Bengaluru Central Campus & Delhi NCR • Daily Socratic Lectures + Physics Lab",
    startDate: "April 14, 2026",
    capacity: "25 Scholars Max",
    programValue: "JEE (Main & Advanced)",
  },
  {
    id: "batch-neet-2027",
    badge: "DIAGNOSTIC ADMIT",
    badgeColor: "bg-[#e0e2ec] text-[#191b23]",
    targetYear: "Target: 2027",
    title: "NEET Comprehensive Cohort (Class XII)",
    locationDetails: "Hybrid & Full Offline Campus • NCERT Mastery + Botany/Zoology Seminars",
    startDate: "May 02, 2026",
    capacity: "25 Scholars Max",
    programValue: "NEET-UG Medical Faculty",
  },
  {
    id: "batch-foundation-2029",
    badge: "FOUNDATION",
    badgeColor: "bg-[#dce2f4] text-[#151c28]",
    targetYear: "Classes VIII & IX",
    title: "Foundation Olympiad Scholars",
    locationDetails: "Weekend Acceleration Pods • IOQM & International Science Olympiads",
    startDate: "June 10, 2026",
    capacity: "20 Scholars Max",
    programValue: "Foundation & Olympiads",
  },
];

export interface CampusZone {
  id: string;
  zone: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const CAMPUS_ZONES: CampusZone[] = [
  {
    id: "zone-1",
    zone: "ZONE 01",
    title: "The Silent Carrels",
    description: "Oak desks, bronze task lights, and noise-cancelling baffles for unbroken solo problem solving.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA88y1PShX4MYI0O6w6VGeEpFLdfh9QVlpWMf9XhhqZpc07BKqYukyNX_nlx11wPYlNOanJnjrt4X16D2CZxQLF95GwWkfNNewNF6aprih-mPm3fIA-YioXZfUoL9N3818UQ4h0_-zmK5V7P2f2RMZIGdPJ8rwzwuo-9js4h6pfkPax9uPpbAYcN5Z3vXViqNFSY8CIETPI9be0f81iV_HjiwADMX6Cr0gnsZ0yQTd85LG0bDDjs22k",
    imageAlt: "Warm silent study library with individual oak carrels and bronze reading lamps",
  },
  {
    id: "zone-2",
    zone: "ZONE 02",
    title: "Doubt Alcoves",
    description: "Walk-in collaborative booths staffed continuously by resident IIT alumni teaching assistants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUSR71NbFaItLACf-hvq2ORqS2g2qYgw_o8RIIrRBf4fJE7KlcTnATvl4o2tQu-7tPcfuWc0EXKnTWyZt0yT3z2uECHEgWebXXOnguhp-S7FokKP5QDqhCd093a3_SyVNBj0cvI8jPspZo8reStz6HitCqDFIZrUC_X92YFrmr3Ihh78bHslwLeu_La10zxXEC9hLFjfJV9CRm1nqNTrSZvkKAS8WG4HGy2hqbUr9nv0-vQNWu84n5",
    imageAlt: "Small glass-partitioned modern doubt clearance room where teacher and students sketch equations",
  },
  {
    id: "zone-3",
    zone: "ZONE 03",
    title: "Simulation Lab",
    description: "Exact hardware and server infrastructure mirroring the national testing agency specifications.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYURpSAnp2MyD4VjyCrGvz80DYKoSLbdPqD9L2dtw43DrOckbN0eTUY7cnFWdzAEveTWR82wGyb3lJS4PSlDroGKihtpQwDo-r5eSV77ubZ5t5Iyoep15HP_ce6Gqak0vhlRyTaGskF2-SPdsbwuRwPRamcKxiXDlWLWCGmx_Be8tjxI8jmT9SIcGccWXvyZGnbOCgndIG2TitoEQYAQEjbQID98OCQwPNFB7usRPj85Nd-tqMUxJq",
    imageAlt: "Computer examination lab with rows of terminals mirroring national testing conditions",
  },
  {
    id: "zone-4",
    zone: "ZONE 04",
    title: "Botanical Courts",
    description: "Open-air shaded courtyards for cognitive reset between grueling multi-hour mock sessions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDozbn9WBbM8aPdEDKviX4JIbaQ443dDC6Zmotxy9QTj8IQrDViuZ-JjSPADdgdBZgcOagAf632z2AtgWcoOYEMevCH6DSPTIaRXEiKhLnLlBhWl1yMHkFe_v5DSI-Zq0ZB5iE1dfWYs3GaUphYQJekvfN-l4JAxHSOaVFYT8ICwZzo7hFgUU8WfYRqnt3QVbF_SN6urtXmgeJSN77HA22msskCNESdGNeYVaVSBkm4NCvrzB0hWuxY",
    imageAlt: "Architectural courtyard with tropical greenery and benches for student reflection",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "How strictly is the 25-student batch ceiling enforced?",
    answer: "Unconditionally. Our teaching method relies on the mentor grading handwritten steps daily and conducting mandatory weekly alcove sessions. Exceeding 25 scholars dilutes diagnostic fidelity and is prohibited by our institutional charter.",
  },
  {
    question: "Are faculty members permanent or subject to mid-term rotation?",
    answer: "All department heads and senior mentors are permanent faculty chairs with zero rotational transfers. The mentors who introduce kinematics or chemical equilibrium will see the cohort through to their final advanced revision mock.",
  },
  {
    question: "What criteria determine scholarship eligibility?",
    answer: "Merit awards (up to 100% tuition remission) are allocated strictly through our two-hour written Prabodha Scholastic Aptitude Test (PSAT) or verifiable medal positions in National and International Science/Math Olympiads.",
  },
  {
    question: "How does the institute sync with school board examinations?",
    answer: "Our curriculum integrates state and CBSE board subjective formatting simultaneously. From November through January, scholars complete timed subjective mock writing sessions certified by veteran board evaluators.",
  },
  {
    question: "Are residential hostel facilities provided for outstation scholars?",
    answer: "Yes. Both our Bengaluru and Delhi campuses feature fully managed, secure scholar residencies with individual study nooks, high-speed academic networks, nutritious chef-prepared meals, and on-call faculty wardens.",
  },
];
