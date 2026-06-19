"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Common link style for Apple nav
  const navLinkStyle = "text-xs font-normal text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity";

  return (
    <div className="w-full flex flex-col relative bg-black">
      {/* Barra de Navegação Principal (Estilo Apple) */}
      <header className="w-full h-12 bg-black/80 backdrop-blur-md px-4 md:px-8 flex items-center justify-center relative top-0 z-50">
        <div className="max-w-[1024px] w-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0">
            <Image
              src="/logo/logo_branco.png" 
              alt="Logo da empresa"
              width={16}
              height={16}
              className="object-contain"
            />
          </Link>

          {/* Menu de Navegação Desktop */}
          <nav className={`hidden md:flex items-center justify-center space-x-6 w-full ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300`}>
            <Link href="/loja" className={navLinkStyle}>Store</Link>
            <Link href="/mac" className={navLinkStyle}>Mac</Link>
            <Link href="/ipad" className={navLinkStyle}>iPad</Link>
            <Link href="/iphones" className={navLinkStyle}>iPhone</Link>
            <Link href="/watch" className={navLinkStyle}>Watch</Link>
            <Link href="/vision" className={navLinkStyle}>Vision</Link>
            <Link href="/airpods" className={navLinkStyle}>AirPods</Link>
            <Link href="/tv-home" className={navLinkStyle}>TV & Home</Link>
            <Link href="/entertainment" className={navLinkStyle}>Entertainment</Link>
            <Link href="/accessories" className={navLinkStyle}>Accessories</Link>
            <Link href="/support" className={navLinkStyle}>Support</Link>
            <Link href="/contato" className={navLinkStyle}>Contato</Link>
          </nav>

          {/* Icones da direita */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="opacity-80 hover:opacity-100 transition-opacity text-[#f5f5f7]"
              aria-label="Abrir pesquisa"
            >
              <Search size={16} strokeWidth={2} />
            </button>
            <Link href="/bag" className="opacity-80 hover:opacity-100 transition-opacity text-[#f5f5f7]">
              <ShoppingBag size={16} strokeWidth={2} />
            </Link>
            
            {/* Botão do menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden opacity-80 hover:opacity-100 transition-opacity text-[#f5f5f7] focus:outline-none"
              aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isMenuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile - renderização condicional */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full h-screen bg-black z-40 px-6 py-4 flex flex-col space-y-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            <Link href="/loja" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">Store</Link>
            <Link href="/mac" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">Mac</Link>
            <Link href="/ipad" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">iPad</Link>
            <Link href="/iphones" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">iPhone</Link>
            <Link href="/watch" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">Watch</Link>
            <Link href="/contato" onClick={() => setIsMenuOpen(false)} className="text-xl font-semibold text-white/90 hover:text-white transition-colors border-b border-white/10 pb-4">Contato</Link>
          </nav>
        </div>
      )}

      {/* Search Overlay Animado */}
      <div 
        className={`fixed top-12 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 overflow-hidden ${isSearchOpen ? 'h-auto py-8 opacity-100 visible' : 'h-0 py-0 opacity-0 invisible'}`}
      >
        <div className="max-w-[600px] mx-auto px-6">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-white/50" size={20} />
            <input 
              type="text" 
              placeholder="Search apple.com" 
              className="w-full bg-transparent border-none text-white text-xl md:text-2xl font-semibold focus:outline-none placeholder:text-white/40 pl-12 pr-10 py-2"
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-2 p-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X size={16} />
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <h3 className="text-xs font-medium text-white/50 uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col space-y-3">
              <li><Link href="/loja" onClick={() => setIsSearchOpen(false)} className="text-sm text-white/80 hover:text-white flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:bg-white/50 transition-colors"></span> Find a Store</Link></li>
              <li><Link href="/accessories" onClick={() => setIsSearchOpen(false)} className="text-sm text-white/80 hover:text-white flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:bg-white/50 transition-colors"></span> Apple Accessories</Link></li>
              <li><Link href="/iphones" onClick={() => setIsSearchOpen(false)} className="text-sm text-white/80 hover:text-white flex items-center group"><span className="w-4 h-[1px] bg-white/20 mr-3 group-hover:bg-white/50 transition-colors"></span> iPhone 15 Pro</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra de Anúncio / Oferta (Sub-header) */}
      <div className="w-full bg-neutral-800 flex items-center justify-center px-4 py-3 text-center z-0">
        <p className="text-xs text-neutral-200 font-normal tracking-tight max-w-[1024px]">
          Get up to $195–$695 in credit toward iPhone 17 Pro when you trade in iPhone 13 or higher. <Link href="/shop" className="text-blue-400 hover:underline">Shop iPhone</Link>
        </p>
      </div>
    </div>
  );
}
