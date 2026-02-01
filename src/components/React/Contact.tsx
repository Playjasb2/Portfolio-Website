import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jasmeet.work@outlook.com"; // Replace with actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="py-12 max-w-4xl mx-auto px-6 text-center scroll-mt-16 min-h-[70vh] flex flex-col justify-center"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Let’s connect.</h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          I’m always open to discussing new projects, collaborations, or technical conversations.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
          {/* Main Primary Action: Copy Email */}
          <button
            onClick={handleCopy}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-2 overflow-hidden w-64 justify-center"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="success"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-2 text-green-700"
                >
                  <Check size={20} />
                  <span>Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Copy size={20} />
                  <span>Copy Email</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Secondary Action: Mailto */}
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            <span>Open Mail App</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
