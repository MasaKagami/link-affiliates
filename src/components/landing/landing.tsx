import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Landing = () => {
    return(
        <div className="relative w-full h-[calc(100vh-90px)] py-20">
            
            {/* Background Image with Blur */}
            <div className="absolute inset-0 bg-[url('/house2.jpg')] bg-cover bg-center blur-sm"></div>

            {/* Content with a backdrop effect */}
            <div className="relative w-full h-full flex max-w-[75%] m-auto items-center ">
                <div className="w-1/2"></div>

                <div className="flex flex-col gap-5 justify-center items-start w-1/2 bg-white backdrop-blur-sm p-8 shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    <h1 className={`text-5xl font-bold ${merriweather.className} `}>Exclusively for Renovation and Remodelling Businesses in North America</h1>
                    <p>Growing local businesses&apos; clientele by generating qualified leads. Our process is simple, yet effective. Find out how we fill your schedule with new clients.</p>
                    <div className="flex gap-2">
                        <p className="text-base font-semibold">Book a Meeting</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default Landing;