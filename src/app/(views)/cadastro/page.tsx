'use client'

import LayoutApp from "@/components/shared/LayoutApp/page";
import Link from "next/link";

export default function Cadastro() {
  return (
    <LayoutApp>
      <div className="flex flex-col items-center justify-start h-screen">
          <div className="w-96 text-center text-2xl rounded-t-xl bg-blue-700 p-3 text-white font-bold">
              Cadastro
          </div>

          <div className="w-96 bg-blue-500 p-5">
            <form className="flex flex-col gap-3">
                <input 
                    type="text" 
                    placeholder="Nome completo"
                    className="outline-none p-3 rounded-md text-md text-black font-bold h-10"
                 />
                <input 
                        type="text" 
                        placeholder="exemplo@gmail.com"
                        className="outline-none p-3 rounded-md text-md text-black font-bold h-10"
                />
                <input 
                        type="password" 
                        placeholder="*******"
                        className="outline-none p-3 rounded-md text-md text-black font-bold h-10"
                />
              <Link href="/pedido" className="p-3 rounded-md bg-green-600 text-white hover:bg-green-700 text-center">
                Cadastrar
              </Link>
              <Link href="/" className="p-3 rounded-md bg-red-400 text-white hover:bg-red-600 text-center">
                Sair
              </Link>
            </form>
          </div>
      </div>
    </LayoutApp>
  );
}
