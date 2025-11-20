"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const products = [
  {
    icon: Building,
    title: "Tokenized Real Estate Bonds",
    description: "Direct exposure to specific property developments.",
    tags: ["ISIN", "Fully Collateralized", "5-12% APY"],
  },
  {
    icon: Layers,
    title: "Institutional Access Pools",
    description: "Diversified exposure across multiple high-yield assets.",
    tags: ["USD / EUR", "Managed Risk", "Quarterly Yield"],
  },
  {
    icon: Zap,
    title: "DeFi Integrations",
    description: "Coming soon: Use RWA tokens as collateral in DeFi.",
    tags: ["Roadmap", "Lending", "Liquidity"],
  },
];

export function ProductGrid() {
  return (
    <section id="product" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Institutional RWA Instruments
            </h2>
            <p className="text-gray-400 max-w-xl">
              Access premium real estate yield through regulated, on-chain securities.
            </p>
          </div>
          <Button variant="outline" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
            View All Instruments
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <product.icon className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {product.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-gray-300 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Sample Deal Card (Spanning or separate?) - Let's make it a featured card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="lg:col-span-3 mt-8 p-8 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase border border-green-500/30">
                    Live Deal
                </span>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dominican Republic – Land Development</h3>
                    <p className="text-gray-400 mb-6">Senior secured bond financing for luxury residential development.</p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">APY</p>
                            <p className="text-xl font-bold text-emerald-400">12.0%</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Term</p>
                            <p className="text-xl font-bold text-white">3 Years</p>
                        </div>
                         <div>
                            <p className="text-sm text-gray-500 mb-1">Collateral</p>
                            <p className="text-xl font-bold text-white">Real Estate</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                     <Button variant="primary">View Deal Details</Button>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
