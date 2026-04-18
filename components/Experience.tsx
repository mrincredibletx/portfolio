"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI-Powered Cloud Engineer",
    org: "EduSkills Foundation",
    cohort: "Cohort-15",
    date: "Jul 2025 – Sep 2025",
    type: "Remote",
    tags: ["AWS", "AI/ML", "Cloud"],
  },
  {
    role: "AWS Cloud Virtual Internship",
    org: "EduSkills Foundation",
    cohort: "Cohort-14",
    date: "Oct 2025 – Dec 2025",
    type: "Remote",
    tags: ["AWS", "Cloud Architecture"],
  },
  {
    role: "Google AI-ML Virtual Internship",
    org: "EduSkills Foundation",
    cohort: "Cohort-13",
    date: "Jul 2025 – Sep 2025",
    type: "Remote",
    tags: ["TensorFlow", "Machine Learning"],
  },
  {
    role: "PaloAlto Cybersecurity Internship",
    org: "EduSkills Foundation",
    cohort: "Cohort-12",
    date: "Apr 2025 – Jun 2025",
    type: "Remote",
    tags: ["Cybersecurity", "Network Security"],
  },
  {
    role: "AWS Data Engineering Internship",
    org: "EduSkills Foundation",
    cohort: "Cohort-11",
    date: "Jan 2025 – Mar 2025",
    type: "Remote",
    tags: ["Data Pipelines", "ETL", "AWS"],
  },
  {
    role: "AWS Cloud Virtual Internship",
    org: "EduSkills Foundation",
    cohort: "Cohort-10",
    date: "Oct 2024 – Dec 2024",
    type: "Remote",
    tags: ["AWS", "EC2", "S3"],
  },
  {
    role: "Embedded System Developer",
    org: "EduSkills Foundation",
    cohort: "Cohort-09",
    date: "Jul 2024 – Sep 2024",
    type: "Remote",
    tags: ["Embedded Systems", "IoT"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative max-w-5xl mx-auto section-glow">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4">
          <span className="text-purple-400/80 font-mono text-2xl font-normal">04.</span>
          Experience
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-2xl">
          Completed multiple domain-focused internships gaining hands-on exposure to real-world tools and workflows.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[2px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top", background: "linear-gradient(180deg, #7C3AED, #3B82F6, #06B6D4, transparent)" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-12 md:pl-16 group"
              >
                {/* Node dot */}
                <motion.div
                  className="absolute left-[11px] md:left-[15px] top-6 w-4 h-4 rounded-full border-2 border-purple-500/50 bg-[#0B0F19] group-hover:border-purple-400 group-hover:bg-purple-500/20 transition-all duration-300 z-10"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(124,58,237,0)",
                      "0 0 12px rgba(124,58,237,0.4)",
                      "0 0 0px rgba(124,58,237,0)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 group-hover:bg-white/[0.05] group-hover:border-white/[0.12] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-gradient transition-all">
                        {exp.role}
                      </h4>
                      <p className="text-gray-400 text-sm">{exp.org} • {exp.cohort}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                        {exp.date}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-xs text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
