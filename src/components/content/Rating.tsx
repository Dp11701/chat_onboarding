"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Lottie from "lottie-react";
import previewAnimation from "../../assets/jsons/preview.json";
import Laurel from "../../assets/images/Laurel.png";
import { Typography } from "@mantine/core";
import GooglePlay from "../../assets/icons/icGooglePlay.svg";
import AppStore from "../../assets/icons/icAppStore.svg";
import Star from "../../assets/icons/icStar.svg";
import SliderComponent from "./SliderComponent";

function Rating() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const sliderRef = useRef<Slider>(null);

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

  const settings = {
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
  };

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

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <motion.div
      className="col-span-8 bg-transparent flex items-center  flex-col h-[100vh] overflow-y-auto overflow-x-hidden gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1200px] w-full rounded-2xl p-8 flex flex-col items-center justify-center">
        {/* Lottie Animation Container */}
        <motion.div
          className="relative mb-8 bg-[#0A0F0D] rounded-xl p-8 min-h-[400px] overflow-hidden flex items-center justify-center"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full h-full relative">
            {!animationComplete ? (
              <Lottie
                animationData={previewAnimation}
                loop={false}
                autoplay={true}
                style={{ width: "100%", height: "auto" }}
                onComplete={handleAnimationComplete}
              />
            ) : (
              <div className="relative w-full h-screen overflow-hidden">
                {/* Laurel Image Animation */}
                <motion.div
                  className="absolute top-3/7 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
                  initial={{ scale: 1.2, opacity: 0, y: 0 }}
                  animate={{ scale: 1, y: "-35vh", opacity: 1 }}
                  transition={{
                    scale: { duration: 0.8, ease: easeOut },
                    y: { duration: 1, delay: 0.8, ease: easeOut },
                    opacity: { duration: 0.6 },
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ width: "50vw" }}
                    animate={{ width: "30vw" }}
                    transition={{ duration: 0.6, delay: 1.4, ease: easeOut }}
                  >
                    <Image
                      src={Laurel}
                      alt="Laurel"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                  className="flex flex-col items-center justify-start h-full pt-32"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 2.0, // xuất hiện sau khi Laurel đã hoàn toàn di chuyển
                  }}
                >
                  <Typography className="text-[#E2E2E2] text-[32px] font-[600] leading-[48px] my-6 text-center">
                    Available on
                  </Typography>

                  <div className="flex items-center justify-center gap-6">
                    {/* App Store Button */}
                    <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[linear-gradient(to_bottom_left,_#2BB4A599_0%,_#2A373A99_100%)] backdrop-blur-sm">
                      <Image
                        src={AppStore}
                        alt="App Store"
                        width={40}
                        height={40}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-[#9E9E9F] text-sm">
                          Download on the
                        </span>
                        <span className="text-white text-xl font-medium">
                          App Store
                        </span>
                      </div>
                    </button>

                    {/* Google Play Button */}
                    <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[linear-gradient(to_bottom_left,_#2BB4A599_0%,_#2A373A99_100%)] backdrop-blur-sm">
                      <Image
                        src={GooglePlay}
                        alt="Google Play"
                        width={40}
                        height={40}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-[#9E9E9F] text-sm">
                          Get it on
                        </span>
                        <span className="text-white text-xl font-medium">
                          Google Play
                        </span>
                      </div>
                    </button>
                  </div>

                  <SliderComponent slides={firstRowReviews} reverse />
                  <SliderComponent slides={secondRowReviews} />
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Rating;
