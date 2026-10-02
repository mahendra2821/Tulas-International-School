import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { schoolData } from "../data/schoolData";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[var(--tis-cream)]/90 px-5 py-3 shadow-sm backdrop-blur-md md:px-7">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--tis-green)] text-sm font-bold text-white">
            TIS
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold">
              Tulas International
            </p>
            <p className="text-xs text-black/50">
              School
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {schoolData.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black/65 transition-colors hover:text-[var(--tis-green)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#admissions"
          className="hidden items-center gap-2 rounded-full bg-[var(--tis-green)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] lg:flex"
        >
          Enquire Now
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--tis-green)] text-white lg:hidden"
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-3xl border border-black/10 bg-[var(--tis-cream)] p-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {schoolData.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-black/5"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#admissions"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[var(--tis-green)] px-4 py-3 font-semibold text-white"
              >
                Enquire Now
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;