"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", tip: "Primary language for ML projects and scripting" },
      { name: "Java", tip: "DSA + OOP coursework" },
      { name: "C", tip: "Systems programming fundamentals" },
      { name: "SQL", tip: "Database queries and management" },
    ],
  },
  {
    name: "CS Fundamentals",
    icon: "🧠",
    skills: [
      { name: "DSA", tip: "Active problem-solving on LeetCode & HackerRank" },
      { name: "OOP", tip: "Design patterns, SOLID principles" },
      { name: "DBMS", tip: "Normalization, ER models, SQL optimization" },
      { name: "OS", tip: "Process scheduling, memory management" },
      { name: "CN", tip: "OSI/TCP-IP, socket programming basics" },
    ],
  },
  {
    name: "Web",
    icon: "🌐",
    skills: [
      { name: "HTML/CSS", tip: "Responsive layouts, Flexbox, Grid" },
      { name: "JavaScript", tip: "ES6+, DOM manipulation, async patterns" },
      { name: "React", tip: "Learning — used in Blockchain Jury System" },
      { name: "Next.js", tip: "Used to build this portfolio" },
      { name: "Tailwind CSS", tip: "Utility-first CSS framework" },
    ],
  },
  {
    name: "AI / ML (Exposure)",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", tip: "Used for Diabetes Prediction project" },
      { name: "Pandas", tip: "Data cleaning & transformation" },
      { name: "NumPy", tip: "Numerical computing basics" },
      { name: "Google Colab", tip: "Primary ML experimentation environment" },
      { name: "Prompt Engineering", tip: "Designing effective LLM prompts" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "🔧",
    skills: [
      { name: "Git/GitHub", tip: "Version control, branching, PRs" },
      { name: "Figma", tip: "UI/UX prototyping and wireframing" },
      { name: "MATLAB", tip: "Academic coursework" },
      { name: "Illustrator", tip: "Graphics design for tech societies" },
      { name: "Canva", tip: "Quick event posters and marketing" },
    ],
  },
  {
    name: "Cloud (Certified)",
    icon: "☁️",
    skills: [
      { name: "AWS", tip: "AWS Cloud Foundations certified — EC2, S3, IAM" },
      { name: "GCP", tip: "Google Arcade Facilitator — 3x" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayed = activeCategory ? categories.filter((c) => c.name === activeCategory) : categories;

  return (
    <section id="skills" className="py-32 px-6 relative max-w-7xl mx-auto section-glow">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-3 flex items-center gap-4">
          <span className="text-purple-400/70 font-mono text-xl font-normal">03.</span>
          Skills
        </h2>
        <p className="text-gray-500 text-base mb-8 max-w-lg">
          Honest list. Hover any skill for context.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ${
              !activeCategory
                ? "text-white bg-white/[0.08] border-white/[0.15]"
                : "text-gray-500 bg-transparent border-white/[0.06] hover:text-white hover:border-white/[0.12]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 ${
                activeCategory === cat.name
                  ? "text-white bg-white/[0.08] border-white/[0.15]"
                  : "text-gray-500 bg-transparent border-white/[0.06] hover:text-white hover:border-white/[0.12]"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 hover:border-white/[0.1] transition-all duration-400 cursor-default"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-base font-bold text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="tooltip-wrapper"
                  >
                    <span className="inline-block px-3 py-1.5 text-sm text-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-cyan-500/5 hover:border-cyan-500/20 hover:text-white hover:shadow-[0_0_12px_rgba(6,182,212,0.1)] transition-all duration-300 cursor-default">
                      {skill.name}
                    </span>
                    <span className="tooltip-text">{skill.tip}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
