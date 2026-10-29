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
        paddingTop: "80px",
        paddingBottom: "90px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "860px", marginBottom: "40px" }}>
          <div className="enterprise-tag">
            <span className="bar" />
            <span>CORE PRACTICE AREAS</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3rem)",
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
              fontSize: "1.08rem",
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
          className="capabilities-tab-strip"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "8px",
            marginBottom: "32px",
            background: "#ffffff",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-sm)",
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
                  borderRadius: "4px",
                  background: isActive ? "var(--blue-light)" : "transparent",
                  color: isActive ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  border: isActive ? "1px solid var(--blue-border)" : "1px solid transparent",
                  transition: "all 0.15s ease",
                  textAlign: "left",
                }}
              >
                <div style={{ color: isActive ? "var(--blue-primary)" : "var(--text-muted)", flexShrink: 0 }}>
                  {getIcon(cap.iconName, 17)}
                </div>
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  <span style={{ fontSize: "0.72rem", opacity: 0.7, marginRight: "6px" }}>
                    {cap.num}
                  </span>
                  <span>{cap.title.split("&")[0].trim()}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Presentation Display Card */}
        <div
          className="corp-card capability-card"
          style={{
            padding: "40px",
            background: "#ffffff",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-light)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "var(--blue-primary)",
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
                  gap: "6px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  background: "var(--blue-light)",
                  color: "var(--blue-primary)",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  marginBottom: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <span>PRACTICE {activeCap.num}</span>
                <span>•</span>
                <span>ENTERPRISE SERVICE</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
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
                  marginBottom: "18px",
                }}
              >
                {activeCap.headline}
              </div>

              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.65,
                  color: "var(--text-secondary)",
                  marginBottom: "30px",
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
                  borderRadius: "6px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-light)",
                  marginBottom: "30px",
                }}
              >
                {activeCap.metrics.map((metric, mIdx) => (
                  <div key={mIdx}>
                    <div
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: 800,
                        color: "var(--blue-primary)",
                        fontFeatureSettings: "'tnum' on",
                      }}
                    >
                      {metric.value}
                    </div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginTop: "2px" }}>
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
                background: "var(--bg-secondary)",
                padding: "32px",
                borderRadius: "8px",
                border: "1px solid var(--border-light)",
              }}
            >
              {/* Deliverables */}
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-primary)",
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
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2 size={17} color="var(--blue-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px" }}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    marginBottom: "12px",
                  }}
                >
                  Technologies & Ecosystem
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {activeCap.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "4px",
                        background: "#ffffff",
                        border: "1px solid var(--border-light)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        boxShadow: "var(--shadow-sm)",
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
        @media (max-width: 640px) {
          .capability-card {
            padding: 22px 16px !important;
          }
          .capabilities-tab-strip {
            display: flex !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            gap: 8px !important;
            padding: 6px !important;
            margin-bottom: 20px !important;
            -webkit-overflow-scrolling: touch;
          }
          .capabilities-tab-strip button {
            flex-shrink: 0 !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </section>
  );
}
