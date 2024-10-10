'use client'

import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../ui/input";
import { useState } from "react";
import { Logo } from "../ui/logo";
import { Bar } from "../ui/bar";

type Props = {
    sendBar: (v:boolean) => void
}

export const Header = ({ sendBar }:Props ) => {

    const [toggle, setToggle] = useState(false);
   
    const getBar = () =>{
        setToggle(!toggle)
        sendBar(toggle)    
    }

    return (
          <div className=" flex flex-row justify-between items-center h-full">
            <div className="basis-1/6 mx-4 flex items-center justify-around">
                <div className=" hidden lg:block"> <Logo w={50} h={55} /></div>
                <div onClick={getBar} className="">
                    <Bar />
                </div>
            
            </div >
            
            <div className="basis-3/6 min-w-40 max-w-lg mr-12">
                <Input 
                    placeholder="Pesquisar IP..."
                    icon={faMagnifyingGlass}
                    smallIcon
                />
            </div>
            <div className="hidden lg:block mr-8">
                <div className=" basis-3/12 flex items-center justify-end p-4">
                <p className="font-semibold text-lg">Willian Moreira</p>
                <FontAwesomeIcon 
                    icon={faCaretDown}
                    className="size-6 cursor-pointer"
                />
                </div>
            </div>
            


          </div>
      
    );
}