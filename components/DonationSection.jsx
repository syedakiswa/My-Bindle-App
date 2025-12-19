"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const DonationSection = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Floating animation
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Hover effect for button
  const buttonHoverVariants = {
    hover: {
      scale: 1.08,
      boxShadow: "0 15px 30px rgba(255, 59, 48, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Red Card */}
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* subtle pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:18px_18px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

            {/* LEFT CONTENT */}
            <motion.div
              className="px-6 py-16 lg:py-24 text-white text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Heading */}
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                variants={textVariants}
              >
                Be the Reason <br /> Someone Smiles Today!
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                className="mt-6 text-lg text-white/90 max-w-lg mx-auto lg:mx-0"
                variants={textVariants}
              >
                Your generosity can change lives. Every donation brings hope,
                support, and a brighter future. Give today and make a difference!
              </motion.p>

              {/* Button */}
              <motion.div
                variants={textVariants}
              >
                <motion.button
                  className="mt-10 bg-white text-red-500 font-semibold px-8 py-4 rounded-full shadow-lg"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHoverVariants}
                >
                  Donate Now
                </motion.button>
              </motion.div>
            </motion.div>
<motion.div
  className="hidden lg:flex mt-44 justify-start items-end gap-10 relative right-8"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* IMAGE 1 */}
  <motion.div
    className="w-[350px] relative"
    variants={imageVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    whileHover={{
      scale: 1.08,
      rotate: -5,
      transition: { duration: 0.3 },
    }}
  >
    {/* Mobile Image */}
    <Image
      src="/small2.webp"
      alt="Payment image"
      width={350}
      height={220}
      className="object-contain drop-shadow-lg"
    />
    {/* Speaker */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[4px] bg-black rounded-full"></div>

           <Image width={8} height={20} className="absolute  top-24 -left-1 w-[5px] h-[20px] rounded-xl" src="/image.png" alt="Power Button" />
           <Image width={8} height={20} className="absolute  top-36 -left-1 w-[5px] h-[30px]" src="/image.png" alt="Power Button" />
<Image width={8} height={2} className="absolute  top-44 -left-1 w-[5px] h-[30px]" src="/image.png" alt="Speaker Button" />
 <Image width={8} height={20} className="absolute  top-40 -right-1 w-[5px] h-[40px]" src="/image.png" alt="Power Button" />

  </motion.div>

  {/* IMAGE 2 */}
  <motion.div
    className="w-[350px] relative"
    variants={imageVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    whileHover={{
      scale: 1.08,
      rotate: 5,
      transition: { duration: 0.3 },
    }}
  >
    {/* Mobile Image */}
    <Image
      src="/small1.webp"
      alt="Donation image"
      width={350}
      height={224}
      className="object-contain drop-shadow-lg"
    />

    {/* Speaker */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-[4px] bg-black rounded-full"></div>
<Image width={8} height={20} className="absolute  top-24 -left-1 w-[5px] h-[20px] rounded-xl" src="/image.png" alt="Power Button" />
           <Image width={8} height={20} className="absolute  top-36 -left-1 w-[5px] h-[30px]" src="/image.png" alt="Power Button" />
<Image width={8} height={2} className="absolute  top-44 -left-1 w-[5px] h-[30px]" src="/image.png" alt="Speaker Button" />
 <Image width={8} height={20} className="absolute  top-40 -right-1 w-[5px] h-[40px]" src="/image.png" alt="Power Button" />

  </motion.div>
</motion.div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};