'use client'

import LayoutApp from "@/components/shared/LayoutApp/page";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutApp>
      <div className="flex flex-col items-center justify-start h-screen">
          <div className="w-96 text-center text-2xl rounded-t-xl bg-blue-700 p-3 text-white font-bold">
              Login
          </div>

          <div className="w-96 bg-blue-500 p-5">
            <form className="flex flex-col gap-3">
              <input 
                    type="text" 
                    placeholder="E-mail"
                    className="outline-none p-3 rounded-md text-md text-black font-bold h-10"
              />
              <input 
                    type="password" 
                    placeholder="*******"
                    className="outline-none p-3 rounded-md text-md text-black font-bold h-10"
              />
              <Link href="/dashboard" className="p-3 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-center">
                Entrar
              </Link>
              <Link href="/cadastro" className="p-3 rounded-md bg-blue-700 text-white hover:bg-blue-800 text-center">
                Cadastro
              </Link>
            </form>
          </div>
      </div>
    </LayoutApp>
  );
}
