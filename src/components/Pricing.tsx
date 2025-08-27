// src/components/Pricing.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const TIERS = [
  {
    id: "starter",
    title: "Starter",
    subtitle: "Perfect for small retailers & local shops",
    features: [
      "Carefully curated SKU selection",
      "Small-batch wholesale packs",
      "Assistance with display & packaging",
    ],
    cta: "Contact for pricing",
  },
  {
    id: "business",
    title: "Business",
    subtitle: "Ideal for growing stores and resellers",
    features: [
      "Priority dispatch & restock support",
      "Seasonal gift pack options",
      "Volume discounts & repeat-buyer rates",
    ],
    cta: "Request a quote",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "For distributors, large events & corporate orders",
    features: [
      "Dedicated account manager",
      "Custom packaging & labeling",
      "Logistics coordination across cities",
    ],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 relative overflow-hidden"
    >
      {/* soft background glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-indigo-600 font-bold"
          >
            Plans & Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            viewport={{ once: true }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            We tailor pricing to your needs — order size, packaging, and delivery
            location affect the final quote. Choose a package that best describes
            your needs and contact us for a customised price.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((t, idx) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* accent stripe */}
              <div className="absolute -top-6 left-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-400 to-sky-300 shadow" />

              <h3 className="text-xl font-semibold text-gray-900">{t.title}</h3>
              <div className="mt-1 text-sm text-gray-500">{t.subtitle}</div>

              <div className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                    <div className="text-sm text-gray-700">{f}</div>
                  </div>
                ))}
              </div>

              {/* price placeholder / note */}
              <div className="mt-6 text-sm text-gray-500">
                Price varies by quantity, packaging and delivery location.
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-indigo-400/30 transition"
                >
                  {t.cta}
                </button>
              </div>

              <div className="mt-5 text-xs text-gray-400">
                We will send a customised quote after discussing your requirements.
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:shadow-indigo-400/30 transition"
          >
            Contact us for a custom quote
          </button>
        </div>
      </div>
    </section>
  );
}
