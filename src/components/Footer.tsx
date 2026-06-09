import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 px-36 py-8 flex flex-col  gap-6">
      <div className="flex justify-between items-center text-xs text-slate-400">
        <p> Copyright © {currentYear} Apple Inc. Todos os direitos reservados. Apple Computer Brasil Ltda. CNPJ: 00.623.904/0003-35</p>
        <p className="text-slate-300">Feito com carinho para você.</p>
      </div>
    </footer>
  );
}
