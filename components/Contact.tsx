import { portfolioData } from "@/data/portfolio";
import { ArrowUpRightIcon, MailIcon } from "./Icons";

const details = [
  { label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
  { label: "Phone", value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
  { label: "GitHub", value: "GitHub Profile", href: portfolioData.personal.github },
  { label: "LinkedIn", value: "LinkedIn Profile", href: portfolioData.personal.linkedin },
  { label: "Location", value: portfolioData.personal.location },
];

function Field({
  label,
  placeholder,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) {
  const baseClass =
    "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-sm outline-none transition-all placeholder:text-[color:var(--muted-foreground)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent-soft)]";

  return (
    <label className="block space-y-3">
      <span className="text-sm font-medium theme-text">{label}</span>
      {multiline ? (
        <textarea className={`${baseClass} min-h-[180px] resize-y`} placeholder={placeholder} />
      ) : (
        <input className={baseClass} placeholder={placeholder} />
      )}
    </label>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t theme-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-[color:var(--accent)]" />
          <h2 className="text-4xl md:text-5xl font-light tracking-tight theme-text">
            Wanna <span className="font-semibold">Start Work</span> With Me?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg leading-8 theme-muted">
            If you have a project, role, or collaboration in mind, send a message and I’ll
            get back to you as soon as I can.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="theme-panel rounded-[2rem] p-6 md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-light tracking-tight theme-text">
                Get In Touch
              </h3>
            </div>

            <div className="grid gap-5">
              <Field label="Your Name" placeholder="Your Name" />
              <Field label="Your Email" placeholder="Your Email" />
              <Field label="Your Phone" placeholder="Your Phone" />
              <Field label="Write a Message" placeholder="Write a Message" multiline />
            </div>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-foreground)] transition-all hover:opacity-90"
              >
                Send Message <ArrowUpRightIcon size={18} />
              </button>
            </div>
          </div>

          <aside className="theme-panel rounded-[2rem] p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-light tracking-tight theme-text">
              My Contact Details
            </h3>

            <div className="mt-10 space-y-7">
              {details.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] theme-text">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-2 block text-base md:text-lg leading-7 theme-muted transition-colors hover:text-[color:var(--accent)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base md:text-lg leading-7 theme-muted">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                  <MailIcon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] theme-text">
                    Preferred contact
                  </p>
                  <p className="mt-1 text-sm theme-muted">Email for project inquiries and collaborations</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="flex flex-col gap-4 border-t theme-border pt-6 text-xs theme-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
