// src/components/About.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
            About Our Wholesale Shop
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            We are a <strong className="text-white">trusted wholesaler</strong> with over{" "}
            <strong className="text-white">30 years of experience</strong>. We supply a wide variety of
            premium food & snack products — bakery items, biscuits, chocolates,
            Real juice, Lahori jeera, namkeen, Kurkure, chips, dry fruits and
            more.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            During festive seasons we prepare special <strong className="text-white">Diwali gift packs</strong>. These gift packs arrive from multiple sources —
            including Chandigarh, Delhi and other cities — and include bakery
            items, sweets, premium chocolates, juices and carefully selected dry
            fruits. All gift items are curated with <strong className="text-white">premium quality</strong>
            and attractive packaging — perfect for corporate or retail gifting.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-700/10 px-3 py-1 text-sm font-medium text-indigo-300">
              🎁 Diwali Gift Packs (Premium)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-700/8 px-3 py-1 text-sm font-medium text-sky-300">
              🚚Sourced: Chandigarh ·Bareilly ·Nationwide
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-700/10 px-3 py-1 text-sm font-medium text-emerald-300">
              🧾 Wholesale Pricing & Bulk Discounts
            </span>
          </div>
        </motion.div>

        {/* RIGHT: Glass card with badges + details */}
        <motion.aside
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.25 }}
  className="relative rounded-2xl p-6 backdrop-blur-md bg-white/20 ..."
>
          {/* animated subtle gradient background */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(56,189,248,0.04))",
            }}
          />

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold shadow-md">
                GE
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white/95">Trusted wholesale partner</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Serving retailers, distributors and event planners with bulk
                supplies, seasonal gift solutions and premium packaged items.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                <li>• Large inventory & fast dispatch</li>
                <li>• Curated Diwali gift packs with premium items</li>
                <li>• Special rates for bulk and repeat customers</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-indigo-200 shadow-sm">
                  🎉 Custom Gift Packs
                </motion.span>
                <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-sky-200 shadow-sm">
                  🏷️ Bulk Discounts
                </motion.span>
                <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-emerald-200 shadow-sm">
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
                  className="rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 transition"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-400">
            We welcome both small retailers and large orders — ask about our
            fast festive packaging options.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
