"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const next = stored ?? "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-bg-primary/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-accent-blue">aastha.dev</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-2 py-1 text-xs text-text-secondary">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-accent-green" />
            Open to Work
          </span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-secondary transition hover:text-text-primary">
              {item.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="rounded-md border border-border p-2 text-text-secondary">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <button className="md:hidden" onClick={() => setMobile((v) => !v)}>
          {mobile ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {mobile && (
        <div className="border-t border-border bg-bg-secondary px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobile(false)} className="text-text-secondary">
                {item.label}
              </a>
            ))}
            <button onClick={toggleTheme} className="inline-flex w-max rounded-md border border-border px-3 py-1 text-sm">
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
