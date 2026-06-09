import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (

        <section className="flex flex-col justify-center items-center w-full h-[40vh] bg-white gap-10">
            <div className="w-[90%]">
                <div id="titulo" className="flex justify-between">
                    <h1 className="text-6xl">iPhone</h1>
                </div>

                <nav className=" flex flex-row mt-5 h-10/12 justify-around">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_iphone_17pro.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone 17 Pro</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_iphone_air.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone Air</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_iphone_17.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone 17</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_iphone_17e.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone 17e</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_iphone_16.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>iPhone 16</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_accessories.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Acessórios</Link>
                    </div>


                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_compare.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Comparar</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_shop.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>Comprar iPhone</Link>
                    </div>


                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/iphones/nav_ios.png"
                            alt="Logo da empresa"
                            width={50}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                        <Link href={'/'}>IOS</Link>
                    </div>
                </nav>
            </div>
        </section>


    );
}
