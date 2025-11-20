"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Hero3D from "./Hero3D";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      {/* 3D Background - Positioned to the right on desktop */}
      <div className="absolute inset-0 pointer-events-none">
        <Hero3D className="left-0 lg:left-1/3 w-full lg:w-2/3" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">
              Swiss-Regulated • ISIN-Certified • Powered by Estating
            </span>
          </motion.div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
            Institutional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              Real World Assets
            </span>
            , <br />
            On-Chain.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
            Tortuga bridges institutional real estate bonds to Web3 – Swiss-issued,
            ISIN-certified, fully collateralized, and backed by 5+ years of zero
            investor losses.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Book Institutional Call
            </Button>
            <Button variant="secondary" size="lg" rightIcon={<Globe className="w-4 h-4" />}>
              View Live Bonds
            </Button>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-0.5"
            >
              Download Institutional Overview
            </a>
          </div>
        </motion.div>

        {/* Right Side Spacer */}
        <div className="hidden lg:block h-[600px]">
            {/* 
              We leave this empty. The Hero3D component is positioned absolutely behind this area. 
              This div just pushes the left content to its column.
            */}
        </div>
      </div>
      
      {/* Bottom Gradient Fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
