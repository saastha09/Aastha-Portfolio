"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [active, setActive] = useState(experiences[0].id);

  return (
    <motion.section id="experience" className="mx-auto w-full max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl font-semibold">Experience</h2>
      <div className="mt-8 grid gap-6">
        {experiences.map((exp) => {
          const expanded = active === exp.id;
          return (
            <div key={exp.id} className={`rounded-xl border p-5 ${expanded ? "border-accent-blue bg-bg-tertiary" : "border-border bg-bg-secondary"}`}>
              <button onClick={() => setActive(expanded ? "" : exp.id)} className="w-full text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                </div>
                <p className="text-sm text-text-secondary">{exp.role} • {exp.location}</p>
                <p className="mt-2 text-sm text-text-secondary">{exp.summary}</p>
              </button>
              <AnimatePresence>
                {expanded && (
                  <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 space-y-2 overflow-hidden text-sm text-text-secondary">
                    {exp.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                  </motion.ul>
                )}
              </AnimatePresence>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((item) => <span key={item} className="rounded-full bg-bg-tertiary px-2 py-1 font-mono text-xs">{item}</span>)}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
