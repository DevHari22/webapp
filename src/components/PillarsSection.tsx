"use client";

import React, { useState } from "react";
import { PILLARS, Pillar } from "../data/companyData";
import {
  Cloud,
  Cpu,
  Layers,
  ShieldCheck,
  Database,
  Radio,
  Compass,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PillarsSection() {
  const [activePillarId, setActivePillarId] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const activePillar: Pillar =
    PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  const getPillarIcon = (name: string, size = 20) => {
    switch (name) {
      case "Cloud":
        return <Cloud size={size} />;
      case "Cpu":
        return <Cpu size={size} />;
      case "Layers":
        return <Layers size={size} />;
      case "ShieldCheck":
        return <ShieldCheck size={size} />;
      case "Database":
        return <Database size={size} />;
      case "Radio":
        return <Radio size={size} />;
      case "Compass":
        return <Compass size={size} />;
      default:
        return <Sparkles size={size} />;
    }
  };

  const handleCopyCode = () => {
    if (activePillar.codeSnippet) {
      navigator.clipboard.writeText(activePillar.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="pillars"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 50px" }}>
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
            <Sparkles size={14} />
            <span>Core Architecture</span>
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
            The 7 Pillars of Spectrum Innovation
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            Every digital transformation we deliver is anchored in our proprietary 7-pillar
            framework. Click through each pillar below to inspect our architecture, deliverables,
            and production code standards.
          </p>
        </div>

        {/* 7 Pillar Horizontal Navigation Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "8px",
            marginBottom: "36px",
            background: "var(--bg-card)",
            padding: "8px",
            borderRadius: "16px",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 10px",
                  borderRadius: "10px",
                  background: isActive ? "var(--blue-primary)" : "transparent",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "4px",
                  }}
                >
                  {getPillarIcon(pillar.iconName, 16)}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      opacity: isActive ? 1 : 0.7,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    0{pillar.id}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "120px",
                  }}
                >
                  {pillar.title.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Feature Presentation Showcase */}
        <div
          className="card-glass"
          style={{
            padding: "40px",
            background: "var(--bg-card)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Top Pillar Accent Ribbon */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "var(--spectrum-gradient)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
            }}
            className="pillar-grid"
          >
            {/* Left Content Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  background: "var(--blue-light)",
                  color: "var(--blue-primary)",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "12px",
                }}
              >
                <span>{activePillar.badge}</span>
                <span>•</span>
                <span>SPECTRUM ARCHITECTURE</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {activePillar.title}
              </h3>

              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--blue-primary)",
                  marginBottom: "20px",
                }}
              >
                {activePillar.subtitle}
              </div>

              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "28px",
                }}
              >
                {activePillar.description}
              </p>

              {/* Metric Callouts */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  marginBottom: "32px",
                  padding: "16px 20px",
                  background: "var(--bg-tertiary)",
                  borderRadius: "12px",
                  border: "1px solid var(--border-light)",
                }}
              >
                {activePillar.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 800,
                        color: "var(--blue-primary)",
                        fontFeatureSettings: "'tnum' on",
                      }}
                    >
                      {metric.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enterprise Deliverables List */}
              <div style={{ marginBottom: "32px" }}>
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                  }}
                >
                  Key Deliverables & Capabilities
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {activePillar.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--blue-primary)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div style={{ marginBottom: "32px" }}>
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  Core Technology Stack
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {activePillar.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "6px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Deploy {activePillar.title}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Column: Code & Architecture Blueprint Display */}
            <div
              style={{
                borderRadius: "14px",
                background: "#090d16",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Code window title bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  background: "rgba(15, 23, 42, 0.9)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Code2 size={16} color="#38bdf8" />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "#94a3b8",
                    }}
                  >
                    architecture/{activePillar.slug}.spec
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#cbd5e1",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    transition: "all 0.2s ease",
                  }}
                  title="Copy snippet"
                >
                  {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div
                style={{
                  padding: "20px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "#e2e8f0",
                  overflowX: "auto",
                  whiteSpace: "pre",
                  flex: 1,
                }}
              >
                <code>{activePillar.codeSnippet}</code>
              </div>

              {/* Code footer status */}
              <div
                style={{
                  padding: "10px 16px",
                  background: "rgba(15, 23, 42, 0.6)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "#64748b",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#10b981",
                    }}
                  />
                  <span>Engine: Spectrum Core 7.4</span>
                </div>
                <span>Zero-Downtime Validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .pillar-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
