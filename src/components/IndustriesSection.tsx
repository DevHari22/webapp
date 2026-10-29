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
        return <Landmark size={20} />;
      case "insurance":
        return <Shield size={20} />;
      case "logistics":
        return <Truck size={20} />;
      case "cpg":
        return <ShoppingBag size={20} />;
      case "manufacturing":
        return <Factory size={20} />;
      default:
        return <Landmark size={20} />;
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
      }}
    >
      <div className="container">
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
                  padding: "12px 20px",
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
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-light)",
          }}
        >
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
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--blue-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "8px",
                }}
              >
                PRACTICE OVERVIEW
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
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
                  color: "var(--text-primary)",
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
                  color: "var(--text-secondary)",
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
                  gap: "16px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-light)",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "var(--blue-primary)",
                    fontFeatureSettings: "'tnum' on",
                  }}
                >
                  {activeIndustry.impactMetric.value}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-muted)", maxWidth: "200px" }}>
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
                background: "var(--bg-tertiary)",
                padding: "32px",
                borderRadius: "14px",
                border: "1px solid var(--border-light)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
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
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--blue-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border-light)",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                Compliant with international industry regulations: Basel III, HIPAA, ISO 27001, and GDPR.
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
