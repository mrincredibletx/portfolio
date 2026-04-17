"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExtraCurricular() {
  const certifications = [
    "Foundations of User Experience (UX) Design (Coursera)",
    "Linguaskill Business (Cambridge University)",
    "The Joy of Computing Using Python (NPTEL)",
    "Python For Data Science (NPTEL)",
    "Developing Soft Skills and Personality (NPTEL)",
  ];

  const activities = [
    {
      title: "Chairperson",
      org: "ACM UEMJ Chapter",
      desc: "Leading the student chapter to foster technical growth and innovation.",
    },
    {
      title: "Event Organizer",
      org: "College Level",
      desc: "Organized 7 Hackathons, 5 Fests, and 15+ Technical Events.",
    },
    {
      title: "Head of Graphics",
      org: "TSS UEMJ, GDG UEMJ",
      desc: "Led the design teams for multiple technical societies and Google Developer Groups.",
    },
    {
      title: "Ex-Arcade Facilitator",
      org: "Google",
      desc: "Served as a Google Arcade Facilitator 3 times, guiding students in cloud technologies.",
    },
  ];

  return (
    <section id="extracurricular" className="py-32 px-6 relative max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4">
          <span className="text-gray-500 font-mono text-2xl font-normal">04.</span>
          Beyond Code
        </h2>

        {/* Action Photos Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Photo 1 - Addressing audience */}
          <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group border border-white/10">
            <Image
              src="/extracurricular-audience.jpeg"
              alt="Rakesh addressing an audience"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">Addressing 200+ Students</p>
              <p className="text-gray-400 text-sm mt-1">Orientation day at UEM Jaipur</p>
            </div>
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Photo 2 - Working at desk */}
          <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group border border-white/10">
            <Image
              src="/working-desk.jpeg"
              alt="Rakesh working at a desk"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-semibold text-lg">Behind the Scenes</p>
              <p className="text-gray-400 text-sm mt-1">Event coordination & planning</p>
            </div>
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Extracurricular Cards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">
              Leadership & Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/20 group"
                >
                  <h4 className="text-xl font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                  <p className="text-white font-medium text-sm mb-3">{item.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications List */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4 flex items-center gap-3">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-2 border-purple-500 hover:from-white/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 mt-0.5 shrink-0"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                  <span className="text-gray-200">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
