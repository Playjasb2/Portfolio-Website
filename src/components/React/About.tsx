import { motion } from "framer-motion";
import { Coffee, Code, LayoutGrid, Wrench, Zap, Settings } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 px-6 max-w-6xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-4">About Me</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I’m a software engineer who enjoys tackling complex systems and reducing them to clean,
            understandable designs. I’m especially drawn to work where good abstractions and
            long-term maintainability matter.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            When I’m not deep in code, I’m usually exploring new tools and languages, contributing
            to open source, or thinking about better ways to design software that scales with teams.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Tag icon={Code} label="Clean Architecture" />
            <Tag icon={LayoutGrid} label="Systems Design" />
            <Tag icon={Wrench} label="Developer Tooling" />
            <Tag icon={Zap} label="Performance" />
            <Tag icon={Settings} label="Automation" />
            <Tag icon={Coffee} label="Coffee" />
          </div>
        </div>

        {/* Visual / Stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-500/10 blur-3xl rounded-full" />
          <div className="relative grid grid-cols-2 gap-4">
            <StatCard number="5+" label="Years Experience" delay={0.1} />
            <StatCard number="20+" label="Repositories" delay={0.2} />
            <StatCard number="Large-Scale" label="Codebases" delay={0.3} />
            <StatCard number="Cross-Team" label="Impact" delay={0.4} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Tag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-white/5 text-zinc-300 text-sm hover:border-green-500/30 transition-colors">
      <Icon size={14} />
      <span>{label}</span>
    </div>
  );
}

function StatCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="p-6 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm text-center hover:bg-surface/60 transition-colors"
    >
      <div className="text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-sm text-zinc-500 font-medium">{label}</div>
    </motion.div>
  );
}
