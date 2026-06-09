"use client" // Define que este é um Client Component, permitindo hooks (useState) e eventos de clique (onClick)

import { useState } from "react"
import Image from "next/image"

/**
 * Interface que define a tipagem das propriedades (props) aceitas pelo CardProduto.
 */
interface CardProdutoProps {
  id: string | number;     // Identificador único do produto (útil para adicionar ao carrinho)
  title: string;           // Nome do produto (ex: "iPhone 17 Pro")
  description: string;     // Breve descrição dos recursos do aparelho
  price: number;           // Preço numérico bruto (ex: 6499)
  imageSrc: string;        // Caminho da imagem dentro da pasta /public
  destaque?: boolean;      // Propriedade opcional para dar prioridade de carregamento ou selo "Novo"
}

/**
 * Componente de Vitrine de Produto estilizado no padrão Apple Store.
 * Inclui formatação de moeda automática, simulação de cores por modelo e tratamento de imagem quebrada.
 */
export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  id,
  destaque
}: CardProdutoProps) {

  // -------------------------------------------------------------------------
  // ESTADOS E VALIDAÇÕES PREVENTIVAS
  // -------------------------------------------------------------------------
  
  /**
   * Estado para controlar o link da imagem atual.
   * Inicializa com a string vinda do banco/JSON. Caso a imagem falhe ao carregar,
   * a função 'onError' na tag <Image> altera este estado para uma imagem reserva (placeholder).
   */
  const [imgSrc, setImgSrc] = useState(imageSrc);

  // -------------------------------------------------------------------------
  // FORMATAÇÃO DE PREÇOS (PADRÃO BRASILEIRO)
  // -------------------------------------------------------------------------

  // Formata o preço à vista. Ex: 6499 vira "R$ 6.499" (sem centavos, estilo Apple)
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);

  // Divide o preço por 12 parcelas e formata com os centavos inclusos. Ex: "R$ 541,58"
  const installmentValue = price / 12;
  const formattedInstallment = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(installmentValue);

  // -------------------------------------------------------------------------
  // LÓGICA DE ESTILIZAÇÃO DINÂMICA
  // -------------------------------------------------------------------------

  /**
   * Retorna uma array de classes do Tailwind representando as cores clássicas de cada modelo.
   * Baseia-se em palavras-chave encontradas no título do produto.
   */
  const getColors = () => {
    if (title.toLowerCase().includes("air")) return ["bg-slate-200", "bg-zinc-100", "bg-zinc-800"];
    if (title.toLowerCase().includes("pro")) return ["bg-stone-300", "bg-zinc-100", "bg-zinc-900"];
    if (title.toLowerCase().includes("17e")) return ["bg-rose-100", "bg-neutral-100", "bg-zinc-800"];
    return ["bg-purple-200", "bg-emerald-100", "bg-sky-100", "bg-zinc-800"]; // Cores padrão (linha base)
  };

  // -------------------------------------------------------------------------
  // RENDERIZAÇÃO DO LAYOUT (HTML / TAILWIND)
  // -------------------------------------------------------------------------
  return (
    // Container Geral do Card: Alinha os itens na vertical e centraliza os textos. 
    // A classe 'group' serve para que elementos filhos reajam quando o usuário passa o mouse no card.
    <div className="flex flex-col items-center text-center w-full h-full max-w-xs mx-auto group">
      
      {/* CONTAINER DA IMAGEM
        Usa 'aspect-square' para ser sempre um quadrado perfeito e 'relative' para o Next.js Image funcionar.
        O fundo cinza claro (bg-neutral-100) simula o ambiente clean de renders de tecnologia.
      */}
      <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-neutral-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-sm">
        <Image
          src={imgSrc} 
          alt={title}
          fill // Preenche o container relativo pai inteiramente
          className=" transition-transform duration-300 group-hover:scale-105" // 'object-contain' não deixa a foto do produto cortar
          sizes="(max-width: 768px) 100vw, 300px" // Otimização de performance para o Next descascar tamanhos de tela
          priority={destaque} // Imagens marcadas em destaque carregam mais rápido (evita LCP baixo)
          
          // Tratamento preventivo: se o link quebrar, assume o placeholder sem quebrar a tela
          onError={() => {
            setImgSrc("/img/placeholders.png"); 
          }}
        />
      </div>

      {/* SELETOR DE CORES DECORATIVO (Bolinhas abaixo da imagem) */}
      <div className="flex justify-center gap-1.5 mt-5 h-3 items-center">
        {getColors().map((colorClass, idx) => (
          <span 
            key={idx} 
            className={`w-2.5 h-2.5 rounded-full ${colorClass} shadow-inner border border-black/5 inline-block`}
          />
        ))}
        {/* Bolinha preta padrão que acompanha praticamente toda variação de cor da Apple */}
        <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-black/5 inline-block" />
      </div>

      {/* TEXTO DE DESTAQUE ("Novo") - Mantém a altura fixa mesmo vazio para não desalinharem os nomes dos cards da linha */}
      <div className="h-5 mt-4 flex items-center justify-center">
        {destaque && (
          <span className="text-[11px] font-bold text-[#bf4800] uppercase tracking-wider">
            Novo
          </span>
        )}
      </div>

      {/* NOME DO MODELO */}
      <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mt-1">
        {title}
      </h2>

      {/* DESCRIÇÃO DO PRODUTO (Trava em no máximo 2 linhas com 'line-clamp-2') */}
      <p className="text-[13px] text-zinc-500 mt-2 leading-relaxed max-w-[240px] min-h-[38px] line-clamp-2">
        {description}
      </p>

      {/* PREÇOS E PARCELAMENTOS */}
      <div className="mt-5 text-[13px] font-medium text-zinc-900 space-y-0.5">
        <p className="text-zinc-500">
          A partir de <span className="text-zinc-900 font-semibold">{formattedInstallment}/mês</span>
        </p>
        <p className="text-zinc-400 text-xs">
          ou {formattedPrice} à vista
        </p>
      </div>

      {/* BOTÕES DE INTERAÇÃO (Learn More / Buy) */}
      <div className="flex items-center justify-center gap-5 mt-6 w-full">
        {/* Botão de Saiba Mais (Estilo cápsula escura) */}
        <button 
          onClick={() => alert(`Mais detalhes sobre ${title}`)}
          className="bg-black hover:bg-neutral-900 text-white text-xs font-normal px-4 py-2 rounded-full transition-colors duration-200"
        >
          Learn More
        </button>
        
        {/* Botão de Compra Rápida (Estilo link com hover sublinhado e seta animada) */}
        <button 
          onClick={() => alert(`Item ${id} adicionado!`)}
          className="text-[#000000] hover:underline text-xs font-normal flex items-center gap-0.5 group/link"
        >
          Buy
          {/* A setinha dá um leve pulo para a direita (translate-x) quando passa o mouse no link de compra */}
          <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5 text-[10px]">
            &gt;
          </span>
        </button>
      </div>

    </div>
  )
}