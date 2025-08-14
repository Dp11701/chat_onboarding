"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { motion, PanInfo } from "framer-motion";
import { SlickCard } from "./SlickCard";
import { useMediaQuery } from "@mantine/hooks";

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

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  slides,
  reverse = false,
  speed = 20,
}) => {
  // Memoize tripledSlides để tránh re-create mỗi render
  const tripledSlides = useMemo(
    () => [...slides, ...slides, ...slides],
    [slides]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [startX, setStartX] = useState(0);

  // Tính toán vị trí ban đầu
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current && motionRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = motionRef.current.scrollWidth;

        // đặt vị trí ban đầu vào giữa để infinite
        const middleOffset = -(contentWidth / 3 - containerWidth / 2);
        setStartX(middleOffset);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [slides]);

  // Optimize event handlers với useCallback
  const handleDragStart = useCallback(() => {
    setIsDragging(true);
    setAnimationDone(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setAnimationDone(true);
  }, []);

  // Constraints đơn giản hơn
  const dragConstraints = useMemo(
    () => ({
      left: -2000,
      right: 1000,
    }),
    []
  );

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-transparent mt-10"
    >
      <motion.div
        ref={motionRef}
        className="flex w-max gap-6 cursor-grab active:cursor-grabbing"
        style={{
          touchAction: "pan-x",
          willChange: "transform",
        }}
        animate={
          !isDragging && !animationDone
            ? { x: reverse ? [startX - 300, startX] : [startX, startX - 300] }
            : {}
        }
        transition={{
          duration: animationDone ? 0.3 : speed,
          ease: animationDone ? ("easeOut" as const) : ("linear" as const),
          repeat: 0,
        }}
        onAnimationComplete={handleAnimationComplete}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.2}
        dragMomentum={true}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        whileDrag={{
          scale: 1.01,
          transition: { duration: 0.1 },
        }}
      >
        {tripledSlides.map((slide, index) => (
          <div key={index} className="select-none">
            <SlickCard {...slide} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLoopSlider;
