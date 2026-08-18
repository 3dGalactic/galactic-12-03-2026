"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedWord = ({ word1 = "", word2 = "", css = "" }) => {
  const [hoveredWordIndex, setHoveredWordIndex] = useState(null);

  const renderWords = (text, startIndex, colorClass = "") => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const globalIndex = startIndex + i;
      const distance =
        hoveredWordIndex === null
          ? 0
          : Math.abs(globalIndex - hoveredWordIndex);
      let skewX = 0;
      if (hoveredWordIndex !== null) {
        if (distance === 0) skewX = -15;
        else if (distance === 1) skewX = -7;
        else if (distance === 2) skewX = -3;
      }

      return (
        <motion.span
          key={globalIndex + colorClass}
          onMouseEnter={() => setHoveredWordIndex(globalIndex)}
          onMouseLeave={() => setHoveredWordIndex(null)}
          animate={{ skewX, scale: distance === 0 ? 1 : 1.05 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className={`inline-block mx-[4px] hover:cursor-pointer ${colorClass}`}
        >
          {word}&nbsp;
        </motion.span>
      );
    });
  };

  const w1 = renderWords(word1, 0);
  const w2 = renderWords(word2, word1.split(" ").length, "text-primary");

  return (
    <div>
      <motion.p
        className={css}
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {w1}
        {w2}
      </motion.p>
    </div>
  );
};

export default AnimatedWord;
