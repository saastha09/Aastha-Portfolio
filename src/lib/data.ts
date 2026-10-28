import { withBasePath } from "./base-path";

export const personal = {
  name: "Aastha Sharma",
  role: "Backend Engineer",
  email: "saastha.2911@gmail.com",
  phone: "+91 7296836197",
  location: "Bangalore, India",
  github: "https://github.com/saastha09",
  linkedin: "https://linkedin.com/in/aastha-sharma-906a2720a",
  cal: "https://cal.com/aastha-sharma-bjlgi7/15min",
  resumeUrl: withBasePath("/Aastha_Sharma_Resume.pdf"),
  photoUrl: withBasePath("/photo.jpg"),
  tagline: "Backend-first Go engineer working across the app, Linux, network and device boundaries.",
  heroTypewriterRoles: [
    "Golang Backend Engineer",
    "Distributed Systems Builder",
    "Sole Backend Owner, 100+ Devices",
    "Embedded Linux & OTA",
  ],
  openTo: ["Bangalore", "Remote", "Open to relocation"],
};

export const heroStats = [
  { value: "2.6 yrs", label: "production Go" },
  { value: "100+", label: "devices in production" },
  { value: "4", label: "partner integrations" },
];

export const aboutParagraphs = [
  "I'm a backend engineer with 2.6 years of building production services in Go across REST, gRPC and GraphQL, with working knowledge of Python (FastAPI) and Node.js.",
  "At In Time Tec I'm the sole backend and infrastructure engineer on a 6-person team. I own service architecture, real-time device communication, AWS infrastructure and CI/CD for Lightspeed, a live announcement and device-orchestration platform running on 100+ networked devices.",
  "That job taught me to debug across layers: firmware, Linux networking, NGINX, Go services and the database. I also customise embedded Linux images with Yocto/BitBake and run OTA rollouts with Mender, a combination that is rare on a backend team.",
  "Outside work I build systems from first principles to understand them properly: a Kubernetes operator, a durable workflow engine, a RAG platform, an LLM gateway and a double-entry ledger. They are in the lab section below.",
];

export const experiences = [
  {
    id: "intimetec",
    company: "In Time Tec",
    role: "Software Engineer, Golang",
    period: "Jul 2025 – Present",
    location: "Bangalore, India",
    summary:
      "Sole backend and infrastructure engineer on a 6-person team building Lightspeed, a distributed announcement and device-orchestration platform for 100+ embedded devices.",
    bullets: [
      "Own architecture decisions independently; the only engineer with end-to-end context across service architecture, cloud infra, CI and embedded deployment.",
      "Built Go services for real-time heartbeat and config sync across a 100+ device production fleet (validated in a 5-device local test environment), SIP call workflows (full INVITE lifecycle) and emergency event routing across 4 partner integrations (Singlewire, Rauland, Raptor, Bogen).",
      "Engineered a multicast audio pipeline with priority-based preemption and jitter-buffer tuning, cutting audible latency and drift on campus-wide announcements.",
      "Customised embedded Linux firmware via Yocto/BitBake; managed Mender OTA rollout and DHCP/device-identifier configuration across 100+ production hardware deployments.",
      "Deployed and run services on AWS (EC2, S3); set up GitHub Actions pipelines for build, test and deployment, and wrote Terraform to provision AWS infrastructure repeatably.",
    ],
    stack: ["Go", "SIP", "Multicast", "Yocto", "Mender OTA", "Linux", "NGINX", "AWS", "Terraform", "GitHub Actions", "LDAP"],
  },
  {
    id: "cyberinfra",
    company: "Cyber Infrastructure",
    role: "Junior Software Developer",
    period: "Apr 2024 – May 2025",
    location: "Indore, India",
    summary:
      "Designed and shipped APIs across a 4-service Go + Node.js microservices platform (Younified) on a 10-person cross-functional team.",
    bullets: [
      "Designed and shipped REST, gRPC and GraphQL APIs across a 4-service microservices architecture through the full project lifecycle.",
      "Implemented Redis caching on high-traffic endpoints, cutting p95 query latency and reducing database load.",
      "Built RBAC authorization with Casbin and Google OAuth integration; delivered real-time notification workflows end to end.",
    ],
    stack: ["Go", "Node.js", "gRPC", "GraphQL", "REST", "Redis", "Casbin", "Google OAuth"],
  },
];

export const lightspeed = {
  name: "Lightspeed",
  description:
    "Distributed school-announcement and device-orchestration platform managing 100+ embedded C25 units. Multicast audio pipeline with priority-based preemption and file-based buffering, SIP call handling, and emergency event routing from 4 partner systems. Also a device-management web app (LDAP auth, factory reset, dual-IP conflict prevention) and a district-level control app for multi-school visibility.",
  stack: ["Go", "SIP", "Multicast", "Yocto", "Mender OTA", "AWS", "NGINX", "Linux", "LDAP"],
  stats: [
    { value: "100+", label: "devices in production", color: "#3B82F6" },
    { value: "4", label: "partner integrations", color: "#06B6D4" },
    { value: "1", label: "backend engineer (me)", color: "#22C55E" },
  ],
};

export type ProjectGroup = "work" | "independent" | "products" | "academic";

export const projectGroups: { id: ProjectGroup | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "work", label: "At work" },
  { id: "independent", label: "Independent builds" },
  { id: "products", label: "Products I use daily" },
  { id: "academic", label: "Academic" },
];

export type Project = {
  id: string;
  name: string;
  type: string;
  group: ProjectGroup;
  description: string;
  longDescription: string;
  stack: string[];
  github: string | null;
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    id: "younified",
    name: "Younified",
    type: "Production · Cyber Infrastructure",
    group: "work",
    description: "4-service distributed backend with gRPC between services and GraphQL for clients.",
    longDescription:
      "Go + Node.js services (User, Union, Communication and more). gRPC internally, GraphQL and REST externally, Redis on hot paths, Casbin RBAC with Google OAuth, and real-time notifications.",
    stack: ["Go", "Node.js", "gRPC", "GraphQL", "Redis"],
    github: null,
  },
  {
    id: "jobagent",
    name: "Job-Search Agent",
    type: "Personal product · Automation",
    group: "products",
    description: "A local pipeline that discovers roles, scores fit, tailors a fact-checked résumé and tracks every application.",
    longDescription:
      "Discovers openings across 212 company career boards, de-duplicates them and scores each on a transparent 100-point fit model. Tailors a résumé per job and fact-checks it against the master so nothing untrue is claimed. Nothing is sent without my approval; a scheduler runs referral asks and follow-ups. Playwright workers, SQLite tracker, daily reports.",
    stack: ["TypeScript", "Next.js", "Playwright", "SQLite", "Drizzle", "Python"],
    github: null,
  },
  {
    id: "nekodesk",
    name: "NekoDesk",
    type: "Personal product · Desktop + AI",
    group: "products",
    description: "An anime-inspired desktop companion that plans your day, runs a focus timer and reminds you about things.",
    longDescription:
      "Always-on-top Electron app with tasks, reminders, inbox, focus timer and daily review. Natural-language task entry and Claude-powered planning chat, with an offline assistant when the API is unreachable. Local-first data, unit and end-to-end tests, packaged macOS build.",
    stack: ["Electron", "TypeScript", "Preact", "Claude API", "Vitest"],
    github: null,
    image: { src: withBasePath("/work/nekodesk-panel-today.jpg"), alt: "NekoDesk Today panel with tasks and reminders" },
  },
  {
    id: "video-agent",
    name: "Video Agent",
    type: "Personal tool · Generative AI",
    group: "products",
    description: "Turns a text prompt into a short MP4, with free and paid generation backends behind one command.",
    longDescription:
      "One Python CLI with pluggable backends: a free path that animates AI stills into video, Pollinations text-to-video, and fal-hosted models. Defaults to the free backend and saves every video with its prompt and settings.",
    stack: ["Python", "Pollinations", "fal.ai", "FFmpeg"],
    github: null,
    image: { src: withBasePath("/work/video-agent-frame.jpg"), alt: "Frame from a generated video of a dog on a beach at sunset" },
  },
  {
    id: "wansafar",
    name: "Wansafar",
    type: "Independent",
    group: "independent",
    description: "Safari-booking platform built from scratch as the sole engineer.",
    longDescription:
      "REST APIs in Go for bookings and resource management, schema design, Google OAuth sign-in and Casbin-based RBAC so customers, staff and admins each see only what they should.",
    stack: ["Go", "REST", "MySQL", "Google OAuth", "Casbin"],
    github: null,
  },
  {
    id: "rightastra",
    name: "RightAstra",
    type: "Independent · 4-person team",
    group: "independent",
    description: "Trading SaaS where creators publish strategies and subscribers follow verified results.",
    longDescription:
      "Owned three modules end to end: creator marketplace and studio, trading journal and portfolio, and the verified-P&L trust layer. FastAPI backend with parameterised SQL and JWT validation; React front-end; Razorpay KYC onboarding with a safe fallback path.",
    stack: ["Python", "FastAPI", "SQL", "React", "Razorpay"],
    github: null,
  },
  {
    id: "ekksaath",
    name: "Ekksaath Super App",
    type: "Independent · Backend",
    group: "independent",
    description: "Backend foundation for a multi-service app: delivery, bookings and home services.",
    longDescription:
      "OTP and Google login, JWT sessions and role-based access, a wallet and referral system, Razorpay payments, Twilio SMS and S3 file storage. Node.js, Express, Sequelize on MySQL, Redis for OTPs and sessions.",
    stack: ["Node.js", "Express", "MySQL", "Redis", "AWS S3"],
    github: null,
  },
  {
    id: "edurik",
    name: "Edurik",
    type: "Independent · Website + CMS",
    group: "independent",
    description: "A company website with its own admin panel for blogs, services and enquiries.",
    longDescription:
      "Public site with services, blog and contact pages; admin with JWT login, dashboard, rich-text blog editor, image uploads and an enquiry inbox with Excel export. React + Vite front-end, Express + MongoDB API.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    github: null,
  },
  {
    id: "law-learning",
    name: "Law Learning App",
    type: "Independent · Mobile",
    group: "independent",
    description: "A Flutter app for law students: courses, quizzes, tests, competitions and internships.",
    longDescription:
      "Flutter screens for courses, blogs, quizzes with results and review, and beginner-to-advanced tests, plus competitions, internships, jobs and mentors. Node.js auth API with JWT, email, rate limiting and secure headers.",
    stack: ["Flutter", "Dart", "Node.js", "MongoDB", "JWT"],
    github: null,
  },
  {
    id: "health-app",
    name: "Health & Wellness API",
    type: "Independent · Backend",
    group: "independent",
    description: "Async API for a women's health app: cycle tracking, doctors, articles, a shop and an admin.",
    longDescription: "FastAPI with async MongoDB (Motor): cycle and activity tracking, doctor directory, articles, product shop, admin routes and image uploads.",
    stack: ["Python", "FastAPI", "MongoDB"],
    github: null,
  },
  {
    id: "botanicsight",
    name: "BotanicSight",
    type: "Academic · Machine learning",
    group: "academic",
    description: "Identifies medicinal plants from a photo with a trained image classifier.",
    longDescription:
      "Keras/TensorFlow image classifier trained on plant photos, served through a Flask API that returns the predicted species, with a simple upload page and a TensorFlow.js variant for in-browser inference.",
    stack: ["Python", "TensorFlow", "Keras", "Flask"],
    github: "https://github.com/saastha09/BotanicSightMajor",
  },
];

export type LabProject = {
  id: string;
  name: string;
  pitch: string;
  points: string[];
  stack: string[];
  status: string;
  statusTone: "green" | "amber";
  github?: string;
};

// Personal systems projects. Status lines mirror each repo's README; keep them honest.
export const labProjects: LabProject[] = [
  {
    id: "kubeguard",
    name: "KubeGuard",
    pitch: "Kubernetes reliability operator that diagnoses unhealthy workloads and proposes human-approved fixes.",
    points: [
      "client-go informers, rate-limited work queue, leader election and graceful drain",
      "Detects crash loops, OOMKills, probe failures, image-pull errors and stuck rollouts, with evidence-backed diagnosis",
      "Policy-gated restart/rollback via a RemediationAction CRD; approvals enforced by ValidatingAdmissionPolicy",
      "Prometheus metrics and OpenTelemetry traces; least-privilege RBAC verified live",
    ],
    stack: ["Go", "Kubernetes", "client-go", "CRDs", "Prometheus", "OpenTelemetry", "Helm"],
    status: "Working · tested against a real kube-apiserver (KWOK)",
    statusTone: "green",
  },
  {
    id: "shipyard",
    name: "Shipyard",
    pitch: "Internal developer platform: pick a template, push code, get a policy-checked path from dev to prod.",
    points: [
      "CI never holds cluster credentials; GitHub Actions authenticates with its short-lived OIDC token",
      "CEL policy enforced in the API and again in-cluster with ValidatingAdmissionPolicy",
      "Prod requires a signed, digest-pinned build from main that passed staging, plus a second approver",
      "Automatic rollback of unhealthy rollouts and an append-only audit log",
    ],
    stack: ["Go", "Kubernetes", "Helm", "CEL", "OIDC", "Terraform", "kind"],
    status: "Working · local simulator + kind end-to-end test",
    statusTone: "green",
  },
  {
    id: "llmgate",
    name: "llmgate",
    pitch: "LLM gateway that accepts OpenAI- or Anthropic-format requests and routes them to any provider.",
    points: [
      "Decodes either wire format and adapts requests between providers",
      "Streams responses over Server-Sent Events through a relay that records what it observed",
      "Structured logging, telemetry and graceful shutdown; mock provider for tests",
    ],
    stack: ["Go", "SSE", "OpenAI API", "Anthropic API", "OpenTelemetry"],
    status: "Working core · streaming relay tested",
    statusTone: "green",
  },
  {
    id: "askdocs",
    name: "askdocs",
    pitch: "Multi-tenant RAG platform being built to answer questions over documents with citations. Ingestion and chunking work today.",
    points: [
      "Postgres + pgvector, content-addressed blob store, SKIP LOCKED job queue with leases",
      "Upload, web and GitHub connectors behind an SSRF-safe HTTP client",
      "Embedding cache by content hash; OTLP tracing with Jaeger, Prometheus and Grafana",
    ],
    stack: ["Go", "PostgreSQL", "pgvector", "Docker", "Prometheus", "Grafana"],
    status: "In progress · milestone 1 (ingestion + chunking)",
    statusTone: "amber",
  },
  {
    id: "flowd",
    name: "flowd",
    pitch: "Durable workflow execution engine in Go, inspired by Temporal and Cadence.",
    points: [
      "Event-history model with persistence as the source of truth",
      "Planned: task queues, deterministic replay, retries, durable timers, signals and sharding",
    ],
    stack: ["Go", "PostgreSQL", "Docker"],
    status: "In progress · milestone 1 of 8",
    statusTone: "amber",
    github: "https://github.com/saastha09/flowd",
  },
  {
    id: "ledgerd",
    name: "ledgerd",
    pitch: "Double-entry ledger service where money only ever moves between accounts.",
    points: [
      "Signed postings must sum to zero per currency before an entry is stored",
      "Amounts as int64 minor units per ISO 4217 currency; no floats anywhere",
      "Postgres store with migrations, deferred-trigger checks and invariant queries",
    ],
    stack: ["Go", "PostgreSQL"],
    status: "Early · domain model and store tested",
    statusTone: "amber",
  },
  {
    id: "xchange",
    name: "xchange",
    pitch: "Mini crypto exchange, built to learn exchange internals in depth.",
    points: [
      "Single-threaded in-memory order book with price-time-priority matching",
      "Planned: Spring Boot platform (ledger, market data), risk service and a React trading UI",
    ],
    stack: ["Java 21", "Gradle"],
    status: "In progress · matching engine",
    statusTone: "amber",
  },
  {
    id: "cowrite",
    name: "cowrite",
    pitch: "Real-time collaborative document editing over WebSockets.",
    points: [
      "One room per document assigns sequence numbers and fans ops out to every editor",
      "Idempotent submits make re-sending after a reconnect safe; clients catch up from the log",
      "Slow consumers are dropped instead of stalling writers; integration-tested over a real socket",
    ],
    stack: ["Java", "Spring Boot", "WebSockets"],
    status: "Early · sync server",
    statusTone: "amber",
  },
];

export const skills = [
  { category: "Languages", items: ["Go (primary)", "Python (FastAPI)", "JavaScript / Node.js", "SQL", "Bash"] },
  { category: "APIs & architecture", items: ["REST", "gRPC", "GraphQL", "Microservices", "Event-driven systems", "SIP", "Concurrency (goroutines)"] },
  { category: "Data", items: ["PostgreSQL", "MySQL / MariaDB", "MongoDB", "Redis", "Data modeling"] },
  { category: "Cloud & infra", items: ["AWS (EC2, S3)", "Terraform", "Docker", "NGINX", "Linux", "GitHub Actions CI/CD"] },
  { category: "Embedded & networking", items: ["Yocto / BitBake", "Mender OTA", "Embedded Linux", "STM32", "DHCP", "Multicast"] },
  { category: "Auth & practice", items: ["Casbin RBAC", "Google OAuth", "LDAP", "System design", "Code review", "Production debugging"] },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Acropolis Institute of Technology and Research, Indore",
  detail: "CGPA 8.46 · 2024",
};

export const certifications = [
  { title: "Data Science & ML", issuer: "Edureka", detail: "4-month internship program", icon: "brain" },
  { title: "Java Full Stack", issuer: "Wipro", detail: "Spring, Hibernate · 3 months", icon: "layers" },
  { title: "5-Star Problem Solving", issuer: "HackerRank", detail: "Data structures & algorithms", icon: "star" },
];

export const currentlyLearning = [
  "kubernetes controllers & operators -> kubeguard",
  "durable execution & deterministic replay -> flowd",
  "retrieval, reranking & evals for RAG -> askdocs",
  "order books & matching engines -> xchange",
];

export const terminalCommands: Record<string, string> = {
  whoami: "aastha sharma - golang backend engineer - bangalore, india",
  "ls projects": "lightspeed/  younified/  job-agent/  nekodesk/  video-agent/  wansafar/  rightastra/  ekksaath/  edurik/  ...",
  "ls lab": "kubeguard/  shipyard/  llmgate/  askdocs/  flowd/  ledgerd/  xchange/  cowrite/",
  "cat stack.txt": "go · grpc · graphql · postgres · redis · aws · terraform · docker · yocto · mender",
  "cat about.txt": "sole backend + infra owner. 100+ device fleet. 2.6 yrs of production go.",
  pwd: "/home/aastha/work",
  date: new Date().toDateString(),
  help: "available: whoami - ls projects - ls lab - cat stack.txt - cat about.txt - pwd - date - clear",
  clear: "__CLEAR__",
};
