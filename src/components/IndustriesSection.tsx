"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { INDUSTRIES, Industry } from "../data/companyData";
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
  ExternalLink,
} from "lucide-react";

export default function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndustry = INDUSTRIES[currentIndex] || INDUSTRIES[0];

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
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Header & Slider Controls Row */}
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
          <div style={{ maxWidth: "800px" }}>
            <div className="enterprise-tag">
              <span className="bar" />
              <span>INDUSTRIES WE EMPOWER</span>
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
              Our industry practices blend deep domain expertise with advanced engineering,
              automation, and data intelligence to help global enterprises operate smarter and deliver
              measurable value.
            </p>
          </div>

          {/* Industry Slider Motion Console */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid var(--border-light)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Play/Pause */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "5px",
                background: isAutoPlaying ? "var(--blue-light)" : "#f1f5f9",
                color: isAutoPlaying ? "var(--blue-primary)" : "var(--text-muted)",
                fontSize: "0.8rem",
                fontWeight: 700,
                border: isAutoPlaying ? "1px solid var(--blue-border)" : "1px solid var(--border-light)",
                cursor: "pointer",
              }}
              title={isAutoPlaying ? "Pause Sector Showcase" : "Resume Sector Showcase"}
            >
              {isAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isAutoPlaying ? "Auto Slide" : "Paused"}</span>
            </button>

            {/* Slide Counter */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 800,
                color: "var(--text-muted)",
                padding: "0 6px",
              }}
            >
              <span style={{ color: "var(--blue-primary)" }}>{String(currentIndex + 1).padStart(2, "0")}</span>
              <span> / </span>
              <span>{String(INDUSTRIES.length).padStart(2, "0")}</span>
            </div>

            {/* Arrow Navigation */}
            <div style={{ display: "flex", gap: "4px" }}>
              <button
                onClick={() => {
                  prevSlide();
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "5px",
                  background: "var(--blue-primary)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                aria-label="Previous Industry"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => {
                  nextSlide();
                  setIsAutoPlaying(false);
                }}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "5px",
                  background: "var(--blue-primary)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                aria-label="Next Industry"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Industry Navigation Tabs */}
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
          {INDUSTRIES.map((ind, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={ind.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 22px",
                  borderRadius: "6px 6px 0 0",
                  background: isActive ? "#ffffff" : "transparent",
                  color: isActive ? "var(--blue-primary)" : "var(--text-secondary)",
                  fontWeight: 800,
                  fontSize: "0.92rem",
                  border: isActive ? "1px solid #cbd5e1" : "1px solid transparent",
                  borderBottom: isActive ? "3px solid var(--blue-primary)" : "1px solid transparent",
                  boxShadow: isActive ? "0 -2px 10px rgba(0, 0, 0, 0.04)" : "none",
                  transition: "all 0.15s ease",
                  marginBottom: "-10px",
                  cursor: "pointer",
                }}
              >
                {getIndustryIcon(ind.id, 18)}
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Industry Showcase Portal Card */}
        <div
          className="corp-card"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{
            background: "#ffffff",
            boxShadow: "0 20px 50px rgba(11, 19, 43, 0.08)",
            border: "1px solid var(--border-light)",
            borderRadius: "12px",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
            }}
            className="industry-grid"
          >
            {/* Visual Cinematic Header with High-Res Photography */}
            <div
              style={{
                position: "relative",
                minHeight: "360px",
                background: "#0b132b",
                overflow: "hidden",
              }}
            >
              <Image
                src={getIndustryImage(activeIndustry.id)}
                alt={activeIndustry.name}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />

              {/* High-tech gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(11, 19, 43, 0.95) 0%, rgba(11, 19, 43, 0.4) 50%, rgba(11, 19, 43, 0.2) 100%)",
                }}
              />

              {/* Top Rainbow Bar on Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "var(--spectrum-gradient)",
                  zIndex: 2,
                }}
              />

              {/* Top Badge Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    borderRadius: "4px",
                    background: "rgba(11, 19, 43, 0.8)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  {getIndustryIcon(activeIndustry.id, 15)}
                  <span>GLOBAL PRACTICE</span>
                </div>
              </div>

              {/* Bottom Image Overlay: Sector Title & Quantifiable Impact Badge */}
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
                  gap: "20px",
                  zIndex: 2,
                  color: "#ffffff",
                }}
              >
                <div style={{ maxWidth: "660px" }}>
                  <h3
                    style={{
                      fontSize: "clamp(1.6rem, 2.8vw, 2.3rem)",
                      fontWeight: 900,
                      letterSpacing: "-0.025em",
                      marginBottom: "6px",
                      color: "#ffffff",
                    }}
                  >
                    {activeIndustry.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.02rem",
                      color: "#93c5fd",
                      fontWeight: 600,
                      lineHeight: 1.45,
                    }}
                  >
                    {activeIndustry.headline}
                  </p>
                </div>

                {/* Floating Sector Metric Highlight */}
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(12px)",
                    padding: "16px 24px",
                    borderRadius: "8px",
                    color: "var(--text-primary)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    minWidth: "180px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.85rem",
                      fontWeight: 900,
                      color: "var(--blue-primary)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                    }}
                  >
                    {activeIndustry.impactMetric.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      marginTop: "3px",
                    }}
                  >
                    {activeIndustry.impactMetric.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Detailed Body: Architecture & Capabilities */}
            <div
              style={{
                padding: "36px 36px 40px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "36px",
              }}
              className="industry-body-grid"
            >
              {/* Left Column: Domain Overview */}
              <div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: "var(--blue-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "8px",
                  }}
                >
                  INDUSTRY TRANSFORMATION BLUEPRINT
                </div>

                <p
                  style={{
                    fontSize: "1.04rem",
                    lineHeight: 1.68,
                    color: "var(--text-secondary)",
                    marginBottom: "28px",
                  }}
                >
                  {activeIndustry.description}
                </p>

                {/* Case Study Story Callout */}
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: "8px",
                    background: "var(--bg-secondary)",
                    borderLeft: "4px solid var(--blue-primary)",
                    border: "1px solid var(--border-light)",
                    borderLeftWidth: "4px",
                    borderLeftColor: "var(--blue-primary)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 800,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "4px",
                    }}
                  >
                    VERIFIED CLIENT OUTCOME
                  </div>
                  <div
                    style={{
                      fontSize: "0.96rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      lineHeight: 1.5,
                      marginBottom: "10px",
                    }}
                  >
                    {activeIndustry.caseStudyRef}
                  </div>
                  <a
                    href="#case-studies"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                      textDecoration: "none",
                    }}
                  >
                    <span>Read Full Implementation Story</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Right Column: What We Enable */}
              <div
                style={{
                  background: "#f8fafc",
                  padding: "28px",
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
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "16px",
                    }}
                  >
                    CORE DOMAIN ARCHITECTURES:
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
                        <CheckCircle2
                          size={18}
                          color="var(--blue-primary)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    Audited under ISO 27001:2022 & SOC 2 Type II
                  </span>

                  <a
                    href="#contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: "var(--blue-primary)",
                      textDecoration: "none",
                    }}
                  >
                    <span>Schedule Practice Briefing</span>
                    <ArrowRight size={13} />
                  </a>
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
