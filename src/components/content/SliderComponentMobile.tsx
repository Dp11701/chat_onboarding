"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { SlickCard } from "./SlickCard";

type Slide = {
  title: string;
  content: string;
  author: string;
};

type InfiniteLoopSliderProps = {
  slides: Slide[];
  reverse?: boolean;
  speed?: number;
};

const SliderComponentMobile: React.FC<InfiniteLoopSliderProps> = ({
  slides,
  reverse = false,
  speed = 20,
}) => {
  const duplicatedSlides = [...slides, ...slides];
  const containerRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tính dragConstraints sau khi render
  useEffect(() => {
    if (containerRef.current && motionRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = motionRef.current.scrollWidth;
      setConstraints({
        left: -(contentWidth - containerWidth),
        right: 0,
      });
    }
  }, [slides, isMobile]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-transparent mb-10"
    >
      <motion.div
        ref={motionRef}
        className="flex w-max gap-6 cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-x" }}
        animate={
          !isDragging && !animationDone
            ? { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
            : {}
        }
        transition={{
          duration: animationDone ? 0.5 : speed,
          ease: animationDone ? "easeOut" : "linear",
          repeat: 0,
        }}
        onAnimationComplete={() => setAnimationDone(true)}
        drag="x"
        dragConstraints={constraints}
        dragElastic={isMobile ? 0.15 : 0.05}
        dragMomentum
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.02 }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div key={index} className="select-none">
            <SlickCard {...slide} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderComponentMobile;
