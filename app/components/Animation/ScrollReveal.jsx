"use client";

import { motion } from "framer-motion";

const ScrollReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
