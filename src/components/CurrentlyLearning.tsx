"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { currentlyLearning } from "@/lib/data";

export default function CurrentlyLearning() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => Math.min(v + 1, currentlyLearning.length)), 400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary font-mono">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2 text-xs text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="ml-2">~ aastha@dev currently learning</span>
          </div>
          <div className="space-y-1 px-4 py-4 text-sm">
            {currentlyLearning.slice(0, visible).map((item) => <p key={item}><span className="text-accent-green">&gt;</span> learning: {item}</p>)}
            <span className="animate-blink">|</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
