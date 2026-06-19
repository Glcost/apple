"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MacPage() {
  return (
    <div className="w-full bg-[#000000] text-[#f5f5f7] min-h-screen overflow-x-hidden">
      
      {/* 1. MASSIVE TYPOGRAPHIC HERO */}
      <section className="relative w-full h-[100vh] flex flex-col justify-center items-center overflow-hidden">
        
        {/* Abstract Background Glow for Depth */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
           <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-900 to-purple-900 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        </div>

        <div className="z-10 text-center flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest uppercase mb-4 text-neutral-400">
            MacBook Pro
          </h2>
          
          {/* Typography behind/overlapping potential elements */}
          <h1 className="text-[120px] md:text-[220px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 scale-y-110">
            M5 MAX
          </h1>
          
          <p className="text-2xl md:text-4xl mt-6 max-w-2xl font-medium tracking-tight">
            Mind-blowing. Head-turning.
          </p>

          <div className="flex gap-6 mt-12">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
              Buy
            </button>
            <button className="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors text-lg font-medium">
              Learn more <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Hero Image overlapping the text slightly for Z-axis depth */}
        <div className="absolute bottom-[-10%] md:bottom-[-20%] w-full max-w-5xl z-20 flex justify-center animate-in slide-in-from-bottom-20 duration-1000">
          {/* Fallback image if asset is missing, using the same style as existing iphone page */}
          <div className="relative w-full aspect-video">
             <Image 
               src="/img/mack.png" 
               alt="MacBook Pro" 
               fill 
               className="object-contain"
               priority
             />
          </div>
        </div>
      </section>

      {/* 2. ASYMMETRIC TENSION GRID (90/10) */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (30%) - Heavy Text */}
          <div className="lg:col-span-4 sticky top-32">
            <h3 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6">
              Power that changes everything.
            </h3>
            <p className="text-xl text-neutral-400 font-medium">
              The new M5 family of chips brings pro-level performance to a design that defies physics.
            </p>
          </div>

          {/* Right Column (70%) - Large Visuals */}
          <div className="lg:col-span-8 flex flex-col gap-8 mt-16 lg:mt-0">
            
            {/* Bento-breaker: One massive vertical card */}
            <div className="bg-[#111111] rounded-[3rem] p-12 h-[800px] relative overflow-hidden group border border-white/5">
               <div className="z-10 relative">
                 <h4 className="text-3xl font-semibold mb-2">MacBook Air</h4>
                 <p className="text-neutral-400 text-lg">Lean. Mean. M5 machine.</p>
               </div>
               
               <div className="absolute bottom-0 right-[-10%] w-[120%] h-[70%] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-x-4">
                  {/* Visual placeholder mimicking the angle */}
                  <div className="w-full h-full bg-gradient-to-tr from-neutral-800 to-transparent rounded-tl-[4rem] border-t border-l border-white/10 shadow-2xl"></div>
               </div>
            </div>

            {/* Two smaller asymmetric cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#111111] rounded-[3rem] p-10 h-[500px] relative overflow-hidden group border border-white/5">
                <h4 className="text-2xl font-semibold mb-2">iMac</h4>
                <p className="text-neutral-400">Packed with more juice.</p>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-colors duration-700"></div>
              </div>
              <div className="bg-[#111111] rounded-[3rem] p-10 h-[500px] relative overflow-hidden group border border-white/5">
                <h4 className="text-2xl font-semibold mb-2">Mac Studio</h4>
                <p className="text-neutral-400">Empower station.</p>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/40 transition-colors duration-700"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SHARP GEOMETRY / BRUTALIST DATA SECTION */}
      <section className="py-32 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-20 text-center">
            Which Mac is right for you?
          </h2>
          
          {/* Comparison table built with sharp edges (0px border-radius) */}
          <div className="w-full border-t border-black/20 flex flex-col">
            
            {[
              { name: "MacBook Air", desc: "M3 or M4 chip", price: "From $1099" },
              { name: "MacBook Pro", desc: "M4, M4 Pro, or M4 Max chip", price: "From $1599" },
              { name: "iMac", desc: "M4 chip", price: "From $1299" }
            ].map((mac, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-black/20 hover:bg-black/5 transition-colors cursor-pointer px-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">{mac.name}</h3>
                  <p className="text-xl text-neutral-500 mt-2">{mac.desc}</p>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-8">
                  <span className="text-2xl font-medium">{mac.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">Buy</button>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

    </div>
  );
}
