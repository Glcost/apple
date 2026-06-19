
import Carrossel from "@/components/Carrossel"
import Image from "next/image"
import Link from "next/link"


export default function Home() {
  return (
    <div>
      <Carrossel />

      <div id="secao2" className="h-[100vh] w-full bg-neutral-100 flex  flex-col justify-center items-center  mt-10">

        <div className="flex flex-col justify-center items-center gap-3 w-[90%] h-[80%] rounded-3xl ">

          <div className="flex flex-col justify-center items-center gap-4 ">
            <p className="text-black text-5xl font-medium">iPhone 17 Pro Max</p>
            <p className="text-neutral-800 font-light">Conheça a nova geração do iPhone</p>
          </div>

          <div className="w-xs flex  justify-around ">
            <button className="bg-black text-neutral-100 border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-100  hover:text-black ">Learn more</button>
            <button className="bg-neutral-100 border text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Buy</button>

          </div>

        </div>


        <Image
          src={"/img/iphone-index.png"}
          alt="Teste"
          height={1500}
          width={1000}
          className=""
        />

      </div>





      <div id="secao3" className="w-full h-[100vh] flex flex-col justify-center items-center  bg-neutral-900 pt-5">
        <div className="flex flex-col justify-center items-center gap-3 w-[90%] h-[80%] rounded-3xl mt-10 ">

          <div className="flex flex-col justify-center items-center gap-4 ">
            <p className="text-[#f5f5f7] text-5xl font-medium">iPhone Air</p>
            <p className="text-neutral-300 font-light">O iPhone mais fino já feito. Com a força de um Pro por dentro</p>
          </div>

          <div className="w-xs flex  justify-around ">
            <button className="bg-neutral-200 border  text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Learn more</button>
            <button className="bg-black text-neutral-100  border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
          </div>

        </div>


        <Image
          src={"/img/iphone_air.png"}
          alt="Teste"
          height={2200}
          width={1200}
          className=""
        />




      </div>

      <section id="secao4" className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-neutral-50">

        {/* Quadrante 1: iPad Air */}
        <div className=" bg-black  shadow-2xl h-[500px] md:h-[540px] flex flex-col rounded-2xl justify-between items-center pt-12 overflow-hidden relative group">
          <div className="text-center px-6 z-10">
            <h3 className="text-neutral-100 text-3xl font-semibold tracking-tight">iPad Air</h3>
            <p className="text-[#6e6e73] text-sm mt-1">Design incrivelmente fino. Desempenho absurdo.</p>
            <div className="flex gap-3 justify-center mt-3">
              <button className="bg-neutral-200 text-black rounded-2xl w-32 h-8 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Learn more</button>
              <button className="bg-black border  text-neutral-100 rounded-2xl w-24 h-8 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center px-12 mt-4">
            <Image
              src="/img/ipad.png" // Altere para seu asset real
              alt="iPad Air"
              fill
              className="object-contain p-6 md:p-12 transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Quadrante 2: Apple Watch */}
        <div className="bg-white h-[500px] shadow-2xl md:h-[540px] flex flex-col justify-between items-center pt-12 rounded-2xl overflow-hidden relative group">
          <div className="text-center px-6 z-10">
            <h3 className="text-[#1d1d1f] text-3xl font-semibold tracking-tight">Watch</h3>
            <p className="text-[#6e6e73] text-sm mt-1">Inteligência avançada para sua saúde.</p>
            <div className="flex gap-3 justify-center mt-3">
              <button className="bg-neutral-200 text-black rounded-2xl w-32 h-8 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Learn more</button>
              <button className="bg-black border  text-neutral-100 rounded-2xl w-24 h-8 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4">
            <Image
              src="/img/3.png" // Altere para seu asset real
              alt="Apple Watch Ultra"
              fill
              className="object-contain pt-4 transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Quadrante 3: AirPods Pro 3 */}
        <div className="bg-neutral-50 h-[500px] shadow-2xl md:h-[540px] flex flex-col justify-between items-center pt-12 rounded-2xl overflow-hidden relative group">
          <div className="text-center px-6 z-10 max-w-[400px]">
            <h3 className="text-[#1d1d1f] text-3xl font-semibold tracking-tight">AirPods Pro 3</h3>
            <p className="text-[#6e6e73] text-sm mt-1">O melhor Cancelamento Ativo de Ruído do mundo em fones intra-auriculares.</p>
            <div className="flex gap-3 justify-center mt-3">
              <button className="bg-neutral-200 text-black rounded-2xl w-32 h-8 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Learn more</button>
              <button className="bg-black border  text-neutral-100 rounded-2xl w-24 h-8 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4">
            <Image
              src="/img/airpods.png" // Altere para seu asset real
              alt="AirPods Pro 3"
              fill
              className="object-contain p-8 transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

        {/* Quadrante 4: MacBook Pro */}
        <div className="bg-[#000000] h-[500px] shadow-2xl md:h-[540px] flex flex-col justify-between items-center pt-12 rounded-2xl overflow-hidden relative group">
          <div className="text-center px-6 z-10">
            <h3 className="text-[#f5f5f7] text-3xl font-semibold tracking-tight">MacBook Pro</h3>
            <p className="text-[#86868b] text-sm mt-1">Agora com M5, M5 Pro e M5 Max.</p>
            <div className="flex gap-3 justify-center mt-3">
              <button className="bg-neutral-200 text-black rounded-2xl w-32 h-8 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Learn more</button>
              <button className="bg-black border  text-neutral-100 rounded-2xl w-24 h-8 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>4
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center mt-4">
            <Image
              src="/img/mack.png" // Altere para seu asset real
              alt="MacBook Pro M5"
              fill
              className="object-contain p-4 transform group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </div>

      </section>


    </div>
  )
}