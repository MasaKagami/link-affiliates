"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const LinkTo = dynamic(() => import("react-scroll").then(mod => mod.Link), { ssr: false });
const Navbar = () => {
    return(
        <nav className="sticky top-0 z-50 w-screen h-[90px] bg-white border-b">
            <div className="flex w-full h-full justify-start gap-20 items-center max-w-[95%] m-auto">
                <Link href="/">
                    <Image alt="logo" src="/logo.png" width={200} height={200} className=""/>
                </Link>
                <div className="hidden sm:flex justify-start gap-12 items-center h-full">
                    <LinkTo to={"home"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Home </LinkTo>
                    <LinkTo to={"services"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Our Services </LinkTo>
                    <LinkTo to={"testimonials"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Testimonials </LinkTo>
                    <LinkTo to={"teams"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">About Us </LinkTo>
                    <LinkTo to={"meeting"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Contact </LinkTo>
                </div>
            </div>
        </nav>
    )
};

export default Navbar