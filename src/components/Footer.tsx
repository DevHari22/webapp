"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { COMPANY_DETAILS, CAPABILITIES, INDUSTRIES } from "../data/companyData";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

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
        {/* Main Footer Columns */}
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
                marginBottom: "20px",
              }}
            >
              Spectrum 7 is a digital consulting and enterprise systems engineering firm helping
              organisations modernise operations through automation, data intelligence, and integrated
              cloud platforms.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#cbd5e1",
                fontSize: "0.78rem",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              <ShieldCheck size={16} color="#38bdf8" />
              <span>Certified under ISO/IEC 27001:2022</span>
            </div>

            {/* Newsletter */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Enterprise Systems Dispatch
              </div>

              {newsletterSubscribed ? (
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#38bdf8", fontSize: "0.85rem" }}>
                  <Check size={16} />
                  <span>Subscribed to engineering insights.</span>
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
                    placeholder="leader@company.com"
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

          {/* Capabilities Column */}
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
              Capabilities
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {CAPABILITIES.map((c) => (
                <li key={c.id}>
                  <a
                    href="#capabilities"
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {c.num}. {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Alliances Column */}
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
              Strategic Alliances
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "Boomi iPaaS (Award Winner)", href: "#technologies" },
                { name: "UiPath (Partner of the Year)", href: "#technologies" },
                { name: "Snowflake & Databricks", href: "#technologies" },
                { name: "Apache Kafka Event Mesh", href: "#technologies" },
                { name: "Next.js & Kubernetes Core", href: "#technologies" },
              ].map((all) => (
                <li key={all.name}>
                  <a
                    href={all.href}
                    style={{
                      fontSize: "0.88rem",
                      color: "#94a3b8",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {all.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory & Inquiries Column (No addresses or countries) */}
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
              Executive Inquiries
            </h4>
            <div style={{ fontSize: "0.88rem", color: "#94a3b8", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: "10px" }}>
              <div>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#f8fafc", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Direct Email
                </div>
                <a href={`mailto:${COMPANY_DETAILS.contact.email}`} style={{ fontSize: "0.92rem", color: "#38bdf8", fontWeight: 600 }}>
                  {COMPANY_DETAILS.contact.email}
                </a>
              </div>

              <div>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#f8fafc", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Toll-Free Enterprise Line
                </div>
                <a href={`tel:${COMPANY_DETAILS.contact.phone}`} style={{ fontSize: "0.92rem", color: "#cbd5e1", fontWeight: 600 }}>
                  {COMPANY_DETAILS.contact.phone}
                </a>
              </div>

              <div>
                <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#f8fafc", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Consultation SLA
                </div>
                <span style={{ fontSize: "0.84rem", color: "#94a3b8" }}>
                  Response within 24 business hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
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
            © 2026 {COMPANY_DETAILS.legalName}. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "#94a3b8" }}>ISMS Policy</a>
            <a href="#" style={{ color: "#94a3b8" }}>Privacy Statement</a>
            <a href="#" style={{ color: "#94a3b8" }}>ISO 27001 Certification</a>
            <a href="#" style={{ color: "#94a3b8" }}>Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
