"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white tracking-widest uppercase">
          RAKESH
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#extracurricular" className="hover:text-white transition-colors">Extracurricular</a>
        </div>
        <a
          href="https://drive.google.com/file/d/1k0PclNwKItt6miyHDZ3nuqAsOvVDWmGH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm text-white"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
