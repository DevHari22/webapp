"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { PILLARS, COMPANY_INFO } from "../data/companyData";
import { ArrowRight, Check, Shield } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-dark-contrast)",
        color: "#94a3b8",
        borderTop: "1px solid var(--border-light)",
        paddingTop: "80px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Top Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand Info Column */}
          <div style={{ maxWidth: "340px", gridColumn: "span 2" }}>
            <div style={{ marginBottom: "20px" }}>
              <Logo width={160} height={38} showTagline={false} />
            </div>

            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.65,
                color: "#94a3b8",
                marginBottom: "24px",
              }}
            >
              Spectrum 7 architects, engineers, and operates mission-critical digital systems
              across 7 foundational technology pillars. Delivering zero-downtime scale for modern
              enterprises.
            </p>

            {/* Newsletter Subscription */}
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Spectrum Architecture Dispatch
              </div>

              {newsletterSubscribed ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#38bdf8",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                  }}
                >
                  <Check size={16} />
                  <span>Subscribed to quarterly engineering insights.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    maxWidth: "320px",
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "8px",
                    padding: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="architect@company.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      padding: "8px 12px",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      flex: 1,
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      background: "var(--blue-primary)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "8px 14px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Pillars Sitemap Column */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#f8fafc",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "20px",
              }}
            >
              The 7 Pillars
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <a
                    href="#pillars"
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    0{p.id}. {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#f8fafc",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "20px",
              }}
            >
              Solutions & Sectors
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Fintech & High-Volume Trading", "Healthcare & HIPAA AI", "Global Logistics & IoT", "Modern eCommerce & Retail", "SaaS Modernization", "Zero-Trust Auditing"].map((item) => (
                <li key={item}>
                  <a
                    href="#cases"
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Offices Column */}
          <div>
            <h4
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#f8fafc",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "20px",
              }}
            >
              Global Hubs
            </h4>
            <div style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.8 }}>
              <div>• San Francisco (HQ)</div>
              <div>• London, United Kingdom</div>
              <div>• Singapore Financial Hub</div>
              <div>• Bangalore Innovation Pod</div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
                Direct Contact
              </div>
              <div style={{ fontSize: "0.85rem", color: "#38bdf8" }}>{COMPANY_INFO.email}</div>
              <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>{COMPANY_INFO.phone}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            fontSize: "0.82rem",
          }}
        >
          <div>
            © 2026 Spectrum 7 Technologies Inc. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "#94a3b8" }}>Privacy Policy</a>
            <a href="#" style={{ color: "#94a3b8" }}>Terms of Service</a>
            <a href="#" style={{ color: "#94a3b8" }}>Security & SOC 2</a>
            <a href="#" style={{ color: "#94a3b8" }}>Compliance Center</a>
          </div>
        </div>
      </div>

      {/* Very bottom rainbow spectrum accent */}
      <div
        className="spectrum-bar"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
        }}
      />
    </footer>
  );
}
