"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { INDUSTRIES, Industry, CASE_STUDIES } from "../data/companyData";
import {
  Landmark,
  Shield,
  Truck,
  ShoppingBag,
  Factory,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ShieldCheck,
  TrendingUp,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndustry = INDUSTRIES[currentIndex] || INDUSTRIES[0];

  // Resolve matching case study
  const activeCaseStudy =
    CASE_STUDIES.find((cs) => cs.id === activeIndustry.caseStudyRef) ||
    CASE_STUDIES.find((cs) => cs.clientIndustry.toLowerCase().includes(activeIndustry.name.toLowerCase())) ||
    CASE_STUDIES[0];

  const getIndustryIcon = (id: string, size = 18) => {
    switch (id) {
      case "banking":
        return <Landmark size={size} />;
      case "insurance":
        return <Shield size={size} />;
      case "logistics":
        return <Truck size={size} />;
      case "cpg":
        return <ShoppingBag size={size} />;
      case "manufacturing":
        return <Factory size={size} />;
      default:
        return <Landmark size={size} />;
    }
  };

  const getIndustryImage = (id: string) => {
    switch (id) {
      case "banking":
        return "/banking-core.jpg";
      case "insurance":
        return "/ai-platform.jpg";
      case "logistics":
        return "/logistics-hub.jpg";
      case "cpg":
        return "/hero-spectrum.jpg";
      case "manufacturing":
        return "/cloud-security.jpg";
      default:
        return "/hero-spectrum.jpg";
    }
  };

  const getIndustryTags = (id: string) => {
    switch (id) {
      case "banking":
        return ["ISO 20022 Ledgers", "Real-Time Kafka Mesh", "Zero-Trust KYC/AML", "Sub-15ms Payment Rails"];
      case "insurance":
        return ["Intelligent OCR Triage", "Algorithmic Risk Models", "Policy API Mesh", "Automated Adjudication"];
      case "logistics":
        return ["Multi-Modal Telemetry", "Boomi iPaaS Fabric", "EDI 204/214 Hub", "Automated Dispatch"];
      case "cpg":
        return ["Snowflake Lakehouse", "dbt Transformations", "Omnichannel ERP Sync", "Demand Forecasting"];
      case "manufacturing":
        return ["IIoT Sensor Ingestion", "SCADA Integration", "Edge ML Telemetry", "Predictive Maintenance"];
      default:
        return ["Cloud Native", "API Mesh", "Autonomous AI", "ISO 27001"];
    }
  };

  // Next / Prev slide navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % INDUSTRIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  };

  // Auto-play sliding motion for industry showcase
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <section
      id="industries"
      style={{
        paddingTop: "90px",
        paddingBottom: "105px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Header & Integrated Slider Controls Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "36px",
          }}
        >
          <div style={{ maxWidth: "780px" }}>
            <div className="enterprise-tag">
              <span className="live-pulse" />
              <span>SECTOR SPECIALIZATIONS • 5 GLOBAL PRACTICES</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
                marginBottom: "14px",
                lineHeight: 1.15,
              }}
            >
              Intelligence Built Around Industry Realities
            </h2>

            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
              }}
            >
              Our dedicated sector practices fuse vertical domain acumen with enterprise integration fabrics,
              cloud-native data engineering, and autonomous AI systems.
            </p>
          </div>

          {/* Precision Playback & Carousel Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#ffffff",
              padding: "6px 10px",
              borderRadius: "10px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 4px 16px rgba(11, 19, 43, 0.05)",
            }}
          >
            {/* Auto-Slide Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "6px",
                background: isAutoPlaying ? "var(--blue-light)" : "#f8fafc",
                color: isAutoPlaying ? "var(--blue-primary)" : "var(--text-muted)",
                fontSize: "0.8rem",
                fontWeight: 700,
                border: isAutoPlaying ? "1px solid var(--blue-border)" : "1px solid var(--border-light)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              title={isAutoPlaying ? "Pause Sector Showcase" : "Resume Sector Showcase"}
            >
              {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isAutoPlaying ? "Auto Slide" : "Paused"}</span>
            </button>

            {/* Slide Index Counter */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.84rem",
                fontWeight: 800,
                color: "var(--text-muted)",
                padding: "0 8px",
              }}
            >
              <span style={{ color: "var(--blue-primary)" }}>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span style={{ opacity: 0.5 }}> / </span>
              <span>{String(INDUSTRIES.length).padStart(2, "0")}</span>
            </div>

            {/* Previous Slide Button */}
            <button
              onClick={() => {
                prevSlide();
                setIsAutoPlaying(false);
              }}
              className="ctrl-btn"
              aria-label="Previous Industry"
              title="Previous Industry"
            >
              <ChevronLeft size={17} />
            </button>

            {/* Next Slide Button */}
            <button
              onClick={() => {
                nextSlide();
                setIsAutoPlaying(false);
              }}
              className="ctrl-btn"
              aria-label="Next Industry"
              title="Next Industry"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Elite Segmented Sector Rail (Replaces old browser tabs) */}
        <div className="sector-rail-container">
          <div className="sector-rail">
            {INDUSTRIES.map((ind, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`sector-tab-btn ${isActive ? "active" : ""}`}
                >
                  <div className="tab-icon-box">
                    {getIndustryIcon(ind.id, 16)}
                  </div>
                  <div className="tab-content">
                    <span className="tab-name">{ind.name}</span>
                    <span className="tab-metric">{ind.impactMetric.value}</span>
                  </div>

                  {/* 60fps CSS Progress Line on Active Tab */}
                  {isActive && (
                    <div
                      key={`prog-${currentIndex}`}
                      className="tab-progress-bar"
                      style={{
                        animationPlayState: isAutoPlaying ? "running" : "paused",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Showcase Console: 2-Column Command Center */}
        <div
          className="master-showcase-card"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* LEFT COLUMN: Visual Command Hub with High-Res Photography */}
          <div className="showcase-left-hero">
            <Image
              src={getIndustryImage(activeIndustry.id)}
              alt={activeIndustry.name}
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 560px"
              style={{ objectFit: "cover" }}
            />

            {/* High-Tech Dark Gradient + Blueprint Grid Overlay */}
            <div className="hero-gradient-overlay" />
            <div className="hero-blueprint-grid" />

            {/* Top Floating Badge Bar */}
            <div className="hero-top-bar">
              <div className="hero-badge">
                <span className="live-dot" />
                <span>GLOBAL PRACTICE</span>
              </div>
              <div className="hero-code">
                SEC-0{currentIndex + 1} // ENTERPRISE BLUEPRINT
              </div>
            </div>

            {/* Bottom Hero Overlay: Title, Headline, Glassmorphic Impact KPI HUD */}
            <div className="hero-bottom-content">
              <h3 className="hero-sector-title">{activeIndustry.name}</h3>
              <p className="hero-sector-headline">{activeIndustry.headline}</p>

              {/* Glassmorphism Metric Card */}
              <div className="glass-metric-hud">
                <div className="hud-metric-row">
                  <div className="hud-metric-value">{activeIndustry.impactMetric.value}</div>
                  <div className="hud-metric-label">{activeIndustry.impactMetric.label}</div>
                </div>
                <div className="hud-metric-footer">
                  <ShieldCheck size={14} color="#38bdf8" />
                  <span>ISO 27001 & SOC 2 Type II Audited Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Transformation Blueprint, Key Enablers & Real Case Study */}
          <div className="showcase-right-body">
            {/* Section A: Strategic Blueprint */}
            <div>
              <div className="body-section-tag">
                INDUSTRY TRANSFORMATION BLUEPRINT
              </div>
              <p className="body-description">{activeIndustry.description}</p>

              {/* Technology & Architectural Tags */}
              <div className="tech-tags-wrap">
                {getIndustryTags(activeIndustry.id).map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Section B: Core Architectural Pillars (Key Enablers) */}
            <div>
              <div className="body-subheading">
                CORE DOMAIN ARCHITECTURES:
              </div>

              <div className="enablers-grid">
                {activeIndustry.keyEnablers.map((item, eIdx) => (
                  <div key={eIdx} className="enabler-card">
                    <div className="enabler-icon">
                      <CheckCircle2 size={15} color="var(--blue-primary)" />
                    </div>
                    <span className="enabler-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section C: Verified Client Outcome (Resolved from CASE_STUDIES) */}
            <div className="case-study-callout">
              <div className="case-study-header">
                <span className="case-study-badge">VERIFIED CLIENT OUTCOME</span>
                <span className="case-study-date">{activeCaseStudy.date}</span>
              </div>

              <h4 className="case-study-title">{activeCaseStudy.title}</h4>
              <p className="case-study-outcome">{activeCaseStudy.outcome}</p>

              {/* Quantified Outcome Metric Chips */}
              <div className="case-study-metrics">
                {activeCaseStudy.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="case-metric-chip">
                    <span className="chip-val">{m.value}</span>
                    <span className="chip-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <a href="#case-studies" className="case-study-link">
                <span>Read Full Implementation Story</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Section D: Enterprise Governance Footer */}
            <div className="showcase-footer">
              <div className="footer-assurance">
                <span className="dot-ok" />
                <span>Zero-Trust mTLS • SRE 99.99% Availability SLA</span>
              </div>

              <a href="#contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
                <span>Schedule Sector Briefing</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .live-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--blue-primary);
          box-shadow: 0 0 0 0 rgba(0, 98, 255, 0.7);
          animation: pulseDot 2s infinite;
          display: inline-block;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(0, 98, 255, 0.7); }
          70% { box-shadow: 0 0 0 7px rgba(0, 98, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 98, 255, 0); }
        }

        .ctrl-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .ctrl-btn:hover {
          background: var(--blue-primary);
          color: #ffffff;
          border-color: var(--blue-primary);
          transform: translateY(-1px);
        }

        /* Sector Rail Navigation */
        .sector-rail-container {
          margin-bottom: 24px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .sector-rail-container::-webkit-scrollbar {
          display: none;
        }

        .sector-rail {
          display: flex;
          gap: 10px;
          background: #ffffff;
          padding: 8px;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 18px rgba(11, 19, 43, 0.04);
          min-width: max-content;
        }

        .sector-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .sector-tab-btn:hover {
          background: #f8fafc;
          color: var(--text-primary);
        }

        .sector-tab-btn.active {
          background: #ffffff;
          border-color: #cbd5e1;
          color: var(--text-primary);
          box-shadow: 0 6px 18px rgba(0, 98, 255, 0.08);
        }

        .tab-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .sector-tab-btn.active .tab-icon-box {
          background: var(--blue-light);
          color: var(--blue-primary);
        }

        .tab-content {
          display: flex;
          flex-direction: column;
        }

        .tab-name {
          font-size: 0.88rem;
          font-weight: 800;
          line-height: 1.25;
        }

        .tab-metric {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--blue-primary);
          margin-top: 2px;
        }

        /* 60fps Animated Progress Bar */
        .tab-progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--blue-primary);
          border-radius: 0 3px 3px 0;
          animation: railProgress 6s linear forwards;
        }

        @keyframes railProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* Master Showcase Card */
        .master-showcase-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid var(--border-light);
          box-shadow: 0 24px 60px -12px rgba(11, 19, 43, 0.09);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          transition: all 0.3s ease;
        }

        @media (min-width: 1040px) {
          .master-showcase-card {
            grid-template-columns: 1.02fr 1.18fr;
          }
        }

        /* Showcase Left Hero Column */
        .showcase-left-hero {
          position: relative;
          min-height: 520px;
          background: #0b132b;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 32px;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 19, 43, 0.78) 0%,
            rgba(11, 19, 43, 0.45) 45%,
            rgba(11, 19, 43, 0.95) 95%
          );
          z-index: 1;
        }

        .hero-blueprint-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 32px 32px;
          z-index: 1;
          pointer-events: none;
        }

        .hero-top-bar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .hero-badge .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
        }

        .hero-code {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #94a3b8;
          letter-spacing: 0.04em;
        }

        .hero-bottom-content {
          position: relative;
          z-index: 2;
          margin-top: auto;
        }

        .hero-sector-title {
          font-size: clamp(1.75rem, 2.6vw, 2.4rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin-bottom: 8px;
        }

        .hero-sector-headline {
          font-size: 1.02rem;
          color: #93c5fd;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 520px;
        }

        /* Glassmorphism Metric Card */
        .glass-metric-hud {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 10px;
          padding: 16px 20px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
        }

        .hud-metric-row {
          display: flex;
          align-items: baseline;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hud-metric-value {
          font-size: 2.1rem;
          font-weight: 900;
          color: #38bdf8;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .hud-metric-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hud-metric-footer {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.76rem;
          color: #94a3b8;
          font-weight: 600;
        }

        /* Showcase Right Body */
        .showcase-right-body {
          padding: 36px clamp(24px, 3.5vw, 44px);
          display: flex;
          flex-direction: column;
          gap: 26px;
          justifyContent: space-between;
          background: #ffffff;
        }

        .body-section-tag {
          font-size: 0.74rem;
          font-weight: 800;
          color: var(--blue-primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .body-description {
          font-size: 1.02rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .tech-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #334155;
          letter-spacing: 0.02em;
        }

        .body-subheading {
          font-size: 0.76rem;
          font-weight: 800;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 12px;
        }

        .enablers-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        @media (min-width: 640px) {
          .enablers-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .enabler-card {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid var(--border-light);
          transition: all 0.15s ease;
        }
        .enabler-card:hover {
          border-color: #cbd5e1;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(11, 19, 43, 0.04);
        }

        .enabler-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .enabler-text {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }

        /* Case Study Callout */
        .case-study-callout {
          background: #f8fafc;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          border-left: 4px solid var(--blue-primary);
          padding: 20px 22px;
        }

        .case-study-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .case-study-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--blue-primary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .case-study-date {
          font-size: 0.74rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .case-study-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 6px;
        }

        .case-study-outcome {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .case-study-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .case-metric-chip {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 6px 12px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
        }

        .chip-val {
          font-size: 0.95rem;
          font-weight: 900;
          color: var(--blue-primary);
          line-height: 1.1;
        }

        .chip-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-top: 1px;
        }

        .case-study-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.84rem;
          font-weight: 800;
          color: var(--blue-primary);
          text-decoration: none;
          transition: gap 0.15s ease;
        }
        .case-study-link:hover {
          gap: 9px;
        }

        /* Showcase Footer */
        .showcase-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 14px;
        }

        .footer-assurance {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .dot-ok {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
