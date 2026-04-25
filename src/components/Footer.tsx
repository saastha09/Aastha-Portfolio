"use client";

import { ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import { personal } from "@/lib/data";

function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.5A10.5 10.5 0 0 0 1.5 12.13c0 4.67 3 8.62 7.16 10.02.53.1.72-.23.72-.5 0-.25-.01-.92-.01-1.8-2.91.64-3.52-1.42-3.52-1.42-.48-1.22-1.17-1.54-1.17-1.54-.95-.66.07-.65.07-.65 1.05.08 1.61 1.1 1.61 1.1.94 1.62 2.45 1.15 3.05.88.1-.69.37-1.15.67-1.41-2.32-.27-4.77-1.18-4.77-5.24 0-1.16.41-2.1 1.08-2.85-.1-.27-.47-1.36.11-2.83 0 0 .89-.29 2.9 1.09a9.97 9.97 0 0 1 5.28 0c2.01-1.38 2.9-1.09 2.9-1.09.58 1.47.21 2.56.11 2.83.67.75 1.08 1.69 1.08 2.85 0 4.07-2.45 4.96-4.79 5.23.38.33.71.96.71 1.94 0 1.4-.01 2.53-.01 2.87 0 .27.19.61.73.5a10.64 10.64 0 0 0 7.15-10.03A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

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
        Built with Next.js · Tailwind · Framer Motion · Deployed on Cloudflare Pages
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <a href={personal.github} className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <GithubIcon size={13} /> GitHub
        </a>
        <a href={personal.linkedin} className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <ExternalLink size={13} /> LinkedIn
        </a>
        <button onClick={copyEmail} className="flex items-center gap-1 text-xs text-text-muted transition-colors hover:text-accent-blue">
          <Mail size={13} /> {copied ? "Copied!" : "Email"}
        </button>
      </div>
    </footer>
  );
}
