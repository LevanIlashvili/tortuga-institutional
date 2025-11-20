"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Product", href: "#product" },
  { name: "Yield & Track Record", href: "#yield" },
  { name: "Compliance", href: "#compliance" },
  { name: "For Institutions", href: "#institutions" },
  { name: "Resources", href: "#resources" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-black font-bold text-lg group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-shadow duration-300">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Tortuga
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Contact Sales
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-gray-300 hover:text-white border-b border-white/10 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              <Button variant="primary" className="w-full">
                Contact Sales
              </Button>
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
