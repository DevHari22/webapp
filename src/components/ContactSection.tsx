"use client";

import React, { useState } from "react";
import { COMPANY_INFO, PILLARS } from "../data/companyData";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    pillar: "multi",
    budget: "$50k - $100k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant enterprise submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-light)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Value Proposition */}
          <div>
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
              <Sparkles size={14} />
              <span>Architectural Consultation</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "18px",
                lineHeight: 1.15,
              }}
            >
              Let&apos;s Build Your Next Technological Breakthrough
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                marginBottom: "32px",
              }}
            >
              Schedule a dedicated 45-minute discovery session with our Lead Solutions
              Architects. We will evaluate your current infrastructure and outline a targeted
              7-pillar roadmap.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Direct Inquiries
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Global Toll-Free
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Headquarters & Hubs
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {COMPANY_INFO.headquarters}
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed Trust Badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--blue-primary)" />
                <span>NDA within 2 hours</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--blue-primary)" />
                <span>Zero Obligation</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--blue-primary)" />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div
            className="card-glass"
            style={{
              padding: "40px",
              background: "var(--bg-card)",
              borderRadius: "20px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    border: "2px solid var(--blue-border)",
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "12px", color: "var(--text-primary)" }}>
                  Consultation Request Received!
                </h3>

                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "440px", lineHeight: 1.6, marginBottom: "28px" }}>
                  Thank you, <strong>{formData.name || "partner"}</strong>. A Spectrum 7 Principal
                  Architect has received your request and will reach out to <strong>{formData.email}</strong> within 24 hours.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "8px",
                  }}
                >
                  Request Architecture Consultation
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
                  Fill in your requirements to receive a customized technical proposal.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                      }}
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                      }}
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Global Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "6px",
                      }}
                    >
                      Primary Pillar Need
                    </label>
                    <select
                      id="pillar-select"
                      value={formData.pillar}
                      onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        outline: "none",
                      }}
                    >
                      <option value="multi">Full Spectrum (Multi-Pillar)</option>
                      {PILLARS.map((p) => (
                        <option key={p.id} value={p.slug}>
                          Pillar 0{p.id}: {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                    }}
                  >
                    Target Investment Horizon
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-primary)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  >
                    <option value="$25k - $50k">$25,000 - $50,000 (Rapid Sprint MVP)</option>
                    <option value="$50k - $100k">$50,000 - $100,000 (Pillar Modernization)</option>
                    <option value="$100k - $250k">$100,000 - $250,000 (Enterprise Transformation)</option>
                    <option value="$250k+">$250,000+ (Global Dedicated Pod)</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "6px",
                    }}
                  >
                    Briefly describe your objectives or current challenges
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We need to migrate our legacy microservices to a zero-downtime multi-cloud cluster and embed autonomous AI copilots..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-primary)",
                      fontSize: "0.92rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    fontSize: "1rem",
                    justifyContent: "center",
                  }}
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Request</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
