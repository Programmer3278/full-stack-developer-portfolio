export const profile = {
  name: "Abdulrasheed Abubakar",
  shortName: "AA Rasheed",
  role: "Full Stack Web Developer",
  location: "Katsina, Nigeria",
  email: "aarasheed797@gmail.com",
  phone: "+234 803 278 0335",
  photo: "images/abdul.jpg",
  cv: "files/abdulrasheed-abubakar-cv.pdf",
  github: "https://github.com/Programmer3278",
  linkedin: "https://www.linkedin.com/in/abdulrasheed-abubakar-97a5b82a4",
  intro:
    "I design and build web and mobile products end to end — from the API and database to the screen in someone's hand. My focus is payments and media for African users.",
  about: [
    "I'm a Computer Science graduate from Alqalam University, Katsina, with 5+ years of working with data and 3+ years shipping software for clients.",
    "That mix shapes how I build: clean interfaces people enjoy using, backed by APIs and data models that hold up when real money and real traffic flow through them.",
  ],
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  /** Uploaded file in /public (e.g. "videos/demo.mp4") OR a full URL (mp4, YouTube, Vimeo). */
  video: string;
  poster?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "payloow",
    name: "Payloow",
    tagline: "Fintech · Peer-to-peer payments",
    description:
      "A comprehensive fintech platform enabling seamless peer-to-peer payments, bill settlements, and financial management.",
    features: [
      "Real-time transaction tracking",
      "Multi-currency support",
      "Secure payment processing",
      "Bill settlements & money management",
    ],
    stack: ["Node.js", "React Native"],
    video: "videos/payloow-demo.mp4",
    poster: "images/payloow-poster.jpg",
  },
  {
    id: "arewaflix",
    name: "Arewaflix",
    tagline: "Streaming · African entertainment",
    description:
      "A streaming platform showcasing African entertainment content, built for discovery, binge-watching and paid access.",
    features: [
      "Video-on-demand",
      "Live streaming capabilities",
      "Content categorization",
      "Subscription-based access control",
    ],
    stack: ["FastAPI", "React.js", "PostgreSQL", "AWS S3", "Stripe"],
    video: "videos/arewaflix-demo.mp4",
    poster: "images/arewaflix-poster.jpg",
  },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "React Native", "JavaScript", "HTML & CSS", "Responsive UI"] },
  { title: "Backend", items: ["Node.js", "FastAPI (Python)", "REST APIs", "Auth & access control"] },
  { title: "Data & Cloud", items: ["PostgreSQL", "AWS S3", "Stripe payments", "GitHub Actions"] },
  { title: "Analytics", items: ["Excel (Advanced)", "SPSS", "EViews", "R (Basic)", "KoboCollect"] },
];

export const experience = [
  {
    role: "Full Stack Web Developer",
    org: "Freelance / Karakanda Data Solutions",
    period: "2022 — Present",
    points: [
      "Design, build and deploy responsive web and mobile products for clients, including Payloow and Arewaflix.",
      "Build APIs and data flows behind the interface, and integrate payments and media storage.",
      "Turn analytical findings into interactive data visualisations.",
    ],
  },
  {
    role: "Research & Data Analysis Assistant",
    org: "Lyceum Data Dynasty Ltd, Katsina",
    period: "2022 — Present",
    points: [
      "Design data collection tools and survey instruments for field implementation.",
      "Lead data cleaning, statistical analysis and visualisation end to end.",
      "Support monitoring & evaluation frameworks that track project outcomes.",
    ],
  },
  {
    role: "Data Entry Operator",
    org: "Karakanda Data Solutions, Katsina",
    period: "2018 — 2021",
    points: [
      "Managed high-volume data for quarterly household consumption and finance surveys.",
      "Streamlined data capture with field teams, cutting turnaround time by 20%.",
      "Maintained 99% accuracy across datasets for concurrent projects.",
    ],
  },
];

export const education = {
  degree: "BSc. Computer Science",
  school: "Alqalam University, Katsina",
  period: "2016 — 2022",
};
