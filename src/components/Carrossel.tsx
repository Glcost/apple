"use client"

import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const carrosselImagens = [
    { src: "/carrossel/1.png", alt: "Close-up da parte superior trase iPhone 17 PRO em letras garrafais cor de laranja sobre um fundo preto." },
    { src: "/carrossel/2.png", alt: "Visão em perspectiva lateral de quatro iPhones alinhados lado a lado contra um fundo preto. Os aparelhos mostram uma transição de cores do preto fosco para o cinza, prata e um tom de bronze metálico, destacando o relevo das câmeras e os botões laterais." },
    { src: "/carrossel/3.png", alt: "Dois iPhones na cor titânio dourado exibidos sobre um fundo preto. O aparelho da esquerda está de costas, mostrando o módulo com três lentes de câmera e o logotipo da Apple, enquanto o da direita está de frente, exibindo a tela ligada com o entalhe da Dynamic Island no topo." }

]

export default function BannerCarrossel() {

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false})
    )
    return (
       <section className="w-full bg-black flex justify-center">
        <Carousel  className="w-full  relative"  plugins={[plugin.current]}>
            <CarouselContent>
                {carrosselImagens.map((imagem,index)=>(
                    <CarouselItem key={index}>
                        <div className="relative w-full bg-black h-[300px] md:h-[85vh] overflow-hidden">
                            <Image
                            src={imagem.src}
                            alt={imagem.alt}
                            fill
                            className="object-cover"
                            priority={index===0}

                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 border-slate-200"/>
        </Carousel>
    </section>

    )
}
