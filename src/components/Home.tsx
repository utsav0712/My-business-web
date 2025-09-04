"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const IMAGES = [
  { src: "/images/img1.jpg", name: "Dinner set" },
  { src: "/images/img2.jpg", name: "Glassware set" },
  { src: "/images/img31.jpg", name: "Festive gifting pack" },
  { src: "/images/img4.webp", name: "Kitchen Tools" },
];

export default function HomeSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="min-h-screen text-gray-900">
      {/* Hero Section with Background */}
      <div className="relative h-[80vh] flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/backimage.jpeg" 
            alt="Crockery Background"
            fill
            priority
            className="w-full h-full object-cover blur-sm"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Foreground Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Welcome to Utsav Crockery!
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Trusted quality crockery & elegant home essentials for every occasion.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-lg rounded-xl shadow-lg transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10"
        ><br />
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {IMAGES.map((img) => (
            <motion.div
              key={img.src}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-lg border border-gray-200"
              style={{ height: 240 }}
            >
              <Image
                src={img.src}
                alt={img.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-sm font-medium">
                {img.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
