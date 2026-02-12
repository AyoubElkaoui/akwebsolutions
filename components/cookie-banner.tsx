"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-lg rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl md:bottom-4 md:left-6 md:right-auto md:p-5"
        >
          <button
            onClick={decline}
            className="absolute right-3 top-3 text-white/30 transition-colors hover:text-white/60"
            aria-label="Sluiten"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-3 flex items-center gap-2">
            <Cookie className="h-5 w-5 text-[#B39DDB]" />
            <span className="text-sm font-semibold text-white">Cookies</span>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-white/50">
            Wij gebruiken cookies om je ervaring te verbeteren.{" "}
            <Link
              href="/cookies"
              className="text-[#B39DDB] underline underline-offset-2 transition-colors hover:text-white"
            >
              Meer info
            </Link>
          </p>

          <div className="flex gap-3">
            <button
              onClick={accept}
              className="rounded-lg bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-[#7B4FB5]/25"
            >
              Accepteren
            </button>
            <button
              onClick={decline}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              Weigeren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
