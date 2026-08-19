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

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: "Abhishek Panchmiya",
  title: "Senior Flutter & Mobile Application Developer",
  tagline: "Crafting High-Performance, Scalable & Accessible Mobile Applications with Flutter & Android (Kotlin)",
  location: "Rajkot, Gujarat, India",
  experienceYears: "2+",
  github: "https://github.com/Abhishek1102",
  linkedin: "https://linkedin.com/in/abhishekpanchmiya",
  bio: "Senior Mobile Application Developer with 2+ years of experience delivering production Flutter & Native Android apps. Proven expertise in building accessibility tools, e-commerce engines, social discovery apps, and enterprise schedulers from concept to Play Store release.",
  spokenLanguages: ["English (Fluent)", "Hindi (Fluent)", "Gujarati (Fluent)"],
  stats: [
    { label: "Years Experience", value: "2+", icon: "Briefcase" },
    { label: "Play Store Downloads", value: "5,500+", icon: "Download" },
    { label: "Production Apps Delivered", value: "4+", icon: "Smartphone" },
    { label: "Junior Devs Mentored", value: "3+", icon: "Users" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "listening-eyes",
    title: "Listening Eyes",
    subtitle: "Accessibility Educational App for Visually Impaired Students",
    role: "Senior Flutter Developer (Sole Developer)",
    category: "Accessibility",
    description: "Built single-handedly from scratch. Converts specialized study materials into spoken text with customized audio feedback navigation for visually impaired learners.",
    longDescription: "Listening Eyes is a specialized accessibility mobile platform designed to bridge educational gaps for visually impaired students. Developed single-handedly from concept to Play Store release, it features custom Text-to-Speech (TTS) file parsers, screen-reader-friendly layout hierarchies, and continuous spoken UI feedback. Includes a dedicated web/app admin portal for managing specialized educational materials.",
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
    id: "hukup-dating",
    title: "Hukup Dating App",
    subtitle: "Social Discovery & Interactive Profile Cards App",
    role: "Flutter & Native Android Developer",
    category: "Social & Dating",
    description: "Production dating application featuring smooth card-swipe discovery UI, real-time user interactions, and robust location-based profile matching.",
    longDescription: "Hukup is a full-featured dating and social discovery platform built for seamless user connection. Contributed to core home screen card-swipe navigation, Flutter UI components, REST API integration, and app release maintenance on the Google Play Store.",
    technologies: ["Flutter", "Dart", "Android (Kotlin)", "REST APIs", "Firebase", "WebSockets", "Push Notifications"],
    highlights: [
      "Engineered profile-card based user discovery UI with smooth 60fps swipe gestures",
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
    description: "Buyer-facing mobile application for shopping across food, electronics, fashion, and everyday essentials with seamless cart & checkout flows.",
    longDescription: "Miodeal Buyer is a multi-vendor e-commerce mobile application delivering an intuitive product search, category browsing, interactive product detail screens, payment gateway integrations, and order tracking.",
    technologies: ["Flutter", "Dart", "Dio / HTTP", "Hive Storage", "Payment Gateways", "REST APIs"],
    highlights: [
      "Built interactive product detail UI with image carousels & variant selectors",
      "Integrated secure payment gateways & cart state persistence with Hive",
      "Optimized API calls using Dio caching for fast product browsing experience",
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
    id: "maia-care",
    title: "Maia Care",
    subtitle: "Doctor & Medical Representative Appointment Platform",
    role: "Sole Mobile Developer",
    category: "Healthcare & Business",
    description: "Business appointment scheduling app facilitating conflict-free scheduling and visit logs between medical representatives and healthcare doctors.",
    longDescription: "Maia Care simplifies healthcare business interactions by enabling medical representatives to schedule, reschedule, and log visits with doctors. Developed 100% single-handedly from scratch using Clean Architecture and Provider state management.",
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
    id: "technocomet",
    role: "Senior App Developer",
    company: "TechnoComet Solutions",
    period: "Jan 2024 – Aug 2026",
    location: "Rajkot, Gujarat, India",
    companyDescription: "Leading service-based software engineering firm delivering mobile applications across accessibility, e-commerce, social, and healthcare business domains.",
    responsibilities: [
      "Promoted to Senior App Developer for exceptional feature ownership, clean code standards, and client satisfaction.",
      "Architected mobile applications using Clean Architecture, MVVM, Repository Pattern, and Provider state management.",
      "Developed production apps from scratch independently and collaboratively inside 6–7 member cross-functional engineering teams.",
      "Mastered Google Play Store console operations, application updates, ownership transfers, and emergency JKS signing-key recoveries.",
      "Integrated complex native Android/Kotlin modules alongside Flutter apps for camera/scanners, background services, and WebSockets.",
      "Communicated directly with international and local clients to gather technical requirements, scope sprints, and deliver features.",
      "Mentored 2–3 junior developers, conducting code reviews and assisting with complex API and architectural roadblocks."
    ],
    technologies: ["Flutter", "Dart", "Kotlin", "Android SDK", "Firebase", "Provider", "Clean Architecture", "Dio", "Hive/SQLite", "Google Maps", "Play Console"],
    achievements: [
      "Promoted to Senior Developer position",
      "Successfully recovered lost JKS signing key for Play Store app release",
      "Delivered 4+ full-scale production mobile applications",
      "Mentored 3 junior app developers"
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
      { name: "Android SDK", level: 85, tag: "Native" },
      { name: "Kotlin", level: 82, tag: "Native" }
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
    title: "Storage, Hardware & Deployment",
    icon: "Cpu",
    description: "Local databases, device hardware APIs & Play Store release",
    skills: [
      { name: "Google Play Console & JKS Keys", level: 95, tag: "DevOps" },
      { name: "Hive / SQLite / SharedPreferences", level: 90, tag: "Database" },
      { name: "Google Maps & Location", level: 88, tag: "Hardware" },
      { name: "Text-To-Speech & Background Services", level: 90, tag: "Hardware" }
    ]
  }
];
