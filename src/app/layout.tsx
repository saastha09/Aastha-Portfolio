import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saastha09.github.io/Aastha-Portfolio/"),
  title: "Aastha Sharma - Golang Backend Engineer | Distributed Systems",
  description:
    "Backend engineer with 2.6 years building production Go services, microservices and a 100+ device IoT platform. Bangalore, open to remote and relocation.",
  keywords: ["Golang engineer", "backend engineer Bangalore", "distributed systems", "Go developer", "remote backend engineer India"],
  openGraph: {
    title: "Aastha Sharma - Golang Backend Engineer",
    description: "Sole backend and infra engineer for a 100+ device platform. Go, gRPC, AWS, embedded Linux.",
    images: [{ url: "og-image.png", width: 1200, height: 630 }],
  },
  icons: { icon: withBasePath("/favicon.ico") },
  twitter: { card: "summary_large_image", title: "Aastha Sharma - Golang Backend Engineer" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-bg-primary text-text-primary">{children}</body>
    </html>
  );
}
