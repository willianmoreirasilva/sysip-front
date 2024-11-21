"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


type Props = {
    label: string;
    icon: IconDefinition;
    href: string;
    active?: boolean;
    close: ()=> void
  
}


export const SidebarItem = ( { label, icon, href, active, close}:Props )=> {
    const pathName = usePathname();
    const isUrl = pathName === href;
    const [closed, setClosed] = useState(false)
    const closeMenu = () => {
        setClosed(false)
        close();
    
    }

    return(
       <Link href={href} onClick={closeMenu}  className={`flex items-center gap-6 p-3 w-72 md:w-60 lg:w-72 rounded mb-1 ${active || isUrl && ' text-col4y'} 
                                    hover:shadow hover:bg-blue-950 hover:text-col4y`}>
        <FontAwesomeIcon icon={icon} className={`size-6 ${active || isUrl && ' text-col4y'}`} />
        <div className="text-lg">{label}</div>

       </Link>
    );
   
}