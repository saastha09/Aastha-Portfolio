import { ExternalLink, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
      <p>Built with Next.js · Tailwind · Framer Motion · Deployed on Cloudflare Pages</p>
      <div className="mt-3 flex justify-center gap-4">
        <a href={personal.github} target="_blank" rel="noreferrer"><ExternalLink size={16} /></a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={16} /></a>
        <a href={`mailto:${personal.email}`}><Mail size={16} /></a>
      </div>
    </footer>
  );
}
