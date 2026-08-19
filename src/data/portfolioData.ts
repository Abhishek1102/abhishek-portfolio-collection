export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'Accessibility' | 'Social & Dating' | 'E-Commerce' | 'Devotional & Audio' | 'Tools & Native' | 'Healthcare & Business';
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  downloads?: string;
  status: string;
  singleHanded: boolean;
  color: string;
  iconName: string;
  mockupType: 'accessibility_tts' | 'dating_swipe' | 'ecommerce_shop' | 'mantra_player' | 'pooja_bell' | 'mobile_codes' | 'medical_booking';
  playStoreUrl?: string;
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
  title: "Senior Flutter & Native Android Developer",
  tagline: "Building Cosmic-Grade, Scalable & High-Performance Mobile Applications with Flutter & Android (Kotlin)",
  location: "Rajkot, Gujarat, India",
  experienceYears: "2+",
  github: "https://github.com/Abhishek1102",
  linkedin: "https://linkedin.com/in/abhishekpanchmiya",
  email: "abhishekpanchmiya1102@gmail.com",
  bio: "Senior Mobile Application Developer with 2+ years of production experience in Flutter & Native Android (Kotlin). Creator of 6+ published Play Store applications spanning accessibility tools, social discovery platforms, e-commerce engines, devotional audio suites, and native diagnostic utilities.",
  spokenLanguages: ["English (Fluent)", "Hindi (Fluent)", "Gujarati (Fluent)"],
  stats: [
    { label: "Years Experience", value: "2+", icon: "Briefcase" },
    { label: "Play Store Apps", value: "6+", icon: "Smartphone" },
    { label: "Total Downloads", value: "6,000+", icon: "Download" },
    { label: "Sole-Handed Apps", value: "4+", icon: "Star" }
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
    color: "#a855f7",
    iconName: "Eye",
    mockupType: "accessibility_tts",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.listeningeyes&hl=en_IN"
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
    mockupType: "dating_swipe",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.hukup.net&hl=en_IN"
  },
  {
    id: "daily-mantra",
    title: "Daily Mantra Jaap Player",
    subtitle: "Meditation & Hindu Devotional Mantra Audio App",
    role: "Senior Flutter & Android Developer (Sole Developer)",
    category: "Devotional & Audio",
    description: "Personal spiritual companion app for daily meditation & chanting. Features high-quality mantra audio, auto-loop repeat mode, and distraction-free playback.",
    longDescription: "Daily Mantra Jaap Player is a dedicated devotional audio application providing sacred Hindu mantras (Ganesh, Gayatri, Mahamrityunjaya, Om Chanting) with continuous auto-looping, background audio playback, and clean peaceful UI aesthetics designed to promote focus and mental clarity.",
    technologies: ["Flutter", "Dart", "Android Background Services", "Audio Players SDK", "Local Storage", "Play Console"],
    highlights: [
      "Sole developer — engineered complete mobile audio player application from scratch",
      "Implemented continuous auto-loop mode & background audio playback service",
      "Built clean, distraction-free player UI optimized for daily morning/evening prayers",
      "Curated high-clarity audio tracks for major mantras (Ganesh, Gayatri, Mahamrityunjaya)"
    ],
    downloads: "Devotional Player",
    status: "Published on Play Store",
    singleHanded: true,
    color: "#f59e0b",
    iconName: "Music",
    mockupType: "mantra_player",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.abhishek.daily_mantra_jaap_player&hl=en_IN"
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
    color: "#3b82f6",
    iconName: "ShoppingBag",
    mockupType: "ecommerce_shop",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.miodeal.buyer&hl=en_IN"
  },
  {
    id: "aarti-pooja-bell",
    title: "Aarti Pooja Bell",
    subtitle: "Virtual Temple Bell & Continuous Prayer Ring App",
    role: "Senior Flutter & Android Developer (Sole Developer)",
    category: "Devotional & Audio",
    description: "Brings the divine temple bell sound to your daily worship. Features single-tap bell ringing, continuous Aarti audio synthesis, and swinging animation.",
    longDescription: "Aarti Pooja Bell is a lightweight devotional utility app allowing users to experience virtual temple bell sound during home prayers. Built with single-tap controls, continuous bell ringing loops, and smooth swinging bell motion animations.",
    technologies: ["Flutter", "Dart", "Custom Animation Controller", "Audio Synthesis", "Android SDK"],
    highlights: [
      "Built single-handedly with lightweight footprint and single-tap responsiveness",
      "Engineered smooth physics-inspired bell swinging visual animation",
      "Integrated continuous temple bell loop audio with instant tap-to-stop controls",
      "Designed clean distraction-free devotional UI"
    ],
    downloads: "Virtual Temple Bell",
    status: "Published on Play Store",
    singleHanded: true,
    color: "#eab308",
    iconName: "Bell",
    mockupType: "pooja_bell",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.aartipoojabell&hl=en_IN"
  },
  {
    id: "mobile-codes",
    title: "Mobile Codes and Tricks",
    subtitle: "Android USSD Secret Codes & Device Hardware Diagnostics",
    role: "Senior Flutter & Native Android Developer",
    category: "Tools & Native",
    description: "All-in-one utility guide providing USSD secret dialer codes for major smartphone brands (Samsung, Vivo, Oppo, Xiaomi, Realme) and system info diagnostics.",
    longDescription: "Mobile Codes and Tricks empowers Android users to unlock hidden hardware dialer codes, view international country calling codes, inspect deep device hardware/software specs, and apply performance optimization tips with a clean dark mode UI.",
    technologies: ["Flutter", "Dart", "Android (Kotlin)", "USSD Code Engine", "Hardware Info APIs", "Dark Mode UI"],
    highlights: [
      "Curated comprehensive USSD code database across major mobile brands",
      "Integrated device hardware diagnostics inspection (CPU, Memory, Battery, Sensor specs)",
      "Built international dialing country code directory",
      "Implemented high-contrast dark theme UI for night-time reading"
    ],
    downloads: "Android Utility",
    status: "Published on Play Store",
    singleHanded: true,
    color: "#06b6d4",
    iconName: "Smartphone",
    mockupType: "mobile_codes",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.mobilecodesandtricks&hl=en_IN"
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
    period: "Jan 2024 – Present",
    location: "Rajkot, Gujarat, India",
    companyDescription: "Leading service-based software engineering firm delivering production mobile applications across accessibility, e-commerce, social, devotional, and healthcare business domains.",
    responsibilities: [
      "Promoted to Senior App Developer for exceptional feature ownership, clean code standards, and rapid delivery of 6+ Play Store applications.",
      "Architected mobile applications using Clean Architecture, MVVM, Repository Pattern, and Provider state management.",
      "Developed production apps from scratch independently (sole developer) and collaboratively inside cross-functional engineering teams.",
      "Mastered Google Play Store console operations, application updates, ownership transfers, and emergency JKS signing-key recoveries.",
      "Integrated native Android/Kotlin modules alongside Flutter apps for background services, audio players, USSD engines, and WebSockets.",
      "Communicated directly with international and local clients to gather technical requirements, scope sprints, and deliver features.",
      "Mentored 2–3 junior developers, conducting code reviews and assisting with complex API and architectural roadblocks."
    ],
    technologies: ["Flutter", "Dart", "Kotlin", "Android SDK", "Firebase", "Provider", "Clean Architecture", "Dio", "Hive/SQLite", "Google Maps", "Play Console"],
    achievements: [
      "Promoted to Senior Developer position",
      "Published 6+ production apps on Google Play Store",
      "Successfully recovered lost JKS signing key for Play Store app release",
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
      { name: "Android SDK", level: 88, tag: "Native" },
      { name: "Kotlin", level: 85, tag: "Native" }
    ]
  },
  {
    title: "Architecture & State Management",
    icon: "Layers",
    description: "Scalable software design patterns and state tools",
    skills: [
      { name: "Clean Architecture", level: 92, tag: "Pattern" },
      { name: "MVVM", level: 92, tag: "Pattern" },
      { name: "Repository Pattern", level: 90, tag: "Pattern" },
      { name: "Provider", level: 95, tag: "State" }
    ]
  },
  {
    title: "Networking, Audio & Cloud Backend",
    icon: "Cloud",
    description: "APIs, real-time messaging, audio engines, and Firebase suite",
    skills: [
      { name: "REST APIs (Dio / HTTP)", level: 95, tag: "Network" },
      { name: "WebSockets & Real-time", level: 85, tag: "Real-time" },
      { name: "Background Audio & TTS Engine", level: 92, tag: "Media" },
      { name: "Firebase Auth, Firestore & Crashlytics", level: 90, tag: "Firebase" }
    ]
  },
  {
    title: "Storage, Hardware & Play Store DevOps",
    icon: "Cpu",
    description: "Local databases, device hardware APIs & Play Store release",
    skills: [
      { name: "Google Play Console & JKS Key Recovery", level: 95, tag: "DevOps" },
      { name: "Hive / SQLite / SharedPreferences", level: 90, tag: "Database" },
      { name: "Hardware Specs & Diagnostic APIs", level: 88, tag: "Native" },
      { name: "Google Maps & Location Services", level: 88, tag: "Hardware" }
    ]
  }
];
