import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { schoolData } from "../data/schoolData";

function Hero() {
  const { hero } = schoolData;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--tis-cream)]"
    >
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full border border-[var(--tis-green)]/15 md:h-[500px] md:w-[500px]" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-end gap-12 px-5 pb-14 pt-32 md:px-8 md:pb-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[var(--tis-green)]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-[clamp(3.2rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            Where curiosity
            <span className="block text-[var(--tis-green)]">
              becomes possibility.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#about"
              className="group flex items-center gap-3 rounded-full bg-[var(--tis-green)] px-6 py-4 font-semibold text-white"
            >
              {hero.primaryAction}

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#admissions"
              className="rounded-full border border-black/15 px-6 py-4 font-semibold transition-colors hover:bg-black hover:text-white"
            >
              {hero.secondaryAction}
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative h-[430px] overflow-hidden rounded-[2rem] bg-[var(--tis-green)] md:h-[560px] lg:h-[620px]"
        >
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning at school"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white md:bottom-7 md:left-7 md:right-7">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Learning beyond classrooms
              </p>
              <p className="mt-2 text-xl font-semibold md:text-2xl">
                Discover. Learn. Grow.
              </p>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 md:flex">
              <ArrowDown size={18} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;