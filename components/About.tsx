"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "University of Engineering and Management, Jaipur",
      duration: "Jul 2023 – Jun 2027",
      score: "CGPA: 9.48",
    },
    {
      degree: "Senior Secondary Examination (12th Science)",
      institution: "Rajasthan Board of Secondary Education",
      duration: "March 2023",
      score: "Percentage: 96%",
    },
    {
      degree: "Secondary Examination (10th)",
      institution: "Rajasthan Board of Secondary Education",
      duration: "March 2021",
      score: "Percentage: 95%",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-16 flex items-center gap-4">
          <span className="text-gray-500 font-mono text-2xl font-normal">01.</span>
          About Me
        </h2>

        {/* Photo + Bio Row */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-12 mb-20">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group mx-auto md:mx-0"
          >
            {/* Glow behind */}
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-[260px] h-[340px] lg:w-[300px] lg:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/about-speaking.jpeg"
                alt="Rakesh Bangra speaking at an event"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 260px, 300px"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-gray-300 font-medium flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>
                  </svg>
                  Speaking at UEM Innovation Centre
                </p>
              </div>
            </div>
            {/* Decorative corner bracket */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
          </motion.div>

          {/* Bio text */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              Hi, I&apos;m Rakesh Bangra, a passionate Computer Science Engineering
              student currently pursuing my B.Tech at UEM Jaipur. I have a deep
              fascination with Data Science and AI-ML, and I&apos;m constantly exploring
              new technologies to build impactful solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              Beyond academics, I&apos;m highly active in the tech community. I serve as
              the Chairperson for the ACM UEMJ Chapter and have organized numerous
              hackathons and events. I thrive in dynamic environments where problem-solving
              meets creativity.
            </motion.p>
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "CGPA", value: "9.48" },
                { label: "Hackathons", value: "7+" },
                { label: "Events Led", value: "15+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/15 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-6 border-l-2 border-blue-500/30"
              >
                <span className="absolute -left-[5px] top-2 w-[8px] h-[8px] rounded-full bg-blue-500" />
                <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                <p className="text-gray-400 mt-1">{item.institution}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                  <span className="bg-white/5 px-3 py-1 rounded-full text-blue-300">
                    {item.duration}
                  </span>
                  <span className="bg-white/5 px-3 py-1 rounded-full text-green-300 font-medium">
                    {item.score}
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
