import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx
// import Link from "next/link";
import MeetingButton from "../meetingButton/meetingButton";

const Landing = () => {
    return(
        <div id="home" className="relative w-full h-[calc(100vh-90px)] py-20">
            
            {/* Background Image with Blur */}
            {/* <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center "></div> */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f6fcff] via-[#c5f1fa] to-[#bad3ff] "></div>

            {/* Content with a backdrop effect */}
            <div className="relative w-full h-full flex max-w-[90%] sm:max-w-[75%] m-auto items-center ">
                {/* <div className={`flex flex-col gap-5 justify-center items-start w-full lg:w-1/2 
                    bg-white/10 backdrop-blur-lg p-8 rounded-lg 
                    shadow-[0_0_50px_rgba(173,216,230,0.5)]`}> */}
                <div className="flex flex-col gap-5 justify-center items-start w-full lg:w-1/2">
                    <h1 className={`text-4xl lg:text-5xl font-bold ${merriweather.className}`}>
                        Exclusively for Renovation and Remodelling Businesses in North America
                    </h1>
                    <p>
                        Growing local businesses&apos; clientele by generating qualified leads. Our process is simple, yet effective. 
                        Find out how we fill your schedule with new clients.
                    </p>   
                    <MeetingButton/>                    
                </div>
                <div className="w-0 lg:w-1/2">
                    {/* <Image src="/plant.png" alt="photo of a plant" height={200} width={200} className="w-full h-full object-cover bg-pink-400">
                    </Image> */}
                </div>

                {/* <div className="flex flex-col gap-5 justify-center items-start w-full lg:w-1/2 p-8 ">
                <div className="flex flex-col gap-5 justify-center items-start w-[95%] lg:w-1/2 bg-opacity-45 backdrop-blur-sm p-8 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    <h1 className={`text-4xl lg:text-5xl font-bold ${merriweather.className} `}>Exclusively for Renovation and Remodelling Businesses in North America</h1>
                    <p>Growing local businesses&apos; clientele by generating qualified leads. Our process is simple, yet effective. Find out how we fill your schedule with new clients.</p>
                    <MeetingButton/>                    
                </div>
                 */}

    

            </div>
        </div>
    )
};

export default Landing;