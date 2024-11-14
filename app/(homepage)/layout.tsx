"use client";

import React from "react";
import { motion } from "framer-motion";
import { Footer, Navbar } from "@/app/components/common";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
      >
        <div className="bg-[#FAFAFD]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
