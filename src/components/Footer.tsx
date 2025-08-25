// src/components/Footer.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Phone, Mail, X, MapPin } from "lucide-react";

const WA_NUMBERS = [
  { id: "wa1", label: "WhatsApp 1", number: "919897682976" },
  { id: "wa2", label: "WhatsApp 2", number: "918445876886" },
];
const FB_PAGE = "https://www.facebook.com/ganpati.enterprises";
const CALL_NUMBER = "+919897682976";
const MAIL_TO = "ajay.shamli123@gmail.com";

// Exact location
const MAP_CENTER = "29.4480543,77.3120982"; // Ganpati Enterprises lat/lng
const MAP_QUERY = "Ganpati+Enterprises,Chandigarh";

export default function Footer() {
  const [waOpen, setWaOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const waRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!waRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!waRef.current.contains(e.target)) setWaOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const openWhatsApp = (num: string) => {
    const href = `https://wa.me/${num}`;
    window.open(href, "_blank");
    setWaOpen(false);
  };

  const openFacebook = () => window.open(FB_PAGE, "_blank");
  const openCall = () => (window.location.href = `tel:${CALL_NUMBER}`);
  const openMail = () => (window.location.href = `mailto:${MAIL_TO}`);
  const openMap = () => setMapOpen(true);

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-black to-gray-900 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + brief */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-bold">
                GE
              </div>
              <div>
                <div className="font-semibold text-lg">Ganpati Enterprises</div>
                <div className="text-xs text-neutral-400">
                  Premium snacks, gift packs & bulk supplies
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm">
              Trusted wholesaler for 30+ years. We supply bakery, biscuits,
              chocolates, juices, namkeen and curated gift packs across cities
              including Chandigarh & Delhi.
            </p>

            <div className="flex items-center gap-3 relative">
              {/* WhatsApp popover */}
              <div className="relative" ref={waRef}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setWaOpen((s) => !s);
                  }}
                  aria-expanded={waOpen}
                  aria-controls="wa-popover"
                  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition inline-flex items-center gap-2"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </button>

                {waOpen && (
                  <motion.div
                    id="wa-popover"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute left-0 mt-2 w-56 rounded-lg bg-neutral-900/95 border border-white/6 p-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-neutral-300">
                        Chat on WhatsApp
                      </div>
                      <button
                        onClick={() => setWaOpen(false)}
                        className="p-1 rounded hover:bg-white/5"
                      >
                        <X className="w-4 h-4 text-neutral-300" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-2">
                      {WA_NUMBERS.map((w) => (
                        <button
                          key={w.id}
                          onClick={() => openWhatsApp(w.number)}
                          className="text-left px-3 py-2 rounded hover:bg-white/5 transition flex items-center gap-3"
                        >
                          <MessageCircle className="w-4 h-4 text-green-300" />
                          <div>
                            <div className="text-sm">{w.label}</div>
                            <div className="text-xs text-neutral-500">
                              Tap to open chat
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Facebook */}
              <button
                onClick={openFacebook}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-400" />
              </button>

              {/* Call */}
              <button
                onClick={openCall}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                title="Call"
              >
                <Phone className="w-5 h-5 text-indigo-300" />
              </button>

              {/* Mail */}
              <button
                onClick={openMail}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                title="Email"
              >
                <Mail className="w-5 h-5 text-rose-400" />
              </button>

              {/* Map */}
<button
  onClick={() => setMapOpen(true)}
  className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
  title="Find us on map"
>
  <MapPin className="w-5 h-5 text-green-400" />
</button>

            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="font-semibold mb-4">Quick Links</div>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#home" className="text-neutral-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-neutral-300 hover:text-white">
                About
              </a>
              <a href="#products" className="text-neutral-300 hover:text-white">
                Products
              </a>
              <a href="#services" className="text-neutral-300 hover:text-white">
                Services
              </a>
              <a href="#pricing" className="text-neutral-300 hover:text-white">
                Pricing
              </a>
              <a href="#contact" className="text-neutral-300 hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & newsletter */}
          <div className="flex flex-col">
            <div className="font-semibold mb-4">Contact</div>
            <div className="text-sm text-neutral-300">{MAIL_TO}</div>
            <div className="text-sm text-neutral-300 mt-2">{CALL_NUMBER}</div>

            <div className="mt-6">
              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  aria-label="Email for newsletter"
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 px-3 py-2 text-sm font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
          <div>
            © {new Date().getFullYear()} Ganpati Enterprises. All rights
            reserved.
          </div>
          <div className="mt-3 md:mt-0">
            Made with ❤️ — Designed for businesses
          </div>
        </div>
      </div>

      {/* back to top */}
      <div className="fixed right-6 bottom-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-full bg-white/6 px-3 py-2 text-sm text-white shadow-lg"
          aria-label="Back to top"
        >
          ↑ Top
        </motion.button>
      </div>

     {/* Map Modal */}
{mapOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="relative w-[90%] max-w-3xl h-[400px] bg-white/5 rounded-lg overflow-hidden">
      <button
        onClick={() => setMapOpen(false)}
        className="absolute top-2 right-2 p-2 rounded-md bg-white/10 hover:bg-white/20 text-white z-10"
      >
        <X className="w-5 h-5" />
      </button>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.3408978850575!2d77.3120981747967!3d29.44805433290974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c2f758744e2e1%3A0x66321c644df45139!2sGanpati%20Enterprises!5e0!3m2!1sen!2sin!4v1756104668422!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
)}

    </footer>
  );
}
