"use client"

import Footer from "@/components/footer/footer";
import HomeContainer from "@/components/home/homeContainer";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <HomeContainer/>
      <Footer />
    </div>
  );
}
