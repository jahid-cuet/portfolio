// components/Experience.tsx
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t theme-border">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold mb-2">Career Path</h2>
          <h3 className="text-3xl font-bold theme-text tracking-tight">Work Experience</h3>
        </div>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l theme-border space-y-4">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full theme-accent-fill ring-4 ring-[color:var(--background)]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xl font-semibold theme-text">{exp.role} <span className="theme-accent">@ {exp.company}</span></h4>
                <span className="text-xs theme-muted font-mono theme-panel-strong px-3 py-1 rounded-full w-fit">{exp.period}</span>
              </div>
              <p className="theme-muted text-sm leading-relaxed">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="text-sm theme-muted flex items-start gap-2">
                    <span className="theme-accent mt-1">▸</span> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono theme-chip px-2.5 py-1 rounded-md">
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
