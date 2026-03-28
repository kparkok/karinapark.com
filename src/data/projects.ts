export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  fullDescription: string;
  tech: string[];
  images: string[];
  github: string;
  live: string;
  challenges: string;
  learned: string;
  status?: string;
}

export const projects: Project[] = [
  {
    slug: "hacc",
    title: "Hawaii State ETS Reporting System",
    subtitle: "HACC 2025 Submission",
    date: "October 2025",
    description:
      "End-to-end dashboard driving state project transparency for Hawaii DETS — interactive visualizations for real-time project performance tracking.",
    fullDescription:
      "Built as a submission to the Hawaii Annual Coding Challenge 2025, this system drives state project transparency objectives for Hawaii DETS. It enables data-centric decision making for state stakeholders through an end-to-end dashboard with interactive visualizations for real-time project performance tracking. I served as Team Program Manager leading a team of 4-5 engineers.",
    tech: ["TypeScript", "React", "Firebase", "Project Management"],
    images: ["/images/projects/hacc.png"],
    github: "https://github.com/HACC25/Cache-Money",
    live: "",
    challenges:
      "Coordinating a team of 4-5 engineers under a tight hackathon deadline while also contributing technically. Balancing the PM role with hands-on development was a constant challenge.",
    learned:
      "How to lead a technical team under pressure, structure Firebase data for complex reporting dashboards, and communicate clearly with non-technical stakeholders.",
  },
  {
    slug: "livably",
    title: "Livably",
    subtitle: "AI-Powered Web App",
    date: "September 2025",
    description:
      "Helps university students align shared-space living expectations with AI-powered roommate compatibility matching.",
    fullDescription:
      "Livably is a full-stack web application powered by Google Gemini AI that helps university students navigate the often awkward process of aligning expectations with roommates. Users answer a series of questions about their living habits, and the AI generates a personalized compatibility report and shared living agreement.",
    tech: ["TypeScript", "React", "Firebase", "Gemini AI"],
    images: ["/images/projects/livably.png"],
    github: "https://github.com/kparkok/livably",
    live: "https://roomate-contract.web.app/",
    challenges:
      "Prompting Gemini to generate consistent, useful output from variable user input. Getting the AI responses to feel personal rather than generic took a lot of iteration.",
    learned:
      "How to integrate LLM APIs into a production app, structure prompts for consistent output, and build a smooth multi-step form flow in React.",
  },
  {
    slug: "uh-rideshare",
    title: "UH Manoa Rideshare",
    subtitle: "Full-Stack Web App",
    date: "November 2024",
    description:
      "Rideshare app connecting University of Hawaii students looking to share rides to and from campus.",
    fullDescription:
      "UH Manoa Rideshare is a full-stack platform that connects University of Hawaii students who are looking to carpool to and from campus. Students can post rides, search for available rides, and connect with other riders. Built with a focus on simplicity and accessibility for the UH community.",
    tech: ["TypeScript", "React", "PostgreSQL", "Node.js"],
    images: ["/images/projects/UHMRideshare.png"],
    github: "https://github.com/UH-Uber/UH-Uber-SourceCode",
    live: "",
    challenges:
      "Designing a database schema that efficiently handles ride matching and user connections. Handling real-time updates without a dedicated WebSocket setup.",
    learned:
      "Full-stack architecture with PostgreSQL and Node.js, working in a collaborative GitHub workflow with multiple contributors, and designing for a real user base.",
  },
  {
    slug: "inventory",
    title: "Inventory Management System",
    subtitle: "Full-Stack Web App",
    date: "May 2025",
    description:
      "Tracks inventory across multiple vendors on the UH Manoa campus with a full-stack web interface.",
    fullDescription:
      "A full-stack inventory management system built to track stock across multiple vendors operating on the UH Manoa campus. The system allows vendors to update inventory counts, track low-stock alerts, and view historical data through a clean web interface.",
    tech: ["JavaScript", "HTML", "PostgreSQL"],
    images: ["/images/projects/Inventory.png"],
    github: "",
    live: "",
    challenges:
      "Building a flexible data model that could accommodate different vendor categories and inventory types without overcomplicating the schema.",
    learned:
      "Database design fundamentals, vanilla JavaScript DOM manipulation, and how to scope a project to fit a realistic timeline.",
  },
  {
    slug: "memorymap",
    title: "MemoryMap",
    subtitle: "Mobile App",
    date: "In progress",
    description:
      "GPS-locked photo journals — photos are unviewable until you physically return to the exact location where they were taken.",
    fullDescription:
      "MemoryMap is a React Native mobile app where photos are GPS-locked at the moment of capture. They become completely unviewable until the user physically returns to that location. Two unlock tiers exist: Exact Spot (150m radius) and Nearby (2km radius). Photos are grouped into multi-photo memory folders with captions, titles, and notes.",
    tech: ["React Native", "Expo", "Firebase"],
    images: [],
    github: "",
    live: "",
    challenges:
      "Implementing reliable GPS radius checks on mobile, handling location permissions gracefully across iOS and Android, and designing a UX that makes the 'locked' state feel intentional rather than broken.",
    learned:
      "React Native and Expo location APIs, Firebase Storage for mobile, and how to design around physical-world constraints.",
    status: "In progress",
  },
];
