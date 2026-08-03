// components/Contact.tsx
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRightIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t theme-border">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-xs uppercase tracking-widest theme-accent font-semibold">Get In Touch</h2>
        <h3 className="text-3xl md:text-5xl font-bold theme-text tracking-tight">Let&apos;s build something extraordinary together.</h3>
        <p className="theme-muted max-w-lg mx-auto text-base">
          Whether you have a project in mind or want to discuss engineering and AI, my inbox is always open.
        </p>
        <div className="pt-4">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 theme-accent-fill font-semibold px-8 py-4 rounded-xl transition-all text-base hover:opacity-90"
          >
            <MailIcon size={20} /> Say Hello <ArrowUpRightIcon size={18} />
          </a>
        </div>
        <div className="pt-20 text-xs theme-muted border-t theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
