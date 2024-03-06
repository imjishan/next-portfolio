"use client";
import { motion } from "framer-motion";

const WebsitesBranding = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerchildren: 0.1,
      },
    },
  };
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  const text = "Websites & Branding";
  return (
    <div className="lg:h-80 h-52 lg:w-[830px] w-80 lg:ml-36 ml-6 mt-20 flex justify-center">
      <motion.div
        className="lg:text-9xl text-4xl font-bold mb-8 text-left"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
export default WebsitesBranding;
