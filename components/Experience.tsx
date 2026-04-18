"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI-Powered Cloud Engineering Program",
    org: "EduSkills Foundation",
    date: "Jul – Sep 2025",
    type: "Virtual Program",
    desc: "Hands-on with AI services on AWS — model deployment, inference endpoints, and cloud-native ML workflows.",
    tags: ["AWS", "AI/ML", "Cloud"],
  },
  {
    role: "AWS Cloud Virtual Internship",
    org: "EduSkills Foundation",
    date: "Oct – Dec 2025",
    type: "Virtual Program",
    desc: "Completed cloud fundamentals — EC2 provisioning, S3 storage, IAM policies, and basic architecture design.",
    tags: ["AWS", "Cloud Architecture"],
  },
  {
    role: "Google AI-ML Virtual Internship",
    org: "EduSkills Foundation",
    date: "Jul – Sep 2025",
    type: "Virtual Program",
    desc: "Hands-on with supervised learning models, data preprocessing pipelines, and model evaluation using TensorFlow basics.",
    tags: ["TensorFlow", "Machine Learning"],
  },
  {
    role: "Cybersecurity Program",
    org: "EduSkills Foundation (PaloAlto)",
    date: "Apr – Jun 2025",
    type: "Virtual Program",
    desc: "Covered threat models, basic pen-testing concepts, and network security fundamentals.",
    tags: ["Cybersecurity", "Network Security"],
  },
  {
    role: "Data Engineering Track",
    org: "EduSkills Foundation",
    date: "Jan – Mar 2025",
    type: "Virtual Program",
    desc: "Worked with ETL pipeline concepts and data transformation basics on AWS.",
    tags: ["ETL", "Data Pipelines", "AWS"],
  },
  {
    role: "AWS Cloud Foundations",
    org: "EduSkills Foundation",
    date: "Oct – Dec 2024",
    type: "Virtual Program",
    desc: "First exposure to cloud — learned core AWS services, billing, and architecture principles.",
    tags: ["AWS", "EC2", "S3"],
  },
  {
    role: "Embedded Systems Program",
    org: "EduSkills Foundation",
    date: "Jul – Sep 2024",
    type: "Virtual Program",
    desc: "Introduction to embedded system design and IoT concepts.",
    tags: ["Embedded Systems", "IoT"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative max-w-5xl mx-auto section-glow">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-3 flex items-center gap-4">
          <span className="text-purple-400/70 font-mono text-xl font-normal">04.</span>
          Experience
        </h2>
        <p className="text-gray-500 text-base mb-14 max-w-lg">
          Virtual programs and certifications — honest about what these are and what I got out of them.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[1.5px]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" as const }}
            style={{ transformOrigin: "top", background: "linear-gradient(180deg, #7C3AED55, #06B6D444, transparent)" }}
          />

          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative pl-12 md:pl-16 group"
              >
                {/* Node */}
                <div className="absolute left-[12px] md:left-[16px] top-5 w-3 h-3 rounded-full border-[1.5px] border-purple-500/40 bg-[#0B0F19] group-hover:border-purple-400 group-hover:bg-purple-500/10 transition-all z-10" />

                <div className="glass rounded-xl p-5 group-hover:bg-white/[0.04] group-hover:border-white/[0.1] transition-all duration-400">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1.5 mb-2.5">
                    <div>
                      <h4 className="text-base font-semibold text-white">{exp.role}</h4>
                      <p className="text-gray-500 text-sm">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 text-[10px] font-mono text-purple-300/80 bg-purple-500/8 border border-purple-500/15 rounded-full">{exp.date}</span>
                      <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500 bg-white/[0.03] border border-white/[0.06] rounded-full">{exp.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2.5">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 text-[11px] text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-md">{tag}</span>
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
