"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@mantine/hooks";
import { trackingIntro } from "@/app/utils/FirebaseUtils";

function BannerPoint() {
  const [activeTab, setActiveTab] = useState(0);

  const sliderRef = useRef<Slider>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const tabs = [
    { id: "chat", label: "Chat AI" },
    { id: "logo", label: "Logo Generate" },
    { id: "avatar", label: "AI Avatar" },
  ];
  useEffect(() => {
    const trackEvent = async () => {
      try {
        await trackingIntro("onb_2", "screen");
      } catch (error) {
        console.error("Failed to track onb_2:", error);
      }
    };
    trackEvent();
  }, []);

  const slides = [
    {
      id: "chat",
      title: "AI Chat Interface",
      description:
        "Advanced conversational AI with natural language processing",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      color: "from-blue-500 to-purple-600",
      video: "/assets/mp4/intro.mp4",
    },
    {
      id: "logo",
      title: "Logo Generation",
      description: "Create stunning logos with AI-powered design tools",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      color: "from-green-500 to-teal-600",
      video: "/assets/mp4/thunder.mp4",
    },
    {
      id: "avatar",
      title: "AI Avatar Creator",
      description: "Generate unique avatars with customizable styles",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&h=600&fit=crop",
      color: "from-pink-500 to-red-600",
      video: "/assets/mp4/logo3.mp4",
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
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;
      if (index === activeTab) {
        try {
          videoEl.currentTime = 0;
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } catch {}
      } else {
        try {
          videoEl.pause();
        } catch {}
      }
    });
  }, [activeTab]);

  useEffect(() => {
    const currentVideo = videoRefs.current[activeTab];
    if (!currentVideo) return;

    const handleEnded = () => {
      const nextIndex = (activeTab + 1) % slides.length;
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(nextIndex);
      } else {
        setActiveTab(nextIndex);
      }
    };

    currentVideo.addEventListener("ended", handleEnded);
    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [activeTab, slides.length]);

  return (
    <motion.div
      className={
        "bg-transparent flex items-center md:py-2 flex-col overflow-y-auto gap-4 w-full " +
        (isMobile ? "" : " h-[100vh] md:col-span-8")
      }
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:max-w-4xl w-full  rounded-2xl md:p-8">
        {/* Slider Container */}
        <motion.div
          className="relative bg-[#0A0F0D] rounded-xl md:p-8 min-h-[400px] overflow-hidden"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="lg:max-h-[70vh] lg:w-auto flex justify-center items-center "
              >
                <div className="relative md:rounded-[56px] overflow-hidden md:border-2 md:border-[#212627] lg:h-[70vh] lg:w-auto">
                  <video
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    playsInline
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                  >
                    <source src={slide.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex gap-4 md:gap-2 px-4 md:px-0 w-full lg:gap-4">
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
                className={`flex-1 py-4 md:px-2 rounded-[8px] lg:rounded-[16px] md:rounded-[16px] md:text-[20px] text-[14px] md:leading-[28px] leading-[20px] transition-all duration-300 ${
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
