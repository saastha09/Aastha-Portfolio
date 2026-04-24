"use client";

import { useEffect, useRef } from "react";

type Props = { className?: string };

export default function NodeGraph({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const nodes = Array.from({ length: 13 }, (_, i) => ({
      x: 40 + (i % 4) * 95 + Math.random() * 20,
      y: 40 + Math.floor(i / 4) * 70 + Math.random() * 25,
    }));
    const edges = nodes.slice(1).map((_, i) => ({ a: i, b: i + 1, t: Math.random() }));
    const labels: Record<number, string> = { 1: "lightspeed", 4: "events", 6: "devices", 8: "redis", 10: "mariadb", 12: "api-gateway" };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);

      edges.forEach((edge) => {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        edge.t = (edge.t + 0.005) % 1;
        ctx.strokeStyle = "rgba(59,130,246,0.3)";
        ctx.setLineDash([5, 6]);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.setLineDash([]);
        const px = a.x + (b.x - a.x) * edge.t;
        const py = a.y + (b.y - a.y) * edge.t;
        ctx.fillStyle = "rgba(6,182,212,0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 2.3, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((node, idx) => {
        ctx.fillStyle = idx % 2 ? "rgba(59,130,246,0.9)" : "rgba(6,182,212,0.9)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        const label = labels[idx];
        if (label) {
          ctx.fillStyle = "rgba(230,237,243,0.7)";
          ctx.font = "11px monospace";
          ctx.fillText(label, node.x + 8, node.y - 8);
        }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className={className ?? "h-[320px] w-full rounded-xl border border-border"} />;
}
