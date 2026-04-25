"use client";

import { motion } from "framer-motion";
import { aboutParagraphs, personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// about"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">I build things that<br />don&apos;t fall over.</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
          <img src={personal.photoUrl} alt={personal.name} className="aspect-square h-[260px] w-[260px] max-w-[280px] rounded-2xl border-2 border-[rgba(59,130,246,0.3)] object-cover shadow-[0_0_32px_rgba(59,130,246,0.15),0_0_64px_rgba(6,182,212,0.08)]" />
          <div className="space-y-4 text-text-secondary">
            {aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
            <div className="flex flex-wrap gap-2 pt-2">
              {personal.openTo.map((item) => (
                <span key={item} className="rounded-full border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.06)] px-3 py-1 font-mono text-[11px] tracking-[0.04em] text-[#3B82F6] transition-colors duration-150 hover:border-[rgba(59,130,246,0.4)] hover:bg-[rgba(59,130,246,0.12)]">{item}</span>
              ))}
            </div>
            <p className="mb-2 font-mono text-xs text-text-muted">{"// github activity"}</p>
            <img src="https://ghchart.rshah.org/3B82F6/saastha09" alt="Aastha's GitHub contribution graph" className="w-full rounded-lg opacity-90" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
