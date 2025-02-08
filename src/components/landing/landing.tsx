import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx
import Link from "next/link";
import MeetingButton from "../meetingButton/meetingButton";

const Landing = () => {
    return(
        <div id="home" className="relative w-full h-[calc(100vh-90px)] py-20">
            
            {/* Background Image with Blur */}
            <div className="absolute inset-0 bg-[url('/house2.webp')] bg-cover bg-center blur-sm"></div>

            {/* Content with a backdrop effect */}
            <div className="relative w-full h-full flex max-w-[90%] sm:max-w-[75%] m-auto items-center ">
                <div className="w-[5%] lg:w-1/2"></div>

                <div className="flex flex-col gap-5 justify-center items-start w-[95%] lg:w-1/2 bg-white backdrop-blur-sm p-8 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    <h1 className={`text-5xl font-bold ${merriweather.className} `}>Exclusively for Renovation and Remodelling Businesses in North America</h1>
                    <p>Growing local businesses&apos; clientele by generating qualified leads. Our process is simple, yet effective. Find out how we fill your schedule with new clients.</p>
                    <MeetingButton/>
                    
                </div>
                
            </div>
        </div>
    )
};

export default Landing;