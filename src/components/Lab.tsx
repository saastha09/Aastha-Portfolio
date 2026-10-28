"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { labProjects } from "@/lib/data";

const toneClass = {
  green: "border-accent-green/30 bg-accent-green/10 text-accent-green",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-500",
};

export default function Lab() {
  return (
    <section id="lab" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// lab"}</span>
        <h2 className="mt-2 text-3xl font-bold text-text-primary">Systems I build to understand them.</h2>
        <p className="mt-3 mb-8 max-w-2xl text-sm text-text-secondary">
          Personal projects, built milestone by milestone with design docs and tests. Each card says how far it has got.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {labProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="flex flex-col rounded-xl border border-border bg-bg-secondary p-5 transition-colors hover:border-accent-blue/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-mono text-lg font-semibold text-text-primary">{p.name}</h3>
                <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] ${toneClass[p.statusTone]}`}>{p.status}</span>
              </div>
              <p className="mt-2 text-sm text-text-secondary">{p.pitch}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-text-secondary">
                {p.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                {p.stack.map((s) => <span key={s} className="rounded-full bg-bg-tertiary px-2 py-1 font-mono text-[11px]">{s}</span>)}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1 text-sm text-accent-blue">
                    GitHub <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
