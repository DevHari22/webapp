"use client";

import React, { useState } from "react";
import { CAPABILITIES, Capability } from "../data/companyData";
import {
  Database,
  Share2,
  Zap,
  Cpu,
  Layers,
  Compass,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CapabilitiesSection() {
  const [activeCapId, setActiveCapId] = useState<string>(CAPABILITIES[0].id);

  const activeCap = CAPABILITIES.find((c) => c.id === activeCapId) || CAPABILITIES[0];

  const getIcon = (name: string, size = 18) => {
    switch (name) {
      case "Database":
        return <Database size={size} />;
      case "Share2":
        return <Share2 size={size} />;
      case "Zap":
        return <Zap size={size} />;
      case "Cpu":
        return <Cpu size={size} />;
      case "Layers":
        return <Layers size={size} />;
      case "Compass":
        return <Compass size={size} />;
      default:
        return <Sparkles size={size} />;
    }
  };

  return (
    <section
      id="capabilities"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "880px", marginBottom: "48px" }}>
          <div className="arch-tag">
            <span className="num">[03]</span>
            <span>ENTERPRISE CAPABILITIES</span>
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
            Solving Complexity with Intelligent Transformation
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Our core practices span modern integration, data intelligence, hyperautomation,
            and cloud application engineering — building resilient digital foundations that scale.
          </p>
        </div>

        {/* Capabilities Tab Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "8px",
            marginBottom: "36px",
            background: "var(--bg-tertiary)",
            padding: "8px",
            borderRadius: "14px",
            border: "1px solid var(--border-light)",
          }}
        >
          {CAPABILITIES.map((cap) => {
            const isActive = cap.id === activeCapId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: isActive ? "var(--bg-card)" : "transparent",
                  color: isActive ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  boxShadow: isActive ? "var(--shadow-sm)" : "none",
                  border: isActive ? "1px solid var(--border-light)" : "1px solid transparent",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                }}
              >
                <div style={{ opacity: isActive ? 1 : 0.6, flexShrink: 0 }}>
                  {getIcon(cap.iconName, 16)}
                </div>
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", opacity: 0.7, marginRight: "6px" }}>
                    {cap.num}
                  </span>
                  <span>{cap.title.split("&")[0].trim()}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Presentation Display */}
        <div
          className="tech-card"
          style={{
            padding: "44px",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-light)",
            position: "relative",
          }}
        >
          {/* Top subtle rainbow accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "var(--spectrum-gradient)",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "40px",
            }}
            className="capability-grid"
          >
            {/* Left Narrative Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "3px 10px",
                  borderRadius: "6px",
                  background: "var(--blue-light)",
                  color: "var(--blue-primary)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                <span>PRACTICE {activeCap.num}</span>
                <span>•</span>
                <span>ENTERPRISE SERVICE</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.025em",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}
              >
                {activeCap.title}
              </h3>

              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--blue-primary)",
                  marginBottom: "20px",
                }}
              >
                {activeCap.headline}
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "32px",
                }}
              >
                {activeCap.description}
              </p>

              {/* Quantified Metrics Box */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  padding: "18px 22px",
                  borderRadius: "12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-light)",
                  marginBottom: "32px",
                }}
              >
                {activeCap.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <div
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color: "var(--blue-primary)",
                        fontFeatureSettings: "'tnum' on",
                      }}
                    >
                      {metric.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", marginTop: "2px" }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#contact" className="btn-primary">
                <span>Engage on {activeCap.title}</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Deliverables & Technologies Column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                background: "var(--bg-tertiary)",
                padding: "32px",
                borderRadius: "14px",
                border: "1px solid var(--border-light)",
              }}
            >
              {/* Deliverables */}
              <div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "16px",
                  }}
                >
                  Key Architectural Deliverables
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {activeCap.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.92rem",
                        color: "var(--text-primary)",
                        fontWeight: 500,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2 size={17} color="var(--blue-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Excelled At */}
              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px" }}>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  Technologies & Frameworks
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {activeCap.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "6px",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-light)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .capability-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
