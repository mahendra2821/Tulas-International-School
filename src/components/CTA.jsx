import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--tis-cream)] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--tis-green)]/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]"
        >
          Start the conversation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-7 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl"
        >
          Let's shape the
          <span className="block text-[var(--tis-green)]">
            next chapter.
          </span>
        </motion.h2>

        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--tis-green)] px-7 py-4 font-semibold text-white"
        >
          Get in Touch
          <ArrowUpRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}

export default CTA;