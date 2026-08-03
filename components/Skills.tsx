// components/Skills.tsx
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillGroups = portfolioData.skills;

  return (
    <section id="skills" className="px-6 py-20 md:py-28 border-t theme-border">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-2xl">
          <div className="mb-4 h-1 w-14 rounded-full bg-[color:var(--accent)]" />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight theme-text">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="theme-panel rounded-2xl px-4 py-5 text-center">
            <div className="text-2xl font-bold theme-text">{skillGroups.length}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] theme-muted">Groups</div>
          </div>
          <div className="theme-panel rounded-2xl px-4 py-5 text-center">
            <div className="text-2xl font-bold theme-text">2</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] theme-muted">Focuses</div>
          </div>
          <div className="theme-panel rounded-2xl px-4 py-5 text-center">
            <div className="text-2xl font-bold theme-text">1+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] theme-muted">Years</div>
          </div>
          <div className="theme-panel rounded-2xl px-4 py-5 text-center">
            <div className="text-2xl font-bold theme-text">All</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] theme-muted">Hands-on</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,transparent,rgba(5,150,105,0.9),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] theme-accent font-semibold">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 theme-muted">{group.note}</p>
                </div>
                <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-3 py-1 text-xs font-semibold theme-text">
                  {group.items.length}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="theme-chip rounded-full px-3 py-1.5 text-xs font-medium transition-colors group-hover:border-[color:var(--accent)]"
                  >
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
