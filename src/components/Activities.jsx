import { motion } from "framer-motion";
import {
  Trophy,
  Palette,
  Cpu,
  Compass,
} from "lucide-react";
import { schoolData } from "../data/schoolData";

const icons = [Trophy, Palette, Cpu, Compass];

function Activities() {
  return (
    <section
      id="activities"
      className="bg-[var(--tis-cream)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--tis-gold)]">
            Beyond Academics
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-none tracking-[-0.04em] text-[var(--tis-green)] sm:text-5xl lg:text-7xl">
            More ways to discover what you're capable of.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolData.activities.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group rounded-[2rem] border border-[var(--tis-green)]/10 bg-white p-7 sm:p-8"
              >
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="text-[var(--tis-green)] transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="mt-16 text-xl font-bold text-[var(--tis-green)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--tis-muted)]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-[var(--tis-green)]/10" />

                <p className="mt-4 text-xs font-semibold text-[var(--tis-gold)]">
                  EXPLORE →
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Activities;