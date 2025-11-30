"use client";

import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, className, delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.98,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -2,
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
