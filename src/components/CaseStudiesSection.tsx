"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "../data/companyData";
import { ArrowRight, X, ExternalLink, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = [
    "All",
    "Architecture & Core",
    "Data Intelligence",
    "Enterprise Integration",
    "Hyperautomation & AI",
  ];

  const filteredCases =
    selectedCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => {
          if (selectedCategory === "Architecture & Core") return c.category.includes("Architecture");
          if (selectedCategory === "Data Intelligence") return c.category.includes("Data");
          if (selectedCategory === "Enterprise Integration") return c.category.includes("Integration");
          if (selectedCategory === "Hyperautomation & AI") return c.category.includes("Hyper") || c.category.includes("AI");
          return c.category === selectedCategory;
        });

  return (
    <section
      id="insights"
      style={{
        paddingTop: "44px",
        paddingBottom: "52px",
        background: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Compact Executive Header */}
        <div style={{ maxWidth: "780px", marginBottom: "20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--blue-primary)",
              marginBottom: "8px",
            }}
          >
            <span style={{ width: "16px", height: "2.5px", background: "var(--blue-primary)", borderRadius: "2px" }} />
            <span>FEATURED STORIES & IMPACT</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.4vw, 2.05rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "8px",
              lineHeight: 1.2,
            }}
          >
            Insights & Systems That Move Industries Forward
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.5,
              color: "var(--text-secondary)",
              maxWidth: "680px",
            }}
          >
            Enterprise systems delivered across international markets. Explore featured client engagements,
            production architectures, and quantified ROI.
          </p>
        </div>

        {/* Compact Category Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "22px",
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "5px 13px",
                  borderRadius: "20px",
                  background: isSelected ? "var(--blue-primary)" : "var(--bg-secondary)",
                  color: isSelected ? "#ffffff" : "var(--text-secondary)",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  border: isSelected ? "1px solid var(--blue-primary)" : "1px solid var(--border-light)",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Streamlined Case Studies Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setActiveModalCase(cs)}
              className="corp-card"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                borderRadius: "8px",
                border: "1px solid var(--border-light)",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 32, 96, 0.08)";
                e.currentTarget.style.borderColor = "#93c5fd";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.borderColor = "var(--border-light)";
              }}
            >
              {/* Compact Thumbnail Banner (115px height) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "115px",
                  background: "#0b132b",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.3) 100%)",
                  }}
                />

                {/* Badges on image */}
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "10px",
                    right: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "3px",
                      background: "var(--blue-primary)",
                      color: "#ffffff",
                    }}
                  >
                    {cs.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.66rem",
                      fontWeight: 600,
                      color: "#cbd5e1",
                      background: "rgba(15, 23, 42, 0.65)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {cs.date}
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "10px",
                    right: "10px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#93c5fd",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {cs.clientIndustry}
                </div>
              </div>

              {/* Compact Card Content */}
              <div
                style={{
                  padding: "14px 16px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 750,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.35,
                      marginBottom: "6px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "2.7em",
                    }}
                  >
                    {cs.title}
                  </h3>

                  {/* 2-line impact summary */}
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.45,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "2.35em",
                    }}
                  >
                    {cs.outcome}
                  </p>
                </div>

                {/* Compact Metrics Bar */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)`,
                    gap: "4px",
                    background: "var(--bg-secondary)",
                    padding: "6px 8px",
                    borderRadius: "5px",
                    border: "1px solid #e2e8f0",
                    textAlign: "center",
                  }}
                >
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 800,
                          color: "var(--blue-primary)",
                          fontFeatureSettings: "'tnum' on",
                          lineHeight: 1.15,
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.64rem",
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          marginTop: "2px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Action Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "6px",
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          padding: "1px 6px",
                          borderRadius: "3px",
                          background: "#f1f5f9",
                          color: "#64748b",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    View Details
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal for Full In-Depth Case Study */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(11, 19, 43, 0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setActiveModalCase(null)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              border: "1px solid var(--border-light)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div
              style={{
                position: "relative",
                height: "160px",
                background: "#0b132b",
                overflow: "hidden",
              }}
            >
              <Image
                src={activeModalCase.image}
                alt={activeModalCase.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11, 19, 43, 0.95) 0%, rgba(11, 19, 43, 0.4) 100%)",
                }}
              />

              <button
                onClick={() => setActiveModalCase(null)}
                aria-label="Close modal"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>

              <div
                style={{
                  position: "absolute",
                  bottom: "14px",
                  left: "20px",
                  right: "20px",
                  color: "#ffffff",
                }}
              >
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "3px",
                      background: "var(--blue-primary)",
                      color: "#ffffff",
                    }}
                  >
                    {activeModalCase.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#93c5fd", fontWeight: 600 }}>
                    {activeModalCase.clientIndustry}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>• {activeModalCase.date}</span>
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.015em" }}>
                  {activeModalCase.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "20px 24px" }}>
              {/* Verified Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${activeModalCase.metrics.length}, 1fr)`,
                  gap: "10px",
                  background: "#f8fafc",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {activeModalCase.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        color: "var(--blue-primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "2px" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#dc2626",
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#dc2626" }} />
                  Enterprise Challenge
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {activeModalCase.challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "var(--blue-primary)",
                    marginBottom: "4px",
                  }}
                >
                  <CheckCircle2 size={13} color="var(--blue-primary)" />
                  Architectural Solution
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {activeModalCase.solution}
                </p>
              </div>

              {/* Business Impact & Outcome */}
              <div style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#16a34a",
                    marginBottom: "4px",
                  }}
                >
                  <TrendingUp size={13} color="#16a34a" />
                  Measurable Business Outcome
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {activeModalCase.outcome}
                </p>
              </div>

              {/* Tags & Action */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-light)",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {activeModalCase.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "2px 8px",
                        borderRadius: "4px",
                        background: "#f1f5f9",
                        color: "#475569",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={() => setActiveModalCase(null)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 16px",
                    borderRadius: "4px",
                    background: "var(--blue-primary)",
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Discuss Architecture
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
