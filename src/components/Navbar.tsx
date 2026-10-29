"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const navLinks = [
    { label: "The 7 Pillars", href: "#pillars" },
    { label: "Case Studies", href: "#cases" },
    { label: "Scope Estimator", href: "#estimator", badge: "Interactive" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Why Spectrum 7", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.3s ease",
        background: scrolled
          ? "var(--bg-card)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid var(--border-light)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      {/* Top subtle spectrum accent bar */}
      <div className="spectrum-bar" style={{ height: "3px", width: "100%" }} />

      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Brand Logo */}
          <a href="#" aria-label="Spectrum 7 Home" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={160} height={38} showTagline={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "28px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  position: "relative",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
                {link.badge && (
                  <span
                    style={{
                      fontSize: "0.68rem",
                      padding: "2px 6px",
                      borderRadius: "10px",
                      background: "var(--blue-light)",
                      color: "var(--blue-primary)",
                      fontWeight: 600,
                      border: "1px solid var(--blue-border)",
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Actions & CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
                transition: "all 0.2s ease",
              }}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Consultation CTA */}
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.9rem",
              }}
            >
              <span>Schedule Call</span>
              <ArrowRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--bg-primary)",
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
                {link.badge && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      background: "var(--blue-light)",
                      color: "var(--blue-primary)",
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Start Architectural Scoping</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 899px) {
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
