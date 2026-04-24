import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aastha.dev"),
  title: "Aastha Sharma - Golang Backend Engineer | Distributed Systems",
  description:
    "Backend engineer with 2 years building distributed systems, microservices, and IoT platforms in Go. Open to remote and international roles.",
  keywords: ["Golang engineer", "backend engineer Bangalore", "distributed systems", "Go developer", "remote backend engineer India"],
  openGraph: {
    title: "Aastha Sharma - Golang Backend Engineer",
    description: "Sole backend architect. Distributed systems. Microservices. Open to remote.",
    url: "https://aastha.dev",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
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
