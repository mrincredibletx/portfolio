"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL", "C"],
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
    },
    {
      title: "Core Concepts",
      skills: ["Prompt Engineering", "Web Development", "DSA", "OOP", "DBMS", "OS", "CN"],
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
    },
    {
      title: "Full Stack & Design",
      skills: ["HTML", "CSS", "MySQL", "Figma", "Canva", "Illustrator", "Inkscape"],
      color: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/20",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Google Colab", "MATLAB", "Version Control", "Systems Integration"],
      color: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20",
    },
    {
        title: "Technical Skills",
        skills: ["Project Management", "Agile Methodology", "Data Analysis", "Technical Documentation", "SDLC"],
        color: "from-orange-500/20 to-orange-500/5",
        border: "border-orange-500/20",
    },
    {
        title: "Soft Skills",
        skills: ["Problem-Solving", "Critical Thinking", "Communication", "Teamwork", "Leadership", "Time Management", "Attention to Detail"],
        color: "from-teal-500/20 to-teal-500/5",
        border: "border-teal-500/20",
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4">
          <span className="text-gray-500 font-mono text-2xl font-normal">03.</span>
          Arsenal / Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${category.color} border ${category.border} backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300`}
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-black/40 text-gray-300 rounded-lg text-sm border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
