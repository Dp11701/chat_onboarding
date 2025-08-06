"use client";

import React, { useState, useEffect } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  title?: string;
  sidebar?: React.ReactNode;
}

export default function ResponsiveLayout({
  children,
  title,
  sidebar,
}: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return <MobileLayout title={title}>{children}</MobileLayout>;
  }

  return <DesktopLayout sidebar={sidebar}>{children}</DesktopLayout>;
}
