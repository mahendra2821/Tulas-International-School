import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black px-5 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
                TIS
              </div>

              <div>
                <p className="font-semibold">
                  Tulas International School
                </p>

                <p className="text-xs text-white/40">
                  Education. Curiosity. Possibility.
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md text-sm leading-6 text-white/45">
              Creating an environment where students can learn with curiosity,
              grow with confidence and prepare for the future.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#academics" className="hover:text-white">
                Academics
              </a>

              <a href="#campus" className="hover:text-white">
                Campus
              </a>

              <a href="#admissions" className="hover:text-white">
                Admissions
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35">
              Connect
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              Contact TIS

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">
          <p>
            © {new Date().getFullYear()} Tulas International School.
          </p>

          <p>
            Homepage redesign concept
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;