import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Rakesh Bangra — Builder, Not Just a Student",
  description:
    "B.Tech CSE · 9.48 CGPA · ACM Chapter Chairperson · Building full-stack apps and exploring AI/ML. Looking for internship and SDE roles.",
  keywords: [
    "Rakesh Bangra",
    "Full Stack Developer",
    "AI ML",
    "Portfolio",
    "UEM Jaipur",
    "ACM Chairperson",
  ],
  openGraph: {
    title: "Rakesh Bangra — Builder, Not Just a Student",
    description:
      "I build things that actually work. Full-stack developer, AI/ML explorer, and tech community leader.",
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
      <body className={`${dmSans.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
