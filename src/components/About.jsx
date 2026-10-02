import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { schoolData } from "../data/schoolData";

function About() {
  const { about, stats } = schoolData;

  return (
    <section
      id="about"
      className="bg-[var(--tis-cream)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]">
                {about.eyebrow}
              </p>

              <div className="mt-8 h-px w-full bg-black/10" />

              <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                A place where every student is encouraged to question,
                explore and discover their potential.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                {about.title}
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
                {about.description}
              </p>

              <a
                href="#academics"
                className="group mt-9 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-sm font-semibold"
              >
                Discover our approach

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-24 grid border-t border-black/10 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
            >
              <div className="border-b border-black/10 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {stat.value}
                </p>

                <p className="mt-3 max-w-[200px] text-sm leading-5 text-black/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;