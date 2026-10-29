"use client";

import React, { useState } from "react";
import Image from "next/image";
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

  const getIndustryImage = (id: string) => {
    switch (id) {
      case "banking":
        return "/cloud-security.jpg";
      case "insurance":
        return "/ai-platform.jpg";
      case "logistics":
        return "/hero-spectrum.jpg";
      case "cpg":
        return "/ai-platform.jpg";
      case "manufacturing":
        return "/cloud-security.jpg";
      default:
        return "/hero-spectrum.jpg";
    }
  };

  return (
    <section
      id="industries"
      style={{
        paddingTop: "80px",
        paddingBottom: "90px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header (Cognizant Style) */}
        <div style={{ maxWidth: "860px", marginBottom: "40px" }}>
          <div className="enterprise-tag">
            <span className="bar" />
            <span>INDUSTRIES WE EMPOWER</span>
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
            Intelligence Built Around Industry Realities
          </h2>

          <p
            style={{
              fontSize: "1.08rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            Our industry practices blend deep domain expertise with advanced engineering,
            automation, and data intelligence to help organisations operate smarter and deliver
            measurable impact.
          </p>
        </div>

        {/* Industry Tabs (Cognizant Corporate Tabs) */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "32px",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "8px",
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
                  borderRadius: "4px",
                  background: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  border: isActive ? "1px solid #cbd5e1" : "1px solid transparent",
                  borderBottom: isActive ? "3px solid var(--blue-primary)" : "1px solid transparent",
                  boxShadow: isActive ? "var(--shadow-sm)" : "none",
                  transition: "all 0.15s ease",
                  marginBottom: "-10px",
                }}
              >
                {getIndustryIcon(ind.id)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Industry Main Presentation Card */}
        <div
          className="corp-card"
          style={{
            background: "#ffffff",
            boxShadow: "var(--shadow-md)",
            border: "1px solid var(--border-light)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="industry-grid"
          >
            {/* Visual Header / Cover Image */}
            <div
              style={{
                position: "relative",
                minHeight: "280px",
                background: "#0b132b",
              }}
            >
              <Image
                src={getIndustryImage(activeIndustry.id)}
                alt={activeIndustry.name}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(11, 19, 43, 0.95) 0%, rgba(11, 19, 43, 0.4) 60%, transparent 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  right: "32px",
                  color: "#ffffff",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    background: "var(--blue-primary)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}
                >
                  GLOBAL SECTOR PRACTICE
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    marginBottom: "8px",
                  }}
                >
                  {activeIndustry.name}
                </h3>

                <div style={{ fontSize: "1.02rem", color: "#93c5fd", fontWeight: 600 }}>
                  {activeIndustry.headline}
                </div>
              </div>
            </div>

            {/* Content Body Grid: Overview on Left + Key Enablers on Right */}
            <div
              style={{
                padding: "40px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "36px",
              }}
              className="industry-body-grid"
            >
              {/* Left: Overview & Metric */}
              <div>
                <h4 style={{ fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "12px" }}>
                  Executive Summary
                </h4>

                <p style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "28px" }}>
                  {activeIndustry.description}
                </p>

                {/* Quantified Impact Banner */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "18px 24px",
                    borderRadius: "6px",
                    background: "var(--blue-light)",
                    border: "1px solid var(--blue-border)",
                    marginBottom: "28px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      color: "var(--blue-primary)",
                      fontFeatureSettings: "'tnum' on",
                    }}
                  >
                    {activeIndustry.impactMetric.value}
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4 }}>
                    {activeIndustry.impactMetric.label}
                  </div>
                </div>

                <div>
                  <a href="#insights" className="btn-secondary">
                    <span>View Transformation Case Study</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Right: What We Enable */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  padding: "30px",
                  borderRadius: "8px",
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
                      color: "var(--text-primary)",
                      marginBottom: "18px",
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
                          fontSize: "0.94rem",
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
                    marginTop: "24px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border-light)",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Audited under ISO 27001:2022, SOC 2 Type II, and industry regulatory frameworks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .industry-body-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
