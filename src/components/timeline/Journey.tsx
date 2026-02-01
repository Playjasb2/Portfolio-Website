import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

interface Position {
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

interface ExperienceItem {
  company: string;
  logo?: string;
  positions?: Position[];
}

export default function Journey({ items }: { items: ExperienceItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="py-12 max-w-6xl mx-auto px-6 relative scroll-mt-16"
      ref={containerRef}
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-16 pl-4 border-l-4 border-blue-500"
      >
        The Journey
      </motion.h2>

      <div className="relative">
        {/* Animated Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface/50 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
          />
        </div>

        <div className="space-y-20">
          {items.map((item, index) => (
            <TimelineNode key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineNode({ item, index }: { item: ExperienceItem; index: number }) {
  const isEven = index % 2 === 0;
  const positions = item.positions || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative flex items-center justify-between md:justify-normal gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Dot on the line */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Spacer for desktop layout to center the line */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <div
        className={`flex-1 ml-12 md:ml-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
      >
        <div className="p-6 rounded-2xl bg-surface/40 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm group">
          {/* Header: Company Name & Logo */}
          <div
            className={`flex items-center gap-4 mb-6 ${isEven ? "md:flex-row-reverse justify-between" : "flex-row justify-between"}`}
          >
            <div className={`flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="w-12 h-12 rounded-lg object-contain p-1 bg-white/5 border border-white/10"
                  loading="lazy"
                />
              ) : (
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Briefcase size={20} className="text-zinc-500" />
                </div>
              )}
              <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                {item.company}
              </h3>
            </div>
          </div>

          {/* Positions Stack */}

          <div className="space-y-8 relative mb-6">
            {positions.map((position, posIndex) => (
              <div key={posIndex} className="relative">
                {/* Position Details */}
                <div>
                  <div
                    className={`flex flex-col mb-2 ${isEven ? "md:items-end" : "md:items-start"}`}
                  >
                    <h4 className="text-lg font-semibold text-zinc-200">{position.role}</h4>
                    <span className="text-sm font-mono text-blue-400">
                      {position.startDate} — {position.endDate || "Present"}
                    </span>
                  </div>

                  <p
                    className={`text-zinc-500 text-sm leading-relaxed ${isEven ? "md:text-right" : "md:text-left"}`}
                  >
                    {position.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregated Tech Stack */}
          <div
            className={`flex flex-wrap gap-2 pt-4 border-t border-white/5 ${isEven ? "md:justify-end" : "md:justify-start"}`}
          >
            {Array.from(new Set(positions.flatMap((p) => p.technologies))).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-zinc-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
