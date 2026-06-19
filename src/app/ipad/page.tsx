"use client";

import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function IpadPage() {
  return (
    <div className="w-full bg-[#f5f5f7] text-[#1d1d1f] min-h-screen overflow-x-hidden">
      
      {/* 1. VIBRANT LAYERED DEPTH HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-start items-center pt-32 pb-20 px-4">
        <div className="text-center z-20 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-[#bf4800] text-xl font-semibold tracking-wide uppercase mb-4">
            iPad Pro
          </h2>
          
          <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter leading-none mb-6">
            Thinpossible.
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-[#86868b] max-w-2xl mb-10">
            The impossibly thin Apple M4 chip.
            <br className="hidden md:block"/> Outrageous performance.
          </p>
          
          <div className="flex gap-4 items-center">
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-neutral-800 transition-colors hover:scale-105 duration-300">
              Buy
            </button>
            <button className="flex items-center gap-2 text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors">
              Watch the film <PlayCircle size={20} />
            </button>
          </div>
        </div>

        {/* Floating/Layered Images creating Z-depth */}
        <div className="relative w-full max-w-[1200px] h-[50vh] md:h-[60vh] mt-16 z-10 perspective-1000">
           {/* Fallback image if actual ipad asset isn't present, using ipad.png */}
           <div className="absolute inset-0 flex justify-center items-center transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-1000 ease-out">
              <div className="relative w-full md:w-[80%] h-full shadow-[0_40px_100px_rgba(0,0,0,0.2)] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-white">
                 <Image 
                   src="/img/ipad.png" 
                   alt="iPad Pro" 
                   fill 
                   className="object-contain p-10"
                   priority
                 />
              </div>
           </div>
        </div>
      </section>

      {/* 2. STAGGERED COLORFUL GRID */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1: Apple Pencil Pro */}
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 h-[600px] flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-shadow duration-500">
            <div className="z-10">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">Apple Pencil Pro</h3>
              <p className="text-xl text-[#86868b] font-medium">Engineered for limitless creativity.</p>
            </div>
            
            {/* Visual element overlapping */}
            <div className="absolute -bottom-10 -right-10 w-[80%] h-[60%] bg-gradient-to-tr from-orange-100 to-rose-100 rounded-tl-[4rem] transform group-hover:scale-110 transition-transform duration-700"></div>
          </div>

          {/* Card 2: Magic Keyboard */}
          <div className="bg-black text-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 h-[600px] flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl transition-shadow duration-500">
            <div className="z-10">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 text-[#f5f5f7]">Magic Keyboard</h3>
              <p className="text-xl text-[#86868b] font-medium">A magical typing experience.</p>
            </div>
            
            <div className="absolute -bottom-20 -left-20 w-full h-[70%] bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-tr-[5rem] transform group-hover:scale-105 transition-transform duration-700"></div>
          </div>

        </div>
      </section>

      {/* 3. HORIZONTAL NARRATIVE / CAROUSEL (Simulated with overflow) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="px-4 md:px-12 max-w-[1400px] mx-auto mb-12">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Explore the lineup.
          </h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-12 snap-x hide-scrollbar">
          {[
            { name: "iPad Pro", desc: "The ultimate iPad experience.", price: "From $999", color: "from-blue-50 to-indigo-50" },
            { name: "iPad Air", desc: "Serious performance in a thin and light design.", price: "From $599", color: "from-purple-50 to-pink-50" },
            { name: "iPad", desc: "The colorful, all-screen iPad for the things you do every day.", price: "From $349", color: "from-yellow-50 to-orange-50" },
            { name: "iPad mini", desc: "The full iPad experience designed to fit in one hand.", price: "From $499", color: "from-teal-50 to-emerald-50" },
          ].map((item, idx) => (
            <div key={idx} className={`min-w-[320px] md:min-w-[400px] h-[500px] rounded-[2rem] bg-gradient-to-b ${item.color} p-10 flex flex-col snap-center border border-black/5`}>
              <h3 className="text-3xl font-semibold mb-2">{item.name}</h3>
              <p className="text-lg text-neutral-600 mb-8 h-14">{item.desc}</p>
              <p className="text-xl font-medium mt-auto">{item.price}</p>
              <button className="w-full bg-black text-white py-3 rounded-full mt-6 font-medium hover:bg-neutral-800 transition-colors">
                Buy
              </button>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
