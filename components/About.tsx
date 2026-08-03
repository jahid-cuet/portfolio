import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] theme-panel-strong min-h-[420px] lg:min-h-[680px]">
          <Image
            src="/jahid.jpeg"
            alt="Md Jahid Hasan portrait"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-xl lg:pl-6">
          <div className="mb-8 h-1 w-14 rounded-full bg-[color:var(--accent)]" />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight theme-text">
            About <span className="font-semibold">Me</span>
          </h2>

          <div className="mt-8 space-y-6 text-base md:text-lg leading-8 theme-muted">
            <p>{portfolioData.personal.tagline}</p>
            <p>{portfolioData.personal.about}</p>
            <p>
Combined with a strong foundation in machine learning, deep learning (PyTorch, CNNs), and data analysis, I am passionate about building intelligent systems that optimize clinical workflows and improve patient care.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={portfolioData.personal.resume}
              download
              className="inline-flex items-center justify-center rounded-full bg-[#6b7280] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)] transition-all hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
