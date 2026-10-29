"use client";

import React, { useState } from "react";
import { INDUSTRIES, Industry } from "../data/companyData";
import { Landmark, Shield, Truck, ShoppingBag, Factory, CheckCircle2, ArrowRight } from "lucide-react";

export default function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "banking":
        return <Landmark size={18} />;
      case "insurance":
        return <Shield size={18} />;
      case "logistics":
        return <Truck size={18} />;
      case "cpg":
        return <ShoppingBag size={18} />;
      case "manufacturing":
        return <Factory size={18} />;
      default:
        return <Landmark size={18} />;
    }
  };

  return (
    <section
      id="industries"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(0, 98, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: "880px", marginBottom: "48px" }}>
          <div className="arch-tag">
            <span className="num">[04]</span>
            <span>INDUSTRIES WE EMPOWER</span>
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
            Intelligence Built Around Industry Realities
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Our industry practices blend deep domain expertise with advanced engineering,
            automation, and data intelligence to help organisations operate smarter and deliver
            measurable impact.
          </p>
        </div>

        {/* Industry Horizontal Selector Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 22px",
                  borderRadius: "9999px",
                  background: isActive ? "var(--blue-primary)" : "rgba(255, 255, 255, 0.04)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  border: isActive ? "1px solid #38bdf8" : "1px solid var(--border-light)",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  boxShadow: isActive ? "0 0 25px rgba(0, 98, 255, 0.45)" : "none",
                  transition: "all 0.2s ease",
                  backdropFilter: "blur(12px)",
                }}
              >
                {getIndustryIcon(ind.id)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Spotlight Card */}
        <div
          className="tech-card"
          style={{
            padding: "44px",
            background: "rgba(13, 18, 30, 0.85)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Subtle top rainbow accent */}
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
            className="industry-grid"
          >
            {/* Left Narrative Column */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#38bdf8",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                DOMAIN PRACTICE MATRIX
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {activeIndustry.name}
              </h3>

              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#93c5fd",
                  marginBottom: "18px",
                  lineHeight: 1.5,
                }}
              >
                {activeIndustry.headline}
              </div>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.65,
                  color: "#94a3b8",
                  marginBottom: "28px",
                }}
              >
                {activeIndustry.description}
              </p>

              {/* Quantified Impact Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "18px",
                  padding: "16px 22px",
                  borderRadius: "12px",
                  background: "rgba(0, 98, 255, 0.12)",
                  border: "1px solid rgba(0, 98, 255, 0.35)",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    fontFeatureSettings: "'tnum' on",
                  }}
                >
                  {activeIndustry.impactMetric.value}
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#93c5fd", maxWidth: "220px", lineHeight: 1.4 }}>
                  {activeIndustry.impactMetric.label}
                </div>
              </div>

              <div>
                <a href="#insights" className="btn-secondary" style={{ padding: "10px 20px", fontSize: "0.88rem" }}>
                  <span>View Related Case Study</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right What We Enable Column */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                padding: "32px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#94a3b8",
                    marginBottom: "20px",
                  }}
                >
                  What We Enable Across {activeIndustry.name}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {activeIndustry.keyEnablers.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "0.92rem",
                        color: "#ffffff",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2 size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.8rem",
                  color: "#64748b",
                  lineHeight: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                <span>Compliant with Basel III, HIPAA, ISO 27001, and SOC 2 standards.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .industry-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
}
