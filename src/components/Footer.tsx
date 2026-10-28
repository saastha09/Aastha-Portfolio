"use client";

import { ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import { personal } from "@/lib/data";
import { GithubIcon } from "./icons";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-24 border-t border-border py-8 text-center">
      <p className="font-mono text-xs text-text-muted">
        Built with Next.js, Tailwind and Framer Motion · © 2026 Aastha Sharma
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <a href={personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <GithubIcon size={13} /> GitHub
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <ExternalLink size={13} /> LinkedIn
        </a>
        <button onClick={copyEmail} className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <Mail size={13} /> {copied ? "Copied!" : "Email"}
        </button>
      </div>
    </footer>
  );
}
