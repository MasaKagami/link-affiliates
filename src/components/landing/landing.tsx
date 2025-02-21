import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx
// import Link from "next/link";
import MeetingButtonWhite from "../meetingButton/meetingButtonWhite";

const Landing = () => {
    return(
        <div id="home" className="relative w-full h-[calc(100vh-90px)] py-20">
            {/* Background Video */}
            <video 
                className="absolute inset-0 w-full h-full object-cover opacity-100" 
                autoPlay 
                loop 
                muted 
                playsInline
            >
                <source src="/video/waves.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>



            {/* Content with a backdrop effect */}
            <div className="relative w-full h-full flex max-w-[90%] sm:max-w-[75%] m-auto items-center ">
                <div className="flex flex-col gap-5 justify-center items-start w-full lg:w-1/2 text-white">
                    <h1 className={`text-4xl lg:text-5xl font-bold ${merriweather.className}`}>
                        Exclusively for Renovation and Remodelling Businesses in North America
                    </h1>
                    <p>
                        Growing local businesses&apos; clientele by generating qualified leads. Our process is simple, yet effective. 
                        Find out how we fill your schedule with new clients.
                    </p>   
                    <MeetingButtonWhite/>                    
                </div>
                <div className="w-0 lg:w-1/2">
                </div>
            </div>
        </div>
    )
};

export default Landing;