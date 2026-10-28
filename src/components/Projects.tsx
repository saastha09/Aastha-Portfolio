"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { lightspeed, projectGroups, projects, type ProjectGroup } from "@/lib/data";

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);
  const [group, setGroup] = useState<ProjectGroup | "all">("all");
  const shown = projects.filter((p) => group === "all" || p.group === group);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// projects"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">Things I shipped.</h2>
        <div className="mt-8 grid gap-6">
          <div className="hero-border-animated relative rounded-xl p-[1px]">
            <div className="grid grid-cols-1 rounded-[11px] bg-bg-secondary md:grid-cols-[3fr_2fr]">
              <div className="p-6">
                <span className="rounded-full bg-accent-green/20 px-2 py-1 text-xs text-accent-green">PRODUCTION · IN TIME TEC</span>
                <h3 className="mt-3 text-2xl font-semibold">{lightspeed.name}</h3>
                <p className="mt-2 text-text-secondary">{lightspeed.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lightspeed.stack.map((s) => <span key={s} className="rounded-full border border-border px-2 py-1 text-xs">{s}</span>)}
                </div>
                <p className="mt-4 text-sm text-text-muted">Private repo · company project</p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-[rgba(59,130,246,0.15)] bg-[rgba(59,130,246,0.04)] p-6 md:flex md:flex-col md:justify-center md:gap-6 md:rounded-r-xl md:border-t-0 md:border-l">
                {lightspeed.stats.map((stat) => (
                  <div key={stat.label} className="md:border-b md:border-border md:pb-6 md:last-of-type:border-0 md:last-of-type:pb-0">
                    <p className="font-mono text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted md:text-xs">{stat.label}</p>
                  </div>
                ))}
                <p className="col-span-3 font-mono text-[10px] text-text-muted">$ ./lightspeed --status=running</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {projectGroups.map((g) => {
              const n = projects.filter((p) => g.id === "all" || p.group === g.id).length;
              return (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={group === g.id}
                  onClick={() => setGroup(g.id)}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${group === g.id ? "border-accent-blue bg-accent-blue/10 text-accent-blue" : "border-border text-text-secondary hover:border-accent-blue/50 hover:text-text-primary"}`}
                >
                  {g.label} <span className="opacity-60">{n}</span>
                </button>
              );
            })}
          </div>
          <div data-testid="project-grid" className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((project) => (
              <div key={project.id} className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-secondary transition-colors hover:border-accent-blue/50">
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image.src} alt={project.image.alt} className="h-40 w-full border-b border-border object-cover object-top" loading="lazy" />
                )}
                <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">{project.type}</span>
                <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
                <button onClick={() => setOpen(open === project.id ? null : project.id)} className="mt-3 w-max text-sm text-accent-blue" aria-expanded={open === project.id}>
                  {open === project.id ? "Hide details" : "What I built"}
                </button>
                <AnimatePresence>
                  {open === project.id && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-2 text-sm text-text-secondary">
                      {project.longDescription}
                    </motion.p>
                  )}
                </AnimatePresence>
                <div className="flex flex-wrap gap-2 pt-4">{project.stack.map((s) => <span key={s} className="rounded-full bg-bg-tertiary px-2 py-1 text-xs">{s}</span>)}</div>
                <div className="mt-4 text-sm">{project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-accent-blue">GitHub <ExternalLink size={14} /></a> : <span className="text-text-muted">Private repo</span>}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
