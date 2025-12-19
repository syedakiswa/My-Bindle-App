'use client'
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Video, Bell, Users } from "lucide-react"

export const Appkeyfeatures = () => {

  const features = [
    {
      icon: Video,
      title: "Short Videos & Reels",
      description: "Share engaging, bite-sized content that keeps everyone entertained.",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay updated on what matters without the noise.",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      title: "Interest-Based Communities",
      description: "Join groups and discussions that match your passion.",
      bgColor: "bg-blue-50",
    },
  ]

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
  }

  // Feature card variants
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Mobile phone variants
  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  // Rotation variants
  const rotationVariants = {
    animate: {
      rotate: [-8, -6, -8],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const rotationVariants2 = {
    animate: {
      rotate: [6, 8, 6],
      transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
    },
  }

  // Floating card variants
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
  }

  // Feature card hover
  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

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
    <section className="min-h-[100vh] lg:min-h-[50vh] max-w-7xl mx-auto px-6 py-12 lg:py-24 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
        
        {/* LEFT SIDE - PHONES */}
        <div className="relative flex justify-center items-end gap-8 lg:gap-16 h-[400px] sm:h-[500px] lg:h-[600px]">

          {/* ORANGE BACKGROUND */}
          <div className="absolute  flex justify-center items-center ">
            <Image
              src="/ellipse-1.webp"
              alt="Orange background"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>

          {/* MOBILE 1 - LEFT */}
          <motion.div
            className="relative w-[150px] sm:w-[200px] lg:w-[220px] h-[300px] sm:h-[400px] lg:h-[445px]"
            initial="hidden"
            whileInView="visible"
            animate="animate"
            variants={phoneVariants}
            viewport={{ once: true }}
          >
            <motion.div animate={rotationVariants.animate} className="w-full h-full relative">
              <Image
                src="/device-bg.webp"
                alt="Device BG"
                fill
                className="object-contain"
              />

             

              <Image
                src="/mobile.webp"
                alt="Mobile view"
                fill
                className="object-cover p-0.5 rounded-2xl"
              />
               <Image
                              src="/oval.webp"
                              alt="Device camera"
                              width={14}
                              height={14}
                              className="absolute bg-black rounded-full top-2 left-1/2 -translate-x-1/2 z-20"
                            />
                   {/* Left buttons */}
<div className="absolute left-[-2px] top-[28%] w-[4px] h-[14%] bg-black rounded-full"></div>
<div className="absolute left-[-2px] top-[46%] w-[4px] h-[12%] bg-black rounded-full"></div>

{/* Right button */}
<div className="absolute right-[-3px] top-[36%] w-[5px] h-[12%] bg-black rounded-full"></div>


            </motion.div>
          </motion.div>

          {/* MOBILE 2 - RIGHT */}
          <motion.div
            className="relative w-[150px] sm:w-[220px] lg:w-[250px] h-[300px] sm:h-[450px] lg:h-[500px]"
            initial="hidden"
            whileInView="visible"
            animate="animate"
            variants={phoneVariants}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div animate={rotationVariants2.animate} className="w-full h-full relative">
              <Image
                src="/device-bg.webp"
                alt="Device BG"
                fill
                className="object-contain"
              />

              <Image
                src="/mobile2.webp"
                alt="Mobile view"
                fill
                className="object-cover p-[2px] rounded-2xl"
              />
   <Image
                              src="/oval.webp"
                              alt="Device camera"
                              width={14}
                              height={14}
                              className="absolute bg-black rounded-full top-2 left-1/2 -translate-x-1/2 z-20"
                            />
                                      {/* Left buttons */}
<div className="absolute left-[-2px] top-[28%] w-[4px] h-[14%] bg-black rounded-full"></div>
<div className="absolute left-[-2px] top-[46%] w-[4px] h-[12%] bg-black rounded-full"></div>

{/* Right button */}
<div className="absolute right-[-3px] top-[36%] w-[5px] h-[12%] bg-black rounded-full"></div>

                            
            </motion.div>
          </motion.div>

        </div>

        {/* RIGHT SIDE - TEXT & FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* HEADING */}
          <motion.h2
            className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Where Every Click Sparks a Connection!
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A small act of kindness today can create a lifetime of impact for someone in need.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            className="mt-8 lg:mt-10 space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`${feature.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow`}
                    variants={cardHoverVariants}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      
                      {/* ICON */}
                      <motion.div
                        className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-black/10 text-black flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={20} className="sm:w-6 sm:h-6" />
                      </motion.div>

                      {/* TEXT */}
                      <div className="min-w-0">
                        <motion.h3
                          className="font-bold text-base sm:text-lg lg:text-xl"
                          whileHover={{ color: "#000" }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.p
                          className="mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed"
                          whileHover={{ color: "#4b5563" }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}