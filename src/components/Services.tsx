// src/components/Services.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { PackageSearch, Store, Share2 } from "lucide-react";

const CARDS = [
  {
    key: "wholesale",
    title: "Wholesale",
    desc:
      "Bulk supply of premium snacks, bakery, chocolates, juices and dry fruits with competitive pricing and fast dispatch.",
    points: ["Bulk orders", "Best margins", "Reliable logistics"],
    Icon: PackageSearch,
  },
  {
    key: "retail",
    title: "Retail",
    desc:
      "Curated product mix for retail counters and modern trade with attractive packaging and fast-moving SKUs.",
    points: ["High-demand SKUs", "Attractive packaging", "Repeat supply"],
    Icon: Store,
  },
  {
    key: "distributor",
    title: "Distributors",
    desc:
      "We enable distributors with consistent inventory, seasonal gift packs, and city-wise servicing & more.",
    points: ["Steady inventory", "Festive gift packs", "City-wise servicing"],
    Icon: Share2,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 px-6 bg-white text-gray-900"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="opacity-0 translate-y-3 text-3xl md:text-4xl font-bold text-indigo-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="opacity-0 translate-y-3 mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            We work with retailers, wholesalers and distributors — delivering
            premium, fast-moving products and festive gift solutions.
          </motion.p>

          {/* animated underline */}
          <motion.div
            initial={false}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="opacity-0 mx-auto mt-6 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 rounded-full"
          />
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((s, idx) => {
            const Icon = s.Icon;
            return (
              <motion.article
                key={s.key}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="opacity-0 translate-y-4 group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-md hover:shadow-indigo-500/30 transition"
                  >
                    Enquire Now
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById("pricing");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="text-xs underline text-gray-600 hover:text-indigo-600 transition"
                  >
                    View Pricing
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
