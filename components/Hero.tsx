"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const phrases = [
  "I don't just learn tech — I build, lead, and scale ideas into real-world solutions.",
  "From hackathons to production — I ship systems that matter.",
  "Building at the intersection of AI, full-stack, and community impact.",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 25 : 45;

    if (!isDeleting && charIndex === current.length) {
      // Pause at end
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(current.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* ─── Ambient Background ─── */}
      {/* Gradient orbs */}
      <div className="absolute top-[5%] left-[5%] w-[700px] h-[700px] bg-purple-600/12 rounded-full blur-[180px] mix-blend-screen pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-float" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating particle field */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + (i % 3) * 2}px`,
            height: `${2 + (i % 3) * 2}px`,
            left: `${5 + i * 8}%`,
            top: `${10 + (i % 5) * 18}%`,
            background: i % 3 === 0
              ? "rgba(124,58,237,0.6)"
              : i % 3 === 1
              ? "rgba(59,130,246,0.6)"
              : "rgba(6,182,212,0.6)",
            boxShadow: `0 0 ${6 + i * 2}px ${
              i % 3 === 0
                ? "rgba(124,58,237,0.3)"
                : i % 3 === 1
                ? "rgba(59,130,246,0.3)"
                : "rgba(6,182,212,0.3)"
            }`,
          }}
          animate={{
            y: [0, -(15 + i * 3), 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* ─── Content ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* ─── LEFT SIDE ─── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6"
            >
              <span className="text-gradient">Full Stack Developer</span>
              <span className="text-gray-500 mx-3">•</span>
              <span className="text-gray-400">AI/ML Enthusiast</span>
              <span className="text-gray-500 mx-3">•</span>
              <span className="text-gray-400">Systems Thinker</span>
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
            >
              <span className="text-white">Engineering</span>
              <br />
              <span className="text-gradient">Intelligent Systems</span>
              <br />
              <span className="text-white">That Solve</span>{" "}
              <span className="text-gray-400">Real Problems</span>
            </motion.h1>

            {/* Highlight badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {[
                { text: "Led 5+ Hackathons", icon: "🏆" },
                { text: "15+ Technical Events", icon: "🎯" },
                { text: "9.48 CGPA", icon: "📊" },
              ].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                >
                  <span>{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </motion.div>

            {/* Typing animation */}
            <motion.div
              variants={itemVariants}
              className="mb-10 min-h-[60px] flex items-start justify-center lg:justify-start"
            >
              <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
                <span className="text-gray-500 font-mono mr-2">&gt;</span>
                {displayText}
                <span className="inline-block w-[2px] h-5 bg-purple-400 ml-1 align-middle" style={{ animation: "typewriter-blink 0.8s step-end infinite" }} />
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="btn-magnetic group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </span>
                {/* Shimmer */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </a>
              <a
                href="https://drive.google.com/file/d/1k0PclNwKItt6miyHDZ3nuqAsOvVDWmGH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Resume
                </span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center lg:justify-start gap-4"
            >
              {[
                {
                  href: "https://github.com/mrincredibletx",
                  label: "GitHub",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                },
                {
                  href: "http://www.linkedin.com/in/rakesh-bangra-706b41286",
                  label: "LinkedIn",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:contact.bangra@gmail.com",
                  label: "Email",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT SIDE — Profile ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 bg-gradient-to-br from-purple-500/15 via-blue-500/10 to-cyan-500/15 rounded-full blur-3xl opacity-70 animate-pulse" />

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #7C3AED, #3B82F6, #06B6D4, #7C3AED)",
                opacity: 0.15,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Dashed orbit */}
            <motion.div
              className="absolute -inset-8 rounded-full border border-dashed border-white/[0.06]"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Gradient border wrapper */}
            <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0F19] p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/hero-profile.jpeg"
                    alt="Rakesh Bangra"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating accent orbs */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(124,58,237,0.6)]"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 -left-4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              animate={{ x: [-3, 3, -3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#0B0F19]/90 backdrop-blur-xl border border-white/[0.08] rounded-full flex items-center gap-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                Open to Opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-medium">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/[0.1] flex items-start justify-center p-1.5"
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-purple-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
