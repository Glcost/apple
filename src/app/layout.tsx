import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple",
  description: "Think Different",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="bg-neutral-100 flex-1">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
