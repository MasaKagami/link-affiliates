import { merriweather } from "@/styles/fonts";

const Meeting = () => {
    return(
        <div id="meeting" className="relative w-full h-full py-16 bg-white">

            <div className="absolute w-1/2 inset-0"></div>
            <div className="absolute w-1/2 inset-0 left-1/2 bg-[url('/meeting.webp')] bg-cover bg-center"></div>


            <div className="relative w-full h-full flex justify-between items-center max-w-[75%] m-auto">
                <div className="w-1/2 flex flex-col gap-8 px-16">
                    <h1 className={`text-start text-5xl font-bold ${merriweather.className}`}>
                        Book a Meeting
                    </h1>
                    <div className="flex flex-col gap-2">
                        <p>BOOK A MEETING TODAY to learn more about becoming partner. Our service is bound to grow your client base with qualified leads and close more deals. Add to our 100% client success rate and see the results for yourself.</p>
                        <p>See if you are qualified to join our program and claim your area before anyone else does!</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-base font-semibold">Book a Meeting</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </div>
                </div>
                <div className="w-1/2"></div>  
            </div>
        </div>
    )
};

export default Meeting;