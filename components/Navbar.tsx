"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const l of navLinks) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 200) current = l.href.slice(1);
      }
      setActiveSection(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0B0F19]/75 backdrop-blur-xl border-b border-white/[0.04] py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-[11px] text-white">RB</div>
            <span className="text-white font-semibold tracking-wide text-sm hidden sm:block font-display">RAKESH</span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a key={link.href} href={link.href} className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${active ? "text-white" : "text-gray-500 hover:text-gray-300"}`}>
                  {active && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white/[0.05] rounded-lg border border-white/[0.06]" transition={{ type: "spring", stiffness: 400, damping: 30 }} />}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          <a href="https://drive.google.com/file/d/1k0PclNwKItt6miyHDZ3nuqAsOvVDWmGH/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-gray-300 border border-white/[0.1] hover:bg-white/[0.04] hover:border-white/[0.18] transition-all duration-300">
            Resume ↗
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#0B0F19]/95 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col items-center justify-center h-full gap-5">
              {navLinks.map((link, i) => (
                <motion.a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className="text-xl font-semibold text-gray-300 hover:text-white transition-colors font-display">{link.label}</motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
