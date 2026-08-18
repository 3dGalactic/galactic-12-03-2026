import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const AnimatedButton = ({ content, href, css }) => {
  return (
    <div>
      <Link href={href}>
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 3,
            transition: {
              type: "tween",
              ease: "easeOut",
              duration: 0.01, // adjust for speed
            },
          }}
          className={css}
        >
          <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10">{content}</span>
        </motion.button>
      </Link>
    </div>
  );
};

export default AnimatedButton;
