export interface Project {
  id: string;
  title: string;
  category: 'cybersecurity' | 'devops' | 'mlops' | 'media';
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
    role: "Cybersecurity Specialist",
    secondaryRole: "MLOps & DevOps Engineer · Videographer",
    tagline: "I engineer calm inside digital complexity—bridging proactive threat defense, automated pipelines, and human-centric intelligence.",
    email: "contact.ravishkarathnayaka@gmail.com",
    location: "Colombo, Sri Lanka",
    coordinates: "06.9271° N · 79.8612° E",
    status: "AVAILABLE FOR CONSULTING & ROLES",
    avatar: "/assets/profile-avatar-Bkr0Vkuw.jpg",
    portrait: "/assets/about-photo-DQIgbcQs.jpg",
    heroVisual: "/assets/thanks-hero-Dix1hF-a.jpg",
    socials: {
      github: "https://github.com/ravishkarathnayaka",
      linkedin: "https://www.linkedin.com/in/ravishkarathnayaka",
      instagram: "https://www.instagram.com/ravishka._/",
      medium: "https://medium.com/@ravishkarathnayaka.v"
    },
    metrics: [
      { count: "4+", label: "Years in Technology", sub: "Continuous hands-on practice" },
      { count: "25+", label: "Completed Projects", sub: "DevOps, Security & AI builds" },
      { count: "15+", label: "Verified Credentials", sub: "Industry badges & certs" },
      { count: "21+", label: "Tech Events Led", sub: "CloudSpace, Codemania & IEEE" }
    ],
    telemetry: {
      posture: "DEFENSIVE / RESILIENT",
      confidence: "99.4%",
      uptime: "99.98% PIPELINE",
      activeShell: "ravishka@sentinel-cluster:~$"
    }
  },

  manifesto: {
    eyebrow: "// Operational Philosophy",
    displayTitle: "SECURITY THAT SEES.",
    displayTitleItalic: "PIPELINES THAT SCALE.",
    lead: "I build defensive architectures and automation systems that make complex threats legible, software delivery resilient, and human workflows empowered.",
    body1: "At the intersection of Cybersecurity, MLOps, and DevOps, modern software cannot afford silos. Security must be shifted left into continuous delivery pipelines, and AI systems must be protected against adversarial prompts, supply-chain vulnerabilities, and operational drift.",
    body2: "Beyond the terminal, I believe technology must tell a human story. Through technical community leadership and creative videography, I craft narratives that inspire collaboration, mentor budding engineers, and turn abstract technical concepts into vivid reality."
  },

  socArsenal: {
    eyebrow: "// Operational Capabilities",
    title: "FROM THREAT SIGNAL",
    titleItalic: "TO DEPLOYMENT.",
    description: "Battle-tested systems across vulnerability management, container security, and automated cloud workflows.",
    capabilities: [
      {
        number: "01",
        title: "Alert Triage & Attack Surface Analysis",
        badge: "DEFENSE",
        desc: "End-to-end incident investigation, network protocol inspection, evidence correlation, and actionable mitigation timelines.",
        tools: ["Wireshark", "Nmap", "Burp Suite", "Snort", "Linux Hardening"]
      },
      {
        number: "02",
        title: "DevOps & Cloud Pipeline Hardening",
        badge: "AUTOMATE",
        desc: "Zero-trust CI/CD automation, Docker/Kubernetes container vulnerability scanning, automated rollback, and IaC deployment.",
        tools: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Azure"]
      },
      {
        number: "03",
        title: "MLOps & Local AI Orchestration",
        badge: "INTELLIGENCE",
        desc: "Fine-tuning local open weights (Ollama/Llama 3), building RAG pipelines with FastAPI, and securing LLM endpoints against prompt injection.",
        tools: ["Python", "FastAPI", "PyTorch", "LangChain", "Ollama"]
      },
      {
        number: "04",
        title: "Production Application Reliability",
        badge: "24×7 UPTIME",
        desc: "Enterprise incident management, microservices monitoring, database optimization, and high-availability application support.",
        tools: ["React", "TypeScript", "PostgreSQL", "Next.js", "Grafana"]
      }
    ],
    toolStream: [
      "Python", "Docker", "Kubernetes", "Linux", "Azure", "AWS", "Terraform", 
      "GitHub Actions", "FastAPI", "React", "TypeScript", "Wireshark", 
      "Snort", "PyTorch", "LangChain", "PostgreSQL", "Ollama", "Nmap"
    ]
  },

  constellation: [
    {
      id: "sec-ops",
      label: "CYBER\nDEFENSE",
      x: 50,
      y: 48,
      isCore: true,
      category: "Security Operations",
      tools: ["Wireshark", "Nmap", "Snort", "Vulnerability Assessment", "Linux"],
      summary: "Core incident triage, network telemetry analysis, and threat containment.",
      description: "Serves as the defensive anchor of all systems. Integrates security audits, vulnerability scanning, and credential hardening into every stage of the software lifecycle.",
      connectedTo: ["k8s", "docker", "mlops", "cloud", "linux", "ci-cd"]
    },
    {
      id: "k8s",
      label: "K8S",
      x: 24,
      y: 20,
      category: "Container Orchestration",
      tools: ["Kubernetes", "Helm", "Kube-bench", "Ingress Controller"],
      summary: "Clustering, scaling, and resilient microservices management.",
      description: "Managing containerized pods with declarative manifests, role-based access control (RBAC), and automated health checks.",
      connectedTo: ["sec-ops", "docker", "ci-cd"]
    },
    {
      id: "docker",
      label: "DOCKER",
      x: 48,
      y: 12,
      category: "Virtualization & Containers",
      tools: ["Docker Engine", "Docker Compose", "Multi-stage Builds", "Trivy"],
      summary: "Isolated runtime environments and minimal attack surfaces.",
      description: "Architecting minimal non-root container images, scanning base layers with Trivy, and deploying multi-service topologies with Docker Compose.",
      connectedTo: ["sec-ops", "k8s", "ci-cd"]
    },
    {
      id: "mlops",
      label: "MLOPS",
      x: 78,
      y: 22,
      category: "AI & Model Operations",
      tools: ["Ollama", "PyTorch", "LangChain", "FastAPI", "Hugging Face"],
      summary: "Deploying local LLMs, embeddings, and RAG architectures.",
      description: "Running local quantized models on constrained consumer hardware, optimizing token throughput, and securing AI endpoints against prompt leakage.",
      connectedTo: ["sec-ops", "python", "cloud"]
    },
    {
      id: "cloud",
      label: "CLOUD",
      x: 85,
      y: 54,
      category: "Cloud Engineering",
      tools: ["Microsoft Azure", "AWS", "Terraform", "Serverless"],
      summary: "Scalable cloud infrastructure and identity-driven access.",
      description: "Deploying cloud resources with Terraform IaC, configuring Azure Blob & compute instances, and enforcing least-privilege IAM policies.",
      connectedTo: ["sec-ops", "mlops", "ci-cd"]
    },
    {
      id: "ci-cd",
      label: "CI / CD",
      x: 70,
      y: 82,
      category: "Continuous Delivery",
      tools: ["GitHub Actions", "GitLab CI", "Automated Testing", "Linting"],
      summary: "Automated build, test, scan, and deploy pipelines.",
      description: "Building GitHub Actions workflows that execute automated unit tests, SAST code analysis, and zero-downtime production deployments.",
      connectedTo: ["sec-ops", "docker", "cloud"]
    },
    {
      id: "linux",
      label: "LINUX",
      x: 35,
      y: 84,
      category: "Operating System Hardening",
      tools: ["Ubuntu Server", "Debian", "Bash Scripting", "Systemd", "SSH"],
      summary: "Kernel security, service isolation, and automated bash scripting.",
      description: "Hardening Linux hosts via SSH key authentication, UFW firewalls, fail2ban monitoring, and custom cron automation scripts.",
      connectedTo: ["sec-ops", "docker"]
    },
    {
      id: "python",
      label: "DEV",
      x: 14,
      y: 58,
      category: "Programming & APIs",
      tools: ["Python", "TypeScript", "React", "FastAPI", "PostgreSQL"],
      summary: "Full-stack software engineering and automated tooling.",
      description: "Developing robust backend APIs with FastAPI/Python and responsive modern frontend dashboards with React and TypeScript.",
      connectedTo: ["sec-ops", "mlops"]
    }
  ] as SkillNode[],

  projects: [
    {
      id: "cloud-defense-pipeline",
      title: "Hardened CI/CD & Automated DevSecOps Pipeline",
      category: "devops",
      categoryLabel: "DevOps & Cloud Security",
      description: "End-to-end automated pipeline integrating static code analysis, Trivy container scanning, and zero-trust Kubernetes deployment.",
      longDescription: "An automated DevSecOps pipeline built with GitHub Actions that shifts security left. Every commit triggers automated unit tests, SAST security auditing, container vulnerability scanning with Trivy, and automated deployment to a secured Kubernetes cluster with rollback triggers on failure.",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=1200&auto=format&fit=crop",
      tags: ["GitHub Actions", "Docker", "Kubernetes", "Trivy", "Terraform", "Azure"],
      metrics: "0 Vulnerabilities Deployed · 100% Automated Rollback",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Automated container vulnerability scanning failing builds on High/Critical CVEs",
        "Declarative Kubernetes cluster deployment with zero downtime rolling updates",
        "Role-based access control and encrypted secret management via Azure Key Vault",
        "Infrastructure provisioned through repeatable, versioned Terraform scripts"
      ]
    },
    {
      id: "ollama-rag-assistant",
      title: "Local LLM Inference Engine & RAG Knowledge Pipeline",
      category: "mlops",
      categoryLabel: "MLOps & Artificial Intelligence",
      description: "Private, air-gapped conversational AI pipeline running quantized open-source LLMs locally with vector similarity retrieval.",
      longDescription: "Engineered to deliver enterprise-grade conversational AI without leaking proprietary data to cloud providers. Combines Ollama-orchestrated local models with LangChain, FAISS vector embeddings, and a high-concurrency FastAPI microservice.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Ollama", "LangChain", "FastAPI", "PyTorch", "Vector DB"],
      metrics: "100% Local Inference · Zero Cloud Data Egress",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Tested and tuned for 4-bit and 8-bit quantized models on constrained laptop hardware",
        "RAG pipeline indexing documentation PDFs and markdown notes with semantic search",
        "Sub-150ms retrieval latency utilizing FAISS local vector indices",
        "Built-in prompt boundary validation to resist adversarial jailbreaking"
      ]
    },
    {
      id: "cloudspace-platform",
      title: "CloudSpace v1.0 Conference & Registration Infrastructure",
      category: "devops",
      categoryLabel: "Cloud Architecture & Community",
      description: "Official web platform and attendee validation infrastructure for Sri Lanka's largest university cloud computing conference.",
      longDescription: "As Founding Chairperson of CloudSpace v1.0, led both the organizational initiative and engineered the high-traffic web platform. Supported hundreds of concurrent registrations, schedule streaming, and automated attendee verification.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "PostgreSQL"],
      metrics: "500+ Registered Attendees · 100% Uptime During Peak",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://ieee.lk/",
      highlights: [
        "Architected scalable serverless registration engine handling traffic spikes",
        "Integrated dynamic QR code generation for streamlined physical event check-in",
        "Designed high-conversion, futuristic visual identity and event branding",
        "Coordinated with industry leaders and sponsors across Sri Lanka's tech ecosystem"
      ]
    },
    {
      id: "codemania-datathon-engine",
      title: "Codemania V6.0 Datathon Platform & Real-Time Leaderboard",
      category: "cybersecurity",
      categoryLabel: "Data Engineering & Security",
      description: "Real-time evaluation engine and secure submission portal for Sri Lanka's largest inter-university Datathon competition.",
      longDescription: "Led Codemania V6.0 as Chairperson and spearheaded the submission platform. Teams submitted automated machine learning prediction models evaluated live against ground-truth datasets with strict sandboxing to prevent code injection.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL", "Sandboxing"],
      metrics: "30+ University Teams · Sub-second Evaluation",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Dockerized sandbox containers evaluating untrusted student code safely",
        "Redis-backed real-time leaderboard broadcasting score changes live",
        "Role-based administrative dashboard for judges to inspect telemetry and logs",
        "Organized and executed Sri Lanka's premier university datathon"
      ]
    },
    {
      id: "network-threat-scanner",
      title: "Automated Network Vulnerability & Port Reconnaissance Tool",
      category: "cybersecurity",
      categoryLabel: "Offensive & Defensive Security",
      description: "Multi-threaded network scanner with service fingerprinting, CVE correlation, and automated HTML audit reports.",
      longDescription: "A Python-based reconnaissance and defensive audit engine. Automatically scans target IP ranges, identifies running services, compares version banners against known vulnerability catalogs, and outputs executive risk summaries.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Nmap", "Sockets", "CVE API", "Linux"],
      metrics: "10x Faster Port Enumeration · Multi-threaded",
      github: "https://github.com/ravishkarathnayaka",
      live: "https://github.com/ravishkarathnayaka",
      highlights: [
        "Custom asynchronous socket engine capable of scanning /24 subnet in seconds",
        "Automated CVE querying via public vulnerability APIs",
        "Generates clean, actionable HTML audit reports for system administrators",
        "Used for defensive hardening of local university and student lab testbeds"
      ]
    },
    {
      id: "cinevision-productions",
      title: "CineVision: Technical Event Media & Visual Storytelling",
      category: "media",
      categoryLabel: "Videography & Creative Media",
      description: "Cinematic commercial video production, color-graded conference recap films, and technical community media reels.",
      longDescription: "Bringing technical achievements to life through high-end cinematography. Created captivating teaser trailers, after-movies, and recap documentaries for IEEE Sri Lanka Section, CloudSpace, Codemania, and commercial brand campaigns.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      tags: ["Videography", "DaVinci Resolve", "Premiere Pro", "Color Grading", "Storyboarding"],
      metrics: "50k+ Impressions · 20+ Produced Films",
      github: "https://www.instagram.com/ravishka._/",
      live: "https://www.instagram.com/ravishka._/",
      highlights: [
        "Official cinematographer and media lead for major national university congresses",
        "Color grading in DaVinci Resolve utilizing cinematic film emulation profiles",
        "Seamless blend of technical storytelling, sound design, and pacing",
        "Directing lighting, multi-cam capture, and post-production delivery"
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
      issueDate: "2022",
      category: "academic",
      verificationUrl: "https://slim.lk/"
    },
    {
      id: "cred-azure-fund",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      issueDate: "2024",
      category: "cloud",
      credentialId: "MS-AZ900-VERIFIED",
      verificationUrl: "https://learn.microsoft.com/"
    },
    {
      id: "cred-cisco-cyber",
      title: "Introduction to Cybersecurity & Cyber Threat Management",
      issuer: "Cisco Networking Academy",
      issueDate: "2023",
      category: "security",
      verificationUrl: "https://www.netacad.com/"
    },
    {
      id: "cred-cisco-net",
      title: "Networking Essentials & Network Defense",
      issuer: "Cisco Networking Academy",
      issueDate: "2023",
      category: "security",
      verificationUrl: "https://www.netacad.com/"
    },
    {
      id: "cred-docker-ess",
      title: "Containerization & Docker Fundamentals",
      issuer: "Docker Certified Community",
      issueDate: "2024",
      category: "cloud",
      verificationUrl: "https://www.docker.com/"
    },
    {
      id: "cred-fortinet-nse",
      title: "Fortinet Certified Associate in Cybersecurity",
      issuer: "Fortinet Training Institute",
      issueDate: "2024",
      category: "security",
      verificationUrl: "https://www.fortinet.com/"
    },
    {
      id: "cred-google-it",
      title: "Google IT Support Professional Certificate",
      issuer: "Google",
      issueDate: "2023",
      category: "cloud",
      verificationUrl: "https://grow.google/"
    },
    {
      id: "cred-python-pcap",
      title: "Certified Associate in Python Programming",
      issuer: "Python Institute",
      issueDate: "2023",
      category: "data",
      verificationUrl: "https://pythoninstitute.org/"
    }
  ] as Credential[],

  articles: [
    {
      title: "Running Ollama AI Models on a Midrange Laptop: My Experience",
      description: "Hands-on benchmarking installing and testing Ollama AI models locally on consumer hardware with 16GB RAM and a 2GB GPU. Memory optimization, quantizations, and throughput tips.",
      date: "Feb 27, 2026",
      readTime: "6 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      tags: ["Ollama", "Local LLMs", "Hardware", "Performance"]
    },
    {
      title: "Naming Conventions in Programming: Why Names Matter More Than You Think",
      description: "Why naming conventions govern maintainability, common styles across Python, TypeScript and C#, and practical mental models for naming variables, classes, and endpoints cleanly.",
      date: "Feb 26, 2026",
      readTime: "5 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      tags: ["Code Quality", "Clean Code", "Best Practices"]
    },
    {
      title: "GitHub Contributions Not Showing on the Graph? Here's How to Fix It",
      description: "A definitive troubleshooting guide to fix missing GitHub contribution squares by verifying author email identity, default branch requirements, and safely rewriting commit history.",
      date: "Feb 19, 2026",
      readTime: "4 min read",
      link: "https://medium.com/@ravishkarathnayaka.v",
      image: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?q=80&w=800&auto=format&fit=crop",
      tags: ["Git", "GitHub", "DevOps", "Troubleshooting"]
    },
    {
      title: "A Practical Guide to Backdating Git Commits Safely and Responsibly",
      description: "How to safely calibrate Git commit timestamps using GIT_AUTHOR_DATE and GIT_COMMITTER_DATE environment variables when restoring historical project milestones.",
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
      description: "Driving cross-channel digital strategies, content architecture, SEO optimization, and performance conversion analytics across cloud software client campaigns.",
      tags: ["SEO", "Google Analytics", "Meta Ads", "Content Strategy", "Email Marketing"],
      logo: "/assets/metadew-logo-Dn8qRqIq.png"
    },
    {
      period: "Jan 2023 — Mar 2026",
      role: "Application Support Engineer",
      organization: "Metadew Technologies",
      location: "Colombo, Sri Lanka",
      type: "work",
      description: "Provided enterprise technical support, resolved production incidents, monitored uptime across Azure and Docker deployments, and collaborated with engineering teams on critical hotfixes.",
      tags: ["Python", "FastAPI", "Azure", "Docker", "React", ".NET", "PostgreSQL"],
      logo: "/assets/metadew-logo-Dn8qRqIq.png"
    },
    {
      period: "2022 — PRESENT",
      role: "Freelance Full-Stack Developer",
      organization: "Fiverr",
      location: "Remote / International",
      type: "work",
      description: "Engineered bespoke web applications, data-driven backends, and custom automation scripts for global clients with high feedback ratings.",
      tags: ["React", "Python", "PostgreSQL", "Firebase", "APIs"],
      logo: "/assets/fiverr-logo-MmU2b-uA.png"
    },
    {
      period: "2024 — 2028",
      role: "BSc (Hons) in Cyber Security",
      organization: "Sri Lanka Technology Campus (SLTC)",
      location: "Padukka, Sri Lanka",
      type: "education",
      achievement: "First Class Honours Track",
      description: "Specializing in network security, digital forensics, offensive operations, cryptography, and cloud security architecture.",
      tags: ["Cyber Security", "Network Defense", "Cryptography", "Forensics"]
    },
    {
      period: "2023 — 2024",
      role: "Higher National Diploma in Computer Engineering",
      organization: "Institute of Computer Engineering Technology (ICET)",
      location: "Colombo, Sri Lanka",
      type: "education",
      achievement: "4.0 GPA",
      description: "Rigorous training in computer architecture, systems programming, data structures, networking, and software engineering principles.",
      tags: ["Computer Engineering", "Data Structures", "Systems Architecture"]
    },
    {
      period: "Jan 2022 — Dec 2022",
      role: "Diploma in Digital Marketing",
      organization: "Sri Lanka Institute of Marketing (SLIM)",
      location: "Colombo, Sri Lanka",
      type: "education",
      achievement: "Professional Diploma",
      description: "Strategic marketing communication, brand positioning, digital consumer behavior, and analytics.",
      tags: ["Brand Strategy", "Consumer Analytics", "Digital Campaigning"]
    },
    {
      period: "2008 — 2023",
      role: "Primary & Secondary Education",
      organization: "T/Agrabodhi College",
      location: "Sri Lanka",
      type: "education",
      achievement: "GCE O/L (A8 B1) · GCE A/L (Commerce + IT)",
      description: "Foundation in information technology, analytical mathematics, and commercial studies.",
      tags: ["Foundations", "Information Technology", "Commerce"]
    }
  ] as TimelineItem[],

  community: [
    {
      name: "IEEE Student Branch of SLTC",
      role: "Head - Membership Development, Computer Society Chapter",
      period: "2024 — PRESENT",
      current: true,
      description: "Founding Chairperson of CloudSpace v1.0 (SLTC's first and largest cloud event) and Chairperson of Codemania V6.0 Datathon. Volunteered across 21+ tech events in leadership, finance, and technical coordination.",
      featuredHighlight: "Founding Chair of CloudSpace v1.0 & Chair of Codemania V6.0",
      link: "https://www.linkedin.com/company/iabordsltc/",
      logo: "/assets/ieee-sl-logo-B0fZztNC.jpg"
    },
    {
      name: "IEEE Sri Lanka Section",
      role: "Coordinator - Member Activities",
      period: "2024 — PRESENT",
      current: true,
      description: "Coordinated member initiatives across Sri Lanka. Served as Finance & Partnership Team Member for the IEEE SLSYW Congress 2026.",
      featuredHighlight: "SLSYW Congress 2026 Leadership Team",
      link: "https://ieee.lk/",
      logo: "/assets/ieee-sl-logo-B0fZztNC.jpg"
    },
    {
      name: "AI Community Sri Lanka",
      role: "Organizing Committee Member",
      period: "Jan 2024 — PRESENT",
      current: true,
      description: "Organizing national meetups, generative AI bootcamps, and developer workshops bridging academic students with industry AI practitioners.",
      featuredHighlight: "Connecting 1000+ AI enthusiasts",
      link: "https://lk.linkedin.com/company/aicommunitysl",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "GDG Sri Lanka",
      role: "Community Volunteer",
      period: "2026 — PRESENT",
      current: true,
      description: "Supporting Google Developer Group meetups, developer festivals, and tech workshops focused on cloud and open-source ecosystems.",
      featuredHighlight: "Google Developer Fest & Workshops",
      link: "https://gdg.community.dev/gdg-sri-lanka",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
    },
    {
      name: "AIESEC in SLTC",
      role: "OGT Volunteer in Leadership Body",
      period: "2025 — 2026",
      current: false,
      description: "Contributed to outgoing global talent programs and youth leadership development initiatives across Sri Lankan universities.",
      featuredHighlight: "Youth Leadership Development",
      link: "https://aiesec.org/",
      logo: "https://aiesec.org/assets/images/favicon.png"
    }
  ] as CommunityRole[],

  threatIntelData: {
    syncTime: "2026-09-03 · 12:20 UTC",
    status: "CONNECTED TO PUBLIC CTI FEEDS",
    stats: {
      observedNetworks: "1,842",
      reportingTargets: "48,910",
      activeCves: "1,290",
      c2Trackers: "348"
    },
    cveFeed: [
      { id: "CVE-2026-21440", vendor: "Microsoft", product: "Windows Kernel", cvss: "8.8", summary: "Elevation of privilege vulnerability in Win32k subsystem.", tag: "KEV EXPLOITED" },
      { id: "CVE-2026-10892", vendor: "Kubernetes", product: "kube-apiserver", cvss: "7.5", summary: "Improper input handling in aggregated API server endpoints.", tag: "DEFENSE FIX" },
      { id: "CVE-2026-30114", vendor: "Docker Engine", product: "BuildKit", cvss: "8.2", summary: "Cache poisoning vulnerability during multi-stage image compilation.", tag: "CONTAINER" },
      { id: "CVE-2026-08412", vendor: "Linux", product: "Netfilter", cvss: "7.8", summary: "Out-of-bounds memory access in nftables network packet processing.", tag: "KERNEL" }
    ],
    headlines: [
      { source: "The Hacker News", title: "New Adversary Campaign Targets Container Registries via Exposed Docker Sockets", time: "2h ago", url: "https://thehackernews.com" },
      { source: "CISA Alert", title: "CISA Adds 4 Actively Exploited Vulnerabilities to Known Exploited Catalog", time: "5h ago", url: "https://www.cisa.gov" },
      { source: "BleepingComputer", title: "Researchers Unveil Technique for Running RAG Guardrails Against Prompt Leakage", time: "8h ago", url: "https://www.bleepingcomputer.com" },
      { source: "SecurityWeek", title: "DevSecOps Benchmark Report: 78% of Breaches Linked to CI/CD Secrets Drift", time: "12h ago", url: "https://www.securityweek.com" }
    ]
  }
};
