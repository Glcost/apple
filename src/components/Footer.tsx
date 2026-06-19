// ./src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#6e6e73] text-[12px] pt-8 pb-12  border-t border-[#d2d2d7]">
      <div className="relative w-full mb-10 flex items-center  shadow-xl justify-center bg-[#ffffff] h-[100px] md:h-[190px]">

        <Image
        src={"/logo/logo.png"}
        alt="logo"
        height={80}
        width={80}
        
        
        />

      </div>
      <div className="max-w-[1024px] mx-auto flex flex-col gap-6 px-4 md:px-0">
        
        {/* Seção 1: Notas de rodapé / Desclamer (Padrão Apple) */}
        <section className="text-[#86868b] leading-relaxed pb-5 border-b border-[#d2d2d7] space-y-2">
          <p>1. O valor de troca varia de acordo com a condição, ano e configuração do seu dispositivo válido.</p>
          <p>Disponível para clientes qualificados. É necessário ter mais de 18 anos. Impostos locais podem ser aplicados.</p>
        </section>

        {/* Seção 2: Mapa do Site (Sitemap Grid) */}
        <nav className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 py-4 px-4 md:px-0">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight">Descobrir e Comprar</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/store" className="hover:underline hover:text-[#1d1d1f] transition-colors">Store</Link></li>
              <li><Link href="/mac" className="hover:underline hover:text-[#1d1d1f] transition-colors">Mac</Link></li>
              <li><Link href="/ipad" className="hover:underline hover:text-[#1d1d1f] transition-colors">iPad</Link></li>
              <li><Link href="/iphone" className="hover:underline hover:text-[#1d1d1f] transition-colors">iPhone</Link></li>
              <li><Link href="/watch" className="hover:underline hover:text-[#1d1d1f] transition-colors">Watch</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight">Carteira da Apple</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/apple-pay" className="hover:underline hover:text-[#1d1d1f] transition-colors">Apple Pay</Link></li>
            </ul>
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight mt-2">Conta</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/account" className="hover:underline hover:text-[#1d1d1f] transition-colors">Gerenciar ID Apple</Link></li>
              <li><Link href="/icloud" className="hover:underline hover:text-[#1d1d1f] transition-colors">iCloud.com</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight">Apple Store</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/retail" className="hover:underline hover:text-[#1d1d1f] transition-colors">Encontre uma loja</Link></li>
              <li><Link href="/genius" className="hover:underline hover:text-[#1d1d1f] transition-colors">Genius Bar</Link></li>
              <li><Link href="/workshops" className="hover:underline hover:text-[#1d1d1f] transition-colors">Hoje na Apple</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight">Para os Negócios</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/business" className="hover:underline hover:text-[#1d1d1f] transition-colors">Apple e os Negócios</Link></li>
            </ul>
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight mt-2">Para a Educação</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/education" className="hover:underline hover:text-[#1d1d1f] transition-colors">Apple e a Educação</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[#1d1d1f] font-semibold tracking-tight">Valores da Apple</h4>
            <ul className="flex flex-col gap-2">
              <li><Link href="/accessibility" className="hover:underline hover:text-[#1d1d1f] transition-colors">Acessibilidade</Link></li>
              <li><Link href="/environment" className="hover:underline hover:text-[#1d1d1f] transition-colors">Meio Ambiente</Link></li>
              <li><Link href="/privacy" className="hover:underline hover:text-[#1d1d1f] transition-colors">Privacidade</Link></li>
            </ul>
          </div>
        </nav>

        {/* Seção 3: Informações de Venda e Varejo */}
        <p className="pb-4 border-b border-[#d2d2d7] text-[#86868b]">
          Outras formas de comprar: <Link href="/retail" className="text-[#0066cc] underline">encontre uma Apple Store</Link> ou <Link href="/distribuidores" className="text-[#0066cc] underline">revendedor autorizado</Link> perto de você. Ou ligue para 0800-761-0867.
        </p>

        {/* Seção 4: Copyright, Políticas Legais e Localização */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between gap-4 pt-2">
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-[#86868b]">
            <p>Copyright © {currentYear} Apple Inc. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[#6e6e73]">
              <Link href="/privacy" className="hover:underline border-r border-[#d2d2d7] pr-2">Política de Privacidade</Link>
              <Link href="/legal/terms" className="hover:underline border-r border-[#d2d2d7] pr-2">Termos de Uso</Link>
              <Link href="/sales" className="hover:underline border-r border-[#d2d2d7] pr-2">Vendas e Reembolsos</Link>
              <Link href="/legal" className="hover:underline">Legal</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-1 text-[#86868b]">
            <Link href="/choose-country" className="hover:underline text-[#6e6e73]">Brasil</Link>
            <p className="text-[10px] opacity-70">Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35</p>
          </div>
        </div>

      </div>
    </footer>
  );
}