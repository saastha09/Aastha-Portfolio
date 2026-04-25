"use client";

import { motion } from "framer-motion";
import { useId } from "react";
import { skills } from "@/lib/data";

function SkillGauge({ name, level }: { name: string; level: number }) {
  const gradId = useId();
  const radius = 28;
  const c = 2 * Math.PI * radius;
  const offset = c - (level / 100) * c;
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-bg-secondary p-3">
      <svg width="72" height="72" className="-rotate-90">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r={radius} stroke="var(--bg-tertiary)" strokeWidth="2" fill="none" />
        <motion.circle initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }} transition={{ duration: 1 }} cx="36" cy="36" r={radius} stroke={`url(#${gradId})`} strokeWidth="3" fill="none" strokeDasharray={c} />
      </svg>
      <p className="mt-2 text-center font-mono text-[11px] text-text-secondary">{name}</p>
      <p className="font-mono text-[13px] font-medium text-text-primary">{level}%</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl bg-transparent px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// skills"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">What I know.</h2>
        <div className="mt-8">
          {skills.map((group) => (
            <div key={group.category} className="mb-10">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-text-muted">{group.category}</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {group.items.map((skill) => <SkillGauge key={skill.name} name={skill.name} level={skill.level} />)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
