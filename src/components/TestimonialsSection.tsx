"use client";

import React from "react";
import { TESTIMONIALS } from "../data/companyData";
import { Star, Quote, Check, X, Shield, Award } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "var(--blue-light)",
              color: "var(--blue-primary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
              border: "1px solid var(--blue-border)",
            }}
          >
            <Award size={14} />
            <span>Client Trust</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "18px",
            }}
          >
            Trusted by Technology Leaders Worldwide
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            Hear directly from engineering leaders who scaled their digital infrastructure with
            Spectrum 7.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            marginBottom: "70px",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="card-glass"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* 5 Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    color: "var(--text-primary)",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  borderTop: "1px solid var(--border-light)",
                  paddingTop: "16px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    border: "1.5px solid var(--blue-border)",
                  }}
                >
                  {t.avatar}
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {t.role}, <span style={{ color: "var(--blue-primary)", fontWeight: 600 }}>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Spectrum 7 Difference Comparison Table */}
        <div
          className="card-glass"
          style={{
            padding: "36px",
            background: "var(--bg-card)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "8px" }}>
              The Spectrum 7 Advantage
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              How our 7-Pillar holistic engineering model compares against fragmented alternatives
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border-light)", textAlign: "left" }}>
                  <th style={{ padding: "14px", fontSize: "0.9rem", color: "var(--text-muted)" }}>Capability</th>
                  <th style={{ padding: "14px", fontSize: "1rem", color: "var(--blue-primary)", fontWeight: 800 }}>Spectrum 7</th>
                  <th style={{ padding: "14px", fontSize: "0.9rem", color: "var(--text-muted)" }}>Traditional Agencies</th>
                  <th style={{ padding: "14px", fontSize: "0.9rem", color: "var(--text-muted)" }}>In-House Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Full-Spectrum 7 Pillars Coverage (Cloud to AI & Design)",
                    s7: "Unified Under One Pod",
                    other1: "Fragmented (5+ vendors)",
                    other2: "Requires 12+ separate hires",
                  },
                  {
                    feature: "Deployment Velocity & Sprint Cadence",
                    s7: "Production release every 2 weeks",
                    other1: "Months of bureaucracy",
                    other2: "Variable team bandwidth",
                  },
                  {
                    feature: "AI Integration & Proprietary RAG Pipelines",
                    s7: "Native Pillar 02 Specialty",
                    other1: "Superficial wrappers",
                    other2: "Steep learning curve",
                  },
                  {
                    feature: "Zero-Downtime Migration Guarantee",
                    s7: "99.99% Contractual SLA",
                    other1: "Best-effort only",
                    other2: "High outage risk",
                  },
                  {
                    feature: "Intellectual Property & Code Ownership",
                    s7: "100% Client-Owned from Day 1",
                    other1: "Often retain lock-in",
                    other2: "Client-owned",
                  },
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <td style={{ padding: "14px", fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "14px", fontSize: "0.9rem", fontWeight: 700, color: "var(--blue-primary)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Check size={16} color="var(--blue-primary)" />
                        <span>{row.s7}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {row.other1}
                    </td>
                    <td style={{ padding: "14px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                      {row.other2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
