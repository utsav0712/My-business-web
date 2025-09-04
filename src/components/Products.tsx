// src/components/Products.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Product = {
  id: number;
  src: string;
  name: string;
  description: string;
  details: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    src: "/images/products/p1.avif",
    name: "Elegant Dinner Set",
    description: "Premium ceramic dinner set for family meals.",
    details:
      "Includes plates, bowls, and serving dishes. Microwave safe, chip-resistant and durable for everyday use.",
  },
  {
    id: 2,
    src: "/images/products/p2.avif",
    name: "Classic Tea Set",
    description: "Porcelain tea cups with matching saucers.",
    details:
      "Perfect for evening tea time, available in multiple designs and colors.",
  },
  {
    id: 3,
    src: "/images/products/p3.jpg",
    name: "Crystal Glass Set",
    description: "Stylish glasses for water, juice, or cocktails.",
    details:
      "Made from high-quality glass, scratch-resistant and dishwasher safe.",
  },
  {
    id: 4,
    src: "/images/products/p4.jpg",
    name: "Designer Serving Bowls",
    description: "Perfect for salads, snacks, or curries.",
    details:
      "Available in ceramic, glass, and stainless steel.",
  },
  {
    id: 5,
    src: "/images/products/p5.webp",
    name: "Storage Containers",
    description: "Keep your food fresh with airtight plastic containers.",
    details:
      "BPA free, stackable, and easy to clean. Available in multiple sizes."
  },
  {
    id: 6,
    src: "/images/products/p6.webp",
    name: "Essential Kitchen Tools",
    description: "Durable spoons, spatulas, and ladles.",
    details:
      "Made from stainless steel and food-grade silicone.",
  },
  {
    id: 7,
    src: "/images/products/pi7.jpg",
    name: "Non-Stick Cookware Set",
    description: "Cook healthier meals with less oil.",
    details:
      "Scratch-resistant, induction-compatible, and easy to clean.",
  },
  {
    id: 8,
    src: "/images/products/pi8.jpg",
    name: "360° Spin Mop Set",
    description: "Easy-to-use mop with bucket and wringer.",
    details:
      "Includes microfiber mop head, adjustable handle, and sturdy bucket with wheels. Ideal for effortless home cleaning.",
  },
  {
    id: 9,
    src: "/images/products/pi9.webp",
    name: "Elegant Cup Set",
    description: "Stylish tea & coffee cup set for daily use and gifting.",
    details:
      "Crafted from premium ceramic with a smooth finish. Perfect for serving tea, coffee, or hot beverages. Available in multiple designs and ideal for family use or festive gifting.",
  },
  {
    id: 10,
    src: "/images/products/pi10.jpg",
    name: "Designer Tray Set",
    description: "Durable and elegant trays for serving in style.",
    details:
      "Perfect for daily use as well as special occasions. Made from high-quality materials with attractive prints and finishes. Available in multiple sizes, lightweight yet sturdy, ideal for tea, snacks, and festive serving.",
  },
  {
    id: 11,
    src: "/images/products/pi11.webp",
    name: "Snacks & Dry Fruit Serving Box",
    description: "Stylish serving box for snacks, sweets, namkeen and dry fruit box for gifting & storage.",
    details:
      "Made from premium quality material with elegant design. Ideal for parties, festive occasions, and daily serving. Lightweight, durable, and available in multiple partitions.Perfect for weddings, festivals, and gifting. Available in decorative finishes, multiple sections for dry fruits, chocolates, and sweets. Combines utility with elegance.",
  },
  {
    id: 12,
    src: "/images/products/pi12.jpg",
    name: "Bathroom Set",
    description: "Complete bathroom accessory set for daily use.",
    details:
      "Includes soap dispenser, toothbrush holder, tumbler, and soap dish. Made from high-quality plastic/ceramic with modern design. Durable, easy to clean, and available in elegant colors to enhance your bathroom look.",
  },
  {
    id: 13,
    src: "/images/products/pi13.webp",
    name: "Portable Swimming Pool",
    description: "Foldable & durable swimming pool for kids and family use.",
    details:
      "Made with heavy-duty PVC material, easy to set up and fold. Perfect for kids’ fun, summer relaxation, and outdoor activities. Available in multiple sizes and safe for home use.",
  },
];

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${product.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 12 }}
        transition={{ duration: 0.18 }}
        className="relative bg-white text-gray-800 rounded-2xl max-w-xl w-full mx-4 p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="flex gap-4">
          <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={product.src} alt={product.name} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h3 id={`modal-title-${product.id}`} className="text-lg font-semibold text-gray-900">
              {product.name}
            </h3>
            <div className="text-xs text-gray-500 mt-1">{product.description}</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600 leading-relaxed">{product.details}</div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-3 py-1 text-xs font-semibold text-white shadow-md hover:shadow-indigo-500/30 transition"
          >
            Enquire
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs text-gray-500 underline hover:text-gray-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Trusted retailer partner for retailers — premium crockery, kitchenware, and gift collections.
        </p>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {PRODUCTS.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="group relative w-full rounded-2xl overflow-hidden bg-white shadow-md border border-gray-200 hover:border-indigo-300 transition-all duration-300 opacity-0 translate-y-4"
            >
              {/* image */}
              <div className="relative h-44 md:h-52 w-full overflow-hidden">
                <motion.div
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>

                {/* overlay name */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-sm font-semibold text-white tracking-wide">{p.name}</div>
                </div>
              </div>

              {/* content */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-800 font-medium">{p.name}</div>
                  <div className="text-xs text-indigo-600 font-semibold">Retail</div>
                </div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{p.description}</p>

                {/* buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-3 py-1 text-xs font-semibold text-white shadow-md hover:shadow-indigo-500/30 transition"
                  >
                    Enquire
                  </button>
                  <button
                    onClick={() => setSelected(p)}
                    className="text-xs text-gray-500 underline hover:text-gray-700 transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}