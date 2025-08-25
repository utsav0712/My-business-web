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
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-6"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
        <div className="space-y-6">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold leading-tight text-pink-400">
            Welcome to Ganpati Enterprises!
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }} className="text-xl text-gray-400">
            Your Ultimate Destination For A Wide Variety Of Treats.
          </motion.p>
        </div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold">Let’s Create Something Amazing</h2>
          <p className="text-gray-300">Reach out for services, collaborations, or just a friendly chat.</p>
          <button onClick={scrollToContact} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition">Contact Me</button>
        </motion.div>
      </div>

      <div className="mt-16 w-full">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 items-center px-6">
          {IMAGES.map((img) => (
            <motion.button
              key={img.src}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative overflow-hidden rounded-xl block focus:outline-none focus:ring-4 focus:ring-indigo-500"
              tabIndex={0}
              aria-label={img.name}
              style={{ height: 208 }} // fixed height for consistent layout (h-52 ~ 208px)
            >
              <motion.div
                variants={{ rest: { filter: "blur(0px) scale(1)" }, hover: { filter: "blur(3px) scale(1.03)" } }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                {/* next/image with fill requires parent relative and explicit height (we set style height above) */}
                <Image src={img.src} alt={img.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 50vw, 25vw" priority={false} />
              </motion.div>

              <motion.div
                variants={{ rest: { opacity: 0, translateY: 10 }, hover: { opacity: 1, translateY: 0 } }}
                transition={{ duration: 0.28 }}
                className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4"
              >
                <div className="text-center">
                  <div className="text-sm font-medium text-white">{img.name}</div>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
