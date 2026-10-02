import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "A school should give children the confidence to ask questions, explore ideas and find their own voice.",
    role: "The TIS Learning Philosophy",
  },
  {
    quote:
      "The right environment can transform the way a child sees learning and their own potential.",
    role: "A Community Built Around Students",
  },
];

function Testimonials() {
  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3">
            <Quote
              size={20}
              className="text-[var(--tis-green)]"
            />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--tis-green)]">
              Voices
            </p>
          </div>

          <h2 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            What meaningful education can feel like.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.role}
              delay={index * 0.12}
            >
              <article className="rounded-[2rem] bg-[var(--tis-cream)] p-8 md:p-12">
                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className="text-[var(--tis-green)]"
                />

                <blockquote className="mt-12 text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                  “{item.quote}”
                </blockquote>

                <p className="mt-10 text-sm font-semibold text-black/50">
                  {item.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;