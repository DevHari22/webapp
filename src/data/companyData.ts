export interface Capability {
  id: string;
  num: string;
  title: string;
  headline: string;
  description: string;
  iconName: string;
  focusAreas: string[];
  technologies: string[];
  metrics: { value: string; label: string }[];
  deliverables: string[];
}

export interface Industry {
  id: string;
  name: string;
  headline: string;
  description: string;
  keyEnablers: string[];
  impactMetric: { value: string; label: string };
  caseStudyRef: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientIndustry: string;
  category: string;
  date: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { value: string; label: string }[];
  image: string;
  tags: string[];
}

export const COMPANY_DETAILS = {
  name: "SPECTRUM 7",
  legalName: "Spectrum 7 Technologies Inc.",
  tagline: "Engineering Intelligent Systems for Connected Enterprises",
  subheadline:
    "We help global organisations modernise their core, connect fragmented systems, and embed AI and automation where they create real, measurable value.",
  ethosHeadline: "Engineering possibility. Designing clarity into complexity.",
  ethosDescription:
    "We build systems that turn ambition into measurable progress. Founded on the belief that clarity and engineering discipline can simplify even the most complex transformations, Spectrum 7 brings precision, intent, and long-term resilience to every engagement.",
  certifications: [
    "ISO/IEC 27001:2022 Certified",
    "Boomi Partner Innovation Award Winner",
    "UiPath Automation Partner of the Year",
    "SOC 2 Type II Audited",
  ],
  locations: [
    { city: "San Francisco", role: "Global Headquarters", address: "700 Spectrum Way, Tech District, CA" },
    { city: "London", role: "EMEA Regional Office", address: "100 Bishopsgate, London EC2N 4AG, UK" },
    { city: "Dubai", role: "MENA Innovation Hub", address: "DIFC Gate Precinct 4, Dubai, UAE" },
    { city: "Singapore", role: "APAC Operations", address: "Marina Bay Financial Centre, Singapore" },
    { city: "Bangalore", role: "Engineering & Delivery Center", address: "Outer Ring Road, Bellandur, Bangalore" },
  ],
  contact: {
    email: "sales@spectrum7.io",
    generalEmail: "hello@spectrum7.io",
    phone: "+1 (800) 773-2878",
  },
  stats: [
    { value: "40%", label: "Faster transformation cycles", detail: "Accelerated delivery through reusable frameworks and domain-aligned engineering." },
    { value: "65%", label: "Reduction in bottlenecks", detail: "Streamlined processes across banking, insurance, and manufacturing." },
    { value: "95%+", label: "Adoption of modernised platforms", detail: "High user adoption ensuring transformations translate into real business value." },
    { value: "10+", label: "Years of engineering excellence", detail: "Delivering enterprise scale across international markets." },
  ],
};

export const CAPABILITIES: Capability[] = [
  {
    id: "ai-data",
    num: "01",
    title: "AI & Data Intelligence",
    headline: "Turning complex data into clear, actionable intelligence.",
    description:
      "We design and build modern data platforms and intelligent systems that help organisations make confident, real-time decisions. From data warehousing and lakehouses to predictive analytics and cognitive models, we turn fragmented information into strategic advantage.",
    iconName: "Database",
    focusAreas: [
      "Modern Data Lakehouses & Unified Warehousing",
      "Real-Time Stream Processing & Analytics",
      "Predictive Analytics & Forecasting Models",
      "Data Governance, Lineage & Quality Engineering",
    ],
    technologies: ["Snowflake", "Databricks", "ClickHouse", "dbt", "Apache Kafka", "PostgreSQL"],
    metrics: [
      { value: "10x", label: "Query Performance Acceleration" },
      { value: "99.4%", label: "Data Quality & Lineage Integrity" },
    ],
    deliverables: [
      "Enterprise Data Mesh Architecture",
      "Automated ETL/ELT Streaming Pipelines",
      "Executive Cockpit & Interactive BI Dashboards",
      "Regulatory & Compliance Reporting Systems",
    ],
  },
  {
    id: "integration",
    num: "02",
    title: "Enterprise Integration Services",
    headline: "Connecting systems to unlock seamless, intelligent operations.",
    description:
      "Fragmented architectures throttle enterprise agility. We design secure, scalable integration frameworks that unify cloud applications, on-premises legacy mainframes, ERPs, and third-party partners into an synchronized digital ecosystem.",
    iconName: "Share2",
    focusAreas: [
      "iPaaS Implementation & Architecture (Boomi, MuleSoft)",
      "Hybrid & Multi-Cloud API Gateway Management",
      "Event-Driven Architecture & Message Queues",
      "Legacy Core & Monolith Modernization",
    ],
    technologies: ["Boomi", "MuleSoft", "Kafka", "AWS EventBridge", "REST/GraphQL", "RabbitMQ"],
    metrics: [
      { value: "85%", label: "System Interoperability Increase" },
      { value: "<25ms", label: "Cross-System Message Latency" },
    ],
    deliverables: [
      "Universal Enterprise Service Bus (ESB) Modernization",
      "Secure B2B & EDI Partner Integration Gateways",
      "Real-time Bi-directional Data Synchronization",
      "Automated Error Handling & Dead-Letter Queue Monitoring",
    ],
  },
  {
    id: "automation",
    num: "03",
    title: "Hyper Automation & RPA",
    headline: "Automating at scale to accelerate speed, accuracy, and efficiency.",
    description:
      "We help enterprises eliminate repetitive manual workflows through end-to-end intelligent automation. Combining Robotic Process Automation (RPA), intelligent document processing, and cognitive decision trees, we unlock exponential productivity gains.",
    iconName: "Zap",
    focusAreas: [
      "Robotic Process Automation (UiPath Partner of the Year)",
      "Intelligent Document Processing (IDP) & OCR",
      "Process Mining & Bottleneck Discovery",
      "Human-in-the-Loop Automated Workflows",
    ],
    technologies: ["UiPath", "Power Automate", "ABBYY", "Python", "Celonis", "OpenAI IDP"],
    metrics: [
      { value: "70%", label: "Manual Effort Reduction" },
      { value: "99.8%", label: "Processing Accuracy" },
    ],
    deliverables: [
      "Automated Invoice & Claims Ingestion",
      "Employee Onboarding & HR Service Bots",
      "Continuous Compliance & Audit Automation",
      "Process Mining Telemetry Dashboard",
    ],
  },
  {
    id: "artificial-intelligence",
    num: "04",
    title: "Artificial Intelligence & LLMs",
    headline: "Engineering intelligent systems that learn, adapt, and scale.",
    description:
      "Beyond experiments, we operationalize AI inside core business processes. We engineer custom domain-specific generative AI agents, retrieval-augmented generation (RAG) vector pipelines, and autonomous workflow orchestrators with strict enterprise guardrails.",
    iconName: "Cpu",
    focusAreas: [
      "Enterprise RAG & Private Vector Knowledge Bases",
      "Autonomous Multi-Agent Systems & Copilots",
      "Computer Vision & Edge Perception",
      "Enterprise LLM Governance & PII Redaction",
    ],
    technologies: ["PyTorch", "LangChain", "OpenAI", "Milvus", "HuggingFace", "Python"],
    metrics: [
      { value: "<100ms", label: "Inference Latency" },
      { value: "Zero", label: "PII or Private Data Leakage" },
    ],
    deliverables: [
      "Private Enterprise Knowledge Copilot",
      "Automated Customer Intent & Routing Engine",
      "Domain-Fine-Tuned Neural Models",
      "Model Evaluation & MLOps Pipelines",
    ],
  },
  {
    id: "application-services",
    num: "05",
    title: "Application Modernization",
    headline: "Building modern, scalable applications for the enterprise.",
    description:
      "We design, re-platform, and engineer high-performance web and mobile applications using cloud-native microservices, Next.js, and distributed serverless infrastructure designed for extreme availability and frictionless user experiences.",
    iconName: "Layers",
    focusAreas: [
      "Modern Next.js & React Enterprise Frontends",
      "Microservices & Kubernetes Orchestration",
      "Cloud Migration & Cloud-Native Re-platforming",
      "Zero-Downtime Blue/Green Deployments",
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Node.js", "Kubernetes", "AWS/Azure"],
    metrics: [
      { value: "99.99%", label: "Availability SLA" },
      { value: "3x", label: "Faster Feature Release Cycles" },
    ],
    deliverables: [
      "High-Speed Web Portals & Customer Cockpits",
      "Micro-Frontend Architecture",
      "Automated GitOps CI/CD Pipelines",
      "Serverless Edge Computing Deployments",
    ],
  },
  {
    id: "digital-consulting",
    num: "06",
    title: "Digital Consulting & Strategy",
    headline: "Aligning digital strategy with business ambition.",
    description:
      "Technology without strategic clarity leads to wasted capital. Our consultants work directly with boardrooms and engineering leaders to audit legacy tech debt, architect future-ready roadmaps, and structure high-velocity execution pods.",
    iconName: "Compass",
    focusAreas: [
      "Enterprise Architecture Discovery & Roadmapping",
      "Cloud FinOps & Infrastructure Cost Optimization",
      "Technology Due Diligence & Vendor Evaluation",
      "Operating Model & Agile Pod Structuring",
    ],
    technologies: ["Enterprise Architecture", "FinOps", "TOGAF", "Agile Pods", "ISO 27001"],
    metrics: [
      { value: "-45%", label: "Average Cloud Run Cost Reduction" },
      { value: "100%", label: "Deliverable Milestone Success" },
    ],
    deliverables: [
      "3-Year Digital Modernization Blueprint",
      "Cloud Cost & Architecture Audit Report",
      "Security & Compliance Governance Framework",
      "Executive Technology Advisory Board Sessions",
    ],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "banking",
    name: "Banking & Financial Services",
    headline: "Driving secure, data-driven transformation across banking, payments, and lending.",
    description:
      "We help financial institutions modernize core ledgers, automate loan underwriting, streamline KYC/AML workflows, and build high-speed neo-banking digital channels with strict regulatory compliance.",
    keyEnablers: [
      "Digital Core Neo-Banking Architecture",
      "Automated Regulatory Risk & AML Compliance",
      "Real-Time Fraud Detection & Scoring Engines",
      "High-Concurrency Microservices Payment Gateways",
    ],
    impactMetric: { value: "99.999%", label: "Uptime on transaction ledgers" },
    caseStudyRef: "neobank",
  },
  {
    id: "insurance",
    name: "Insurance",
    headline: "Modernizing policy administration, underwriting, and claims processing.",
    description:
      "From legacy claims re-engineering to real-time customer portals, we enable insurers to automate claims adjudication, extract unstructured policy data, and deliver customer-centric experiences.",
    keyEnablers: [
      "Intelligent Claims Ingestion & Automated Triage",
      "Algorithmic Risk Scoring & Underwriting Automation",
      "Self-Service Policyholder Digital Cockpits",
      "Legacy Core System API Modernization",
    ],
    impactMetric: { value: "75%", label: "Reduction in claims cycle time" },
    caseStudyRef: "cpg-data",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    headline: "Connecting fragmented supply chain networks for end-to-end visibility.",
    description:
      "We integrate distributed ERPs, warehouse management systems (WMS), transport systems (TMS), and IoT telemetry into a synchronized real-time dispatch and routing platform.",
    keyEnablers: [
      "Universal Logistics Integration Mesh (iPaaS)",
      "Automated Freight Dispatch & Loading Algorithms",
      "Real-Time Cold-Chain & GPS Sensor Telemetry",
      "Predictive Route Optimization & ETA Calculation",
    ],
    impactMetric: { value: "92%", label: "Reduction in shipment delays" },
    caseStudyRef: "uae-logistics",
  },
  {
    id: "cpg",
    name: "Consumer Goods & Retail",
    headline: "Transforming demand forecasting, inventory visibility, and omnichannel scale.",
    description:
      "A unified data lakehouse and analytics strategy that unifies retail point-of-sale data, supply chains, and distributor networks for accurate forecasting and rapid market response.",
    keyEnablers: [
      "Multi-Market Data Harmonization & Lakehouse",
      "Predictive Demand Planning & Inventory Allocation",
      "Automated Vendor Order & Invoice Reconciliation",
      "Omnichannel Next.js eCommerce Frontends",
    ],
    impactMetric: { value: "65%", label: "Faster inventory turnaround" },
    caseStudyRef: "cpg-data",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    headline: "Enabling smart factory automation, predictive maintenance, and IoT intelligence.",
    description:
      "We connect factory floor telemetry, SCADA systems, and enterprise planning tools to minimize machine downtime, enforce safety compliance, and streamline production schedules.",
    keyEnablers: [
      "Industrial IoT (IIoT) Sensor Telemetry Ingestion",
      "Machine Health & Predictive Maintenance Models",
      "Real-Time Shop Floor Yield Dashboards",
      "Automated Spare Parts Supply Triggering",
    ],
    impactMetric: { value: "48%", label: "Drop in unplanned equipment downtime" },
    caseStudyRef: "eu-logistics",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "neobank",
    title: "Building the Digital Core for a Leading Neo Bank",
    clientIndustry: "Banking & Financial Services",
    category: "Architecture & Core Systems",
    date: "May 2025",
    challenge:
      "A fast-growing international neo-bank needed an elastic digital core capable of onboarding 500,000 customers monthly while maintaining instant sub-50ms transaction clearing and strict regulatory audits.",
    solution:
      "Spectrum 7 architected a cloud-native microservices platform with real-time event streaming via Kafka, distributed ledger isolation, and automated AML/KYC checks.",
    outcome:
      "Delivered a resilient digital banking core that reduced operational onboarding costs by 72% and supported 10x customer surge with zero downtime.",
    metrics: [
      { value: "99.999%", label: "System Availability" },
      { value: "35ms", label: "Average Transaction Clearing" },
      { value: "72%", label: "Lower Cost Per Account" },
    ],
    image: "/cloud-security.jpg",
    tags: ["Banking", "Microservices", "Kafka", "Security"],
  },
  {
    id: "cpg-data",
    title: "Data Management Modernization for Global CPG Leader",
    clientIndustry: "Consumer Packaged Goods (CPG)",
    category: "Data Intelligence",
    date: "March 2025",
    challenge:
      "Fragmented data across 14 international regional distributors led to inventory miscalculations, high spoilage rates, and slow 3-week monthly reporting cycles.",
    solution:
      "Built a unified modern data lakehouse on Snowflake and dbt, with automated ingestion pipelines connecting SAP, Salesforce, and regional warehouse databases.",
    outcome:
      "Consolidated 40+ disparate data sources into a single source of truth, enabling real-time demand forecasting and reducing inventory holding costs significantly.",
    metrics: [
      { value: "85%", label: "Faster Executive BI Reports" },
      { value: "14 Markets", label: "Unified in Real-Time" },
      { value: "$18M+", label: "Annual Cost Reduction" },
    ],
    image: "/ai-platform.jpg",
    tags: ["Data Lakehouse", "Snowflake", "dbt", "Analytics"],
  },
  {
    id: "uae-logistics",
    title: "Future-Ready Enterprise Integration for UAE Logistics Leader",
    clientIndustry: "Logistics & Supply Chain",
    category: "Enterprise Integration",
    date: "March 2025",
    challenge:
      "A premier freight and logistics conglomerate across the Middle East operated 8 disconnected legacy systems, causing tracking blind spots and manual data re-entry.",
    solution:
      "Implemented an enterprise Boomi iPaaS integration fabric with event-driven API gateways that synchronized customs declarations, fleet tracking, and customer notifications.",
    outcome:
      "Achieved seamless 100% automated freight status synchronization across port authorities, customs, and commercial cargo fleets in real-time.",
    metrics: [
      { value: "100%", label: "Automated Data Exchange" },
      { value: "12x", label: "Faster Customs Clearance Sync" },
      { value: "Zero", label: "Lost Cargo Discrepancies" },
    ],
    image: "/hero-spectrum.jpg",
    tags: ["Boomi iPaaS", "Enterprise Integration", "Logistics", "APIs"],
  },
  {
    id: "eu-logistics",
    title: "Automation-Driven Efficiency for European Freight Conglomerate",
    clientIndustry: "Manufacturing & Logistics",
    category: "Hyper Automation",
    date: "April 2025",
    challenge:
      "High-volume freight depot operations required human operators to manually verify waybills, weight documentation, and gate clearance for 4,000 trucks daily.",
    solution:
      "Engineered an automated loading and dispatch system integrating computer vision, intelligent document parsing, and UiPath RPA robots.",
    outcome:
      "Cut average truck check-in and clearance time from 22 minutes to under 3 minutes, unlocking 4x depot throughput with zero transcription errors.",
    metrics: [
      { value: "3 mins", label: "Turnaround Time per Vehicle" },
      { value: "4,000+", label: "Daily Automations Handled" },
      { value: "99.9%", label: "Waybill Parsing Accuracy" },
    ],
    image: "/cloud-security.jpg",
    tags: ["Hyperautomation", "UiPath", "Computer Vision", "RPA"],
  },
  {
    id: "jamaica-bank",
    title: "Modernising Employee Services for a Tier-1 Financial Institution",
    clientIndustry: "Banking & Financial Services",
    category: "Application Services",
    date: "February 2025",
    challenge:
      "12,000 banking staff were constrained by legacy paper-heavy HR and internal ticketing systems, causing 2-week turnaround on internal approvals.",
    solution:
      "Developed an intuitive self-service intranet cockpit with automated approval workflows, Next.js frontend, and secure single-sign-on (SSO).",
    outcome:
      "Eliminated 80% of internal manual support tickets and reduced service request processing times to under 2 hours.",
    metrics: [
      { value: "94%", label: "Staff Adoption in 30 Days" },
      { value: "<2 Hours", label: "Average Request Resolution" },
      { value: "ISO 27001", label: "Compliant Access Control" },
    ],
    image: "/ai-platform.jpg",
    tags: ["Next.js", "Employee Services", "Workflow Automation"],
  },
  {
    id: "bermuda-bi",
    title: "Post-COVID BI Transformation for Offshore Financial Institution",
    clientIndustry: "Banking & Wealth Management",
    category: "AI & Data Intelligence",
    date: "January 2025",
    challenge:
      "Remote portfolio managers lacked centralized real-time risk visibility across diverse international investment funds and jurisdictions.",
    solution:
      "Designed an automated data pipeline consolidating multi-currency portfolios into dynamic interactive dashboards with automated stress-testing models.",
    outcome:
      "Empowered portfolio directors to simulate market volatility scenarios instantly and auto-generate compliance filings for regulatory authorities.",
    metrics: [
      { value: "Instant", label: "Portfolio Risk Simulation" },
      { value: "40+", label: "Jurisdictions Supported" },
      { value: "100%", label: "Regulatory Audit Pass Rate" },
    ],
    image: "/hero-spectrum.jpg",
    tags: ["BI Transformation", "Wealth Management", "Risk Modeling"],
  },
];
