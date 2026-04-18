"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

interface Project {
  title: string;
  status: "Live" | "In Progress" | "Archived";
  problem: string;
  built: string;
  learned: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Blockchain Jury System",
    status: "Archived",
    problem: "Hackathon judging felt arbitrary — results weren't verifiable and bias was easy.",
    built: "A decentralized jury platform on Ethereum where votes are recorded on-chain and fully auditable.",
    learned: "Solidity gas optimization + first time integrating Ethers.js with a React frontend.",
    tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
    github: "https://github.com/mrincredibletx",
    featured: true,
  },
  {
    title: "Diabetes Prediction System",
    status: "Live",
    problem: "Early diabetes screening requires clinical visits that many people skip.",
    built: "An ML-powered web app that predicts diabetes risk from basic health metrics in seconds.",
    learned: "Feature engineering matters more than model complexity — a clean dataset beat a deeper network.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    github: "https://github.com/mrincredibletx",
  },
  {
    title: "This Portfolio",
    status: "Live",
    problem: "Generic portfolio templates don't communicate what you actually build.",
    built: "A cinematic, interactive portfolio with parallax, 3D cards, animated counters, and custom cursor.",
    learned: "Framer Motion's spring physics + Next.js image optimization = smooth performance at scale.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    github: "https://github.com/mrincredibletx",
    live: "#",
  },
];

const statusColors: Record<string, string> = {
  Live: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  "In Progress": "text-amber-300 bg-amber-500/10 border-amber-500/20",
  Archived: "text-gray-400 bg-white/[0.03] border-white/[0.06]",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: "1000px" }}
      className={`group relative rounded-2xl cursor-default ${project.featured ? "md:col-span-2" : ""}`}
    >
      {/* Hover glow border */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: "conic-gradient(from 0deg, #7C3AED44, #06B6D444, #7C3AED44)" }} />

      <div className="relative z-10 h-full rounded-2xl bg-[#0d1220] border border-white/[0.05] group-hover:border-transparent transition-colors p-7 flex flex-col">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <h3 className="font-display text-xl md:text-2xl font-bold text-white">{project.title}</h3>
          <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Problem / Built / Learned */}
        <div className="space-y-3 flex-1 mb-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-red-400/70 block mb-0.5">Problem</span>
            <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400/70 block mb-0.5">What I Built</span>
            <p className="text-gray-300 text-sm leading-relaxed">{project.built}</p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400/70 block mb-0.5">What I Learned</span>
            <p className="text-gray-300 text-sm leading-relaxed">{project.learned}</p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span key={i} className="px-2.5 py-1 text-xs bg-white/[0.03] border border-white/[0.06] rounded-lg text-gray-400 group-hover:text-gray-300 group-hover:border-white/[0.1] transition-all duration-300">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-gray-400 border border-white/[0.08] rounded-lg hover:bg-white/[0.04] hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Source Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-purple-600/70 rounded-lg hover:bg-purple-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              View Live
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
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-3 flex items-center gap-4">
          <span className="text-purple-400/70 font-mono text-xl font-normal">02.</span>
          Projects
        </h2>
        <p className="text-gray-500 text-base mb-14 max-w-lg">Real systems, real problems. Hover to explore.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>
      </motion.div>
    </section>
  );
}
