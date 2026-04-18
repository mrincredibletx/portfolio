"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  {
    title: "Chairperson",
    org: "ACM UEMJ Student Chapter",
    metric: "200+ students impacted",
    desc: "Running the chapter means managing people, budgets, and timelines — not just putting my name on a poster. We've run 7+ hackathons and 15+ events, and I've had to make calls when things went sideways.",
    icon: "👑",
  },
  {
    title: "Event Organizer",
    org: "College Level",
    metric: "27+ events total",
    desc: "7 hackathons organized from scratch — venue, sponsors, problem statements, judging, everything. 5 fests and 15+ technical workshops on top of that.",
    icon: "🚀",
  },
  {
    title: "Head of Graphics",
    org: "TSS UEMJ · GDG UEMJ",
    metric: "3+ societies",
    desc: "Led the visual identity for multiple campus tech societies. Design is a tool; I use it when it communicates faster than words.",
    icon: "🎨",
  },
  {
    title: "Google Arcade Facilitator",
    org: "Google (3x)",
    metric: "3 cohorts",
    desc: "Ran sessions on Google Cloud tools for students who had zero prior cloud experience. Teaching forced me to actually understand the material, not just know it.",
    icon: "☁️",
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
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-3 flex items-center gap-4">
          <span className="text-purple-400/70 font-mono text-xl font-normal">05.</span>
          Leadership & Impact
        </h2>
        <p className="text-gray-500 text-base mb-14 max-w-lg">
          Building is important. Building communities is essential.
        </p>

        {/* Photo banner */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative h-[240px] md:h-[260px] rounded-2xl overflow-hidden group border border-white/[0.05]">
            <Image src="/extracurricular-audience.jpeg" alt="Addressing 200+ students" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-semibold">Addressing 200+ Students</p>
              <p className="text-gray-400 text-sm mt-0.5">Orientation Day at UEM Jaipur</p>
            </div>
          </div>
          <div className="relative h-[240px] md:h-[260px] rounded-2xl overflow-hidden group border border-white/[0.05]">
            <Image src="/working-desk.jpeg" alt="Working at desk" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-semibold">Behind the Scenes</p>
              <p className="text-gray-400 text-sm mt-0.5">Late-night event planning & coordination</p>
            </div>
          </div>
        </motion.div>

        {/* Role cards — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 hover:border-white/[0.1] transition-all duration-400 cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-lg">{role.icon}</span>
                    <h4 className="font-display text-lg font-bold text-white">{role.title}</h4>
                  </div>
                  <p className="text-cyan-400/70 text-sm font-medium">{role.org}</p>
                </div>
                <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-emerald-500/10 border border-emerald-500/15 rounded-full text-emerald-300 whitespace-nowrap">{role.metric}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6">
          <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
            <span className="text-purple-400">🏅</span> Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <span key={i} className="px-3 py-1.5 text-sm text-gray-400 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.04] hover:text-gray-300 transition-all duration-300">{cert}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
