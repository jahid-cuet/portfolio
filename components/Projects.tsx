// components/Projects.tsx
import { portfolioData } from "@/data/portfolio";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 border-t theme-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold mb-2">Portfolio</h2>
            <h3 className="text-3xl font-bold theme-text tracking-tight">Featured Projects</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="group theme-panel rounded-2xl p-6 flex flex-col justify-between hover:border-[color:var(--accent)] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold theme-text group-hover:text-[color:var(--accent)] transition-colors">{project.title}</h4>
                  <div className="flex items-center gap-2">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} className="theme-muted hover:text-[color:var(--foreground)] transition-colors" target="_blank" rel="noopener noreferrer"><GithubIcon size={18} /></a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} className="theme-muted hover:text-[color:var(--foreground)] transition-colors" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon size={18} /></a>
                    )}
                  </div>
                </div>
                <p className="theme-muted text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono theme-chip px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
