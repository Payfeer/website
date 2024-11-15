"use client";

import React, { useState, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-4 z-50 bg-payfeer-primary hover:bg-gray-700 duration-200 text-white p-1 rounded-md transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{ opacity: isVisible ? 1 : 0 }}
      title="Back to Top"
    >
      <IoChevronUp className="size-6" />
    </button>
  );
};

export default ScrollToTopButton;
