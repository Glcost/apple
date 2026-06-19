import Textoloja from "@/components/Textoloja"
import Image from "next/image"
import CarrosselProduto from "@/components/CarrosselProduto"
import MotivosIphone from "@/components/MotivosIphone"


export default function Produto() {
  return (
    <div className="flex flex-col gap-15 overflow-x-hidden">

      <div className="bg-neutral-300">
        <Textoloja />
      </div>

      <div>
        <CarrosselProduto />
      </div>

      <div className="w-full min-h-[60vh] pt-10 px-4 flex items-center flex-col gap-6 md:gap-10">

        <div className="max-w-4xl w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-medium text-shadow-2xs">Explore os detalhes</h1>
        </div>

        <div className="w-full max-w-5xl relative flex justify-center">
          <Image
            alt="imagem anuncio apple iphone 17"
            src={"/img/explorer.webp"}
            height={500}
            width={900}
            className="rounded-3xl md:rounded-4xl shadow-2xs transition-all transform hover:scale-[1.01] duration-700 w-full h-auto object-cover"
          />
        </div>

      </div>

      <div>
        <MotivosIphone />
      </div>

      <div className="w-full bg-white py-16 px-4 flex flex-col items-center">
        
        {/* Título da Seção */}
        <div className="max-w-7xl w-full mb-8 md:mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">
            Conheça melhor o iPhone.
          </h1>
        </div>

        {/* Grid de Cards - Sem padding global para permitir o preenchimento total da imagem */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl w-full">

          {/* Card 1: Inovação */}
          <div className="bg-black rounded-3xl flex flex-col justify-between h-[400px] md:h-[480px] shadow-xs relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="pt-7 px-7 z-10">
              <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Inovação</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight max-w-[220px]">
                Projetado para durar. E impressionar.
              </h2>
            </div>

            <div className="w-full flex-1 relative min-h-0 mt-4 flex items-end">
              <img
                src="/conheca/1.png"
                alt="Detalhe da câmera do iPhone"
                className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200 z-10">+</button>
          </div>

          {/* Card 2: Câmeras */}
          <div className="bg-black rounded-3xl flex flex-col justify-between h-[400px] md:h-[480px] shadow-xs relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="pt-7 px-7 z-20">
              <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Câmeras de última geração</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight max-w-[220px]">
                E temos fotos e vídeos para provar.
              </h2>
            </div>

            <div className="w-full flex-1 relative flex items-end z-10">
              <img
                src="/iPhone - Apple (BR)_files/camera__dez4cvpw83sm_large.jpg"
                alt="Modelo usando óculos escuros"
                className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200 z-20">+</button>
          </div>

          {/* Card 3: Chip e Bateria */}
          <div className="bg-black rounded-3xl flex flex-col justify-between h-[400px] md:h-[480px] shadow-xs relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="pt-7 px-7 z-10">
              <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Chip e Bateria</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight max-w-[220px]">
                Desempenho longa vida.
              </h2>
            </div>

            <div className="w-full flex-1 relative min-h-0 flex items-center justify-center p-8 md:p-10">
              <img
                src="/conheca/3.png"
                alt="Processador A19 Pro"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200 z-10">+</button>
          </div>

          {/* Card 4: iOS e Apple Intelligence */}
          <div className="bg-black rounded-3xl flex flex-col justify-between h-[400px] md:h-[480px] shadow-xs relative overflow-hidden group transition-all duration-300 hover:shadow-xl">
            <div className="pt-7 px-7 z-10">
              <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">iOS e Apple Intelligence</span>
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight max-w-[220px]">
                Novo visual. Ainda mais mágico.
              </h2>
            </div>

            <div className="w-full flex-1 relative min-h-0 mt-4 flex items-end">
              <img
                src="/conheca/4.png"
                alt="Interface do iOS na tela do celular"
                className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200 z-10">+</button>
          </div>

        </div>
      </div>
      
    </div>
  )
}