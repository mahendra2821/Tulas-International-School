import { motion } from "framer-motion";
import {
  BookOpen,
  Globe2,
  Lightbulb,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    text: "Strong foundations that encourage students to become independent learners.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Creativity",
    text: "Learning experiences that encourage students to ask questions and explore ideas.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Preparing young people to understand and participate in a connected world.",
  },
  {
    icon: Users,
    title: "Character & Community",
    text: "A supportive environment where relationships, responsibility and confidence matter.",
  },
];

function WhyTIS() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]">
              Why TIS
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
              More than a school.
              <span className="block text-black/35">
                A place to become.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal
                key={value.title}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-white p-7 md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--tis-cream)] text-[var(--tis-green)]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-16 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-black/50">
                    {value.text}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyTIS;