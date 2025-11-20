"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Shield, Link as LinkIcon } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Proven Assets",
    description: "Real estate-backed bonds with audited structures.",
  },
  {
    icon: TrendingUp,
    title: "Stable Yield",
    description: "5–12% APY, coupon-paying, fully collateralized.",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "Swiss law, ISIN, institutional-grade documentation.",
  },
  {
    icon: LinkIcon,
    title: "Seamless On-Chain",
    description: "Tokens designed for custodians, treasuries, and DeFi.",
  },
];

export function ValueProposition() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="sticky top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              What is Tortuga?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 leading-relaxed mb-8"
            >
              Tortuga is an institutional RWA platform bringing Swiss-issued,
              ISIN-certified, real estate-backed bonds on-chain as compliant,
              yield-bearing tokens.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-1 w-20 bg-emerald-500 rounded-full"
            />
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
