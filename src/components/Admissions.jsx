import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const points = [
  "Explore our academic approach",
  "Discover the TIS campus",
  "Connect with our admissions team",
];

function Admissions() {
  return (
    <section
      id="admissions"
      className="overflow-hidden bg-[var(--tis-green)] px-5 py-24 text-white md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                Admissions
              </p>

              <h2 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                Your child's
                <span className="block text-white/45">
                  journey starts here.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                Discover a learning environment designed to help students
                develop confidence, curiosity and a lifelong love of learning.
              </p>

              <a
                href="#contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[var(--tis-green)]"
              >
                Enquire About Admissions

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[2rem] border border-white/15 bg-white/5 p-7 backdrop-blur-sm md:p-9">
              <p className="text-sm font-medium text-white/50">
                Start exploring
              </p>

              <div className="mt-7 space-y-5">
                {points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check size={15} />
                    </span>

                    <span className="text-sm text-white/75">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Admissions;