"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck, Search, Wallet, Network } from "lucide-react";

const steps = [
  {
    icon: FileCheck,
    title: "Onboard & Verify",
    description: "Institutional KYC/AML, compliance onboarding.",
  },
  {
    icon: Search,
    title: "Discover Bonds",
    description: "Explore curated Swiss-issued real estate bonds.",
  },
  {
    icon: Wallet,
    title: "Allocate & Earn",
    description: "Subscribe, receive tokenized exposure, earn yield.",
  },
  {
    icon: Network,
    title: "Integrate Web3",
    description: "Connect with custodians and DeFi protocols.",
  },
];

export function InstitutionalFlow() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Tortuga Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless, compliant pathway for institutions to access on-chain real estate yield.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-[#0a0a0a] p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-colors md:bg-transparent md:border-none md:p-0 md:text-center md:hover:border-none"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0f0f0f] border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 z-20 relative">
                  <step.icon className="w-7 h-7 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-black text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
