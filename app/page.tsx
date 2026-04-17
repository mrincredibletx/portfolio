import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ExtraCurricular from "@/components/ExtraCurricular";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30 font-sans">
      <Navbar />
      
      <Hero />
      
      {/* Decorative gradient blur between sections */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-[800px] bg-blue-900/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        <About />
        <Experience />
      </div>

      <div className="relative">
        <div className="absolute top-1/2 right-0 w-full h-[800px] bg-purple-900/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        <Skills />
        <ExtraCurricular />
      </div>

      <footer className="py-8 text-center text-gray-500 border-t border-white/10 mt-20">
        <p>&copy; {new Date().getFullYear()} Rakesh Bangra. Built with Next.js &amp; Framer Motion.</p>
      </footer>
    </main>
  );
}
