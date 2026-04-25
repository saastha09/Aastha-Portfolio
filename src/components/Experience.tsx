"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [active, setActive] = useState(experiences[0].id);

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// work"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">Where I&apos;ve shipped.</h2>
        <div className="relative mt-8 pl-10">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] to-transparent" />
          <div className="grid gap-6">
            {experiences.map((exp, index) => {
            const expanded = active === exp.id;
            const isCurrentRole = index === 0;
            return (
              <div key={exp.id} className={`relative rounded-xl border bg-bg-secondary p-5 ${isCurrentRole ? "border-[rgba(59,130,246,0.4)]" : "border-border"}`}>
                <span className={`absolute left-[-33px] top-6 h-[10px] w-[10px] rounded-full border-2 transition-colors duration-150 ${expanded ? "border-[#3B82F6] bg-[#3B82F6]" : "border-[#30363d] bg-transparent"}`} />
                {isCurrentRole && <span className="mb-3 inline-block rounded bg-accent-blue/10 px-2 py-0.5 font-mono text-[10px] text-accent-blue">Current Role</span>}
                <button onClick={() => setActive(expanded ? "" : exp.id)} className="w-full text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-text-primary">{exp.company}</h3>
                    <span className="text-sm font-mono text-text-muted">{exp.period}</span>
                  </div>
                  <p className="font-mono text-sm text-text-secondary">{exp.role} • {exp.location}</p>
                  <p className="mt-2 text-sm text-text-secondary">{exp.summary}</p>
                  <p className="mt-3 font-mono text-xs text-text-muted">{expanded ? "↑ collapse" : "↓ expand"}</p>
                </button>
                <AnimatePresence>
                  {expanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                        {exp.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((item) => <span key={item} className="rounded-full bg-bg-tertiary px-2 py-1 font-mono text-xs">{item}</span>)}
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
