
import { NavLogout } from "./nav-logout";
import { SidebarItem } from "./sidebarItem";
import { faClipboard, faClone, faDesktop, faDiagramProject, faHouse, faNetworkWired, faPhoneVolume, faPrint } from "@fortawesome/free-solid-svg-icons";



export const Sidebar = () => {
    return (
        <div className=" fixed flex flex-col justify-between h-full  translate-y-px top-0 w-80 shadow-xl ">
          <div className=" flex flex-col justify-between items-center">
            <nav className="mt-32" >
                    <SidebarItem
                      href="/home"
                      icon={faHouse}
                      label="Página inicial"
                    />
                    <SidebarItem
                      href="/admin"
                      icon={faDiagramProject}
                      label="Painel Admin"
                    />
                    <SidebarItem
                      href="/computers"
                      icon={faDesktop}
                      label="Computadores"
                    />
                    <SidebarItem
                      href="/printers"
                      icon={faPrint}
                      label="Impressoras"
                    />
                    <SidebarItem
                      href="/phones"
                      icon={faPhoneVolume}
                      label="Telefones"
                    />
                     <SidebarItem
                      href="/networks"
                      icon={faNetworkWired}
                      label="Redes"
                    />
                    <SidebarItem
                      href="/reports"
                      icon={faClipboard}
                      label="Relatórios"
                    />
                    <SidebarItem
                      href="/loan"
                      icon={faClone}
                      label="Dispor equipamentos"
                    />
              </nav>
          </div>
          <div className="p-3 w-72">
            <NavLogout />
          </div>
        </div>
        
    );
}