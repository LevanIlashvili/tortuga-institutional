"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Scale, FileText, Shield } from "lucide-react";

const compliancePoints = [
  { icon: Scale, text: "Swiss Securities Law Framework" },
  { icon: FileText, text: "ISIN-Certified Bonds" },
  { icon: Shield, text: "Regulated Issuer: Estating AG" },
  { icon: CheckCircle2, text: "Institutional KYC / AML" },
];

export function ComplianceLegal() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="compliance" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background details */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Built on Swiss <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                Regulation
              </span>.
            </motion.h2>
            
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="prose prose-invert text-gray-400 mb-8"
            >
                <p className="mb-4">
                    Tortuga operates under one of the world's most robust financial frameworks. 
                    Our assets are issued as Swiss securities, assigned an ISIN, and fully compliant 
                    with Swiss banking standards.
                </p>
                <p>
                    We enforce strict institutional-grade KYC/AML processes to ensure 
                    a safe, compliant environment for all participants.
                </p>
            </motion.div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white">View Legal Framework Overview</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-sm text-gray-400 border-t border-white/10"
                  >
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>Issuer: Estating AG (Switzerland)</li>
                        <li>Instrument: Transferable Security (Bond)</li>
                        <li>Governing Law: Swiss Code of Obligations</li>
                        <li>Collateral: First-rank mortgages or equivalent real estate security</li>
                        <li>Settlement: Delivery vs. Payment (DvP) on-chain</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Stack */}
          <div className="flex flex-col gap-4">
            {compliancePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-lg font-medium text-white">{point.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
