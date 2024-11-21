"use client"

import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "@/components/sidebar/sidebar";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { ReactNode, useEffect, useState, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DropdowUser } from "@/components/ui/dropdow-user";


type Props = {
    children: ReactNode;
   
}
 
 
export default function Layout({ children }:Props) {
    
    
    const [menuOpen, setMenuOpen] = useState(false);
    
    const [windowSize, setWindowSize] = useState(0);
   
    const [menuDrop, setMenuDrop] = useState(false);
    
    const closeMenuOnClick = () => {
        let width = window.innerWidth
        setWindowSize(width)
        if(width <=720)
            setMenuOpen(!menuOpen);
    }

    const handleMenu = ()=> {
        setMenuOpen(!menuOpen);    
    }
   
   
    const handleClickDrop = () => {
        setMenuDrop (!menuDrop);
           
        }
        
    const closeDropClick = (b: boolean) => {
        setMenuDrop(!menuDrop);
        
    }

    const refOneDropDown = useRef<HTMLDivElement>(null);
    const refOneDropDownIcon = useRef<HTMLDivElement>(null);
    
    const handleClickOutside = (e: MouseEvent) => {
       if(refOneDropDown.current && !refOneDropDown.current.contains(e.target as Node) ){
            if(refOneDropDownIcon.current && refOneDropDownIcon.current.contains(e.target as Node))
                return
            setMenuDrop (false);
   
    }
    
}
    useEffect (()=> {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

   
    
    return (
        <main className=" relative w-full mx-auto">
            
            <section className={` fixed  ${menuOpen&& 'h-screen md:h-auto'}  w-screen  lg:w-80 bg-bgcol z-10 transition-all `} >
               {menuOpen && 
                <Sidebar closeMenu={closeMenuOnClick} />
               }
               
            </section>
                
    
            <section className="  fixed top-0  h-24  w-full z-10 shadow-xl bg-bgcol">
                <div className=" flex flex-row justify-between items-center h-full">
                    <div className="basis-1/6 mx-4 flex items-center justify-around">
                    
                    <div className=" hidden md:block"> <Logo w={50} h={55} /></div>
                    
                    
                    <FontAwesomeIcon 
                        onClick={handleMenu} 
                        icon={faBars} 
                        className=" cursor-pointer size-10"
                    />
                   
            
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
                        <div ref={refOneDropDownIcon}>
                            <FontAwesomeIcon
                                onClick={handleClickDrop} 
                                icon={faCaretDown}
                                className="size-6 cursor-pointer ml-1"

                            />
                        </div>
                       
                    </div>
                    {menuDrop&& 
                        <div ref={refOneDropDown}> <DropdowUser closeDrop={closeDropClick} /></div>
                       
                    }
                </div>
            
          </div> 
            </section>
            
            
            <section className={` absolute mt-24 h-auto ${menuOpen? 'sm:left-0 md:left-0 lg:left-80 hidden md:block md:mt-[26rem] lg:mt-24' : 'left-0 block'} `}>
                    {children}
            </section>
            
        
        </main>
    );
}