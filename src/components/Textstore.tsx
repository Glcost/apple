import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (

        <section className="flex flex-col justify-center items-center w-full h-[40vh] bg-white gap-10">
            <div className="w-[90%]">
                <div id="titulo" className="flex justify-between">
                    <h1 className="text-6xl">Loja</h1>
                </div>

                <nav className=" flex flex-row mt-5 h-10/12 justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/Mac.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Mac</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/iPhones.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/iPads.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPad</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/apple watchs.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Apple Watch</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/Fone apple.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>AirPods</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/iPads.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>AirTag</Link>
                    </div>


                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/tv.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Apple tv 4k</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/img/acessorios.png"
                            alt="Logo da empresa"
                            width={60}
                            height={60}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Acessórios</Link>
                    </div>

                
                </nav>
            </div>
        </section>


    );
}
