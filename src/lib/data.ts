export const personal = {
  name: "Aastha Sharma",
  role: "Backend Engineer",
  email: "saastha.2911@gmail.com",
  phone: "+91 7296836197",
  location: "Bangalore, India",
  github: "https://github.com/saastha09",
  linkedin: "https://linkedin.com/in/aastha-sharma-906a2720a",
  cal: "https://cal.com/aastha-sharma-bjlgi7/15min",
  resumeUrl: "/Aastha_Sharma_Resume.pdf",
  photoUrl: "/photo.jpg",
  tagline: "I build distributed systems that don't fall over.",
  heroTypewriterRoles: [
    "Golang Engineer",
    "Distributed Systems Builder",
    "Sole Backend Architect",
    "Open to Remote - International",
  ],
  openTo: ["Remote", "Dubai", "Netherlands", "US Remote"],
};

export const aboutParagraphs = [
  "I'm a backend engineer who's spent the last two years learning that distributed systems will humble you in ways no course can prepare you for.",
  "At In Time Tec, I'm the only backend engineer on Lightspeed - a platform managing 100+ embedded Linux devices in production. I've debugged OTA update bugs at 2am, designed event routing systems from scratch, and learned Yocto/BitBake because there was no one else to do it.",
  "I care about systems that are fast, reliable, and boring in the best way. I want to work somewhere I'm the least experienced engineer in the room.",
  "Currently based in Bangalore. Open to remote, Dubai, Netherlands, and US-remote roles. Target: INR 28L+.",
];

export const experiences = [
  {
    id: "intimetec",
    company: "In Time Tec",
    role: "Software Engineer",
    period: "Jun 2025 - Present",
    location: "Bangalore, India",
    summary:
      "Sole backend architect for Lightspeed - a distributed IoT/SaaS platform managing 100+ embedded Linux devices across multiple sites.",
    bullets: [
      "Built entire backend from scratch: REST APIs in Go, priority-based event routing with preemption and goroutine-based parallel delivery",
      "Designed MariaDB schema, Redis caching layer, NGINX API gateway, and AWS deployment pipeline",
      "Implemented Mender OTA firmware delivery system for STM32MP15 embedded Linux devices",
      "Built Rogue Web App admin tool with LDAP authentication and RBAC",
      "Diagnosed and resolved a three-layer production bug affecting DHCP client identifiers on hardware",
      "Maintained 99.9%+ platform uptime across all production deployments",
    ],
    stack: ["Go", "REST", "SIP/VoIP", "MariaDB", "Redis", "NGINX", "Docker", "AWS", "Mender OTA", "Linux", "LDAP"],
  },
  {
    id: "cyberinfra",
    company: "Cyber Infrastructure",
    role: "Junior Software Developer",
    period: "Apr 2024 - May 2025",
    location: "Indore, India",
    summary:
      "Built Younified - a 4-microservice platform with REST, gRPC, and GraphQL APIs on a 10-person Agile team.",
    bullets: [
      "Architected and built 4-microservice backend in Golang and Node.js",
      "Implemented internal gRPC service mesh and GraphQL APIs for external consumers",
      "Built Redis hot-path caching, reducing average API response time significantly",
      "Integrated Google OAuth and Casbin RBAC for authentication and authorization",
      "Delivered real-time notification system and full unit/integration test coverage",
    ],
    stack: ["Go", "Node.js", "gRPC", "GraphQL", "Redis", "MongoDB", "PostgreSQL", "OAuth2", "Casbin"],
  },
];

export const projects = [
  {
    id: "lightspeed",
    name: "Lightspeed",
    type: "Production",
    hero: true,
    description: "Distributed IoT/SaaS platform managing 100+ embedded Linux devices. Built solo from zero to production.",
    longDescription:
      "Full-stack backend system for real-time device orchestration across multiple sites. Priority-based event routing with goroutine parallelism and preemption. OTA firmware delivery to STM32MP15 hardware. Zero-downtime deploys.",
    stack: ["Go", "REST", "SIP/VoIP", "MariaDB", "Redis", "Docker", "AWS", "Mender", "NGINX", "Linux"],
    github: null,
    metrics: ["100+ devices", "99.9% uptime", "Built solo"],
  },
  {
    id: "younified",
    name: "Younified",
    type: "Production",
    hero: false,
    description: "4-microservice distributed backend with gRPC internal mesh and GraphQL external APIs.",
    longDescription:
      "Polyglot microservice platform (Go + Node.js). Internal services communicate via gRPC. External clients use GraphQL. Redis caching on hot paths. Full OAuth2 + RBAC auth layer.",
    stack: ["Go", "Node.js", "gRPC", "GraphQL", "Redis", "MongoDB", "PostgreSQL"],
    github: null,
    metrics: ["4 microservices", "gRPC + GraphQL", "Full test coverage"],
  },
  {
    id: "wansafar",
    name: "Wansafar",
    type: "Freelance",
    hero: false,
    description: "Safari booking platform. Sole engineer, design to production.",
    longDescription:
      "Full booking platform built solo. REST APIs in Go, MySQL, Google OAuth integration, Casbin RBAC for role-based access control.",
    stack: ["Go", "REST", "MySQL", "Google OAuth", "Casbin"],
    github: null,
    metrics: ["Solo build", "OAuth + RBAC", "Production"],
  },
  {
    id: "ecommerce",
    name: "MERN eCommerce",
    type: "Academic",
    hero: false,
    description: "Full-stack eCommerce site with cart, wishlist, and JWT auth.",
    longDescription:
      "Academic project - complete shopping experience with product catalog, cart, wishlist, and user auth via JWT. React frontend, Express/Node backend, MongoDB.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/saastha09",
    metrics: ["Full-stack", "JWT auth", "Cart + Wishlist"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Golang", level: 92 },
      { name: "Python", level: 68 },
      { name: "JavaScript", level: 60 },
      { name: "SQL / Bash", level: 75 },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "REST APIs", level: 95 },
      { name: "gRPC", level: 82 },
      { name: "GraphQL", level: 75 },
      { name: "Microservices", level: 88 },
      { name: "Event-driven Arch", level: 85 },
    ],
  },
  {
    category: "Databases & Cache",
    items: [
      { name: "MySQL / MariaDB", level: 88 },
      { name: "PostgreSQL", level: 78 },
      { name: "Redis", level: 85 },
      { name: "MongoDB", level: 72 },
    ],
  },
  {
    category: "Infra & Cloud",
    items: [
      { name: "Docker", level: 85 },
      { name: "AWS (EC2, S3)", level: 75 },
      { name: "Linux / NGINX", level: 88 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

export const certifications = [
  { title: "Data Science & ML", issuer: "Edureka", detail: "4-month internship program", icon: "brain" },
  { title: "Java Full Stack", issuer: "Wipro", detail: "Spring, Hibernate - 3 months", icon: "layers" },
  { title: "5-Star Problem Solving", issuer: "HackerRank", detail: "Data Structures & Algorithms", icon: "star" },
];

export const currentlyLearning = ["kubernetes", "kafka", "agentic-ai-infra", "open-source-contrib"];

export const terminalCommands: Record<string, string> = {
  whoami: "aastha sharma - golang backend engineer - bangalore, india",
  "ls projects": "lightspeed/  younified/  wansafar/  ecommerce/",
  "cat skills.txt": "go: ████████████ 92%\nrest-apis: █████████████ 95%\ngrpc: ███████████ 82%\ndocker: ███████████ 85%",
  "cat about.txt": "sole backend architect. distributed systems. 2 years. open to remote.",
  pwd: "/home/aastha/work",
  date: new Date().toDateString(),
  help: "available: whoami - ls projects - cat skills.txt - cat about.txt - pwd - date - clear",
  clear: "__CLEAR__",
};
