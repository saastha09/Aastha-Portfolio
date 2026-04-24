"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { personal } from "@/lib/data";
import NodeGraph from "./NodeGraph";

export default function Hero() {
  const [bootDone, setBootDone] = useState(false);
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const role = useMemo(() => personal.heroTypewriterRoles[roleIndex], [roleIndex]);

  useEffect(() => {
    const done = sessionStorage.getItem("boot-seen") === "true";
    if (done) setBootDone(true);
    else setTimeout(() => {
      sessionStorage.setItem("boot-seen", "true");
      setBootDone(true);
    }, 1700);
  }, []);

  useEffect(() => {
    if (!bootDone) return;
    let i = 0;
    let deleting = false;
    const tick = () => {
      if (!deleting) {
        i += 1;
        setTyped(role.slice(0, i));
        if (i === role.length) {
          setTimeout(() => (deleting = true), 1400);
        }
      } else {
        i -= 1;
        setTyped(role.slice(0, i));
        if (i <= 0) {
          setRoleIndex((v) => (v + 1) % personal.heroTypewriterRoles.length);
          return;
        }
      }
      setTimeout(tick, deleting ? 45 : 75);
    };
    const t = setTimeout(tick, 100);
    return () => clearTimeout(t);
  }, [role, bootDone]);

  const handleResumeDownload = () => {
    const maybeFathom = (window as Window & { fathom?: { trackGoal: (id: string, value: number) => void } }).fathom;
    maybeFathom?.trackGoal("RESUME_DOWNLOAD", 0);
    const a = document.createElement("a");
    a.href = personal.resumeUrl;
    a.download = "Aastha_Sharma_Resume.pdf";
    a.click();
  };

  return (
    <section id="hero" className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-32 md:grid-cols-2">
      <div>
        {!bootDone ? (
          <div className="font-mono text-sm text-accent-cyan">
            {["initializing aastha.dev ...", "loading: backend_engineer.go", "status: open_to_work = true ✓", "ready."].map((line, i) => (
              <motion.p key={line} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.3 }}>
                {`> ${line}`}
              </motion.p>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold tracking-tight text-text-primary md:text-6xl">{personal.name}</h1>
            <p className="mt-4 h-8 font-mono text-lg text-accent-blue">
              {typed}
              <span className="animate-blink">|</span>
            </p>
            <p className="mt-4 text-lg text-text-secondary">{personal.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={handleResumeDownload} className="rounded-lg px-5 py-3 text-sm font-semibold text-white" style={{ backgroundImage: "var(--gradient-blue-cyan)" }}>
                Download Resume
              </button>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-border px-5 py-3 text-sm">
                View on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </div>
      <NodeGraph className="h-[350px] w-full rounded-xl border border-border bg-bg-secondary" />
    </section>
  );
}
