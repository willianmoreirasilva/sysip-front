"use client"

import { Header } from "@/components/header/header";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
   
}
 
 
export default function Layout({ children }:Props) {
    
    const [menuOpen, setMenuOpen] = useState(true)
    
    const getBar = (open: boolean)=> {
        setMenuOpen(open);

    }
   

    return (
        <main className=" relative h-screen w-full mx-auto">
            
            <section className={`h-screen `} >
               {menuOpen && 
                <Sidebar/>
               }
               
            </section>
                
    
            <section className=" fixed top-0  h-24  w-full z-10 shadow-xl bg-bgcol">
                <Header sendBar={getBar} /> 
            </section>
            
            
            <section className={` hidden absolute top-20 h-auto lg:left-80`}>
                    {children}
            </section>
            
        
        </main>
    );
}