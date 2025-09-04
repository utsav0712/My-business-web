// src/components/Contact.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBERS = [
  { id: "sales", label: "WhatsApp 1", number: "919837517668" },
  { id: "support", label: "WhatsApp 2", number: "919457991688" },
];

const PRIMARY_PHONE = "+919837517668";
const SALES_EMAIL = "rajang851@gmail.com";

function buildWhatsAppHref(number: string, text?: string) {
  const msg = text ?? "Hello, I would like to enquire about products and pricing.";
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
function buildMailto(subject: string, body: string) {
  return `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState<"email" | "whatsapp" | "phone">("email");
  const [selectedWhatsapp, setSelectedWhatsapp] = useState(WHATSAPP_NUMBERS[0].id);
  const [sending, setSending] = useState(false);

  const subject = `Inquiry from website${name ? ` — ${name}` : ""}`;
  const body = [
    `Name: ${name || "-"}`,
    `Email: ${email || "-"}`,
    `Company: ${company || "-"}`,
    `Preferred contact: ${method}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    if (method === "email") {
      window.location.href = buildMailto(subject, body);
      setTimeout(() => setSending(false), 700);
      return;
    }

    if (method === "whatsapp") {
      const wp =
        WHATSAPP_NUMBERS.find((w) => w.id === selectedWhatsapp) ??
        WHATSAPP_NUMBERS[0];
      const msg = `Hello, I am ${name || "interested customer"}.\n\nCompany: ${company || "-"}\nPreferred contact: ${method}\n\nMessage:\n${message || "-"}`;
      window.open(buildWhatsAppHref(wp.number, msg), "_blank");
      setTimeout(() => setSending(false), 700);
      return;
    }

    if (method === "phone") {
      if (!PRIMARY_PHONE) {
        alert("Primary phone number not configured.");
        setSending(false);
        return;
      }
      window.location.href = `tel:${PRIMARY_PHONE}`;
      setTimeout(() => setSending(false), 700);
      return;
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white text-slate-900 relative">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-sky-600">
            Contact Us
          </h2>
          <p className="mt-2 text-slate-600">
            Tell us about your requirement — we’ll respond with a custom quote.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="grid gap-4 rounded-2xl bg-white p-6 border border-slate-200 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-xs font-medium text-slate-700">Your name</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 rounded-lg bg-white px-3 py-2 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Full name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs font-medium text-slate-700">Email</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 rounded-lg bg-white px-3 py-2 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-700">Company (optional)</span>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 rounded-lg bg-white px-3 py-2 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Company name"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-xs font-medium text-slate-700">Message</span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 rounded-lg bg-white px-3 py-2 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tell us what you need (volumes, preferred delivery city, packaging, deadline, etc.)"
            />
          </label>

          {/* Preferred contact */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-600 mr-2">Preferred contact</span>

            <label
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ${
                method === "email"
                  ? "ring-sky-500 bg-sky-50"
                  : "ring-slate-300 bg-slate-50"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name="method"
                value="email"
                checked={method === "email"}
                onChange={() => setMethod("email")}
                className="hidden"
              />
              <span className="text-xs inline-flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </span>
            </label>

            <label
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ${
                method === "whatsapp"
                  ? "ring-emerald-500 bg-emerald-50"
                  : "ring-slate-300 bg-slate-50"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name="method"
                value="whatsapp"
                checked={method === "whatsapp"}
                onChange={() => setMethod("whatsapp")}
                className="hidden"
              />
              <span className="text-xs inline-flex items-center gap-1">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </span>
            </label>

            <label
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ${
                method === "phone"
                  ? "ring-slate-500 bg-slate-50"
                  : "ring-slate-300 bg-slate-50"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name="method"
                value="phone"
                checked={method === "phone"}
                onChange={() => setMethod("phone")}
                className="hidden"
              />
              <span className="text-xs inline-flex items-center gap-1">
                <Phone className="w-4 h-4" /> Phone
              </span>
            </label>
          </div>

          {/* WhatsApp number selector */}
          {method === "whatsapp" && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600">Choose number:</span>
              <select
                value={selectedWhatsapp}
                onChange={(e) => setSelectedWhatsapp(e.target.value)}
                className="rounded-lg bg-white px-3 py-2 text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {WHATSAPP_NUMBERS.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit + quick links */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={sending}
                className="rounded-full bg-gradient-to-r from-sky-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 transition"
              >
                {sending
                  ? "Opening…"
                  : method === "whatsapp"
                  ? "Chat on WhatsApp / Send"
                  : method === "phone"
                  ? "Call"
                  : "Send via Email"}
              </button>

              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="rounded-full px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50 transition inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>

            <div className="flex items-center gap-3">
              {WHATSAPP_NUMBERS.map((w) => (
                <a
                  key={w.id}
                  href={buildWhatsAppHref(w.number)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow hover:brightness-95 transition"
                  aria-label={`Chat on WhatsApp ${w.label}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{w.label}</span>
                </a>
              ))}
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ring-1 ring-slate-300 hover:bg-slate-50 transition"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            By contacting us you agree to our terms. We will never share your details.
          </p>
        </motion.form>
      </div>

      {/* Floating WhatsApp quick buttons (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {WHATSAPP_NUMBERS.map((w) => (
          <a
            key={w.id}
            href={buildWhatsAppHref(w.number)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:brightness-95 transition"
            aria-label={`Open WhatsApp ${w.label}`}
          >
            <MessageCircle className="w-5 h-5" />
            <span>{w.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
