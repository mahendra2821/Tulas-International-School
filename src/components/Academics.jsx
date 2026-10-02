import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const programs = [
  {
    number: "01",
    title: "Early Years",
    description:
      "A nurturing beginning where curiosity, creativity and confidence grow together.",
  },
  {
    number: "02",
    title: "Primary School",
    description:
      "Building strong foundations through exploration, collaboration and meaningful learning.",
  },
  {
    number: "03",
    title: "Secondary School",
    description:
      "Developing independent thinkers prepared to engage with a changing world.",
  },
  {
    number: "04",
    title: "Beyond Academics",
    description:
      "Opportunities that develop communication, leadership, creativity and character.",
  },
];

function Academics() {
  return (
    <section
      id="academics"
      className="bg-[var(--tis-green)] px-5 py-24 text-white md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                Academics
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Learning designed around curiosity.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/55">
              We believe meaningful education goes beyond memorising
              information. It develops the ability to think, question and
              create.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-white/15">
          {programs.map((program, index) => (
            <Reveal
              key={program.number}
              delay={index * 0.08}
            >
              <div className="group grid gap-5 border-b border-white/15 py-8 md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8">
                <span className="text-sm text-white/40">
                  {program.number}
                </span>

                <h3 className="text-2xl font-medium md:text-3xl">
                  {program.title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/50">
                  {program.description}
                </p>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all group-hover:bg-white group-hover:text-[var(--tis-green)]">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academics;