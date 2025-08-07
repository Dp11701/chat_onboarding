"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlickCard } from "./SlickCard";

type Slide = {
  title: string;
  content: string;
  author: string;
};

type InfiniteLoopSliderProps = {
  slides: Slide[];
  reverse?: boolean; // tùy chọn đảo chiều cho sole
  speed?: number; // duration custom
};

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  slides,
  reverse = false,
  speed = 20,
}) => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="w-full overflow-hidden bg-transparent mt-10">
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <SlickCard
            key={index}
            title={slide.title}
            content={slide.content}
            author={slide.author}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLoopSlider;
