// src/components/About.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT: Image / Logo Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/about.jpg"
            alt="Utsav Crockery Showcase"
            className="w-full h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl text-gray-900 font-semibold shadow-lg">
            ✨ 20+ Years of Trust
          </div>
        </motion.div>

        {/* RIGHT: Text content */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            About Utsav Crockery
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to <strong className="text-gray-900">Utsav Crockery</strong> – your trusted
            destination for <strong className="text-gray-900">premium crockery and household
            essentials</strong>, serving homes with <strong className="text-gray-900">20+ years of
            experience.</strong>
          </p>

          <div className="grid gap-4">
            <div className="p-4 rounded-xl bg-gray-100 border border-gray-200 backdrop-blur-sm">
              <h3 className="font-semibold text-gray-900">🍽 Crockery</h3>
              <p className="text-sm text-gray-600">
                Dinner Sets, Tea & Coffee Sets, Plates, Bowls, Glassware, Jars, Serving Dishes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 border border-gray-200 backdrop-blur-sm">
              <h3 className="font-semibold text-gray-900">🏠 Household Items</h3>
              <p className="text-sm text-gray-600">
                Kitchen tools, Storage containers, Plastic & Steel daily-use essentials.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-100 border border-gray-200 backdrop-blur-sm">
              <h3 className="font-semibold text-gray-900">🎁 Gifting Options</h3>
              <p className="text-sm text-gray-600">
                Exclusive gift packs & combos – perfect for weddings, festivals, and occasions.
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600">
              🎉 Custom Gift Packs
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
              🚚 Nationwide Sourcing
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
              🧾 Premium Quality, Best Prices
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-lg rounded-xl shadow-lg transition"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
