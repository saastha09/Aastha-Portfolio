"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { personal } from "@/lib/data";
import NodeGraph from "./NodeGraph";

const BOOT_LINES = [
  "> initializing aastha.dev ...",
  "> role: backend_engineer.go loaded",
  "> uptime: 99.9%  devices: 100+  status: open",
  "> ready. press / for terminal easter egg",
];

export default function Hero() {
  const [bootText, setBootText] = useState(["", "", "", ""]);
  const [bootVisible, setBootVisible] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typeIntervalRef = useRef<number | null>(null);
  const role = useMemo(() => personal.heroTypewriterRoles[roleIndex], [roleIndex]);

  useEffect(() => {
    let cancelled = false;
    const runBootSequence = async () => {
      const nextLines = ["", "", "", ""];
      for (let lineIndex = 0; lineIndex < BOOT_LINES.length; lineIndex += 1) {
        const line = BOOT_LINES[lineIndex];
        for (let charIndex = 0; charIndex < line.length; charIndex += 1) {
          if (cancelled) return;
          nextLines[lineIndex] += line[charIndex];
          setBootText([...nextLines]);
          await new Promise((resolve) => {
            window.setTimeout(resolve, 35);
          });
        }
        if (lineIndex < BOOT_LINES.length - 1) {
          await new Promise((resolve) => {
            window.setTimeout(resolve, 200);
          });
        }
      }
      if (cancelled) return;
      await new Promise((resolve) => {
        window.setTimeout(resolve, 800);
      });
      if (cancelled) return;
      setBootVisible(false);
    };
    runBootSequence();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!heroVisible) return;
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
  }, [heroVisible, isDeleting, role, typed]);

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
      `}</style>
      <div className="flex w-full flex-col gap-8 md:flex-row md:gap-8">
        <div className="w-full md:w-[55%]">
          <motion.div
            initial={false}
            animate={bootVisible ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            onAnimationComplete={() => {
              if (!bootVisible) setHeroVisible(true);
            }}
            className="font-mono text-sm text-accent-cyan"
          >
            {bootText.map((line, index) => (
              <p key={BOOT_LINES[index]}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={heroVisible ? "mt-0" : "hidden"}
          >
            <h1
              className="font-extrabold"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
              }}
            >
              <span style={{ color: "#e6edf3", display: "block" }}>Aastha</span>
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

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
              >
                Download Resume
                <ArrowRight size={14} />
              </button>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-6 py-3 text-sm transition-colors duration-200"
                style={{ borderColor: "#30363d", color: "#8b949e" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = "#3B82F6";
                  event.currentTarget.style.color = "#e6edf3";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = "#30363d";
                  event.currentTarget.style.color = "#8b949e";
                }}
              >
                View on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hidden w-full md:block md:w-[45%]">
          <NodeGraph className="h-[350px] w-full rounded-xl border border-border bg-bg-secondary" />
        </div>
      </div>
    </section>
  );
}
