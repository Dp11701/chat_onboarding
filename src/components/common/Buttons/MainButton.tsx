import React from "react";
import Image from "next/image";
import ArrowRightIcon from "@/assets/icons/icArrowRight.svg";
import { Button } from "@mantine/core";

export default function MainButton() {
  return (
    <Button className="!bg-gradient-to-r from-[#26B77D] to-[#00B0A7] text-white font-semibold text-[16px] px-6 py-6 rounded-full shadow-[0_0_20px_#00B0A744] flex  items-center justify-center gap-1 w-[240px] h-[140px]">
      <span>Get Started</span>
      <Image
        src={ArrowRightIcon}
        alt="arrow-right"
        width={20}
        height={20}
        className="mb-1"
      />
    </Button>
  );
}
