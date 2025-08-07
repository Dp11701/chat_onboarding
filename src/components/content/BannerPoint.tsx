"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mantine/core";

function BannerPoint() {
  const [activeTab, setActiveTab] = useState(0);
  const [prompt, setPrompt] = useState(
    "Create a basketball team logo with the brand name Thunder"
  );
  const sliderRef = useRef<Slider>(null);

  const tabs = [
    { id: "chat", label: "Chat AI" },
    { id: "logo", label: "Logo Generate" },
    { id: "avatar", label: "AI Avatar" },
  ];

  const slides = [
    {
      id: "chat",
      title: "AI Chat Interface",
      description:
        "Advanced conversational AI with natural language processing",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "logo",
      title: "Logo Generation",
      description: "Create stunning logos with AI-powered design tools",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "avatar",
      title: "AI Avatar Creator",
      description: "Generate unique avatars with customizable styles",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=600&fit=crop",
      color: "from-pink-500 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: easeOut,
      },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.6 + i * 0.1,
      },
    }),
  };

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "ease-in-out",
    beforeChange: (current: number, next: number) => {
      setActiveTab(next);
    },
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <motion.div
      className="col-span-8 bg-transparent flex items-center  flex-col h-[100vh] overflow-y-hidden gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl w-full  rounded-2xl p-8 ">
        {/* Header */}
        <motion.div
          className="mb-8"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography className="block text-white text-[20px] font-[400] leading-[32px] text-center mb-3">
            ENTER PROMPT
          </Typography>
          <Typography className="font-[500] text-[28px] leading-[32px] text-center text-white">
            Create a basketball team logo with the brand name Thunder
          </Typography>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          className="relative mb-8 bg-[#0A0F0D] rounded-xl p-8 min-h-[400px] overflow-hidden"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <video
                  className="w-full h-full  rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/mp4/thunder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex gap-4">
          <AnimatePresence>
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                custom={index}
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTabClick(index)}
                className={`flex-1 py-4 px-6 rounded-[16px] text-[24px] leading-[32px] transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-[#26B77D] to-[#00B0A7] text-white shadow-lg"
                    : "bg-[#2A2F2D] text-gray-300 hover:bg-[#3A3F3D]"
                }`}
                style={{
                  fontWeight: 500,
                  transform: activeTab === index ? "scale(1.02)" : "scale(1)",
                  textShadow:
                    activeTab === index
                      ? "0 0 0.5px white, 0 0 1px white"
                      : "none",
                  fontSynthesis: "none",
                  textRendering: "geometricPrecision",
                  transition: "transform 0.3s ease, text-shadow 0.3s ease",
                }}
              >
                {tab.label}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default BannerPoint;
