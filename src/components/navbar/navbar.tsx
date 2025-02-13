"use client"

import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const LinkTo = dynamic(() => import("react-scroll").then(mod => mod.Link), { ssr: false });
const Navbar = () => {
    const pathname = usePathname(); // Get the current URL
    const [menuOpen, setMenuOpen] = useState(false);

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
                        {/* <LinkTo to={"home"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap">Home </LinkTo>
                        <LinkTo to={"services"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap">Our Services </LinkTo>
                        <LinkTo to={"testimonials"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap">Testimonials </LinkTo>
                        <LinkTo to={"teams"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap">About Us </LinkTo>
                        <LinkTo to={"meeting"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap">Contact </LinkTo>
                     */}
                        <NavLink to="home">Home</NavLink>
                        <NavLink to="services">Our Services</NavLink>
                        <NavLink to="testimonials">Testimonials</NavLink>
                        <NavLink to="teams">About Us</NavLink>
                        <NavLink to="meeting">Contact</NavLink>
                    </div>
                ) : (
                    <Link href="/" className="w-full flex justify-end gap-4">
                        <div className="btn rounded-full btn-ghost border-black hover:border-black">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                            <p className="font-semibold">Back to Home</p>
                        </div>
                    </Link>
                )}

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="black">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </button>
            </div>

            



            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <button 
                    className="absolute top-5 right-5"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                        <path d="M480-410 250-180l-70-70 230-230-230-230 70-70 230 230 230-230 70 70-230 230 230 230-70 70-230-230Z"/>
                    </svg>
                </button>

                <div className="flex flex-col items-start gap-6 mt-20 pl-6">
                    <NavLink to="home" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="services" onClick={() => setMenuOpen(false)}>Our Services</NavLink>
                    <NavLink to="testimonials" onClick={() => setMenuOpen(false)}>Testimonials</NavLink>
                    <NavLink to="teams" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="meeting" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
};

/** Reusable Navigation Link */
const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
    return (
        <LinkTo 
            to={to}
            smooth={true}
            duration={700}
            offset={-90}
            onClick={onClick}
            className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap"
        >
            {children}
        </LinkTo>
    );
};


export default Navbar