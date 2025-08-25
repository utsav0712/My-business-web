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
    src: "/images/products/p1.jpg",
    name: "Bakery Delight",
    description: "Freshly baked breads and cakes, soft and delicious.",
    details:
      "Our Bakery Delight range includes artisan breads, muffins and layered cakes made daily using quality ingredients.Made with premium ingredients, these cookies offer a perfect balance of buttery richness and chocolatey goodness.                Ingredients are flour, sugar, fats, 100% Eggless ",
  },
  {
    id: 2,
    src: "/images/products/p2.jpg",
    name: "Assorted Biscuits",
    description: "Crispy, crunchy biscuits in assorted flavors.",
    details:
      "Assorted Biscuits collection: butter, chocolate cream, digestive and many more. Long shelf life with attractive wholesale pricing. Ingredients are flour, fat, and a leavening agent, milk, sugar, 100% Eggless",
  },
  {
    id: 3,
    src: "/images/products/p3.jpg",
    name: "Premium Chocolates",
    description: "Rich, smooth chocolates perfect for gifting.",
    details:
      "Premium Chocolates — wafer, truffles, and bars with dark, milk and flavored varieties. Ingredients are sugar, refined wheat flour, milk solids, cocoa solids, and vegetable fats, emulsifier, powder milk.",
  },
  {
    id: 4,
    src: "/images/products/p4.jpg",
    name: "Real Fruit Juice",
    description: "Refreshing juices made with real fruits.",
    details:
      "Real juice, specifically Real Fruit Power Mixed Fruit juice, contains a mix of fruit concentrates and purees, including apple, orange, guava, apricot, mango, banana, lime, and passion fruit. It also includes sugar, acidity regulator, antioxidant, stabilizer, permitted natural color, and added natural and nature-identical flavor and No added preservatives. ",
  },
  {
    id: 5,
    src: "/images/products/p5.jpg",
    name: "Lahori Jeera",
    description: "Traditional masala with authentic Lahori taste.",
    details:
      "Lahori Zeera (or Zeera) contains ingredients like purified carbonated water, sugar, lemon juice concentrate, black salt, cumin seed, black pepper, dry ginger powder, and natural flavors and colors."
  },
  {
    id: 6,
    src: "/images/products/p6.jpg",
    name: "Spicy Namkeen",
    description: "Crispy namkeen with a spicy twist for snack time.",
    details:
      "Bikano namkeen ingredients vary by product, but commonly include edible vegetable oils, chickpea flour (besan), split lentils (dal), peanuts, dried green peas, rice flakes, cornflakes, dried fruits (like raisins), and a blend of spices such as red chilli powder, turmeric, cumin, and coriander.",
  },
  {
    id: 7,
    src: "/images/products/p7.jpg",
    name: "Kurkure Pack",
    description: "Fun, crunchy snack loved by everyone.",
    details:
      "Kurkure ingredients vary by flavor but typically include rice meal, corn meal, gram meal, and edible vegetable oil, along with seasonings like spices (chili, onion, garlic), salt, sugar, and citric acid.",
  },
  {
    id: 8,
    src: "/images/products/p8.jpg",
    name: "Lays Chips",
    description: "Light, crispy potato chips in classic flavor.",
    details:
      "Lay's ingredients vary by flavor but typically include potatoes, edible vegetable oil, salt, and flavorings. For instance, classic Lay's chips often contain potatoes, corn oil, and salt, while other flavors add ingredients like sugar, spices, and cheese powder for their distinct tastes. ",
  },
  {
    id: 9,
    src: "/images/products/p9.jpg",
    name: "Panchvati Namkeen",
    description: "Authentic Panchvati namkeen mix, perfect for tea time.",
    details:
      "Panchwati namkeen ingredients vary by product, but common components include gram pulse flour, moth pulse flour, edible vegetable oil, and various spices (like red chili powder, turmeric, and asafoetida). Specific products can also contain other ingredients such as peanuts, lentils (masoor, mung), wheat flour, rice flakes, cornflakes, raisins, and sugar. ",
  },
  {
    id: 10,
    src: "/images/products/p10.jpg",
    name: "Satmola Namkeen",
    description: "Tangy, spicy Satmola namkeen with a desi touch.",
    details:
      "Satmola namkeen ingredients vary by product, but generally include gram flour, edible vegetable oil, rice flakes, peanuts, sago, lentils, and spices and condiments like turmeric, cumin, chilli, and mango powder. Specific ingredients in a Satmola namkeen product, like the Khatta Meetha Namkeen, also include sugar powder, salt, and citric acid, while other varieties, such as Bikaneri Bhujia, feature a secret blend of spices.",
  },
  {
    id: 11,
    src: "/images/products/p11.jpg",
    name: "Kamla Rusk",
    description: "Crispy golden rusk, best paired with tea.",
    details:
      "Kamla Rusk: twice-baked rusks with a golden crunch. Perfect companion for tea/coffee and ideal for small cafes or retail snack aisles. Rusk is manufactured from wheat flour, salt and a raising agent by a traditionally slow process of baking, drying, gristing and blending to produce a consistently high quality product.",
  },
  {
    id: 12,
    src: "/images/products/p12.jpg",
    name: "Fun Top-Sauce",
    description: "Tangy tomato sauce to make meals tastier.",
    details:
      "FunTop sauces contain vegetable pulp, sugar, salt, and spices, with specific ingredients varying by product. The Continental Sauce includes vegetable pulp, sugar, salt, onion powder, garlic powder, chili powder, and common condiments, plus regulators like E260 (acetic acid) and thickeners such as E1422 and E415. ",
  },
  {
    id: 13,
    src: "/images/products/p13.jpg",
    name: "Satmola Tablets",
    description: "Digestive tablets with tangy masala punch.",
    details:
      "Satmola tablets contain a blend of natural digestive ingredients like cumin (jeera), black pepper (kali mirch), and ginger (shunthi), along with other traditional spices and herbs such as imli (tamarind) and mint.",
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 12 }}
        transition={{ duration: 0.18 }}
        className="relative bg-gray-900 text-white rounded-2xl max-w-xl w-full mx-4 p-6 shadow-2xl z-60"
      >
        <button
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 text-neutral-300 hover:text-white"
        >
          ✕
        </button>

        <div className="flex gap-4">
          <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={product.src} alt={product.name} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h3 id={`modal-title-${product.id}`} className="text-lg font-semibold">
              {product.name}
            </h3>
            <div className="text-xs text-neutral-300 mt-1">{product.description}</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-neutral-300 leading-relaxed">{product.details}</div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-3 py-1 text-xs font-semibold shadow-md hover:shadow-indigo-500/30 transition"
          >
            Enquire
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 text-xs text-neutral-300 underline hover:text-white transition"
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
      className="py-20 px-6 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-sky-800/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-400">Our Products</h2>
        <p className="text-neutral-300 max-w-2xl mx-auto mb-12">
          Premium wholesale products curated for retailers and gift packs —
          bakery, snacks, chocolates, juices and more.
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
              className="group relative w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md shadow-lg 
                         border border-transparent hover:border-indigo-500/50 transition-all duration-300 opacity-0 translate-y-4"
            >
              {/* image */}
              <div className="relative h-44 md:h-52 w-full overflow-hidden">
                <motion.div
                  initial={false}
                  whileHover={{ filter: "blur(3px) scale(1.03)" }}
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
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-sm font-semibold text-white tracking-wide">{p.name}</div>
                </div>
              </div>

              {/* content */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-100 font-medium">{p.name}</div>
                  <div className="text-xs text-indigo-400 font-semibold">Wholesale</div>
                </div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">{p.description}</p>

                {/* buttons */}
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-3 py-1 text-xs font-semibold shadow-md hover:shadow-indigo-500/30 transition"
                  >
                    Enquire
                  </button>
                  <button
                    onClick={() => setSelected(p)}
                    className="text-xs text-neutral-300 underline hover:text-white transition"
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
