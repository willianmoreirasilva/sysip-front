"use client"

import { faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


export const NavLogout = (  )=> {
    const router = useRouter();
    
    const handleClick = ()=> {
        router.replace('/signin')
    }
    
    return(
       <div onClick={handleClick} className={` cursor-pointer flex items-center gap-6 p-4 w-72 rounded mb-1 hover:bg-blue-950 hover:text-col4y`}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className={`size-6 $`} />
        <div className="text-lg">Sair</div>

       </div>
    );
   
}