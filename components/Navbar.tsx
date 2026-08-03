"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b theme-panel">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#home" className="font-bold text-lg tracking-tight theme-text">
          {portfolioData.personal.name.split(" ")[0]}
          <span className="theme-accent">.dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium theme-muted">
          <Link href="#home" className="transition-colors hover:text-[color:var(--accent)]">Home</Link>
          <Link href="#about" className="transition-colors hover:text-[color:var(--accent)]">About</Link>
          <Link href="#skills" className="transition-colors hover:text-[color:var(--accent)]">Skills</Link>
          <Link href="#experience" className="transition-colors hover:text-[color:var(--accent)]">Experience</Link>
          <Link href="#education" className="transition-colors hover:text-[color:var(--accent)]">Education</Link>
          <Link href="#projects" className="transition-colors hover:text-[color:var(--accent)]">Projects</Link>
          <Link href="#contact" className="transition-colors hover:text-[color:var(--accent)]">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />

        </div>
      </div>
    </header>
  );
}
