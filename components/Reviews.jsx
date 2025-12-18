
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  { name: "Emily R", country: "USA", text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!", img: "/prf1.png" },
  { name: "Amit K", country: "India", text: "Finally, a social network that understands what I need! The privacy features are a game-changer.", img: "/prf2.png" },
  { name: "Sophie M", country: "UK", text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat makes every interaction special.", img: "/prf3.png" },
  { name: "Javier L", country: "Spain", text: "Running my small business has never been easier! This platform helped me connect with customers and grow my brand.", img: "/prf4.png" },
  { name: "Lucas T", country: "Brazil", text: "The perfect blend of fun and functionality! Everything I need is right here.", img: "/prf5.png" },
  { name: "Nora S", country: "Canada", text: "I've tried many social platforms, but this one truly stands out. Everything just makes sense.", img: "/prf6.png" },
];

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
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverVariants = {
  hover: {
    y: -10,
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const Reviews = () => {
  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>

        {/* DESKTOP GRID */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={hoverVariants.hover}
              className="bg-white rounded-2xl p-6 shadow-md cursor-pointer group"
            >
              {/* Stars */}
              <motion.p
                className="text-yellow-400 mb-3 text-lg"
                whileHover={{ scale: 1.1 }}
              >
                ★★★★★
              </motion.p>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-800 transition-colors">
                {item.text}
              </p>

              {/* Profile */}
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.country}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE HORIZONTAL SCROLL */}
        <motion.div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex-shrink-0 w-[80%] bg-white rounded-2xl p-6 shadow-md snap-start cursor-pointer"
            >
              <p className="text-yellow-400 mb-3">★★★★★</p>
              <p className="text-gray-600 text-sm mb-6">{item.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="#Herosection">
            <motion.button
              className="px-8 py-2 rounded-full bg-white shadow-md text-red-500 font-medium hover:bg-red-500 hover:text-white transition"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 10px 25px rgba(255, 83, 73, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              See More
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};