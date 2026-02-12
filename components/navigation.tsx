"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Diensten",
    href: "/diensten",
    submenu: [
      { name: "Web Development", href: "/diensten#web-development" },
      { name: "SEO Optimalisatie", href: "/diensten#seo" },
      { name: "E-commerce", href: "/diensten#ecommerce" },
      { name: "Maatwerk Software", href: "/diensten#maatwerk" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        // At top of page — always show, no floating style
        setVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setIsMobileMenuOpen(false);
        }
      }
    }
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed left-0 right-0 top-0 z-50 transition-colors duration-300",
            isScrolled
              ? "mx-auto mt-4 max-w-5xl rounded-2xl border border-white/10 bg-black/70 shadow-lg shadow-black/20 backdrop-blur-xl lg:left-4 lg:right-4"
              : "bg-transparent",
          )}
        >
          <nav className={cn(isScrolled ? "px-4" : "container-custom")}>
            <div
              className={cn(
                "flex items-center justify-between",
                isScrolled ? "h-16" : "h-20",
              )}
            >
              {/* Logo */}
              <Link href="/" className="relative z-50 flex items-center gap-3">
                <div
                  className={cn(
                    "relative transition-all",
                    isScrolled ? "h-9 w-9" : "h-12 w-12",
                  )}
                >
                  <Image
                    src="/fulllogo_transparent_nobuffer.png"
                    alt="AK Web Solutions"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <div
                    className={cn(
                      "font-bold leading-none text-white",
                      isScrolled ? "text-base" : "text-lg",
                    )}
                  >
                    AK Web Solutions
                  </div>
                  {!isScrolled && (
                    <div className="text-xs font-medium text-white/50">
                      Web Development & Design
                    </div>
                  )}
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-1 lg:flex">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.submenu && setActiveSubmenu(item.name)
                    }
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                        pathname === item.href
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-black/90 shadow-xl backdrop-blur-xl"
                        >
                          <div className="p-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden items-center gap-4 lg:flex">
                <Link href="/contact">
                  <Button
                    size={isScrolled ? "sm" : "default"}
                    className="rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#7B4FB5]/30"
                  >
                    Start Project
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </nav>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu - separate from header so it doesn't animate with it */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 bg-black/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-custom h-full overflow-y-auto pb-8 pt-24">
              <div className="space-y-2">
                {navigation.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                        pathname === item.href
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                      onClick={() =>
                        !item.submenu && setIsMobileMenuOpen(false)
                      }
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeSubmenu === item.name && "rotate-180",
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveSubmenu(
                              activeSubmenu === item.name ? null : item.name,
                            );
                          }}
                        />
                      )}
                    </Link>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          <div className="mt-2 space-y-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 border-t border-white/10 pt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] font-semibold text-white"
                    size="lg"
                  >
                    Start Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
