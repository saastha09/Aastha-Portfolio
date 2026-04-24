"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function OpenToWorkBanner() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("otw-dismissed") === "true");
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show || dismissed) return null;
  return (
    <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-4 left-1/2 z-30 flex w-[95%] max-w-3xl -translate-x-1/2 items-center justify-between rounded-full border border-border bg-bg-secondary px-4 py-3 text-sm">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green" />
        <span>Open to backend engineering roles - Bangalore - Remote - International</span>
      </div>
      <div className="flex items-center gap-3">
        <a href="#contact" className="text-accent-blue">Get in touch →</a>
        <button onClick={() => {
          sessionStorage.setItem("otw-dismissed", "true");
          setDismissed(true);
        }}><X size={14} /></button>
      </div>
    </motion.div>
  );
}
