"use client"


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col bg-black">
      {/* Barra de Navegação Principal (Estilo Apple) */}
      <header className="w-full h-12 bg-black backdrop-blur-md px-8 flex items-center justify-center relative top-0 z-50">
        <div className=" w-full flex items-center bg-bla justify-between">

          {/* Logo */}
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/logo/logo_branco.png" // Garanta que essa imagem seja clara/branca
              alt="Logo da empresa"
              width={18}
              height={18}
              className="object-contain"
            />
          </Link>

          {/* Menu de Navegação */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/store" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              Store
            </Link>
            <Link href="/mac" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              Mac
            </Link>
            <Link href="/ipad" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              iPad
            </Link>
            <Link href="/iphones" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              iPhone
            </Link>
            <Link href="/watch" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              Watch
            </Link>
            <Link href="/vision" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              Vision
            </Link>
            <Link href="/airpods" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              AirPods
            </Link>
            <Link href="/tv-home" className="text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity">
              TV & Home
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
      md:hidden p-2 text-neutral-200 transition-all 
      hover:text-neutral-50 transition-colors 
      focus:outline-none 
      
      "
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}

            {/* Menu mobile - renderização condicional  */}
            {isMenuOpen && (
              <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg px-6 py-4 flex flex-col space-y-4 z-40">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-neutral-900 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/produtos"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-neutral-900 transition-colors"
                >
                  Produtos
                </Link>
                <Link
                  href="/contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-neutral-900 transition-colors"
                >
                  Contato
                </Link>
              </nav>

            )}


          </button>






        </div>
      </header>

      {/* Barra de Anúncio / Oferta (Sub-header) */}
      <div className="w-full min-h-[30px] bg-neutral-800 flex items-center justify-center px-4 py-2 text-center">
        <p className="text-xs text-neutral-200 font-normal tracking-tight max-w-[1024px]">
          Get up to $195–$695 in credit toward iPhone 17 Pro when you trade in iPhone 13 or higher.</p>
      </div>
    </div>
  );
}
