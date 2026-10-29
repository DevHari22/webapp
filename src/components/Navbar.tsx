"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Industries", href: "#industries" },
    { label: "Insights & Cases", href: "#insights" },
    { label: "Methodology", href: "#ethos" },
    { label: "Technologies", href: "#technologies" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.2s ease",
        background: "#ffffff",
        borderBottom: "1px solid var(--border-light)",
        boxShadow: scrolled ? "0 4px 20px rgba(15, 23, 42, 0.08)" : "none",
      }}
    >
      {/* Top subtle Spectrum 7 chromatic indicator bar */}
      <div className="spectrum-bar" />

      {/* Full-Width Header Container */}
      <div
        style={{
          width: "100%",
          padding: "0 clamp(24px, 3.5vw, 60px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "78px",
        }}
      >
          {/* Logo */}
          <a href="#" aria-label="Spectrum 7 Home" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={162} height={40} showTagline={false} />
          </a>

          {/* Center Navigation Links (Cognizant style) */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "34px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  letterSpacing: "-0.01em",
                  padding: "6px 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* ISO 27001 Compliance Badge */}
            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "4px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-light)",
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "var(--text-muted)",
              }}
              className="iso-badge"
            >
              <ShieldCheck size={15} color="var(--blue-primary)" />
              <span>ISO/IEC 27001:2022</span>
            </div>

            {/* Cognizant Corporate Primary CTA Button */}
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "11px 22px",
                fontSize: "0.88rem",
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "6px",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderBottom: "1px solid var(--border-light)",
            padding: "20px 24px 28px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  padding: "8px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="var(--text-muted)" />
              </a>
            ))}

            <div style={{ paddingTop: "14px", borderTop: "1px solid var(--border-light)" }}>
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 990px) {
          .desktop-nav {
            display: flex !important;
          }
          .iso-badge {
            display: inline-flex !important;
          }
        }
        @media (max-width: 989px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
