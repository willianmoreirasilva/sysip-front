"use client"

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    icon: IconDefinition;
    href: string;
    active?: boolean;
}

export const SidebarItem = ( { label, icon, href, active }:Props )=> {
    const pathName = usePathname();
    const isUrl = pathName === href; 
    
    return(
       <Link href={href} className={`flex items-center gap-6 p-3 w-72 rounded mb-1 ${active || isUrl && ' text-col4y'} 
                                    hover:shadow hover:bg-blue-950 hover:text-col4y`}>
        <FontAwesomeIcon icon={icon} className={`size-6 ${active || isUrl && ' text-col4y'}`} />
        <div className="text-lg">{label}</div>

       </Link>
    );
   
}