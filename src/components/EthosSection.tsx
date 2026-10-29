"use client";

import React from "react";
import { Compass, Share2, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function EthosSection() {
  const pillars = [
    {
      num: "[01]",
      title: "Design",
      headline: "Clarity Before Code",
      desc: "We think rigorously, collaborate closely, and eliminate architectural confusion before a single line of code is written. Every blueprint is engineered with intent, long-term scalability, and quantifiable business outcomes.",
      points: [
        "Domain-driven system architecture",
        "Data model & schema normalization",
        "User journey & human-centered UX design",
      ],
      icon: <Compass size={22} color="var(--blue-primary)" />,
    },
    {
      num: "[02]",
      title: "Integration",
      headline: "Connecting Fragmented Silos",
      desc: "Modern enterprises drown in disconnected platforms. We engineer resilient integration meshes using Boomi, MuleSoft, and event-driven Kafka pipelines that synchronize operations across hybrid cloud and legacy core ledgers.",
      points: [
        "Enterprise iPaaS & API orchestration",
        "Real-time bi-directional data pipelines",
        "Zero-trust cryptographic data protection",
      ],
      icon: <Share2 size={22} color="var(--blue-primary)" />,
    },
    {
      num: "[03]",
      title: "Execution",
      headline: "Measurable Operational Reality",
      desc: "We stay with you through the build. From rapid prototype validation to mission-critical zero-downtime production deployment, we deliver with engineering discipline, test automation, and guaranteed SLAs.",
      points: [
        "2-week iterative release cadences",
        "Automated CI/CD & infrastructure-as-code",
        "99.99% availability & post-launch support",
      ],
      icon: <Layers size={22} color="var(--blue-primary)" />,
    },
  ];

  return (
    <section
      id="ethos"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "880px", marginBottom: "50px" }}>
          <div className="arch-tag">
            <span className="num">[02]</span>
            <span>OUR ETHOS & EXECUTION MODEL</span>
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
            {COMPANY_DETAILS.ethosHeadline}
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--text-secondary)",
            }}
          >
            {COMPANY_DETAILS.ethosDescription}
          </p>
        </div>

        {/* 3 Pillars of Focus: Design, Integration, Execution */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--bg-card)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                    }}
                  >
                    {item.num}
                  </span>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "var(--blue-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--blue-primary)",
                    marginBottom: "16px",
                  }}
                >
                  {item.headline}
                </div>

                <p
                  style={{
                    fontSize: "0.94rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    marginBottom: "24px",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.86rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      <CheckCircle2 size={15} color="var(--blue-primary)" style={{ flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
