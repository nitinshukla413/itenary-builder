'use client'
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useParams, usePathname, useRouter } from "next/navigation";
import HomeComponent from "@/components/home";
import Layout from "@/components/layout";

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
    <Layout>
      <HomeComponent />
    </Layout>
  );
}
