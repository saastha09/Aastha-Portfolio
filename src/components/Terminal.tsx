"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { terminalCommands } from "@/lib/data";

type Props = { open: boolean; onClose: () => void };

export default function Terminal({ open, onClose }: Props) {
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<string[]>(["Welcome! Type `help` to see available commands."]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const run = (command: string) => {
    const key = command.trim().toLowerCase();
    const result = terminalCommands[key];
    if (!result) return setLines((p) => [...p, `> ${command}`, "command not found"]);
    if (result === "__CLEAR__") return setLines([]);
    setLines((p) => [...p, `> ${command}`, result]);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 p-4" onClick={onClose}>
          <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} onClick={(e) => e.stopPropagation()} className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-bg-secondary font-mono text-sm">
            <div className="flex justify-between border-b border-border px-4 py-2"><span>aastha@portfolio ~ %</span><button onClick={onClose}>[ESC]</button></div>
            <div className="max-h-[420px] overflow-auto px-4 py-3">
              {lines.map((line, i) => <p key={`${line}-${i}`} className="whitespace-pre-wrap">{line}</p>)}
              <form onSubmit={(e) => {
                e.preventDefault();
                if (!value) return;
                run(value);
                setHistory((p) => [...p, value]);
                setHistoryIndex(-1);
                setValue("");
              }}>
                <span>&gt; </span>
                <input ref={inputRef} value={value} onKeyDown={(e) => {
                  if (e.key === "Escape") onClose();
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
                    setHistoryIndex(next);
                    setValue(history[next] ?? "");
                  }
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    const next = Math.min(history.length - 1, historyIndex + 1);
                    setHistoryIndex(next);
                    setValue(history[next] ?? "");
                  }
                }} onChange={(e) => setValue(e.target.value)} className="w-[90%] bg-transparent outline-none" />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
