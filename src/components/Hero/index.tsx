import React from "react";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content Side */}
      <div className="z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
            2024 Annual Report
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-[0.9] tracking-tighter mb-8">
          Expanding <br />
          <span className="font-semibold italic text-blue-600">
            Boundaries.
          </span>
        </h1>

        <p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
          Scaling Southeast Asia's digital landscape through sustainable
          infrastructure and world-class operational excellence.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-gray-900 text-white px-8 py-4 font-bold rounded-sm flex items-center group hover:bg-blue-600 transition-colors">
            View Financials
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button className="px-8 py-4 font-bold text-gray-900 border border-gray-200 rounded-sm hover:bg-gray-50 transition">
            Our ESG Roadmap
          </button>
        </div>
      </div>

      {/* Visual Side */}
      <div className="relative h-[500px] lg:h-[700px] bg-gray-100 rounded-sm overflow-hidden">
        {/* Replace with an actual image of a data center or architecture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent" />
        <div className="absolute bottom-10 left-10 text-gray-400 text-xs font-mono uppercase tracking-[0.3em]">
          DCI-H1 Cibitung Facility / Stage 2
        </div>
      </div>
    </div>
  </section>
);
