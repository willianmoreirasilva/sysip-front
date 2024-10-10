import Image from "next/image";
import Link from "next/link";

type Props = {
    w: number;
    h: number;
    
}

export const Logo = ( { w, h}: Props) => {
    return (
        <Link href="/">
            <Image
                src={'/logo.png'}
                alt="Di"
                width={w} 
                height={h}
                quality={100}

            />
        </Link>
    );
}