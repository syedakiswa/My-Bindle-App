'use client'
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
{/* Image Section */}
<motion.div
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  className="relative hidden lg:flex lg:justify-center lg:items-center lg:w-full"
>
  {/* Phone Wrapper */}
  <motion.div
    animate={phoneRotateVariants.animate}
    className="relative w-[300px] h-[600px]"
  >
    {/* Phone Frame */}
    <Image
      src="/Device-bg.webp"
      alt="Mobile device frame"
      fill
      className="object-contain "
      priority
    />

    {/* Screen */}
<div className="absolute top-[12px] left-[8px] right-[10px] bottom-[10px] rounded-[10px] overflow-hidden z-0">
  <Image
    src="/Image-placehlder-1.webp"
    alt="MyBindle app interface"
    fill
    className="object-cover"
    priority
  />
</div>


    {/* Camera Notch */}
    <Image
      src="/Oval.webp"
      alt="Camera notch"
      width={14}
      height={14}
      className="absolute bg-black rounded-full top-[16px] left-1/2 -translate-x-1/2 z-20"
    />


    <div className="absolute left-[-2px] top-[28%] w-[4px] h-[55px] bg-black rounded-full"></div>
    <div className="absolute left-[-2px] top-[38%] w-[4px] h-[45px] bg-black rounded-full"></div>

    <div className="absolute right-[-3px] top-[34%] w-[5px] h-[55px] bg-black rounded-full"></div>
  </motion.div>

  {/* Floating Card – Left */}
  <motion.div
    animate={cardFloatVariants.animate}
    className="absolute left-[5%] top-[18%] z-20"
  >
    <Image
      src="/card.webp"
      alt="Feature card"
      width={180}
      height={120}
      className="rounded-2xl shadow-xl"
    />
  </motion.div>

  {/* Floating Card – Right */}
  <motion.div
    animate={cardFloatVariantsAlt.animate}
    className="absolute right-[5%] bottom-[18%] z-20"
  >
    <Image
      src="/card1.webp"
      alt="Feature card"
      width={180}
      height={120}
      className="rounded-2xl shadow-xl"
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
