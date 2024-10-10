"use client"

type Props = {
    label: string;
    onClick?: () => void;
    btn: 1 | 2 | 3 
    size: 1 | 2 | 3
}
export const Button = ({ label, onClick, btn, size }: Props) => {

    return (
        <div onClick={onClick}
            className={`flex justify-center items-center cursor-pointer rounded h-12
                ${btn === 1 && ' bg-yellow-400 font-bold  text-bgcol1'}
                ${btn === 2 && ' bg-blue-600 font-bold  text-white'}
                
                `}

        >
            {label}
        </div>
    );

}