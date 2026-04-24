"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { FormEvent, useState } from "react";
import { personal } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("error");
      setStatusMessage("Please fill in name, email, and message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("Sending...");

    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message.");
        }

        setStatus("success");
        setStatusMessage("Thanks! Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
        return;
      } catch {
        setStatus("error");
        setStatusMessage("Could not send via Formspree. Opening your email app instead.");
      }
    }

    const mailto = `mailto:${encodeURIComponent(personal.email)}?subject=${encodeURIComponent(
      `Portfolio inquiry from ${trimmedName}`
    )}&body=${encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`
    )}`;
    window.location.href = mailto;
    setStatus("success");
    setStatusMessage("Your email app opened with a pre-filled draft.");
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-2 text-text-secondary">I respond to interesting problems. Reach out.</p>
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3"><span>{personal.email}</span><button onClick={copyEmail} className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs">{copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}</button></div>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent-blue">LinkedIn <ExternalLink size={13} /></a>
        <a href={personal.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent-blue">GitHub <ExternalLink size={13} /></a>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 grid gap-3 rounded-xl border border-border bg-bg-secondary p-4">
        <input
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded border border-border bg-transparent px-3 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded border border-border bg-transparent px-3 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="rounded border border-border bg-transparent px-3 py-2"
          required
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-max rounded bg-accent-blue px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {statusMessage ? (
          <p
            className={
              status === "error" ? "text-sm text-red-400" : "text-sm text-text-secondary"
            }
          >
            {statusMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
