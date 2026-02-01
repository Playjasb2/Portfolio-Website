import { ArrowDown } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface HeroProps {
  profileImage?: string;
}

export default function Hero({ profileImage = "/profile_image.png" }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center relative overlow-hidden scroll-mt-32"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Engineering <br />
            <span className="text-gradient">systems</span> that last.
          </h1>

          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            Software engineer focused on clean architecture, strong abstractions, and systems that
            remain maintainable as teams and codebases grow.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-700 font-medium rounded-full hover:bg-zinc-800 transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-zinc-500">
            <a
              href="https://github.com/Playjasb2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmeetbrar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <SiLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Image/Visual Slot */}
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in-scale">
          <div className="relative w-64 h-64 md:w-80 md:h-80 select-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-2xl md:rounded-full overflow-hidden border-2 border-white/10 bg-zinc-800/50 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Profile Avatar"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to About Section"
        style={{ animationDelay: "1s" }}
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
