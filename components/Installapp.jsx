"use client";
import React from "react";
import { motion } from "framer-motion";

export const Installapp = () => {
  const steps = [
    {
      number: "01",
      color: "text-red-500",
      title: "Download",
      desc: "Open Play Store or App Store",
    },
    {
      number: "02",
      color: "text-orange-500", // screenshot mein orange jaisa lag raha hai
      title: "Install App",
      desc: "The app will install automatically.",
    },
    {
      number: "03",
      color: "text-blue-500",
      title: "Ready to Use",
      desc: "Sign up or log in to start exploring!",
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
        >
          How to Install Our App
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </motion.p>

        {/* Steps - Exact horizontal layout like screenshot */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative">
          {/* Connecting Lines (only on large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5  bg-gray-300 -z-10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-full w-full origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 + 0.4, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Number */}
              <div className={`text-5xl sm:text-6xl font-bold ${step.color} mb-6`}>
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg px-8 py-10 w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};