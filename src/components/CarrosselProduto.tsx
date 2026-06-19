"use client"

import React from "react"
import CardProduto from "@/components/CardProduto"
// Importando os dados do JSON e nomeando a variável como 'produtos'
import produtos from "../../produtos.json" 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function BannerCarrossel() {
    return (
        <section className="w-full bg-neutral-100 flex justify-center py-12">
            <div className="w-full max-w-6xl px-8 md:px-12"> 
                <Carousel className="w-full relative">
                    <CarouselContent className="-ml-4">
                        
                        {/* O .map agora percorre diretamente o arquivo JSON importado */}
                        {produtos.map((produtos) => (
                            <CarouselItem 
                                key={produtos.id} 
                                className=" basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
                            >
                                {/* O w-full h-full garante que todos os cards fiquem alinhados perfeitamente */}
                                <div className="p-1 w-full h-full">
                                    <CardProduto
                                        id={produtos.id}
                                        title={produtos.title}
                                        description={produtos.description}
                                        price={produtos.price}
                                        imageSrc={produtos.imageSrc}
                                        destaque={produtos.destaque}
                                    />
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    
                    {/* Botões de navegação posicionados nas laterais de fora do carrossel */}
                    <CarouselPrevious className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 shadow-md border-slate-200 z-10 hidden md:flex"/>
                    <CarouselNext className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 shadow-md border-slate-200 z-10 hidden md:flex"/>
                </Carousel>
            </div>
        </section>
    )
}