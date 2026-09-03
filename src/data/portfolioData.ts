export interface Project {
  id: string;
  title: string;
  category: 'cybersecurity' | 'devops' | 'mlops' | 'fullstack' | 'media';
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: string;
  github?: string;
  live?: string;
  highlights: string[];
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'security' | 'cloud' | 'data' | 'academic';
  credentialId?: string;
  verificationUrl: string;
  badgeUrl?: string;
}

export interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  image: string;
  tags: string[];
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  tags: string[];
  logo?: string;
  achievement?: string;
}

export interface CommunityRole {
  name: string;
  role: string;
  period: string;
  description: string;
  link: string;
  logo: string;
  current: boolean;
  featuredHighlight?: string;
}

export interface SkillNode {
  id: string;
  label: string;
  x: number;
  y: number;
  isCore?: boolean;
  category: string;
  tools: string[];
  summary: string;
  description: string;
  connectedTo: string[];
}

export const portfolioData = {
  profile: {
    name: "Ravishka Rathnayaka",
    shortName: "Ravishka",
    terminalHandle: "$ ravishkadev|",
    role: "Cybersecurity Undergraduate",
    secondaryRole: "MLOps & DevOps Enthusiast · Videographer",
    tagline: "Securing systems, automating pipelines, and capturing stories through the lens.",
    email: "contact.ravishkarathnayaka@gmail.com",
    location: "Colombo, Sri Lanka",
    status: "OPEN TO PROJECTS",
    avatar: "/assets/profile-avatar-Bkr0Vkuw.jpg",
    portrait: "/assets/about-photo-DQIgbcQs.jpg",
    creativeBanner: "/assets/thanks-hero-Dix1hF-a.jpg",
    creativeQuote: "🧠 Think deeply. Build wisely. Keep your intelligence sharp!",
    socials: {
      github: "https://github.com/ravishkarathnayaka",
      linkedin: "https://www.linkedin.com/in/ravishkarathnayaka",
      instagram: "https://www.instagram.com/ravishka._/",
      medium: "https://medium.com/@ravishkarathnayaka.v"
    },
    metrics: [
      { count: "4+", label: "Years in Tech", sub: "Continuous hands-on practice" },
      { count: "25+", label: "Completed Projects", sub: "DevOps, Security & AI builds" },
      { count: "21+", label: "Tech Events Led", sub: "CloudSpace, Codemania & IEEE" },
      { count: "4.0", label: "HND GPA / First Class", sub: "SLTC Cyber Security & ICET" }
    ],
    telemetry: {
      posture: "DEVSECOPS / ACTIVE",
      status: "OPEN TO PROJECTS",
      uptime: "99.9% UPTIME",
      shellCommand: "docker compose up -d && python -m uvicorn app.main:app"
    }
  },

  about: {
    eyebrow: "// Who I Am",
    displayTitle: "BUILDING INTELLIGENT",
    displayTitleItalic: "EXPERIENCES THAT MATTER.",
    lead: "I'm a Cybersecurity undergraduate with a passion for MLOps, DevOps, and videography. I enjoy solving real-world problems through code and building impactful solutions that improve people's lives.",
    body1: "With hands-on experience in Python, TypeScript, and Azure, I specialize in designing and deploying AI systems that deliver real business value. I am particularly interested in the intersection of AI and human-computer interaction, focusing on creating technologies that enhance human capabilities rather than replace them.",
    body2: "Outside of work, I explore research, contribute to open-source projects, and stay up to date with the latest in AI. I also enjoy giving back to the community by volunteering, sharing knowledge, and creating content to help others grow and reach their goals.",
    whatIDo: [
      {
        number: "01",
        title: "Cybersecurity Analyst",
        desc: "Analyze threats, secure systems, and protect digital assets across modern cloud and network environments.",
        badge: "DEFENSE"
      },
      {
        number: "02",
        title: "Cloud & DevOps Engineering",
        desc: "Build APIs, automate CI/CD delivery pipelines, orchestrate containers, and provision infrastructure.",
        badge: "AUTOMATION"
      },
      {
        number: "03",
        title: "MLOps & AI Systems",
        desc: "Build RAG pipelines, deploy local LLMs with Ollama, fine-tune models, and optimize inference latency.",
        badge: "AI & DATA"
      },
      {
        number: "04",
        title: "Videography & Community",
        desc: "Direct cinematic recap films, volunteer across 21+ tech events, and lead national developer initiatives.",
        badge: "MEDIA & LEADERSHIP"
      }
    ],
    techStack: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ]
  },

  constellation: [
    {
      id: "sec-ops",
      label: "CYBER\nSECURITY",
      x: 50,
      y: 48,
      isCore: true,
      category: "Cybersecurity & Systems Defense",
      tools: ["Vulnerability Assessment", "Linux Hardening", "Network Security", "Wireshark", "Nmap"],
      summary: "Threat analysis, system audits, and digital infrastructure protection.",
      description: "Rooted in his BSc in Cyber Security at SLTC. Focuses on vulnerability assessments, system hardening, and secure-by-design principles across cloud and on-premise environments.",
      connectedTo: ["docker", "devops", "cloud", "mlops", "python", "video"]
    },
    {
      id: "docker",
      label: "DOCKER",
      x: 24,
      y: 18,
      category: "Containerization",
      tools: ["Docker Engine", "Docker Compose", "Multi-Stage Builds", "Container Security"],
      summary: "Containerization and reproducible microservices execution.",
      description: "Packaging full-stack applications, machine learning microservices, and datathon evaluation sandboxes inside minimal, secure container images.",
      connectedTo: ["sec-ops", "devops", "k8s"]
    },
    {
      id: "k8s",
      label: "K8S",
      x: 48,
      y: 12,
      category: "Container Orchestration",
      tools: ["Kubernetes", "Cluster Architecture", "Service Mesh", "Deployments"],
      summary: "Automated scaling, self-healing clusters, and rollout management.",
      description: "Deploying resilient services with declarative manifests, load balancing, and health check monitoring.",
      connectedTo: ["docker", "devops", "cloud"]
    },
    {
      id: "devops",
      label: "DEVOPS",
      x: 78,
      y: 20,
      category: "CI/CD & Automation",
      tools: ["GitHub Actions", "Jenkins", "Terraform", "GitOps"],
      summary: "Automated test, build, security scan, and deployment workflows.",
      description: "Shifting security checks left into the development lifecycle with GitHub Actions, automated vulnerability scanning, and infrastructure as code.",
      connectedTo: ["sec-ops", "docker", "cloud"]
    },
    {
      id: "cloud",
      label: "AZURE\n& AWS",
      x: 85,
      y: 54,
      category: "Cloud Engineering",
      tools: ["Microsoft Azure", "AWS", "Serverless", "Cloud Architecture"],
      summary: "Scalable cloud infrastructure and cloud application deployments.",
      description: "Architecting cloud deployments across Microsoft Azure and AWS, utilizing blob storage, container instances, and serverless backends.",
      connectedTo: ["sec-ops", "devops", "mlops"]
    },
    {
      id: "mlops",
      label: "MLOPS\n& AI",
      x: 68,
      y: 82,
      category: "Machine Learning Operations",
      tools: ["Ollama", "PyTorch", "LangChain", "FastAPI", "Vector Embeddings"],
      summary: "Deploying local LLMs, vector search, and RAG architectures.",
      description: "Author of technical benchmarks on running Ollama AI models on midrange consumer hardware. Building private RAG pipelines with LangChain and FastAPI.",
      connectedTo: ["sec-ops", "python", "cloud"]
    },
    {
      id: "python",
      label: "PYTHON\n& TS",
      x: 32,
      y: 84,
      category: "Software Development",
      tools: ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL"],
      summary: "Full-stack development and automation scripts.",
      description: "Developing responsive modern frontend interfaces with React/TypeScript and robust, asynchronous backend services with Python and FastAPI.",
      connectedTo: ["sec-ops", "mlops", "docker"]
    },
    {
      id: "video",
      label: "MEDIA &\nVIDEO",
      x: 14,
      y: 54,
      category: "Visual Storytelling",
      tools: ["Videography", "DaVinci Resolve", "Premiere Pro", "Color Grading"],
      summary: "Cinematography, commercial video editing, and tech conference reels.",
      description: "Capturing technical achievements and community energy through cinematic storytelling. Directed and edited visual recap films for CloudSpace, Codemania, and IEEE.",
      connectedTo: ["sec-ops", "python"]
    }
  ] as SkillNode[],

  projects: [
    {
      id: "ai-chat-assistant",
      title: "AI Chat Assistant with RAG Pipeline",
      category: "mlops",
      categoryLabel: "MLOps & Artificial Intelligence",
      description: "A conversational AI assistant built with LLMs and RAG pipeline for document-based Q&A.",
      longDescription: "A conversational AI system designed to index complex documentation and provide real-time, context-aware answers. Utilizes an intelligent RAG (Retrieval-Augmented Generation) pipeline, vector embeddings, and a high-performance FastAPI backend.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "LangChain", "FastAPI", "React", "Vector DB"],
      metrics: "Sub-second RAG Retrieval · Local & Cloud LLMs",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Document ingestion engine supporting PDFs, Markdown, and text files",
        "Semantic similarity search utilizing local vector embeddings",
        "FastAPI asynchronous REST endpoints with streaming response support",
        "Interactive React frontend with clean chat UI"
      ]
    },
    {
      id: "smart-image-classifier",
      title: "Smart Deep Learning Image Classifier",
      category: "mlops",
      categoryLabel: "Computer Vision & AI",
      description: "Deep learning image classification system with a web interface for real-time predictions.",
      longDescription: "A computer vision model trained with PyTorch, packaged into an isolated Docker container, and deployed with a lightweight web interface for instant image inferences.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
      tags: ["PyTorch", "Flask", "Docker", "AWS", "Computer Vision"],
      metrics: "96.4% Validation Accuracy · Dockerized",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Trained convolutional neural network with data augmentation and transfer learning",
        "Optimized PyTorch model export for fast CPU/GPU inference",
        "Containerized with Docker for portable multi-environment deployment",
        "Web interface allowing users to upload images and inspect prediction probabilities"
      ]
    },
    {
      id: "cloudspace-platform",
      title: "CloudSpace v1.0 Conference Platform",
      category: "devops",
      categoryLabel: "Cloud Computing & Community",
      description: "Sri Lanka's largest student cloud computing event platform and attendee verification system.",
      longDescription: "As Founding Chairperson of CloudSpace v1.0, led both the event and built the registration and schedule platform for Sri Lanka's largest cloud conference at SLTC.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Azure", "Cloud Architecture"],
      metrics: "500+ Attendees · SLTC's First Cloud Initiative",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://ieee.lk/",
      highlights: [
        "Built responsive registration portal handling peak concurrent traffic",
        "Automated digital confirmation and check-in workflows",
        "Founded Sri Lanka's largest university cloud computing initiative",
        "Coordinated with industry leaders, keynote speakers, and tech communities"
      ]
    },
    {
      id: "codemania-datathon-platform",
      title: "Codemania V6.0 Datathon Platform",
      category: "cybersecurity",
      categoryLabel: "Datathon Engine & Security",
      description: "Real-time evaluation engine and live leaderboard for Sri Lanka's largest inter-university Datathon.",
      longDescription: "Led Codemania V6.0 as Chairperson and spearheaded the submission platform. Teams submitted machine learning prediction models evaluated live against ground-truth datasets with container sandboxing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "FastAPI", "Docker", "Redis", "Leaderboard"],
      metrics: "30+ Inter-University Teams · Live Scoring",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Dockerized evaluation sandboxes to securely execute student submissions",
        "Real-time scoring engine with Redis broadcast",
        "Organized Sri Lanka's largest university Datathon and SLTC's first-ever datathon",
        "Over 30 university teams competing across complex data science challenges"
      ]
    },
    {
      id: "data-pipeline-toolkit",
      title: "Data Pipeline Toolkit",
      category: "devops",
      categoryLabel: "Data Engineering & DevOps",
      description: "An automated ETL pipeline for processing and visualizing large-scale datasets.",
      longDescription: "A data pipeline designed to ingest, clean, transform, and aggregate data streams into structured PostgreSQL databases, with Grafana dashboards for metrics visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Apache Airflow", "PostgreSQL", "Grafana", "Docker"],
      metrics: "Automated Scheduling · Resilient Data Flow",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Automated DAG workflows orchestrating data extraction and loading",
        "Schema validation and error isolation preventing dirty data writes",
        "Grafana dashboards rendering throughput and processing performance",
        "Containerized with Docker Compose for single-command deployment"
      ]
    },
    {
      id: "cinevision-productions",
      title: "CineVision & Visual Storytelling",
      category: "media",
      categoryLabel: "Videography & Creative Media",
      description: "Cinematic commercial videos, event recap documentaries, and technical community media reels.",
      longDescription: "Bringing technical achievements and university summits to life through high-end cinematography. Created captivating teaser trailers, after-movies, and recap documentaries for IEEE, CloudSpace, and Codemania.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      tags: ["Videography", "DaVinci Resolve", "Premiere Pro", "Color Grading"],
      metrics: "20+ Produced Films · Commercial & Event Media",
      github: "https://www.instagram.com/ravishka._/",
      live: "https://www.instagram.com/ravishka._/",
      highlights: [
        "Official cinematographer and media lead for major university conferences",
        "Color grading in DaVinci Resolve utilizing cinematic film profiles",
        "Capturing energy, human stories, and technical excellence through the lens",
        "Full post-production pipeline: sound design, pacing, and visual effects"
      ]
    }
  ] as Project[],

  credentials: [
    {
      id: "cred-sltc-degree",
      title: "BSc (Hons) in Cyber Security (First Class)",
      issuer: "Sri Lanka Technology Campus (SLTC)",
      issueDate: "2024 - 2028",
      category: "academic",
      verificationUrl: "https://sltc.ac.lk/",
      badgeUrl: "/assets/profile-avatar-Bkr0Vkuw.jpg"
    },
    {
      id: "cred-icet-hnd",
      title: "Higher National Diploma in Computer Engineering (4.0 GPA)",
      issuer: "Institute of Computer Engineering Technology (ICET)",
      issueDate: "2023 - 2024",
      category: "academic",
      verificationUrl: "https://icet.lk/"
    },
    {
      id: "cred-slim-diploma",
      title: "Diploma in Digital Marketing",
      issuer: "Sri Lanka Institute of Marketing (SLIM)",
      issueDate: "Jan 2022 - Dec 2022",
      category: "academic",
      verificationUrl: "https://slim.lk/"
    },
    {
      id: "cred-agrabodhi",
      title: "GCE A/L (Commerce + IT) & GCE O/L (A8 B1)",
      issuer: "T/Agrabodhi College",
      issueDate: "2008 - 2023",
      category: "academic",
      verificationUrl: "#"
    }
  ] as Credential[],

  articles: [
    {
      title: "Running Ollama AI Models on a Midrange Laptop: My Experience",
      description: "My experience installing and testing Ollama AI models locally on a midrange laptop with 16GB RAM and a 2GB GPU.",
      date: "Feb 27, 2026",
      readTime: "6 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      tags: ["Ollama", "Local LLMs", "Hardware", "Performance"]
    },
    {
      title: "Naming Conventions in Programming: Why Names Matter More Than You Think",
      description: "Explore why naming conventions matter, common styles across languages, and practical tips for naming things well.",
      date: "Feb 26, 2026",
      readTime: "5 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      tags: ["Code Quality", "Clean Code", "Best Practices"]
    },
    {
      title: "GitHub Contributions Not Showing on the Graph? Here's How to Fix It",
      description: "A troubleshooting guide to fix missing GitHub contributions by verifying author email, branch status, and rewriting commit history when necessary.",
      date: "Feb 19, 2026",
      readTime: "4 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=800&auto=format&fit=crop",
      tags: ["Git", "GitHub", "DevOps", "Troubleshooting"]
    },
    {
      title: "A Practical Guide to Backdating Git Commits",
      description: "A detailed guide on how to safely and responsibly backdate Git commits using environment variables for transparency and historical accuracy.",
      date: "Feb 18, 2026",
      readTime: "4 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
      tags: ["Git Internals", "Version Control", "CLI"]
    }
  ] as Article[],

  timeline: [
    {
      period: "Apr 2026 — PRESENT",
      role: "Digital Marketing Specialist",
      organization: "Metadew Technologies",
      location: "Colombo, Sri Lanka",
      type: "work",
      description: "Driving digital marketing strategies including SEO, social media campaigns, content creation, and performance analytics. Collaborating with cross-functional teams to enhance brand visibility, generate leads, and optimize conversion across digital channels.",
      tags: ["SEO", "Google Analytics", "Meta Ads", "Content Strategy", "Email Marketing", "Canva"],
      logo: "/assets/metadew-logo-Dn8qRqIq.png"
    },
    {
      period: "Jan 2023 — Mar 2026",
      role: "Application Support Engineer",
      organization: "Metadew Technologies",
      location: "Colombo, Sri Lanka",
      type: "work",
      description: "Providing technical support and troubleshooting for enterprise applications. Monitoring system performance, resolving incidents, and collaborating with development teams to implement fixes and improvements. Managing deployments and ensuring application uptime across production environments.",
      tags: ["Python", "PyTorch", "FastAPI", "Azure", "Docker", "Java", "React", ".NET", "Next.js"],
      logo: "/assets/metadew-logo-Dn8qRqIq.png"
    },
    {
      period: "2022 — PRESENT",
      role: "Freelance Developer",
      organization: "Fiverr",
      location: "Remote / International",
      type: "work",
      description: "Developed custom software solutions for various clients. Focused on full-stack web applications and data-driven projects.",
      tags: ["React", "Python", "PostgreSQL", "Firebase"],
      logo: "/assets/fiverr-logo-MmU2b-uA.png"
    },
    {
      period: "2024 — 2028",
      role: "BSc (Hons) in Cyber Security",
      organization: "Sri Lanka Technology Campus (SLTC)",
      location: "Padukka, Sri Lanka",
      type: "education",
      achievement: "First Class Honours Track",
      description: "Specializing in network security, system defense, digital forensics, incident response, and cloud security architecture.",
      tags: ["Cyber Security", "Network Defense", "Linux Hardening", "Forensics"]
    },
    {
      period: "2023 — 2024",
      role: "Higher National Diploma in Computer Engineering",
      organization: "Institute of Computer Engineering Technology (ICET)",
      location: "Colombo, Sri Lanka",
      type: "education",
      achievement: "4.0 GPA",
      description: "In-depth study of computer systems, architecture, algorithms, data structures, and software engineering.",
      tags: ["Computer Engineering", "Data Structures", "Systems Programming"]
    },
    {
      period: "Jan 2022 — Dec 2022",
      role: "Diploma in Digital Marketing",
      organization: "Sri Lanka Institute of Marketing (SLIM)",
      location: "Colombo, Sri Lanka",
      type: "education",
      achievement: "Professional Diploma",
      description: "Professional studies in marketing communication, digital campaigns, consumer insights, and brand strategy.",
      tags: ["Digital Marketing", "Brand Strategy", "Campaigns"]
    },
    {
      period: "2008 — 2023",
      role: "Primary & Secondary Education",
      organization: "T/Agrabodhi College",
      location: "Sri Lanka",
      type: "education",
      achievement: "GCE O/L (A8 B1) · GCE A/L (Commerce + IT)",
      description: "Foundation in information technology, mathematics, and commerce studies.",
      tags: ["Information Technology", "Commerce"]
    }
  ] as TimelineItem[],

  community: [
    {
      name: "IEEE Student Branch Of SLTC",
      role: "Head - Membership Development, Computer Society Chapter",
      period: "2024 — PRESENT",
      current: true,
      description: "Founding Chairperson of CloudSpace v1.0 — Sri Lanka's largest cloud computing event and SLTC's first-ever cloud computing initiative. Volunteered as Chairperson for Codemania V6.0 — Sri Lanka's largest inter-university Datathon and the first-ever datathon in SLTC. Actively volunteered across 21+ tech events in finance, program coordination, partnerships, and various organizational roles.",
      featuredHighlight: "Founding Chair of CloudSpace v1.0 & Chair of Codemania V6.0",
      link: "https://www.linkedin.com/company/iabordsltc/",
      logo: "/assets/ieee-sl-logo-B0fZztNC.jpg"
    },
    {
      name: "IEEE Sri Lanka Section",
      role: "Coordinator - Member Activities",
      period: "2024 — PRESENT",
      current: true,
      description: "Coordinated member activities and engagement initiatives across the IEEE Sri Lanka Section. Volunteered as a Finance & Partnership Team member in SLSYW Congress 2026.",
      featuredHighlight: "SLSYW Congress 2026 Leadership Team",
      link: "https://ieee.lk/",
      logo: "/assets/ieee-sl-logo-B0fZztNC.jpg"
    },
    {
      name: "AI Community Sri Lanka",
      role: "Organizing Committee Member",
      period: "Jan 2024 — PRESENT",
      current: true,
      description: "Contribute in organizing meetups, events, and bootcamps to connect AI enthusiasts and professionals in Sri Lanka.",
      featuredHighlight: "Connecting AI Enthusiasts Across Sri Lanka",
      link: "https://lk.linkedin.com/company/aicommunitysl",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Sri Lanka Developer Forum",
      role: "Volunteer",
      period: "2025 — PRESENT",
      current: true,
      description: "Assisted in organizing events and meetups to foster collaboration and knowledge sharing among developers in Sri Lanka.",
      featuredHighlight: "Developer Collaboration & Meetups",
      link: "https://devforum.lk/",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "GDG Sri Lanka",
      role: "Volunteer",
      period: "2026 — PRESENT",
      current: true,
      description: "Participated in organizing events, workshops, meetups and tech talks related to Google technologies and open-source software.",
      featuredHighlight: "Google Developer Group Community",
      link: "https://gdg.community.dev/gdg-sri-lanka",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
    },
    {
      name: "AIESEC In SLTC",
      role: "OGT Volunteer in Leadership Body",
      period: "2025 — 2026",
      current: false,
      description: "Volunteered in the leadership body of AIESEC at SLTC, contributing to outgoing global talent initiatives and supporting youth leadership development programs.",
      featuredHighlight: "Youth Leadership Development",
      link: "https://aiesec.org/",
      logo: "https://aiesec.org/assets/images/favicon.png"
    }
  ] as CommunityRole[]
};
