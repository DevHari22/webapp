"use client";

import React, { useState } from "react";
import { PILLARS } from "../data/companyData";
import {
  Calculator,
  Check,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  Zap,
} from "lucide-react";

export default function EstimatorSection() {
  const [selectedPillars, setSelectedPillars] = useState<number[]>([1, 2, 3]);
  const [tier, setTier] = useState<"growth" | "scaleup" | "enterprise">("scaleup");
  const [timeline, setTimeline] = useState<"rapid" | "standard" | "continuous">("standard");

  const togglePillar = (id: number) => {
    if (selectedPillars.includes(id)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter((p) => p !== id));
      }
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  // Dynamic calculations
  const pillarCount = selectedPillars.length;
  const complexityScore = Math.min(
    98,
    30 +
      pillarCount * 8 +
      (tier === "enterprise" ? 25 : tier === "scaleup" ? 12 : 5)
  );

  const teamSize = Math.max(
    3,
    Math.round(
      pillarCount * 0.9 +
        (tier === "enterprise" ? 4 : tier === "scaleup" ? 2 : 1)
    )
  );

  const estimatedWeeks =
    timeline === "rapid"
      ? Math.max(4, Math.round(pillarCount * 1.2))
      : timeline === "standard"
      ? Math.max(8, Math.round(pillarCount * 2.1))
      : 24;

  const getEstimatedCostRange = () => {
    const base = pillarCount * 12000;
    const tierMultiplier = tier === "enterprise" ? 2.5 : tier === "scaleup" ? 1.6 : 1.0;
    const speedMultiplier = timeline === "rapid" ? 1.25 : 1.0;

    const min = Math.round((base * tierMultiplier * speedMultiplier) / 5000) * 5000;
    const max = Math.round(min * 1.4 / 5000) * 5000;

    return `$${(min / 1000).toFixed(0)}k - $${(max / 1000).toFixed(0)}k`;
  };

  const handleApplyToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      // update hidden or state if available
      const selectElem = document.getElementById("pillar-select") as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = "multi";
      }
    }
  };

  return (
    <section
      id="estimator"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
        position: "relative",
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
            <Calculator size={14} />
            <span>Interactive Engineering Tool</span>
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
            Project Scope & Architecture Estimator
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            Configure your technical requirements across our 7 pillars to model team
            composition, delivery timeline, and investment scale in real time.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="estimator-grid"
        >
          {/* Controls Column */}
          <div
            className="card-glass"
            style={{
              padding: "36px",
              background: "var(--bg-card)",
            }}
          >
            {/* Step 1: Select Pillars */}
            <div style={{ marginBottom: "32px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <label
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  1. Select Required Pillars ({selectedPillars.length} / 7 active)
                </label>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Click to toggle
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                }}
              >
                {PILLARS.map((p) => {
                  const isSelected = selectedPillars.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      onClick={() => togglePillar(p.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        background: isSelected ? "var(--blue-light)" : "var(--bg-tertiary)",
                        border: isSelected
                          ? "1.5px solid var(--blue-primary)"
                          : "1px solid var(--border-light)",
                        color: isSelected ? "var(--blue-primary)" : "var(--text-secondary)",
                        fontWeight: 600,
                        fontSize: "0.86rem",
                        textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "4px",
                          background: isSelected ? "var(--blue-primary)" : "transparent",
                          border: isSelected
                            ? "none"
                            : "1.5px solid var(--border-light)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {isSelected && <Check size={12} color="#ffffff" />}
                      </div>
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        0{p.id}. {p.title.split("&")[0].trim()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Deployment Scale */}
            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                }}
              >
                2. Target Scale & Reliability Level
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { id: "growth", label: "Growth / Mid-Market", desc: "Up to 100k MAU, Standard SLA" },
                  { id: "scaleup", label: "Scaleup / High-Traffic", desc: "100k - 2M MAU, 99.9% SLA" },
                  { id: "enterprise", label: "Global Enterprise", desc: "Millions of MAU, 99.99% SLA" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTier(item.id as any)}
                    style={{
                      padding: "14px 12px",
                      borderRadius: "10px",
                      background: tier === item.id ? "var(--blue-light)" : "var(--bg-tertiary)",
                      border: tier === item.id
                        ? "1.5px solid var(--blue-primary)"
                        : "1px solid var(--border-light)",
                      color: "var(--text-primary)",
                      textAlign: "left",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: tier === item.id ? "var(--blue-primary)" : "var(--text-primary)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline Urgency */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "12px",
                }}
              >
                3. Engagement Model & Urgency
              </label>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { id: "rapid", label: "Rapid Sprint", desc: "Fast time-to-market" },
                  { id: "standard", label: "Phased Roadmap", desc: "Deep architectural rigour" },
                  { id: "continuous", label: "Dedicated Pod", desc: "Quarterly ongoing scaling" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id as any)}
                    style={{
                      padding: "12px",
                      borderRadius: "10px",
                      background: timeline === item.id ? "var(--blue-light)" : "var(--bg-tertiary)",
                      border: timeline === item.id
                        ? "1.5px solid var(--blue-primary)"
                        : "1px solid var(--border-light)",
                      color: "var(--text-primary)",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: timeline === item.id ? "var(--blue-primary)" : "var(--text-primary)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Results / Output Card */}
          <div
            style={{
              padding: "36px",
              borderRadius: "18px",
              background: "#090d16",
              color: "#ffffff",
              boxShadow: "var(--shadow-lg), 0 0 40px rgba(0, 98, 255, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
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
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase" }}>
                    MODEL ESTIMATE
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Architecture Blueprint</h3>
                </div>

                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    background: "rgba(0, 98, 255, 0.2)",
                    border: "1px solid rgba(0, 98, 255, 0.5)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#93c5fd",
                  }}
                >
                  Complexity: {complexityScore}/100
                </div>
              </div>

              {/* Key Calculated Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
                <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px", borderRadius: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "0.8rem", marginBottom: "6px" }}>
                    <Users size={16} color="#38bdf8" />
                    <span>Dedicated Engineering Pod</span>
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff" }}>
                    {teamSize} Specialists
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "2px" }}>
                    Lead Architect, AI & Cloud Engineers
                  </div>
                </div>

                <div style={{ background: "rgba(255, 255, 255, 0.04)", padding: "16px", borderRadius: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "0.8rem", marginBottom: "6px" }}>
                    <Clock size={16} color="#38bdf8" />
                    <span>Estimated Horizon</span>
                  </div>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff" }}>
                    {timeline === "continuous" ? "Ongoing Pod" : `${estimatedWeeks} Weeks`}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "2px" }}>
                    2-week iterative sprint deliverables
                  </div>
                </div>
              </div>

              {/* Selected Pillars Summary */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", marginBottom: "10px" }}>
                  Included Pillar Modules:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {selectedPillars.map((id) => {
                    const p = PILLARS.find((item) => item.id === id);
                    return (
                      <span
                        key={id}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: "rgba(0, 98, 255, 0.15)",
                          border: "1px solid rgba(0, 98, 255, 0.3)",
                          color: "#93c5fd",
                        }}
                      >
                        Pillar 0{id}: {p?.title.split("&")[0].trim()}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Estimated Investment Range */}
              <div
                style={{
                  background: "rgba(0, 98, 255, 0.12)",
                  border: "1px solid rgba(0, 98, 255, 0.3)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "28px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#93c5fd", textTransform: "uppercase" }}>
                    Estimated Scope Range
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                    {getEstimatedCostRange()}
                  </div>
                </div>

                <div style={{ textAlign: "right", fontSize: "0.75rem", color: "#94a3b8" }}>
                  Includes full IP ownership &<br />SOC 2 governance
                </div>
              </div>
            </div>

            {/* Lock in CTA */}
            <button
              onClick={handleApplyToContact}
              className="btn-primary"
              style={{
                width: "100%",
                padding: "14px 20px",
                fontSize: "1rem",
                justifyContent: "center",
              }}
            >
              <span>Lock In This Scope & Book Consultation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .estimator-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
