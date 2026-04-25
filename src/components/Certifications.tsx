"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Star } from "lucide-react";
import { certifications } from "@/lib/data";

const iconMap = { brain: Brain, layers: Layers, star: Star };

export default function Certifications() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-accent-blue">{"// credentials"}</span>
        <h2 className="mt-2 mb-8 text-3xl font-bold text-text-primary">Certs & wins.</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          {certifications.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="min-w-[220px] rounded-xl border border-border bg-bg-secondary p-4 transition hover:-translate-y-1 hover:border-accent-blue">
                <Icon size={18} className="text-accent-blue" />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.issuer}</p>
                <p className="text-xs text-text-muted">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
