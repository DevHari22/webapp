"use client";

import React, { useState, useEffect } from "react";
import {
  Zap,
  Activity,
  Layers,
  Shield,
  Cpu,
  Database,
  Server,
  Cloud,
  CheckCircle2,
  Sparkles,
  Bot,
  RefreshCw,
  GitBranch,
  Terminal,
} from "lucide-react";

export default function EnterpriseArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState<"integration" | "ai" | "cloud">("integration");
  const [selectedNode, setSelectedNode] = useState<string>("core");
  const [eventCount, setEventCount] = useState<number>(1489200);
  const [mounted, setMounted] = useState<boolean>(false);

  // Live ticking counter for high-tech telemetry feel
  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setEventCount((prev) => prev + Math.floor(Math.random() * 85) + 30);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const tabData = {
    integration: {
      title: "Hybrid Integration Fabric",
      subtitle: "Full-Mesh API & Event Orchestration",
      latency: "8.2ms",
      throughput: "1.48M/s",
      reliability: "99.999%",
      inputs: [
        { id: "sap", label: "SAP & Oracle Core", type: "ERP Ledger", icon: Database, color: "#f59e0b" },
        { id: "salesforce", label: "Salesforce & CRM", type: "Customer Core", icon: Cloud, color: "#0ea5e9" },
        { id: "legacy", label: "Legacy Mainframes", type: "On-Prem Core", icon: Server, color: "#64748b" },
      ],
      core: {
        title: "Spectrum 7 Universal Mesh",
        tech: "Boomi iPaaS • MuleSoft • Kafka",
        desc: "Unified enterprise service mesh routing transactions with zero-data-loss atomicity.",
      },
      outputs: [
        { id: "cloudapps", label: "Hyperscale Cloud", type: "AWS / Azure", icon: Cloud, color: "#10b981" },
        { id: "partner", label: "B2B Trading Mesh", type: "EDI / REST Gateway", icon: GitBranch, color: "#8b5cf6" },
        { id: "mobile", label: "Omnichannel APIs", type: "Sub-15ms Edge", icon: Zap, color: "#0062ff" },
      ],
    },
    ai: {
      title: "Autonomous Agentic AI Engine",
      subtitle: "Domain LLMs & Cognitive RAG Pipelines",
      latency: "94ms",
      throughput: "420 tokens/s",
      reliability: "99.8%",
      inputs: [
        { id: "docs", label: "Enterprise Invoices & PDFs", type: "Vision OCR", icon: Server, color: "#8b5cf6" },
        { id: "db", label: "Corporate Lakehouse", type: "Structured DW", icon: Database, color: "#0ea5e9" },
        { id: "telemetry", label: "Process Event Logs", type: "Celonis Stream", icon: Activity, color: "#f59e0b" },
      ],
      core: {
        title: "Spectrum 7 Cognitive Core",
        tech: "PyTorch • Milvus Vector RAG • Custom LLM",
        desc: "Enterprise reasoning engine executing agentic automations with deterministic guardrails.",
      },
      outputs: [
        { id: "bots", label: "UiPath Robotic Fleet", type: "24/7 Unattended", icon: Bot, color: "#ea580c" },
        { id: "copilot", label: "Executive AI Copilot", type: "Decision Engine", icon: Sparkles, color: "#0062ff" },
        { id: "erp-sync", label: "Automated Ledger Post", type: "Zero-Touch", icon: CheckCircle2, color: "#10b981" },
      ],
    },
    cloud: {
      title: "Multi-Cloud Resilient Data Mesh",
      subtitle: "Unified Zero-Copy Lakehouse Architecture",
      latency: "14ms",
      throughput: "2.8 TB/hr",
      reliability: "100%",
      inputs: [
        { id: "aws", label: "AWS Hyperscale", type: "us-east & eu-west", icon: Cloud, color: "#f59e0b" },
        { id: "azure", label: "Azure Cloud Core", type: "Enterprise Tenant", icon: Cloud, color: "#0ea5e9" },
        { id: "onprem", label: "Private Edge Tier", type: "ISO 27001 DMZ", icon: Server, color: "#64748b" },
      ],
      core: {
        title: "Snowflake & Databricks Hub",
        tech: "Delta Lake • dbt Semantic • Unity Catalog",
        desc: "Single source of truth with cross-region zero-copy sharing and live lineage tracking.",
      },
      outputs: [
        { id: "analytics", label: "Live BI Dashboards", type: "Sub-Second SQL", icon: Activity, color: "#10b981" },
        { id: "ml", label: "Predictive Models", type: "Production MLflow", icon: Cpu, color: "#8b5cf6" },
        { id: "audit", label: "SOC 2 Audit Telemetry", type: "Continuous Proof", icon: Shield, color: "#0062ff" },
      ],
    },
  };

  const currentData = tabData[activeTab];

  return (
    <div
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid rgba(226, 232, 240, 0.9)",
        boxShadow: "0 25px 65px -15px rgba(11, 19, 43, 0.16)",
        background: "#0b132b",
        color: "#ffffff",
        position: "relative",
      }}
    >
      {/* Signature Spectrum 7 Rainbow Accent Bar */}
      <div
        style={{
          height: "4px",
          width: "100%",
          background: "var(--spectrum-gradient)",
        }}
      />

      {/* Terminal Style Console Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          background: "rgba(15, 23, 42, 0.9)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Terminal Window Dots & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "6px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: "#94a3b8",
              letterSpacing: "0.04em",
              marginLeft: "6px",
            }}
          >
            SPECTRUM-7 // ORCHESTRATION ARCHITECTURE
          </span>
        </div>

        {/* Live System Status Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "rgba(16, 185, 129, 0.12)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            fontSize: "0.72rem",
            color: "#34d399",
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
            }}
          />
          <span>MESH ACTIVE</span>
        </div>
      </div>

      {/* Interactive Architecture Domain Switcher Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(15, 23, 42, 0.5)",
        }}
      >
        {[
          { id: "integration", label: "Integration Fabric", icon: Zap },
          { id: "ai", label: "Agentic AI", icon: Sparkles },
          { id: "cloud", label: "Multi-Cloud Mesh", icon: Cloud },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setSelectedNode("core");
              }}
              style={{
                flex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
                padding: "12px 10px",
                background: isActive ? "rgba(0, 98, 255, 0.16)" : "transparent",
                color: isActive ? "#60a5fa" : "#94a3b8",
                fontWeight: 700,
                fontSize: "0.82rem",
                border: "none",
                borderBottom: isActive ? "2px solid #0062ff" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Node Flow Canvas */}
      <div
        style={{
          padding: "24px 20px",
          background: "radial-gradient(ellipse at 50% 30%, rgba(0, 98, 255, 0.1) 0%, rgba(11, 19, 43, 0.98) 75%)",
          position: "relative",
          minHeight: "260px",
        }}
      >
        {/* Subtle Cyber Grid Lines in Canvas */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* Interactive 3-Tier Node Topology */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr 1fr",
            gap: "14px",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* TIER 1: SOURCE INGESTION NODES */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
              ENTERPRISE SOURCES
            </div>
            {currentData.inputs.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: isSelected ? "rgba(0, 98, 255, 0.25)" : "rgba(30, 41, 59, 0.7)",
                    border: isSelected ? "1px solid #0062ff" : "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = node.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = isSelected ? "#0062ff" : "rgba(255, 255, 255, 0.08)")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "5px", background: `${node.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={13} color={node.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>{node.label}</div>
                      <div style={{ fontSize: "0.66rem", color: "#94a3b8" }}>{node.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TIER 2: SPECTRUM 7 SYNCHRONIZED CORE ORCHESTRATOR */}
          <div
            onClick={() => setSelectedNode("core")}
            style={{
              padding: "18px 16px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(0, 98, 255, 0.22) 0%, rgba(15, 23, 42, 0.95) 100%)",
              border: "1.5px solid #0062ff",
              boxShadow: "0 0 25px rgba(0, 98, 255, 0.25)",
              textAlign: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {/* Glowing live radar ring */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(0, 98, 255, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
                border: "1px solid #0062ff",
                boxShadow: "0 0 15px rgba(0, 98, 255, 0.6)",
              }}
            >
              <Cpu size={22} color="#ffffff" />
            </div>

            <div style={{ fontSize: "0.86rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.01em" }}>
              {currentData.core.title}
            </div>

            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#93c5fd",
                marginTop: "4px",
                fontFamily: "var(--font-mono)",
              }}
            >
              {currentData.core.tech}
            </div>

            <div
              style={{
                marginTop: "10px",
                padding: "4px 8px",
                borderRadius: "4px",
                background: "rgba(0, 0, 0, 0.35)",
                fontSize: "0.66rem",
                color: "#cbd5e1",
                lineHeight: 1.35,
              }}
            >
              {currentData.core.desc}
            </div>
          </div>

          {/* TIER 3: DELIVERY & TARGET ECOSYSTEM */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
              DELIVERY ECOSYSTEM
            </div>
            {currentData.outputs.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: isSelected ? "rgba(0, 98, 255, 0.25)" : "rgba(30, 41, 59, 0.7)",
                    border: isSelected ? "1px solid #0062ff" : "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(8px)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = node.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = isSelected ? "#0062ff" : "rgba(255, 255, 255, 0.08)")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "5px", background: `${node.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={13} color={node.color} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ffffff" }}>{node.label}</div>
                      <div style={{ fontSize: "0.66rem", color: "#94a3b8" }}>{node.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live System Telemetry Banner Footer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          padding: "14px 20px",
          background: "rgba(15, 23, 42, 0.95)",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <div>
          <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 700 }}>SYNCHRONIZED EVENTS</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#38bdf8", marginTop: "2px" }} suppressHydrationWarning>
            {mounted ? eventCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "1,489,200"} /s
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 700 }}>LATENCY BENCHMARK</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#34d399", marginTop: "2px" }}>
            {currentData.latency} (p99)
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.65rem", color: "#64748b", fontWeight: 700 }}>RELIABILITY SLA</div>
          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#a78bfa", marginTop: "2px" }}>
            {currentData.reliability} UPTIME
          </div>
        </div>
      </div>
    </div>
  );
}
