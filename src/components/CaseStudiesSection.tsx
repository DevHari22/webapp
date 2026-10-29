"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "../data/companyData";
import { ArrowUpRight, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

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
        paddingTop: "80px",
        paddingBottom: "90px",
        background: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "860px", marginBottom: "36px" }}>
          <div className="enterprise-tag">
            <span className="bar" />
            <span>FEATURED STORIES & IMPACT</span>
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
            Insights and Systems That Move Industries Forward
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Over the past decade, we have delivered enterprise systems across international markets.
            Explore our featured client engagements and measurable outcomes below.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "36px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: "4px",
                background: selectedCategory === cat ? "var(--blue-primary)" : "var(--bg-secondary)",
                color: selectedCategory === cat ? "#ffffff" : "var(--text-secondary)",
                fontWeight: 700,
                fontSize: "0.85rem",
                border: "1px solid var(--border-light)",
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
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
              className="corp-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#ffffff",
              }}
            >
              {/* Image banner */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "220px",
                  background: "#0b132b",
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
                    background: "linear-gradient(to top, rgba(11, 19, 43, 0.88) 0%, transparent 60%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "4px",
                      background: "var(--blue-primary)",
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
                  <span style={{ fontWeight: 700, color: "#93c5fd" }}>{cs.clientIndustry}</span>
                  <span style={{ color: "#cbd5e1" }}>{cs.date}</span>
                </div>
              </div>

              {/* Case Study Body */}
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

                  <div style={{ marginBottom: "14px" }}>
                    <div style={{ fontSize: "0.76rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "3px" }}>
                      Challenge
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {cs.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "0.76rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "3px" }}>
                      Delivered Solution
                    </div>
                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Outcomes Row */}
                <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "18px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                      background: "var(--bg-secondary)",
                      padding: "12px",
                      borderRadius: "6px",
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

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.74rem",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: "var(--bg-secondary)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border-light)",
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
