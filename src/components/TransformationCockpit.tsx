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
  Clock,
  DollarSign,
  Cpu,
} from "lucide-react";

interface DomainOutcome {
  id: string;
  badge: string;
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
}

export default function TransformationCockpit() {
  const [activeTab, setActiveTab] = useState<string>("integration");
  const [automationVolume, setAutomationVolume] = useState<number>(25000);

  const domains: DomainOutcome[] = [
    {
      id: "integration",
      badge: "BOOMI META PARTNER INNOVATION WINNER",
      title: "Enterprise Integration Services",
      headline: "Connecting legacy mainframes, cloud SaaS, and partner ecosystems into a zero-loss API mesh.",
      description:
        "We eliminate operational data silos through universal hybrid iPaaS architectures. From B2B EDI trading networks to real-time event streaming, every transaction moves with sub-25ms latency and full ACID atomicity.",
      icon: Layers,
      kpiStats: [
        { value: "85%", label: "Interoperability Surge", sub: "Disparate systems unified" },
        { value: "<25ms", label: "Message Latency", sub: "Sub-second event bus routing" },
        { value: "99.999%", label: "Message Delivery SLA", sub: "Zero lost packets or orders" },
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
    },
    {
      id: "automation",
      badge: "UIPATH PARTNER OF THE YEAR",
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
      techStack: ["UiPath Automation Cloud", "Celonis EMS", "Python", "ABBYY FlexiCapture", "Power Automate"],
      clientOutcome: {
        client: "European Freight Depots",
        result: "Automated gate check-in and waybill processing for 4,000 trucks daily.",
        stat: "4x Depot Throughput Surge",
      },
    },
    {
      id: "data-ai",
      badge: "LAKEHOUSE & RAG ARCHITECTURE",
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
    },
    {
      id: "modernization",
      badge: "CLOUD NATIVE & HIGH-CONCURRENCY",
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
        client: "International Digital Neo-Bank",
        result: "Built an elastic digital banking core onboarding 500,000 customers monthly.",
        stat: "10x Customer Scale Supported",
      },
    },
  ];

  const currentDomain = domains.find((d) => d.id === activeTab) || domains[0];
  const Icon = currentDomain.icon;

  // Real-time calculated annual savings estimation
  const hoursSavedAnnual = Math.round((automationVolume * 12 * 0.35)).toLocaleString();
  const estimatedCostSaving = Math.round((automationVolume * 12 * 0.35 * 42)).toLocaleString();

  return (
    <section
      id="outcomes"
      style={{
        paddingTop: "68px",
        paddingBottom: "76px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "800px", marginBottom: "32px" }}>
          <div className="enterprise-tag">
            <span className="live-pulse" />
            <span>PROVEN ENTERPRISE IMPACT • MEASURABLE PROGRESS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.4vw, 2.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              color: "var(--text-primary)",
              marginBottom: "10px",
              lineHeight: 1.16,
            }}
          >
            Engineering Outcomes, Not Just Promises.
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            Our work spans enterprise integration fabrics, intelligent RPA, and cloud data platforms.
            Each architecture is engineered with mathematical intent to produce verifiable efficiency gains.
          </p>
        </div>

        {/* Interactive Domain Navigation Rail */}
        <div className="cockpit-nav-rail">
          {domains.map((dom) => {
            const isActive = dom.id === activeTab;
            const TabIcon = dom.icon;
            return (
              <button
                key={dom.id}
                onClick={() => setActiveTab(dom.id)}
                className={`cockpit-tab ${isActive ? "active" : ""}`}
              >
                <div className="tab-icon">
                  <TabIcon size={16} />
                </div>
                <div className="tab-info">
                  <span className="tab-title">{dom.title}</span>
                  <span className="tab-badge">{dom.badge.split(" ")[0]} {dom.badge.split(" ")[1]}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Transformation Cockpit Card */}
        <div className="cockpit-card">
          {/* Top Header Strip */}
          <div className="cockpit-top-strip">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="strip-badge">
                <span className="live-dot" />
                <span>{currentDomain.badge}</span>
              </div>
              <span className="strip-code">VERIFIED DELIVERY FRAMEWORK</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", color: "#64748b", fontWeight: 700 }}>
              <ShieldCheck size={15} color="var(--blue-primary)" />
              <span>ISO/IEC 27001 & SOC 2 Audited</span>
            </div>
          </div>

          {/* 2-Column Cockpit Body */}
          <div className="cockpit-grid">
            {/* Left Column: Domain Narrative, Deliverables & Tech Stack */}
            <div className="cockpit-col-left">
              <div>
                <h3 className="domain-heading">{currentDomain.title}</h3>
                <p className="domain-headline">{currentDomain.headline}</p>
                <p className="domain-desc">{currentDomain.description}</p>
              </div>

              {/* Concrete Architecture Deliverables */}
              <div>
                <div className="sub-tag">ARCHITECTURAL DELIVERABLES:</div>
                <div className="deliverables-list">
                  {currentDomain.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-item">
                      <CheckCircle2 size={15} color="var(--blue-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Alliance Tags */}
              <div>
                <div className="sub-tag">CORE PLATFORMS & ALLIANCES:</div>
                <div className="tech-pills-wrap">
                  {currentDomain.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quantified Benchmarks & Verified Case Outcome */}
            <div className="cockpit-col-right">
              {/* 3 Metric Benchmark Cards */}
              <div>
                <div className="sub-tag">VERIFIED PERFORMANCE BENCHMARKS:</div>
                <div className="metrics-grid">
                  {currentDomain.kpiStats.map((stat, idx) => (
                    <div key={idx} className="metric-box">
                      <div className="metric-val">{stat.value}</div>
                      <div className="metric-lbl">{stat.label}</div>
                      <div className="metric-sub">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Client Case Study Card */}
              <div className="client-outcome-card">
                <div className="outcome-top">
                  <span className="outcome-badge">VERIFIED CLIENT IMPACT</span>
                  <span className="outcome-stat">{currentDomain.clientOutcome.stat}</span>
                </div>
                <div className="outcome-client">{currentDomain.clientOutcome.client}</div>
                <div className="outcome-desc">{currentDomain.clientOutcome.result}</div>
              </div>

              {/* Interactive ROI Impact Estimator */}
              <div className="roi-estimator-box">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Scale Impact Calculator
                  </span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--blue-primary)" }}>
                    {automationVolume.toLocaleString()} monthly operations
                  </span>
                </div>

                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={automationVolume}
                  onChange={(e) => setAutomationVolume(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--blue-primary)", cursor: "pointer", marginBottom: "12px" }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", background: "#ffffff", padding: "10px 14px", borderRadius: "6px", border: "1px solid var(--border-light)" }}>
                  <div>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Annual Hours Reclaimed
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--text-primary)" }}>
                      {hoursSavedAnnual} hrs/yr
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                      Est. Operational Efficiency
                    </div>
                    <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--blue-primary)" }}>
                      ${estimatedCostSaving}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "8px", flexWrap: "wrap", gap: "10px" }}>
                <a href="#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "11px 20px" }}>
                  <span>Initiate Architecture Assessment</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .live-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--blue-primary);
          box-shadow: 0 0 0 0 rgba(0, 98, 255, 0.7);
          animation: pulseDot 2s infinite;
          display: inline-block;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(0, 98, 255, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(0, 98, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 98, 255, 0); }
        }

        /* Nav Rail */
        .cockpit-nav-rail {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 10px;
          margin-bottom: 20px;
        }

        .cockpit-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
        }

        .cockpit-tab:hover {
          border-color: #cbd5e1;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        .cockpit-tab.active {
          background: #ffffff;
          border-color: var(--blue-primary);
          color: var(--text-primary);
          box-shadow: 0 6px 20px rgba(0, 98, 255, 0.1);
        }

        .tab-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }

        .cockpit-tab.active .tab-icon {
          background: var(--blue-light);
          color: var(--blue-primary);
        }

        .tab-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .tab-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tab-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--blue-primary);
          margin-top: 2px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* Cockpit Card */
        .cockpit-card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          box-shadow: 0 16px 45px -10px rgba(11, 19, 43, 0.08);
          overflow: hidden;
        }

        .cockpit-top-strip {
          padding: 12px 24px;
          background: #f8fafc;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .strip-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 4px;
          background: var(--blue-light);
          border: 1px solid var(--blue-border);
          color: var(--blue-primary);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .strip-badge .live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--blue-primary);
        }

        .strip-code {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 700;
        }

        .cockpit-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          padding: 28px 28px;
        }

        @media (min-width: 960px) {
          .cockpit-grid {
            grid-template-columns: 1.08fr 0.92fr;
          }
        }

        .cockpit-col-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .domain-heading {
          font-size: 1.55rem;
          font-weight: 900;
          color: var(--text-primary);
          letter-spacing: -0.025em;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .domain-headline {
          font-size: 0.98rem;
          color: var(--blue-primary);
          font-weight: 700;
          line-height: 1.45;
          margin-bottom: 10px;
        }

        .domain-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .sub-tag {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .deliverables-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 600;
          line-height: 1.4;
          padding: 8px 12px;
          border-radius: 6px;
          background: #f8fafc;
          border: 1px solid var(--border-light);
        }

        .tech-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .tech-pill {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 4px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #334155;
        }

        /* Right Column */
        .cockpit-col-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          justifyContent: space-between;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .metric-box {
          background: #f8fafc;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 12px 10px;
          text-align: center;
        }

        .metric-val {
          font-size: 1.55rem;
          font-weight: 900;
          color: var(--blue-primary);
          line-height: 1.1;
        }

        .metric-lbl {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-top: 4px;
          line-height: 1.25;
        }

        .metric-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .client-outcome-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-left: 3px solid var(--blue-primary);
          border-radius: 8px;
          padding: 14px 16px;
        }

        .outcome-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .outcome-badge {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--blue-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .outcome-stat {
          font-size: 0.75rem;
          font-weight: 800;
          color: #059669;
        }

        .outcome-client {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .outcome-desc {
          font-size: 0.84rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .roi-estimator-box {
          background: #f8fafc;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 14px 16px;
        }
      `}</style>
    </section>
  );
}
