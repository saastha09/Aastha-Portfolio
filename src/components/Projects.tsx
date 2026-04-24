"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import NodeGraph from "./NodeGraph";

export default function Projects() {
  const hero = projects.find((p) => p.hero)!;
  const rest = projects.filter((p) => !p.hero);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-8 grid gap-6">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-accent-cyan/40 bg-bg-secondary p-6 md:grid-cols-[1fr_320px]">
          <div>
            <span className="rounded-full bg-accent-green/20 px-2 py-1 text-xs text-accent-green">PRODUCTION</span>
            <h3 className="mt-3 text-2xl font-semibold">{hero.name}</h3>
            <p className="mt-2 text-text-secondary">{hero.longDescription}</p>
            <p className="mt-3 text-sm text-text-secondary">{hero.metrics.join(" • ")}</p>
            <div className="mt-3 flex flex-wrap gap-2">{hero.stack.map((s) => <span key={s} className="rounded-full border border-border px-2 py-1 text-xs">{s}</span>)}</div>
            <p className="mt-4 text-sm text-text-muted">Private repo - company project</p>
          </div>
          <NodeGraph className="h-[220px] w-full rounded-xl border border-border" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rest.map((project) => (
            <div key={project.id} className="rounded-xl border border-border bg-bg-secondary p-4">
              <span className="text-xs text-accent-cyan">{project.type.toUpperCase()}</span>
              <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
              <button onClick={() => setOpen(open === project.id ? null : project.id)} className="mt-3 text-sm text-accent-blue">What I built</button>
              <AnimatePresence>
                {open === project.id && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-2 text-sm text-text-secondary">
                    {project.longDescription}
                  </motion.p>
                )}
              </AnimatePresence>
              <div className="mt-3 flex flex-wrap gap-2">{project.stack.map((s) => <span key={s} className="rounded-full bg-bg-tertiary px-2 py-1 text-xs">{s}</span>)}</div>
              <div className="mt-4 text-sm">{project.github ? <a href={project.github} className="inline-flex items-center gap-1 text-accent-blue">GitHub <ExternalLink size={14} /></a> : <span className="text-text-muted">Private repo</span>}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
