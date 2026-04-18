import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
