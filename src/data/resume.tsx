import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aditya Kumar Pandey",
  initials: "AP",
  url: "https://yourportfolio.com", // Replace with your portfolio link
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore,+Karnataka",
  description:
    "Full Stack Developer transitioning from finance background. Passionate about building scalable web applications and optimizing workflows through technology.",
   summary:
  "With over 2.5 years of experience in Finance Operation at Citicorp, I transitioned into full stack web development — mastering React.js, Node.js, and MongoDB. I’ve built multiple real-world applications such as SuperLM (an AI tutor inside your book) and Supacast (an AI podcast generator). My focus is on building intelligent, scalable, and user-centric applications using modern web technologies and AI integrations. I bring an analytical, detail-oriented mindset from my business analysis background into software engineering, ensuring every project aligns with both user and business needs.",

  avatarUrl: "/me.png", // replace with your actual image path
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript (ES6+)",
    "TypeScript",
    "Tailwind CSS",
    "Material-UI",
    "Firebase",
    "Git & GitHub",
    "REST API",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "adityaddd321@gmail.com",
    tel: "+917268029242",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pandeyaditya15",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aditya-p70711a0/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AdityaP47627035",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:adityaddd321@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Citicorp Services Pvt Ltd",
      href: "https://www.citigroup.com/",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Finance Operation Specialist",
      logoUrl: "/citicorp.png",
      start: "2022",
      end: "2025",
      description:
        "Worked in financial operations, focusing on KYC compliance, data integrity, and workflow optimization. Collaborated with cross-functional teams to analyze processes, identify automation opportunities, and streamline documentation workflows. Designed and implemented solutions that improved data accuracy, reporting efficiency, and overall business performance.",
    },
  ],

  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in/",
      degree: "Bachelor of Business Administration",
      logoUrl: "/lpu.png",
      start: "2019",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "SuperLM - AI Tutor",
      href: "https://langbook-lyart.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Personalize AI tutor where users can upload books or study material, and interact with an AI tutor trained on that content. The system enables students to ask questions, summarize sections, and test understanding through real-time chat powered by Large Language Models (LLMs).",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pandeyaditya15/langbook",
          icon: <Icons.github className='size-3' />,
        },
        {
          type: "Live",
          href: "https://langbook-lyart.vercel.app",
          
        },
      ],
      image: "/landing.png",
      video: "",
    },
    {
      title: "Supacast - AI Podcast Generator",
      href: "https://supacast-five.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Built an AI-powered podcast generator that converts written content into natural-sounding podcasts using text-to-speech and content summarization. Developed full MERN stack architecture with seamless audio generation and playback experience.",
      technologies: ["OpenAI API","MongoDB", "Express.js", "React.js", "Node.js"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pandeyaditya15/supacast",
          icon: <Icons.github className='size-3' />,
        },
        {
          type: "Live",
          href: "https://supacast-five.vercel.app",
        },
      ],
      image: "/landing2.png",
      video: "",
    },
    
    
   
  ],
} as const;
