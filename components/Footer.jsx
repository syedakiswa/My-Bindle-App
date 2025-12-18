"use client";
import Image from "next/image";
import { Apple, Play } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Text variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image variants
  const imageVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Floating animation (only upward from bottom)
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, -5, -20],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Button hover variants
  const buttonHoverVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Icon hover variants
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-[#ff5a4f] rounded-2xl m-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2">

        {/* FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT : Text + Buttons */}
          <motion.div
            className="text-white w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Heading */}
            <motion.h3
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              Join the Fun – Download MyBindle Now!
            </motion.h3>

            {/* Paragraph */}
            <motion.p
              className="mt-4 text-white/90 max-w-md"
              variants={textVariants}
            >
              Your Social Network, Your Way
              <br />
              Download MyBindle Now and Be a Part of a Community That's Always Evolving!
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* App Store Button */}
              <motion.button
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg w-full sm:w-auto justify-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Apple size={22} />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg w-full sm:w-auto justify-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Play size={22} />
                </motion.div>
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT : Images */}
          <motion.div
            className="hidden lg:flex items-end gap-6 w-1/2 h-[650px] sticky bottom-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image 1 */}
            <motion.div
              className="w-[280px] lg:w-[600px]"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                rotate: -3,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  src="/Stroke Body (1).png"
                  alt="App Preview"
                  width={560}
                  height={630}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="w-[280px] lg:w-[600px]"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.08,
                rotate: 3,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
              >
                <Image
                  src="/Stroke Body.png"
                  alt="App Preview"
                  width={590}
                  height={590}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};