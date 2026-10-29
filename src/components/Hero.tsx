"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Award, Zap, CheckCircle2, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import TechMeshCanvas from "./TechMeshCanvas";
import EnterpriseArchitectureVisualizer from "./EnterpriseArchitectureVisualizer";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "70px",
        paddingBottom: "80px",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Animated Tech Mesh Canvas Background */}
      <TechMeshCanvas />

      {/* Subtle Radial Ambient Tech Light Glows */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "25%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(0, 98, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Main 2-Column Split: Authority Narrative on Left + Enterprise Visual on Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "52px",
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
                fontSize: "clamp(2.4rem, 4.8vw, 4.1rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                marginBottom: "20px",
              }}
            >
              Engineering Intelligent Systems for Connected Enterprises.
            </h1>

            <div
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                fontWeight: 700,
                color: "var(--blue-primary)",
                marginBottom: "20px",
                letterSpacing: "-0.015em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>Where Technology, Design, and Strategy Converge.</span>
            </div>

            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: 1.68,
                color: "var(--text-secondary)",
                marginBottom: "36px",
                maxWidth: "620px",
              }}
            >
              {COMPANY_DETAILS.subheadline}
            </p>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <a href="#contact" className="btn-primary" style={{ padding: "14px 28px", fontSize: "0.96rem" }}>
                <span>Start the Conversation</span>
                <ArrowRight size={17} />
              </a>

              <a href="#technologies" className="btn-secondary" style={{ padding: "14px 24px", fontSize: "0.96rem" }}>
                <span>View Tech Alliances</span>
              </a>

              <a
                href="#case-studies"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginLeft: "4px",
                  textDecoration: "none",
                }}
              >
                <span>Read Case Studies</span>
                <span style={{ color: "var(--blue-primary)", fontWeight: 800 }}>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Live Enterprise Architecture Visualizer */}
          <div style={{ position: "relative" }}>
            <EnterpriseArchitectureVisualizer />
          </div>
        </div>

        {/* Quantifiable Metrics Grid (Cognizant / Accenture Style) */}
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
                padding: "26px 24px",
                background: "#ffffff",
                borderRadius: "8px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--blue-border)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0, 98, 255, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-light)";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.6rem)",
                  fontWeight: 900,
                  color: "var(--blue-primary)",
                  fontFeatureSettings: "'tnum' on",
                  letterSpacing: "-0.03em",
                  marginBottom: "4px",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.96rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.84rem",
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
            padding: "20px 28px",
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

          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <Award size={19} color="var(--blue-primary)" />
              <span>Boomi Partner Innovation Award</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <Zap size={19} color="var(--blue-primary)" />
              <span>UiPath Automation Partner of the Year</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>
              <ShieldCheck size={19} color="var(--blue-primary)" />
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
