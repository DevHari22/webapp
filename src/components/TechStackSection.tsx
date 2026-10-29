"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Server,
  Sparkles,
  Cloud,
  Database,
  Cpu,
  Code2,
  Bot,
  FileText,
  Globe,
  Boxes,
  Layers,
  Activity,
  Workflow,
  ArrowRight,
  X,
  ExternalLink,
  SlidersHorizontal,
  Compass,
  Maximize2,
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "integration" | "data-ai" | "automation" | "apps";
  categoryLabel: string;
  iconName: string;
  headline: string;
  badge?: string;
  badgeType?: "award" | "partner" | "enterprise" | "certified" | "core";
  accentColor: string;
  accentBg: string;
  tags: string[];
  details: {
    leadSummary: string;
    certifiedEngineers: string;
    deploymentSla: string;
    coreCapabilities: string[];
    typicalOutcome: string;
  };
}

export default function TechStackSection() {
  const [viewMode, setViewMode] = useState<"stream" | "deck">("stream");
  const [filter, setFilter] = useState<"all" | "integration" | "data-ai" | "automation" | "apps">("all");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  // Drag-to-scroll state for Deck mode
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftPos, setScrollLeftPos] = useState<number>(0);
  const [hasDragged, setHasDragged] = useState<boolean>(false);

  const deckSliderRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const technologies: TechItem[] = [
    // Integration & Cloud
    {
      id: "boomi",
      name: "Boomi iPaaS",
      category: "integration",
      categoryLabel: "Enterprise Integration",
      iconName: "Zap",
      headline: "Hybrid Integration Fabric & Universal API Lifecycle Management",
      badge: "Award Winner",
      badgeType: "award",
      accentColor: "#0062ff",
      accentBg: "#eff6ff",
      tags: ["API Gateway", "Hybrid Mesh", "EDI / B2B"],
      details: {
        leadSummary: "Spectrum 7 is a recognized Boomi practice leader, engineering fault-tolerant enterprise hybrid integration fabrics connecting ERP, CRM, and cloud ecosystems.",
        certifiedEngineers: "45+ Certified Architects & Developers",
        deploymentSla: "99.99% Integration Uptime",
        coreCapabilities: ["Boomi Master Data Hub (MDH)", "B2B / EDI Trading Partner Networks", "Event-Driven Realtime AtomSpheres"],
        typicalOutcome: "65% faster time-to-market for enterprise partner onboarding with zero data loss.",
      },
    },
    {
      id: "mulesoft",
      name: "MuleSoft AnyPoint",
      category: "integration",
      categoryLabel: "Enterprise Integration",
      iconName: "Layers",
      headline: "API-Led Connectivity & Enterprise ESB Service Mesh Orchestration",
      badge: "Enterprise Core",
      badgeType: "enterprise",
      accentColor: "#0284c7",
      accentBg: "#f0f9ff",
      tags: ["API-Led", "RAML / OAS", "CloudHub 2.0"],
      details: {
        leadSummary: "Full-lifecycle API design, deployment, and governance across global distributed architectures using MuleSoft CloudHub and runtime fabric.",
        certifiedEngineers: "30+ Platform & Integration Architects",
        deploymentSla: "Sub-25ms Proxy Latency",
        coreCapabilities: ["System, Process, Experience 3-Tier Layering", "Anypoint Flex Gateway Governance", "Enterprise API Catalogs & Monetization"],
        typicalOutcome: "80% reuse rate across enterprise core business capability APIs.",
      },
    },
    {
      id: "kafka",
      name: "Apache Kafka",
      category: "integration",
      categoryLabel: "Event Streaming",
      iconName: "Activity",
      headline: "Distributed Real-Time Streaming & High-Throughput Event Pub/Sub",
      badge: "Core Stack",
      badgeType: "core",
      accentColor: "#ea580c",
      accentBg: "#fff7ed",
      tags: ["Event-Driven", "10M+ Msg/sec", "Kafka Streams"],
      details: {
        leadSummary: "Mission-critical real-time event streaming pipelines handling millions of events per second with immutable distributed ledger durability.",
        certifiedEngineers: "Confluent Certified Streaming Pros",
        deploymentSla: "Zero Data Drop Guarantee",
        coreCapabilities: ["Real-Time CDC (Change Data Capture)", "Schema Registry & Avro Governance", "Multi-Region Cluster Mirroring"],
        typicalOutcome: "Instantaneous sub-second event propagation across globally distributed banking and logistics cores.",
      },
    },
    {
      id: "aws-azure",
      name: "AWS & Microsoft Azure",
      category: "integration",
      categoryLabel: "Hyperscale Cloud",
      iconName: "Cloud",
      headline: "Multi-Cloud Resilient Hyperscale Infrastructure & Landing Zones",
      badge: "Certified MSP",
      badgeType: "certified",
      accentColor: "#059669",
      accentBg: "#ecfdf5",
      tags: ["Multi-Cloud", "Landing Zones", "FinOps"],
      details: {
        leadSummary: "Well-Architected enterprise landing zones, cloud migrations, and automated disaster-recovery infrastructure on AWS and Azure.",
        certifiedEngineers: "AWS Solutions Architect Pro & Azure Expert MSP",
        deploymentSla: "99.999% Regional Resiliency",
        coreCapabilities: ["Terraform & OpenTofu IaC Pipelines", "Enterprise Transit Network Hubs", "Cloud FinOps Cost Governance"],
        typicalOutcome: "38% cloud infrastructure cost optimization with zero-downtime operational failovers.",
      },
    },
    {
      id: "oracle-erp",
      name: "Oracle Cloud & ERP",
      category: "integration",
      categoryLabel: "Enterprise Core",
      iconName: "Database",
      headline: "Financial Ledgers & Connected Supply Chain Operations",
      badge: "Specialty",
      badgeType: "enterprise",
      accentColor: "#b91c1c",
      accentBg: "#fef2f2",
      tags: ["Fusion ERP", "Supply Chain", "GL Ledgers"],
      details: {
        leadSummary: "Modern enterprise core ERP connectivity and cloud modernization linking global supply chain ledgers with real-time operations.",
        certifiedEngineers: "Certified Oracle Cloud Specialists",
        deploymentSla: "SOX / GAAP Compliant",
        coreCapabilities: ["Financial Data Mesh Integrations", "Supply Chain Planning & SCM Sync", "Automated Period-Close Workflows"],
        typicalOutcome: "Quarter-end closing cycles accelerated from 14 days down to 48 hours.",
      },
    },

    // Data & AI
    {
      id: "snowflake",
      name: "Snowflake Lakehouse",
      category: "data-ai",
      categoryLabel: "Data Intelligence",
      iconName: "Database",
      headline: "Multi-Cloud Data Warehousing & Zero-Copy Live Enterprise Sharing",
      badge: "Core",
      badgeType: "core",
      accentColor: "#0284c7",
      accentBg: "#f0f9ff",
      tags: ["Lakehouse", "Snowpark", "Zero-Copy"],
      details: {
        leadSummary: "Unified enterprise data warehouses eliminating silos with zero-copy data cloning, Snowpark Python data engineering, and governed data clean rooms.",
        certifiedEngineers: "Snowflake SnowPro Core & Advanced",
        deploymentSla: "Instant Concurrency Scaling",
        coreCapabilities: ["Multi-Cluster Shared Data Architecture", "Data Clean Rooms for Partner Exchanges", "Snowpark Python & ML Pipelines"],
        typicalOutcome: "Unified analytics querying across petabyte-scale datasets with 70% reduced compute costs.",
      },
    },
    {
      id: "databricks",
      name: "Databricks",
      category: "data-ai",
      categoryLabel: "Data Intelligence",
      iconName: "Cpu",
      headline: "Unified Lakehouse Platform, Delta Lake & Production AI / ML",
      badge: "Premier",
      badgeType: "core",
      accentColor: "#e11d48",
      accentBg: "#fff1f2",
      tags: ["Delta Lake", "MLflow", "Apache Spark"],
      details: {
        leadSummary: "End-to-end data lakehouse solutions unifying data engineering, real-time streaming, and generative AI models on Apache Spark and Delta Lake.",
        certifiedEngineers: "Databricks Champion Architects",
        deploymentSla: "SOC 2 Type II Governed",
        coreCapabilities: ["Delta Lake ACID Transactions", "Unity Catalog Enterprise Governance", "MLflow Production Model Registry"],
        typicalOutcome: "Consolidated data silos into an open format, reducing query runtimes by up to 10x.",
      },
    },
    {
      id: "dbt",
      name: "dbt (Data Build Tool)",
      category: "data-ai",
      categoryLabel: "Analytics Engineering",
      iconName: "Code2",
      headline: "Modular Data Transformations & Version-Controlled Lineage Validation",
      badge: "Standard",
      badgeType: "certified",
      accentColor: "#d97706",
      accentBg: "#fffbeb",
      tags: ["SQL Modeling", "Data Lineage", "CI/CD"],
      details: {
        leadSummary: "Software engineering best practices applied to data transformations with automatic testing, documentation, and DAG lineage tracking.",
        certifiedEngineers: "dbt Certified Analytics Engineers",
        deploymentSla: "100% Verified Tests in CI",
        coreCapabilities: ["Semantic Layer Modeling", "Automated Data Quality Assertions", "Self-Documenting Data Dictionaries"],
        typicalOutcome: "Eliminated breaking schema changes and ensured 100% verified regulatory data integrity.",
      },
    },
    {
      id: "pytorch",
      name: "PyTorch & Python",
      category: "data-ai",
      categoryLabel: "Applied AI",
      iconName: "Sparkles",
      headline: "Custom Deep Learning & Domain-Tuned GenAI LLM Architectures",
      badge: "AI Core",
      badgeType: "award",
      accentColor: "#7c3aed",
      accentBg: "#f5f3ff",
      tags: ["Deep Learning", "LoRA / PEFT", "Transformers"],
      details: {
        leadSummary: "Enterprise AI engineering for private foundation models, fine-tuned domain LLMs, and multi-modal perception pipelines deployed on private cloud.",
        certifiedEngineers: "Deep Learning Researchers & ML Engineers",
        deploymentSla: "Sub-100ms Inference SLAs",
        coreCapabilities: ["Custom Attention & Transformer Fine-Tuning", "Quantized Edge Inference (vLLM)", "Bias, Safety & Hallucination Guardrails"],
        typicalOutcome: "94%+ domain task accuracy on proprietary enterprise knowledge bases.",
      },
    },
    {
      id: "vector-db",
      name: "Vector Databases (Milvus)",
      category: "data-ai",
      categoryLabel: "Cognitive Retrieval",
      iconName: "Boxes",
      headline: "High-Dimensional Vector Embeddings for Enterprise Semantic RAG",
      badge: "AI Scale",
      badgeType: "core",
      accentColor: "#4f46e5",
      accentBg: "#eef2ff",
      tags: ["Semantic RAG", "ANN Search", "Embeddings"],
      details: {
        leadSummary: "Sub-millisecond approximate nearest neighbor search across billion-scale vector indexes powering high-accuracy contextual retrieval for enterprise AI.",
        certifiedEngineers: "RAG & Information Retrieval Specialists",
        deploymentSla: "Billion-Scale Indexing",
        coreCapabilities: ["Hybrid Dense & Sparse Keyword Search", "Dynamic Partitioning & Multi-Tenancy", "Hierarchical Vector Quantization"],
        typicalOutcome: "Contextual document recall precision increased from 62% to 96.4%.",
      },
    },

    // Hyperautomation
    {
      id: "uipath",
      name: "UiPath Automation Cloud",
      category: "automation",
      categoryLabel: "Hyper Automation",
      iconName: "Bot",
      headline: "End-to-End Enterprise Robotic Process Automation & Agentic Bots",
      badge: "Partner of Year",
      badgeType: "partner",
      accentColor: "#ea580c",
      accentBg: "#fff7ed",
      tags: ["RPA", "Agentic Bots", "Orchestrator"],
      details: {
        leadSummary: "Award-winning automation practice engineering attended and unattended bot fleets that eliminate repetitive human overhead across back-office operations.",
        certifiedEngineers: "UiPath Certified Advanced Developers",
        deploymentSla: "24/7 Unattended Bot Fleet",
        coreCapabilities: ["Process Mining & Task Mining Insights", "Document Understanding with AI Extractor", "Self-Healing Automation Scripts"],
        typicalOutcome: "Over 180,000 human labor hours automated annually across Fortune 500 clients.",
      },
    },
    {
      id: "power-automate",
      name: "Microsoft Power Automate",
      category: "automation",
      categoryLabel: "Process Operations",
      iconName: "Workflow",
      headline: "Enterprise Microsoft 365, Copilot Studio & Cloud Flow Automations",
      badge: "Enterprise",
      badgeType: "enterprise",
      accentColor: "#0284c7",
      accentBg: "#f0f9ff",
      tags: ["Cloud Flows", "Copilot Studio", "Power Apps"],
      details: {
        leadSummary: "Seamless automation across the Microsoft 365 ecosystem, SharePoint, Teams, and Dataverse integrated with enterprise business workflows.",
        certifiedEngineers: "Microsoft Certified Power Platform Functional Cons",
        deploymentSla: "99.9% Microsoft SLA",
        coreCapabilities: ["Desktop Flow RPA Connectors", "Copilot Studio Custom Copilots", "Center of Excellence (CoE) Governance"],
        typicalOutcome: "Streamlined 120+ internal department approval and procurement workflows into instant actions.",
      },
    },
    {
      id: "celonis",
      name: "Celonis Process Mining",
      category: "automation",
      categoryLabel: "Process Intelligence",
      iconName: "Activity",
      headline: "Workflow Bottleneck Discovery & Live Conformance Analytics",
      badge: "Specialty",
      badgeType: "certified",
      accentColor: "#059669",
      accentBg: "#ecfdf5",
      tags: ["Process Mining", "Execution Mgmt", "Value Realization"],
      details: {
        leadSummary: "Uncover hidden process friction, throughput bottlenecks, and compliance deviations across SAP, Oracle, and Salesforce execution logs.",
        certifiedEngineers: "Celonis Certified Data Scientists",
        deploymentSla: "Continuous Process Audit",
        coreCapabilities: ["Action Flow Automated Remediation", "Real-Time Digital Twin Simulation", "Order-to-Cash & P2P Optimization"],
        typicalOutcome: "Recovered $14.2M in missed early-payment discounts and duplicate invoicing for industrial clients.",
      },
    },
    {
      id: "ocr-doc",
      name: "Intelligent Document OCR",
      category: "automation",
      categoryLabel: "Document Intelligence",
      iconName: "FileText",
      headline: "Automated Multi-Lingual Invoice, Bill of Lading & Policy Ingestion",
      badge: "AI Engine",
      badgeType: "award",
      accentColor: "#7c3aed",
      accentBg: "#f5f3ff",
      tags: ["Multi-Lingual", "Vision Transformers", "99.8% Accuracy"],
      details: {
        leadSummary: "Proprietary optical character and tabular recognition pipeline extracting complex data from structured and unstructured documents with human-in-the-loop verification.",
        certifiedEngineers: "Computer Vision & NLP Architects",
        deploymentSla: "3-Second Average Ingestion",
        coreCapabilities: ["Dynamic Field Confidence Scoring", "Multi-Language & Handwritten Support", "Automated ERP & Accounting Sync"],
        typicalOutcome: "Claims and invoice processing cycles reduced from 4 business days to under 15 minutes.",
      },
    },

    // Applications & Modern Web
    {
      id: "nextjs",
      name: "Next.js 16 (App Router)",
      category: "apps",
      categoryLabel: "Modern Web",
      iconName: "Globe",
      headline: "High-Speed Enterprise Frontends, Server Components & Global Edge Caching",
      badge: "Core Stack",
      badgeType: "core",
      accentColor: "#0f172a",
      accentBg: "#f8fafc",
      tags: ["React Server Comp", "Edge Routing", "Zero Layout Shift"],
      details: {
        leadSummary: "State-of-the-art enterprise web architectures built on Next.js 16 App Router delivering sub-second Largest Contentful Paint and bulletproof SEO.",
        certifiedEngineers: "Modern Web & Performance Architects",
        deploymentSla: "100 Lighthouse Performance",
        coreCapabilities: ["Streaming SSR with Suspense Boundaries", "Distributed Edge Middleware & Geo-Routing", "Turbopack Zero-Downtime Builds"],
        typicalOutcome: "Global bounce rates dropped by 42% with instant page transitions and edge delivery.",
      },
    },
    {
      id: "react-ts",
      name: "React 19 & TypeScript",
      category: "apps",
      categoryLabel: "Modern Web",
      iconName: "Code2",
      headline: "Scalable Concurrent SPAs, Type-Safe Microfrontends & Design Systems",
      badge: "Core",
      badgeType: "core",
      accentColor: "#0284c7",
      accentBg: "#f0f9ff",
      tags: ["Concurrent React", "Strict TypeScript", "Microfrontends"],
      details: {
        leadSummary: "Enterprise design systems and decoupled microfrontends crafted with strict TypeScript standards and React 19 concurrent features.",
        certifiedEngineers: "Senior Frontend System Architects",
        deploymentSla: "100% Strict Type Safety",
        coreCapabilities: ["Module Federation & Isolated Teams", "Atomic Enterprise Design Tokens", "Automated Playwright / Vitest Coverage"],
        typicalOutcome: "Autonomous multi-team delivery cadence scaling to 40+ concurrent agile product squads.",
      },
    },
    {
      id: "kubernetes",
      name: "Kubernetes & Docker",
      category: "apps",
      categoryLabel: "Cloud Native",
      iconName: "Boxes",
      headline: "Zero-Downtime Multi-Region Microservices Orchestration & GitOps",
      badge: "Cloud Native",
      badgeType: "certified",
      accentColor: "#2563eb",
      accentBg: "#eff6ff",
      tags: ["K8s Operators", "ArgoCD GitOps", "Istio Mesh"],
      details: {
        leadSummary: "Production-hardened Kubernetes clusters with automated horizontal pod autoscaling, zero-downtime rolling deploys, and service mesh telemetry.",
        certifiedEngineers: "CKA (Certified Kubernetes Architects)",
        deploymentSla: "Zero-Downtime Rolling Deploys",
        coreCapabilities: ["ArgoCD Declarative GitOps Delivery", "Istio Mutual TLS (mTLS) Zero-Trust Mesh", "Prometheus & Grafana Enterprise Telemetry"],
        typicalOutcome: "Deploys executed 40x per day with instant automated rollback capability.",
      },
    },
    {
      id: "nodejs-go",
      name: "Node.js & Go Microservices",
      category: "apps",
      categoryLabel: "High Performance",
      iconName: "Server",
      headline: "Sub-15ms Low-Latency Mission-Critical Distributed Backend APIs",
      badge: "Systems",
      badgeType: "core",
      accentColor: "#059669",
      accentBg: "#ecfdf5",
      tags: ["Go Goroutines", "gRPC / Protobuf", "Low Memory"],
      details: {
        leadSummary: "High-concurrency microservices engineered in Go and Node.js for real-time payment processing, order routing, and enterprise telecommunications.",
        certifiedEngineers: "Distributed Systems Engineers",
        deploymentSla: "<15ms 99th Percentile Latency",
        coreCapabilities: ["gRPC High-Throughput Binary Protocols", "Non-Blocking Async Event Loops", "Lightweight Container Footprints (<30MB)"],
        typicalOutcome: "Handled 120,000 concurrent transactions during peak Black Friday surges with 0% dropped packets.",
      },
    },
  ];

  const filteredTech =
    filter === "all"
      ? technologies
      : technologies.filter((t) => t.category === filter);

  // Split into 2 rows for Dual-Stream Marquee
  const row1Tech = technologies.slice(0, 9);
  const row2Tech = technologies.slice(9, 18);

  const renderIcon = (iconName: string, color: string, size = 20) => {
    switch (iconName) {
      case "Zap": return <Zap size={size} color={color} />;
      case "Layers": return <Layers size={size} color={color} />;
      case "Activity": return <Activity size={size} color={color} />;
      case "Cloud": return <Cloud size={size} color={color} />;
      case "Database": return <Database size={size} color={color} />;
      case "Cpu": return <Cpu size={size} color={color} />;
      case "Code2": return <Code2 size={size} color={color} />;
      case "Sparkles": return <Sparkles size={size} color={color} />;
      case "Boxes": return <Boxes size={size} color={color} />;
      case "Bot": return <Bot size={size} color={color} />;
      case "Workflow": return <Workflow size={size} color={color} />;
      case "FileText": return <FileText size={size} color={color} />;
      case "Globe": return <Globe size={size} color={color} />;
      case "Server": return <Server size={size} color={color} />;
      default: return <Sparkles size={size} color={color} />;
    }
  };

  // Scroll tracking for Deck mode
  const updateScrollState = useCallback(() => {
    if (!deckSliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = deckSliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    const cardWidth = 360 + 20;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(filteredTech.length - 1, Math.max(0, index)));
  }, [filteredTech.length]);

  useEffect(() => {
    const slider = deckSliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", updateScrollState);
      updateScrollState();
      return () => slider.removeEventListener("scroll", updateScrollState);
    }
  }, [updateScrollState, viewMode]);

  const scrollDeck = (direction: "left" | "right") => {
    if (!deckSliderRef.current) return;
    const scrollAmount = 380;
    deckSliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    setProgress(0);
  };

  const jumpToSlide = (index: number) => {
    if (!deckSliderRef.current) return;
    deckSliderRef.current.scrollTo({ left: index * 380, behavior: "smooth" });
    setProgress(0);
  };

  // Deck Mode auto-play timer
  useEffect(() => {
    if (viewMode !== "deck" || !isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalTime = 3800;
    const tickTime = 60;
    const step = (tickTime / intervalTime) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + step));
    }, tickTime);

    autoPlayTimerRef.current = setInterval(() => {
      if (!deckSliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = deckSliderRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        deckSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        deckSliderRef.current.scrollBy({ left: 380, behavior: "smooth" });
      }
      setProgress(0);
    }, intervalTime);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [viewMode, isAutoPlaying, filteredTech.length]);

  // Mouse drag handlers for Deck mode
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!deckSliderRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - deckSliderRef.current.offsetLeft);
    setScrollLeftPos(deckSliderRef.current.scrollLeft);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !deckSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - deckSliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) setHasDragged(true);
    deckSliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Render Card Component
  const renderCard = (item: TechItem, isMarquee = false) => (
    <div
      key={item.id + (isMarquee ? "-marq" : "")}
      onClick={() => setSelectedTech(item)}
      className="corp-card tech-card-interactive"
      style={{
        flex: "0 0 360px",
        width: "360px",
        maxWidth: "360px",
        padding: "26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        minHeight: "260px",
        borderRadius: "10px",
        border: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
        transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = "var(--blue-border)";
        e.currentTarget.style.boxShadow = "0 18px 40px -10px rgba(0, 98, 255, 0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border-light)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.04)";
      }}
    >
      {/* Top signature spectrum rainbow micro-stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "var(--spectrum-gradient)",
          opacity: 0.95,
        }}
      />

      <div>
        {/* Card Header: Icon + Status Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "10px",
              background: item.accentBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${item.accentColor}25`,
            }}
          >
            {renderIcon(item.iconName, item.accentColor, 23)}
          </div>

          {item.badge && (
            <span
              style={{
                fontSize: "0.74rem",
                padding: "4px 10px",
                borderRadius: "4px",
                background:
                  item.badgeType === "award"
                    ? "#fffbeb"
                    : item.badgeType === "partner"
                    ? "var(--blue-light)"
                    : item.badgeType === "enterprise"
                    ? "#0f172a"
                    : item.badgeType === "certified"
                    ? "#ecfdf5"
                    : "var(--bg-secondary)",
                color:
                  item.badgeType === "award"
                    ? "#b45309"
                    : item.badgeType === "partner"
                    ? "var(--blue-primary)"
                    : item.badgeType === "enterprise"
                    ? "#ffffff"
                    : item.badgeType === "certified"
                    ? "#047857"
                    : "var(--text-muted)",
                fontWeight: 700,
                border:
                  item.badgeType === "award"
                    ? "1px solid #fef3c7"
                    : item.badgeType === "partner"
                    ? "1px solid var(--blue-border)"
                    : item.badgeType === "enterprise"
                    ? "1px solid #0f172a"
                    : item.badgeType === "certified"
                    ? "1px solid #a7f3d0"
                    : "1px solid var(--border-light)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                whiteSpace: "nowrap",
              }}
            >
              {item.badgeType === "award" && <Award size={12} />}
              {item.badge}
            </span>
          )}
        </div>

        {/* Category Subheading */}
        <div
          style={{
            fontSize: "0.74rem",
            fontWeight: 800,
            color: "var(--blue-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "5px",
          }}
        >
          {item.categoryLabel}
        </div>

        {/* Platform Name */}
        <h3
          style={{
            fontSize: "1.26rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.015em",
            marginBottom: "8px",
            lineHeight: 1.25,
          }}
        >
          {item.name}
        </h3>

        {/* Headline Summary */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            lineHeight: 1.52,
            marginBottom: "16px",
          }}
        >
          {item.headline}
        </p>

        {/* Capability Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "4px",
                background: "#f1f5f9",
                color: "#475569",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Verification Footer Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          paddingTop: "14px",
          borderTop: "1px solid var(--border-light)",
          fontSize: "0.78rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--blue-primary)", fontWeight: 700 }}>
          <CheckCircle2 size={16} color="var(--blue-primary)" />
          <span>Certified Enterprise Practice</span>
        </div>

        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            color: "var(--text-muted)",
            fontSize: "0.76rem",
            fontWeight: 700,
          }}
        >
          <span>Architecture</span>
          <ArrowRight size={13} />
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="technologies"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Section Header & Mode Switcher */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <div className="enterprise-tag">
              <span className="bar" />
              <span>TECHNOLOGY ALLIANCES & ECOSYSTEM</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                marginBottom: "14px",
                lineHeight: 1.15,
              }}
            >
              Technologies We Excel At
            </h2>

            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
              }}
            >
              We engineer enterprise-grade architectures on premier global platforms with certified architects,
              award-winning partnerships, and proven delivery frameworks.
            </p>
          </div>

          {/* Interactive Motion Mode Switcher & Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              padding: "6px 8px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* View Mode Toggle: Dual-Stream Marquee vs Interactive Deck */}
            <div
              style={{
                display: "flex",
                background: "#f1f5f9",
                borderRadius: "6px",
                padding: "3px",
                gap: "2px",
              }}
            >
              <button
                onClick={() => setViewMode("stream")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "5px",
                  background: viewMode === "stream" ? "#ffffff" : "transparent",
                  color: viewMode === "stream" ? "var(--blue-primary)" : "var(--text-muted)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  border: "none",
                  boxShadow: viewMode === "stream" ? "0 2px 6px rgba(0, 0, 0, 0.08)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <SlidersHorizontal size={14} />
                <span>Continuous Stream</span>
              </button>

              <button
                onClick={() => setViewMode("deck")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "5px",
                  background: viewMode === "deck" ? "#ffffff" : "transparent",
                  color: viewMode === "deck" ? "var(--blue-primary)" : "var(--text-muted)",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  border: "none",
                  boxShadow: viewMode === "deck" ? "0 2px 6px rgba(0, 0, 0, 0.08)" : "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <Compass size={14} />
                <span>Step Carousel</span>
              </button>
            </div>

            {/* Deck-specific Arrow Controls & Counter */}
            {viewMode === "deck" && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingLeft: "6px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 800,
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ color: "var(--blue-primary)" }}>{String(activeSlideIndex + 1).padStart(2, "0")}</span>
                  <span> / </span>
                  <span>{String(filteredTech.length).padStart(2, "0")}</span>
                </div>

                <div style={{ display: "flex", gap: "4px" }}>
                  <button
                    onClick={() => {
                      scrollDeck("left");
                      setIsAutoPlaying(false);
                    }}
                    disabled={!canScrollLeft}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "5px",
                      background: canScrollLeft ? "var(--blue-primary)" : "#f8fafc",
                      color: canScrollLeft ? "#ffffff" : "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-light)",
                      cursor: canScrollLeft ? "pointer" : "default",
                      opacity: canScrollLeft ? 1 : 0.5,
                      transition: "all 0.15s ease",
                    }}
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={() => {
                      scrollDeck("right");
                      setIsAutoPlaying(false);
                    }}
                    disabled={!canScrollRight}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "5px",
                      background: canScrollRight ? "var(--blue-primary)" : "#f8fafc",
                      color: canScrollRight ? "#ffffff" : "#94a3b8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-light)",
                      cursor: canScrollRight ? "pointer" : "default",
                      opacity: canScrollRight ? 1 : 0.5,
                      transition: "all 0.15s ease",
                    }}
                    aria-label="Next Slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
          }}
        >
          {[
            { id: "all", label: "All Alliances", count: 18 },
            { id: "integration", label: "Integration & Cloud", count: 5 },
            { id: "data-ai", label: "Data Intelligence & AI", count: 5 },
            { id: "automation", label: "Hyper Automation & RPA", count: 4 },
            { id: "apps", label: "Applications & Modern Web", count: 4 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setFilter(item.id as any);
                if (deckSliderRef.current) {
                  deckSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
                setProgress(0);
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "6px",
                background: filter === item.id ? "var(--blue-primary)" : "#ffffff",
                color: filter === item.id ? "#ffffff" : "var(--text-secondary)",
                fontWeight: 700,
                fontSize: "0.85rem",
                border: filter === item.id ? "1px solid var(--blue-primary)" : "1px solid var(--border-light)",
                boxShadow: filter === item.id ? "0 4px 12px rgba(0, 98, 255, 0.2)" : "var(--shadow-sm)",
                transition: "all 0.15s ease",
                cursor: "pointer",
              }}
            >
              <span>{item.label}</span>
              <span
                style={{
                  fontSize: "0.72rem",
                  padding: "1px 6px",
                  borderRadius: "10px",
                  background: filter === item.id ? "rgba(255, 255, 255, 0.25)" : "var(--bg-secondary)",
                  color: filter === item.id ? "#ffffff" : "var(--text-muted)",
                }}
              >
                {item.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: DUAL-STREAM INFINITE 60FPS MARQUEE (CONTINUOUS STREAM) */}
      {viewMode === "stream" && (
        <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "10px 0" }}>
          {/* Left & Right Cinematic Edge Vignettes */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to right, var(--bg-secondary) 15%, transparent 100%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to left, var(--bg-secondary) 15%, transparent 100%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Track 1: Gliding Left */}
          <div className="marquee-wrapper" style={{ marginBottom: "22px" }}>
            <div className="marquee-track marquee-left">
              {filteredTech.concat(filteredTech).map((item, idx) => (
                <div key={`t1-${item.id}-${idx}`} style={{ marginRight: "22px" }}>
                  {renderCard(item, true)}
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Gliding Right (reversed direction for hypnotic balance) */}
          <div className="marquee-wrapper">
            <div className="marquee-track marquee-right">
              {filteredTech.slice().reverse().concat(filteredTech.slice().reverse()).map((item, idx) => (
                <div key={`t2-${item.id}-${idx}`} style={{ marginRight: "22px" }}>
                  {renderCard(item, true)}
                </div>
              ))}
            </div>
          </div>

          {/* Ambient Hint Banner */}
          <div className="container" style={{ textAlign: "center", marginTop: "24px" }}>
            <span
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid var(--border-light)",
              }}
            >
              <Sparkles size={14} color="var(--blue-primary)" />
              <span>Hover any platform to pause motion • Click to inspect enterprise architecture specifications</span>
            </span>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: STEP CAROUSEL (INTERACTIVE DECK) */}
      {viewMode === "deck" && (
        <div className="container" style={{ position: "relative" }}>
          {/* Progress Countdown Line */}
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "#e2e8f0",
              borderRadius: "2px",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${isAutoPlaying ? progress : 0}%`,
                height: "100%",
                background: "linear-gradient(90deg, var(--blue-primary), #00d2ff)",
                transition: isAutoPlaying ? "width 0.06s linear" : "width 0.2s ease",
              }}
            />
          </div>

          <div style={{ position: "relative" }}>
            {/* Floating Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => {
                  scrollDeck("left");
                  setIsAutoPlaying(false);
                }}
                style={{
                  position: "absolute",
                  left: "-18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Floating Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => {
                  scrollDeck("right");
                  setIsAutoPlaying(false);
                }}
                style={{
                  position: "absolute",
                  right: "-18px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.96)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                aria-label="Scroll right"
              >
                <ChevronRight size={22} />
              </button>
            )}

            {/* Deck Track */}
            <div
              ref={deckSliderRef}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                scrollBehavior: isDragging ? "auto" : "smooth",
                scrollSnapType: isDragging ? "none" : "x mandatory",
                padding: "10px 4px 28px 4px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                cursor: isDragging ? "grabbing" : "grab",
                userSelect: "none",
              }}
              className="slider-track"
            >
              {filteredTech.map((item) => (
                <div key={item.id} style={{ scrollSnapAlign: "start" }}>
                  {renderCard(item, false)}
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dot Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {filteredTech.map((item, i) => (
              <button
                key={item.id}
                onClick={() => {
                  jumpToSlide(i);
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: i === activeSlideIndex ? "32px" : "8px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeSlideIndex ? "var(--blue-primary)" : "#cbd5e1",
                  transition: "all 0.25s ease",
                  padding: 0,
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Interactive Platform Practice Architecture Modal */}
      {selectedTech && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 19, 43, 0.7)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedTech(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              maxWidth: "620px",
              width: "100%",
              padding: "36px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 28px 70px rgba(0, 0, 0, 0.25)",
              position: "relative",
              animation: "modalFadeIn 0.2s ease-out",
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedTech(null)}
              style={{
                position: "absolute",
                top: "22px",
                right: "22px",
                background: "#f1f5f9",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  background: selectedTech.accentBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${selectedTech.accentColor}30`,
                }}
              >
                {renderIcon(selectedTech.iconName, selectedTech.accentColor, 28)}
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase" }}>
                  {selectedTech.categoryLabel}
                </div>
                <h3 style={{ fontSize: "1.55rem", fontWeight: 900, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  {selectedTech.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.96rem", color: "var(--text-secondary)", lineHeight: 1.62, marginBottom: "24px" }}>
              {selectedTech.details.leadSummary}
            </p>

            {/* Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                padding: "18px",
                background: "var(--bg-secondary)",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid var(--border-light)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 700 }}>PRACTICE BENCHMARK</div>
                <div style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--text-primary)", marginTop: "3px" }}>
                  {selectedTech.details.certifiedEngineers}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 700 }}>DELIVERY SLA</div>
                <div style={{ fontSize: "0.96rem", fontWeight: 800, color: "var(--blue-primary)", marginTop: "3px" }}>
                  {selectedTech.details.deploymentSla}
                </div>
              </div>
            </div>

            {/* Core Architecture Deliverables */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "10px", textTransform: "uppercase" }}>
                Practice Architecture Deliverables:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {selectedTech.details.coreCapabilities.map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <CheckCircle2 size={16} color="var(--blue-primary)" style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Outcome */}
            <div
              style={{
                padding: "14px 18px",
                borderRadius: "6px",
                background: "var(--blue-light)",
                border: "1px solid var(--blue-border)",
                fontSize: "0.88rem",
                color: "var(--blue-primary)",
                fontWeight: 600,
                marginBottom: "26px",
              }}
            >
              <strong>Measurable Impact:</strong> {selectedTech.details.typicalOutcome}
            </div>

            {/* Modal CTAs */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <button
                onClick={() => setSelectedTech(null)}
                style={{
                  padding: "11px 20px",
                  borderRadius: "5px",
                  background: "#f1f5f9",
                  border: "1px solid var(--border-light)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedTech(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "11px 24px",
                  borderRadius: "5px",
                  background: "var(--blue-primary)",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                <span>Consult On {selectedTech.name}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider-track::-webkit-scrollbar {
          display: none;
        }

        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          user-select: none;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          flex-shrink: 0;
          will-change: transform;
        }

        .marquee-left {
          animation: marqueeLeft 42s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 42s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
