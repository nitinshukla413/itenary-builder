'use client'
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import SplashScreen from "./login/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import HomeComponent from "@/components/home";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
    const isLoggedIn = localStorage.getItem('login')
    console.log(isLoggedIn, "<isLoggedIn")
    if (!isLoggedIn) {
      route.push('/login')

    }
  }, []);


  return (
    <div className="w-full h-full bg-white">
      <HomeComponent />
    </div>
  );
}
