"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Track Record", value: "5+ Years" },
  { label: "Investor Losses", value: "0" },
  { label: "Project Success Rate", value: "~94%" },
  { label: "APY Coupon Range", value: "5–12%" },
];

export function TrustMetrics() {
  return (
    <section className="w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-8 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Trust Badges */}
            <div className="flex items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm font-medium text-gray-300">Powered by Estating</span>
                </div>
                 <div className="h-4 w-px bg-gray-700"></div>
                 <span className="text-sm font-medium text-gray-300">Swiss Regulation</span>
                 <div className="h-4 w-px bg-gray-700"></div>
                 <span className="text-sm font-medium text-gray-300">ISIN Certified</span>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
                {metrics.map((metric, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center md:text-right"
                    >
                        <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{metric.value}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{metric.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
