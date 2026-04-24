"use client";

import { Brain, Layers, Star } from "lucide-react";
import { certifications } from "@/lib/data";

const iconMap = { brain: Brain, layers: Layers, star: Star };

export default function Certifications() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold">Certifications</h2>
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
    </section>
  );
}
