"use client";

import React, { useState } from "react";
import { FAQS } from "../data/companyData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        background: "var(--bg-primary)",
      }}
    >
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
            <HelpCircle size={14} />
            <span>Common Inquiries</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
            }}
          >
            Everything you need to know about partnering with Spectrum 7.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="card-glass"
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: isOpen ? "1px solid var(--blue-border)" : "1px solid var(--border-light)",
                  transition: "all 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    color: "var(--text-primary)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    gap: "16px",
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      color: isOpen ? "var(--blue-primary)" : "var(--text-muted)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      fontSize: "0.98rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                      borderTop: "1px solid var(--border-light)",
                      paddingTop: "16px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
