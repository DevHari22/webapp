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
  Sparkles,
  Database,
  Layers,
  Zap,
  Cpu,
  Globe,
  Bot,
  Truck,
  Landmark,
  Shield,
  ShoppingBag,
  Factory,
  CheckCircle2,
  ExternalLink,
  Command,
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

  // Keyboard shortcut for Cmd/Ctrl + K to open search
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
    }, 180);
  };

  // Search indexed items
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
      {/* Top Chromatic Spectrum 7 Accent Bar */}
      <div className="spectrum-bar" />

      {/* Full-Width Header Container */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <a href="#" aria-label="Spectrum 7 Home" style={{ display: "flex", alignItems: "center" }}>
            <Logo width={168} height={42} showTagline={false} />
          </a>
        </div>

        {/* Center: Interactive Navigation Links with Dropdown Indicators */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
            height: "100%",
          }}
          className="desktop-nav"
        >
          {/* Capabilities Item with Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("capabilities")}
            onMouseLeave={handleMouseLeave}
            style={{ height: "100%", display: "flex", alignItems: "center" }}
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
          </div>

          {/* Industries Item with Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <a
              href="#industries"
              style={{
                fontSize: "0.92rem",
                fontWeight: 700,
                color: activeDropdown === "industries" ? "var(--blue-primary)" : "var(--text-secondary)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 0",
                transition: "color 0.2s ease",
              }}
            >
              <span>Industries</span>
              <ChevronDown
                size={14}
                style={{
                  transform: activeDropdown === "industries" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </a>
          </div>

          {/* Technologies Item with Mega Menu */}
          <div
            onMouseEnter={() => handleMouseEnter("technologies")}
            onMouseLeave={handleMouseLeave}
            style={{ height: "100%", display: "flex", alignItems: "center" }}
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

      {/* INTERACTIVE MEGA MENU 1: CAPABILITIES */}
      {activeDropdown === "capabilities" && (
        <div
          onMouseEnter={() => handleMouseEnter("capabilities")}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid var(--border-light)",
            boxShadow: "0 20px 45px rgba(11, 19, 43, 0.12)",
            padding: "32px clamp(24px, 3.5vw, 64px) 36px",
            animation: "navDropdownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 99,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 0.6fr",
              gap: "40px",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {/* Left: 4 Practices Grid */}
            <div>
              <div
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  color: "var(--blue-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "18px",
                }}
              >
                ENTERPRISE PRACTICE DOMAINS
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <a
                  href="#capabilities"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                    display: "flex",
                    gap: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-border)";
                    e.currentTarget.style.background = "#eff6ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Database size={20} color="var(--blue-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary)" }}>AI & Data Intelligence</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: 1.4 }}>
                      Lakehouses, Snowflake, Databricks & semantic real-time pipelines.
                    </div>
                  </div>
                </a>

                <a
                  href="#capabilities"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                    display: "flex",
                    gap: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-border)";
                    e.currentTarget.style.background = "#eff6ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Layers size={20} color="var(--blue-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary)" }}>Enterprise Integration</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: 1.4 }}>
                      Boomi iPaaS, MuleSoft Anypoint, and universal API mesh connectivity.
                    </div>
                  </div>
                </a>

                <a
                  href="#capabilities"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                    display: "flex",
                    gap: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-border)";
                    e.currentTarget.style.background = "#eff6ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Bot size={20} color="var(--blue-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary)" }}>Hyperautomation & RPA</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: 1.4 }}>
                      UiPath bot fleets, intelligent OCR, and process mining optimization.
                    </div>
                  </div>
                </a>

                <a
                  href="#capabilities"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                    display: "flex",
                    gap: "14px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-border)";
                    e.currentTarget.style.background = "#eff6ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.background = "#f8fafc";
                  }}
                >
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Globe size={20} color="var(--blue-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.94rem", fontWeight: 800, color: "var(--text-primary)" }}>Application Modernization</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px", lineHeight: 1.4 }}>
                      Next.js 16, Kubernetes, Go microservices & global edge performance.
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Practice Spotlight Card */}
            <div
              style={{
                padding: "24px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #0b132b 0%, #1e293b 100%)",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.74rem", fontWeight: 700, color: "#60a5fa", padding: "3px 8px", borderRadius: "4px", background: "rgba(0, 98, 255, 0.2)", marginBottom: "12px" }}>
                  <Sparkles size={12} />
                  <span>PARTNER INNOVATION</span>
                </div>
                <div style={{ fontSize: "1.12rem", fontWeight: 800, lineHeight: 1.35, marginBottom: "8px" }}>
                  Boomi Innovation Award Winner & UiPath Partner of the Year
                </div>
                <div style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.5 }}>
                  Over 120+ certified platform architects delivering zero-data-loss enterprise transformations.
                </div>
              </div>

              <a
                href="#technologies"
                onClick={() => setActiveDropdown(null)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  color: "#93c5fd",
                  marginTop: "20px",
                }}
              >
                <span>Explore Certified Ecosystem</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MEGA MENU 2: INDUSTRIES */}
      {activeDropdown === "industries" && (
        <div
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid var(--border-light)",
            boxShadow: "0 20px 45px rgba(11, 19, 43, 0.12)",
            padding: "32px clamp(24px, 3.5vw, 64px) 36px",
            animation: "navDropdownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 99,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "18px",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            {[
              { id: "banking", name: "Banking & Financial Core", metric: "Sub-15ms Core Latency", icon: Landmark },
              { id: "insurance", name: "Insurance & Risk", metric: "3.2x Faster Settlement", icon: Shield },
              { id: "logistics", name: "Supply Chain & Logistics", metric: "99.9% Route Precision", icon: Truck },
              { id: "cpg", name: "Consumer Goods (CPG)", metric: "Zero-Copy Data Clean Rooms", icon: ShoppingBag },
              { id: "manufacturing", name: "Smart Manufacturing", metric: "Zero-Downtime Telemetry", icon: Factory },
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <a
                  key={ind.id}
                  href="#industries"
                  onClick={() => setActiveDropdown(null)}
                  style={{
                    padding: "18px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-light)",
                    background: "#f8fafc",
                    transition: "all 0.2s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "140px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--blue-border)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-light)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div>
                    <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                      <Icon size={18} color="var(--blue-primary)" />
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "var(--text-primary)" }}>{ind.name}</div>
                  </div>
                  <div style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--blue-primary)", marginTop: "12px" }}>
                    {ind.metric}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* INTERACTIVE MEGA MENU 3: TECHNOLOGIES */}
      {activeDropdown === "technologies" && (
        <div
          onMouseEnter={() => handleMouseEnter("technologies")}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid var(--border-light)",
            boxShadow: "0 20px 45px rgba(11, 19, 43, 0.12)",
            padding: "32px clamp(24px, 3.5vw, 64px) 36px",
            animation: "navDropdownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 99,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <div>
              <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
                INTEGRATION & CLOUD
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>Boomi iPaaS (Award Winner)</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>MuleSoft AnyPoint</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Apache Kafka Real-Time</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>AWS & Microsoft Azure</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
                DATA INTELLIGENCE & AI
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>Snowflake Lakehouse</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Databricks Unified Lakehouse</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>PyTorch & Domain LLMs</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Vector Databases (Milvus)</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
                HYPERAUTOMATION & RPA
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>UiPath Automation Cloud</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Microsoft Power Automate</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Celonis Process Mining</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Intelligent Document OCR</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "var(--blue-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
                MODERN APPLICATION STACK
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)" }}>Next.js 16 (App Router)</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>React 19 & TypeScript</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Kubernetes & Docker</a></li>
                <li><a href="#technologies" onClick={() => setActiveDropdown(null)} style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-secondary)" }}>Node.js & Go Microservices</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

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
              { label: "Industries", href: "#industries" },
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
