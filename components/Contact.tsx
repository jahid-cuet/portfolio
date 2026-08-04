"use client";

import { useState, type FormEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import { ExternalLinkIcon, GithubIcon, LinkedinIcon, MailIcon, SendIcon } from "./Icons";

const details = [
  { label: "Email", value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
  { label: "Location", value: portfolioData.personal.location },
];

function Field({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  const baseClass =
    "w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-sm outline-none transition-all placeholder:text-[color:var(--muted-foreground)] focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent-soft)]";

  return (
    <label className="block space-y-3">
      <span className="text-sm font-medium theme-text">{label}</span>
      {multiline ? (
        <textarea
          className={`${baseClass} min-h-[120px] resize-y`}
          placeholder={placeholder}
          value={value}
          required
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          type={label === "Email" ? "email" : "text"}
          className={baseClass}
          placeholder={placeholder}
          value={value}
          required
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      setStatus({ type: "success", text: "Message sent successfully. Thank you!" });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : "The message could not be sent.",
      });
    } finally {
      setIsSending(false);
    }
  };

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
          <div className="theme-panel rounded-2xl p-6 md:p-8">
            <div className="mb-7">
              <h3 className="text-2xl font-medium tracking-tight theme-text">Get In Touch</h3>
            </div>

            <form className="grid gap-6" onSubmit={handleSubmit}>
              <Field label="Name" placeholder="Your name" value={name} onChange={setName} />
              <Field
                label="Email"
                placeholder="your.email@example.com"
                value={email}
                onChange={setEmail}
              />
              <Field
                label="Message"
                placeholder="How can I help you?"
                value={message}
                onChange={setMessage}
                multiline
              />

              <div className="mt-0">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] disabled:cursor-wait disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Message"} {!isSending && <SendIcon size={17} />}
                </button>
              </div>
              <p
                aria-live="polite"
                className={`text-sm ${status?.type === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
              >
                {status?.text}
              </p>
            </form>
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

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] theme-text">
                Find Me Online
              </p>
              <div className="mt-4 grid gap-4">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:shadow-lg hover:shadow-black/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)] transition-transform group-hover:scale-105">
                    <GithubIcon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium theme-text">GitHub</p>
                      <ExternalLinkIcon size={14} className="opacity-60" />
                    </div>
                    <p className="truncate text-sm theme-muted">github.com/jahid-cuet</p>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:shadow-lg hover:shadow-black/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)] transition-transform group-hover:scale-105">
                    <LinkedinIcon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium theme-text">LinkedIn</p>
                      <ExternalLinkIcon size={14} className="opacity-60" />
                    </div>
                    <p className="truncate text-sm theme-muted">Connect professionally</p>
                  </div>
                </a>
              </div>
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
