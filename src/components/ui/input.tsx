"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    placeholder: string;
    password?: boolean
    value?: string;
    onChange?: (newValue: string) => void;
    filled?: boolean;
    icon?: IconDefinition;
    smallIcon?: boolean,
    smallInput?: boolean

  }

export const Input = ({ placeholder, password,icon, filled, smallInput,smallIcon, value, onChange }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className={` has-[:focus]:border-white flex items-center ${smallInput? 'h-10' : 'h-12'} w-full border-2 rounded border-col3 ${filled && 'bg-col3'} `}>
            {icon && 
                <FontAwesomeIcon
                    icon={icon}
                    className={`ml-4 ${smallIcon?'size-5' :'size-6'} ${smallIcon && ' opacity-35'}`}
                />
            }
            <input
                type={password && !showPassword ? 'password' : 'text'}
                className="flex-1 outline-none bg-transparent h-full px-4 font-light "
                placeholder={placeholder}
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
               
            />
             {password && 
                    <FontAwesomeIcon 
                        onClick={()=> setShowPassword(!showPassword)}
                        icon={showPassword ? faEye : faEyeSlash}
                        className=" cursor-pointer size-6 mr-4"

                    />
                }

        </div>
    );   
}