// data/portfolio.ts
export const portfolioData = {
  personal: {
    name: "Md Jahid Hasan",
    role: "Software Engineer",
    tagline:
      "Bridging biomedical science, AI and software engineering to build intelligent, real-world solutions.",
    about:
      "Biomedical Engineering graduate from CUET and Software Engineer with 1+ years of experience building robust web applications, RESTful APIs, and e-governance platforms using Laravel, Django, and React.",
    email: "jahid@example.com",
    resume: "/resume.pdf",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
  experience: [
    {
      company: "Nhimex Software",
      role: "Software Engineer",
      period: "Present",
      description:
        "Engineering robust municipal e-governance applications, managing backend transaction workflows, and refactoring validation systems.",
      highlights: [
        "Developed key municipal modules including Pouro Market, Trade License, Assessment, Collection, and E-Poura-Certificate.",
        "Managed complex backend database transactions and optimized service-layer validation logic.",
      ],
      tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    },
  ],
  education: [
    {
      institution: "Your University / Institute",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2018 - 2022",
      description:
        "Focused on software engineering fundamentals, algorithms, databases, and modern application development.",
    },
  ],
  projects: [
    {
      title: "Municipal E-Governance Suite",
      description:
        "A comprehensive suite of digital municipal applications handling market allocations, trade licenses, tax assessments, and digital certificates.",
      tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Q-Nexus Local AI Chatbot",
      description:
        "An interactive local AI application powered by Qwen models via Ollama featuring custom streaming fetch parsers.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Ollama"],
      github: "#",
      live: "#",
    },
    {
      title: "NLP Text Preprocessing Pipeline",
      description:
        "An open-source data preprocessing library utilizing Python and movie review datasets for text tokenization and pipeline cleaning.",
      tech: ["Python", "NLP", "Pandas", "GitHub"],
      github: "#",
      live: "#",
    },
  ],
  skills: {
    frontend: [
      "Next.js",
      "React",
      "Vue.js",
      "Inertia.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    backend: [
      "PHP",
      "Laravel",
      "Node.js",
      "REST APIs",
      "MySQL",
      "Database Transactions",
    ],
    tools: ["Git", "Linux / Zorin OS", "Docker", "Vercel"],
    ai: ["Python", "NLP", "LLM Integrations", "Ollama"],
  },
};
