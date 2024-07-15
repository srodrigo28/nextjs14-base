import Link from "next/link";
import { ElementType } from "react";
import { FaHandsWash, FaPlusSquare, FaRegArrowAltCircleDown } from "react-icons/fa";

interface ItemMenuProps{
    icone: ElementType
    label: string
    url: string
}

function ItemMenu( props: ItemMenuProps ) {
    return(
        <Link href={props.url} className="flex gap-3 px-3 py-3 hover:bg-zinc-900 rounded-md text-2xl">
            <props.icone className="text-zinc-200" size={25} />
            <span className="text-zinc-200">{props.label}</span>
        </Link>
    )
}

export default function Menu(){
    return(
        <div className="w-62 bg-blue-700 h-screen">
            <nav className="flex flex-col gap-2 py-2 px-3">
                <ItemMenu icone={FaHandsWash} label="Dashoard" url="/dashboard" />
                <ItemMenu icone={FaPlusSquare} label="Cadastro" url="/cadastro" />
                <ItemMenu icone={FaPlusSquare} label="Produtos" url="/product" />
                <ItemMenu icone={FaRegArrowAltCircleDown} label="Login" url="/" />
            </nav>
        </div>
    )
}

