// components/Skills.tsx
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t theme-border">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold mb-2">Expertise</h2>
          <h3 className="text-3xl font-bold theme-text tracking-tight">Core Tech Stack</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category} className="theme-panel rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider theme-muted">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span key={idx} className="theme-chip text-xs font-medium px-3 py-1.5 rounded-lg">
                    {skill}
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
