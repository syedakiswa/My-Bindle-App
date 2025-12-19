"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Herosection = () => {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardFloatVariants = {
    animate: {
      y: [0, -12, 0],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const cardFloatVariantsAlt = {
    animate: {
      y: [0, 12, 0],
      opacity: [0.8, 1, 0.8],
      transition: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)",
    },
    tap: { scale: 0.95 },
  };

  const phoneRotateVariants = {
    animate: {
      rotateZ: [-3, -2, -3],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Volume button floating animation
  const volumeButtonVariants = {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Power button floating animation
  const powerButtonVariants = {
    animate: {
      y: [0, 5, 0],
      transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <header
      className="bg-[#ff5349] min-h-[80vh] lg:min-h-screen flex items-center relative overflow-hidden py-12 lg:py-0"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">

          {/* Text Section */}
          <motion.header
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-white flex flex-col justify-center w-full"
          >
            {/* Main Heading */}
            <motion.h1
              id="hero-title"
              variants={textVariants}
              className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-snug lg:leading-tight text-center lg:text-left"
            >
              Stay Connected
              <br className="hidden sm:block" />
              Stay Social
              <br className="hidden sm:block" />
              Stay You!
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={textVariants}
              className="mt-6 sm:mt-8 lg:mt-10 max-w-2xl text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
            >
              A place where friendships grow, communities thrive, and moments turn into unforgettable experiences. Whether you're looking to reconnect with old friends, build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={textVariants}
              className="flex justify-center lg:justify-start mt-8 sm:mt-10 lg:mt-12"
            >
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonHoverVariants}
                className="bg-white text-[#ff5349] font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-base sm:text-lg"
                aria-label="Get started with MyBindle"
                title="Start using MyBindle today"
                onClick={() => {
                  const el = document.getElementById("features");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={textVariants}
              className="mt-8 sm:mt-10 flex gap-4 sm:gap-6 justify-center lg:justify-start items-center flex-wrap"
            >
              <span className="text-white/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span className="text-lg">✓</span> Trusted by millions
              </span>
              <span className="text-white/80 text-xs sm:text-sm font-medium flex items-center gap-2">
                <span className="text-lg">✓</span> Secure & Private
              </span>
            </motion.div>
          </motion.header>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[700px] hidden sm:flex items-center justify-center"
            aria-label="MyBindle app preview on mobile device"
          >
            {/* Main Phone Device */}
            <motion.div
              animate={phoneRotateVariants.animate}
              className="relative w-[200px] sm:w-[280px] lg:w-[380px] h-[400px] sm:h-[540px] lg:h-[740px]"
            >
              <Image
                src="/Device BG.webp"
                alt="Mobile device frame"
                fill
                className="object-contain"
                priority
              />

              {/* Screen Content */}
              <Image
                src="/Image placehlder 1.webp"
                alt="MyBindle app interface screenshot"
                fill
                className="object-cover rounded-4xl p-2"
              />
              
              {/* Camera Notch */}
              <Image
                src="/Oval.webp"
                alt="Device camera notch"
                width={14}
                height={14}
                className="absolute bg-black rounded-full top-3 left-1/2 -translate-x-1/2 z-20"
              />

              <div className="absolute top-32 left-0.5 w-[4px] h-[65px] bg-black rounded-full"></div>
    <div className="absolute top-52 left-0.5 w-[4px] h-[60px] bg-black rounded-full"></div>
          <div className="absolute top-40 right-[4px] w-[5px] h-[50px] bg-black rounded-full"></div>
            </motion.div>

            {/* Floating Card - Left Top */}
            <motion.div
              className="absolute top-12 sm:top-16 lg:top-20 -left-8 sm:-left-12 lg:-left-16 z-10"
              animate={cardFloatVariants.animate}
            >
              <Image
                src="/card.webp"
                alt="Feature highlight - Seamless Connections"
                width={170}
                height={100}
                className="w-[140px] sm:w-[160px] lg:w-[190px] drop-shadow-lg"
              />
            </motion.div>

            {/* Floating Card - Right Bottom */}
            <motion.div
              className="absolute bottom-16 sm:bottom-20 lg:bottom-24 -right-8 sm:-right-12 lg:-right-16 z-10"
              animate={cardFloatVariantsAlt.animate}
            >
              <Image
                src="/card (1).webp"
                alt="Feature highlight - Discover & Explore"
                width={170}
                height={100}
                className="w-[140px] sm:w-[160px] lg:w-[190px] drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Background */}
      <div
        className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-white/5 rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48 pointer-events-none"
        aria-hidden="true"
      />
    </header>
  );
};