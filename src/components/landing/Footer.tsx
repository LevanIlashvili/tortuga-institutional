"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      {/* CTA Panel */}
      <div className="container mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-center border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
           
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Bring Institutional RWAs <br /> Into Your Stack.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg relative z-10">
            Book a call with our team to explore tokenized Swiss real estate bonds,
            institutional onboarding, and integrations tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Book Institutional Call
            </Button>
            <Button variant="secondary" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                T
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Tortuga
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              The infrastructure layer for institutional-grade Real World Assets on-chain. 
              Swiss-regulated, fully collateralized, and built for the future of finance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Live Bonds</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Track Record</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">For Institutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
          <p>© 2024 Tortuga AG. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Legal Disclaimer</a>
          </div>
        </div>
        
        <div className="mt-8 text-[10px] text-gray-700 leading-relaxed text-justify">
            Disclaimer: This website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation for any security, nor does it constitute an offer to provide investment advisory or other services by Tortuga AG or any of its affiliates, subsidiaries, officers, directors or employees. The securities described herein have not been registered under the U.S. Securities Act of 1933, as amended, or under the securities laws of any state or other jurisdiction.
        </div>
      </div>
    </footer>
  );
}
