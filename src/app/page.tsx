// "use client"

import Footer from "@/components/footer/footer";
import HomeContainer from "@/components/home/homeContainer";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Affiliates - Top Affiliate Marketing Platform",
  description: "Link Affiliates helps businesses create and manage high-converting affiliate marketing campaigns. Schedule a meeting today!",
};

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <HomeContainer/>
      <Footer />
    </div>
  );
}
