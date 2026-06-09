"use client"

export default function MotivosIphone() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 py-12 px-4 flex flex-col items-center">
      
      {/* Título Principal */}
      <div className="max-w-5xl w-full mb-10">
        <h1 className="text-5xl font-semibold text-zinc-900 tracking-tight max-w-xl">
          Motivos para comprar seu iPhone na Apple.
        </h1>
      </div>

      {/* Grid contendo os 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
        
        {/* Card 1: Pagamento */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[460px] shadow-sm relative">
          <div>
            <span className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Opções de pagamento</span>
            <h2 className="text-xl font-bold text-zinc-950 leading-tight mb-2">Compre em até 12 meses.</h2>
            <p className="text-xs text-zinc-500">Aproveite e parcele com facilidade e conveniência¹.</p>
          </div>
          <img src="/motivos/1.png" alt="Cartão" className="w-full h-44 object-contain mt-auto" />
          <button className="absolute bottom-6 right-6 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center font-light text-xl">+</button>
        </div>

        {/* Card 2: Frete */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[460px] shadow-sm relative">
          <div>
            <span className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Frete</span>
            <h2 className="text-xl font-bold text-zinc-950 leading-tight mb-2">Envio por nossa conta.</h2>
            <p className="text-xs text-zinc-500">Em todo o Brasil. Em São Paulo, os pedidos qualificados têm envio no dia seguinte.</p>
          </div>
          <img src="/motivos/2.png" alt="Sacola da Apple" className="w-full h-44 object-contain mt-auto" />
          <button className="absolute bottom-6 right-6 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xs">&gt;</button>
        </div>

        {/* Card 3: Especialista */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[460px] shadow-sm relative">
          <div>
            <span className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">Recomendação especializada</span>
            <h2 className="text-xl font-bold text-zinc-950 leading-tight mb-2">Compre com quem entende de iPhone.</h2>
            <p className="text-xs text-zinc-500">Fale com especialistas para fazer a melhor escolha. Na Apple Store ou online.</p>
          </div>
          <img src="/motivos/3.png" alt="Especialista" className="w-full h-44 object-contain mt-auto" />
          <button className="absolute bottom-6 right-6 w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center font-light text-xl">+</button>
        </div>

        {/* Card 4: App Store */}
        <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-[460px] shadow-sm relative">
          <div>
            <span className="text-[11px] text-zinc-400 font-bold uppercase block mb-1">App Apple Store</span>
            <h2 className="text-xl font-bold text-zinc-950 leading-tight mb-2">Uma experiência de compra inspirada em você.</h2>
            <p className="text-xs text-zinc-500">Um jeito mais pessoal de comprar.</p>
          </div>
          <img src="/motivos/4.png" alt="App Ícone" className="w-full h-44 object-contain mt-auto" />
          {/* Este não tem botão no canto inferior direito conforme a imagem */}
        </div>

      </div>
    </div>
  );
}