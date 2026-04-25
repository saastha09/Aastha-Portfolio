"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const hero = projects.find((p) => p.hero)!;
  const rest = projects.filter((p) => !p.hero);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// projects"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">Things I built.</h2>
        <div className="mt-8 grid gap-6">
          <div className="hero-border-animated relative rounded-xl p-[1px]">
            <div className="grid grid-cols-1 rounded-[11px] bg-bg-secondary md:grid-cols-[3fr_2fr]">
              <div className="p-6">
                <span className="rounded-full bg-accent-green/20 px-2 py-1 text-xs text-accent-green">PRODUCTION</span>
                <h3 className="mt-3 text-2xl font-semibold">{hero.name}</h3>
                <p className="mt-2 text-text-secondary">{hero.longDescription}</p>
                <p className="mt-3 text-sm text-text-secondary">{hero.metrics.join(" • ")}</p>
                <div className="mt-3 flex flex-wrap gap-2">{hero.stack.map((s) => <span key={s} className="rounded-full border border-border px-2 py-1 text-xs">{s}</span>)}</div>
                <p className="mt-4 text-sm text-text-muted">Private repo - company project</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-[rgba(59,130,246,0.15)] bg-[rgba(59,130,246,0.04)] p-6 md:flex md:flex-col md:justify-center md:gap-6 md:border-t-0 md:border-l md:rounded-r-xl">
                <div>
                  <p className="font-mono text-3xl font-bold text-[#3B82F6]">100+</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">devices managed</p>
                </div>
                <div className="hidden h-px bg-[rgba(255,255,255,0.06)] md:block" />
                <div>
                  <p className="font-mono text-3xl font-bold text-[#06B6D4]">99.9%</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">platform uptime</p>
                </div>
                <div className="hidden h-px bg-[rgba(255,255,255,0.06)] md:block" />
                <div>
                  <p className="font-mono text-3xl font-bold text-[#22C55E]">2</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted">backend engineers</p>
                </div>
                <p className="col-span-3 mt-4 font-mono text-[10px] text-text-muted">
                  $ ./lightspeed --status=running
                </p>
              </div>
            </div>
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
      </motion.div>
    </section>
  );
}
