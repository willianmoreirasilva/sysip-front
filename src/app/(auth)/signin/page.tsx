
import { SigninForm } from "@/components/auth/signin-form";
import { Logo } from "@/components/ui/logo";

export default function Page() {
     
    return (
        <div className=" w-full h-full mx-auto mt-8  flex flex-col justify-around  items-center">
            <div className="p-10">
                    <Logo w={100} h={105}/>
            </div>
            <div className=" flex flex-col gap-8 w-80 ">
                    <SigninForm/>
            </div>
           
        </div>
    );
}