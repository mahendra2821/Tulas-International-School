import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

function Campus() {
  return (
    <section
      id="campus"
      className="bg-[var(--tis-cream)] px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]">
                The Campus
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                A campus built for possibility.
              </h2>
            </div>

            <a
              href="#admissions"
              className="group flex w-fit items-center gap-2 border-b border-black/20 pb-2 text-sm font-semibold"
            >
              Explore TIS
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:grid-rows-[280px_280px]">
          <Reveal className="md:col-span-7 md:row-span-2">
            <div className="h-full min-h-[400px] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85"
                alt="School campus"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="md:col-span-5"
          >
            <div className="h-full min-h-[260px] overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                alt="Students in classroom"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.2}
            className="md:col-span-5"
          >
            <div className="flex h-full min-h-[260px] items-end rounded-[2rem] bg-[var(--tis-green)] p-8 text-white">
              <p className="max-w-sm text-2xl font-medium leading-tight md:text-3xl">
                Spaces that encourage students to learn, collaborate and
                discover.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Campus;