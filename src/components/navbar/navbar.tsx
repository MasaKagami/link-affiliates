import Image from "next/image";
import { Link } from 'react-scroll';
const Navbar = () => {
    return(
        <nav className="sticky top-0 z-50 w-screen h-[90px] bg-white border-b-2">
            <div className="flex w-full h-full justify-start gap-20 items-center max-w-[95%] m-auto">
                <Image alt="logo" src="/logo.png" width={200} height={200} className=""/>
                <div className="hidden sm:flex justify-start gap-12 items-center h-full">
                    <Link to={"home"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Home </Link>
                    <Link to={"services"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Our Services </Link>
                    <Link to={"teams"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">About Us </Link>
                    <Link to={"testimonials"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Testimonials </Link>
                    <Link to={"home"} smooth={true} duration={700} offset={-90} className="cursor-pointer inline-flex items-end pb-[15px] h-full border-b-4 border-transparent hover:border-blue-700 whitespace-nowrap">Contact </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar