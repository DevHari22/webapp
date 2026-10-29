"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Zap, Activity } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "75px",
        paddingBottom: "85px",
        position: "relative",
        borderBottom: "1px solid var(--border-light)",
        overflow: "hidden",
      }}
    >
      {/* High-Tech Ambient Radial Spotlight Glow */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "450px",
          background: "radial-gradient(ellipse at 50% 30%, rgba(0, 98, 255, 0.25) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Top Tag & Architectural Heading */}
        <div style={{ maxWidth: "980px" }}>
          {/* Eyebrow architectural label with status pulse */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "5px 14px",
              borderRadius: "9999px",
              background: "rgba(0, 98, 255, 0.12)",
              border: "1px solid rgba(0, 98, 255, 0.35)",
              marginBottom: "20px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#93c5fd",
              }}
            >
              [01] ENTERPRISE DIGITAL CONSULTING & INTEGRATED SYSTEMS
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#ffffff",
              marginBottom: "18px",
            }}
          >
            Engineering Intelligent Systems for Connected Enterprises.
          </h1>

          {/* Secondary Subhead with cyan/blue glow gradient */}
          <div
            style={{
              fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, #38bdf8 0%, #0062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "24px",
              letterSpacing: "-0.015em",
            }}
          >
            Where Technology, Design, and Strategy Converge.
          </div>

          {/* Lead Paragraph */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.22rem)",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
              maxWidth: "820px",
              marginBottom: "36px",
            }}
          >
            {COMPANY_DETAILS.subheadline}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "14px",
              marginBottom: "56px",
            }}
          >
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
                color: "#94a3b8",
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

        {/* Hero Visual Canvas with TechnePlus Architecture Preview */}
        <div
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "#07090e",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 98, 255, 0.15)",
            marginBottom: "56px",
          }}
        >
          {/* Subtle top rainbow spectrum bar */}
          <div className="spectrum-bar" style={{ height: "4px" }} />

          {/* High-tech telemetry header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 18px",
              background: "rgba(13, 18, 30, 0.95)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.76rem",
              color: "#94a3b8",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              <span>spectrum-7-core :: unified-connected-mesh</span>
            </div>
            <div style={{ color: "#38bdf8", fontWeight: 600 }}>
              LATENCY: 14ms • SOC 2 TYPE II ENFORCED
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "440px",
              background: "#07090e",
            }}
          >
            <Image
              src="/hero-spectrum.jpg"
              alt="Spectrum 7 Architecture and Data Intelligence"
              fill
              priority
              style={{
                objectFit: "cover",
                opacity: 0.88,
              }}
            />

            {/* Dark gradient overlay for text readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(6, 8, 13, 0.98) 0%, rgba(6, 8, 13, 0.4) 60%, transparent 100%)",
              }}
            />

            {/* Overlay Architecture Badges */}
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                left: "28px",
                right: "28px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div style={{ maxWidth: "480px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 10px #10b981",
                    }}
                  />
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#93c5fd", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Connected Enterprise Mesh
                  </span>
                </div>
                <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.01em" }}>
                  Design • Integration • Execution
                </div>
                <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "4px", lineHeight: 1.5 }}>
                  Unifying legacy monoliths, modern SaaS, and custom AI pipelines into a secure, zero-downtime operational core.
                </div>
              </div>

              {/* Verified ISO & Award Badge */}
              <div
                style={{
                  padding: "12px 18px",
                  borderRadius: "10px",
                  background: "rgba(13, 18, 30, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <ShieldCheck size={24} color="#38bdf8" />
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700 }}>ISO/IEC 27001:2022</div>
                  <div style={{ fontSize: "0.72rem", color: "#94a3b8" }}>Enterprise Information Security Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantifiable Impact Metrics Grid (From TechnePlus) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginBottom: "50px",
          }}
        >
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: "26px 22px",
                borderTop: idx === 0 ? "3px solid var(--blue-primary)" : "1px solid var(--border-light)",
                background: "rgba(13, 18, 30, 0.8)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  fontFeatureSettings: "'tnum' on",
                  letterSpacing: "-0.03em",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#93c5fd",
                  marginBottom: "8px",
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

        {/* Partner Recognition & Award Bar (From TechnePlus) */}
        <div
          style={{
            padding: "20px 24px",
            borderRadius: "12px",
            background: "rgba(13, 18, 30, 0.75)",
            border: "1px solid var(--border-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "18px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Recognised Partner Ecosystem:
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>
              <Award size={16} color="var(--blue-primary)" />
              <span>Boomi Partner Innovation Award</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>
              <Zap size={16} color="var(--blue-primary)" />
              <span>UiPath Automation Partner of the Year</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>
              <ShieldCheck size={16} color="var(--blue-primary)" />
              <span>ISO/IEC 27001:2022 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
