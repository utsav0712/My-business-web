"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const IMAGES = [
  { src: "/images/img1.jpg", name: "Juices" },
  { src: "/images/img2.jpg", name: "Crisps & Snacks" },
  { src: "/images/img3.jpg", name: "Chocolates" },
  { src: "/images/img4.jpg", name: "Bakery items" },
];

export default function HomeSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-r from-white via-gray-50 to-white 
      text-gray-900 px-6"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-indigo-700"
          >
            Welcome to Ganpati Enterprises!
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600"
          >
            Your Ultimate Destination For A Wide Variety Of Treats.
          </motion.p>
        </div>

        {/* Right Call-to-action */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
            Let’s Create Something Amazing
          </h2>
          <p className="text-gray-500">
            Reach out for services, collaborations, or just a friendly chat.
          </p>
          <button
            onClick={scrollToContact}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 
            text-white rounded-xl shadow-md transition"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Image Cards */}
      <div className="mt-16 w-full">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center px-6">
          {IMAGES.map((img) => (
            <motion.button
              key={img.src}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative overflow-hidden rounded-xl block 
              focus:outline-none focus:ring-4 focus:ring-indigo-300"
              tabIndex={0}
              aria-label={img.name}
              style={{ height: 208 }}
            >
              {/* Image */}
              <motion.div
                variants={{
                  rest: { filter: "blur(0px) scale(1)" },
                  hover: { filter: "blur(3px) scale(1.03)" },
                }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={false}
                />
              </motion.div>

              {/* Overlay Name */}
              <motion.div
                variants={{
                  rest: { opacity: 0, translateY: 10 },
                  hover: { opacity: 1, translateY: 0 },
                }}
                transition={{ duration: 0.28 }}
                className="pointer-events-none absolute inset-0 flex items-end justify-center 
                bg-gradient-to-t from-black/50 to-transparent p-4"
              >
                <div className="text-center">
                  <div className="text-sm font-medium text-white">
                    {img.name}
                  </div>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
