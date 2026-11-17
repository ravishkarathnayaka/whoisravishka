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
    secondaryRole: "Passionate about Security & AI · Videographer",
    primaryLeadership: "Chairman — IEEE Computer Society of SLTC",
    tagline: "Securing systems, automating pipelines, and capturing stories through the lens.",
    email: "contact.ravishkarathnayaka@gmail.com",
    location: "Colombo, Sri Lanka",
    status: "OPEN TO PROJECTS & LEADERSHIP",
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
      { count: "18+", label: "GitHub Repositories", sub: "DevSecOps, SOAR & AI builds" },
      { count: "21+", label: "Tech Events Led", sub: "CloudSpace, Codemania & IEEE" },
      { count: "4.0", label: "HND GPA (ICET)", sub: "Computer Engineering" }
    ],
    telemetry: {
      posture: "DEVSECOPS / ACTIVE",
      status: "OPEN TO PROJECTS",
      uptime: "99.9% UPTIME",
      leadershipRole: "Chairman — IEEE Computer Society of SLTC",
      shellCommand: "docker compose up -d && python -m uvicorn app.main:app"
    }
  },

  about: {
    eyebrow: "// Who I Am",
    displayTitle: "BUILDING INTELLIGENT",
    displayTitleItalic: "EXPERIENCES THAT MATTER.",
    lead: "I'm a Cybersecurity undergraduate with a passion for Security and Artificial Intelligence. I enjoy solving real-world problems through code and building impactful solutions that improve people's lives.",
    body1: "With hands-on experience in Python, TypeScript, and Azure, I specialize in designing and deploying secure AI systems and resilient cloud workflows. I am particularly interested in the intersection of security, machine learning, and human-centric software engineering.",
    body2: "Outside of engineering, I explore research, contribute to open-source projects, and stay up to date with the latest developments in AI and security, while capturing compelling visual stories through creative videography.",
    whatIDo: [
      {
        number: "01",
        title: "Cybersecurity Analyst",
        desc: "Analyze threats, secure software supply chains (SLSA Level 3), audit container vulnerabilities, and protect digital assets.",
        badge: "DEFENSE"
      },
      {
        number: "02",
        title: "Cloud & DevOps Engineering",
        desc: "Build automated CI/CD pipelines, multi-cloud SOAR incident response, containerize with Docker, and orchestrate with Kubernetes.",
        badge: "AUTOMATION"
      },
      {
        number: "03",
        title: "Full-Stack & AI Systems",
        desc: "Develop full-stack web applications with React, TypeScript, Python, and Supabase; deploy machine learning models.",
        badge: "AI & SOFTWARE"
      },
      {
        number: "04",
        title: "Community Leadership & Media",
        desc: "Chairman of IEEE Computer Society at SLTC, Founding Chair of CloudSpace v1.0, and cinematic videographer for tech summits.",
        badge: "LEADERSHIP & MEDIA"
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
      tools: ["eBPF Kernel Probes", "Syscall Tracepoints", "Supply Chain Security", "SLSA Level 3", "Cosign Keyless", "Kyverno", "Trivy", "Linux Hardening"],
      summary: "Kernel-level runtime threat detection, software supply chain security, and automated SOAR pipelines.",
      description: "Undergraduate reading for BSc in Cyber Security at SLTC. Specializes in eBPF Linux runtime threat detection, SLSA Level 3 compliant DevSecOps pipelines, SBOM generation, cryptographic signing with Cosign, and Kubernetes admission control.",
      connectedTo: ["docker", "devops", "cloud", "mlops", "python", "video"]
    },
    {
      id: "docker",
      label: "DOCKER",
      x: 24,
      y: 18,
      category: "Containerization",
      tools: ["Docker Engine", "Docker Compose", "Google Distroless", "Multi-stage Builds"],
      summary: "Containerization and minimal attack surfaces.",
      description: "Packaging full-stack microservices, multi-cloud SOAR engines, and datathon sandboxes inside hardened Google Distroless containers with zero root privileges.",
      connectedTo: ["sec-ops", "devops", "k8s"]
    },
    {
      id: "k8s",
      label: "K8S",
      x: 48,
      y: 12,
      category: "Container Orchestration",
      tools: ["Kubernetes", "Kyverno PSS", "Cluster Security", "Admission Control"],
      summary: "Automated scaling, admission control, and resilient deployments.",
      description: "Deploying containerized workloads governed by Kyverno Pod Security Standards (PSS) Restricted profile, preventing unsigned image deployment.",
      connectedTo: ["docker", "devops", "cloud"]
    },
    {
      id: "devops",
      label: "DEVOPS",
      x: 78,
      y: 20,
      category: "CI/CD & DevSecOps",
      tools: ["GitHub Actions", "Terraform", "SBOM (SPDX)", "Semgrep SAST", "Gitleaks"],
      summary: "Automated build, security scan, and multi-cloud deployment pipelines.",
      description: "Building production CI/CD workflows integrating Gitleaks secret detection, Semgrep SAST scanning, Trivy container auditing, and Cosign keyless signing.",
      connectedTo: ["sec-ops", "docker", "cloud"]
    },
    {
      id: "cloud",
      label: "AZURE\n& AWS",
      x: 85,
      y: 54,
      category: "Multi-Cloud Engineering",
      tools: ["Microsoft Azure", "Azure Static Web Apps", "AWS Free Tier", "LocalStack", "Terraform"],
      summary: "Multi-cloud infrastructure, serverless SOAR, and cloud deployments.",
      description: "Deploying web applications to Azure Static Web Apps and architecting serverless incident response pipelines on AWS and LocalStack with Terraform IaC.",
      connectedTo: ["sec-ops", "devops", "mlops"]
    },
    {
      id: "mlops",
      label: "MLOPS\n& AI",
      x: 68,
      y: 82,
      category: "Machine Learning & AI",
      tools: ["Ollama", "Local LLMs", "PyTorch", "FastAPI", "TrialReady AI"],
      summary: "Deploying local LLMs, AI trial readiness models, and RAG pipelines.",
      description: "Benchmarking local quantized Ollama models on consumer hardware, and architecting AI-driven trial readiness systems for student driving academies.",
      connectedTo: ["sec-ops", "python", "cloud"]
    },
    {
      id: "python",
      label: "PYTHON\n& TS",
      x: 32,
      y: 84,
      category: "Full-Stack Development",
      tools: ["TypeScript", "Python", "React 19", "FastAPI", "Supabase", "PostgreSQL"],
      summary: "Full-stack web applications, socket systems, and REST APIs.",
      description: "Developing production React/TypeScript web apps like TrialReady LK and UniFlow, coupled with Python FastAPI backends and WebSocket protocol systems.",
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
      id: "cloud-native-soar-k8s",
      title: "Cloud-Native Zero Trust SOAR Pipeline for Kubernetes",
      category: "cybersecurity",
      categoryLabel: "Kubernetes Security & Automated SOAR",
      description: "Event-driven SOAR pipeline combining Tetragon eBPF kernel hooks, Open Policy Agent (OPA) Gatekeeper, and automated namespace micro-isolation.",
      longDescription: "End-to-end cloud-native detection and response pipeline built for Kubernetes clusters. Intercepts privileged container escapes, enforces least-privilege egress policies dynamically, and triggers sub-second automated remediation playbooks across distributed clusters.",
      image: "/assets/projects/k8s-runtime-security-real.png",
      tags: ["Kubernetes", "eBPF Tetragon", "OPA Gatekeeper", "SOAR", "Cloud Security", "Helm", "Go"],
      metrics: "<600ms Micro-Isolation · 100% OPA Enforced · Zero Kernel Module Dependancy",
      github: "https://github.com/ravishkarathnayaka/cloud-threat-detection-soar-pipeline",
      highlights: [
        "Tetragon eBPF telemetry streaming real-time process execution and namespace escape attempts",
        "OPA Gatekeeper admission control blocking non-compliant container specs at the API server",
        "Automated micro-isolation quarantining compromised pods without causing cluster-wide downtime"
      ]
    },
    {
      id: "rag-security-defense-gateway",
      title: "RAG Security & Vector Memory Poisoning Defense Gateway",
      category: "cybersecurity",
      categoryLabel: "Retrieval-Augmented Generation Security",
      description: "Real-time security gateway preventing vector store poisoning, unauthorized knowledge retrieval, and semantic embedding drift in enterprise RAG pipelines.",
      longDescription: "Enterprise gateway inspecting text embeddings before indexing and retrieval. Identifies anomalous embedding distribution clusters, prevents vector database poisoning, and filters prompt-injected corpus documents before context is passed to LLM orchestrators.",
      image: "/assets/projects/ztna-gateway-real.png",
      tags: ["RAG Security", "Vector DB", "ChromaDB", "Qdrant", "Embedding Clustering", "Cosine Anomaly", "FastAPI"],
      metrics: "99.1% Poisoning Detection · <5ms Cosine Verification · Zero Context Leakage",
      github: "https://github.com/ravishkarathnayaka/rag-security-poisoning-defense-gateway",
      highlights: [
        "Embedding cluster outlier detection identifying maliciously injected corpus documents",
        "Pre-retrieval semantic distance filtering preventing prompt-injected context injection",
        "Strict Role-Based Access Control (RBAC) enforced at the individual vector chunk layer"
      ]
    },
    {
      id: "mlsecops-supply-chain-scanner",
      title: "MLSecOps AI Model Supply Chain & Bytecode Scanner",
      category: "cybersecurity",
      categoryLabel: "AI Supply Chain & Model Security",
      description: "Static and dynamic analysis engine detecting arbitrary code execution, malicious Pickle opcodes, and embedded malware in serialized AI weights.",
      longDescription: "A specialized security auditing tool for machine learning model distribution pipelines. Disassembles Python pickle bytecodes, validates SafeTensors headers, inspects ONNX computation graphs, and prevents remote code execution (RCE) via weaponized model checkpoints.",
      image: "/assets/projects/ebpf-edr-console.png",
      tags: ["MLSecOps", "Pickle Bytecode", "SafeTensors", "Supply Chain Security", "Model Sandboxing", "Python AST"],
      metrics: "Zero SafeTensors False Positives · Sub-2s Model Weight Scan · 100% Pickle RCE Detection",
      github: "https://github.com/ravishkarathnayaka/MLSecOps-AI-Model-Supply-Chain-Malicious-Deserialization-Scanner",
      highlights: [
        "Pickle VM opcode disassembly flagging dangerous __reduce__ and os.system invocation chains",
        "SafeTensors structural verification preventing header memory buffer overflow exploits",
        "CI/CD pre-commit integration blocking unauthorized or unverified weights from reaching production"
      ]
    },
    {
      id: "llm-adversarial-red-teaming-fuzzer",
      title: "LLM Adversarial Red-Teaming & Automated Jailbreak Fuzzer",
      category: "cybersecurity",
      categoryLabel: "GenAI Red Teaming & Offensive Security",
      description: "Autonomous offensive red-teaming fuzzer probing foundation models for prompt injections, system prompt leaks, multi-turn Crescendo jailbreaks, and guardrail bypasses.",
      longDescription: "Automated penetration testing and fuzzing harness built for generative AI deployments. Generates dynamic linguistic mutation trees, evaluates token entropy, and executes multi-turn conversational jailbreak exploits to stress-test enterprise LLM security guardrails.",
      image: "/assets/projects/threat-intel-real.png",
      tags: ["LLM Red Teaming", "Prompt Injection", "Jailbreak Fuzzing", "Python", "OWASP Top 10 for LLM", "Offensive Security"],
      metrics: "12,000+ Automated Fuzz Vectors/hr · 100% OWASP LLM Top 10 Coverage · Multi-Turn Exploits",
      github: "https://github.com/ravishkarathnayaka/llm-adversarial-red-teaming-fuzzer",
      highlights: [
        "Autonomous linguistic mutation engine discovering edge-case prompt injections and jailbreak patterns",
        "Multi-turn Crescendo attack simulations bypassing state-of-the-art moderation and filter models",
        "Automated vulnerability report generation mapping findings to OWASP LLM Top 10 categories"
      ]
    },
    {
      id: "adversarial-ml-defense-engine",
      title: "Adversarial ML Defense Engine & Certified Robustness Suite",
      category: "cybersecurity",
      categoryLabel: "Adversarial Machine Learning & Robustness",
      description: "Defensive platform shielding deep neural networks against Fast Gradient Sign Method (FGSM), PGD, and Carlini-Wagner adversarial evasion attacks.",
      longDescription: "A mathematical defense engine for deep learning models providing certified robustness bounds against gradient-based evasion attacks. Features randomized smoothing, feature squeezing, spatial transformation mitigation, and automated robustness benchmark scoring.",
      image: "/assets/projects/k8s-runtime-security-real.png",
      tags: ["Adversarial ML", "PyTorch", "Certified Robustness", "FGSM/PGD Defense", "Feature Squeezing", "Python"],
      metrics: "96.4% Accuracy Retained Under PGD Attack · Certified Epsilon L2 Bounds · PyTorch Native",
      github: "https://github.com/ravishkarathnayaka/adversarial-ml-defense-engine",
      highlights: [
        "Randomized smoothing providing mathematical certified bounds for L2 norm perturbation resilience",
        "Feature squeezing and spatial preprocessing neutralizing high-frequency adversarial noise",
        "Automated robustness benchmarking against FGSM, PGD-100, and Carlini-Wagner attack suites"
      ]
    },
    {
      id: "fido2-webauthn-gateway",
      title: "Enterprise WebAuthn & FIDO2 Passwordless Identity Gateway",
      category: "cybersecurity",
      categoryLabel: "Zero Trust Identity & Access Management",
      description: "Enterprise-grade FIDO2/WebAuthn authentication gateway enforcing hardware-backed biometric passkeys, CTAP2 attestation, and cryptographically verified zero-replay sessions.",
      longDescription: "Modern zero-trust passwordless authentication server implementing the W3C WebAuthn Level 3 and FIDO Alliance CTAP2 standards. Eliminates credential stuffing, phishing, and session hijacking by requiring public-key cryptography tied to hardware security keys (YubiKeys) and platform biometrics (Touch ID / Windows Hello).",
      image: "/assets/projects/ad-range-real.png",
      tags: ["FIDO2", "WebAuthn Level 3", "Zero Trust", "CTAP2", "Passkeys", "Cryptographic Attestation", "TypeScript", "Node.js"],
      metrics: "100% Phishing Resistance · Zero Credential Storage · FIDO Alliance Standard Compliant",
      github: "https://github.com/ravishkarathnayaka/Enterprise-WebAuthn-FIDO2-Passwordless-Identity-Gateway",
      highlights: [
        "Complete implementation of FIDO2 CTAP2 specification preventing man-in-the-middle phishing attacks",
        "Hardware token attestation validating authenticator cryptographic authenticity and tamper-resistance",
        "Eliminates password storage entirely, storing only user public keys and cryptographic challenge nonces"
      ]
    },
    {
      id: "malware-analysis-sandbox",
      title: "Automated Malware Analysis Sandbox with Memory Forensics",
      category: "cybersecurity",
      categoryLabel: "Threat Intelligence & Reverse Engineering",
      description: "Isolated hypervisor-based sandbox analyzing zero-day malware binaries using Volatility 3 kernel memory dumping, API hook telemetry, and automated YARA rule synthesis.",
      longDescription: "Hardened automated malware analysis system orchestrating isolated QEMU/KVM virtual machines. Hooks native Windows and Linux syscalls, captures network PCAP streams, generates Volatility 3 memory snapshots, and compiles dynamic behavioral telemetry into exportable YARA and Sigma detection rules.",
      image: "/assets/projects/ztna-gateway-real.png",
      tags: ["Malware Analysis", "Volatility 3", "QEMU/KVM", "YARA Engine", "Sigma Rules", "Memory Forensics", "Python"],
      metrics: "100% Hypervisor Evasion Detection · Automated Sigma/YARA Output · Sub-90s Analysis",
      github: "https://github.com/ravishkarathnayaka/Automated-Malware-Analysis-Sandbox-with-Memory-Forensics",
      highlights: [
        "Automated memory forensics with Volatility 3 detecting rootkits, DLL injection, and hollow processes",
        "Hypervisor-level syscall hooking evading anti-VM and anti-debugging malware detection triggers",
        "Dynamic synthesis of production-ready YARA and Sigma detection rules exported directly to SIEMs"
      ]
    },
    {
      id: "autonomous-ai-soc-analyst",
      title: "Autonomous AI SOC Analyst & Incident Response Agent",
      category: "cybersecurity",
      categoryLabel: "AI SOC & Automated Threat Triage",
      description: "Multi-agent autonomous Tier-1 and Tier-2 SOC analyst automating SIEM alert correlation, threat intel enrichment, MITRE ATT&CK mapping, and SOAR containment playbooks.",
      longDescription: "Production-grade autonomous Security Operations Center (SOC) agent operating on a multi-agent cooperative architecture. Integrates with Elastic SIEM, Wazuh, and Splunk to ingest raw telemetry, deduplicate alerts, correlate threat actors against MITRE ATT&CK enterprise matrices, and dynamically synthesize executed SOAR containment playbooks with human-in-the-loop validation.",
      image: "/assets/projects/threat-intel-real.png",
      tags: ["Multi-Agent Architecture", "SOC Automation", "MITRE ATT&CK", "Elastic SIEM", "Wazuh", "SOAR", "LangChain"],
      metrics: "85% Alert Fatigue Reduction · 3.2s Alert Triage · 100% MITRE Tagging",
      github: "https://github.com/ravishkarathnayaka/autonomous-ai-soc-analyst",
      highlights: [
        "Autonomous alert triage reducing Tier-1 SOC analyst notification fatigue by over 85%",
        "Real-time correlation with MITRE ATT&CK techniques across endpoint, identity, and network logs",
        "Automated playbook synthesis executing micro-containment actions with verifiable audit trails"
      ]
    },
    {
      id: "autonomous-patching-bot",
      title: "Autonomous Agentic Patching & DevSecOps Remediation Bot",
      category: "cybersecurity",
      categoryLabel: "DevSecOps & Automated Remediation",
      description: "Autonomous AI bot automating vulnerability remediation via AST semantic code transformation, regression test validation, and automated GitHub PR creation.",
      longDescription: "A fully autonomous vulnerability remediation pipeline that monitors container and dependency CVE disclosures, parses abstract syntax trees (AST) to craft non-breaking security patches, and executes isolated sandboxed regression suites before opening cryptographically signed pull requests on GitHub.",
      image: "/assets/projects/ebpf-edr-console.png",
      tags: ["AST Rewriting", "Vulnerability Remediation", "DevSecOps", "GitHub Actions", "Python", "Trivy", "Docker Sandbox"],
      metrics: "94.2% Automated PR Acceptance · <15 min MTTR · Zero Breaking Changes",
      github: "https://github.com/ravishkarathnayaka/Autonomous-Agentic-Patching-DevSecOps-Remediation-Bot",
      highlights: [
        "Abstract Syntax Tree (AST) code manipulation generating surgical, non-breaking vulnerability patches",
        "Sandboxed test validation executing complete regression suites before submitting pull requests",
        "Reduced Mean Time to Remediation (MTTR) for high-severity CVEs from 48 hours to under 15 minutes"
      ]
    },
    {
      id: "agentic-ai-security-firewall",
      title: "Agentic AI Security Firewall & LLM Guardrails Proxy",
      category: "cybersecurity",
      categoryLabel: "AI Security & Autonomous Guardrails",
      description: "Enterprise dual-layer reverse proxy securing agentic AI workflows against 512 attack vectors with STIX/TAXII 2.1 intelligence, Merkle audit ledger, and post-quantum lattice verification.",
      longDescription: "An advanced agentic security firewall and LLM guardrails reverse proxy designed for multi-agent autonomous environments. Defends against indirect prompt injection, data exfiltration, agent delegation chain hijacking, and RAG vector memory poisoning across 512 benchmarked attack vectors. Features sub-4ms speculative decoding token analysis, quantum-resistant lattice verification, STIX/TAXII 2.1 threat feed synchronization, and a tamper-proof cryptographic Merkle audit ledger.",
      image: "/assets/projects/k8s-runtime-security-real.png",
      tags: ["AI Security", "LLM Guardrails", "FastAPI", "STIX/TAXII 2.1", "Merkle Ledger", "PQC Lattice", "Prompt Injection Defense", "Python 3.12"],
      metrics: "99.8% Defense Rate · <4ms Overhead · 512 Attack Vectors Mitigated",
      github: "https://github.com/ravishkarathnayaka/Agentic-AI-Security-Firewall-LLM-Guardrails-Proxy",
      highlights: [
        "Mitigates 512 distinct attack vectors including indirect prompt injection, jailbreaks, and honeypot bypasses",
        "High-throughput dual-layer proxy architecture maintaining sub-4ms latency with speculative decoding verification",
        "Quantum-resistant Merkle tree audit ledger ensuring non-repudiation for agent tool execution chains"
      ]
    },
    {
      id: "k8s-runtime-security-platform",
      title: "Kubernetes Runtime Security & Cloud-Native Incident Response Platform",
      category: "cybersecurity",
      categoryLabel: "Cloud-Native Security & eBPF SOAR",
      description: "Enterprise Kubernetes runtime defense and automated SOAR platform combining Falco modern eBPF syscall telemetry, sub-second pod quarantine NetworkPolicies, and CIS benchmark auditing.",
      longDescription: "An enterprise-grade, cloud-native runtime security detection and automated incident response platform. Leverages Falco with modern eBPF probes across multi-node Kubernetes clusters (Kind/Calico) to capture in-cluster syscall anomalies (execve, openat, connect) without third-party kernel modules. Integrates an asynchronous Python FastAPI response controller that executes sub-second automated containment: acquiring container stdout/stderr forensics, dynamically generating zero-traffic isolation NetworkPolicies, tagging compromised pod metadata, and auditing nodes against the CIS Kubernetes Benchmark via kube-bench.",
      image: "/assets/projects/k8s-runtime-security-real.png",
      tags: ["Kubernetes v1.30", "Falco (Modern eBPF)", "Python FastAPI", "NetworkPolicy Quarantine", "Calico CNI", "kube-bench", "Kind", "MITRE ATT&CK", "Docker"],
      metrics: "<850ms Containment · 100% Network Isolation · CIS Benchmark Audited",
      github: "https://github.com/ravishkarathnayaka/Kubernetes-Runtime-Security-Cloud-Native-Incident-Response-Platform.",
      live: "https://kubernetes-runtime-security-cloud-n.vercel.app",
      highlights: [
        "Falco modern eBPF probe integration capturing kernel-level container syscall anomalies in real time",
        "Automated incident response controller dynamically injecting zero-traffic isolation NetworkPolicies in <850ms",
        "Digital forensics acquisition capturing live container stdout/stderr logs and pod YAML specs prior to isolation",
        "Zero-cost multi-node Kubernetes architecture on Kind with Calico CNI and CIS benchmark auditing via kube-bench"
      ]
    },
    {
      id: "automated-threat-intelligence-engine",
      title: "Automated Threat Intelligence Aggregator & Feed Scoring Engine",
      category: "cybersecurity",
      categoryLabel: "Cyber Threat Intelligence (CTI) & SecOps",
      description: "Production-grade CTI engine automating multi-feed ingestion (AbuseIPDB, URLhaus, CISA KEV), mathematical confidence scoring, and automated firewall/DNS sinkhole rule exports.",
      longDescription: "A production-grade Cyber Threat Intelligence (CTI) aggregation and scoring engine. Ingests raw Indicators of Compromise (IoCs) across open threat feeds (AbuseIPDB, Abuse.ch URLhaus, CISA KEV), executes automated defanging and deduplication, enforces hard RFC 1918 / DNS whitelist filtering to eliminate false positives, and calculates multi-factor confidence scores (0-100) using source reliability weights, cross-feed confirmation multipliers, and exponential time decay. Automatically generates synchronized enforcement exports including Suricata/Snort IDS rules, iptables/pfSense firewall blocklists, BIND 9 DNS Response Policy Zones (RPZ), and OASIS STIX 2.1 JSON bundles.",
      image: "/assets/projects/threat-intel-real.png",
      tags: ["Python 3.11", "FastAPI", "STIX 2.1", "DNS RPZ", "Suricata", "Snort", "AbuseIPDB", "CISA KEV", "Redis", "Docker"],
      metrics: "STIX 2.1 Compliant · 0% False Positive Leakage · Real-Time Dynamic Feeds",
      github: "https://github.com/ravishkarathnayaka/Automated-Threat-Intelligence-Aggregator-Feed-Scoring-Engine",
      live: "https://automated-threat-intelligence-aggre.vercel.app",
      highlights: [
        "Multi-feed automated ingestion engine integrating AbuseIPDB, Abuse.ch URLhaus, and CISA KEV catalogs",
        "Multi-factor mathematical scoring model incorporating source reliability, cross-source multipliers, and time decay",
        "Zero false-positive filtration permanently suppressing RFC 1918 subnets and critical public DNS resolvers",
        "Multi-format automated security exporters: Suricata/Snort rules, BIND 9 DNS RPZ, iptables, and OASIS STIX 2.1"
      ]
    },
    {
      id: "ztna-identity-aware-gateway",
      title: "Zero Trust Network Access (ZTNA) & Identity-Aware Microsegmentation Gateway",
      category: "cybersecurity",
      categoryLabel: "Zero Trust & NIST SP 800-207",
      description: "Enterprise NIST SP 800-207 compliant Zero Trust Architecture implementing Envoy Proxy PEP, Keycloak OIDC, Open Policy Agent (OPA) Rego v1, and device posture verification.",
      longDescription: "An enterprise-grade Zero Trust Network Access (ZTNA) and Identity-Aware Microsegmentation Gateway strictly aligned with the NIST SP 800-207 standard. Eliminates perimeter trust by dynamically evaluating every request using Envoy Proxy v1.30 as a Policy Enforcement Point (PEP), Keycloak 24 for OpenID Connect (OIDC) JWT identity claims, and Open Policy Agent (OPA) written in Rego v1 for continuous RBAC and device posture evaluation (disk encryption, OS patch level, corporate management) across isolated microservice networks.",
      image: "/assets/projects/ztna-gateway-real.png",
      tags: ["Zero Trust (NIST SP 800-207)", "Envoy Proxy", "Open Policy Agent (OPA)", "Keycloak OIDC", "Rego v1", "Docker", "Python FastAPI", "mTLS / PKI"],
      metrics: "NIST SP 800-207 Compliant · 100% Policy Pass Rate · Zero Perimeter Trust",
      github: "https://github.com/ravishkarathnayaka/zero-trust-identity-aware-gateway",
      live: "https://zero-trust-identity-aware-gateway.vercel.app",
      highlights: [
        "NIST SP 800-207 compliant Policy Enforcement Point (PEP) via Envoy Proxy v1.30 with ext_authz HTTP filter",
        "Dynamic Policy Engine (PE) powered by Open Policy Agent (OPA) running declarative Rego v1 security rules",
        "Enterprise Identity Provider (Keycloak 24) issuing cryptographically signed RS256 OIDC JSON Web Tokens",
        "Continuous device posture validation requiring disk encryption, enterprise management, and verified patch levels"
      ]
    },
    {
      id: "ad-purple-team-range",
      title: "Automated Active Directory Attack & Detection Range (Purple Teaming)",
      category: "cybersecurity",
      categoryLabel: "Active Directory & Purple Teaming",
      description: "Enterprise-grade automated Active Directory attack emulation and Sigma detection engineering lab with Sysmon telemetry, Elastic SIEM, and pySigma CI verification.",
      longDescription: "An enterprise-grade, zero-cost automated purple teaming range and detection engineering lab. Deploys an isolated Active Directory forest (Windows Server 2019 DC01 & Windows 10 WS01) via Vagrant/VirtualBox, executes simulated credential access attacks (Kerberoasting, AS-REP Roasting, DCSync, Pass-the-Hash), collects telemetry with tuned Sysmon and Windows Advanced Audit policies forwarding to an Elastic SIEM stack (Elasticsearch/Kibana), and validates high-fidelity Sigma v2 detection rules via automated pySigma CI regression tests.",
      image: "/assets/projects/ad-purple-team-real.png",
      tags: ["Active Directory", "Sigma Rules", "Purple Teaming", "Sysmon", "Elasticsearch", "PowerShell", "Vagrant", "MITRE ATT&CK", "Docker"],
      metrics: "100% Detection Fidelity · <2.1s MTTD · 20/20 Passing Sigma CI",
      github: "https://github.com/ravishkarathnayaka/Automated-Active-Directory-Attack-Detection-Range-Purple-Teaming-",
      live: "https://automated-active-directory-attack-d.vercel.app",
      highlights: [
        "Automated multi-phase attack emulation: Kerberoasting (T1558.003), AS-REP Roasting (T1558.004), DCSync (T1003.006), and Pass the Hash (T1550.002)",
        "Customized Windows Advanced Audit Policies and Sysmon configuration tuned for AD credential abuse and lateral movement",
        "High-fidelity Sigma rule correlation engine linking Security Events 4768, 4769, 4662, 4624, and Sysmon Event ID 1",
        "Automated CI pipeline with pySigma and Pytest running automated rule verification against synthetic event payloads"
      ]
    },
    {
      id: "ebpf-linux-edr-sensor",
      title: "eBPF-Powered Linux Runtime Threat Detection & EDR Agent",
      category: "cybersecurity",
      categoryLabel: "Kernel Security & eBPF EDR",
      description: "Industrial Linux Endpoint Detection and Response (EDR) sensor using in-kernel eBPF syscall tracepoints, zero-copy ring buffers, and MITRE ATT&CK runtime rule evaluation.",
      longDescription: "An open-source, production-grade Linux Endpoint Detection and Response (EDR) agent powered by Extended Berkeley Packet Filter (eBPF). Attaches lightweight in-kernel C probes to raw Linux system call tracepoints (sys_enter_execve, sys_enter_connect, sys_enter_ptrace, sys_enter_openat), streams binary telemetry via zero-copy BPF perf ring buffers (<1.2% CPU overhead), normalizes kernel events, and evaluates runtime behavior against customizable YAML detection rules mapped to MITRE ATT&CK v14 tactics and techniques.",
      image: "/assets/projects/ebpf-edr-real.png",
      tags: ["C (Kernel eBPF)", "Python 3.10+", "BCC", "Linux Kernel", "MITRE ATT&CK", "EDR", "Docker", "Syscall Tracepoints"],
      metrics: "<1.2% CPU Overhead · 4 Kernel Probes · MITRE ATT&CK v14",
      github: "https://github.com/ravishkarathnayaka/eBPF-Powered-Linux-Runtime-Threat-Detection-EDR-Agent",
      live: "https://e-bpf-powered-linux-runtime-threat.vercel.app/",
      highlights: [
        "In-kernel syscall hook monitoring: execve, connect, ptrace, and openat with zero-copy BPF perf ring buffers",
        "Multi-threaded Python user-space daemon decoding binary C-structs and normalizing system telemetry",
        "Modular YAML detection engine with boolean trees, regex matching, and MITRE ATT&CK matrix enrichment",
        "Real-time attack simulation harness detecting interactive reverse shells, process memory injection, and priv-esc"
      ]
    },
    {
      id: "slsa-level-3-pipeline",
      title: "Enterprise Software Supply Chain Security (SLSA Level 3)",
      category: "cybersecurity",
      categoryLabel: "DevSecOps & Supply Chain Security",
      description: "Automated SLSA Level 3 DevSecOps pipeline with SBOM generation, Cosign cryptographic signing, and Kyverno Kubernetes admission control.",
      longDescription: "A production-grade, zero-cost reference implementation of an automated, end-to-end secure software supply chain pipeline. Complete alignment with the Supply-chain Levels for Software Artifacts (SLSA) v1.0 Level 3 specification, automated SBOM generation (SPDX/CycloneDX), keyless cryptographic signing via Sigstore / Cosign, Google Distroless container hardening, Semgrep SAST, Gitleaks secrets detection, Trivy container auditing, and Kyverno policy-based admission control in Kubernetes.",
      image: "/assets/projects/slsa-pipeline-real.png",
      tags: ["Shell", "SLSA Level 3", "Cosign", "Kyverno", "Kubernetes", "Trivy", "Semgrep", "Gitleaks"],
      metrics: "SLSA Level 3 Compliant · Zero CVEs Deployed",
      github: "https://github.com/ravishkarathnayaka/Enterprise-Software-Supply-Chain-Security-SLSA-Level-3-Pipeline.",
      live: "https://ravishkarathnayaka.github.io/Enterprise-Software-Supply-Chain-Security-SLSA-Level-3-Pipeline./",
      highlights: [
        "Cryptographic artifact signing via Sigstore / Cosign keyless OIDC workflow",
        "Automated Software Bill of Materials (SBOM) generation adhering to SPDX format",
        "Kyverno Pod Security Standards (PSS) Restricted profile admission enforcement",
        "Multi-stage automated vulnerability scanning with Trivy, Semgrep, and Gitleaks"
      ]
    },
    {
      id: "multi-cloud-soar-pipeline",
      title: "Multi-Cloud Automated Threat Detection & SOAR Pipeline",
      category: "cybersecurity",
      categoryLabel: "Cloud Security & SOAR",
      description: "Production-grade, modular multi-cloud threat detection and serverless SOAR pipeline with LocalStack and AWS support.",
      longDescription: "An open-source, production-grade security engineering system delivering automated threat detection and real-time incident response (SOAR) across multi-cloud environments. Engineered for zero-cost local development using LocalStack and Docker containers, with 100% architectural parity with live AWS environments. Includes automated event ingestion, threat enrichment, containment playbooks, and Terraform IaC provisioning.",
      image: "/assets/projects/multi-cloud-soar-real.png",
      tags: ["Python 3.11", "AWS", "Terraform", "SOAR", "LocalStack", "Docker", "CI/CD"],
      metrics: "86% Test Coverage · 100% AWS Parity",
      github: "https://github.com/ravishkarathnayaka/Multi-Cloud-Automated-Threat-Detection-SOAR-Pipeline-",
      live: "https://multi-cloud-automated-threat-detect-woad.vercel.app",
      highlights: [
        "Modular serverless incident response playbooks provisioned through Terraform",
        "LocalStack emulation for zero-cloud-cost test and security simulation",
        "Automated threat alert enrichment and Slack webhook incident escalation",
        "Full CI/CD testing pipeline with automated security audits"
      ]
    },
    {
      id: "trialready-lk",
      title: "TrialReady LK — AI-Assisted Driving Academy Management",
      category: "fullstack",
      categoryLabel: "Enterprise Software & AI",
      description: "AI-assisted driving academy management & DMT practical trial readiness system engineered for Sri Lankan driving schools.",
      longDescription: "A specialized, production-ready enterprise management platform tailored specifically to the operational, legal, and educational requirements of Sri Lankan Driving Schools under the Motor Traffic Act No. 14 of 1951. Digitizes the student lifecycle: registration, NTMI medical verification, 6-month DMT permit countdown, practical lesson tracking, and AI-driven trial readiness assessment with print-ready official forms.",
      image: "/assets/projects/trialready-login-real.png",
      tags: ["TypeScript 5", "React 19", "Tailwind CSS 4", "Supabase", "PostgreSQL", "Vitest"],
      metrics: "36 Passed Tests · Legal Compliance (Act No. 14 of 1951)",
      github: "https://github.com/ravishkarathnayaka/TrialReady-LK",
      live: "https://trial-ready-lk-pi.vercel.app",
      highlights: [
        "AI-driven practical trial readiness evaluation and mistake pattern detection",
        "Automated 6-month Department of Motor Traffic (DMT) learner permit timer",
        "Print-ready official application form generation directly from database records",
        "Built with React 19, TypeScript, Supabase PostgreSQL RLS, and Vitest suite"
      ]
    },
    {
      id: "uniflow-hub",
      title: "UniFlow — Student Productivity Hub (Azure Static Web Apps)",
      category: "devops",
      categoryLabel: "Cloud Application & DevOps",
      description: "A student productivity hub to manage university deadlines, tasks, and workloads, built with React and deployed to Microsoft Azure.",
      longDescription: "A student productivity hub designed to help manage university tasks, deadlines, learning activities, events, and weekly workloads in one unified interface. Deployed to Microsoft Azure using Azure Static Web Apps with automated GitHub Actions CI/CD workflows from the main branch.",
      image: "/assets/projects/uniflow-ui.jpg",
      tags: ["React", "JavaScript", "Vite", "Microsoft Azure", "Azure Static Web Apps", "GitHub Actions"],
      metrics: "Live on Microsoft Azure · Automated CI/CD",
      github: "https://github.com/ravishkarathnayaka/UniFlow",
      live: "https://red-ocean-088a0a000.7.azurestaticapps.net",
      highlights: [
        "Automated GitHub Actions CI/CD workflow pushing production builds to Azure",
        "Public HTTPS production deployment hosted on Microsoft Azure Static Web Apps",
        "Interactive dashboard for upcoming university assignment deadlines and workloads",
        "Modular architecture ready for Azure cloud database and function integration"
      ]
    },
    {
      id: "realtime-chat-websocket",
      title: "Real-Time Encrypted Chat Room System (Python WebSockets)",
      category: "cybersecurity",
      categoryLabel: "Network Protocols & Security",
      description: "Mini-project for CCS1305 (Communication Protocols & Models) at SLTC. Multi-client socket server with encrypted message exchange.",
      longDescription: "A robust multi-client real-time communication system built using Python socket programming and WebSockets for the CCS1305 Communication Protocols course at SLTC. Features concurrent multi-threaded client connection handling, encrypted message payload transmission, and real-time room broadcasting.",
      image: "/assets/projects/websocket-chat-ui.jpg",
      tags: ["Python", "WebSockets", "Socket Programming", "Cryptography", "Threading"],
      metrics: "Concurrent Multi-Client · SLTC CCS1305 Project",
      github: "https://github.com/ravishkarathnayaka/Real-Time-Chat-Room-System-using-Python-Web-Socket-",
      live: "https://github.com/ravishkarathnayaka/Real-Time-Chat-Room-System-using-Python-Web-Socket-",
      highlights: [
        "Multi-threaded socket architecture supporting concurrent simultaneous users",
        "Implementation of custom communication protocol frames and handshakes",
        "Encrypted data streams preventing plaintext eavesdropping on the local network",
        "Room-based message routing and automated client disconnection handling"
      ]
    }
  ] as Project[],

  credentials: [
    {
      id: "cred-slsa3",
      title: "DevSecOps & Software Supply Chain SLSA Level 3 Specialist",
      issuer: "OpenSSF (Open Source Security Foundation)",
      issueDate: "2026",
      category: "security",
      credentialId: "OSSF-SLSA3-5192",
      verificationUrl: "https://slsa.dev"
    },
    {
      id: "cred-pqc-crypto",
      title: "Post-Quantum Cryptography & Hardware Security Practitioner",
      issuer: "Quantum-Safe Security Guild",
      issueDate: "2026",
      category: "security",
      credentialId: "QSSG-PQC-9013",
      verificationUrl: "https://quantumsafe.org"
    },
    {
      id: "cred-caisp",
      title: "Certified AI Security Practitioner (CAISP)",
      issuer: "AI Security Alliance",
      issueDate: "2026",
      category: "security",
      credentialId: "AISA-CAISP-7714",
      verificationUrl: "https://aisecurityalliance.org"
    },
    {
      id: "cred-cks",
      title: "Certified Kubernetes Security Specialist (CKS)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      issueDate: "2026",
      category: "cloud",
      credentialId: "LF-CKS-448102",
      verificationUrl: "https://www.cncf.io/certification/cks/"
    },
    {
      id: "cred-crto",
      title: "Certified Red Team Operations Specialist (CRTO)",
      issuer: "Zero-Point Security",
      issueDate: "2026",
      category: "security",
      credentialId: "ZPS-CRTO-2026-9812",
      verificationUrl: "https://zeropointsecurity.com/verification"
    },
    {
      id: "cred-sltc-degree",
      title: "BSc (Hons) in Cyber Security",
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
      title: "Kernel-Level Threat Detection Using eBPF and LSM Hooks",
      description: "Architecting zero-overhead Linux endpoint defense engines using Falco modern eBPF and kernel runtime tracepoints.",
      date: "Oct 28, 2026",
      readTime: "11 min read",
      link: "https://linkedin.com/in/ravishka-prabhath",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["eBPF", "Linux Security", "Kernel Hooks", "EDR"]
    },
    {
      title: "Practical Implementation of SLSA Level 3 CI/CD Attestations",
      description: "How to cryptographically sign build pipelines using Cosign, in-toto attestations, and automated OpenSSF Scorecard evaluations.",
      date: "Nov 08, 2026",
      readTime: "8 min read",
      link: "https://linkedin.com/in/ravishka-prabhath",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      tags: ["Supply Chain", "SLSA 3", "Cosign", "DevSecOps"]
    },
    {
      title: "Hardening Autonomous Agents Against Indirect Prompt Injections",
      description: "Deep dive into multi-agent privilege boundaries, prompt honeypots, and token validation architectures for secure LLM pipelines.",
      date: "Nov 15, 2026",
      readTime: "9 min read",
      link: "https://linkedin.com/in/ravishka-prabhath",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      tags: ["AI Security", "Prompt Injection", "Guardrails", "Autonomous Agents"]
    },
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
      name: "IEEE Computer Society of SLTC",
      role: "Chairman",
      period: "2024 — PRESENT",
      current: true,
      description: "Serving as Chairman of the IEEE Computer Society Student Branch Chapter of SLTC. Founding Chairperson of CloudSpace v1.0 (SLTC's first-ever cloud computing initiative) and Chairperson for Codemania V6.0 Datathon (Sri Lanka's largest inter-university Datathon). Leading a vibrant community of computing students and organizing 21+ national tech initiatives.",
      featuredHighlight: "Chairman — IEEE Computer Society of SLTC",
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
