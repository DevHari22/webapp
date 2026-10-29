"use client";

import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";

interface SearchResult {
  title: string;
  category: string;
  href: string;
  snippet: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cmd / Ctrl + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setSecurityModalOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const searchIndex: SearchResult[] = [
    { title: "Boomi iPaaS Architecture", category: "Technology", href: "#technologies", snippet: "Enterprise hybrid integration fabric & universal API gateway management." },
    { title: "MuleSoft AnyPoint Integration", category: "Technology", href: "#technologies", snippet: "Full-lifecycle API design, runtime fabric, and service mesh orchestration." },
    { title: "Snowflake & Databricks Lakehouse", category: "Technology", href: "#technologies", snippet: "Multi-cloud data warehousing, Delta Lake, and production AI analytics." },
    { title: "UiPath Automation Cloud & RPA", category: "Technology", href: "#technologies", snippet: "Robotic process automation, unattended bot fleets, and process mining." },
    { title: "PyTorch & Custom Domain LLMs", category: "Technology", href: "#technologies", snippet: "Deep learning models, fine-tuned generative AI, and semantic vector RAG." },
    { title: "Banking & Financial Services", category: "Industry", href: "#industries", snippet: "Modernizing core ledgers, real-time transaction processing, and fraud AI." },
    { title: "Supply Chain & Global Logistics", category: "Industry", href: "#industries", snippet: "Real-time shipment tracking, automated warehouse dispatch, and EDI mesh." },
    { title: "Insurance & Risk Management", category: "Industry", href: "#industries", snippet: "Intelligent claims processing, automated policy underwriting, and fraud detection." },
    { title: "AI & Data Intelligence", category: "Capability", href: "#capabilities", snippet: "Unified lakehouses, real-time streaming, and executive decision cockpits." },
    { title: "Enterprise Integration Services", category: "Capability", href: "#capabilities", snippet: "Connecting cloud platforms, legacy mainframes, and partner B2B ecosystems." },
    { title: "Hyperautomation & RPA", category: "Capability", href: "#capabilities", snippet: "Eliminating manual back-office tasks with agentic bots and intelligent OCR." },
    { title: "Our 3-Phase Methodology", category: "Methodology", href: "#ethos", snippet: "01. Design Architecture • 02. Seamless Integration • 03. Execution." },
  ];

  const filteredSearchResults = searchQuery.trim()
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchIndex.slice(0, 6);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.25s ease",
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "#ffffff",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: "1px solid var(--border-light)",
        boxShadow: scrolled ? "0 4px 25px rgba(15, 23, 42, 0.08)" : "none",
      }}
    >
      {/* Full-Width Header Bar */}
      <div
        style={{
          width: "100%",
          padding: "0 clamp(24px, 3.5vw, 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "78px",
          position: "relative",
        }}
      >
        {/* Left Side: Brand Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="#" aria-label="Spectrum 7 Home" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={168} height={42} showTagline={false} />
          </a>
        </div>

        {/* Center: Interactive Nav Links with Floating Anchored Dropdowns */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
            height: "100%",
          }}
          className="desktop-nav"
        >
          {/* NAV ITEM 1: CAPABILITIES (Floating Dropdown) */}
          <div
            onMouseEnter={() => handleMouseEnter("capabilities")}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          >
            <a
              href="#capabilities"
              style={{
                fontSize: "0.92rem",
                fontWeight: 700,
                color: activeDropdown === "capabilities" ? "var(--blue-primary)" : "var(--text-secondary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 0",
                transition: "color 0.2s ease",
              }}
            >
              <span>Capabilities</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === "capabilities" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </a>

            {/* Floating Capabilities Card */}
            {activeDropdown === "capabilities" && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% - 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "600px",
                  background: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 20px 50px -10px rgba(11, 19, 43, 0.16)",
                  border: "1px solid var(--border-light)",
                  overflow: "hidden",
                  zIndex: 200,
                  animation: "dropdownPop 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div style={{ padding: "18px 20px 14px" }}>
                  <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "12px" }}>
                    CORE IT PRACTICES
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    {[
                      {
                        title: "AI & Data Intelligence",
                        sub: "Lakehouses, Snowflake & real-time RAG",
                        href: "#capabilities",
                      },
                      {
                        title: "Enterprise Integration",
                        sub: "Boomi iPaaS, MuleSoft & API mesh",
                        href: "#capabilities",
                      },
                      {
                        title: "Hyperautomation & RPA",
                        sub: "UiPath bot fleets & document OCR",
                        href: "#capabilities",
                      },
                      {
                        title: "Application Modernization",
                        sub: "Next.js 16, Cloud Native & Go",
                        href: "#capabilities",
                      },
                      {
                        title: "Cloud & Cyber Security",
                        sub: "Zero-Trust mTLS & multi-cloud mesh",
                        href: "#capabilities",
                      },
                      {
                        title: "Managed IT Services",
                        sub: "SRE operations & 99.99% uptime SLA",
                        href: "#capabilities",
                      },
                    ].map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="nav-arrow-item"
                      >
                        <div className="item-content">
                          <div className="item-title">{item.title}</div>
                          <div className="item-sub">{item.sub}</div>
                        </div>
                        <div className="arrow-wrap">
                          <ArrowRight size={13} className="item-arrow" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Dropdown Footer */}
                <div
                  style={{
                    padding: "12px 20px",
                    background: "var(--bg-secondary)",
                    borderTop: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    Proven Enterprise Delivery Frameworks
                  </span>
                  <a
                    href="#capabilities"
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                    }}
                  >
                    <span>View All Capabilities</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* NAV ITEM 2: ENTERPRISE OUTCOMES (Direct Link) */}
          <a
            href="#outcomes"
            style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "var(--text-secondary)",
              padding: "8px 0",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Outcomes & ROI
          </a>

          {/* NAV ITEM 3: TECHNOLOGIES (Floating Dropdown) */}
          <div
            onMouseEnter={() => handleMouseEnter("technologies")}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
          >
            <a
              href="#technologies"
              style={{
                fontSize: "0.92rem",
                fontWeight: 700,
                color: activeDropdown === "technologies" ? "var(--blue-primary)" : "var(--text-secondary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 0",
                transition: "color 0.2s ease",
              }}
            >
              <span>Technologies</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === "technologies" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </a>

            {/* Floating Technologies Card */}
            {activeDropdown === "technologies" && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% - 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "660px",
                  background: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 20px 50px -10px rgba(11, 19, 43, 0.16)",
                  border: "1px solid var(--border-light)",
                  overflow: "hidden",
                  zIndex: 200,
                  animation: "dropdownPop 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div style={{ padding: "18px 20px 14px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    {/* Left Column */}
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
                        INTEGRATION & DATA CORE
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {[
                          { name: "Boomi iPaaS", badge: "Award Winner", sub: "Hybrid integration & API gateway" },
                          { name: "MuleSoft AnyPoint", badge: "Enterprise", sub: "API lifecycle & runtime mesh" },
                          { name: "Snowflake & Databricks", badge: "Lakehouse", sub: "Multi-cloud warehouse & Delta Lake" },
                          { name: "Apache Kafka", badge: "Real-Time", sub: "High-throughput event streaming" },
                        ].map((tech) => (
                          <a
                            key={tech.name}
                            href="#technologies"
                            onClick={() => setActiveDropdown(null)}
                            className="nav-arrow-item"
                            style={{ padding: "8px 10px" }}
                          >
                            <div className="item-content">
                              <div className="item-header">
                                <span className="item-title" style={{ fontSize: "0.85rem" }}>{tech.name}</span>
                                <span className="item-badge">{tech.badge}</span>
                              </div>
                              <div className="item-sub" style={{ fontSize: "0.72rem" }}>{tech.sub}</div>
                            </div>
                            <div className="arrow-wrap">
                              <ArrowRight size={13} className="item-arrow" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
                        AUTOMATION & MODERN WEB
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {[
                          { name: "UiPath Automation", badge: "Partner of Year", sub: "Unattended bot fleets & RPA" },
                          { name: "PyTorch & Custom LLMs", badge: "AI Core", sub: "Generative AI & vector RAG" },
                          { name: "Celonis Process Mining", badge: "Specialty", sub: "Execution management systems" },
                          { name: "Next.js 16 & Kubernetes", badge: "Cloud Native", sub: "Edge SSR & container mesh" },
                        ].map((tech) => (
                          <a
                            key={tech.name}
                            href="#technologies"
                            onClick={() => setActiveDropdown(null)}
                            className="nav-arrow-item"
                            style={{ padding: "8px 10px" }}
                          >
                            <div className="item-content">
                              <div className="item-header">
                                <span className="item-title" style={{ fontSize: "0.85rem" }}>{tech.name}</span>
                                <span className="item-badge">{tech.badge}</span>
                              </div>
                              <div className="item-sub" style={{ fontSize: "0.72rem" }}>{tech.sub}</div>
                            </div>
                            <div className="arrow-wrap">
                              <ArrowRight size={13} className="item-arrow" />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: "12px 20px",
                    background: "var(--bg-secondary)",
                    borderTop: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    120+ Certified Engineers & Solution Architects
                  </span>
                  <a
                    href="#technologies"
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--blue-primary)",
                    }}
                  >
                    <span>View All 18 Alliances</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Direct Link: Methodology */}
          <a
            href="#ethos"
            style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "var(--text-secondary)",
              padding: "8px 0",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Methodology
          </a>

          {/* Direct Link: Insights & Cases */}
          <a
            href="#case-studies"
            style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "var(--text-secondary)",
              padding: "8px 0",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Insights & Cases
          </a>
        </nav>

        {/* Right Side: Quick Search + ISO Badge + Contact CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Quick Search Shortcut Trigger Button */}
          <button
            onClick={() => setSearchOpen(true)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              borderRadius: "6px",
              background: "#f8fafc",
              border: "1px solid var(--border-light)",
              color: "var(--text-muted)",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--blue-primary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
            title="Search Capabilities, Technologies, or Case Studies (Ctrl + K)"
          >
            <Search size={15} />
            <span className="search-text">Search</span>
            <kbd
              style={{
                fontSize: "0.7rem",
                padding: "2px 6px",
                borderRadius: "4px",
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                fontFamily: "var(--font-mono)",
                color: "#64748b",
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* ISO 27001 Compliance Verified Button */}
          <button
            onClick={() => setSecurityModalOpen(true)}
            style={{
              display: "none",
              alignItems: "center",
              gap: "6px",
              padding: "7px 12px",
              borderRadius: "5px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-light)",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            className="iso-badge"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--blue-border)";
              e.currentTarget.style.color = "var(--blue-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
            title="View ISO/IEC 27001:2022 Certification"
          >
            <ShieldCheck size={16} color="var(--blue-primary)" />
            <span>ISO 27001</span>
          </button>

          {/* Primary CTA Button */}
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

          {/* Mobile Hamburger Toggle */}
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

      {/* QUICK SEARCH PALETTE MODAL (Ctrl+K / ⌘K) */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 19, 43, 0.72)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "12vh",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "620px",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.3)",
              border: "1px solid var(--border-light)",
              overflow: "hidden",
              animation: "navDropdownFade 0.15s ease-out",
            }}
          >
            {/* Search Input Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              <Search size={20} color="var(--blue-primary)" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities, technologies, industries, or case studies..."
                autoFocus
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                style={{
                  padding: "4px 8px",
                  borderRadius: "4px",
                  background: "#f1f5f9",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#64748b",
                  border: "none",
                }}
              >
                ESC
              </button>
            </div>

            {/* Instant Search Results */}
            <div style={{ maxHeight: "380px", overflowY: "auto", padding: "12px" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--text-muted)", textTransform: "uppercase", padding: "6px 12px 8px" }}>
                {searchQuery ? `Search Results (${filteredSearchResults.length})` : "Quick Navigation"}
              </div>

              {filteredSearchResults.map((res, i) => (
                <a
                  key={i}
                  href={res.href}
                  onClick={() => setSearchOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary)" }}>{res.title}</span>
                      <span style={{ fontSize: "0.7rem", padding: "1px 6px", borderRadius: "10px", background: "var(--blue-light)", color: "var(--blue-primary)", fontWeight: 700 }}>
                        {res.category}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>{res.snippet}</div>
                  </div>
                  <ChevronRight size={16} color="#94a3b8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ISO 27001 VERIFICATION MODAL */}
      {securityModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(11, 19, 43, 0.72)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSecurityModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "520px",
              padding: "32px",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.3)",
              border: "1px solid var(--border-light)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSecurityModalOpen(false)}
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                background: "#f1f5f9",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
            >
              <X size={16} />
            </button>

            <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <ShieldCheck size={26} color="var(--blue-primary)" />
            </div>

            <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase" }}>
              INFORMATION SECURITY ACCREDITATION
            </div>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)", marginTop: "2px", marginBottom: "12px" }}>
              Certified under ISO/IEC 27001:2022
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55, marginBottom: "20px" }}>
              Spectrum 7 operates an accredited Information Security Management System (ISMS) verified for enterprise consulting, multi-cloud data engineering, and autonomous AI integrations.
            </p>

            <div style={{ padding: "14px", background: "var(--bg-secondary)", borderRadius: "8px", border: "1px solid var(--border-light)", marginBottom: "20px" }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                Audited Governance Standards:
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                • Zero-Trust Network Architecture (mTLS 1.3)<br />
                • SOC 2 Type II Annual Independent Audits<br />
                • GDPR & CCPA Enterprise Data Privacy Boundaries
              </div>
            </div>

            <button
              onClick={() => setSecurityModalOpen(false)}
              style={{
                width: "100%",
                padding: "11px",
                borderRadius: "6px",
                background: "var(--blue-primary)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                border: "none",
              }}
            >
              Close Verification
            </button>
          </div>
        </div>
      )}

      {/* MOBILE EXPANDABLE DRAWER */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#ffffff",
            borderBottom: "1px solid var(--border-light)",
            padding: "20px 24px 28px",
            boxShadow: "var(--shadow-lg)",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 14px",
                borderRadius: "6px",
                background: "#f1f5f9",
                border: "1px solid var(--border-light)",
                fontSize: "0.92rem",
                color: "#64748b",
                fontWeight: 600,
              }}
            >
              <Search size={16} />
              <span>Quick Search (⌘K)...</span>
            </button>

            {[
              { label: "Capabilities", href: "#capabilities" },
              { label: "Outcomes & ROI", href: "#outcomes" },
              { label: "Technologies", href: "#technologies" },
              { label: "Methodology", href: "#ethos" },
              { label: "Insights & Cases", href: "#case-studies" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.02rem",
                  fontWeight: 700,
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
                style={{ width: "100%", justifyContent: "center", padding: "13px" }}
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-arrow-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          background: #ffffff;
          border: 1px solid transparent;
          transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .nav-arrow-item:hover {
          background: #f8fafc;
          border-color: #e2e8f0;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
        }

        .nav-arrow-item:hover .item-title {
          color: var(--blue-primary) !important;
        }

        .nav-arrow-item:hover .arrow-wrap {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: var(--blue-primary);
          transform: translateX(4px);
        }

        .nav-arrow-item:hover .item-badge {
          background: #eff6ff;
          color: var(--blue-primary);
          border-color: #bfdbfe;
        }

        .item-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex: 1;
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .item-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
          transition: color 0.15s ease;
        }

        .item-sub {
          font-size: 0.74rem;
          color: var(--text-muted);
          margin-top: 2px;
          line-height: 1.35;
        }

        .item-badge {
          font-size: 0.66rem;
          font-weight: 700;
          padding: 1px 7px;
          border-radius: 4px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .arrow-wrap {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: #f8fafc;
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          flex-shrink: 0;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownPop {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes navDropdownFade {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .iso-badge {
            display: inline-flex !important;
          }
        }
        @media (max-width: 1039px) {
          .mobile-toggle {
            display: flex !important;
          }
          .search-text {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
