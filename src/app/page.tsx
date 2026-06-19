import Carrossel from "@/components/Carrossel"
import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Carrossel />

      {/* Section 2: iPhone 17 Pro Max */}
      <div id="secao2" className="min-h-screen w-full bg-neutral-100 flex flex-col justify-center items-center mt-10 px-4 py-12 md:py-0">

        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl rounded-3xl z-10 text-center">

          <div className="flex flex-col justify-center items-center gap-2 md:gap-4 mt-8 md:mt-16">
            <p className="text-black text-4xl md:text-6xl font-medium tracking-tight">iPhone 17 Pro Max</p>
            <p className="text-neutral-800 text-lg md:text-2xl font-light">Conheça a nova geração do iPhone</p>
          </div>

          <div className="flex justify-center gap-4 w-full">
            <button className="bg-black text-neutral-100 border rounded-full w-32 md:w-36 h-10 transition-all font-medium duration-300 hover:bg-neutral-800">Learn more</button>
            <button className="bg-transparent border border-black text-black rounded-full w-32 md:w-36 h-10 transition-all font-medium duration-300 hover:bg-black hover:text-white">Buy</button>
          </div>

        </div>

        <div className="w-full max-w-5xl mt-10 md:mt-16 relative flex justify-center items-end flex-1 min-h-[40vh]">
          <Image
            src={"/img/iphone-index.png"}
            alt="iPhone 17 Pro Max"
            width={1000}
            height={1000}
            className="object-contain w-full h-auto max-h-[60vh] md:max-h-[80vh]"
            priority
          />
        </div>

      </div>

      {/* Section 3: iPhone Air */}
      <div id="secao3" className="w-full min-h-screen flex flex-col justify-center items-center bg-neutral-900 pt-16 px-4">
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-4xl rounded-3xl mt-10 text-center z-10">

          <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
            <p className="text-[#f5f5f7] text-4xl md:text-6xl font-medium tracking-tight">iPhone Air</p>
            <p className="text-neutral-300 text-lg md:text-xl font-light max-w-lg">O iPhone mais fino já feito. Com a força de um Pro por dentro</p>
          </div>

          <div className="flex justify-center gap-4 w-full">
            <button className="bg-neutral-200 border text-black rounded-full w-32 md:w-36 h-10 transition-all font-medium duration-300 hover:bg-white">Learn more</button>
            <button className="bg-transparent text-neutral-100 border border-white rounded-full w-32 md:w-36 h-10 transition-all font-medium duration-300 hover:bg-white hover:text-black">Buy</button>
          </div>

        </div>

        <div className="w-full max-w-6xl mt-10 relative flex justify-center items-end flex-1 min-h-[40vh]">
          <Image
            src={"/img/iphone_air.png"}
            alt="iPhone Air"
            width={1200}
            height={1200}
            className="object-contain w-full h-auto max-h-[60vh] md:max-h-[80vh]"
          />
        </div>
      </div>

      {/* Section 4: Grid */}
      <section id="secao4" className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-neutral-50">

        {/* Quadrante 1: iPad Air */}
        <div className="bg-black shadow-2xl h-[500px] md:h-[600px] flex flex-col rounded-[2rem] justify-between items-center pt-12 overflow-hidden relative group">
          <div className="text-center px-6 z-10">
            <h3 className="text-neutral-100 text-3xl md:text-4xl font-semibold tracking-tight">iPad Air</h3>
            <p className="text-[#6e6e73] text-base mt-2">Design incrivelmente fino. Desempenho absurdo.</p>
            <div className="flex gap-3 justify-center mt-4">
              <button className="bg-neutral-200 text-black rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-white">Learn more</button>
              <button className="bg-transparent border border-white text-neutral-100 rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-white hover:text-black">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center px-8 md:px-12 mt-4 pb-8">
            <Image
              src="/img/ipad.png"
              alt="iPad Air"
              fill
              className="object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Quadrante 2: Apple Watch */}
        <div className="bg-white h-[500px] md:h-[600px] shadow-2xl flex flex-col justify-between items-center pt-12 rounded-[2rem] overflow-hidden relative group">
          <div className="text-center px-6 z-10">
            <h3 className="text-[#1d1d1f] text-3xl md:text-4xl font-semibold tracking-tight">Watch</h3>
            <p className="text-[#86868b] text-base mt-2">Inteligência avançada para sua saúde.</p>
            <div className="flex gap-3 justify-center mt-4">
              <button className="bg-black text-white rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-neutral-800">Learn more</button>
              <button className="bg-transparent border border-black text-black rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-black hover:text-white">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4 px-8 pb-8">
            <Image
              src="/img/3.png"
              alt="Apple Watch"
              fill
              className="object-contain transform group-hover:scale-[1.02] transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Quadrante 3: AirPods Pro 3 */}
        <div className="bg-[#f5f5f7] h-[500px] md:h-[600px] shadow-2xl flex flex-col justify-between items-center pt-12 rounded-[2rem] overflow-hidden relative group">
          <div className="text-center px-6 z-10 max-w-sm">
            <h3 className="text-[#1d1d1f] text-3xl md:text-4xl font-semibold tracking-tight">AirPods Pro 3</h3>
            <p className="text-[#86868b] text-base mt-2 leading-tight">O melhor Cancelamento Ativo de Ruído do mundo em fones intra-auriculares.</p>
            <div className="flex gap-3 justify-center mt-4">
              <button className="bg-black text-white rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-neutral-800">Learn more</button>
              <button className="bg-transparent border border-black text-black rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-black hover:text-white">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4 px-12 pb-8">
            <Image
              src="/img/airpods.png"
              alt="AirPods Pro 3"
              fill
              className="object-contain transform group-hover:scale-[1.02] transition-transform duration-700 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Quadrante 4: MacBook Pro */}
        <div className="bg-[#000000] h-[500px] md:h-[600px] shadow-2xl flex flex-col justify-between items-center pt-12 rounded-[2rem] overflow-hidden relative group border border-white/5">
          <div className="text-center px-6 z-10">
            <h3 className="text-[#f5f5f7] text-3xl md:text-4xl font-semibold tracking-tight">MacBook Pro</h3>
            <p className="text-[#86868b] text-base mt-2">Agora com M5, M5 Pro e M5 Max.</p>
            <div className="flex gap-3 justify-center mt-4">
              <button className="bg-white text-black rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-neutral-200">Learn more</button>
              <button className="bg-transparent border border-white text-white rounded-full px-6 h-10 transition-all font-medium duration-300 hover:bg-white hover:text-black">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4 px-12 pb-8">
            <Image
              src="/img/mack.png"
              alt="MacBook Pro"
              fill
              className="object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

      </section>

    </div>
  )
}