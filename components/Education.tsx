import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 border-t theme-border">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold mb-2">
            Education
          </h2>
          <h3 className="text-3xl font-bold theme-text tracking-tight">
            Academic Background
          </h3>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {portfolioData.education.map((item, index) => (
            <div
              key={index}
              className="theme-panel rounded-2xl p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm ring-1 ring-black/5">
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      width={52}
                      height={52}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold theme-text leading-snug">
                        {item.institution}
                      </h4>
                      <p className="text-sm font-medium theme-accent mt-0.5">
                        {item.degree}
                      </p>
                    </div>
                    <span className="text-xs theme-muted font-mono theme-panel-strong px-3 py-1 rounded-full w-fit whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  {/* Grade badge */}
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                      🎓 {item.grade}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed theme-muted">
                    {item.description}
                  </p>

                  {/* Activities */}
                  {item.activities && (
                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-widest theme-muted font-semibold mb-1">
                        Activities &amp; Societies
                      </p>
                      <p className="text-sm theme-muted">{item.activities}</p>
                    </div>
                  )}

                  {/* Skills */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium px-2.5 py-1 rounded-md theme-panel-strong theme-muted border theme-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
