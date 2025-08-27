// src/components/About.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT: Text content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500">
            About Our Wholesale Shop
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We are a <strong className="text-gray-900">trusted wholesaler</strong> with over{" "}
            <strong className="text-gray-900">30 years of experience</strong>. We supply a wide
            variety of premium food & snack products — bakery items, biscuits,
            chocolates, Real juice, Lahori jeera, namkeen, Kurkure, chips, dry
            fruits and more.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            During festive seasons we prepare special{" "}
            <strong className="text-gray-900">Diwali gift packs</strong>. These gift packs arrive
            from multiple sources — including Chandigarh, Delhi and other cities
            — and include bakery items, sweets, premium chocolates, juices and
            carefully selected dry fruits. All gift items are curated with{" "}
            <strong className="text-gray-900">premium quality</strong> and attractive packaging —
            perfect for corporate or retail gifting.
            We sell our products on different locations- Shamli, Kandhla, Kairana, Uun, Jalalabad and many more.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              🎁 Diwali Gift Packs (Premium)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              🚚 Sourced: Chandigarh · Bareilly · Nationwide
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              🧾 Wholesale Pricing & Bulk Discounts
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Card */}
        <motion.aside
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative rounded-2xl p-6 bg-white shadow-lg border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold shadow-md">
                GE
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Trusted wholesale partner
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Serving retailers, distributors and event planners with bulk
                supplies, seasonal gift solutions and premium packaged items.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Large inventory & fast dispatch</li>
                <li>• Curated Diwali gift packs with premium items</li>
                <li>• Special rates for bulk and repeat customers</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 shadow-sm"
                >
                  🎉 Custom Gift Packs
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600 shadow-sm"
                >
                  🏷️ Bulk Discounts
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 shadow-sm"
                >
                  🚚 Multi-City Supply
                </motion.span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 px-4 py-2 text-white font-medium hover:opacity-95 transition-shadow shadow"
                >
                  Contact Sales
                </a>

                <a
                  href="#pricing"
                  className="rounded-lg border border-gray-200 bg-transparent px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            We welcome both small retailers and large orders — ask about our
            fast festive packaging options.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
