"use client"

// import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
// import MeetingButton from "../meetingButton/meetingButton";
import MeetingButtonSmall from "../meetingButton/meetingButtonSmall";
import { montserrat } from "@/styles/fonts";

const LinkTo = dynamic(() => import("react-scroll").then(mod => mod.Link), { ssr: false });
const Navbar = () => {
    const pathname = usePathname(); // Get the current URL
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="sticky top-0 z-50 w-screen h-[90px] bg-black">
            <div className="flex w-full h-full justify-between gap-20 items-center max-w-[95%] m-auto">
                <div className={`text-white font-bold items-center flex gap-2 ${montserrat.className}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
                    <span className={`whitespace-nowrap`}>LINK AFFILIATES</span>
                    {/* <Link href="/">
                        <Image alt="logo" src="/logo.webp" width={200} height={200} className="w-52 h-auto"/>
                    </Link> */}
                </div>

                
                {/* hide this when not in "/" */}
                {pathname === "/" ? (
                    <>
                        <div className="hidden xl:flex justify-start gap-12 items-center text-white h-full">
                            <NavLink to="home">Home</NavLink>
                            <NavLink to="services">Our Services</NavLink>
                            <NavLink to="testimonials">Testimonials</NavLink>
                            <NavLink to="teams">About Us</NavLink>
                            <NavLink to="meeting">Contact</NavLink>
                        </div>

                        {/* <div className="flex h-full items-end pb-[15px]">
                            <Link href="/book" className="hidden lg:flex items-center gap-1 border-2 border-[#006aff] px-5 py-2 rounded-full">
                                <span className="font-medium text-sm text-black">Schedule Consultation</span>
                                <span className="svg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 74 74"
                                        height="34"
                                        width="34"
                                    >
                                        <path
                                        fill="black"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        ></path>
                                    </svg>
                                </span>
                            </Link>
                        </div> */}
                        <div className="hidden xl:flex h-full items-end pb-[15px]">
                            <MeetingButtonSmall/>
                        </div>
                    </>
                ) : (
                    <Link href="/" className="w-full flex justify-end gap-2">
                        <div className="btn rounded-full btn-ghost border-white hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                            <p className="font-semibold text-sm text-white">Back to Home</p>
                        </div>
                    </Link>
                )}

                {/* Mobile Menu Button */}
                {pathname === "/" && (
                    <button 
                        className="xl:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="white">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </button>
                )}
            </div>

        
            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-[60%] bg-black shadow-lg transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <button 
                    className="absolute top-5 right-5"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                        <path d="M480-410 250-180l-70-70 230-230-230-230 70-70 230 230 230-230 70 70-230 230 230 230-70 70-230-230Z"/>
                    </svg>
                </button>

                <div className="flex flex-col items-start gap-6 mt-20 pl-6 text-white">
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
            duration={1600}
            offset={-90}
            onClick={onClick}
            className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-[#b1dae7] font-light whitespace-nowrap"
        >
            {children}
        </LinkTo>
    );
};


export default Navbar