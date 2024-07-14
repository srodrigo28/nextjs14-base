import LayoutApp from "@/components/shared/LayoutApp/page";
import Link from "next/link";

export default function Dashboard(){
    return(
        <LayoutApp>
            <div className="bg-blue-600 text-white flex p-5 rounded-lg text-2xl justify-between items-center">
                <h1>Dashboard</h1>
                <Link href="/" className="bg-red-400 p-3 rounded-md text-sm hover:bg-red-600" >Sair</Link>
            </div>
        </LayoutApp>
    )
}