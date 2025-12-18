"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Camera,
  MessageCircle,
  ShieldCheck,
  Compass,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export const Features = () => {

  const cards = [
    { 
      icon: Users, 
      title: "Seamless Connections", 
      desc: "Stay in touch with friends, family, and like-minded people with just a tap. Connect globally and build meaningful relationships on MyBindle.",
      ariaLabel: "Connect with friends and family seamlessly"
    },
    { 
      icon: Camera, 
      title: "Share Your Story", 
      desc: "Upload photos, videos, and updates to let the world know what's happening in your life. Express yourself freely on MyBindle.",
      ariaLabel: "Share your photos and videos"
    },
    { 
      icon: MessageCircle, 
      title: "Real-Time Chat", 
      desc: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging on MyBindle.",
      ariaLabel: "Chat in real-time with instant messaging"
    },
    { 
      icon: ShieldCheck, 
      title: "Privacy First", 
      desc: "Your data, your control. We prioritize your privacy with world-class security features to keep you protected.",
      ariaLabel: "Privacy protected with security features"
    },
    { 
      icon: Compass, 
      title: "Discover & Explore", 
      desc: "Find trending content, join communities, and follow pages that match your interests. Explore endless possibilities.",
      ariaLabel: "Discover trending content and communities"
    },
    { 
      icon: Briefcase, 
      title: "Grow Your Business", 
      desc: "Use our platform to market your brand, connect with customers, and build meaningful relationships that drive growth.",
      ariaLabel: "Business growth and marketing tools"
    }
  ];

  const [index, setIndex] = useState(0);
  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(255, 83, 73, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const carouselVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.12,
      boxShadow: "0 10px 25px rgba(255, 83, 73, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section 
      className="min-h-[80vh] md:min-h-screen text-center px-4 sm:px-6 py-16 md:py-24 mt-20 md:mt-32 max-w-7xl mx-auto"
      aria-labelledby="features-title"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 
          id="features-title"
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Features That Keep You Hooked!
        </h2>
        <motion.p
          className="font-medium text-base sm:text-lg md:text-xl mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Meet, Chat, Share – Anytime, Anywhere!
        </motion.p>
      </motion.div>

      {/* Desktop Grid */}
      <motion.div
        className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={idx}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              aria-label={card.ariaLabel}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow h-full flex flex-col text-left"
                variants={cardHoverVariants}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff5349]/10 text-[#ff5349] mb-4 md:mb-6"
                  whileHover="hover"
                  variants={iconHoverVariants}
                >
                  <Icon size={26} aria-hidden="true" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="font-bold text-xl md:text-2xl mb-3 md:mb-4 text-gray-900"
                  whileHover={{ color: "#ff5349" }}
                >
                  {card.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow"
                  whileHover={{ color: "#555" }}
                >
                  {card.desc}
                </motion.p>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Mobile Carousel */}
      <div className="md:hidden mt-12 sm:mt-16 relative px-2">
        <AnimatePresence initial={false} mode="wait">
          <motion.article
            key={index}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg text-left mx-auto w-full"
            aria-label={cards[index].ariaLabel}
            aria-live="polite"
          >
            {/* Icon */}
            <motion.div
              className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#ff5349]/10 text-[#ff5349] mb-6"
              whileHover="hover"
              variants={iconHoverVariants}
            >
              {React.createElement(cards[index].icon, { size: 30, "aria-hidden": "true" })}
            </motion.div>

            {/* Title */}
            <h3 className="font-bold text-2xl sm:text-3xl mb-3 text-gray-900">
              {cards[index].title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {cards[index].desc}
            </p>

            {/* Indicator Dots */}
            <div className="flex gap-2 justify-center mt-6">
              {cards.map((_, i) => (
                <motion.button
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "bg-[#ff5349] w-8" : "bg-gray-300 w-2"
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to feature ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.article>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevCard}
          className="absolute top-1/2 -left-4 sm:left-0 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md text-[#ff5349] z-10"
          aria-label="Previous feature"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHoverVariants}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={nextCard}
          className="absolute top-1/2 -right-4 sm:right-0 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md text-[#ff5349] z-10"
          aria-label="Next feature"
          whileHover="hover"
          whileTap="tap"
          variants={buttonHoverVariants}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Mobile Indicator Text */}
      <motion.p
        className="md:hidden text-center text-gray-500 text-sm mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feature {index + 1} of {cards.length}
      </motion.p>
    </section>
  );
};