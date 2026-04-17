"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Ambient Background Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-blue-400 font-mono mb-4 text-sm md:text-base tracking-widest uppercase">
                Computer Science Engineering Student
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tight leading-tight pb-2">
                RAKESH
                <br />
                BANGRA
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light mb-10 !leading-relaxed">
                Data Science &amp; AI-ML Enthusiast <br />
                <span className="text-purple-400 font-medium">
                  5x Hackathon Organizer
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="mailto:contact.bangra@gmail.com"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1k0PclNwKItt6miyHDZ3nuqAsOvVDWmGH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center backdrop-blur-sm"
              >
                View Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 flex justify-center lg:justify-start gap-6"
            >
              <a
                href="https://github.com/mrincredibletx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="http://www.linkedin.com/in/rakesh-bangra-706b41286"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-2xl opacity-60 animate-pulse" />

            {/* Decorative rotating ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border border-dashed border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Gradient border wrapper */}
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
              {/* Inner container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a] p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/hero-profile.jpeg"
                    alt="Rakesh Bangra"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 420px"
                  />
                  {/* Subtle overlay gradient from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating accent dots */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-8 -left-4 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)]"
              animate={{ x: [-3, 3, -3] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-5 py-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium whitespace-nowrap">
                Open to Opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator overlay at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
