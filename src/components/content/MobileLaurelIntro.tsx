"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Laurel from "../../assets/images/Laurel.png";
import SliderComponentMobile from "./SliderComponentMobile";
import GooglePlay from "../../assets/icons/icGooglePlay.svg";
import AppStore from "../../assets/icons/icAppStore.svg";
import { Typography } from "@mantine/core";
import Lottie from "lottie-react";
import previewAnimation from "../../assets/jsons/preview.json";
import { trackingIntro } from "@/app/utils/FirebaseUtils";

export default function ThreeStepAnim() {
  const [animationComplete, setAnimationComplete] = useState(false);
  useEffect(() => {
    const trackEvent = async () => {
      try {
        await trackingIntro("onb_3", "screen");
      } catch (error) {
        console.error("Failed to track onb_3:", error);
      }
    };
    trackEvent();
  }, []);

  const [phase, setPhase] = useState<
    "big" | "small" | "showStep2" | "showStep3"
  >("big");

  //   useEffect(() => {
  //     const timers = [
  //       setTimeout(() => setPhase("small"), 1600),
  //       setTimeout(() => setPhase("showStep2"), 2300),
  //       setTimeout(() => setPhase("showStep3"), 5000),
  //     ];
  //     return () => timers.forEach(clearTimeout);
  //   }, []);

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
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    const timers = [
      setTimeout(() => setPhase("small"), 1600),
      setTimeout(() => setPhase("showStep2"), 2300),
      setTimeout(() => setPhase("showStep3"), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  };

  return (
    <div>
      {" "}
      {!animationComplete ? (
        <Lottie
          animationData={previewAnimation}
          loop={false}
          autoplay={true}
          style={{ width: "100%", height: "auto" }}
          onComplete={handleAnimationComplete}
        />
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center  w-full overflow-hidden pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Laurel Image */}
          <motion.div
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: phase === "big" ? 1 : 0.7,
              y: phase === "big" ? 0 : -0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          >
            <Image
              src={Laurel}
              alt="Laurel"
              width={500}
              height={500}
              priority
            />
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {phase === "showStep2" && (
              <motion.div
                key="step2"
                className="flex flex-col items-center justify-start"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Typography className="text-[#E2E2E2] text-[32px] font-[600] leading-[48px] my-6 text-center">
                  Available on
                </Typography>

                <div className="flex items-center justify-center gap-6 flex-col">
                  <StoreButton
                    icon={AppStore}
                    labelTop="Download on the"
                    labelBottom="App Store"
                  />
                  <StoreButton
                    icon={GooglePlay}
                    labelTop="Get it on"
                    labelBottom="Google Play"
                  />
                </div>
              </motion.div>
            )}

            {phase === "showStep3" && (
              <motion.div
                key="step3"
                className="mt-6 w-full max-w-lg"
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <SliderComponentMobile slides={firstRowReviews} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

function StoreButton({
  icon,
  labelTop,
  labelBottom,
}: {
  icon: string;
  labelTop: string;
  labelBottom: string;
}) {
  return (
    <motion.button
      className="flex items-center  px-4 py-2 rounded-[16px] bg-[linear-gradient(to_bottom_left,_#2BB4A599_0%,_#2A373A99_100%)] backdrop-blur-sm \"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-3 justify-start  w-[220px]">
        <Image src={icon} alt={labelBottom} width={40} height={40} />
        <div className="flex flex-col items-start">
          <span className="text-[#E2E2E2] text-[14px] leading-[20px] font-[400]">
            {labelTop}
          </span>
          <span className="text-white text-[20px] leading-[32px] font-[600]">
            {labelBottom}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
