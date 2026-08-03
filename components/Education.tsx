import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t theme-border">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold mb-2">
            Education
          </h2>
          <h3 className="text-3xl font-bold theme-text tracking-tight">
            Academic Background
          </h3>
        </div>
        <div className="space-y-8">
          {portfolioData.education.map((item, index) => (
            <div key={index} className="relative pl-6 border-l theme-border space-y-4">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full theme-accent-fill ring-4 ring-[color:var(--background)]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xl font-semibold theme-text">
                  {item.degree}{" "}
                  <span className="theme-accent">@ {item.institution}</span>
                </h4>
                <span className="text-xs theme-muted font-mono theme-panel-strong px-3 py-1 rounded-full w-fit">
                  {item.period}
                </span>
              </div>
              <p className="theme-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
