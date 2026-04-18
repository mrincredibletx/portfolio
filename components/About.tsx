"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / 120;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(target % 1 !== 0 ? Math.round(current * 100) / 100 : Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{target % 1 !== 0 ? count.toFixed(2) : count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Cinematic BG */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY, scale: bgScale }}>
        <Image src="/about-cinematic-bg.jpeg" alt="Rakesh addressing a packed auditorium" fill className="object-cover object-center" sizes="100vw" quality={85} />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B0F19] via-[#0B0F19ee] to-[#0B0F1955]" />
      <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(11,15,25,0.85) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-extrabold mb-14 flex items-center gap-4">
            <span className="text-purple-400/70 font-mono text-xl font-normal">01.</span>
            <span className="text-white">About Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 mb-12">
            {/* Photo */}
            <motion.div variants={fadeUp} className="relative group mx-auto md:mx-0 self-stretch">
              <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #7C3AED)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "2px", borderRadius: "1rem" }} />
              <div className="relative w-[240px] md:w-full h-[340px] md:h-full min-h-[340px] rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl">
                <Image src="/about-speaking.jpeg" alt="Rakesh speaking at an event" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-gray-400 font-medium">Speaking at AceHack 5.0</p>
                </div>
              </div>
            </motion.div>

            {/* Bio — honest, first-person */}
            <motion.div variants={fadeUp} className="flex flex-col justify-center glass rounded-2xl p-7 shadow-xl">
              <p className="text-gray-200 text-base leading-[1.8] mb-4">
                I&apos;m Rakesh Bangra — a CS student who got tired of just studying how things work and{" "}
                <span className="text-white font-medium">started building them instead.</span>
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.8] mb-4">
                I lead the <span className="text-cyan-300">ACM UEMJ student chapter</span>, which means I spend a lot of time organizing events, running hackathons, and making sure other students actually get hands-on with tech — not just theory.
              </p>
              <p className="text-gray-300 text-[15px] leading-[1.8] mb-4">
                My projects aren&apos;t polished side projects made for portfolios. They&apos;re things I built because I got curious, hit a problem, or wanted to prove something could work.
              </p>
              <p className="text-gray-400 text-sm leading-[1.8]">
                I&apos;m actively looking for internship or SDE roles where I can contribute from day one — I pick up fast, ship faster, and I don&apos;t wait to be told what to do next.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              { label: "CGPA", value: 9.48, suffix: "" },
              { label: "Hackathons Organized", value: 7, suffix: "+" },
              { label: "Students Impacted", value: 200, suffix: "+" },
            ].map((stat, i) => (
              <div key={i} className="text-center py-6 px-4 glass rounded-2xl">
                <p className="text-3xl md:text-4xl font-extrabold text-gradient font-display mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-7 shadow-xl">
            <h3 className="text-lg font-bold mb-6 text-white border-b border-white/[0.06] pb-3 flex items-center gap-2">
              <span className="text-purple-400">🎓</span> Education
            </h3>
            <div className="space-y-5">
              {[
                { degree: "B.Tech — Computer Science & Engineering", institution: "University of Engineering & Management, Jaipur", duration: "2023 – 2027", score: "CGPA: 9.48" },
                { degree: "Senior Secondary (12th Science)", institution: "Rajasthan Board of Secondary Education", duration: "2023", score: "96%" },
                { degree: "Secondary (10th)", institution: "Rajasthan Board of Secondary Education", duration: "2021", score: "95%" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative pl-5 border-l-2 border-purple-500/25">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-purple-500" />
                  <h4 className="text-base font-semibold text-white">{item.degree}</h4>
                  <p className="text-gray-500 text-sm mt-0.5">{item.institution}</p>
                  <div className="flex gap-2 mt-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-gray-400">{item.duration}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/15 text-emerald-300 font-medium">{item.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 z-[3] bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none" />
    </section>
  );
}
