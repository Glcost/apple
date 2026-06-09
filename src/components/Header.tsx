import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex flex-col bg-black">
  {/* Barra de Navegação Principal (Estilo Apple) */}
  <header className="w-full h-12 bg-black backdrop-blur-md px-8 flex items-center justify-center sticky top-0 z-50">
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

      {/* Ícone extra para manter o equilíbrio visual (ex: Busca ou Sacola) */}
      <div className="w-[18px] h-[18px]"></div>
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
