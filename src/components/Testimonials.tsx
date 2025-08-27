// src/components/Testimonials.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserCircle, Star, Trash } from "lucide-react";

type Review = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  createdAt: number;
  verified?: boolean;
};

const STORAGE_KEY = "ganpati_reviews_v1";

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rohit Mehra",
    role: "Retail Store Owner, Chandigarh",
    quote:
      "Consistent quality and fast dispatch. Their festive gift packs were a hit at our store!",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30,
    verified: true,
  },
  {
    id: "r2",
    name: "Aisha Khan",
    role: "Distributor, Delhi NCR",
    quote:
      "Reliable wholesale partner. Great margins on namkeen, biscuits and chocolates.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20,
    verified: true,
  },
  {
    id: "r3",
    name: "Harpreet Singh",
    role: "Supermarket Owner, Mohali",
    quote:
      "Premium gift boxes with dry fruits and sweets looked fantastic—perfect for Diwali.",
    rating: 4,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
    verified: true,
  },
  {
    id: "r4",
    name: "Neha Sharma",
    role: "Corporate Procurement, Gurugram",
    quote:
      "Smooth bulk ordering and on-time delivery for our corporate hampers. Highly recommended.",
    rating: 5,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    verified: true,
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [quote, setQuote] = React.useState("");
  const [rating, setRating] = React.useState<number>(5);
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const stored: Review[] = raw ? JSON.parse(raw) : [];
      setReviews([...stored, ...DEFAULT_REVIEWS]);
    } catch (e) {
      setReviews([...DEFAULT_REVIEWS]);
    }
  }, []);

  const persistUserReviews = (all: Review[]) => {
    const user = all.filter((r) => !r.id.startsWith("r"));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) {
      setMessage("Please add your name and review.");
      setTimeout(() => setMessage(null), 2500);
      return;
    }

    const newReview: Review = {
      id: String(Date.now()),
      name: name.trim(),
      role: role.trim() || "Customer",
      quote: quote.trim(),
      rating: Math.max(1, Math.min(5, rating)),
      createdAt: Date.now(),
      verified: false,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    persistUserReviews(updated);
    setName("");
    setRole("");
    setQuote("");
    setRating(5);
    setMessage("Thank you — your review is added.");
    setTimeout(() => setMessage(null), 2500);
  };

  const handleDelete = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    persistUserReviews(updated);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            Real feedback from retailers, distributors and corporate buyers across cities.
          </motion.p>
        </div>

        {/* Add review form */}
        <motion.form
          onSubmit={handleAddReview}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 grid gap-4 md:grid-cols-3"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 placeholder:text-gray-400"
          />
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role / City (optional)"
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 placeholder:text-gray-400"
          />
          <div className="flex gap-2">
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="p-3 rounded-lg border border-gray-200 bg-gray-50"
            >
              <option value={5}>5 — Excellent</option>
              <option value={4}>4 — Very good</option>
              <option value={3}>3 — Good</option>
              <option value={2}>2 — Fair</option>
              <option value={1}>1 — Poor</option>
            </select>
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 px-4 py-2 font-semibold text-white shadow-md"
            >
              Add Review
            </button>
          </div>
          <textarea
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Write your review..."
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 md:col-span-3"
            rows={3}
          />
        </motion.form>

        {message && (
          <div className="mb-6 text-center text-sm text-green-600">{message}</div>
        )}

        {/* reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <motion.figure
              key={r.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-gray-200 bg-white shadow-md p-5 relative"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white">
                  <UserCircle className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>

                {!r.id.startsWith("r") && (
                  <button
                    onClick={() => handleDelete(r.id)}
                    className="ml-auto text-gray-400 hover:text-red-500"
                    title="Delete review"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < r.rating
                        ? "w-4 h-4 text-yellow-400"
                        : "w-4 h-4 text-gray-300"
                    }
                  />
                ))}
              </div>

              <blockquote className="mt-3 text-sm text-gray-700">
                “{r.quote}”
              </blockquote>

              <div className="mt-4 text-xs text-gray-500 flex items-center justify-between">
                <span>{r.verified ? "Verified Client" : "User submitted"}</span>
                <span>{new Date(r.createdAt).toLocaleDateString()}</span>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
