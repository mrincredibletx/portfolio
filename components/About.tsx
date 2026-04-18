"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 100) / 100);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  const stats = [
    { label: "Academic Excellence", value: 9.48, suffix: "", display: "9.48" },
    { label: "Hackathons Won/Led", value: 7, suffix: "+", display: "7+" },
    { label: "Events Organized", value: 15, suffix: "+", display: "15+" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* ─── Cinematic BG ─── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src="/about-cinematic-bg.jpeg"
          alt="Rakesh addressing a packed auditorium"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B0F19] via-[#0B0F19ee] to-[#0B0F1944]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-purple-950/30 via-transparent to-transparent" />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(11,15,25,0.8) 100%)" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + i * 2}px`,
              height: `${3 + i * 2}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "rgba(124,58,237,0.5)" : "rgba(6,182,212,0.5)"
              }, transparent)`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          {/* Heading */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4">
            <span className="text-purple-400/80 font-mono text-2xl font-normal">01.</span>
            <span className="text-white drop-shadow-lg">About Me</span>
          </motion.h2>

          {/* Photo + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 mb-12">
            {/* Photo */}
            <motion.div variants={fadeUp} className="relative group mx-auto md:mx-0 self-stretch">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700" />
              <div
                className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "conic-gradient(from 0deg, #7C3AED, #3B82F6, #06B6D4, #7C3AED)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "2px",
                  borderRadius: "1rem",
                }}
              />
              <div className="relative w-[260px] md:w-full h-[380px] md:h-full min-h-[380px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image
                  src="/about-speaking.jpeg"
                  alt="Rakesh Bangra speaking at an event"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 260px, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm text-gray-300 font-medium flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                    </svg>
                    Speaking at AceHack 5.0
                  </p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg pointer-events-none" />
            </motion.div>

            {/* Bio */}
            <motion.div variants={fadeUp} className="flex flex-col justify-center glass rounded-2xl p-8 shadow-2xl">
              <motion.p variants={fadeUp} className="text-gray-200 text-lg leading-relaxed mb-5">
                I&apos;m Rakesh Bangra, a Computer Science Engineering student driven by one core belief —{" "}
                <span className="text-white font-semibold">technology should solve real problems, not just exist as code.</span>
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-300 text-base leading-relaxed mb-5">
                As the <span className="text-purple-300 font-medium">Chairperson of the ACM UEMJ Chapter</span>, I&apos;ve
                led initiatives impacting 200+ students, organized hackathons, and built communities around innovation.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-300 text-base leading-relaxed">
                I specialize in full-stack development and AI-driven solutions, constantly experimenting and turning ideas
                into working systems. I thrive in fast-paced environments where{" "}
                <span className="text-cyan-300 font-medium">execution matters more than intention.</span>
              </motion.p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 md:gap-6 mb-14">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-center py-6 md:py-8 px-4 glass rounded-2xl hover:border-purple-500/20 transition-colors cursor-default shadow-xl"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/[0.08] pb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {[
                { degree: "B.Tech in Computer Science & Engineering", institution: "University of Engineering and Management, Jaipur", duration: "Jul 2023 – Jun 2027", score: "CGPA: 9.48" },
                { degree: "Senior Secondary (12th Science)", institution: "Rajasthan Board of Secondary Education", duration: "March 2023", score: "96%" },
                { degree: "Secondary (10th)", institution: "Rajasthan Board of Secondary Education", duration: "March 2021", score: "95%" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative pl-6 border-l-2 border-purple-500/30"
                >
                  <motion.span
                    className="absolute -left-[5px] top-2 w-[8px] h-[8px] rounded-full bg-purple-500"
                    animate={{ boxShadow: ["0 0 0px #7C3AED", "0 0 12px #7C3AED", "0 0 0px #7C3AED"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                  <p className="text-gray-400 mt-1 text-sm">{item.institution}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm">
                    <span className="bg-white/[0.04] backdrop-blur-sm px-3 py-1 rounded-full text-purple-300 border border-white/[0.06] text-xs">
                      {item.duration}
                    </span>
                    <span className="bg-emerald-500/10 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-300 font-medium border border-emerald-500/20 text-xs">
                      {item.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[3] bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
    </section>
  );
}
