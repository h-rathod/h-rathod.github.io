import { Icons } from "@/components/icons";
import { HomeIcon, FileText, LucideIcon } from "lucide-react";

type NavbarItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  download?: boolean;
};

export const DATA = {
  name: "Harsh Rathod",
  initials: "HR",
  url: "https://harshrathod.com",
  location: "Pune, MH",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
    "A Somedude in STEM and Development. Working on LLM's, MCP's, Generative AI & Product.",
  summary:
  "I recently earned my Bachelor's of Engineering degree in Computer and Electronics from Savitribai Phule Pune University. I have hands-on experience in programming and software development, and I actively share my knowledge by writing beginner-friendly [tutorial blogs](https://raharsh.notion.site/Enough-for-Placements-1a06bc4f436d806f87ddd3fa799246e9?source=copy_link) for beginners. I also write on [X (formerly Twitter)](https://twitter.com/raharsh_) for fun.",

    avatarUrl: "/harshpfp.jpg",
  skills: [
    "Java",
    "Python",
    "C++",
    "SQL",
    "HTML/CSS",
    "Node.js",
    "Streamlit",
    "Express.js",
    "React-Native",
    "MongoDB",
    "PostgresSQL",
    "Firebase",
    "Supabase",
    "Spring",
    "Spring boot",
    "Git",
    "Github"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { 
      href: "/resume/Resume.pdf", 
      icon: FileText, 
      label: "Resume",
      download: true 
    },
  ] as NavbarItem[],
  contact: {
    email: "harshrathod2652@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/h-rathod",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rathodharsh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.x.com/raharsh_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:harshrathod2652@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TechR Business Solutions",
      href: "https://techr.co.in/",
      badges: [],
      location: "Remote",
      title: "Data Science and ML Intern",
      logoUrl: "/techr.png",
      start: "Jan 2024",
      end: "April 2024",
      description:
        "Collaborated on machine learning projects, developing models for predictive maintenance, stock price prediction, and fake face detection. Utilized tools like TensorFlow and Python for model building and data analysis. Worked on text-based video generation and voice cloning projects, improving model accuracy and performance",
    }
  ],
  education: [
    {
      school: "P.E.S. Modern College of Engineering",
      href: "https://moderncoe.edu.in/",
      degree: "Bachelor's in Engineering in Electronics and Computer, Hons in Data Science",
      logoUrl: "/mcoe.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Bharati Vidyapeeth’s Jawaharlal Nehru Institute of Technology",
      href: "https://bvjniot.bharatividyapeeth.edu/",
      degree: "Diploma in Computer Technology",
      logoUrl: "/bvp.png",
      start: "2017",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "AI Predictive Maintenance System",
      href: "/projects/ai-predictive-maintenance",
      dates: "Nov 2024 - May 2025",
      active: true,
      description:
      "An intelligent monitoring solution for industrial HVAC-R systems using IoT and Machine Learning. The system features real-time sensor data acquisition, predictive analytics, and a cross-platform mobile app with a chatbot interface.",
      technologies: [
        "React Native",
        "Supabase",
        "Spring Boot",
        "Express.js",
        "Java",
        "LSTM Autoencoder",
        "Random Forest",
        "ESP32"
      ],
      links: [
        {
          type: "Website",
          href: "/projects/ai-predictive-maintenance",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/h-rathod/AI-Predictive-Maintenance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/albe.png"
    },
    {
      title: "Nutrifind",
      href: "https://nutrifind.streamlit.app",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Developed a user-centric web application using Python, Streamlit, Google’s Gemini API, and MongoDB to enable real-time meal analysis based on uploaded food images and user profiles. Delivered actionable dietary recommendations, empowering users to make informed nutrition decisions.",
      technologies: [
        "Python",
        "Streamlit",
        "MongoDB",
        "Gemini 1.5 flash"
      ],
      links: [
        {
          type: "Website",
          href: "https://nutrifind.streamlit.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/h-rathod/nutrifind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nutrifind.png",    
    },
  ],
} as const;
