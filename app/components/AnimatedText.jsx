"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text1, text2, css }) => {
  const [hoveredCharIndex, setHoveredCharIndex] = useState(null);

  const renderText = (text, startIndex, colorClass = "") => {
    return text.split("").map((char, i) => {
      const globalIndex = startIndex + i;
      const distance =
        hoveredCharIndex === null
          ? 0
          : Math.abs(globalIndex - hoveredCharIndex);
      let skewX = 0;
      if (hoveredCharIndex !== null) {
        if (distance === 0) skewX = -15;
        else if (distance === 1) skewX = -7;
        else if (distance === 2) skewX = -3;
      }

      return (
        <motion.span
          key={globalIndex + colorClass}
          onMouseEnter={() => setHoveredCharIndex(globalIndex)}
          onMouseLeave={() => setHoveredCharIndex(null)}
          animate={{ skewX, scale: distance === 0 ? 1 : 1.05 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className={`inline-block mx-[1px] ${
            char === " " ? "w-2" : ""
          } hover:cursor-pointer ${colorClass}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      );
    });
  };

  let runningIndex = 0;
  const part1 = renderText(text1, runningIndex);
  runningIndex += text1.length;
  const part2 = renderText(text2, runningIndex, "text-primary");
  runningIndex += text2.length;
  return (
    <div>
      <motion.h1
        className={css}
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {part1}
        {part2}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
