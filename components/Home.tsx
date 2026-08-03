import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRightIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold theme-text tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accent)] to-teal-300">
            {portfolioData.personal.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl theme-muted font-medium">
          {portfolioData.personal.tagline}
        </p>
        <p className="max-w-2xl mx-auto theme-muted text-base md:text-lg leading-relaxed">
          {portfolioData.personal.about}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="#projects"
            className="flex items-center gap-2 theme-accent-fill font-semibold px-6 py-3 rounded-xl transition-all hover:opacity-90"
          >
            View Projects <ArrowRightIcon size={18} />
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl theme-panel theme-muted hover:text-[color:var(--foreground)] transition-all"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl theme-panel theme-muted hover:text-[color:var(--foreground)] transition-all"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
