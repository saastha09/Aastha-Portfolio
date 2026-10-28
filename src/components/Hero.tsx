"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { heroStats, personal } from "@/lib/data";
import { GithubIcon } from "./icons";
import NodeGraph from "./NodeGraph";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typeIntervalRef = useRef<number | null>(null);
  const role = useMemo(() => personal.heroTypewriterRoles[roleIndex], [roleIndex]);

  useEffect(() => {
    if (typeIntervalRef.current) clearTimeout(typeIntervalRef.current);
    typeIntervalRef.current = window.setTimeout(() => {
      if (!isDeleting) {
        const next = role.slice(0, typed.length + 1);
        setTyped(next);
        if (next === role) {
          typeIntervalRef.current = window.setTimeout(() => setIsDeleting(true), 1200);
          return;
        }
      } else {
        const next = role.slice(0, typed.length - 1);
        setTyped(next);
        if (!next) {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % personal.heroTypewriterRoles.length);
          return;
        }
      }
    }, isDeleting ? 45 : 75);
    return () => {
      if (typeIntervalRef.current) clearTimeout(typeIntervalRef.current);
    };
  }, [isDeleting, role, typed]);

  const handleResumeDownload = () => {
    const maybeFathom = (window as Window & { fathom?: { trackGoal: (id: string, value: number) => void } }).fathom;
    maybeFathom?.trackGoal("RESUME_DOWNLOAD", 0);
    const a = document.createElement("a");
    a.href = personal.resumeUrl;
    a.download = "Aastha_Sharma_Resume.pdf";
    a.click();
  };

  return (
    <section id="hero" className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4">
      <style>{`
        .hero-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .hero-enter {
          animation: heroEnter 0.6s ease-out both;
        }
        @keyframes heroEnter {
          from { opacity: 0; transform: translateY(16px); }
        }
      `}</style>
      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-8">
        <div className="w-full md:w-[55%]">
          <div className="hero-enter">
            <p className="mb-4 font-mono text-sm text-accent-cyan">&gt; backend_engineer.go loaded · press / for the terminal</p>
            <h1
              className="font-extrabold"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              <span className="block text-text-primary">Aastha</span>
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sharma.
              </span>
            </h1>

            <p className="mt-4 h-8 font-mono text-lg" style={{ color: "#3B82F6" }}>
              {typed}
              <span className="hero-cursor">|</span>
            </p>
            <p className="mt-4 text-lg text-text-secondary">{personal.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
              >
                Download Resume
                <ArrowRight size={14} />
              </button>
              <a
                href="#projects"
                className="rounded-lg border border-border px-6 py-3 text-sm text-text-secondary transition-colors duration-200 hover:border-accent-blue hover:text-text-primary"
              >
                See my work
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center rounded-lg border border-border px-4 py-3 text-text-secondary transition-colors duration-200 hover:border-accent-blue hover:text-text-primary"
              >
                <GithubIcon size={16} />
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-bold text-text-primary">{stat.value}</dd>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-secondary">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-[45%]">
          <NodeGraph className="h-[350px] w-full rounded-xl border border-border bg-bg-secondary" />
        </div>
      </div>
    </section>
  );
}
