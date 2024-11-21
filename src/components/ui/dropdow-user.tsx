"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    closeDrop: (b: boolean) => void;
}

export const DropdowUser = ({closeDrop}: Props) => {

    const router = useRouter();
    
    const handleClick = ()=> {
        router.replace('/signin')
    }
   
    const [closeMenuDrop, setCloseMenuDrop] = useState(true);
    const closeDropMenu = () =>{
        setCloseMenuDrop(false)
        closeDrop(closeMenuDrop);
    }
   
    return (
        <div className=" flex flex-col items-center absolute bg-gray-950 w-40 h-18 rounded-md shadow p-1 ml-2 ">
           
                <Link href={"/user"} onClick={closeDropMenu} className=" p-1 w-40 rounded mb-1 ml-4  hover:text-col4y">Configurações</Link>
               
                <div onClick={handleClick} className=" cursor-pointer p-1 w-40 rounded mb-1 ml-4  hover:text-col4y">Sair</div>
              
        </div>
    );

}

