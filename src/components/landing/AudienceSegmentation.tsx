"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Cpu, Landmark } from "lucide-react";

const audiences = [
  {
    title: "Asset Managers & Funds",
    description:
      "Diversify portfolios with Swiss-grade real estate debt. Predictable coupons, zero operational overhead.",
    icon: Briefcase,
  },
  {
    title: "Crypto-Native Treasuries",
    description:
      "Park idle stablecoins in yield-bearing RWAs regulated offshore. Hedge against crypto volatility.",
    icon: Cpu,
  },
  {
    title: "Fintechs & Platforms",
    description:
      "Offer high-yield savings products to your users powered by Tortuga's white-label RWA infrastructure.",
    icon: Landmark,
  },
];

export function AudienceSegmentation() {
  return (
    <section id="institutions" className="py-24 bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who We Serve
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6">
                <audience.icon className="w-6 h-6 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

