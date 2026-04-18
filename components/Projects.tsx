"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface Project {
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Blockchain Jury System",
    problem: "Traditional jury systems lack transparency and are vulnerable to manipulation.",
    solution: "Built a decentralized jury platform ensuring transparent and tamper-proof decision-making using blockchain.",
    impact: "Designed to eliminate bias and increase trust in digital governance systems.",
    tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
    github: "https://github.com/mrincredibletx",
    featured: true,
  },
  {
    title: "Diabetes Prediction System",
    problem: "Early diabetes detection requires expensive clinical tests, limiting access.",
    solution: "Developed an ML-powered prediction system using patient health metrics for instant risk assessment.",
    impact: "Enables early screening for at-risk individuals without clinical visits.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/mrincredibletx",
  },
  {
    title: "Portfolio Website",
    problem: "Generic portfolio templates fail to communicate real technical capability.",
    solution: "Engineered a cinematic, interactive portfolio with parallax effects, 3D animations, and micro-interactions.",
    impact: "Created a recruiter-focused showcase that communicates builder mindset in seconds.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/mrincredibletx",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className={`group relative rounded-2xl overflow-hidden cursor-default ${
        project.featured ? "md:col-span-2 min-h-[400px]" : "min-h-[360px]"
      }`}
    >
      {/* Animated glow border */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: "conic-gradient(from 0deg, #7C3AED, #3B82F6, #06B6D4, #7C3AED)",
        }}
      />

      {/* Card body */}
      <div className="relative z-10 h-full rounded-2xl bg-[#0d1220] border border-white/[0.06] group-hover:border-transparent transition-colors duration-500 p-8 flex flex-col">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-6 right-6">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Problem / Solution / Impact */}
        <div className="space-y-3 flex-1 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-red-400/80 text-sm font-mono font-bold mt-0.5 shrink-0">PROBLEM</span>
            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-emerald-400/80 text-sm font-mono font-bold mt-0.5 shrink-0">SOLUTION</span>
            <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400/80 text-sm font-mono font-bold mt-0.5 shrink-0">IMPACT</span>
            <p className="text-gray-300 text-sm leading-relaxed">{project.impact}</p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/[0.08] rounded-full text-gray-300 hover:border-purple-500/30 hover:text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/[0.1] rounded-xl hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative max-w-7xl mx-auto section-glow">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4">
          <span className="text-purple-400/80 font-mono text-2xl font-normal">02.</span>
          Projects
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-2xl">
          Real systems, real impact. Hover to explore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
