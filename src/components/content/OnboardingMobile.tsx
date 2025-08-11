"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mobile1 from "@/assets/images/mobile/mobile1.png";
import mobile2 from "@/assets/images/mobile/mobile2.png";
import mobile3 from "@/assets/images/mobile/mobile3.png";
import mobile4 from "@/assets/images/mobile/mobile4.png";
import mobile5 from "@/assets/images/mobile/mobile5.png";
import mobile6 from "@/assets/images/mobile/mobile6.png";
import mobile7 from "@/assets/images/mobile/mobile7.png";
import mobile9 from "@/assets/images/mobile/mobile9.png";

type Slide = {
  image: StaticImageData;
  title?: string;
  subtitle?: string;
};

type OnboardingMobileProps = {
  className?: string;
  slides?: Slide[];
};

const defaultSlides: Slide[] = [
  { image: mobile1 },
  { image: mobile2 },
  { image: mobile3 },
  { image: mobile4 },
  { image: mobile5 },
  { image: mobile6 },
  { image: mobile7 },
  // mobile8.png not found in repo; add it to include here
  { image: mobile9 },
];

export default function OnboardingMobile({
  className = "",
  slides = defaultSlides,
}: OnboardingMobileProps) {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    swipe: true,
    adaptiveHeight: true,
    // Render the custom dot element
    customPaging: () => <span className="dot block" />,
    // Place dots beneath the slide content
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className={`onboarding-mobile-slider w-full ${className}`}>
      <div className="relative w-full">
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-transparent rounded-[20px] p-5 flex flex-col items-center text-center">
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.title ?? "Onboarding slide"}
                    className="rounded-xl"
                  />
                </div>
                {(slide.title || slide.subtitle) && (
                  <div className="mt-4">
                    {slide.title && (
                      <h3 className="text-white text-[20px] font-semibold">
                        {slide.title}
                      </h3>
                    )}
                    {slide.subtitle && (
                      <p className="text-[#A5B0AC] text-[14px] mt-1">
                        {slide.subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* Scope styles to this component wrapper */
        .onboarding-mobile-slider .custom-dots {
          position: relative;
          text-align: center;
        }
        .onboarding-mobile-slider .custom-dots li {
          width: auto;
          margin: 0 2px;
        }
        .onboarding-mobile-slider .custom-dots li button {
          padding: 0;
        }
        /* Hide Slick's default pseudo dot */
        .onboarding-mobile-slider .custom-dots li button:before {
          content: "" !important;
          display: none !important;
        }
        .onboarding-mobile-slider .custom-dots li .dot {
          width: 16px; /* 1/2 of active width */
          height: 4px;
          background: #2b3a35; /* muted green/gray */
          border-radius: 9999px;
          opacity: 0.6;
          transition: all 220ms ease;
          display: inline-block;
        }
        .onboarding-mobile-slider .custom-dots li.slick-active .dot {
          width: 32px;
          height: 4px;
          background: #10a469; /* active emerald */
          opacity: 1;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
