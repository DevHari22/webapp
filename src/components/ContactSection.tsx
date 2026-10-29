"use client";

import React, { useState } from "react";
import { COMPANY_DETAILS, CAPABILITIES } from "../data/companyData";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    capability: "all",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-light)",
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
          {/* Left Column: Locations & Contact Details */}
          <div>
            <div className="arch-tag">
              <span className="num">[07]</span>
              <span>START THE CONVERSATION</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "16px",
                lineHeight: 1.15,
              }}
            >
              Ready to Build What&apos;s Next?
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                marginBottom: "36px",
              }}
            >
              Connect with our team to explore how clarity, engineering, and intelligent systems
              can move your business forward—securely, sustainably, and at scale.
            </p>

            {/* Direct Contact Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "var(--bg-secondary)",
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
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Executive Inquiries
                  </div>
                  <a href={`mailto:${COMPANY_DETAILS.contact.email}`} style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {COMPANY_DETAILS.contact.email}
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
                  background: "var(--bg-secondary)",
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
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Global Direct
                  </div>
                  <a href={`tel:${COMPANY_DETAILS.contact.phone}`} style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {COMPANY_DETAILS.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Global Locations List */}
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  marginBottom: "14px",
                }}
              >
                Global Presence & Delivery Hubs
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {COMPANY_DETAILS.locations.map((loc) => (
                  <div
                    key={loc.city}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                      {loc.city}
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "2px" }}>
                      {loc.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End Minimalist Form */}
          <div
            className="tech-card"
            style={{
              padding: "40px",
              background: "var(--bg-card)",
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
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "var(--blue-light)",
                    color: "var(--blue-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>

                <h3 style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "10px", color: "var(--text-primary)" }}>
                  Inquiry Received
                </h3>

                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "420px", lineHeight: 1.6, marginBottom: "24px" }}>
                  Thank you, <strong>{formData.name}</strong>. An enterprise solution architect from Spectrum 7
                  will connect with you at <strong>{formData.email}</strong> shortly.
                </p>

                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "6px" }}>
                  Start an Engagement
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "24px" }}>
                  Tell us about your organization and modernization objectives.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Global Bank Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                      Primary Capability
                    </label>
                    <select
                      value={formData.capability}
                      onChange={(e) => setFormData({ ...formData, capability: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border-light)",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    >
                      <option value="all">Full Digital Transformation</option>
                      {CAPABILITIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.num}. {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                    How can we help? (Architecture, timelines, systems)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="We are looking to modernize our integration pipelines and deploy automated workflow agents..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-light)",
                      color: "var(--text-primary)",
                      fontSize: "0.9rem",
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
                    padding: "14px",
                    justifyContent: "center",
                    fontSize: "0.95rem",
                  }}
                >
                  {loading ? <span>Transmitting...</span> : <span>Submit Engagement Request</span>}
                  <Send size={16} />
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
