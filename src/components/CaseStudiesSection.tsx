"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CASE_STUDIES, CaseStudy } from "../data/companyData";
import { ArrowUpRight, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section
      id="cases"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Section Header */}
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
            <TrendingUp size={14} />
            <span>Proven Enterprise Impact</span>
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
            Real-World Transformations Powered by Spectrum 7
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            See how forward-thinking Fortune 500 enterprises and hyper-growth scaleups
            achieved breakthrough scale and resilience using our 7 pillars.
          </p>
        </div>

        {/* Case Study Switcher Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "36px",
          }}
        >
          {CASE_STUDIES.map((cs) => {
            const isActive = cs.id === activeCaseId;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveCaseId(cs.id)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  background: isActive ? "var(--blue-primary)" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive ? "1px solid var(--blue-primary)" : "1px solid var(--border-light)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  boxShadow: isActive ? "var(--shadow-blue)" : "var(--shadow-sm)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{cs.client}</span>
                <span style={{ opacity: 0.7, marginLeft: "6px", fontSize: "0.8rem" }}>
                  • {cs.industry}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Spotlight Card */}
        <div
          className="card-glass"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border-light)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="case-grid"
          >
            {/* Visual Column */}
            <div
              style={{
                position: "relative",
                minHeight: "340px",
                maxHeight: "520px",
                overflow: "hidden",
                background: "#090d16",
              }}
            >
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(9, 13, 22, 0.8) 0%, transparent 60%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {activeCase.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: "rgba(9, 13, 22, 0.85)",
                      color: "#93c5fd",
                      border: "1px solid rgba(0, 98, 255, 0.4)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Narrative & Metrics Column */}
            <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--blue-primary)", textTransform: "uppercase" }}>
                    {activeCase.client}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>•</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                    {activeCase.industry}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    color: "var(--text-primary)",
                    marginBottom: "20px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {activeCase.title}
                </h3>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>
                    The Challenge
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {activeCase.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>
                    Spectrum 7 Engineering Solution
                  </div>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Impact Metrics Row */}
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "12px" }}>
                  Validated Business Outcomes
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px",
                    padding: "16px",
                    borderRadius: "12px",
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  {activeCase.impact.map((imp, idx) => (
                    <div key={idx} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 800,
                          color: "var(--blue-primary)",
                          fontFeatureSettings: "'tnum' on",
                        }}
                      >
                        {imp.metric}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                          marginTop: "2px",
                        }}
                      >
                        {imp.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .case-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
