import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (

        <section className="flex flex-col justify-center items-center w-full min-h-[30vh] bg-white gap-6 py-8">
            <div className="w-full md:w-[90%] px-4">
                <div id="titulo" className="flex justify-between mb-4">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight">iPhone</h1>
                </div>

                <nav className="flex flex-row mt-5 gap-6 md:gap-4 overflow-x-auto snap-x hide-scrollbar pb-4 justify-start lg:justify-between w-full">
                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_iphone_17pro.png"
                            alt="iPhone 17 Pro"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">iPhone 17 Pro</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_iphone_air.png"
                            alt="iPhone Air"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">iPhone Air</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_iphone_17.png"
                            alt="iPhone 17"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">iPhone 17</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_iphone_17e.png"
                            alt="iPhone 17e"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">iPhone 17e</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_iphone_16.png"
                            alt="iPhone 16"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">iPhone 16</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_accessories.png"
                            alt="Acessórios"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">Acessórios</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_compare.png"
                            alt="Comparar"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">Comparar</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_shop.png"
                            alt="Comprar iPhone"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">Comprar iPhone</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center min-w-[80px] snap-center">
                        <Image
                            src="/iphones/nav_ios.png"
                            alt="IOS"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain mb-2"
                        />
                        <Link href={'/'} className="text-xs text-center whitespace-nowrap">IOS</Link>
                    </div>
                </nav>
            </div>
        </section>


    );
}
