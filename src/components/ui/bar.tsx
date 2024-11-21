
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    openClose: (b: boolean) => void;
}


export const Bar  = ( { openClose }: Props ) => {
    
    
    const [active, setActive] = useState(true);
    
    const toggleBar = () => {
        setActive (!active);
        openClose(active);


    }
    
    return (
       <FontAwesomeIcon icon={faBars} onClick={toggleBar}
            className="size-10 cursor-pointer"     
        />
     
    );

}

