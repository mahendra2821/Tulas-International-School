import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handlePointerOver = (event) => {
      const interactive = event.target.closest(
        "a, button"
      );

      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("pointerover", handlePointerOver);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden rounded-full border border-[var(--tis-green)] lg:block"
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    />
  );
}

export default CustomCursor;