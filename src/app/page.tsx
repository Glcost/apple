
import Carrossel from "@/components/Carrossel"
import Image from "next/image"


export default function Home() {
  return (
    <div>
      <Carrossel />

      <div id="secao2" className="h-[50vh] w-full bg-neutral-200 flex  flex-col justify-center items-center ">

        <h1>Iphone 17</h1>
        <p>Magicromatic</p>
        

        <div className="w-xs flex  justify-around ">
          <button className="bg-neutral-200 text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black border hover:text-neutral-100   ">Learn more</button>
          <button className="bg-black text-neutral-100 border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
        </div>

        <Image 
        src={"/public/img/iphone 17.png"}
        alt="iphone 17 cromático"
        width={1000}
        height={2000}
        />

      </div>





      <div id="secao3" className="w-full h-[100vh] flex flex-col justify-center items-center  bg-neutral-900">

        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-[#f5f5f7] text-5xl font-medium">Iphone Air</p>
          <p className="text-neutral-300 font-light">O iPhone mais fino já feito. Com a força de um Pro por dentro</p>
        </div>

        <Image
          src={"/img/iphone_air.png"}
          alt="Teste"
          height={50}
          width={1000}
        />

        <div className="w-xs flex  justify-around ">
          <button className="bg-neutral-200 text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black border hover:text-neutral-100   ">Learn more</button>
          <button className="bg-black text-neutral-100 border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
        </div>



      </div>

      <div id="secao4" className="w-full h-[100vh]">

        <div id="macbook">
         
        </div>

        <div id="applewatch">

        </div>


      </div>



    </div>
  )
}