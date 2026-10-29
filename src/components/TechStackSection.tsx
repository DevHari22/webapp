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
  const [filter, setFilter] = useState<"all" | "integration" | "data-ai" | "automation" | "apps">("all");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftPos, setScrollLeftPos] = useState<number>(0);
  const [hasDragged, setHasDragged] = useState<boolean>(false);

  const sliderRef = useRef<HTMLDivElement>(null);
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
      badge: "Enterprise",
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
      badge: "Certified",
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

  // Helper for rendering icons
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

  // Scroll tracking to update button disabled states and active indicator
  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);

    const cardWidth = 350 + 20; // card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlideIndex(Math.min(filteredTech.length - 1, Math.max(0, index)));
  }, [filteredTech.length]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", updateScrollState);
      updateScrollState();
      return () => slider.removeEventListener("scroll", updateScrollState);
    }
  }, [updateScrollState]);

  // Smooth scroll method
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 370; // 1 card + gap
    sliderRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    setProgress(0);
  };

  const jumpToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const targetScroll = index * 370;
    sliderRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    setProgress(0);
  };

  // Auto-play sliding motion with progress bar
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalTime = 3600; // 3.6s per slide
    const tickTime = 60;
    const step = (tickTime / intervalTime) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + step;
      });
    }, tickTime);

    autoPlayTimerRef.current = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        // Rewind smoothly to beginning
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: 370, behavior: "smooth" });
      }
      setProgress(0);
    }, intervalTime);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isAutoPlaying, filteredTech.length]);

  // Drag-to-scroll implementation
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4; // scroll speed multiplier
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="technologies"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Header & Motion Controls Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <div className="enterprise-tag">
              <span className="bar" />
              <span>TECHNOLOGY ALLIANCES & ECOSYSTEM</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
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
                lineHeight: 1.6,
                color: "var(--text-secondary)",
              }}
            >
              We engineer enterprise-grade solutions on premier global platforms with certified architects,
              award-winning partnerships, and proven delivery frameworks.
            </p>
          </div>

          {/* Slider Motion Controller Console */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Auto Play / Pause Toggle with Live Indicator */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "7px 13px",
                borderRadius: "5px",
                background: isAutoPlaying ? "var(--blue-light)" : "#f1f5f9",
                color: isAutoPlaying ? "var(--blue-primary)" : "var(--text-muted)",
                fontSize: "0.8rem",
                fontWeight: 700,
                border: isAutoPlaying ? "1px solid var(--blue-border)" : "1px solid var(--border-light)",
                transition: "all 0.15s ease",
              }}
              title={isAutoPlaying ? "Pause Auto-Slide Motion" : "Resume Auto-Slide Motion"}
            >
              {isAutoPlaying ? (
                <>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--blue-primary)",
                      boxShadow: "0 0 8px rgba(0, 98, 255, 0.6)",
                      animation: "pulse 1.8s infinite",
                    }}
                  />
                  <Pause size={13} />
                  <span>Auto-Slide On</span>
                </>
              ) : (
                <>
                  <Play size={13} />
                  <span>Slide Paused</span>
                </>
              )}
            </button>

            {/* Slide Index Counter */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                padding: "0 8px",
                borderLeft: "1px solid var(--border-light)",
                borderRight: "1px solid var(--border-light)",
              }}
            >
              <span style={{ color: "var(--blue-primary)" }}>
                {String(activeSlideIndex + 1).padStart(2, "0")}
              </span>
              <span> / </span>
              <span>{String(filteredTech.length).padStart(2, "0")}</span>
            </div>

            {/* Arrow Navigation Controls */}
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={() => {
                  scroll("left");
                  setIsAutoPlaying(false);
                }}
                disabled={!canScrollLeft}
                style={{
                  width: "36px",
                  height: "36px",
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
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => {
                  scroll("right");
                  setIsAutoPlaying(false);
                }}
                disabled={!canScrollRight}
                style={{
                  width: "36px",
                  height: "36px",
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
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills with Counter Badges */}
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
                if (sliderRef.current) {
                  sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
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

        {/* Continuous Auto-Motion Countdown Progress Line */}
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

        {/* Slider Container with Edge Fade Vignettes & Floating Arrow Buttons */}
        <div style={{ position: "relative" }}>
          {/* Left Edge Gradient Vignette */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: "16px",
              width: "48px",
              background: "linear-gradient(to right, var(--bg-secondary), transparent)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Right Edge Gradient Vignette */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: "16px",
              width: "48px",
              background: "linear-gradient(to left, var(--bg-secondary), transparent)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Floating Left Arrow (visible on desktop hover) */}
          {canScrollLeft && (
            <button
              onClick={() => {
                scroll("left");
                setIsAutoPlaying(false);
              }}
              style={{
                position: "absolute",
                left: "-16px",
                top: "42%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border-light)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 5,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--blue-primary)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* Floating Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => {
                scroll("right");
                setIsAutoPlaying(false);
              }}
              style={{
                position: "absolute",
                right: "-16px",
                top: "42%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--border-light)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 5,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--blue-primary)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.color = "var(--text-primary)";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* The Scrollable Slider Motion Track */}
          <div
            ref={sliderRef}
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
              padding: "8px 8px 30px 8px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
            className="slider-track"
          >
            {filteredTech.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  if (!hasDragged) setSelectedTech(item);
                }}
                className="corp-card"
                style={{
                  flex: "0 0 350px",
                  maxWidth: "350px",
                  scrollSnapAlign: "start",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#ffffff",
                  minHeight: "260px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-light)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(0, 98, 255, 0.09)";
                  e.currentTarget.style.borderColor = "var(--blue-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.borderColor = "var(--border-light)";
                }}
              >
                {/* Rainbow Spectrum Top Micro-Accent on Card */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "var(--spectrum-gradient)",
                    opacity: 0.9,
                  }}
                />

                <div>
                  {/* Card Header: Tailored Icon + Status Badge */}
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
                        width: "44px",
                        height: "44px",
                        borderRadius: "8px",
                        background: item.accentBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${item.accentColor}25`,
                      }}
                    >
                      {renderIcon(item.iconName, item.accentColor, 22)}
                    </div>

                    {item.badge && (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          padding: "4px 9px",
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
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        {item.badgeType === "award" && <Award size={11} />}
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Subheading category */}
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}
                  >
                    {item.categoryLabel}
                  </div>

                  {/* Platform Name */}
                  <h3
                    style={{
                      fontSize: "1.24rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      marginBottom: "8px",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: "14px",
                    }}
                  >
                    {item.headline}
                  </p>

                  {/* Feature Tag Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "2px 7px",
                          borderRadius: "3px",
                          background: "#f1f5f9",
                          color: "#475569",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Verification Footer */}
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
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--blue-primary)", fontWeight: 600 }}>
                    <CheckCircle2 size={15} color="var(--blue-primary)" />
                    <span>Certified Practice</span>
                  </div>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                      color: "var(--text-muted)",
                      fontSize: "0.74rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Track Indicator Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "50px",
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

        {/* Enterprise Governance & Security Verification Card */}
        <div
          style={{
            padding: "28px 36px",
            borderRadius: "8px",
            background: "#ffffff",
            border: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <div
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "var(--blue-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              ENTERPRISE INFORMATION SECURITY ARCHITECTURE
            </div>
            <div
              style={{
                fontSize: "1.22rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                marginTop: "3px",
                letterSpacing: "-0.01em",
              }}
            >
              Audited & Certified under ISO/IEC 27001:2022
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                marginTop: "4px",
                lineHeight: 1.5,
              }}
            >
              Every solution architected across our technology alliances adheres to strict zero-trust network boundaries,
              SOC 2 Type II compliance, and global data privacy standards.
            </p>
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 20px",
                borderRadius: "6px",
                background: "var(--blue-light)",
                color: "var(--blue-primary)",
                fontWeight: 700,
                fontSize: "0.9rem",
                border: "1px solid var(--blue-border)",
              }}
            >
              <ShieldCheck size={20} />
              <span>ISMS Verified & SOC 2 Audited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Platform Practice Detail Modal */}
      {selectedTech && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 19, 43, 0.65)",
            backdropFilter: "blur(6px)",
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
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              padding: "36px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedTech(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
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
              }}
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "18px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  background: selectedTech.accentBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid ${selectedTech.accentColor}30`,
                }}
              >
                {renderIcon(selectedTech.iconName, selectedTech.accentColor, 26)}
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--blue-primary)", textTransform: "uppercase" }}>
                  {selectedTech.categoryLabel}
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  {selectedTech.name}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "24px" }}>
              {selectedTech.details.leadSummary}
            </p>

            {/* Enterprise Specs Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
                padding: "16px",
                background: "var(--bg-secondary)",
                borderRadius: "8px",
                marginBottom: "24px",
                border: "1px solid var(--border-light)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>PRACTICE BENCHMARK</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "2px" }}>
                  {selectedTech.details.certifiedEngineers}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>DELIVERY SLA</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--blue-primary)", marginTop: "2px" }}>
                  {selectedTech.details.deploymentSla}
                </div>
              </div>
            </div>

            {/* Core Capabilities Checklist */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px", textTransform: "uppercase" }}>
                Practice Architecture Deliverables:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {selectedTech.details.coreCapabilities.map((cap) => (
                  <div key={cap} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    <CheckCircle2 size={16} color="var(--blue-primary)" style={{ flexShrink: 0 }} />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Typical Outcome Banner */}
            <div
              style={{
                padding: "12px 16px",
                borderRadius: "6px",
                background: "var(--blue-light)",
                border: "1px solid var(--blue-border)",
                fontSize: "0.85rem",
                color: "var(--blue-primary)",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              <strong>Measurable Impact:</strong> {selectedTech.details.typicalOutcome}
            </div>

            {/* CTA in Modal */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setSelectedTech(null)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "5px",
                  background: "#f1f5f9",
                  border: "1px solid var(--border-light)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
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
                  gap: "6px",
                  padding: "10px 22px",
                  borderRadius: "5px",
                  background: "var(--blue-primary)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                }}
              >
                <span>Consult On {selectedTech.name}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .slider-track::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.85);
          }
        }
      `}</style>
    </section>
  );
}
