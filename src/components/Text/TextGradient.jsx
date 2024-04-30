"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const TextGradient = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const character = value.split(" ");

  return (
    <div className="pt-14">
      <p className="text-2xl flex flex-wrap" ref={element}>
        {character.map((word, i) => {
          const start = i / character.lenght;
          const end = start + 1 / character.lenght;
          return (
            <Wordss key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Wordss>
          );
        })}
      </p>
    </div>
  );
};
export default TextGradient;

const Wordss = ({ children, range, progress }) => {
  const amount = range[1] - range[0];
  const step = amount / children.lenght;
  return (
    <span className="mr-2 mt-2 relative">
      {children.split("").map((charac, i) => {
        const start = range[0] + step * i;
        const end = range[0] + (i + 1) * step;
        return (
          <Characterrr key={`c_${i}`} range={[start, end]} progress={progress}>
            {charac}
          </Characterrr>
        );
      })}
    </span>
  );
};

const Characterrr = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return <motion.span style={{ opacity: opacity }}>{children}</motion.span>;
};
