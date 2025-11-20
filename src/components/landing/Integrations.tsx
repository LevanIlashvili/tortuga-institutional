"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Landmark, Coins, Building, Server } from "lucide-react";

const useCases = [
  {
    title: "On-Chain Treasury Yield",
    description: "Idle stablecoin allocation for DAOs and corporate treasuries.",
    icon: Wallet,
  },
  {
    title: "Collateral for Lending",
    description: "Use RWA tokens as high-quality collateral in DeFi protocols.",
    icon: Coins,
  },
  {
    title: "Real Estate Allocation",
    description: "Portfolio diversification without physical management.",
    icon: Building,
  },
  {
    title: "Structured Products",
    description: "Create tranches or derivatives powered by Tortuga yield.",
    icon: Server,
  },
];

export function Integrations() {
  return (
    <section className="py-24 bg-[#0f0f0f] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The RWA Layer for Web3
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tortuga connects institutional capital with decentralized finance.
          </p>
        </div>

        {/* Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20">
          {/* Left Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-full md:w-64"
          >
            <Landmark className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold">Institutional Capital</h3>
            <p className="text-xs text-gray-500 mt-1">Funds, Treasuries, Family Offices</p>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="rotate-90 md:rotate-0"
          >
            <ArrowRight className="w-6 h-6 text-emerald-500" />
          </motion.div>

          {/* Center Block (Tortuga) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/30 p-8 rounded-2xl text-center w-full md:w-80 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 text-black font-bold">T</div>
            <h3 className="text-xl font-bold text-white">Tortuga RWA Layer</h3>
            <p className="text-sm text-emerald-200 mt-2">Tokenization, Compliance, Yield</p>
          </motion.div>

           {/* Arrow 2 */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="rotate-90 md:rotate-0"
          >
            <ArrowRight className="w-6 h-6 text-emerald-500" />
          </motion.div>

          {/* Right Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl text-center w-full md:w-64"
          >
            <Coins className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold">DeFi Economy</h3>
            <p className="text-xs text-gray-500 mt-1">Protocols, Exchanges, Custodians</p>
          </motion.div>
        </div>

        {/* Use Case Tiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-emerald-500/30 transition-colors group"
            >
              <useCase.icon className="w-8 h-8 text-gray-500 group-hover:text-emerald-400 transition-colors mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
