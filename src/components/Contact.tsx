"use client";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { personal } from "@/lib/data";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = form;

    // Client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMsg("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setStatusMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setStatusMsg("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    // PATH 1: Formspree (configured)
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || "Formspree error");
        }

        setStatus("success");
        setStatusMsg("Sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        return;
      } catch (err) {
        // Formspree failed — fall through to mailto
        console.error("Formspree failed, falling back to mailto:", err);
      }
    }

    // PATH 2: mailto fallback (always available)
    const subject = encodeURIComponent(`Hey Aastha — from ${name.trim()}`);
    const body = encodeURIComponent(
      `Hi Aastha,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setStatusMsg("Your email app opened with a pre-filled message.");
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        {/* Heading injected by Prompt 2 */}

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: direct links */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">{"// reach me at"}</p>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm text-text-primary">{personal.email}</span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs text-text-secondary transition-colors duration-150 hover:border-accent-blue hover:text-accent-blue"
                >
                  {copied ? <><Check size={11} /> Copied!</> : <><Copy size={11} /> Copy</>}
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-150 hover:text-accent-blue"
                >
                  <ExternalLink size={13} />
                  LinkedIn — aastha-sharma-906a2720a
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-150 hover:text-accent-blue"
                >
                  <ExternalLink size={13} />
                  GitHub — saastha09
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-bg-secondary p-4">
              <p className="mb-1 font-mono text-xs text-text-muted">{"// availability"}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent-green" />
                <span className="text-sm text-text-secondary">Open to roles — Bangalore · Remote · International</span>
              </div>
              <p className="mt-2 font-mono text-xs text-text-muted">Target: ₹28L+ · Backend · Distributed systems</p>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => updateForm("name", e.target.value)}
              className="rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-blue focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => updateForm("email", e.target.value)}
              className="rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-blue focus:outline-none"
              required
            />
            <textarea
              placeholder="What are you working on?"
              rows={5}
              value={form.message}
              onChange={(e) => updateForm("message", e.target.value)}
              className="resize-none rounded-lg border border-border bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-blue focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={14} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {statusMsg && (
              <p className={`text-sm font-mono ${status === "error" ? "text-red-400" : "text-accent-green"}`}>
                {status === "error" ? "✗ " : "✓ "}{statusMsg}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
