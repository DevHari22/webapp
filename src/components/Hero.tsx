"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Terminal, Activity, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";

export default function Hero() {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<"cluster" | "ai" | "edge">("cluster");

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% -20%, rgba(0, 98, 255, 0.08) 0%, transparent 60%)",
      }}
    >
      {/* Background ambient geometry */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 98, 255, 0.07) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto" }}>
          {/* Top Rainbow Spectrum Pill Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 16px",
              borderRadius: "9999px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-sm)",
              marginBottom: "24px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "6px",
                borderRadius: "3px",
                background: "var(--spectrum-gradient)",
              }}
            />
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "var(--text-primary)",
                textTransform: "uppercase",
              }}
            >
              Enterprise Engineering Across 7 Pillars
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--blue-primary)",
                background: "var(--blue-light)",
                padding: "2px 8px",
                borderRadius: "12px",
              }}
            >
              v3.0 Live
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              color: "var(--text-primary)",
            }}
          >
            Empowering Enterprises Across the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--blue-primary) 0%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Full Spectrum
              <svg
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-6px",
                  width: "100%",
                  height: "8px",
                }}
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4C50 1 150 7 200 4"
                  stroke="url(#hero-spectrum-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="hero-spectrum-line" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2563eb" />
                    <stop offset="0.25" stopColor="#06b6d4" />
                    <stop offset="0.5" stopColor="#10b981" />
                    <stop offset="0.75" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            of Innovation
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              maxWidth: "760px",
              margin: "0 auto 36px",
            }}
          >
            Spectrum 7 architects, engineers, and operates high-scale cloud platforms, cognitive AI
            workflows, and zero-trust systems. Unified by our 7 pillars of technological supremacy.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <a href="#pillars" className="btn-primary" style={{ padding: "14px 28px", fontSize: "1rem" }}>
              <span>Explore The 7 Pillars</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#estimator"
              className="btn-secondary"
              style={{ padding: "14px 28px", fontSize: "1rem" }}
            >
              <Zap size={18} color="var(--blue-primary)" />
              <span>Interactive Scope Estimator</span>
            </a>

            <a
              href="#cases"
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginLeft: "8px",
              }}
            >
              <span>View Client Case Studies</span>
              <span style={{ color: "var(--blue-primary)" }}>→</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Cockpit Preview Card */}
        <div
          style={{
            position: "relative",
            maxWidth: "1060px",
            margin: "0 auto",
            borderRadius: "20px",
            padding: "8px",
            background: "linear-gradient(180deg, rgba(226, 232, 240, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.12), 0 0 40px rgba(0, 98, 255, 0.1)",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              background: "#090d16",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Cockpit Window Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 18px",
                background: "rgba(15, 23, 42, 0.9)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "#94a3b8",
                  }}
                >
                  spectrum-7-core-cluster :: live-telemetry
                </span>
              </div>

              {/* Telemetry Switcher Tabs */}
              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={() => setActiveTelemetryTab("cluster")}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: activeTelemetryTab === "cluster" ? "var(--blue-primary)" : "rgba(255, 255, 255, 0.06)",
                    color: "#ffffff",
                  }}
                >
                  Cloud Mesh
                </button>
                <button
                  onClick={() => setActiveTelemetryTab("ai")}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: activeTelemetryTab === "ai" ? "var(--blue-primary)" : "rgba(255, 255, 255, 0.06)",
                    color: "#ffffff",
                  }}
                >
                  AI Inference
                </button>
                <button
                  onClick={() => setActiveTelemetryTab("edge")}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: activeTelemetryTab === "edge" ? "var(--blue-primary)" : "rgba(255, 255, 255, 0.06)",
                    color: "#ffffff",
                  }}
                >
                  Zero-Trust
                </button>
              </div>
            </div>

            {/* Visual Canvas */}
            <div style={{ position: "relative", minHeight: "380px", maxHeight: "480px" }}>
              <Image
                src="/hero-spectrum.jpg"
                alt="Spectrum 7 Architecture Visualization"
                width={1200}
                height={600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />

              {/* Glowing Dynamic Overlay Card 1 */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "rgba(9, 13, 22, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0, 98, 255, 0.4)",
                  borderRadius: "10px",
                  padding: "14px 18px",
                  color: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                  maxWidth: "320px",
                }}
                className="animate-float"
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
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#93c5fd", letterSpacing: "0.05em" }}>
                    PILLAR 01 & 02 SYNC
                  </span>
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>Autonomous AI Agent Grid</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "4px" }}>
                  Throughput: 142k req/sec • p99: 14ms • 0 unhandled exceptions
                </div>
              </div>

              {/* Floating Dynamic Overlay Card 2 */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(9, 13, 22, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <ShieldCheck size={24} color="#38bdf8" />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700 }}>SOC 2 & ISO 27001 Enforced</div>
                  <div style={{ fontSize: "0.72rem", color: "#a5f3fc" }}>Zero-Trust Cryptographic Mesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Metrics Banner */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "40px auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
          }}
        >
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                padding: "24px 20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  color: idx === 2 ? "var(--blue-primary)" : "var(--text-primary)",
                  fontFeatureSettings: "'tnum' on, 'lnum' on",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  marginTop: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {stat.label}
              </div>
              {idx === 2 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "25%",
                    right: "25%",
                    height: "3px",
                    background: "var(--spectrum-gradient)",
                    borderRadius: "3px 3px 0 0",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
