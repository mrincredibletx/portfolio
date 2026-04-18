import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/ExtraCurricular";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] min-h-screen text-white selection:bg-purple-500/30">
      <CustomCursor />
      <Navbar />

      <Hero />

      <About />

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[700px] bg-purple-900/5 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Projects />
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-0 w-full h-[700px] bg-cyan-900/5 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Skills />
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-blue-900/4 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Experience />
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-0 w-full h-[500px] bg-purple-900/4 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
        <Leadership />
      </div>

      <footer className="relative py-10 border-t border-white/[0.04] mt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-[10px] text-white">RB</div>
              <span className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Rakesh Bangra</span>
            </div>
            <div className="flex items-center gap-5 text-sm text-gray-600">
              {["About", "Projects", "Skills", "Experience", "Leadership"].map((s) => (
                <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-gray-300 transition-colors">{s}</a>
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              {[
                { href: "https://github.com/mrincredibletx", d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" },
                { href: "http://www.linkedin.com/in/rakesh-bangra-706b41286", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
                { href: "mailto:contact.bangra@gmail.com", d: "M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3-8 5.7a1.94 1.94 0 0 1-2.06 0L2 7" },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-white/[0.05] flex items-center justify-center text-gray-600 hover:text-white hover:border-cyan-500/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.d}/></svg>
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-700 text-xs mt-6">Built with Next.js, Framer Motion & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
