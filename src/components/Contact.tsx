"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBERS = [
  { id: "sales", label: "WhatsApp 1", number: "919897682976" },
  { id: "support", label: "WhatsApp 2", number: "918445876886" },
];
const PRIMARY_PHONE = "+919897682976"; 
const SALES_EMAIL = "ajay.shamli123@gmail.com";

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
      // open user's mail client
      const mailto = buildMailto(subject, body);
      window.location.href = mailto;
      setTimeout(() => setSending(false), 700);
      return;
    }

    if (method === "whatsapp") {
      const wp = WHATSAPP_NUMBERS.find((w) => w.id === selectedWhatsapp) ?? WHATSAPP_NUMBERS[0];
      const msg = `Hello, I am ${name || "interested customer"}.\n\nCompany: ${company || "-"}\nPreferred contact: ${method}\n\nMessage:\n${message || "-"}`;
      const href = buildWhatsAppHref(wp.number, msg);
      window.open(href, "_blank");
      setTimeout(() => setSending(false), 700);
      return;
    }

    if (method === "phone") {
      if (!PRIMARY_PHONE) {
        alert("Primary phone number not configured.");
        setSending(false);
        return;
      }
      // open dialer
      window.location.href = `tel:${PRIMARY_PHONE}`;
      setTimeout(() => setSending(false), 700);
      return;
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-pink-400">Contact Us</h2>
          <p className="mt-2 text-neutral-300">Tell us about your requirement — we’ll respond with a custom quote.</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="grid gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-xs text-neutral-300">Your name</span>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 rounded-lg bg-neutral-900/60 px-3 py-2 ring-1 ring-white/6 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Full name" />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-neutral-300">Email</span>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 rounded-lg bg-neutral-900/60 px-3 py-2 ring-1 ring-white/6 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-xs text-neutral-300">Company (optional)</span>
            <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 rounded-lg bg-neutral-900/60 px-3 py-2 ring-1 ring-white/6 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Company name" />
          </label>

          <label className="flex flex-col">
            <span className="text-xs text-neutral-300">Message</span>
            <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 rounded-lg bg-neutral-900/60 px-3 py-2 ring-1 ring-white/6 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us what you need (volumes, preferred delivery city, packaging, deadline, etc.)" />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-neutral-300 mr-2">Preferred contact</span>

            <label className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${method === "email" ? "bg-indigo-600/20" : "bg-white/5"} cursor-pointer`}>
              <input type="radio" name="method" value="email" checked={method === "email"} onChange={() => setMethod("email")} className="hidden" />
              <span className="text-xs inline-flex items-center gap-1"><Mail className="w-4 h-4" /> Email</span>
            </label>

            <label className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${method === "whatsapp" ? "bg-indigo-600/20" : "bg-white/5"} cursor-pointer`}>
              <input type="radio" name="method" value="whatsapp" checked={method === "whatsapp"} onChange={() => setMethod("whatsapp")} className="hidden" />
              <span className="text-xs inline-flex items-center gap-1"><MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp</span>
            </label>

            {/* <label className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${method === "phone" ? "bg-indigo-600/20" : "bg-white/5"} cursor-pointer`}>
              <input type="radio" name="method" value="phone" checked={method === "phone"} onChange={() => setMethod("phone")} className="hidden" />
              <span className="text-xs inline-flex items-center gap-1"><Phone className="w-4 h-4" /> Phone</span>
            </label> */}
          </div>

          {/* If WhatsApp chosen, let user pick which number to use (labels only) */}
          {method === "whatsapp" && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-neutral-300">Choose number:</span>
              <select value={selectedWhatsapp} onChange={(e) => setSelectedWhatsapp(e.target.value)} className="rounded-lg bg-neutral-900/60 px-3 py-2 text-sm">
                {WHATSAPP_NUMBERS.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button type="submit" disabled={sending} className="rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 px-4 py-2 text-sm font-semibold shadow-md hover:shadow-indigo-500/30 transition">
                {sending ? "Opening…" : method === "whatsapp" ? "Chat on WhatsApp / Send" : "Send via Email"}
              </button>

              {/* reliable Call link (anchor) */}
              <a href={`tel:${PRIMARY_PHONE}`} className="rounded-full bg-white/5 px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 transition inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>

            <div className="flex items-center gap-3">
              {/* direct quick links for both WhatsApp numbers (labels only) */}
              {WHATSAPP_NUMBERS.map((w) => (
                <a key={w.id} href={buildWhatsAppHref(w.number)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-2 text-xs font-semibold shadow hover:brightness-95 transition" aria-label={`Chat on WhatsApp ${w.label}`}>
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>{w.label}</span>
                </a>
              ))}

              {/* direct email link */}
              <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs font-semibold shadow hover:bg-white/10 transition">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <p className="mt-2 text-xs text-neutral-400">By contacting us you agree to our terms. We will never share your details.</p>
        </motion.form>
      </div>

      {/* floating WhatsApp quick buttons (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {WHATSAPP_NUMBERS.map((w) => (
          <a key={w.id} href={buildWhatsAppHref(w.number)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold shadow-lg hover:brightness-95 transition" aria-label={`Open WhatsApp ${w.label}`}>
            <MessageCircle className="w-5 h-5 text-white" />
            <span>{w.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
