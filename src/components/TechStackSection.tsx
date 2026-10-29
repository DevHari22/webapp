"use client";

import React, { useState } from "react";
import { Cpu, ShieldCheck, CheckCircle2, Server, Globe, Database, Terminal } from "lucide-react";

interface TechItem {
  name: string;
  category: "cloud" | "ai" | "frontend" | "security";
  desc: string;
  badge?: string;
}

export default function TechStackSection() {
  const [filter, setFilter] = useState<"all" | "cloud" | "ai" | "frontend" | "security">("all");

  const technologies: TechItem[] = [
    { name: "Next.js 16", category: "frontend", desc: "App Router, Turbopack, Server Actions", badge: "Core" },
    { name: "React 19", category: "frontend", desc: "Concurrent rendering & Server Components", badge: "Core" },
    { name: "TypeScript", category: "frontend", desc: "Strict end-to-end static typing", badge: "Standard" },
    { name: "PyTorch & Python", category: "ai", desc: "Deep neural nets & custom LLM fine-tuning", badge: "Core" },
    { name: "LangChain & Agents", category: "ai", desc: "Autonomous multi-agent orchestration", badge: "AI" },
    { name: "Vector Search (Milvus/Pinecone)", category: "ai", desc: "Sub-10ms high-dimensional embeddings", badge: "AI" },
    { name: "Kubernetes & Docker", category: "cloud", desc: "Multi-region cluster orchestration", badge: "Infra" },
    { name: "Terraform & IaC", category: "cloud", desc: "Automated reproducible cloud environments", badge: "Infra" },
    { name: "AWS & Google Cloud", category: "cloud", desc: "Hyperscale resilience & serverless", badge: "Cloud" },
    { name: "Kafka & Event Streams", category: "security", desc: "1M+ events/sec distributed message broker", badge: "Data" },
    { name: "ClickHouse & Snowflake", category: "security", desc: "Real-time analytical data lakehouse", badge: "Data" },
    { name: "Rust & Go", category: "security", desc: "Ultra-low latency microservices & IoT firmware", badge: "Systems" },
    { name: "HashiCorp Vault", category: "security", desc: "Zero-Trust secrets management & KMS", badge: "Security" },
    { name: "React Native", category: "frontend", desc: "Cross-platform native iOS & Android apps", badge: "Mobile" },
  ];

  const filteredTech =
    filter === "all"
      ? technologies
      : technologies.filter((t) => t.category === filter);

  return (
    <section
      id="tech"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "var(--blue-light)",
              color: "var(--blue-primary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
              border: "1px solid var(--blue-border)",
            }}
          >
            <Server size={14} />
            <span>Engineering Ecosystem</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "18px",
            }}
          >
            Built on Battle-Tested Technology
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            We don&apos;t chase fleeting hype. Every technology in our stack is selected for
            hardened security, extreme performance, and decades of enterprise maintainability.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          {[
            { id: "all", label: "Full Spectrum Stack" },
            { id: "cloud", label: "Cloud & DevOps" },
            { id: "ai", label: "Artificial Intelligence" },
            { id: "frontend", label: "Web & Mobile" },
            { id: "security", label: "Data, Security & Systems" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                background: filter === item.id ? "var(--text-primary)" : "var(--bg-tertiary)",
                color: filter === item.id ? "var(--bg-primary)" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.88rem",
                border: "1px solid var(--border-light)",
                transition: "all 0.2s ease",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="card-glass"
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {item.name}
                  </span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        padding: "2px 8px",
                        borderRadius: "10px",
                        background: "var(--blue-light)",
                        color: "var(--blue-primary)",
                        fontWeight: 700,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "16px",
                  fontSize: "0.75rem",
                  color: "var(--blue-primary)",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} />
                <span>Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Compliance Trust Bar */}
        <div
          style={{
            padding: "28px 36px",
            borderRadius: "16px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue-primary)", textTransform: "uppercase" }}>
              ENTERPRISE COMPLIANCE & GOVERNANCE
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Rigorous Security Baked into Every Line of Code
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {["SOC 2 Type II", "ISO 27001", "HIPAA Compliant", "GDPR Certified", "AWS Premier Tier"].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                }}
              >
                <ShieldCheck size={18} color="var(--blue-primary)" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
