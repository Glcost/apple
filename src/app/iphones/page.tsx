import Textoloja from "@/components/Textoloja"
import Image from "next/image"
import CarrosselProduto from "@/components/CarrosselProduto"
import MotivosIphone from "@/components/MotivosIphone"


export default function Produto() {
  return (
    <div className="flex flex-col gap-15">



      <div className="bg-neutral-300">
        <Textoloja />
      </div>

      <div>
        <CarrosselProduto />
      </div>


      <div className="w-full h-[100vh] pt-10 flex items-center flex-col  gap-10">

        <div className=" w-4xl mr-1.5">
          <h1 className="text-5xl font-medium text-shadow-2xs">Explore os detalhes</h1>
        </div>

        <Image
          alt="imagem anuncio apple iphone 17"
          src={"/img/explorer.webp"}
          height={500}
          width={900}
          className="rounded-4xl shadow-2xs  transition-all transform hover:scale-101 duration-700"
        />

      </div>



      <div>
        <MotivosIphone />
      </div>



      <div>

        <div className="w-full h-[85vh] bg-white px-4 flex flex-col justify-between items-center">

          {/* Título Principal */}
          <div className="max-w-5xl w-full mb-10">
            <h1 className="text-4xl font-semibold text-zinc-900 tracking-tight">
              Conheça melhor o iPhone.
            </h1>
          </div>

          {/* Grid contendo os 4 Cards Pretos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full border">

            {/* Card 1: Inovação */}
            <div className="bg-black rounded-2xl rounded-b-none p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div>
                <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Inovação</span>
                <h2 className="text-2xl font-semibold text-white leading-tight max-w-[220px]">
                  Projetado para durar. E impressionar.
                </h2>
              </div>

              {/* Alinhado na base (items-end) para o iPhone subir do corte do card */}
              <div className="w-full h-60 flex items-end justify-center mt-auto overflow-hidden relative">
                <img
                  src="/conheca/1.png"
                  alt="Detalhe da câmera do iPhone"
                  className="w-full h-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200">+</button>
            </div>

            {/* Card 2: Câmeras */}
            <div className="bg-black rounded-2xl rounded-b-none p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div>
                <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Câmeras de última geração</span>
                <h2 className="text-2xl font-semibold text-white leading-tight max-w-[220px]">
                  E temos fotos e vídeos para provar.
                </h2>
              </div>

              {/* Foto artística cortando rente à base */}
              <div className="w-full h-60 flex items-end justify-center mt-auto overflow-hidden relative">
                <img
                  src="/conheca/2.png"
                  alt="Modelo usando óculos escuros"
                  className="w-full h-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200">+</button>
            </div>

            {/* Card 3: Chip e Bateria */}
            <div className="bg-black rounded-2xl rounded-b-none p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div>
                <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">Chip e Bateria</span>
                <h2 className="text-2xl font-semibold text-white leading-tight max-w-[220px]">
                  Desempenho longa vida.
                </h2>
              </div>

              {/* Alinhado ao centro (items-center) para o chip flutuar no meio do bloco */}
              <div className="w-full h-60 flex items-center justify-center my-auto overflow-hidden relative">
                <img
                  src="/conheca/3.png"
                  alt="Processador A19 Pro"
                  className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200">+</button>
            </div>

            {/* Card 4: iOS e Apple Intelligence */}
            <div className="bg-black rounded-2xl rounded-b-none p-6 flex flex-col justify-between h-full shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div>
                <span className="text-[11px] text-zinc-400 font-medium uppercase block mb-1">iOS e Apple Intelligence</span>
                <h2 className="text-2xl font-semibold text-white leading-tight max-w-[220px]">
                  Novo visual. Ainda mais mágico.
                </h2>
              </div>

              {/* Tela do iPhone subindo da base */}
              <div className="w-full h-60 flex items-end justify-center mt-auto overflow-hidden relative">
                <img
                  src="/conheca/4.png"
                  alt="Interface do iOS na tela do celular"
                  className="w-full h-auto object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <button className="absolute bottom-6 right-6 w-8 h-8 bg-white hover:bg-neutral-100 text-black rounded-full flex items-center justify-center font-light text-xl shadow-md transition-colors duration-200">+</button>
            </div>

          </div>
        </div>
      </div>































    </div>
  )
}