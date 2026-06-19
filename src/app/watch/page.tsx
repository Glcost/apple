"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, Heart, Moon } from "lucide-react";

export default function WatchPage() {
  return (
    <div className="w-full bg-black text-[#f5f5f7] min-h-screen overflow-x-hidden">
      
      {/* 1. DARK MODE CENTRIC HERO WITH GLOWS */}
      <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center py-20 px-4 overflow-hidden">
        
        {/* Subtle Health Ring Glows in Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 z-0 mix-blend-screen pointer-events-none">
           <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border-[20px] md:border-[40px] border-rose-500 blur-xl animate-pulse"></div>
           <div className="absolute w-[220px] h-[220px] md:w-[450px] md:h-[450px] rounded-full border-[20px] md:border-[40px] border-green-400 blur-xl animate-pulse delay-75"></div>
           <div className="absolute w-[140px] h-[140px] md:w-[300px] md:h-[300px] rounded-full border-[20px] md:border-[40px] border-cyan-400 blur-xl animate-pulse delay-150"></div>
        </div>

        <div className="z-20 text-center flex flex-col items-center mt-10">
          <Image 
             src="/logo/logo_branco.png" 
             alt="Apple Logo" 
             width={32} 
             height={32} 
             className="mb-4"
          />
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest uppercase mb-4 text-neutral-400">
            WATCH
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">
            SERIES 10
          </h1>
          <p className="text-2xl md:text-3xl max-w-xl font-medium text-[#86868b] leading-tight mb-8">
            Thinner. Greater.
          </p>
          
          <div className="flex gap-4 items-center">
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
              Buy
            </button>
            <button className="text-white px-6 py-3 rounded-full text-lg font-medium border border-white hover:bg-white hover:text-black transition-colors duration-300">
              Learn more
            </button>
          </div>
        </div>

        {/* Floating Watch image */}
        <div className="relative w-full max-w-lg h-[40vh] md:h-[50vh] mt-16 z-20 animate-in slide-in-from-bottom-24 duration-1000 ease-out">
             {/* Using generic fallback from public/img but styled nicely */}
             <Image 
               src="/img/3.png" 
               alt="Apple Watch Series 10" 
               fill 
               className="object-contain filter drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
               priority
             />
        </div>
      </section>

      {/* 2. MICRO-ANIMATIONS & FEATURE GRID */}
      <section className="py-24 px-4 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Feature 1 */}
          <div className="bg-[#111] rounded-[2rem] p-10 h-[400px] flex flex-col items-center justify-center text-center group hover:bg-[#1a1a1a] transition-colors border border-white/5 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-rose-500/20">
               <Heart size={40} className="text-rose-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Heart Health</h3>
            <p className="text-[#86868b]">ECG app. Irregular rhythm notifications. Advanced tracking.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#111] rounded-[2rem] p-10 h-[400px] flex flex-col items-center justify-center text-center group hover:bg-[#1a1a1a] transition-colors border border-white/5 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-500/20">
               <Moon size={40} className="text-cyan-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Sleep Tracking</h3>
            <p className="text-[#86868b]">Track sleep stages. See how much REM, Core, and Deep sleep you get.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#111] rounded-[2rem] p-10 h-[400px] flex flex-col items-center justify-center text-center group hover:bg-[#1a1a1a] transition-colors border border-white/5 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-green-500/20">
               <Activity size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Workout Metrics</h3>
            <p className="text-[#86868b]">Advanced ways to train. Metrics you didn't know you needed.</p>
          </div>

        </div>
      </section>

      {/* 3. EXTREME ASYMMETRY FOOTER SECTION */}
      <section className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col md:flex-row items-end justify-between">
           <div className="mb-10 md:mb-0 w-full md:w-1/2">
             <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none text-white/5">
                ULTRA 2
             </h2>
             <p className="text-2xl mt-4 text-[#86868b] max-w-md">
                Next-level adventure. Pushing boundaries like never before.
             </p>
           </div>
           
           <div className="w-full md:w-auto">
             <button className="bg-orange-500 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-orange-400 hover:scale-105 transition-all duration-300">
               Discover Ultra 2
             </button>
           </div>
        </div>
      </section>

    </div>
  );
}
