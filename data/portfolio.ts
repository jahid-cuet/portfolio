// data/portfolio.ts
export const portfolioData = {
  personal: {
    name: "Md Jahid Hasan",
    role: "Software Engineer",
    tagline:
      "Bridging biomedical science, AI and software engineering to build intelligent, real-world solutions.",
    about:
      "Biomedical Engineering graduate from CUET and Full-Stack Software Engineer with over a year of hands-on experience designing and delivering reliable, high-impact digital solutions. Brings a sharp analytical mindset to software architecture, translating complex technical challenges into clean, scalable applications.",
    email: "jahidhasan5803733@gmail.com",
    phone: "+8801740578486",
    location: "Dhaka, Bangladesh",
    resume: "/resume.pdf",
    github: "https://github.com/jahid-cuet",
    linkedin: "https://www.linkedin.com/in/md-jahid-hasan-041151265/",
  },
  experience: [
    {
      company: "Nhimex Software",
      role: "Software Engineer",
      period: "Dec 2025 - Present",
      description:
        "Developing scalable municipal software solutions and supporting digital transformation initiatives for local government agencies.",
      highlights: [
        "Built core modules for Poura Market Management, Trade License Management, Assessment & Collection, and E-Certificate generation.",
        "Managed backend transaction workflows and improved validation logic for reliable day-to-day operations.",
      ],
      tech: [
        "Laravel",
        "React",
        "Vue.js",
        "Inertia.js",
        "TypeScript",
        "Tailwind CSS",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      company: "IRIIC, UIU",
      role: "Research Engineer (Data Science)",
      period: "Sep 2025 - Nov 2025",
      description:
        "Worked on data science and research tasks supporting machine learning experimentation and analysis.",
      highlights: [
        "Contributed to research-oriented data workflows and experimentation support.",
        "Applied analytical thinking to help shape model and data exploration efforts.",
      ],
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "PyTorch",
        "Matplotlib",
        "Seaborn",
        "SciPy",
      ],
    },
    {
      company: "The Tork Inc.",
      role: "Software Engineer Intern",
      period: "Sep 2024 - Aug 2025",
      description:
        "Built web features and APIs for a trading platform while learning production-grade Laravel development.",
      highlights: [
        "Developed TorkBiz, a scalable trading platform with real-time data handling.",
        "Engineered telemedicine APIs for secure and efficient user profile management.",
      ],
      tech: ["Laravel", "PHP", "REST APIs", "MySQL"],
    },
  ],
  education: [
    {
      institution: "Chittagong University of Engineering & Technology",
      shortName: "CUET",
      logo: "/cuet-logo.png",
      degree: "Bachelor of Science (BS), Biomedical Engineering",
      period: "Mar 2020 – Jun 2025",
      grade: "CGPA 3.57",
      activities: "Participated in multiple coding competitions | Active member of the university football team",
      skills: ["MATLAB", "Python", "Signal Processing"],
      description:
        "University has been the most important experience for me. CUET provided a rigorous academic environment where challenging projects taught me to remain resilient and dedicated, even in the face of obstacles.",
    },
    {
      institution: "Milestone College",
      shortName: "Milestone",
      logo: "/milestone.png",
      degree: "Higher Secondary Certificate (HSC), Science",
      period: "2017 – 2019",
      grade: "GPA 5.00",
      activities: "",
      skills: [],
      description:
        "Completed Higher Secondary education with a perfect GPA of 5.00, building a strong foundation in science and mathematics.",
    },
    {
      institution: "Bancharampur S M Pilot Model Govt. High School",
      shortName: "BSM Pilot",
      logo: "/school.jpg",
      degree: "Secondary School Certificate (SSC), Science",
      period: "2012 – 2017",
      grade: "GPA 5.00",
      activities: "",
      skills: [],
      description:
        "Completed secondary education at one of the region's reputed government high schools, laying the groundwork for a strong academic journey.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Management System",
      description:
        "Developed a full-stack E-Commerce platform with product management, shopping cart, and secure payment gateway integration to enhance online retail operations.",
      tech: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
      github: "https://github.com/jahid-cuet/Ecommerce-Project-in-Laravel",
      live: "#",
    },
    {
      title: "Dining Management System",
      description:
        "Developed a Dining Management System with meal tracking, billing, and payment integration to streamline dining operations by using Laravel.",
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      github: "https://github.com/jahid-cuet/laravel-dinning-management",
      live: "#",
    },
    {
      title: "Interactive Quiz Application",
      description:
        "Engineered an interactive, high-performance quiz application utilizing React and Vite, featuring a seamless, responsive user interface and dynamic state management for an optimized user experience.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/jahid-cuet/react-quiz-application",
      live: "#",
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      description:
        "Conducted in-depth Exploratory Data Analysis (EDA) leveraging Python and data visualization libraries to extract actionable insights and identify underlying patterns in complex datasets.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/jahid-cuet/exploratory_data_analysis",
      live: "#",
    },
    {
      title: "Movie Recommender System",
      description:
        "Developed a personalized Movie Recommender System utilizing machine learning algorithms and natural language processing to suggest relevant films based on user preferences and content similarity.",
      tech: ["Python", "Scikit-learn", "Pandas", "NLP"],
      github: "https://github.com/jahid-cuet/movie-recomemder-system",
      live: "#",
    },
    {
      title: "Library Management System",
      description:
        "Built a comprehensive Library Management System using Django, featuring book inventory tracking, user lending capabilities, and an intuitive interface for efficient library operations.",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      github: "#",
      live: "https://library-management-system-nlr7.onrender.com/",
    },
  ],
  skills: [
    {
      title: "Programming Languages",
      note: "Core languages used across software engineering and ML work.",
      items: ["Python", "C", "C++", "Go", "SQL", "PHP"],
    },
    {
      title: "Frontend Development",
      note: "Modern UI stack for responsive product interfaces.",
      items: [
        "React",
        "Vue.js",
        "Inertia.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Backend Development",
      note: "Systems, APIs, and data-driven application logic.",
      items: ["Laravel", "Django", "MySQL", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Data Analysis",
      note: "Libraries for analysis, visualization, and scientific computing.",
      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy"],
    },
    {
      title: "Machine Learning",
      note: "Libraries used for deep learning and classic ML workflows.",
      items: ["PyTorch", "Scikit-learn", "TensorFlow"],
    },
    {
      title: "Tools & Platforms",
      note: "Everyday tools that support shipping clean work.",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter",
        "LaTeX",
        "MATLAB",
        "Arduino",
      ],
    },
  ],
};
