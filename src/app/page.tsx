
import Carrossel from "@/components/Carrossel"
import Image from "next/image"


export default function Home() {
  return (
    <div>
      <Carrossel />

      <div id="secao2" className="h-[100vh] w-full bg-neutral-100 flex  flex-col justify-center items-center  mt-10">

     <div className="flex flex-col justify-center items-center gap-3 w-[90%] h-[80%] rounded-3xl ">

        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-black text-5xl font-medium">Iphone Air</p>
          <p className="text-neutral-800 font-light">Conheça a nova geração do iPhone</p>
        </div>

        <div className="w-xs flex  justify-around ">
          <button className="bg-black text-neutral-100 border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-100  hover:text-black ">Learn more</button>
          <button className="bg-neutral-100 text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black hover:text-neutral-100   ">Buy</button>
          
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
          <button className="bg-neutral-200 text-black rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-black border hover:text-neutral-100   ">Learn more</button>
          <button className="bg-black text-neutral-100 border rounded-2xl w-36 h-10 transition-all font-light duration-800 hover:bg-neutral-200  hover:text-black ">Buy</button>
        </div>

        </div>


        <Image
          src={"/img/iphone_air.png"}
          alt="Teste"
          height={2000}
          width={1000}
          className=""
        />




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