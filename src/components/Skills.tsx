"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

function SkillGauge({ name, level }: { name: string; level: number }) {
  const radius = 32;
  const c = 2 * Math.PI * radius;
  const offset = c - (level / 100) * c;
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-bg-secondary p-3">
      <svg width="80" height="80" className="-rotate-90">
        <circle cx="40" cy="40" r={radius} stroke="var(--bg-tertiary)" strokeWidth="6" fill="none" />
        <motion.circle initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }} transition={{ duration: 1 }} cx="40" cy="40" r={radius} stroke="var(--accent-blue)" strokeWidth="6" fill="none" strokeDasharray={c} />
      </svg>
      <p className="text-center text-xs text-text-secondary">{name}</p>
      <p className="font-mono text-sm">{level}%</p>
    </div>
  );
}

export default function Skills() {
  return (
    <motion.section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-8 space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-text-muted">{group.category}</h3>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {group.items.map((skill) => <SkillGauge key={skill.name} name={skill.name} level={skill.level} />)}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
