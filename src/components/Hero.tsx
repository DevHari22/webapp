"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Zap, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "60px",
        paddingBottom: "70px",
        background: "linear-gradient(180deg, #ffffff 0%, var(--bg-secondary) 100%)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main 2-Column Split: Authority Narrative on Left + Enterprise Visual on Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
            marginBottom: "56px",
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Value Proposition */}
          <div>
            <div className="enterprise-tag">
              <span className="bar" />
              <span>ENTERPRISE DIGITAL & AI CONSULTING</span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.3rem, 4.6vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "18px",
              }}
            >
              Engineering Intelligent Systems for Connected Enterprises.
            </h1>

            <div
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                fontWeight: 600,
                color: "var(--blue-primary)",
                marginBottom: "20px",
                letterSpacing: "-0.015em",
              }}
            >
              Where Technology, Design, and Strategy Converge.
            </div>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                marginBottom: "36px",
                maxWidth: "600px",
              }}
            >
              {COMPANY_DETAILS.subheadline}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
              <a href="#contact" className="btn-primary">
                <span>Start the Conversation</span>
                <ArrowRight size={16} />
              </a>

              <a href="#capabilities" className="btn-secondary">
                <span>Explore Capabilities</span>
              </a>

              <a
                href="#insights"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginLeft: "8px",
                }}
              >
                <span>View Case Studies</span>
                <span style={{ color: "var(--blue-primary)" }}>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Enterprise Architecture Image Card */}
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-lg)",
              background: "#ffffff",
            }}
          >
            {/* Top signature rainbow bar */}
            <div className="spectrum-bar" />

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "380px",
                background: "#0b132b",
              }}
            >
              <Image
                src="/hero-spectrum.jpg"
                alt="Spectrum 7 Architecture and Data Intelligence"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11, 19, 43, 0.92) 0%, rgba(11, 19, 43, 0.2) 60%, transparent 100%)",
                }}
              />

              {/* Float Overlay Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                  color: "#ffffff",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 10px #10b981",
                    }}
                  />
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Connected Enterprise Mesh
                  </span>
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  Design • Integration • Execution
                </div>
                <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "4px" }}>
                  Unifying core legacy systems, cloud applications, and AI pipelines into a single high-velocity core.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Quantifiable Metrics Banner (Cognizant / Accenture Style) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div
              key={idx}
              className="corp-card card-featured"
              style={{
                padding: "24px 22px",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--blue-primary)",
                  fontFeatureSettings: "'tnum' on",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust & Certification Bar */}
        <div
          style={{
            padding: "18px 24px",
            borderRadius: "8px",
            background: "#ffffff",
            border: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Certified Partner Ecosystem:
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <Award size={18} color="var(--blue-primary)" />
              <span>Boomi Partner Innovation Award</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <Zap size={18} color="var(--blue-primary)" />
              <span>UiPath Automation Partner of the Year</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <ShieldCheck size={18} color="var(--blue-primary)" />
              <span>ISO/IEC 27001:2022 Certified</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
