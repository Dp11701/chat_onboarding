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
  const handleNextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className="min-h-screen bg-[#0A0F0D] overflow-hidden">
      <div className="grid grid-cols-12 h-full bg-[#0A0F0D] overflow-hidden">
        {/* Left Column */}
        <div
          className="col-span-4 bg-cover bg-center bg-no-repeat px-20 py-10 flex flex-col items-center"
          style={{ backgroundImage: `url(${BackGroundLeft.src})` }}
        >
          <div className="flex flex-col items-start justify-between !h-[60vh]">
            <div className="flex items-center gap-0 mb-auto pt-4 justify-start">
              <div className="bg-black rounded-xl p-3">
                <Image src={LogoIcon} alt="logo" width={36} height={36} />
              </div>
              <p className="text-[28px] leading-[32px] font-bold text-white tracking-tight">
                AI Chatbot
              </p>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-start ">
              {/* Title */}
              <span className="text-[34px] leading-[54px] text-white text-center font-bold mb-2">
                {step === 1 && "Integrated All-In-One"}
                {step === 2 && "Your Ultimate AI Tool "}
                {step === 3 && "Join 25M+ using AI"}
                <br />
                {step === 1 && "AI App Suite"}
                {step === 2 && "for Work & Creativity"}
                {step === 3 && "Chatbot daily"}
              </span>

              {/* Subtitle */}
              <p className="text-[28px] leading-[45px] text-[#E2E2E2] text-center mb-4">
                Chat, Speak, Design & More
              </p>

              {/* Button */}
              <button
                onClick={handleNextStep}
                className=" text-white font-medium !bg-gradient-to-r from-[#26B77D] to-[#00B0A7]  px-3 py-5 rounded-[16px] shadow-[0_0_20px_#10A46940] flex items-center justify-between min-w-[320px] "
              >
                <span className="flex-1 text-center font-600 text-[22px] leading-[32px]">
                  Get Started
                </span>
                <Image
                  src={ArrowRightIcon}
                  alt="arrow-right"
                  width={28}
                  height={28}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        {step === 1 && (
          <motion.div
            className="col-span-8 bg-transparent flex items-center py-20 flex-col h-[100vh] overflow-y-auto gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* row 1 */}
            <div className="flex w-full gap-4 px-20">
              {/* Ảnh 1: ~39% */}
              <motion.div className="w-[39%] h-auto" variants={imageVariants}>
                <Image src={AILogo} alt="AI Logo" />
              </motion.div>

              {/* Ảnh 2: ~61% */}
              <motion.div className="w-[61%] h-auto" variants={imageVariants}>
                <Image src={AskWithPic} alt="Ask With Pic" />
              </motion.div>
            </div>

            {/* row 2 */}
            <div className="flex w-full gap-4 px-20">
              {/* Ảnh 1: ~50% */}
              <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                <Image src={AIVoice} alt="AI Voice" />
              </motion.div>

              {/* Ảnh 2: ~50% */}
              <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                <Image src={chatWithAI} alt="Chat With AI" />
              </motion.div>
            </div>

            {/* row 3 */}
            <div className="flex w-full gap-4 px-20">
              <motion.div className="w-[100%] h-auto" variants={imageVariants}>
                <Image src={topicChat} alt="Topic Chat" />
              </motion.div>
            </div>

            {/* row 4 */}
            <div className="flex w-full gap-4 px-20">
              {/* Ảnh 1: ~50% */}
              <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                <Image src={webSearch} alt="Web Search" />
              </motion.div>

              {/* Ảnh 2: ~50% */}
              <motion.div className="w-[50%] h-auto" variants={imageVariants}>
                <Image src={AIKeyboard} alt="AI Keyboard" />
              </motion.div>
            </div>

            {/* row 5 */}
            <div className="flex w-full gap-4 px-20">
              <motion.div className="w-[100%] h-auto" variants={imageVariants}>
                <Image src={imageGenerate} alt="Image Generate" />
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === 2 && <BannerPoint />}
        {step === 3 && <Rating />}
      </div>
    </div>
  );
}
