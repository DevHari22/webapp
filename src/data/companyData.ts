export interface Pillar {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  techStack: string[];
  codeSnippet?: string;
  spectrumColor: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  impact: { metric: string; label: string }[];
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const COMPANY_INFO = {
  name: "SPECTRUM 7",
  tagline: "Full-Spectrum Enterprise Digital & AI Engineering",
  heroDescription:
    "We architect, build, and scale mission-critical digital systems. Built on 7 core pillars of technological excellence — from high-scale cloud infrastructure to cognitive AI intelligence.",
  phone: "+1 (800) 773-2878",
  email: "hello@spectrum7.io",
  address: "700 Spectrum Way, Tech District, Suite 700",
  headquarters: "San Francisco, CA & Global Hubs",
  stats: [
    { value: "99.99%", label: "Platform Reliability SLA" },
    { value: "500+", label: "Enterprise Implementations" },
    { value: "7", label: "Core Technology Pillars" },
    { value: "$420M+", label: "Client Value Generated" },
  ],
};

export const PILLARS: Pillar[] = [
  {
    id: 1,
    slug: "cloud-devops",
    title: "Enterprise Cloud & DevOps",
    subtitle: "Hyperscale resilience, automated orchestration & zero-downtime deployments",
    badge: "Pillar 01",
    iconName: "Cloud",
    spectrumColor: "#0062ff",
    metrics: [
      { label: "Deployment Velocity", value: "14x Faster" },
      { label: "Infrastructure Cost", value: "-45% Reduction" },
    ],
    description:
      "Modernize legacy monoliths into elastic cloud-native architectures. We design multi-region Kubernetes clusters, automated GitOps pipelines, and resilient serverless ecosystems on AWS, GCP, and Azure.",
    deliverables: [
      "Multi-Cloud & Hybrid Cloud Infrastructure",
      "Terraform & Infrastructure-as-Code (IaC)",
      "Zero-Downtime CI/CD Blue/Green Deployments",
      "Cloud Cost Optimization & FinOps Auditing",
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "ArgoCD"],
    codeSnippet: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: spectrum-core-service
spec:
  replicas: 7
  strategy:
    type: RollingUpdate
  template:
    spec:
      containers:
      - name: engine
        image: spectrum7/core:v2.4
        resources:
          limits: { cpu: "4", memory: "8Gi" }`,
  },
  {
    id: 2,
    slug: "artificial-intelligence",
    title: "Applied AI & Cognitive Systems",
    subtitle: "Custom foundational models, multi-agent workflows & enterprise LLM pipelines",
    badge: "Pillar 02",
    iconName: "Cpu",
    spectrumColor: "#0052cc",
    metrics: [
      { label: "Inference Latency", value: "<85ms p99" },
      { label: "Decision Accuracy", value: "99.2%" },
    ],
    description:
      "Harness the transformative power of generative AI and deep learning. We build proprietary domain-specific fine-tuned models, autonomous multi-agent pipelines, and secure Retrieval-Augmented Generation (RAG) engines.",
    deliverables: [
      "Enterprise RAG & Private Knowledge Vector Stores",
      "Autonomous AI Agent Workflows & Task Orchestration",
      "Computer Vision & Multimodal Perception Engines",
      "MLOps Infrastructure & Continuous Model Evaluation",
    ],
    techStack: ["PyTorch", "Python", "LangChain", "OpenAI", "HuggingFace", "Milvus"],
    codeSnippet: `import { SpectrumAgent, VectorRetriever } from "@spectrum7/ai";

export const cognitivePipeline = new SpectrumAgent({
  model: "spectrum-gpt-7b-tuned",
  retriever: new VectorRetriever({ k: 5, hybrid: true }),
  guardrails: ["pii-filter", "factual-grounding"],
  temperature: 0.1
});`,
  },
  {
    id: 3,
    slug: "web-mobile-engineering",
    title: "Mission-Critical Web & Mobile",
    subtitle: "Ultra-fast modern web applications, distributed SPAs & fluid mobile experiences",
    badge: "Pillar 03",
    iconName: "Layers",
    spectrumColor: "#1d4ed8",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Global Edge Time", value: "<20ms TTFB" },
    ],
    description:
      "Craft bespoke digital experiences engineered for peak conversion and buttery 60fps performance. Using Next.js, TypeScript, and modern headless systems, we deliver digital products users love.",
    deliverables: [
      "Next.js App Router High-Speed Web Applications",
      "Cross-Platform iOS & Android React Native Apps",
      "Enterprise Design Systems & Micro-Frontends",
      "Global Edge Caching & Real-time WebSockets",
    ],
    techStack: ["Next.js", "React 19", "TypeScript", "React Native", "TailwindCSS", "Node.js"],
    codeSnippet: `export default async function SpectrumDashboard() {
  const telemetry = await getLiveTelemetry();
  return (
    <ResponsiveCanvas data={telemetry} refreshRate={60}>
      <RealTimePillarGraph view="spectral-3d" />
    </ResponsiveCanvas>
  );
}`,
  },
  {
    id: 4,
    slug: "cybersecurity-zero-trust",
    title: "Zero-Trust Cybersecurity & Governance",
    subtitle: "Defense-in-depth security, automated compliance & threat hunting",
    badge: "Pillar 04",
    iconName: "ShieldCheck",
    spectrumColor: "#0284c7",
    metrics: [
      { label: "Threat Mitigation", value: "100% Automated" },
      { label: "Compliance Standards", value: "SOC2 & ISO27001" },
    ],
    description:
      "Safeguard enterprise assets with cryptographic Zero-Trust architecture. We implement continuous vulnerability scanning, identity-aware proxies, strict data encryption at rest and in transit, and continuous compliance.",
    deliverables: [
      "Zero-Trust Network Access (ZTNA) Architecture",
      "Automated Penetration Testing & Vulnerability Scans",
      "Identity & Access Management (IAM / OAuth / SAML)",
      "Continuous SOC 2 Type II, HIPAA & GDPR Governance",
    ],
    techStack: ["Vault", "WAF", "OAuth2", "Okta", "Trivy", "KMS"],
    codeSnippet: `rule ZeroTrustEnforcement {
  condition:
    actor.device.posture == COMPLIANT &&
    actor.mfa == VERIFIED &&
    session.riskScore < 0.05
  action:
    grantScopedToken(ttl: 900)
}`,
  },
  {
    id: 5,
    slug: "data-intelligence",
    title: "Data Intelligence & Real-Time Streams",
    subtitle: "Petabyte-scale pipelines, stream analytics & unified data mesh",
    badge: "Pillar 05",
    iconName: "Database",
    spectrumColor: "#0891b2",
    metrics: [
      { label: "Event Throughput", value: "1.2M events/sec" },
      { label: "Query Acceleration", value: "8.5x Faster" },
    ],
    description:
      "Transform raw enterprise data into instant competitive advantage. We architect real-time event streaming, modern lakehouses, and interactive executive BI dashboards with sub-second analytical query speeds.",
    deliverables: [
      "Kafka & ClickHouse Real-Time Event Telemetry",
      "Modern Data Lakehouse (Snowflake, Databricks, BigQuery)",
      "dbt Automated Data Transformation Pipelines",
      "Interactive Executive BI & Operational Analytics",
    ],
    techStack: ["Kafka", "ClickHouse", "Snowflake", "Databricks", "dbt", "PostgreSQL"],
    codeSnippet: `SELECT 
  tenant_id,
  toStartOfMinute(timestamp) AS window_time,
  count() AS ops_processed,
  quantile(0.99)(latency_ms) AS p99_latency
FROM events_stream
WHERE timestamp >= now() - INTERVAL 1 HOUR
GROUP BY tenant_id, window_time ORDER BY window_time DESC;`,
  },
  {
    id: 6,
    slug: "iot-edge-systems",
    title: "IoT, Edge Systems & Embedded Tech",
    subtitle: "Low-latency distributed hardware communication & edge computing",
    badge: "Pillar 06",
    iconName: "Radio",
    spectrumColor: "#0d9488",
    metrics: [
      { label: "Edge Response", value: "<5ms Latency" },
      { label: "Active Nodes", value: "2M+ Monitored" },
    ],
    description:
      "Bridge the physical and digital realms. From industrial sensor telemetry to distributed edge gateway inference, we develop robust firmware, MQTT messaging layers, and automated remote device management systems.",
    deliverables: [
      "Edge AI Inference on Embedded Devices",
      "Industrial IoT (IIoT) Sensors & MQTT Telemetry",
      "Over-The-Air (OTA) Secure Firmware Updates",
      "Fleet Monitoring & Predictive Maintenance Alarms",
    ],
    techStack: ["Rust", "C++", "MQTT", "WebSockets", "Go", "InfluxDB"],
    codeSnippet: `async fn process_edge_telemetry(payload: &[u8]) -> Result<TelemetryPacket, Error> {
    let packet = TelemetryPacket::parse_compact(payload)?;
    if packet.anomaly_score > 0.85 {
        dispatch_local_failover().await?;
    }
    Ok(packet)
}`,
  },
  {
    id: 7,
    slug: "experience-product-strategy",
    title: "Digital Experience & Product Strategy",
    subtitle: "User-centric design systems, rapid prototyping & digital transformation consulting",
    badge: "Pillar 07",
    iconName: "Compass",
    spectrumColor: "#2563eb",
    metrics: [
      { label: "Adoption Rate", value: "+78% Growth" },
      { label: "Customer CSAT", value: "98.4%" },
    ],
    description:
      "Technology is only as powerful as the humans who use it. We combine rigorous product discovery, sleek design craftsmanship, and data-driven user testing to turn complex enterprise workflows into intuitive tools.",
    deliverables: [
      "Enterprise Product Discovery & Strategy Roadmaps",
      "Comprehensive Figma Design Systems & Token Systems",
      "Rapid Prototype Validation & Usability Testing",
      "Conversion Rate Optimization (CRO) & User Onboarding",
    ],
    techStack: ["Figma", "Design Tokens", "Storybook", "UserTesting", "Mixpanel"],
    codeSnippet: `const spectrumDesignTokens = {
  colors: {
    primary: "#0062ff",
    carbon: "#090d16",
    spectrum: "linear-gradient(90deg, #2563eb, #06b6d4, #10b981, #f59e0b, #ef4444)"
  },
  elevation: { glow: "0 8px 32px rgba(0, 98, 255, 0.15)" }
};`,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-cloud",
    client: "Apex Financial Core",
    industry: "Fintech & Banking",
    title: "Scalable Multi-Cloud Banking Infrastructure for 12M Active Accounts",
    challenge:
      "Legacy mainframe systems struggled under peak market opening volatility, causing transaction bottlenecks and exorbitant cloud licensing fees.",
    solution:
      "Spectrum 7 designed an active-active Kubernetes multi-region architecture paired with real-time Kafka event sourcing and automated zero-downtime failover.",
    impact: [
      { metric: "99.999%", label: "System Availability" },
      { metric: "65%", label: "Infrastructure Cost Cut" },
      { metric: "15ms", label: "End-to-End Latency" },
    ],
    image: "/cloud-security.jpg",
    tags: ["Cloud Architecture", "Zero Downtime", "FinOps", "Kubernetes"],
  },
  {
    id: "healthtech-ai",
    client: "NeuroGen Diagnostics",
    industry: "Healthcare & Life Sciences",
    title: "Sub-Second Diagnostic AI Inference Engine with Strict HIPAA Isolation",
    challenge:
      "Radiologists experienced 45-minute processing delays when running 3D tomography image scans through cloud-based neural networks.",
    solution:
      "Built custom localized GPU edge inference pipelines with private vector search and cryptographic patient data air-gapping.",
    impact: [
      { metric: "350ms", label: "Scan Analysis Time" },
      { metric: "99.4%", label: "Diagnostic Concurrence" },
      { metric: "100%", label: "HIPAA & SOC 2 Compliance" },
    ],
    image: "/ai-platform.jpg",
    tags: ["Applied AI", "Edge Computing", "Healthcare", "Security"],
  },
  {
    id: "logistics-iot",
    client: "AeroTrans Logistics",
    industry: "Global Supply Chain",
    title: "Real-Time Telemetry & Predictive Routing for 2,500,000 Global Cargo Units",
    challenge:
      "Lack of granular GPS, temperature, and shock sensor data resulted in $18M in spoiled perishable shipments annually.",
    solution:
      "Deployed an end-to-end IoT sensor ingestion network with ClickHouse streaming analytics and an intuitive Next.js dispatch cockpit.",
    impact: [
      { metric: "92%", label: "Reduction in Cargo Loss" },
      { metric: "2.5M", label: "Tracked Assets in Real-Time" },
      { metric: "$24M", label: "First-Year Net Savings" },
    ],
    image: "/hero-spectrum.jpg",
    tags: ["IoT & Edge", "Data Streaming", "Next.js", "Analytics"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Spectrum 7 completely modernized our core cloud infrastructure. Their 7-pillar methodology gave us clear milestones and unprecedented engineering velocity. They are in a league of their own.",
    author: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "Vanguard Global Commerce",
    avatar: "ER",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The AI and data intelligence models developed by Spectrum 7 cut our loan processing latency from 4 hours to 18 seconds while maintaining strict regulatory compliance. Exceptional partner.",
    author: "Marcus Chen",
    role: "Head of Digital Innovation",
    company: "Ascent Capital Partners",
    avatar: "MC",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "From user experience design to extreme backend reliability, Spectrum 7 delivered a world-class platform that handled 5x our Black Friday traffic without a single hiccup.",
    author: "Sarah Lindqvist",
    role: "VP of Engineering",
    company: "Nordic Omnichannel Retail",
    avatar: "SL",
    rating: 5,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "What makes Spectrum 7's 7 Pillars approach unique?",
    answer:
      "Most agencies specialize in only design or only cloud infrastructure. Spectrum 7 unites all 7 critical dimensions of modern enterprise tech: Cloud, AI, Web/Mobile, Security, Data, IoT, and Experience Strategy. This eliminates vendor silos and guarantees end-to-end architectural coherence.",
  },
  {
    category: "Engagement",
    question: "How quickly can a Spectrum 7 engineering pod be deployed?",
    answer:
      "Our dedicated enterprise pods can typically be mobilized within 10 to 14 business days following our initial architectural discovery session and scoping review.",
  },
  {
    category: "Security",
    question: "How do you ensure data security and compliance?",
    answer:
      "Security is Pillar 04 of our core foundation. We comply with SOC 2 Type II, ISO 27001, GDPR, and HIPAA standards. We operate on Zero-Trust principles with encrypted data pipelines and client-owned IP rights.",
  },
  {
    category: "Technology",
    question: "Can Spectrum 7 modernize our existing legacy software?",
    answer:
      "Yes. We specialize in incremental 'strangler fig' patterns that migrate mission-critical legacy monoliths into cloud-native microservices and modern Next.js frontends with zero customer downtime.",
  },
  {
    category: "Pricing & Scope",
    question: "What are your engagement models?",
    answer:
      "We offer three structured models: Dedicated Engineering Pods (cross-functional sprint teams), Fixed-Scope Modernization Deliverables, and Strategic Architecture Advisory retainers.",
  },
];
