"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function OpenToWorkBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("otw-dismissed") === "true");
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 bottom-4 z-30 mx-auto flex w-[95%] max-w-3xl items-center justify-between gap-3 rounded-full border border-border bg-bg-secondary px-4 py-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
            <span className="text-xs sm:text-sm">Open to backend engineering roles · Bangalore · Remote · Relocation</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="whitespace-nowrap text-accent-blue">Get in touch →</a>
            <button aria-label="Dismiss" onClick={() => {
              sessionStorage.setItem("otw-dismissed", "true");
              setDismissed(true);
            }}><X size={14} /></button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
