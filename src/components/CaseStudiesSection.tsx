"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "../data/companyData";
import {
  ArrowRight,
  X,
  CheckCircle2,
  TrendingUp,
  LayoutGrid,
  Layers,
  ChevronRight,
  ShieldAlert,
  Cpu,
} from "lucide-react";

export default function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [viewMode, setViewMode] = useState<"showcase" | "grid">("showcase");
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

  // Active case for the Showcase mode
  const activeCase =
    filteredCases.find((c) => c.id === selectedCaseId) || filteredCases[0] || CASE_STUDIES[0];

  return (
    <section
      id="insights"
      style={{
        paddingTop: "56px",
        paddingBottom: "64px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderBottom: "1px solid var(--border-light)",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Full-Width Section Header with Integrated Controls */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "28px",
          }}
        >
          {/* Left: Heading & Value Proposition */}
          <div style={{ maxWidth: "760px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.74rem",
                fontWeight: 700,
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--blue-primary)",
                marginBottom: "8px",
              }}
            >
              <span style={{ width: "20px", height: "3px", background: "var(--blue-primary)", borderRadius: "2px" }} />
              <span>FEATURED CLIENT IMPACT & ARCHITECTURES</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.75rem, 2.7vw, 2.45rem)",
                fontWeight: 850,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                lineHeight: 1.18,
                marginBottom: "8px",
              }}
            >
              Engineering Systems Across Global Markets
            </h2>

            <p
              style={{
                fontSize: "0.94rem",
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                maxWidth: "680px",
              }}
            >
              Explore verified client deployments, core architectural modernization, and quantifiable ROI delivered
              across international banking, logistics, insurance, and CPG enterprises.
            </p>
          </div>

          {/* Right: View Mode Toggle & Category Controls */}
          <div className="case-controls-wrap" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
            {/* View Switcher (Showcase vs Full Grid) */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--bg-secondary)",
                padding: "3px",
                borderRadius: "6px",
                border: "1px solid var(--border-light)",
              }}
            >
              <button
                onClick={() => setViewMode("showcase")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "4px",
                  background: viewMode === "showcase" ? "#ffffff" : "transparent",
                  color: viewMode === "showcase" ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  boxShadow: viewMode === "showcase" ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
              >
                <Layers size={14} />
                <span>Showcase View</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "4px",
                  background: viewMode === "grid" ? "#ffffff" : "transparent",
                  color: viewMode === "grid" ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  boxShadow: viewMode === "grid" ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
              >
                <LayoutGrid size={14} />
                <span>Full-Width Grid</span>
              </button>
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      // Auto-select first in filtered list
                      const first =
                        cat === "All"
                          ? CASE_STUDIES[0]
                          : CASE_STUDIES.find((c) => {
                              if (cat === "Architecture & Core") return c.category.includes("Architecture");
                              if (cat === "Data Intelligence") return c.category.includes("Data");
                              if (cat === "Enterprise Integration") return c.category.includes("Integration");
                              if (cat === "Hyperautomation & AI") return c.category.includes("Hyper") || c.category.includes("AI");
                              return c.category === cat;
                            });
                      if (first) setSelectedCaseId(first.id);
                    }}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "20px",
                      background: isSelected ? "var(--blue-primary)" : "#ffffff",
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
          </div>
        </div>

        {/* MODE 1: Full-Width Interactive Showcase (Accenture / McKinsey Style) */}
        {viewMode === "showcase" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              width: "100%",
            }}
            className="showcase-container"
          >
            {/* Left / Main Stage Feature Card (60%) */}
            <div
              className="corp-card"
              style={{
                background: "#ffffff",
                borderRadius: "10px",
                border: "1px solid var(--border-light)",
                boxShadow: "0 4px 20px rgba(0, 32, 96, 0.06)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Panoramic Top Visual Banner (150px) */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "150px",
                  background: "#0b132b",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(11, 19, 43, 0.95) 0%, rgba(11, 19, 43, 0.8) 50%, rgba(11, 19, 43, 0.4) 100%)",
                  }}
                />

                {/* Banner Metadata Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: "16px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "4px",
                          background: "var(--blue-primary)",
                          color: "#ffffff",
                          textTransform: "uppercase",
                        }}
                      >
                        {activeCase.category}
                      </span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#93c5fd" }}>
                        {activeCase.clientIndustry}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "#cbd5e1",
                        background: "rgba(0, 0, 0, 0.4)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      Production Verified • {activeCase.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                      fontWeight: 800,
                      lineHeight: 1.25,
                      letterSpacing: "-0.02em",
                      maxWidth: "850px",
                    }}
                  >
                    {activeCase.title}
                  </h3>
                </div>
              </div>

              {/* Main Body Content */}
              <div
                style={{
                  padding: "22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  flex: 1,
                }}
              >
                {/* 2-Column Problem & Solution Blueprint */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                  className="blueprint-grid"
                >
                  {/* Left Column: Challenge */}
                  <div
                    style={{
                      padding: "14px 16px",
                      background: "#fef2f2",
                      borderRadius: "6px",
                      border: "1px solid #fee2e2",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.72rem",
                        fontWeight: 750,
                        textTransform: "uppercase",
                        color: "#b91c1c",
                        marginBottom: "4px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <ShieldAlert size={13} color="#b91c1c" />
                      Legacy Constraint & Challenge
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "#450a0a", lineHeight: 1.5 }}>
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* Right Column: Delivered Solution */}
                  <div
                    style={{
                      padding: "14px 16px",
                      background: "#f0fdf4",
                      borderRadius: "6px",
                      border: "1px solid #dcfce7",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.72rem",
                        fontWeight: 750,
                        textTransform: "uppercase",
                        color: "#15803d",
                        marginBottom: "4px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <CheckCircle2 size={13} color="#15803d" />
                      Engineered Production Architecture
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "#14532d", lineHeight: 1.5 }}>
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Quantified Business ROI Strip */}
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginBottom: "6px",
                      letterSpacing: "0.06em",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <TrendingUp size={13} color="var(--blue-primary)" />
                    Verified Production ROI
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${activeCase.metrics.length}, 1fr)`,
                      gap: "10px",
                    }}
                  >
                    {activeCase.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        style={{
                          background: "var(--bg-secondary)",
                          padding: "10px 14px",
                          borderRadius: "6px",
                          border: "1px solid var(--border-light)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.2rem",
                            fontWeight: 850,
                            color: "var(--blue-primary)",
                            fontFeatureSettings: "'tnum' on",
                            lineHeight: 1.1,
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--text-secondary)",
                            fontWeight: 600,
                            marginTop: "3px",
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid var(--border-light)",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600 }}>Stack:</span>
                    {activeCase.tags.map((tag) => (
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

                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <button
                      onClick={() => setActiveModalCase(activeCase)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 18px",
                        borderRadius: "5px",
                        background: "var(--blue-primary)",
                        color: "#ffffff",
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span>Inspect Architecture Dossier</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right / Interactive Case Selector Rail (40%) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxHeight: "560px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 750,
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  paddingBottom: "4px",
                }}
              >
                Select Engagement ({filteredCases.length} Available)
              </div>

              {filteredCases.map((cs) => {
                const isSelected = cs.id === activeCase.id;
                return (
                  <div
                    key={cs.id}
                    onClick={() => setSelectedCaseId(cs.id)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "7px",
                      background: isSelected ? "#ffffff" : "#f8fafc",
                      border: isSelected ? "1.5px solid var(--blue-primary)" : "1px solid var(--border-light)",
                      boxShadow: isSelected ? "0 4px 12px rgba(0, 98, 255, 0.1)" : "none",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.borderColor = "#cbd5e1";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = "#f8fafc";
                        e.currentTarget.style.borderColor = "var(--border-light)";
                      }
                    }}
                  >
                    {/* Left Indicator Bar */}
                    {isSelected && (
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "10%",
                          bottom: "10%",
                          width: "3px",
                          background: "var(--blue-primary)",
                          borderRadius: "0 2px 2px 0",
                        }}
                      />
                    )}

                    <div style={{ flex: 1, paddingLeft: isSelected ? "6px" : "0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
                        <span
                          style={{
                            fontSize: "0.66rem",
                            fontWeight: 750,
                            color: isSelected ? "var(--blue-primary)" : "var(--text-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {cs.clientIndustry}
                        </span>
                        <span style={{ fontSize: "0.66rem", color: "#94a3b8" }}>• {cs.date}</span>
                      </div>

                      <div
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 750,
                          color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                          lineHeight: 1.3,
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {cs.title}
                      </div>
                    </div>

                    {/* Prominent Stat Badge */}
                    <div
                      style={{
                        textAlign: "right",
                        flexShrink: 0,
                        padding: "4px 8px",
                        borderRadius: "4px",
                        background: isSelected ? "var(--blue-light)" : "#ffffff",
                        border: isSelected ? "1px solid var(--blue-border)" : "1px solid var(--border-light)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 850,
                          color: "var(--blue-primary)",
                          lineHeight: 1.1,
                        }}
                      >
                        {cs.metrics[0].value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.62rem",
                          color: "var(--text-muted)",
                          fontWeight: 600,
                          maxWidth: "85px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {cs.metrics[0].label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODE 2: Full-Width Panorama 4-Column Grid */}
        {viewMode === "grid" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "18px",
              width: "100%",
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
                {/* 105px banner */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "105px",
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
                      background: "linear-gradient(to top, rgba(11, 19, 43, 0.88) 0%, rgba(11, 19, 43, 0.25) 100%)",
                    }}
                  />

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
                        fontSize: "0.66rem",
                        fontWeight: 700,
                        padding: "2px 7px",
                        borderRadius: "3px",
                        background: "var(--blue-primary)",
                        color: "#ffffff",
                      }}
                    >
                      {cs.category}
                    </span>
                    <span style={{ fontSize: "0.66rem", color: "#cbd5e1" }}>{cs.date}</span>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "7px",
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

                {/* Card Content */}
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
                        fontSize: "0.96rem",
                        fontWeight: 750,
                        color: "var(--text-primary)",
                        lineHeight: 1.35,
                        marginBottom: "4px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "2.6em",
                      }}
                    >
                      {cs.title}
                    </h3>

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
                            fontSize: "0.62rem",
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

                  {/* Card Bottom Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "6px",
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <div style={{ display: "flex", gap: "4px" }}>
                      {cs.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.66rem",
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
                      View Dossier
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Architecture Dossier Modal */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(11, 19, 43, 0.72)",
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
              maxWidth: "720px",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)",
              border: "1px solid var(--border-light)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Banner */}
            <div
              style={{
                position: "relative",
                height: "170px",
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
                  top: "14px",
                  right: "14px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(0, 0, 0, 0.6)",
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
                  bottom: "16px",
                  left: "22px",
                  right: "22px",
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
                  <span style={{ fontSize: "0.76rem", color: "#93c5fd", fontWeight: 600 }}>
                    {activeModalCase.clientIndustry}
                  </span>
                  <span style={{ fontSize: "0.76rem", color: "#cbd5e1" }}>• {activeModalCase.date}</span>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.015em" }}>
                  {activeModalCase.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "22px 26px" }}>
              {/* Verified Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${activeModalCase.metrics.length}, 1fr)`,
                  gap: "10px",
                  background: "#f8fafc",
                  padding: "12px 16px",
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
                        fontSize: "1.3rem",
                        fontWeight: 850,
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
                    fontWeight: 750,
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
                    fontWeight: 750,
                    textTransform: "uppercase",
                    color: "var(--blue-primary)",
                    marginBottom: "4px",
                  }}
                >
                  <CheckCircle2 size={14} color="var(--blue-primary)" />
                  Architectural Solution
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {activeCase.solution}
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
                    fontWeight: 750,
                    textTransform: "uppercase",
                    color: "#16a34a",
                    marginBottom: "4px",
                  }}
                >
                  <TrendingUp size={14} color="#16a34a" />
                  Measurable Business Outcome
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                  {activeCase.outcome}
                </p>
              </div>

              {/* Tags & Action */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
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
                    padding: "8px 18px",
                    borderRadius: "4px",
                    background: "var(--blue-primary)",
                    color: "#ffffff",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Discuss Architecture
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 960px) {
          .showcase-container {
            grid-template-columns: 1.45fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .case-controls-wrap {
            align-items: flex-start !important;
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          .blueprint-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
