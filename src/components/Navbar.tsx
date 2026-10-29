"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Sun, Moon, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

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
    { label: "Capabilities", href: "#capabilities" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#insights" },
    { label: "Our Ethos", href: "#ethos" },
    { label: "Technologies", href: "#technologies" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.25s ease",
        background: scrolled ? "var(--bg-card)" : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      {/* Top subtle Spectrum 7 chromatic indicator bar */}
      <div className="spectrum-bar" style={{ height: "3px", width: "100%" }} />

      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "74px",
          }}
        >
          {/* Logo with clean white card pill */}
          <a href="#" aria-label="Spectrum 7 Home" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={158} height={38} showTagline={false} />
          </a>

          {/* Center Navigation Links (TechnePlus minimalist layout) */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  transition: "color 0.2s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* ISO 27001 Pill */}
            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border-light)",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--text-muted)",
              }}
              className="iso-badge"
            >
              <ShieldCheck size={13} color="var(--blue-primary)" />
              <span>ISO 27001:2022</span>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
                transition: "all 0.2s ease",
              }}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* TechnePlus-style "Start The Conversation" pill */}
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.86rem",
              }}
            >
              <span>Start the Conversation</span>
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
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "var(--bg-tertiary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-light)",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-light)",
            padding: "20px 24px 28px",
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
                  padding: "6px 0",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>Start the Conversation</span>
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
