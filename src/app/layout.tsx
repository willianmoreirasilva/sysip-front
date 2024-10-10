import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/ui/header";
import { Sidebar } from "@/components/sidebar/sidebar";


export const metadata: Metadata = {
  title: "DI"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">
        {children} 
      </body>
    </html>
  );
}
