import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/ExtraCurricular";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] min-h-screen text-white selection:bg-purple-500/30 font-sans">
      <Navbar />

      <Hero />

      {/* About (cinematic BG — self-contained) */}
      <About />

      {/* Projects */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[800px] bg-purple-900/8 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Projects />
      </div>

      {/* Skills */}
      <div className="relative">
        <div className="absolute top-1/2 right-0 w-full h-[800px] bg-blue-900/8 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Skills />
      </div>

      {/* Experience */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[600px] bg-cyan-900/6 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Experience />
      </div>

      {/* Leadership */}
      <div className="relative">
        <div className="absolute top-1/2 right-0 w-full h-[600px] bg-purple-900/6 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Leadership />
      </div>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/[0.06] mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
                RB
              </div>
              <span className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Rakesh Bangra
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#leadership" className="hover:text-white transition-colors">Leadership</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com/mrincredibletx" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500/25 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="http://www.linkedin.com/in/rakesh-bangra-706b41286" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500/25 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:contact.bangra@gmail.com" className="w-9 h-9 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500/25 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-8">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
