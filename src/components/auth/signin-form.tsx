"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/');
    }

    return (
        <>
            <Input
                placeholder="e-mail" 
                value={emailField}
                onChange={t=>setEmailField(t)}
                
               
            />
          
            <Input 
                placeholder="senha" 
                value={passwordField}
                onChange={t=>setPasswordField(t)}
                password

            />
            <Button
                label="Entrar"
                onClick={handleEnterButton}
                btn={1}
                size={2}
            />
        </>
    );
}