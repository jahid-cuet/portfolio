"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./Icons";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const firstName = portfolioData.personal.name.split(" ")[0];

  return (
    <>
      <header className="sticky top-0 z-50 border-b theme-panel">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="#home" className="font-bold text-base sm:text-lg tracking-tight theme-text hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
            Md Jahid{" "}
            <span className="theme-accent">Hasan</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {NAV_LINKS.map(({ href, label }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative transition-colors ${isActive
                      ? "text-[color:var(--accent)]"
                      : "theme-muted hover:text-[color:var(--accent)]"
                    }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[color:var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            {/* Hamburger button – mobile only */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl theme-panel theme-muted hover:text-[color:var(--foreground)] transition-all active:scale-95"
            >
              {isOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 md:hidden"
          style={{ top: "4rem" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <nav
            className="relative mx-3 mt-2 rounded-2xl theme-panel border border-[color:var(--border)] shadow-2xl overflow-hidden"
            style={{
              animation: "mobileMenuIn 0.22s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <ul className="divide-y divide-[color:var(--border)]">
              {NAV_LINKS.map(({ href, label }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-5 py-4 text-base font-medium transition-all active:scale-[0.98] ${isActive
                          ? "text-[color:var(--accent)] bg-[color:var(--accent-soft)]"
                          : "theme-text hover:bg-[color:var(--accent-soft)] hover:text-[color:var(--accent)]"
                        }`}
                    >
                      <span>{label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
