'use client'
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from "next/image";
import Logo from "../../public/travel-tara.png";
import SplashScreen from "./splash";
import LoginPage from "./login/page";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);


  return (
    <div className={`flex flex-col justify-center bg-black/20 bg-blend-overlay items-center h-screen bg-[url('../../public/assets/background.png')] bg-fill w-[100vw] h-[100vh]  no-repeat`}>
      <SplashScreen />
    </div>
  );
}
