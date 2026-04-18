import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rakesh Bangra | Systems Builder & AI Engineer",
  description:
    "Full Stack Developer, AI/ML Enthusiast, and Systems Thinker. Led 5+ hackathons, organized 15+ tech events, and built real-world solutions at UEM Jaipur. Explore projects, skills, and leadership impact.",
  keywords: [
    "Rakesh Bangra",
    "Full Stack Developer",
    "AI ML Engineer",
    "Portfolio",
    "UEM Jaipur",
    "Hackathon Organizer",
    "ACM Chairperson",
  ],
  openGraph: {
    title: "Rakesh Bangra | Systems Builder & AI Engineer",
    description:
      "Engineering intelligent systems that solve real problems. Full Stack Developer • AI/ML Enthusiast • Systems Thinker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
