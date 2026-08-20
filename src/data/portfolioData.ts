export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Accessibility' | 'Social & Dating' | 'E-Commerce' | 'Healthcare & Business';
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  downloads?: string;
  status: string;
  singleHanded: boolean;
  color: string;
  iconName: string;
  mockupType: 'accessibility_tts' | 'dating_swipe' | 'ecommerce_shop' | 'medical_booking';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  companyDescription: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  period: string;
  degrees: { title: string; score: string }[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "Abhishek Panchmiya",
  title: "Senior Flutter & Mobile Application Developer",
  tagline: "Crafting High-Performance, Scalable & Accessible Mobile Applications with Flutter & Native Android (Kotlin)",
  location: "Rajkot, Gujarat, India",
  experienceYears: "2+",
  github: "https://github.com/Abhishek1102",
  linkedin: "https://linkedin.com/in/abhishekpanchmiya",
  bio: "Senior Mobile Developer specializing in production Flutter & Native Android (Kotlin) apps. Expert in Play Store deployment, app ownership transfers, and emergency JKS keystore recovery.",
  spokenLanguages: ["English (Fluent)", "Hindi (Fluent)", "Gujarati (Fluent)"],
  stats: [
    { label: "Years Experience", value: "2+", icon: "Briefcase" },
    { label: "Play Store Downloads", value: "5,500+", icon: "Download" },
    { label: "Production Apps Delivered", value: "4+", icon: "Smartphone" },
    { label: "Junior Devs Mentored", value: "3+", icon: "Users" }
  ]
};

export const EDUCATION: Education = {
  institution: "Atmiya Institute of Technology",
  period: "2018 – 2022",
  degrees: [
    { title: "Bachelor of Computer Science", score: "89 %" },
    { title: "Master of Science in I.T.", score: "85 %" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "smartbill-ai",
    title: "SmartBill AI Receipt Scanner",
    subtitle: "AI Receipt Scanner & Expense Manager with Gemini Vision",
    role: "Senior Flutter Developer (Sole Developer)",
    category: "AI & Productivity" as any,
    description: "AI expense & receipt manager leveraging Gemini 3 Flash Preview AI to turn phone cameras into automated accountants, extracting merchant, date, amount, and category instantly.",
    longDescription: "SmartBill AI is an intelligent receipt scanner and expense tracker built in Flutter. Powered by Gemini 3 Flash Preview AI, it automatically extracts merchant information, transaction dates, totals, and tax categories from receipt photos with high accuracy. Features budget management and tax expense organization.",
    technologies: ["Flutter", "Dart", "Google Gemini AI", "Camera Vision / OCR", "Expense Tracker", "Play Store Console"],
    highlights: [
      "Sole developer — built 100% of the mobile app in Flutter from concept to Play Store release",
      "Integrated Gemini 3 Flash AI vision for automated receipt parsing & data extraction",
      "Eliminated manual receipt entry for freelancers, students, and small business owners",
      "Published and maintained on Google Play Store"
    ],
    downloads: "New Release",
    status: "Published on Play Store",
    singleHanded: true,
    color: "#38bdf8",
    iconName: "Sparkles",
    mockupType: "accessibility_tts"
  },
  {
    id: "hukup-dating",
    title: "Hukup Dating App",
    subtitle: "Social Discovery & Interactive Profile Cards App",
    role: "Flutter & Native Android Developer",
    category: "Social & Dating",
    description: "Production dating application featuring smooth card-swipe discovery UI, real-time messaging, and location-based profile matching.",
    longDescription: "Hukup is a full-featured dating and social discovery platform built for seamless user connection. Contributed to core card-swipe navigation, Flutter UI components, REST API integration, and app release maintenance on Google Play Store.",
    technologies: ["Flutter", "Dart", "Android (Kotlin)", "REST APIs", "Firebase", "WebSockets", "Push Notifications"],
    highlights: [
      "Engineered profile-card discovery UI with smooth 60fps swipe gestures",
      "Collaborated in a 6-7 member team to integrate real-time messaging & notifications",
      "Managed production bug resolution and Google Play Store deployment updates",
      "Scaled application to achieve over 5,000+ active Play Store downloads"
    ],
    downloads: "5,000+ Downloads",
    status: "Published on Play Store",
    singleHanded: false,
    color: "#ec4899",
    iconName: "Heart",
    mockupType: "dating_swipe"
  },
  {
    id: "miodeal-buyer",
    title: "Miodeal Buyer",
    subtitle: "Multi-Category E-Commerce Marketplace Platform",
    role: "Flutter Developer",
    category: "E-Commerce",
    description: "Buyer-facing mobile application for shopping across food, electronics, and fashion with seamless cart & checkout flows.",
    longDescription: "Miodeal Buyer is a multi-vendor e-commerce application delivering product search, category browsing, product detail screens, payment gateway integrations, and order tracking.",
    technologies: ["Flutter", "Dart", "Dio / HTTP", "Hive Storage", "Payment Gateways", "REST APIs"],
    highlights: [
      "Built interactive product detail UI with image carousels & variant selectors",
      "Integrated secure payment gateways & cart state persistence with Hive",
      "Optimized API calls using Dio caching for fast product browsing",
      "Published on Google Play Store with 100+ active retail buyers"
    ],
    downloads: "100+ Downloads",
    status: "Published on Play Store",
    singleHanded: false,
    color: "#f59e0b",
    iconName: "ShoppingBag",
    mockupType: "ecommerce_shop"
  },
  {
    id: "listening-eyes",
    title: "Listening Eyes",
    subtitle: "Accessibility Educational App for Visually Impaired Students",
    role: "Senior Flutter Developer (Sole Developer)",
    category: "Accessibility",
    description: "Built 100% single-handedly. Converts study materials into spoken text with customized audio feedback navigation for visually impaired learners.",
    longDescription: "Listening Eyes is a specialized accessibility mobile platform for visually impaired students. Features custom Text-to-Speech (TTS) file parsers, screen-reader-friendly layout hierarchies, and continuous spoken UI feedback. Includes a dedicated admin portal for managing educational materials.",
    technologies: ["Flutter", "Dart", "Text-to-Speech Engine", "Custom File Parser", "Local Audio Engine", "Play Store Console"],
    highlights: [
      "Sole developer — built 100% of mobile app & admin backend tool from scratch",
      "Integrated spoken audio feedback for seamless blind navigation without visual aid",
      "Engineered text-to-speech file parsing for complex educational books",
      "Published and maintained on Google Play Store with 500+ active student users"
    ],
    downloads: "500+ Users",
    status: "Published on Play Store",
    singleHanded: true,
    color: "#8b5cf6",
    iconName: "Eye",
    mockupType: "accessibility_tts"
  },
  {
    id: "maia-care",
    title: "Maia Care",
    subtitle: "Doctor & Medical Representative Appointment Platform",
    role: "Sole Mobile Developer",
    category: "Healthcare & Business",
    description: "Business appointment scheduling app facilitating conflict-free scheduling and visit logs between medical representatives and doctors.",
    longDescription: "Maia Care simplifies healthcare business interactions by enabling medical representatives to schedule, reschedule, and log visits with doctors. Developed 100% single-handedly using Clean Architecture and Provider state management.",
    technologies: ["Flutter", "Dart", "Provider", "Clean Architecture", "REST APIs", "Custom Calendar"],
    highlights: [
      "Designed and built entire mobile app single-handedly from scratch",
      "Implemented intelligent calendar scheduling to prevent appointment double-booking",
      "Applied Clean Architecture & Repository Pattern for long-term scalability",
      "Delivered production-ready client app ahead of timeline"
    ],
    status: "Client Delivered",
    singleHanded: true,
    color: "#10b981",
    iconName: "Calendar",
    mockupType: "medical_booking"
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "technocomet-senior",
    role: "Senior App Developer",
    company: "TechnoComet Solutions",
    period: "Jan 2024 – Present",
    location: "Rajkot, Gujarat, India",
    companyDescription: "Leading software engineering firm delivering production mobile apps across accessibility, e-commerce, social discovery, and healthcare.",
    responsibilities: [
      "Promoted to Senior App Developer for high feature ownership, clean code standards, and rapid client deliveries.",
      "Spearheaded Play Store Console operations: application releases, app ownership transfers, and lost JKS signing key recovery (PEPK key export & Google Play App Signing).",
      "Architected mobile applications using Clean Architecture, MVVM, Repository Pattern, and Provider state management.",
      "Integrated native Android (Kotlin) modules alongside Flutter apps for camera, background services, and WebSockets.",
      "Mentored 3 junior app developers, conducting code reviews and assisting with complex API and architectural roadblocks."
    ],
    technologies: ["Flutter", "Dart", "Android (Kotlin)", "Clean Architecture", "Provider", "Play Console DevOps", "JKS Keystore Recovery", "App Ownership Transfer"],
    achievements: [
      "Promoted to Senior Developer position",
      "Successfully recovered lost JKS signing key for Play Store app release",
      "Managed Play Console app ownership transfers & production releases",
      "Mentored 3 junior app developers"
    ]
  },
  {
    id: "technocomet-trainee",
    role: "Mobile Application Developer Trainee",
    company: "TechnoComet Solutions",
    period: "Jul 2023 – Dec 2023 (6 Months)",
    location: "Rajkot, Gujarat, India",
    companyDescription: "6-month cross-platform mobile development training program focusing on Flutter, Dart, and Native Android.",
    responsibilities: [
      "Completed 6 months cross-platform mobile application development training (Flutter & Native Android)."
    ],
    technologies: ["Flutter", "Dart", "Android (Kotlin)", "REST APIs", "Hive/SQLite", "Git"],
    achievements: [
      "Completed 6-Month Cross-Platform Training",
      "Built foundation for production Flutter & Native Android app delivery"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile SDKs & Languages",
    icon: "Smartphone",
    description: "Core programming languages and native mobile frameworks",
    skills: [
      { name: "Flutter", level: 95, tag: "Primary" },
      { name: "Dart", level: 95, tag: "Primary" },
      { name: "Native Android SDK", level: 88, tag: "Native" },
      { name: "Kotlin", level: 85, tag: "Native" }
    ]
  },
  {
    title: "Architecture & State Management",
    icon: "Layers",
    description: "Scalable software design patterns and state tools",
    skills: [
      { name: "Clean Architecture", level: 90, tag: "Pattern" },
      { name: "MVVM", level: 92, tag: "Pattern" },
      { name: "Repository Pattern", level: 90, tag: "Pattern" },
      { name: "Provider", level: 95, tag: "State" }
    ]
  },
  {
    title: "Networking & Cloud Backend",
    icon: "Cloud",
    description: "APIs, real-time messaging, and Firebase suite",
    skills: [
      { name: "REST APIs (Dio / HTTP)", level: 95, tag: "Network" },
      { name: "WebSockets", level: 85, tag: "Real-time" },
      { name: "Firebase Auth & Firestore", level: 90, tag: "Firebase" },
      { name: "Crashlytics & Push Notifications", level: 90, tag: "Firebase" }
    ]
  },
  {
    title: "Play Store DevOps & Keystore Recovery",
    icon: "Cpu",
    description: "Play Store deployment, app transfers & emergency JKS recovery",
    skills: [
      { name: "Play Console Release & Ownership Transfer", level: 95, tag: "DevOps" },
      { name: "Lost JKS Keystore Recovery (PEPK)", level: 95, tag: "DevOps" },
      { name: "Hive / SQLite / SharedPreferences", level: 90, tag: "Database" },
      { name: "Text-To-Speech & Background Services", level: 90, tag: "Hardware" }
    ]
  }
];
