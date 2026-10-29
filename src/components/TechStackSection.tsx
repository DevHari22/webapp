"use client";

import React, { useState } from "react";
import { ShieldCheck, CheckCircle2, Award, Zap, Layers, Server } from "lucide-react";

interface TechItem {
  name: string;
  category: "integration" | "data-ai" | "automation" | "apps";
  headline: string;
  badge?: string;
}

export default function TechStackSection() {
  const [filter, setFilter] = useState<"all" | "integration" | "data-ai" | "automation" | "apps">("all");

  const technologies: TechItem[] = [
    // Integration & Cloud
    { name: "Boomi iPaaS", category: "integration", headline: "Enterprise Hybrid Integration & API Management", badge: "Award Winner" },
    { name: "MuleSoft AnyPoint", category: "integration", headline: "Full-Lifecycle API Mesh & ESB Orchestration", badge: "Enterprise" },
    { name: "Apache Kafka", category: "integration", headline: "Distributed Event Streaming & High-Throughput Pub/Sub", badge: "Core" },
    { name: "AWS & Microsoft Azure", category: "integration", headline: "Multi-Cloud Hyperscale Infrastructure", badge: "Certified" },
    { name: "Oracle Cloud & ERP", category: "integration", headline: "Financial & Enterprise Core Operations", badge: "Specialty" },

    // Data & AI
    { name: "Snowflake Lakehouse", category: "data-ai", headline: "Multi-Cloud Data Warehousing & Zero-Copy Sharing", badge: "Core" },
    { name: "Databricks", category: "data-ai", headline: "Unified Data Analytics & Lakehouse AI", badge: "Core" },
    { name: "dbt (Data Build Tool)", category: "data-ai", headline: "Automated Data Transformation & Lineage Validation", badge: "Standard" },
    { name: "PyTorch & Python", category: "data-ai", headline: "Custom Deep Learning & Neural Model Engineering", badge: "AI" },
    { name: "Vector Databases (Milvus)", category: "data-ai", headline: "High-Dimensional Vector Retrieval for Enterprise RAG", badge: "AI" },

    // Hyperautomation
    { name: "UiPath Automation Cloud", category: "automation", headline: "End-to-End Enterprise Robotic Process Automation", badge: "Partner of Year" },
    { name: "Microsoft Power Automate", category: "automation", headline: "Office 365 & Cloud Workflow Automations", badge: "Enterprise" },
    { name: "Celonis Process Mining", category: "automation", headline: "Process Bottleneck Discovery & Conformance Checking", badge: "Specialty" },
    { name: "Intelligent Document OCR", category: "automation", headline: "Automated Multi-Lingual Invoice & Policy Ingestion", badge: "AI" },

    // Applications & Frontend
    { name: "Next.js 16 (App Router)", category: "apps", headline: "High-Speed Enterprise Frontends & Global Edge Caching", badge: "Core" },
    { name: "React 19 & TypeScript", category: "apps", headline: "Scalable Concurrent SPAs & Type-Safe Microfrontends", badge: "Core" },
    { name: "Kubernetes & Docker", category: "apps", headline: "Zero-Downtime Multi-Region Microservices Deployment", badge: "Cloud Native" },
    { name: "Node.js & Go Microservices", category: "apps", headline: "Sub-15ms Low-Latency Enterprise Backend APIs", badge: "Systems" },
  ];

  const filteredTech =
    filter === "all"
      ? technologies
      : technologies.filter((t) => t.category === filter);

  return (
    <section
      id="technologies"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "880px", marginBottom: "40px" }}>
          <div className="arch-tag">
            <span className="num">[06]</span>
            <span>TECHNOLOGIES WE EXCEL AT</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Battle-Tested Platforms for Enterprise Scale
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            We partner with leading global technology providers. Every tool in our stack is
            chosen for security, high-throughput reliability, and long-term maintainability.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {[
            { id: "all", label: "All Technologies" },
            { id: "integration", label: "Integration & Cloud" },
            { id: "data-ai", label: "Data Intelligence & AI" },
            { id: "automation", label: "Hyper Automation & RPA" },
            { id: "apps", label: "Applications & Modern Web" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                background: filter === item.id ? "var(--text-primary)" : "var(--bg-card)",
                color: filter === item.id ? "var(--bg-primary)" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "1px solid var(--border-light)",
                transition: "all 0.15s ease",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
            marginBottom: "50px",
          }}
        >
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="tech-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--bg-card)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {item.name}
                  </span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: item.badge === "Award Winner" || item.badge === "Partner of Year" ? "var(--blue-light)" : "var(--bg-tertiary)",
                        color: item.badge === "Award Winner" || item.badge === "Partner of Year" ? "var(--blue-primary)" : "var(--text-muted)",
                        fontWeight: 700,
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {item.headline}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "18px",
                  fontSize: "0.76rem",
                  color: "var(--blue-primary)",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} />
                <span>Enterprise Certified Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & ISMS Certified Box */}
        <div
          style={{
            padding: "28px 32px",
            borderRadius: "14px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue-primary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              SECURITY & GOVERNANCE COMMITMENT
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginTop: "2px" }}>
              Certified under ISO/IEC 27001:2022
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              A reflection of our commitment to information security and data integrity at every layer of client engagement.
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "var(--blue-light)",
                color: "var(--blue-primary)",
                fontWeight: 700,
                fontSize: "0.85rem",
                border: "1px solid var(--blue-border)",
              }}
            >
              <ShieldCheck size={18} />
              <span>ISMS Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
