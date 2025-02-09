"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LinkTo = dynamic(() => import("react-scroll").then(mod => mod.Link), { ssr: false });
const Navbar = () => {
    const pathname = usePathname(); // Get the current URL

    return(
        <nav className="sticky top-0 z-50 w-screen h-[90px] bg-white border-b">
            <div className="flex w-full h-full justify-start gap-20 items-center max-w-[95%] m-auto">
                <div className="w-full">
                    <Link href="/">
                        <Image alt="logo" src="/logo.webp" width={200} height={200} className=""/>
                    </Link>
                </div>
                {/* hide this when not in "/" */}
                {pathname === "/" ? (
                    <div className="hidden lg:flex justify-start gap-12 items-center h-full">
                        <LinkTo to={"home"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] whitespace-nowrap">Home </LinkTo>
                        <LinkTo to={"services"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] whitespace-nowrap">Our Services </LinkTo>
                        <LinkTo to={"testimonials"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] whitespace-nowrap">Testimonials </LinkTo>
                        <LinkTo to={"teams"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] whitespace-nowrap">About Us </LinkTo>
                        <LinkTo to={"meeting"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] whitespace-nowrap">Contact </LinkTo>
                    </div>
                ) : (
                    <Link href="/" className="w-full flex justify-end gap-4">
                        <div className="btn rounded-full btn-ghost border-black hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                            <p className="font-semibold">Back to Home</p>
                        </div>
                    </Link>
                )}
            </div>
        </nav>
    )
};

export default Navbar