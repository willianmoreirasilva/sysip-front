
import { useState } from "react";
import { NavLogout } from "./nav-logout";
import { SidebarItem } from "./sidebarItem";
import { faClipboard, faClone, faDesktop, faDiagramProject, faHouse, faNetworkWired, faPhoneVolume, faPrint, faUser } from "@fortawesome/free-solid-svg-icons";

type Props = {
  closeMenu: ()=> void
}


export const Sidebar = ({ closeMenu }: Props) => {
  

  return (
        <div className="flex flex-col justify-between translate-y-px w-screen lg:w-80 lg:absolute shadow-xl h-full ">
          <div className=" flex flex-col justify-between ml-8">
            <nav className="mt-32 grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-col gap-4 " >
                    <SidebarItem close={closeMenu} 
                      href="/home"
                      icon={faHouse}
                      label="Página inicial"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/admin"
                      icon={faDiagramProject}
                      label="Painel Admin"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/computers"
                      icon={faDesktop}
                      label="Computadores"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/printers"
                      icon={faPrint}
                      label="Impressoras"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/phones"
                      icon={faPhoneVolume}
                      label="Telefones"
                    />
                     <SidebarItem close={closeMenu} 
                      href="/networks"
                      icon={faNetworkWired}
                      label="Redes"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/reports"
                      icon={faClipboard}
                      label="Relatórios"
                    />
                    <SidebarItem close={closeMenu} 
                      href="/loan"
                      icon={faClone}
                      label="Dispor equipamentos"
                    />
                    <div className=" lg:hidden">
                      <SidebarItem close={closeMenu} 
                        href="/user"
                        icon={faUser}
                        label="Willian Moreira"
                      />
                    </div>
                     <div className="mt-16 md:mt-0 lg:mt-24">
                      <NavLogout />   
                    </div>

              </nav>
          </div>
         
        </div>
        
    );
}