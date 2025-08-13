"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Laurel from "../../assets/images/Laurel.png";
import SliderComponentMobile from "./SliderComponentMobile";

export default function ThreeStepAnim() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 3000),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  // Split reviews into two rows
  const firstRowReviews = [
    {
      title: "Fantastic Experience!",
      content:
        "Feels like talking to someone who actually gets it. I use it for brainstorming, answering tricky questions, and writing everyday content.",
      author: "Jame Writer",
    },
    {
      title: "Highly Recommend",
      content:
        "This app has improved my productivity significantly. The interface is intuitive and super fast.",
      author: "John Doe",
    },
    {
      title: "Very Helpful",
      content:
        "Helps me plan my day and manage tasks better. The insights are spot on.",
      author: "Alice Smith",
    },
  ];

  const secondRowReviews = [
    {
      title: "Great Support",
      content:
        "Customer support was quick and solved my problem within minutes. Great service!",
      author: "Bob Johnson",
    },
    {
      title: "Love the Design",
      content:
        "The UI is beautiful and user friendly. A pleasure to use every day.",
      author: "Charles Lee",
    },
    {
      title: "User Friendly",
      content:
        "I was able to get started right away without any tutorials. Very intuitive.",
      author: "Diana Prince",
    },
  ];

  const containerStyle = "flex items-center justify-center h-screen w-full";

  return (
    <div className={containerStyle}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Image src={Laurel} alt="Step 1" width={100} height={100} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <Image src={Laurel} alt="Step 2" width={300} height={300} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-8"
          >
            <Image src={Laurel} alt="Laurel" width={300} height={300} />
            <div className="w-full max-w-lg">
              <SliderComponentMobile slides={firstRowReviews} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
