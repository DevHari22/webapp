"use client";

import React, { useState } from "react";
import {
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Bot,
  Database,
  Layers,
  Activity,
  Award,
  Cpu,
  Server,
  Network,
  Lock,
} from "lucide-react";

interface DomainOutcome {
  id: string;
  badge: string;
  partnerAward: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  kpiStats: { value: string; label: string; sub: string }[];
  deliverables: string[];
  techStack: string[];
  clientOutcome: {
    client: string;
    result: string;
    stat: string;
  };
  topology: {
    source: string;
    latency: string;
    mesh: string;
    destination: string;
  };
}

export default function TransformationCockpit() {
  const [activeTab, setActiveTab] = useState<string>("integration");
  const [automationVolume, setAutomationVolume] = useState<number>(25000);

  const domains: DomainOutcome[] = [
    {
      id: "integration",
      badge: "BOOMI META INNOVATION WINNER",
      partnerAward: "Premier Boomi & MuleSoft Integration Partner",
      title: "Enterprise Integration Services",
      headline: "Connecting legacy mainframes, cloud SaaS, and partner ecosystems into a zero-loss API mesh.",
      description:
        "We eliminate operational data silos through universal hybrid iPaaS architectures. From B2B EDI trading networks to real-time event streaming, every transaction moves with sub-25ms latency and full ACID atomicity.",
      icon: Layers,
      kpiStats: [
        { value: "85%", label: "Interoperability Surge", sub: "Disparate systems unified" },
        { value: "<25ms", label: "Message Latency", sub: "Sub-second event bus routing" },
        { value: "99.999%", label: "Delivery SLA", sub: "Zero lost packets or orders" },
      ],
      deliverables: [
        "Universal Enterprise Service Bus (ESB) Modernization",
        "Secure B2B & EDI Partner Integration Gateways",
        "Real-Time Bi-Directional Data Synchronization",
        "Automated Dead-Letter Queue Monitoring & Self-Healing",
      ],
      techStack: ["Boomi iPaaS", "MuleSoft AnyPoint", "Apache Kafka", "AWS EventBridge", "REST / GraphQL"],
      clientOutcome: {
        client: "UAE Logistics Conglomerate",
        result: "Unified 8 disconnected regional systems into an automated customs & freight tracking mesh.",
        stat: "100% Automated Data Exchange",
      },
      topology: {
        source: "Legacy AS400 & SAP ERP",
        latency: "14ms Sync",
        mesh: "Boomi Event Mesh",
        destination: "Global Port Authorities & Fleets",
      },
    },
    {
      id: "automation",
      badge: "UIPATH PARTNER OF THE YEAR",
      partnerAward: "Top Enterprise Automation & RPA Vanguard",
      title: "Hyperautomation & RPA",
      headline: "Eliminating manual back-office tasks with unattended robot fleets and intelligent OCR.",
      description:
        "Combining robotic process automation with cognitive document ingestion, we automate high-volume invoice reconciliation, KYC validation, and claims adjudication with human-in-the-loop governance.",
      icon: Bot,
      kpiStats: [
        { value: "70%", label: "Manual Effort Reduction", sub: "Freed for strategic growth" },
        { value: "99.8%", label: "Extraction Accuracy", sub: "AI-powered vision OCR" },
        { value: "3 mins", label: "Depot Turnaround", sub: "Down from 22 minutes manually" },
      ],
      deliverables: [
        "Unattended Bot Fleets with 24/7 SRE Monitoring",
        "Intelligent Document Processing (IDP) & LayoutLM",
        "Celonis Process Mining & Bottleneck Detection",
        "Continuous Audit & Compliance Telemetry Logging",
      ],
      techStack: ["UiPath Cloud", "Celonis EMS", "Python", "ABBYY FlexiCapture", "Power Automate"],
      clientOutcome: {
        client: "European Freight Depots",
        result: "Automated gate check-in and waybill processing for 4,000 trucks daily.",
        stat: "4x Depot Throughput Surge",
      },
      topology: {
        source: "Raw Waybills & PDF Invoices",
        latency: "Sub-Second Ingestion",
        mesh: "UiPath AI Document Gateway",
        destination: "Settlement & ERP Ledgers",
      },
    },
    {
      id: "data-ai",
      badge: "LAKEHOUSE & RAG ARCHITECTURE",
      partnerAward: "Certified Snowflake & Databricks Specialists",
      title: "AI & Data Intelligence",
      headline: "Turning fragmented data lakes into real-time decision engines and private LLM agents.",
      description:
        "We build unified multi-cloud data lakehouses on Snowflake and Databricks, operationalizing generative AI copilot systems with deterministic guardrails and zero-PII data leakage.",
      icon: Sparkles,
      kpiStats: [
        { value: "85%", label: "Faster Executive BI", sub: "Sub-second query response" },
        { value: "<100ms", label: "RAG Inference Latency", sub: "High-concurrency vector search" },
        { value: "$18M+", label: "Verified Cost Savings", sub: "Annual inventory optimization" },
      ],
      deliverables: [
        "Multi-Market Modern Data Lakehouse on Snowflake",
        "Private Domain Vector Knowledge Bases (Milvus / Pinecone)",
        "Automated dbt Data Modeling & Transformation Pipelines",
        "Zero-Copy Multi-Cloud Data Clean Rooms",
      ],
      techStack: ["Snowflake", "Databricks", "dbt", "PyTorch", "Milvus", "Python"],
      clientOutcome: {
        client: "Global CPG Leader (14 Markets)",
        result: "Consolidated 40+ disparate distributor databases into a real-time demand forecasting engine.",
        stat: "14 International Markets Unified",
      },
      topology: {
        source: "40+ Regional Distributor DBs",
        latency: "Near Real-Time Stream",
        mesh: "Snowflake & dbt Core",
        destination: "Executive Cockpit & Demand Forecasting",
      },
    },
    {
      id: "modernization",
      badge: "CLOUD NATIVE & HIGH-CONCURRENCY",
      partnerAward: "Enterprise Microservices & Cloud-Native Core",
      title: "Application Modernization",
      headline: "Migrating legacy core monoliths into elastic, high-concurrency microservices.",
      description:
        "We architect mission-critical digital applications with modern Next.js 16 frontends, Go microservices, and Kubernetes clusters audited under ISO/IEC 27001:2022 and SOC 2 Type II.",
      icon: Cpu,
      kpiStats: [
        { value: "99.999%", label: "System Uptime", sub: "Zero-downtime rolling deploys" },
        { value: "35ms", label: "Ledger Transaction Time", sub: "Sub-50ms instant settlement" },
        { value: "72%", label: "Cost Per Account Saved", sub: "Elastic cloud resource scaling" },
      ],
      deliverables: [
        "Cloud-Native Kubernetes & Service Mesh Deployments",
        "Next.js 16 Edge-Rendered Customer Portals",
        "Event-Driven Distributed Microservices in Go & Node.js",
        "Automated CI/CD Pipelines with Static Code Security",
      ],
      techStack: ["Next.js 16", "Kubernetes", "Docker", "Go", "TypeScript", "mTLS 1.3"],
      clientOutcome: {
        client: "International Neo-Bank",
        result: "Engineered high-speed digital banking core onboarding 500,000 monthly customers.",
        stat: "Sub-50ms Transaction Clearing",
      },
      topology: {
        source: "Legacy Monolith Database",
        latency: "35ms Event Bus",
        mesh: "Kubernetes Istio Service Mesh",
        destination: "Elastic Microservices & Mobile App",
      },
    },
  ];

  const currentDomain = domains.find((d) => d.id === activeTab) || domains[0];
  const Icon = currentDomain.icon;

  // Real-time calculated annual savings estimation
  const hoursSavedAnnual = Math.round(automationVolume * 12 * 0.35).toLocaleString();
  const estimatedCostSaving = Math.round(automationVolume * 12 * 0.35 * 42).toLocaleString();

  const volumePresets = [
    { label: "10K", value: 10000 },
    { label: "25K (Avg)", value: 25000 },
    { label: "50K", value: 50000 },
    { label: "100K", value: 100000 },
  ];

  return (
    <section
      id="outcomes"
      style={{
        paddingTop: "64px",
        paddingBottom: "72px",
        background: "#070c18",
        borderTop: "1px solid rgba(30, 41, 59, 0.8)",
        borderBottom: "1px solid rgba(30, 41, 59, 0.8)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background Ambient Tech Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(0, 98, 255, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "15%",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header with Live Telemetry Pulse */}
        <div style={{ maxWidth: "820px", marginBottom: "28px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "20px",
              background: "rgba(15, 23, 42, 0.8)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "#38bdf8",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }}
            />
            <span>TRANSFORMATION CONTROL COCKPIT • PRODUCTION BENCHMARKS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)",
              fontWeight: 850,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              marginBottom: "10px",
              lineHeight: 1.18,
            }}
          >
            Engineering Outcomes, Not Just Promises.
          </h2>

          <p
            style={{
              fontSize: "0.96rem",
              lineHeight: 1.55,
              color: "#94a3b8",
            }}
          >
            Explore our verified architectural delivery frameworks. Select a core practice area to inspect live topology,
            production performance benchmarks, and simulate your enterprise scale impact.
          </p>
        </div>

        {/* 4 Interactive Practice Station Switchers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          {domains.map((dom) => {
            const isActive = dom.id === activeTab;
            const TabIcon = dom.icon;
            return (
              <button
                key={dom.id}
                onClick={() => setActiveTab(dom.id)}
                style={{
                  padding: "12px 14px",
                  borderRadius: "8px",
                  background: isActive
                    ? "linear-gradient(180deg, rgba(30, 58, 138, 0.5) 0%, rgba(15, 23, 42, 0.8) 100%)"
                    : "rgba(15, 23, 42, 0.5)",
                  border: isActive ? "1.5px solid #38bdf8" : "1px solid rgba(51, 65, 85, 0.6)",
                  boxShadow: isActive ? "0 0 20px rgba(56, 189, 248, 0.15)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    background: isActive ? "rgba(56, 189, 248, 0.2)" : "rgba(30, 41, 59, 0.6)",
                    color: isActive ? "#38bdf8" : "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    border: isActive ? "1px solid rgba(56, 189, 248, 0.4)" : "1px solid transparent",
                  }}
                >
                  <TabIcon size={18} />
                </div>

                <div style={{ overflow: "hidden" }}>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      fontWeight: 750,
                      color: isActive ? "#ffffff" : "#cbd5e1",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {dom.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: isActive ? "#38bdf8" : "#64748b",
                      marginTop: "2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {dom.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main High-Tech Transformation Cockpit Console */}
        <div
          style={{
            background: "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 30, 0.95) 100%)",
            borderRadius: "12px",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Top Console Instrument Bar */}
          <div
            style={{
              padding: "12px 20px",
              background: "rgba(30, 41, 59, 0.4)",
              borderBottom: "1px solid rgba(51, 65, 85, 0.6)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  padding: "3px 9px",
                  borderRadius: "4px",
                  background: "rgba(56, 189, 248, 0.15)",
                  color: "#38bdf8",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                {currentDomain.badge}
              </span>
              <span style={{ fontSize: "0.76rem", color: "#cbd5e1", fontWeight: 600 }}>
                {currentDomain.partnerAward}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.75rem", color: "#94a3b8" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ShieldCheck size={14} color="#10b981" />
                <span style={{ color: "#e2e8f0", fontWeight: 600 }}>ISO 27001 & SOC 2 Audited</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Lock size={13} color="#38bdf8" />
                <span>Zero-Trust Enforced</span>
              </div>
            </div>
          </div>

          {/* 2-Column Console Cockpit Grid */}
          <div
            style={{
              padding: "24px 28px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "28px",
            }}
            className="cockpit-grid"
          >
            {/* Left Column: Architectural Topology & Concrete Deliverables */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}
                >
                  {currentDomain.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#38bdf8", fontWeight: 600, lineHeight: 1.45, marginBottom: "8px" }}>
                  {currentDomain.headline}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.55 }}>
                  {currentDomain.description}
                </p>
              </div>

              {/* Live Architectural Topology Diagram */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  borderRadius: "8px",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 750,
                    textTransform: "uppercase",
                    color: "#38bdf8",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Network size={12} color="#38bdf8" />
                  <span>Verified Architecture Topology</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    background: "rgba(2, 6, 23, 0.8)",
                    padding: "10px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(30, 41, 59, 0.8)",
                  }}
                >
                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "0.64rem", color: "#64748b", textTransform: "uppercase" }}>Source Sinks</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#e2e8f0", marginTop: "2px" }}>
                      {currentDomain.topology.source}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                    <span style={{ fontSize: "0.62rem", color: "#10b981", fontWeight: 750 }}>
                      {currentDomain.topology.latency}
                    </span>
                    <span style={{ color: "#38bdf8", fontSize: "0.8rem", fontWeight: 800 }}>──▶</span>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      flex: 1,
                      background: "rgba(56, 189, 248, 0.1)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                    }}
                  >
                    <div style={{ fontSize: "0.64rem", color: "#38bdf8", textTransform: "uppercase", fontWeight: 750 }}>
                      Spectrum 7 Core
                    </div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff", marginTop: "2px" }}>
                      {currentDomain.topology.mesh}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                    <span style={{ fontSize: "0.62rem", color: "#10b981", fontWeight: 750 }}>99.999% SLA</span>
                    <span style={{ color: "#38bdf8", fontSize: "0.8rem", fontWeight: 800 }}>──▶</span>
                  </div>

                  <div style={{ textAlign: "center", flex: 1 }}>
                    <div style={{ fontSize: "0.64rem", color: "#64748b", textTransform: "uppercase" }}>Destination</div>
                    <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#e2e8f0", marginTop: "2px" }}>
                      {currentDomain.topology.destination}
                    </div>
                  </div>
                </div>
              </div>

              {/* Concrete Architecture Deliverables */}
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 750,
                    textTransform: "uppercase",
                    color: "#94a3b8",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                  }}
                >
                  Architectural Deliverables:
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }} className="deliverables-grid">
                  {currentDomain.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.8rem",
                        color: "#e2e8f0",
                        padding: "7px 10px",
                        borderRadius: "5px",
                        background: "rgba(15, 23, 42, 0.6)",
                        border: "1px solid rgba(51, 65, 85, 0.5)",
                        lineHeight: 1.35,
                      }}
                    >
                      <CheckCircle2 size={13} color="#38bdf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Tech Stack Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center" }}>
                <span style={{ fontSize: "0.7rem", color: "#64748b", fontWeight: 700 }}>Alliance Stack:</span>
                {currentDomain.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(30, 41, 59, 0.6)",
                      border: "1px solid rgba(51, 65, 85, 0.7)",
                      color: "#94a3b8",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Telemetry KPI Dials, Client Evidence & Interactive Simulator */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between" }}>
              {/* 3 Glowing KPI Telemetry Boxes */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {currentDomain.kpiStats.map((kpi, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      borderRadius: "8px",
                      padding: "12px 10px",
                      textAlign: "center",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 900,
                        color: "#38bdf8",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        fontFeatureSettings: "'tnum' on",
                      }}
                    >
                      {kpi.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 750,
                        color: "#ffffff",
                        marginTop: "4px",
                        lineHeight: 1.25,
                      }}
                    >
                      {kpi.label}
                    </div>
                    <div style={{ fontSize: "0.64rem", color: "#94a3b8", marginTop: "2px" }}>
                      {kpi.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Client Evidence Card */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  borderLeft: "3px solid #38bdf8",
                  borderRadius: "8px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      color: "#38bdf8",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Verified Engagement
                  </span>
                  <span style={{ fontSize: "0.74rem", fontWeight: 800, color: "#10b981" }}>
                    {currentDomain.clientOutcome.stat}
                  </span>
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#ffffff", marginBottom: "3px" }}>
                  {currentDomain.clientOutcome.client}
                </div>
                <div style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.45 }}>
                  {currentDomain.clientOutcome.result}
                </div>
              </div>

              {/* Interactive Scale Scenario Modeler */}
              <div
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(51, 65, 85, 0.8)",
                  borderRadius: "8px",
                  padding: "14px 16px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 750,
                      color: "#38bdf8",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Activity size={12} color="#38bdf8" />
                    Scale Scenario Modeler
                  </span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#ffffff", fontFeatureSettings: "'tnum' on" }}>
                    {automationVolume.toLocaleString()} monthly operations
                  </span>
                </div>

                {/* Preset Chips */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "10px" }}>
                  {volumePresets.map((preset) => (
                    <button
                      key={preset.value}
                      onClick={() => setAutomationVolume(preset.value)}
                      style={{
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: automationVolume === preset.value ? "rgba(56, 189, 248, 0.25)" : "rgba(30, 41, 59, 0.6)",
                        border: automationVolume === preset.value ? "1px solid #38bdf8" : "1px solid rgba(51, 65, 85, 0.6)",
                        color: automationVolume === preset.value ? "#38bdf8" : "#94a3b8",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={automationVolume}
                  onChange={(e) => setAutomationVolume(Number(e.target.value))}
                  style={{
                    width: "100%",
                    accentColor: "#38bdf8",
                    cursor: "pointer",
                    marginBottom: "12px",
                  }}
                />

                {/* Calculated Output Strip */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    background: "rgba(2, 6, 23, 0.6)",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(30, 41, 59, 0.7)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.64rem", color: "#94a3b8", textTransform: "uppercase" }}>
                      Annual Hours Reclaimed
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 850, color: "#ffffff", marginTop: "2px" }}>
                      {hoursSavedAnnual} hrs/yr
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "0.64rem", color: "#94a3b8", textTransform: "uppercase" }}>
                      Est. Operational Efficiency
                    </div>
                    <div style={{ fontSize: "1.05rem", fontWeight: 850, color: "#10b981", marginTop: "2px" }}>
                      ${estimatedCostSaving}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct CTA */}
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  background: "var(--blue-primary)",
                  color: "#ffffff",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 16px rgba(0, 98, 255, 0.35)",
                }}
              >
                <span>Request Enterprise Architecture Blueprint</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .cockpit-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .deliverables-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
