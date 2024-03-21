'use client'
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import SplashScreen from "./login/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import HomeComponent from "@/components/home";
import SideNavBar from "@/components/sideNav";

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
    <div className=" flex w-full h-full  ">
      <SideNavBar />
      <div className="flex w-[90vw] px-10 py-8">
        <HomeComponent />
      </div>
    </div>
  );
}
