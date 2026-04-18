"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leadershipRoles = [
  {
    title: "Chairperson",
    org: "ACM UEMJ Chapter",
    desc: "Led a student tech community, organized hackathons, and impacted 200+ students through workshops, coding contests, and innovation-driven initiatives.",
    metric: "200+ Students Impacted",
    icon: "👑",
    gradient: "from-purple-500/20 to-blue-500/20",
    border: "hover:border-purple-500/25",
  },
  {
    title: "Event Organizer",
    org: "College Level",
    desc: "Organized 7 Hackathons, 5 Fests, and 15+ Technical Events at scale — managing logistics, sponsorships, mentors, and participant experience end-to-end.",
    metric: "27+ Events Total",
    icon: "🚀",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/25",
  },
  {
    title: "Head of Graphics",
    org: "TSS UEMJ • GDG UEMJ",
    desc: "Led the design teams for multiple technical societies and Google Developer Groups, creating brand identity and marketing collateral.",
    metric: "3+ Societies",
    icon: "🎨",
    gradient: "from-cyan-500/20 to-emerald-500/20",
    border: "hover:border-cyan-500/25",
  },
  {
    title: "Ex-Arcade Facilitator",
    org: "Google",
    desc: "Served as a Google Arcade Facilitator 3 times, guiding students in cloud technologies and hands-on learning with Google Cloud Platform.",
    metric: "3x Facilitator",
    icon: "☁️",
    gradient: "from-emerald-500/20 to-amber-500/20",
    border: "hover:border-emerald-500/25",
  },
];

const certifications = [
  "Foundations of UX Design (Coursera)",
  "Linguaskill Business (Cambridge)",
  "Joy of Computing — Python (NPTEL)",
  "Python For Data Science (NPTEL)",
  "Developing Soft Skills (NPTEL)",
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 px-6 relative max-w-7xl mx-auto section-glow">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4">
          <span className="text-purple-400/80 font-mono text-2xl font-normal">05.</span>
          Leadership & Impact
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-2xl">
          Building is important. Building communities is essential.
        </p>

        {/* Photo banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="relative h-[250px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/[0.06]">
            <Image
              src="/extracurricular-audience.jpeg"
              alt="Rakesh addressing 200+ students"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">Addressing 200+ Students</p>
              <p className="text-gray-400 text-sm mt-1">Orientation Day at UEM Jaipur</p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="relative h-[250px] md:h-[280px] rounded-2xl overflow-hidden group border border-white/[0.06]">
            <Image
              src="/working-desk.jpeg"
              alt="Behind the scenes event coordination"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">Behind the Scenes</p>
              <p className="text-gray-400 text-sm mt-1">Event Coordination & Planning</p>
            </div>
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {leadershipRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative glass rounded-2xl p-6 ${role.border} transition-all duration-500 cursor-default overflow-hidden`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{role.icon}</span>
                      <h4 className="text-xl font-bold text-white">{role.title}</h4>
                    </div>
                    <p className="text-purple-300 text-sm font-medium">{role.org}</p>
                  </div>
                  {/* Metric badge */}
                  <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 whitespace-nowrap">
                    {role.metric}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="px-4 py-2 text-sm text-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-white/[0.06] hover:border-purple-500/20 transition-all duration-300"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
