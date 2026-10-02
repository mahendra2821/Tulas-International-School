import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-[var(--tis-green)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;