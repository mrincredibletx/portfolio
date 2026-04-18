"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "C", level: 70 },
    ],
    gradient: "from-purple-500 to-blue-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    border: "hover:border-purple-500/25",
  },
  {
    title: "Core CS",
    icon: "🧠",
    skills: [
      { name: "DSA", level: 85 },
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 80 },
      { name: "OS", level: 75 },
      { name: "CN", level: 70 },
    ],
    gradient: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    border: "hover:border-blue-500/25",
  },
  {
    title: "Full Stack",
    icon: "🌐",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "Figma", level: 80 },
    ],
    gradient: "from-cyan-500 to-emerald-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    border: "hover:border-cyan-500/25",
  },
  {
    title: "AI / ML",
    icon: "🤖",
    skills: [
      { name: "Prompt Engineering", level: 85 },
      { name: "Scikit-learn", level: 70 },
      { name: "Data Analysis", level: 75 },
      { name: "Google Colab", level: 80 },
    ],
    gradient: "from-pink-500 to-purple-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    border: "hover:border-pink-500/25",
  },
  {
    title: "Tools",
    icon: "🔧",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "MATLAB", level: 65 },
      { name: "Illustrator", level: 75 },
      { name: "Canva", level: 85 },
      { name: "Inkscape", level: 70 },
    ],
    gradient: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    border: "hover:border-amber-500/25",
  },
  {
    title: "Soft Skills",
    icon: "🎯",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "Problem-Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Time Mgmt", level: 80 },
    ],
    gradient: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    border: "hover:border-emerald-500/25",
  },
];

function SkillBar({ name, level, gradient, delay }: { name: string; level: number; gradient: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative max-w-7xl mx-auto section-glow">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4">
          <span className="text-purple-400/80 font-mono text-2xl font-normal">03.</span>
          Arsenal
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-2xl">
          Technologies and skills I wield to build impactful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className={`group relative p-6 rounded-2xl glass ${cat.border} ${cat.glow} transition-all duration-500 cursor-default`}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.title}</h3>
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBar
                    key={sIdx}
                    name={skill.name}
                    level={skill.level}
                    gradient={cat.gradient}
                    delay={sIdx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
