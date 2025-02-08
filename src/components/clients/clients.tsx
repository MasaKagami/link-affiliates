import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Clients = () => {
    return(
        <div id="clients" className="relative w-full h-full border-t border-b">

            <div className="sm:absolute w-1/2 inset-0 bg-white"></div>
            <div className="sm:absolute w-1/2 inset-0 left-1/2 "></div>

            <div className="relative w-full h-full flex flex-col sm:flex-row justify-between items-center max-w-[90%] sm:max-w-[75%] gap-10 sm:gap-0 m-auto">
                {/* title */}
                <div className="sm:w-1/2 w-full bg-gray-20 px-4 sm:px-4 lg:px-10 xl:px-16">
                    <h1 className={`mt-10 sm:mt-0 text-center sm:text-start text-5xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${merriweather.className} `}>Current Client Advertisements</h1>
                </div>
                
                {/* video */}
                <div className="sm:w-1/2 w-full text-start">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                     */}
                    <video
                        className="w-full h-auto"
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/video/clientVideo.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>                  
            </div>
        </div>
    )
};

export default Clients;