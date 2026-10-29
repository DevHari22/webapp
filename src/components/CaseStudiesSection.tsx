"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "../data/companyData";
import { ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Architecture & Core Systems", "Data Intelligence", "Enterprise Integration", "Hyper Automation"];

  const filteredCases =
    selectedCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="insights"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "880px", marginBottom: "40px" }}>
          <div className="arch-tag">
            <span className="num">[05]</span>
            <span>WHAT WE&apos;VE BUILT • PROVEN CLIENT IMPACT</span>
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
            Insights and Systems That Move Industries Forward
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Over the past decade, we have delivered technology solutions that transformed
            businesses from fast-scaling startups to Fortune 500 enterprises. These numbers
            reflect the outcomes, not the promises.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                background: selectedCategory === cat ? "var(--text-primary)" : "var(--bg-tertiary)",
                color: selectedCategory === cat ? "var(--bg-primary)" : "var(--text-secondary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                border: "1px solid var(--border-light)",
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="tech-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                background: "var(--bg-card)",
              }}
            >
              {/* Image banner */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  background: "#07090e",
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
                    background: "linear-gradient(to top, rgba(7, 9, 14, 0.85) 0%, transparent 70%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    display: "flex",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(0, 98, 255, 0.9)",
                      color: "#ffffff",
                    }}
                  >
                    {cs.category}
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "#ffffff",
                    fontSize: "0.8rem",
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#93c5fd" }}>{cs.clientIndustry}</span>
                  <span style={{ color: "#94a3b8" }}>{cs.date}</span>
                </div>
              </div>

              {/* Case Study Content Body */}
              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      marginBottom: "12px",
                      lineHeight: 1.3,
                    }}
                  >
                    {cs.title}
                  </h3>

                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "0.76rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>
                      The Challenge
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {cs.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "0.76rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>
                      Engineering Solution
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Quantified Outcomes */}
                <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "18px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "10px",
                      background: "var(--bg-tertiary)",
                      padding: "12px",
                      borderRadius: "10px",
                      textAlign: "center",
                      marginBottom: "16px",
                    }}
                  >
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: 800,
                            color: "var(--blue-primary)",
                            fontFeatureSettings: "'tnum' on",
                          }}
                        >
                          {m.value}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, marginTop: "2px" }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: "var(--bg-tertiary)",
                          color: "var(--text-muted)",
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
