import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "../../tailwind.config";


export const metadata: Metadata = {
  title: "Tara Travels",
  description: "Tara Travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <body className={'flex flex-col justify-center bg-[#fff]'}>
          <Header />
            {children}
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
