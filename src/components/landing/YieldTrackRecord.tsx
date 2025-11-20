"use client";

import React from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2019", tortuga: 5.2, traditional: 2.1 },
  { year: "2020", tortuga: 6.8, traditional: 1.5 },
  { year: "2021", tortuga: 8.4, traditional: 1.8 },
  { year: "2022", tortuga: 9.1, traditional: 3.2 },
  { year: "2023", tortuga: 11.5, traditional: 4.5 },
  { year: "2024", tortuga: 12.0, traditional: 4.2 },
];

export function YieldTrackRecord() {
  return (
    <section id="yield" className="py-24 bg-gradient-to-b from-[#0f1115] to-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Real Yield, <br />
              Institutional Track Record.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Tortuga RWAs consistently outperform traditional fixed income instruments,
              backed by Swiss-regulated real estate collateral and a flawless operational history.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 border-l-2 border-emerald-500 bg-white/5">
                <p className="text-3xl font-bold text-white mb-1">0</p>
                <p className="text-sm text-gray-400">Investor Losses</p>
              </div>
              <div className="p-4 border-l-2 border-purple-500 bg-white/5">
                <p className="text-3xl font-bold text-white mb-1">5+ Years</p>
                <p className="text-sm text-gray-400">Operational History</p>
              </div>
            </div>
          </div>

          {/* Right Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">Performance Comparison (APY %)</h3>
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-gray-400">Tortuga RWAs</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                         <span className="text-gray-400">Trad. Bonds</span>
                    </div>
                </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTortuga" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4b5563" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4b5563" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="year" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="tortuga" 
                    stroke="#10b981" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorTortuga)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="#4b5563" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    fillOpacity={1} 
                    fill="url(#colorTrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
