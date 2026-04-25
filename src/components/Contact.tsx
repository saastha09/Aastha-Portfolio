"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cards = [
    {
      icon: Mail,
      label: "Email",
      sublabel: personal.email,
      description: "Best for detailed inquiries, job descriptions, or just saying hi.",
      cta: copied ? "Copied ✓" : "Copy address",
      onClick: copyEmail,
      href: null,
      accent: "#3B82F6",
      accentBg: "rgba(59,130,246,0.06)",
      accentBorder: "rgba(59,130,246,0.2)",
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      sublabel: "aastha-sharma-906a2720a",
      description: "Connect, send a note, or check my full work history.",
      cta: "Open LinkedIn →",
      onClick: null,
      href: personal.linkedin,
      accent: "#06B6D4",
      accentBg: "rgba(6,182,212,0.06)",
      accentBorder: "rgba(6,182,212,0.2)",
    },
    {
      icon: Calendar,
      label: "Book a call",
      sublabel: "15 min · Cal.com",
      description: "Skip the email thread. Pick a slot and let's talk directly.",
      cta: "See availability →",
      onClick: null,
      href: personal.cal,
      accent: "#22C55E",
      accentBg: "rgba(34,197,94,0.06)",
      accentBorder: "rgba(34,197,94,0.2)",
    },
  ];

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-24">

      {/* Heading */}
      <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2 block">
        {"// contact"}
      </span>
      <h2 className="text-3xl font-bold text-text-primary mt-2 mb-4">
        Let&apos;s talk.
      </h2>
      <p className="text-text-secondary text-sm max-w-md mb-12">
        I respond to interesting problems, good opportunities, and
        people who&apos;ve read more than just my headline.
      </p>

      {/* Three CTA cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const isEmail = card.label === "Email";

          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col h-full rounded-xl border bg-bg-secondary p-6 cursor-pointer transition-all duration-200"
              style={{
                borderColor: card.accentBorder,
                backgroundColor: card.accentBg,
              }}
            >
              {/* Icon */}
              <div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: card.accentBg, border: `1px solid ${card.accentBorder}` }}
              >
                <Icon size={18} style={{ color: card.accent }} />
              </div>

              {/* Text */}
              <p className="font-semibold text-text-primary text-base mb-0.5">{card.label}</p>
              <p className="font-mono text-xs text-text-muted mb-3">{card.sublabel}</p>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">{card.description}</p>

              {/* CTA */}
              <div
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono transition-colors duration-150"
                style={{ color: card.accent }}
              >
                {card.cta}
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `inset 0 0 0 1px ${card.accent}40`,
                }}
              />
            </motion.div>
          );

          if (isEmail) {
            return (
              <button key={card.label} onClick={copyEmail} className="text-left h-full">
                {CardContent}
              </button>
            );
          }

          return (
            <a
              key={card.label}
              href={card.href!}
              target="_blank"
              rel="noreferrer"
              className="h-full"
            >
              {CardContent}
            </a>
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="mt-10 font-mono text-xs text-text-muted text-center">
        Based in Bangalore · Open to remote · Dubai · Netherlands · US remote
      </p>

    </section>
  );
}
