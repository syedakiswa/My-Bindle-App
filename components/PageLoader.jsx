'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true); // True se shuru karo!
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Pehli baar - 2 seconds ke baad hide karo
    if (isFirstLoad.current) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        isFirstLoad.current = false;
      }, 2000);

      return () => clearTimeout(timer);
    }

    // Baad mein jab route change ho
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  const loaderVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.3 } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const dotVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        delay: i * 0.1,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          variants={loaderVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Spinner */}
            <motion.div
              variants={spinnerVariants}
              animate="rotate"
              className="w-14 h-14 border-4 border-gray-300 dark:border-gray-700 border-t-[#ff5349] dark:border-t-[#ff6b35] rounded-full"
            />

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-gray-600 dark:text-gray-400 font-semibold text-base tracking-wide"
            >
              Loading...
            </motion.p>

            {/* Dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={dotVariants}
                  animate="animate"
                  className="w-2 h-2 bg-[#ff5349] dark:bg-[#ff6b35] rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};