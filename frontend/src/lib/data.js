// All portfolio content scraped from akanshajain.dev
export const MEDIA = {
  headshot: "https://akanshajain.dev/headshot.png",
  featuredTalk: "https://akanshajain.dev/speakng.jpg",
  speakerOfTheDay: "https://akanshajain.dev/speaker_of_the_day_sessionize.png",
};

export const HERO = {
  name: "Akansha Jain",
  role: "Speaker • Engineer • Community Builder",
  tagline: ["Engineering code.", "Inspiring communities."],
  greetings: [
    "Hello", "नमस्ते", "Hola", "Bonjour", "Hallo",
    "こんにちは", "Olá", "안녕하세요", "Ciao", "สวัสดี", "سلام", "你好",
  ],
  subtitle:
    "International conference speaker with 54+ talks across Europe and Asia. Google Women Techmakers Ambassador building the next generation of mobile developers.",
  ctaPrimary: { label: "Invite Me to Speak", href: "https://sessionize.com/akanshajain/" },
  stats: [
    { value: "54+", label: "Talks" },
    { value: "28K+", label: "Attendees" },
    { value: "105K+", label: "Community" },
  ],
};

export const MARQUEE = [
  "Google Women Techmakers",
  "A.P. Moller – Maersk",
  "Flutter Conf India",
  "Flutter Vikings — Oslo",
  "FlutterNinjas — Tokyo",
  "GDG London",
  "Google DevFest",
  "FOSS United",
  "Google I/O",
  "Flutter Forward",
];

export const SELECTED_TALKS = [
  {
    id: "01",
    title: "Offline Mode, Online Impact",
    kind: "International Conference",
    venue: "FlutterNinjas — Tokyo, Japan",
    year: "2025",
    level: "Advanced",
    desc: "Presented at Japan's premier Flutter conference on building offline-first applications with practical patterns for resilient, production-grade mobile experiences.",
    link: "https://www.youtube.com/watch?v=y5F3L9v-uyI",
  },
  {
    id: "02",
    title: "Importance of Community & Leadership",
    kind: "International Conference",
    venue: "Flutter Vikings — Oslo, Norway",
    year: "2022",
    views: "3.2K",
    desc: "Spoke at one of Europe's premier Flutter conferences about building and sustaining developer communities from the ground up.",
  },
  {
    id: "03",
    title: "Agentic Flutter Apps with Firebase AI Logic",
    kind: "Conference",
    venue: "DevFest Jalandhar 2025",
    year: "2025",
    level: "Advanced",
    desc: "Exploring how AI-powered agentic workflows can be integrated into Flutter apps using Firebase for intelligent, autonomous mobile experiences.",
  },
  {
    id: "04",
    title: "Flutter DevCamp",
    kind: "International Workshop",
    venue: "GDG London, United Kingdom",
    attendees: "94",
    level: "Advanced",
    desc: "Led an immersive hands-on Flutter workshop at GDG London, one of Europe's most active developer communities.",
  },
  {
    id: "05",
    title: "Hack the Future with Flutter: Building MVPs Fast",
    kind: "Community Talk",
    venue: "GDG SRCASW",
    year: "2026",
    level: "Advanced",
    desc: "Most recent talk on rapid MVP development with Flutter — covering MVP-first thinking and using AI as an accelerator, not an autopilot.",
  },
];

export const FEATURED_TALK = {
  title: "Offline Mode, Online Impact",
  desc: "Building offline-first Flutter applications with practical patterns for resilient, production-grade mobile experiences — live from FlutterNinjas in Tokyo, Japan.",
  city: "Tokyo",
  country: "Japan",
  year: "2025",
  level: "Advanced",
  image: MEDIA.featuredTalk,
  link: "https://www.youtube.com/watch?v=y5F3L9v-uyI",
};

export const TIMELINE = [
  {
    year: "2021",
    title: "The Beginning",
    body: "Discovered Flutter through a GDSC orientation and fell in love with the framework. Became GDSC Lead and Gold Microsoft Learn Student Ambassador. Founded techtAKe (400+ members). Published first IEEE research paper. Started delivering talks and organizing workshops.",
    badges: ["GDSC Lead", "Gold MLSA", "IEEE Published"],
  },
  {
    year: "2022",
    title: "Going International",
    body: "Spoke at Flutter Vikings in Oslo, Norway — first international conference. Co-organized Flutter Conf India (446 attendees). Spoke at DevFest Goa (422 attendees). Won Best Student Award.",
    badges: ["Flutter Vikings", "Flutter Conf India", "DevFest Goa"],
  },
  {
    year: "2023",
    title: "Enterprise & Scale",
    body: "Became Google Women Techmakers Ambassador. Delivered corporate talks at A.P. Moller – Maersk (682 engineers). Co-organized Flutter Conf India 2023 (604 attendees). Spoke at GDG London. Invited to Flutter Forward.",
    badges: ["WTM Ambassador", "Maersk", "GDG London"],
  },
  {
    year: "2024",
    title: "Scaling Impact",
    body: "Invited to Google I/O. Spoke at multiple DevFests. Launched FlutterFlow Developer Group New Delhi. Joined Fluttercon India Programme Committee. Continued mentoring at hackathons (2000+ participants collectively).",
    badges: ["Google I/O", "Fluttercon Committee"],
  },
  {
    year: "2025",
    title: "New Horizons",
    body: "Spoke at FlutterNinjas Tokyo and Fluttercon India. Spoke at multiple DevFests across India. Continuing to push boundaries as both a speaker and community leader across the globe.",
    badges: ["Tokyo", "Fluttercon India"],
  },
  {
    year: "2026",
    title: "Onwards & Upwards",
    body: "Named Sessionize Speaker of the Day. Mentoring at HackNagpur. Speaking at GDG SRCASW on building MVPs with Flutter. The journey continues.",
    badges: ["Speaker of the Day", "HackNagpur"],
  },
];

export const ARCHIVE = {
  tabs: ["All", "International", "Conference", "Corporate", "Workshop", "Community"],
  count: "54+",
  items: [
    { title: "Hack the Future with Flutter: Building MVPs Fast", venue: "GDG SRCASW", type: "Community", level: "advanced", cats: ["All", "Community"] },
    { title: "Mentor: HackNagpur", venue: "GDG Nagpur", type: "Hackathon", level: "intermediate", cats: ["All", "Community"] },
    { title: "Speaker at DevFest New Delhi", venue: "DevFest New Delhi 2025", type: "Conf", level: "advanced", cats: ["All", "Conference"] },
    { title: "Speaker at DevFest Nagpur", venue: "DevFest Nagpur 2025", type: "Conf", level: "advanced", cats: ["All", "Conference"] },
    { title: "Entrepreneurship Session", venue: "Delhi Government School", type: "School", level: "beginner", cats: ["All", "Community"] },
    { title: "Judge: DevCreate BuildFest 1.0", venue: "GDG Jalandhar", type: "Hackathon", level: "intermediate", cats: ["All", "Community"] },
    { title: "Judge: HackHaven 2.0", venue: "GDG ABESEC", type: "Hackathon", level: "intermediate", cats: ["All", "Community"] },
    { title: "Offline Mode, Online Impact", venue: "FlutterNinjas, Tokyo, Japan", type: "Int'l", level: "advanced", cats: ["All", "International", "Conference"] },
  ],
};

export const STATS_BIG = [
  { value: "54+", label: "Talks & Workshops" },
  { value: "12+", label: "Cities, 4 Countries" },
  { value: "28K+", label: "Attendees Reached" },
  { value: "21+", label: "Events Organized" },
  { value: "8+", label: "Hackathons Mentored" },
  { value: "105K+", label: "Community Reach" },
];

export const TOPICS = [
  "Flutter & Dart",
  "Mobile App Architecture",
  "Firebase & FlutterFire",
  "State Management (BLoC)",
  "Cross-Platform Development",
  "App Size Optimization",
  "Offline-First Patterns",
  "UI/UX & Animations",
  "Platform Channels",
  "FlutterFlow",
  "AI in Mobile Apps",
  "Community Building & Leadership",
];

export const CODELABS = [
  {
    no: "01",
    tag: "New · Talk + Codelab",
    title: "On-Device AI with Flutter & Gemma",
    desc: "Build a multimodal Flutter app that runs Gemma 3n entirely on-device. No server. No bills. No internet.",
    chips: ["Flutter", "Gemma 3n", "Intermediate"],
    links: [
      { label: "Start Codelab", href: "https://akanshajain.dev/codelabs/on-device-ai/" },
      { label: "View Slides", href: "https://akanshajain.dev/talks/on-device-ai/" },
    ],
  },
  {
    no: "02",
    tag: "New · Talk + Codelab",
    title: "Building Generative Interfaces with Flutter's GenUI SDK",
    desc: "Let the model build the interface. Explore Flutter's GenUI SDK and the A2UI protocol to render LLM-driven UI at runtime.",
    chips: ["Flutter", "GenUI SDK", "A2UI"],
    links: [
      { label: "Start Codelab", href: "https://codelabs.developers.google.com/codelabs/genui-intro" },
      { label: "View Slides", href: "https://akanshajain.dev/talks/genui/" },
    ],
  },
];

export const LEADERSHIP = {
  featured: {
    image: MEDIA.speakerOfTheDay,
    tag: "Sessionize • February 27, 2026",
    title: "Speaker of the Day",
    body: "Featured by Sessionize as Speaker of the Day, recognizing impactful contributions across 6 events and 6 sessions on the global speaking circuit.",
  },
  items: [
    { org: "Google", role: "Women Techmakers Ambassador", body: "Part of Google's global program empowering women in technology through visibility, community, and resources.", meta: "Since 2023" },
    { org: "Microsoft", role: "Gold Learn Student Ambassador", body: "Highest tier student ambassador. Impacted 2,900+ students across programs and workshops.", meta: "2021 – 2022" },
    { org: "Flutter Conf India", role: "Co-Organizer", body: "Co-organized India's largest content-focused Flutter conference. 1,054+ total attendees across editions.", meta: "Since 2022" },
    { org: "Flutter Delhi • 9,100+ Members", role: "Co-Organizer", body: "Leading one of India's largest Flutter developer communities with regular meetups, workshops, and events.", meta: "Since 2023" },
    { org: "Fluttercon India 2025", role: "Programme Committee", body: "Selected as programme committee member for one of the most significant Flutter conferences in the region.", meta: "2025" },
    { org: "Google Developer Student Clubs", role: "GDSC Lead", body: "Led campus developer community impacting 1,986+ students through workshops, study jams, and hackathons.", meta: "2021 – 2022" },
    { org: "Google Developers", role: "Featured Contributor", body: "Featured by Google Developers for outstanding community contributions. Articles published in Google DevLibrary.", meta: "Recognition" },
    { org: "FlutterFlow • New Delhi", role: "Developer Group Lead", body: "Leading the official FlutterFlow developer community in the Delhi NCR region.", meta: "Since 2024" },
  ],
};

export const CONTACT = {
  title: "Let's make your event unforgettable",
  body: "Looking for a speaker who brings deep technical expertise, engaging delivery, and genuine passion for developer communities?",
  ctas: [
    { label: "Invite via Sessionize", href: "https://sessionize.com/akanshajain/", primary: true },
    { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/akansha-jain-2001/", primary: false },
  ],
};
