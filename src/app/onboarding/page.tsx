"use client";

import React, { useState, useEffect } from "react";
import LogoIcon from "@/assets/icons/icLogo.svg";
import Image from "next/image";
import BackGroundLeft from "@/assets/images/BackGroundLeft.png";
import { motion, easeOut } from "framer-motion";

import ArrowRightIcon from "@/assets/icons/icArrowRight.svg";
import AILogo from "@/assets/images/AILogo.png";
import AskWithPic from "@/assets/images/askWithPic.png";
import AIVoice from "@/assets/images/AIVoice.png";
import chatWithAI from "@/assets/images/chatWithAI.png";
import topicChat from "@/assets/images/topicChat.png";
import webSearch from "@/assets/images/webSearch.png";
import AIKeyboard from "@/assets/images/AIKeyboard.png";
import imageGenerate from "@/assets/images/imageGenerate.png";
import BannerPoint from "@/components/content/BannerPoint";
import Rating from "@/components/content/Rating";
import { useMediaQuery } from "@mantine/hooks";
import OnboardingMobile from "@/components/content/OnboardingMobile";
import MobileLaurelIntro from "@/components/content/MobileLaurelIntro";

export default function OnboardingPage() {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual images
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const [step, setStep] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleNextStep = () => {
    if (step === 3) {
      window.open(
        "https://apps.apple.com/ca/app/ai-chatbot-ask-me-anything/id1669513811",
        "_blank"
      );

      setStep(1);
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="bg-[#0A0F0D] overflow-hidden h-screen flex flex-co justify-between">
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 h-full bg-[#0A0F0D] overflow-hidden">
        {/* Left Column - Responsive layout với CSS */}
        <div
          className="w-full md:col-span-4 bg-cover bg-center bg-no-repeat px-0 md:px-20 py-6 md:py-10 flex md:flex-col items-center justify-center"
          style={{ backgroundImage: `url(${BackGroundLeft.src})` }}
        >
          <div className="flex flex-col items-start justify-between md:h-[60vh]">
            {/* Logo - Hidden on mobile với CSS */}
            <div className="hidden md:flex lg:flex items-center mb-auto pt-4 justify-center gap-2">
              <div className="bg-black rounded-xl p-3">
                <Image src={LogoIcon} alt="logo" width={36} height={36} />
              </div>
              <p className="text-[28px] leading-[32px] font-bold text-white tracking-tight">
                AI Chatbot
              </p>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center md:items-center lg:items-center lg:justify-center w-full">
              {/* Title */}
              <span className="text-[22px] md:text-[34px] leading-[34px] md:leading-[54px] text-white text-center font-bold mb-2">
                {step === 1 && "Integrated All-In-One AI App Suite"}
                {step === 2 && "Your Ultimate AI Tool or Work & Creativity"}
                {step === 3 && "Join 25M+ using AI Chatbot daily"}
              </span>

              {/* Subtitle */}
              <p className="text-[18px] md:text-[28px] leading-[28px] md:leading-[45px] text-[#E2E2E2] text-center mb-4">
                Chat, Speak, Design & More
              </p>

              {/* Button */}
              <button
                onClick={handleNextStep}
                className="relative flex items-center justify-center text-white font-medium !bg-gradient-to-r from-[#26B77D] to-[#00B0A7] md:px-3 px-[16px] py-3 md:py-5 rounded-[16px] shadow-[0_0_20px_#10A46940] min-w-[300px] md:min-w-[320px] w-[90vw] lg:w-auto md:w-auto"
              >
                <span className="text-center font-600 text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] w-full">
                  {step === 1 && "Get Started"}
                  {step === 2 && "Continue"}
                  {step === 3 && "Continue"}
                </span>
                <Image
                  src={ArrowRightIcon}
                  alt="arrow-right"
                  width={28}
                  height={28}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Desktop content */}
        <div className="hidden md:block md:col-span-8">
          {step === 1 && (
            <motion.div
              className="bg-transparent flex items-center py-20 flex-col overflow-y-auto gap-4 w-full h-[100vh]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* row 1 */}
              <div className="flex w-full gap-4 px-20">
                <motion.div className="w-[39%] h-auto" variants={imageVariants}>
                  <Image src={AILogo} alt="AI Logo" />
                </motion.div>
                <motion.div className="w-[61%] h-auto" variants={imageVariants}>
                  <Image src={AskWithPic} alt="Ask With Pic" />
                </motion.div>
              </div>

              {/* row 2 */}
              <div className="flex w-full gap-4 px-20">
                <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                  <Image src={AIVoice} alt="AI Voice" />
                </motion.div>
                <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                  <Image src={chatWithAI} alt="Chat With AI" />
                </motion.div>
              </div>

              {/* row 3 */}
              <div className="flex w-full gap-4 px-20">
                <motion.div
                  className="w-[100%] h-auto"
                  variants={imageVariants}
                >
                  <Image src={topicChat} alt="Topic Chat" />
                </motion.div>
              </div>

              {/* row 4 */}
              <div className="flex w-full gap-4 px-20">
                <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                  <Image src={webSearch} alt="Web Search" />
                </motion.div>
                <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                  <Image src={AIKeyboard} alt="AI Keyboard" />
                </motion.div>
              </div>

              {/* row 5 */}
              <div className="flex w-full gap-4 px-20">
                <motion.div
                  className="w-[100%] h-auto"
                  variants={imageVariants}
                >
                  <Image src={imageGenerate} alt="Image Generate" />
                </motion.div>
              </div>
            </motion.div>
          )}

          {step === 2 && <BannerPoint />}
          {step === 3 && <Rating />}
        </div>

        {/* Mobile Content - Hiển thị với CSS responsive */}
        <div className=" md:hidden w-full flex items-center justify-center h-full">
          {step === 1 && <OnboardingMobile />}
          {step === 2 && <BannerPoint />}
          {step === 3 && <MobileLaurelIntro />}
        </div>
      </div>
    </div>
  );
}
