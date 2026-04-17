"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    { role: "Cohort-15 AI-Powered Cloud Engineer", date: "Jul 2025 \u2013 Sep 2025" },
    { role: "Cohort-14 AWS Cloud Virtual Internship", date: "Oct 2025 \u2013 Dec 2025" },
    { role: "Cohort-13 Google AI-ML Virtual Internship", date: "Jul 2025 \u2013 Sep 2025" },
    { role: "Cohort-12 PaloAlto Cybersecurity", date: "Apr 2025 \u2013 Jun 2025" },
    { role: "Cohort-11 AWS Data Engineering", date: "Jan 2025 \u2013 Mar 2025" },
    { role: "Cohort-10 AWS Cloud Virtual Internship", date: "Oct 2024 \u2013 Dec 2024" },
    { role: "Cohort-09 Embedded System Developer", date: "Jul 2025 \u2013 Sep 2025" },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 flex items-center gap-4">
          <span className="text-gray-500 font-mono text-2xl font-normal">02.</span>
          Experience / Internships
        </h2>

        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">EduSkills Foundation</h3>
          <p className="text-gray-400 mb-10 text-lg">Virtual Internships Program</p>

          <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-8 pb-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-8 md:pl-12 group transition-all"
              >
                {/* Dot */}
                <span className="absolute -left-[5px] top-[10px] w-2.5 h-2.5 rounded-full bg-gray-500 group-hover:bg-purple-400 transition-colors group-hover:scale-150 duration-300" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b border-white/5 pb-4 group-hover:border-white/20 transition-colors">
                  <h4 className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-mono text-purple-300/80 bg-purple-900/20 px-3 py-1 rounded-full w-fit">
                    {exp.date} (Remote)
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
