"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Scale for cinematic Ken-Burns feel
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "University of Engineering and Management, Jaipur",
      duration: "Jul 2023 – Jun 2027",
      score: "CGPA: 9.48",
    },
    {
      degree: "Senior Secondary Examination (12th Science)",
      institution: "Rajasthan Board of Secondary Education",
      duration: "March 2023",
      score: "Percentage: 96%",
    },
    {
      degree: "Secondary Examination (10th)",
      institution: "Rajasthan Board of Secondary Education",
      duration: "March 2021",
      score: "Percentage: 95%",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ─── CINEMATIC BACKGROUND ─── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/about-cinematic-bg.jpeg"
          alt="Rakesh Bangra addressing a packed auditorium"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* ─── OVERLAY LAYERS (readability) ─── */}
      {/* Dark gradient from bottom */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0aee] to-[#0a0a0a33]" />
      {/* Subtle blue-purple cinematic tint on top half */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-blue-950/40 via-transparent to-transparent" />
      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.75) 100%)",
        }}
      />

      {/* ─── FLOATING PARTICLES (decorative) ─── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "rgba(59,130,246,0.5)" : "rgba(139,92,246,0.5)"
              }, transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* ── Section Heading ── */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4"
          >
            <span className="text-blue-400/80 font-mono text-2xl font-normal">
              01.
            </span>
            <span className="text-white drop-shadow-lg">About Me</span>
          </motion.h2>

          {/* ── Photo + Bio ── */}
          <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 mb-20">
            {/* Photo card */}
            <motion.div variants={fadeUp} className="relative group mx-auto md:mx-0">
              {/* Animated glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-700" />
              {/* Animated border */}
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                  borderRadius: "1rem",
                }}
              />
              <div className="relative w-[260px] h-[340px] lg:w-[300px] lg:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/about-speaking.jpeg"
                  alt="Rakesh Bangra speaking at an event"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 2140px) 360px, 400px"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-gray-300 font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-400"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                    </svg>
                    Speaking at AceHack 5.0
                  </p>
                </div>
              </div>
              {/* Decorative corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
            </motion.div>

            {/* Bio text on glass card */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 shadow-2xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-gray-200 text-lg leading-relaxed mb-6 drop-shadow"
              >
                Hi, I&apos;m Rakesh Bangra, a passionate Computer Science Engineering
                student currently pursuing my B.Tech at UEM Jaipur. I have a deep
                fascination with Data Science and AI-ML, and I&apos;m constantly exploring
                new technologies to build impactful solutions.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-gray-200 text-lg leading-relaxed mb-8 drop-shadow"
              >
                Beyond academics, I&apos;m highly active in the tech community. I serve as
                the Chairperson for the ACM UEMJ Chapter and have organized numerous
                hackathons and events. I thrive in dynamic environments where problem-solving
                meets creativity.
              </motion.p>

              {/* Quick stats */}
              <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
                {[
                  { label: "CGPA", value: "9.48" },
                  { label: "Hackathons", value: "7+" },
                  { label: "Events Led", value: "15+" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-4 bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/[0.08] hover:border-blue-500/30 transition-colors cursor-default"
                  >
                    <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* ── Education Timeline (glass card) ── */}
          <motion.div
            variants={fadeUp}
            className="backdrop-blur-md bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-6 border-l-2 border-blue-500/30"
                >
                  {/* Animated timeline dot */}
                  <motion.span
                    className="absolute -left-[5px] top-2 w-[8px] h-[8px] rounded-full bg-blue-500"
                    animate={{ boxShadow: ["0 0 0px #3b82f6", "0 0 12px #3b82f6", "0 0 0px #3b82f6"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <h4 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h4>
                  <p className="text-gray-400 mt-1">{item.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <span className="bg-white/[0.06] backdrop-blur-sm px-3 py-1 rounded-full text-blue-300 border border-white/[0.06]">
                      {item.duration}
                    </span>
                    <span className="bg-white/[0.06] backdrop-blur-sm px-3 py-1 rounded-full text-green-300 font-medium border border-white/[0.06]">
                      {item.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── BOTTOM FADE TO NEXT SECTION ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[3] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
